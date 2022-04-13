const hideElement = (element) => {
  element.style.display = 'none'
}

const showElement = (element) => {
  element.style.display = 'initial'
}

const steps = document.getElementsByClassName('step')
const instantQuoteSection = document.getElementById('instantQuote')
const nextButtons = instantQuoteSection.querySelectorAll('.nextButton')
const backButtons = instantQuoteSection.querySelectorAll('.backButton')

const step1 = steps[0]
const step1NextButton = nextButtons[0]

const step2 = steps[1]
const step2NextButton = nextButtons[1]

const step3 = steps[2]
const step3NextButton = nextButtons[2]

// Hide step2 and step3.
hideElement(step2)
hideElement(step3)

// initialize state

const state = mobx.observable({
  step: 0,

  // step1 values
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
  contactMethod: '',
  selectedService: null,

  // step2 values...
  // step3 values...
})

mobx.autorun(() => {
  if (state.step === 0) {
    console.log('now on step index 0 (step1 lol)')
    showElement(step1)
    hideElement(step2)
    hideElement(step3)
  }
})

mobx.autorun(() => {
  if (state.step === 1) {
    console.log('now on step index 1 (step2 lol)')
    hideElement(step1)
    showElement(step2)
    hideElement(step3)
  }
})

mobx.autorun(() => {
  if (state.step === 2) {
    console.log('now on step index 2 (step3 lol)')
    hideElement(step1)
    hideElement(step2)
    showElement(step3)
  }
})

// handle step1NextButton "click" event.
step1NextButton.addEventListener('click', () => {
  const firstNameInput = document.getElementById('quoteFirstNameInput')
  const lastNameInput = document.getElementById('quoteLastNameInput')
  const phoneNumberInput = document.getElementById('quotePhoneNumberInput')
  const emailAddressInput = document.getElementById('quoteEmailAddressInput')
  const contactMethodSelect = document.getElementById('contactMethodSelect')
  const serviceSelect = document.getElementById('serviceSelect')

  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const phoneNumber = phoneNumberInput.value
  const emailAddress = emailAddressInput.value
  const contactMethod = contactMethodSelect.value
  const selectedService = serviceSelect.value

  state.firstName = firstName
  state.lastName = lastName
  state.phoneNumber = phoneNumber
  state.emailAddress = emailAddress
  state.contactMethod = contactMethod
  state.selectedService = selectedService

  state.step = 1
})

// handle step2NextButton "click" event.
step2NextButton.addEventListener('click', () => {
    state.step = 2
})

// handle all backButton clicks
// iterate over each backButton
// add event listener

for (const button of backButtons) {
  button.addEventListener('click', () => {
    console.log('current step: ', state.step)
    console.log("next step:", state.step - 1)
    state.step = state.step - 1
  })
}

