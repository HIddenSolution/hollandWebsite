// 500ms after page loads,
// clear the console.
setTimeout(() => {
  console.clear()
}, 500)

// Get the #menuIcon element.
const menuIcon = document.getElementById('menuIcon')
const smallScreenNavLinks = document.getElementById("smallScreenNavLinks")
const allSections = document.querySelectorAll(".sectionContainer")
const allSmallScreeNavLinkAnchors = document.querySelectorAll("#smallScreenNavLinks a")

function toggleNavMenu() {
  const currentDisplayValue = getComputedStyle(smallScreenNavLinks).display
  const isCurrentlyHidden = currentDisplayValue === 'none'
  const newValue =  isCurrentlyHidden ? "flex" : "none"
  smallScreenNavLinks.style.display = newValue
}

function dontScroll(event) {
  event.preventDefault()
}

function closeSmallNavLinks() {
  smallScreenNavLinks.style.display = "none"
}

menuIcon.addEventListener('click', toggleNavMenu)
smallScreenNavLinks.addEventListener("mousewheel", dontScroll)

allSmallScreeNavLinkAnchors.forEach((anchorElement) => {
  anchorElement.addEventListener("click", closeSmallNavLinks)
})