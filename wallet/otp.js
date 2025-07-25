window.onload = () => {
  render();
};

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  recaptchaVerifier.render();
}

function sendOTP() {
  const phoneNumber = document.getElementById('phone').value;
  firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      alert("OTP sent");
    }).catch(function (error) {
      alert(error.message);
    });
}

function verifyOTP() {
  const otpInput = document.getElementById('otp').value;
  confirmationResult.confirm(otpInput).then(function (result) {
    document.getElementById('wallet-section').style.display = 'block';
    alert("OTP Verified");
  }).catch(function (error) {
    alert("Invalid OTP");
  });
}

function withdraw() {
  alert("Withdraw process started...");
}
