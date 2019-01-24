import firebase from 'firebase/app'
import 'firebase/storage'

let config = {
  apiKey: "AIzaSyAJET3MCEXa6uOodPctCRa7fE6b3OJm3Tw",
  authDomain: "contraban-228c2.firebaseapp.com",
  databaseURL: "https://contraban-228c2.firebaseio.com",
  projectId: "contraban-228c2",
  storageBucket: "contraban-228c2.appspot.com",
  messagingSenderId: "888173034506"
};
firebase.initializeApp(config)

const app = firebase.storage()

export {
  app, firebase as default
}
