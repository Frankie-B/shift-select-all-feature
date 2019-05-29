// jshint esversion: 6

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// Reference to the last checked item
let lastChecked;

// EventListener to know which check box was checked
function handleCheck(e) {
  // Check to see that they have the shift key down
  // See if the input is being checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Go ahead and what we please
    // Loop over every check box
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check inbetween the checkboxes');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
