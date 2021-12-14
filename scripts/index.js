// 500ms after page loads,
// clear the console.
setTimeout(() => {
  console.clear()
}, 500)

// Get the #menuIcon element.
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

function toggleNavMenu() {
  toggleDisplayValue(smallScreenNavLinks)
  toggleDisplayValue(activeMenuIcon)
}

function dontScroll(event) {
  event.preventDefault()
}

function closeSmallNavLinks() {
  smallScreenNavLinks.style.display = "none"
}

activeMenuIcon.addEventListener('click', toggleNavMenu)
menuIcon.addEventListener('click', toggleNavMenu)
smallScreenNavLinks.addEventListener("mousewheel", dontScroll)

allSmallScreeNavLinkAnchors.forEach((anchorElement) => {
  anchorElement.addEventListener("click", closeSmallNavLinks)
})