function containsHebrew(text) {
  return /[\u0590-\u05FF]/.test(text);
}

let isRTLActive = false;
let affectedElements = new Set();
let intervalId;

function applyRTLStyles(element) {
  element.style.direction = 'rtl';
  element.style.textAlign = 'right';
  element.style.justifyContent = 'flex-end';
  affectedElements.add(element);
}

function removeRTLStyles(element) {
  element.style.direction = '';
  element.style.textAlign = '';
  element.style.justifyContent = '';
}

function handleNewElements() {
  const elements = document.body.getElementsByTagName('*');
  for (let element of elements) {
    if (!affectedElements.has(element) && element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
      if (containsHebrew(element.textContent)) {
        applyRTLStyles(element);
        if (element.parentElement) {
          applyRTLStyles(element.parentElement);
        }
      }
    }
  }
}

function toggleRTLForHebrewElements() {
  if (!isRTLActive) {
    handleNewElements(); // Apply RTL to existing elements on activation
    intervalId = setInterval(() => {
      handleNewElements(); // Check for and apply RTL to new elements
      affectedElements.forEach(applyRTLStyles); // Re-apply RTL to existing elements
    }, 500);
  } else {
    clearInterval(intervalId);
    affectedElements.forEach(removeRTLStyles);
    affectedElements.clear();
  }

  isRTLActive = !isRTLActive;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleRTL") {
    toggleRTLForHebrewElements();
  }
});