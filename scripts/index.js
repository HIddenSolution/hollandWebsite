// 500ms after page loads,
// clear the console
// setTimeout(console.clear, 500)

const html = document.querySelector('html')
const menuIcon = document.getElementById('menuIcon')
const activeMenuIcon = document.getElementById('activeMenuIcon')
const smallScreenNavLinks = document.getElementById("smallScreenNavLinks")
const allSections = document.querySelectorAll(".sectionContainer")
const allSmallScreeNavLinkAnchors = document.querySelectorAll("#smallScreenNavLinks a")

function toggleDisplayValue (targetElement) {
  const currentDisplayValue = getComputedStyle(targetElement).display
  const isCurrentlyHidden = currentDisplayValue === 'none'
  const newValue =  isCurrentlyHidden ? "flex" : "none"
  targetElement.style.display = newValue
}

function getDisplayValue(targetElement) {
  return getComputedStyle(targetElement).display
}

function toggleNavMenu(event) {
  event.stopPropagation()
  toggleDisplayValue(smallScreenNavLinks)
  toggleDisplayValue(activeMenuIcon)
  
  const newDisplayValue = getDisplayValue(smallScreenNavLinks)
  const isOpen = newDisplayValue === 'flex'

  isOpen
    ? document.addEventListener('click', handleDocumentClick)
    : document.removeEventListener('click', handleDocumentClick)
}

function dontScroll(event) {
  event.preventDefault()
}

function closeSmallNavLinks() {
  smallScreenNavLinks.style.display = "none"
}

function handleDocumentClick(event) {
  const isMenuOpen = smallScreenNavLinks.style.display === "flex"

  if (isMenuOpen) {
    const wasClickOutsideMenu = !smallScreenNavLinks.contains(event.target)
    wasClickOutsideMenu && closeSmallNavLinks()
  }
}

activeMenuIcon.addEventListener('click', toggleNavMenu)
menuIcon.addEventListener('click', toggleNavMenu)
smallScreenNavLinks.addEventListener("mousewheel", dontScroll)

allSmallScreeNavLinkAnchors.forEach((anchorElement) => {
  anchorElement.addEventListener("click", closeSmallNavLinks)
})

// Handle service block clicks / popups.

function toggleElementScrollable(targetElement) {
  const isScrollable =  targetElement.getAttribute('data-scrollable')
  const newValue = isScrollable ? 'false' : 'true'
  targetElement.setAttribute('data-scrollable', newValue)
}

const serviceBlocks = document.querySelectorAll(".serviceBlock")

function openServicePopup(event) {
  // Grab the element with class="popup" is a child of the serviceBlock
  // element that was clicked.
  const popupElement = event.currentTarget.querySelector('.popup')
  // Turn off scrolling on the document's HTML element, since the
  // popup element will handle its own scrolling.
  toggleElementScrollable(html)
  // Show the popup element.
  toggleDisplayValue(popupElement)
}

serviceBlocks.forEach((serviceBlock) => {
  serviceBlock.addEventListener('click', openServicePopup)
})