<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
// 🔒 Encryption Key (मत बदलना वरना डिक्रिप्ट नहीं होगा)
const ENC_KEY = "TubeEarnSecureKey2025";

// 🔐 Encrypted Data (तुम्हारे real values encrypted form में)
const encConfig = {
  url: "U2FsdGVkX1/BX+yPrkvm7Ff3F/0OJ4R9NMM2rtOjmvDNH/jpttEK2h03qlO+rU/2",
  key: "U2FsdGVkX1+2ERZiv+NNgG5R8XtJo3b8uZ+T5vH+ZfxjD/nDoxV1XspXx9W3Tvh2+foPshZhxeJ1neXoJXoQuQ==",
  bucket: "U2FsdGVkX19zW9lQYxyg5gR6n6i5TZyXUOQ1A3EzY40="
};

// 🔓 Decrypt Function
function getConfig() {
  return {
    SUPABASE_URL: CryptoJS.AES.decrypt(encConfig.url, ENC_KEY).toString(CryptoJS.enc.Utf8),
    SUPABASE_KEY: CryptoJS.AES.decrypt(encConfig.key, ENC_KEY).toString(CryptoJS.enc.Utf8),
    BUCKET_NAME: CryptoJS.AES.decrypt(encConfig.bucket, ENC_KEY).toString(CryptoJS.enc.Utf8)
  };
}
</script>
