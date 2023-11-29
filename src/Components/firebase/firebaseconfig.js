import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAMJfayDen9Iwz5zFKkFUd5zNO1fhwYx5c",
  authDomain: "my-portfolio-644dd.firebaseapp.com",
  projectId: "my-portfolio-644dd",
  storageBucket: "my-portfolio-644dd.appspot.com",
  messagingSenderId: "765049522485",
  appId: "1:765049522485:web:dc45a8d23d5203c593a47c"
};

export const app = initializeApp(firebaseConfig);
const firebaseStore=getFirestore(app);
const storage= getStorage(app)
const FirebaseContext= createContext(null);
export const useFirebase=()=> useContext(FirebaseContext);

export const FirebaseProvider=(props)=>{

  const handleFormData=async(name,email,phone, subject)=>{
    return await addDoc(collection(firebaseStore, 'data'), {
    name,
    email,
    phone,
    subject
    })
    
    };
return   <>
    <FirebaseContext.Provider value={{handleFormData}}>{props.children}</FirebaseContext.Provider>
 </>
}