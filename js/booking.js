/* =============================================================
   booking.js - Booking page
   Owner: Member 4
   DONE (starter): form skeleton in booking.html, IDs follow the
   pattern <field> / <field>Error used below.
   TODO (Member 4):
     * custom validation per field (name length, email, phone,
       no past dates, closed Mondays, guests within package
       limits, terms checked) -> write message into
       #<id>Error, toggle arc-field-error / arc-field-valid,
       set aria-invalid + aria-describedby
     * validate on blur, re-validate on input once errored,
       focus + scroll to first invalid on submit
     * live price: package x guests into #calcTotal + #calcNote
     * prefill from ?game= / ?event= (data ids in js/data/)
     * success: show summary in #bookingFeedback (alert-success),
       fake booking reference, reset the form
     * error text via ARC_I18N.t('booking.err.*')
   ============================================================= */

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('bookingForm');
    if (!form) { return; }
    form.addEventListener('submit', function (e) {
      e.preventDefault(); /* validation to be implemented */
    });
  });
})();
