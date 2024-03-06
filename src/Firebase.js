import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC0iK02HrVdHi4aVcRqMPHUMImuUD03STE",
    authDomain: "gestionnaire-6d2c0.firebaseapp.com",
    projectId: "gestionnaire-6d2c0",
    storageBucket: "gestionnaire-6d2c0.appspot.com",
    messagingSenderId: "593462747494",
    appId: "1:593462747494:web:c986bd20f9b16b7202a8a7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
