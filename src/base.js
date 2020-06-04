import Rebase, { createClass } from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCMTX7jLwtEGtYulaZAgavOq2ukfsEpAs",
    authDomain: "fir-app-2011c.firebaseapp.com",
    databaseURL: "https://fir-app-2011c.firebaseio.com",
})

const base = Rebase.createClass(firebase.database());

export { firebaseApp }
export default base;