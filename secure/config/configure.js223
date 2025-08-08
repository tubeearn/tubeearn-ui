// location: secure/config/configuration.js

// AES Decryption function using CryptoJS
function decrypt(text, secretKey) {
  const CryptoJS = window.CryptoJS || null;
  if (!CryptoJS) throw new Error("CryptoJS library is missing");

  const bytes = CryptoJS.AES.decrypt(text, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Secret key - इसको मत बदलना, ये जरूरी है दोनों फाइल में एक जैसा होना चाहिए
const SECRET_KEY = 'TubeEarnSecret1234';

// एन्क्रिप्टेड API URL और API KEY
const encryptedConfig = {
  SUPABASE_URL: "U2FsdGVkX19kJsJ1kmJoDUGAGHRPN3N2KaQxw26DFyI=",
  SUPABASE_API_KEY: "U2FsdGVkX18IF7yVu4qEtcDc/kPqCScvIUl+hHuJ3+IHLMLcnxMyEl1SWHVq30i0"
};

function getConfig() {
  return {
    SUPABASE_URL: decrypt(encryptedConfig.SUPABASE_URL, SECRET_KEY),
    SUPABASE_API_KEY: decrypt(encryptedConfig.SUPABASE_API_KEY, SECRET_KEY)
  };
}
