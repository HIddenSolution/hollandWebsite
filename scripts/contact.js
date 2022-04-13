
/**
 * When the form is submitted, we need to get the
 * data out of the form and send it off to our API
 * to send the contact email.
 */

 const contactForm = document.getElementById("contactForm")
 const contactFormButton = document.getElementById("contactFormButton")
 const contactFirstNameInput = document.getElementById("contactFirstNameInput")
 const contactLastNameInput = document.getElementById("contactLastNameInput")
 const textareaInput = document.getElementById("textareaInput")
 const contactEmailAddressInput = document.getElementById("contactEmailAddressInput")
 const contactSuccessMessage = document.getElementById("contactSuccessMessage")
 
 const store = {
   lastContactSubmitTime: 1639614273254,
 }
 
 const handleContactFormButtonClick = async (event) => {
   // Throttle form submissions.
   const lastSubmittedTime = localStorage.getItem("lastContantSubmitTime")
   const nowTime = Date.now()
   const timeDifference = nowTime - lastSubmittedTime
 
   // If lastSubmittedTime is falsey, that means the form
   // has never been submitted from this browser.
   if (lastSubmittedTime && timeDifference < 30000) return
 
   localStorage.setItem("lastContantSubmitTime", nowTime)
 
   const firstName = contactFirstNameInput.value
   const lastName = contactLastNameInput.value
   const emailAddress = contactEmailAddressInput.value
   const message = textareaInput.value
 
   await fetch("/api/contact", {
     method: "POST",
 
     headers: {
       "Content-Type": "application/json",
     },
 
     body: JSON.stringify({
       firstName,
       lastName,
       emailAddress,
       message,
     }),
   })
 
   contactFirstNameInput.value = ""
   contactLastNameInput.value = ""
   textareaInput.value = ""
   contactEmailAddressInput.value = ""
   toggleDisplayValue(contactSuccessMessage)
 }
 
 contactFormButton.addEventListener("click", handleContactFormButtonClick)
 