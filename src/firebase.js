import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCpW5kKjou_xeD1W4nDDHAUd4Fs3AOGaGk",
  authDomain: "react-slack-clone.firebaseapp.com",
  databaseURL: "https://react-slack-clone-baad7.firebaseio.com/",
  projectId: "react-slack-clone-baad7",
  storageBucket: "react-slack-clone-baad7.appspot.com",
  messagingSenderId: "423395756405"
};
firebase.initializeApp(config);

export default firebase;
