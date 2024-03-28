import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJS4vl9KGH5qPIIGv6aMBNhV4bSMStyGs",
  authDomain: "schedular-412113.firebaseapp.com",
  projectId: "schedular-412113",
  storageBucket: "schedular-412113.appspot.com",
  messagingSenderId: "860429400662",
  appId: "1:860429400662:web:ea6b26102be323177f19f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};
