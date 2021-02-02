import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { promises } from 'dns';

let firebaseConfig = {
    apiKey: "AIzaSyDX_XGt5cKlMuoynJMoOmjJfLJiyBsQd1g",
    authDomain: "reactapp-39c2a.firebaseapp.com",
    databaseURL: "https://reactapp-39c2a-default-rtdb.firebaseio.com",
    projectId: "reactapp-39c2a",
    storageBucket: "reactapp-39c2a.appspot.com",
    messagingSenderId: "332514372119",
    appId: "1:332514372119:web:a2761806377a030ab04a52",
    measurementId: "G-SE9JNY6B5L"
};

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
    }

    login(email,password){
        return app.auth().signInWithEmailAndPassword9(email,password)
    }
    
    async register(nome,email,password){
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid;
        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }

}

export default new Firebase();