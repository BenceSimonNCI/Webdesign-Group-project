/* =============================================================
   booking.js - Booking page (form validation)
   Owner: Member 4

   DONE (starter, to show the pattern):
     * the NAME field is fully validated - copy this pattern
       for the other fields
     * submitting checks every field and stops if any fail

   TODO (Member 4):
     * add a check function for each other field, e.g.
         email   - looks like name@site.com
         phone   - optional, but digits/spaces/+ only if filled
         date    - not in the past, not a Monday (we're closed)
         guests  - within limits for the chosen package
         terms   - must be ticked
     * live price in #calcTotal / #calcNote when package/guests change
     * prefill the form from booking.html?game=<id> or ?event=<id>
     * on success: show a summary + fake booking reference in
       #bookingFeedback, then reset the form
     * put error messages in js/lang/booking.js (err: {...}) and
       use ARC_I18N.t('booking.err.nameShort') instead of English text
   ============================================================= */


/* -------------------------------------------------------------
   SHOW / CLEAR AN ERROR UNDER A FIELD
   Every input has an id (e.g. "bName") and an empty <p> under
   it with the same id + "Error" (e.g. "bNameError").
   message = '' means "this field is fine".
   ------------------------------------------------------------- */
function showFieldResult(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorBox = document.getElementById(fieldId + 'Error');

  errorBox.textContent = message;

  if (message === '') {
    field.classList.remove('arc-field-error');
    field.classList.add('arc-field-valid');      // green border (base.css)
    field.removeAttribute('aria-invalid');
  } else {
    field.classList.remove('arc-field-valid');
    field.classList.add('arc-field-error');      // red border (base.css)
    field.setAttribute('aria-invalid', 'true');  // screen readers announce it
    field.setAttribute('aria-describedby', fieldId + 'Error');
  }
}


/* -------------------------------------------------------------
   CHECK ONE FIELD - NAME (the example to copy)
   Returns true if valid, false if not.
   ------------------------------------------------------------- */
function checkName() {
  const value = document.getElementById('bName').value.trim();

  if (value === '') {
    showFieldResult('bName', 'Please enter your name.');
    return false;
  }
  if (value.length < 2) {
    showFieldResult('bName', 'Your name needs at least 2 letters.');
    return false;
  }

  showFieldResult('bName', '');
  return true;
}

// TODO: function checkEmail() { ... }  (same shape as checkName)


/* -------------------------------------------------------------
   SUBMIT
   preventDefault() stops the browser reloading the page, so we
   can show our own messages instead.
   ------------------------------------------------------------- */
function handleBookingSubmit(event) {
  event.preventDefault();

  // Run every check (not just until the first failure), so the
  // visitor sees all problems at once.
  const nameOk = checkName();
  // const emailOk = checkEmail();   <- add each new check here

  const allOk = nameOk; // later: nameOk && emailOk && ...

  if (!allOk) {
    // Jump to the first field that has an error.
    document.querySelector('.arc-field-error').focus();
    return;
  }

  // TODO: success message in #bookingFeedback
}


/* -------------------------------------------------------------
   START-UP
   'blur' = the visitor leaves the field (clicks/tabs away).
   ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('bookingForm').addEventListener('submit', handleBookingSubmit);
  document.getElementById('bName').addEventListener('blur', checkName);
});
