// Your Firebase configuration must be initialized before this
// Make sure firebase-app.js and firebase-auth.js are included

window.onload = function () {
  render();
};

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'normal',
    'callback': function (response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log("reCAPTCHA Verified");
    },
    'expired-callback': function () {
      console.log("reCAPTCHA expired");
    }
  });
  recaptchaVerifier.render();
}

function phoneAuth() {
  var number = "+918409012982"; // Static test number from Firebase
  // Firebase method to send OTP
  firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent Successfully!");
    }).catch(function (error) {
      alert(error.message);
    });
}

function verifyOTP() {
  var code = "880409"; // Static OTP for test number
  confirmationResult.confirm(code)
    .then(function (result) {
      var user = result.user;
      alert("User Verified Successfully!");
      // Optionally redirect or show wallet here
    }).catch(function (error) {
      alert("OTP Invalid: " + error.message);
    });
}
