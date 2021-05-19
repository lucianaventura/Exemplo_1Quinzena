import	firebase	from	'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyC3if76aRJmP-Z61D6-RsaaXXsk0lOD8HM",
    authDomain: "lista2-49f5b.firebaseapp.com",
    projectId: "lista2-49f5b",
    storageBucket: "lista2-49f5b.appspot.com",
    messagingSenderId: "313441161767",
    appId: "1:313441161767:web:2a496ee57abc7498523402"
  };
  
  
  
  let app = firebase.initializeApp(firebaseConfig);
  export const db  = firebase.firestore()//app.database();
