function sendOTP() {
    alert("OTP sent to your registered number!");
    window.location.href = "otp.html";
}

function verifyOTP() {
    const otp = document.getElementById("otp").value;
    if (otp === "123456") {
        alert("OTP Verified. Withdrawal in process.");
    } else {
        alert("Invalid OTP!");
    }
}