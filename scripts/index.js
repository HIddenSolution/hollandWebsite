// 500ms after page loads,
// clear the console
// setTimeout(console.clear, 500)

const html = document.querySelector('html')
const menuIcon = document.getElementById('menuIcon')
const activeMenuIcon = document.getElementById('activeMenuIcon')
const smallScreenNavLinks = document.getElementById("smallScreenNavLinks")
const allSections = document.querySelectorAll(".sectionContainer")
const allSmallScreeNavLinkAnchors = document.querySelectorAll("#smallScreenNavLinks a")
const inner = document.querySelector('#serviceBlocksContainer .inner')
const serviceBlocks = document.querySelectorAll(".serviceBlock")
const viewAllServicesButtons = document.querySelectorAll('.viewAllServicesButton')

function toggleDisplayValue (targetElement, displayValue = "flex") {
  const currentDisplayValue = getComputedStyle(targetElement).display
  const isCurrentlyHidden = currentDisplayValue === 'none'
  const newValue =  isCurrentlyHidden ? displayValue : "none"
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

function showServiceDetails(event) {
  const serviceBlocksContainer = document.querySelector('#serviceBlocksContainer')
  const popup = event.currentTarget.querySelector('.popup')
  popup.originalParent = event.currentTarget
  toggleDisplayValue(popup)
  toggleDisplayValue(inner, "grid")
  serviceBlocksContainer.prepend(popup)
}

serviceBlocks.forEach((serviceBlock) => {
  serviceBlock.addEventListener('click', showServiceDetails)
})

viewAllServicesButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const ancestorPopup = button.closest('.popup')
    toggleDisplayValue(ancestorPopup)
    ancestorPopup.originalParent.append(ancestorPopup)
    toggleDisplayValue(inner, "grid")
  })
})

//

//

//

//

// Logic for service block clicking shit.
