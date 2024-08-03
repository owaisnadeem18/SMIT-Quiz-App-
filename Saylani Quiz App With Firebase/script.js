import {
  auth,
  getAuth,
  GoogleAuthProvider,
  GoogleProvider,
  signInWithPopup,
} from "./firebase.js";

// Creating a function of google sign in

function GoogleLogin() {
  signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // IdP data available using getAdditionalUserInfo(result)

      // The signed-in user info.

      const user = result.user;

      const userName = user.displayName; // This is the name of the user according to google account

      // Here, I am accessing the google account photo of our user...

      const profice_pic = user.photoURL;

      console.log("Token : ", token);
      console.log("User :", user);

      // Now let's save it into the session storage
      sessionStorage.setItem("userName", userName);

      // Now let's save the link of this img into the session storage
      sessionStorage.setItem("UserprofilePhoto", profice_pic);

      window.location.href = "./Local Storage in JavaScript/dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log("error : ", errorCode, credential);
    });
}

let GoogleBtn = document.getElementById("GoogleBtn");

GoogleBtn.addEventListener("click", GoogleLogin);
