import './App.css';
import React from "react";
import { initializeApp } from "firebase/app";
import { signInWithPopup,signOut,getAuth,GoogleAuthProvider } from "firebase/auth";

const app=initializeApp({
  apiKey: "AIzaSyBJS4vl9KGH5qPIIGv6aMBNhV4bSMStyGs",
  authDomain: "schedular-412113.firebaseapp.com",
  projectId: "schedular-412113",
  storageBucket: "schedular-412113.appspot.com",
  messagingSenderId: "860429400662",
  appId: "1:860429400662:web:ea6b26102be323177f19f7"
});

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


function App() {
  return (
    <div className="App">
      <div className="login">
        <div className="login-screen">
          <div className="app-title">
            <h1>Login</h1>
          </div>
          <div>
            <LoginButton />
          </div>
          <div className='ErrorMessage'>
            <p>※Your GoogleAccount is not supported</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginButton(){
  const signInWithGoogle = () =>{
    signInWithPopup(auth,provider);
    const user = auth.currentUser;
    if (user) {
      const email =user.email
      const emailDomain = email.split('@')[1];
      console.log(emailDomain)
      if (emailDomain === "yamagatahigashi.jp"){
        console.log('succeed')
        window.location.assign("./home.html")
      } else {
        const logout = () => {
          console.log('error')
          signOut(auth)
            .then(() => {
              console.log("Sign-out successful.");
            })
            .catch((err) => {
              console.log(err.message);
            });
          
          const k=document.getElementsByClassName('ErrorMessage')
          if (k){
          k[0].style.display = 'block' 
          }
        };
        logout()
        console.log(auth.currentUser)
      }
    }
  }
  return (
    <button className='buttonOutline' onClick={signInWithGoogle}>
      <p>Signin With Google</p> 
    </button>
  )
}

export default App;
