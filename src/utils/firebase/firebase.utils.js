import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyt2ZE4JaT2xnyiocR-OuG0hSWHkuw_TA",
    authDomain: "dream-toyota.firebaseapp.com",
    projectId: "dream-toyota",
    storageBucket: "dream-toyota.appspot.com",
    messagingSenderId: "121397326828",
    appId: "1:121397326828:web:659bfa403084fa129fc6c9"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);