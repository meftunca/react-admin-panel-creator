import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  messagingSenderId: "500324347362"
});
const messaging = initializedFirebaseApp.messaging();
const getToken = async () => await messaging.getToken();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BDVsnUKWTX5NdFO6QbpXik9zag82HsW4Of7WbsH2ITlEup5DOBYM540GP-7MHxIReCKqrutvObA4K2mvVeS7OWg"
);
export { messaging, initializedFirebaseApp, getToken };
