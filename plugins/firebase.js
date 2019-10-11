import firebase from 'firebase';
import 'firebase/storage'
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyABaVA-NUnxJaTER4sBvzDghJOy_Sr7qqQ",
        authDomain: "prolabo-59231.firebaseapp.com",
        databaseURL: "https://prolabo-59231.firebaseio.com",
        projectId: "prolabo-59231",
        storageBucket: "prolabo-59231.appspot.com",
        messagingSenderId: "43981448033",
        appId: "1:43981448033:web:8bddcea60bfc551989db20",
        measurementId: "G-D8J4D3VC22"
    })
}

export default firebase