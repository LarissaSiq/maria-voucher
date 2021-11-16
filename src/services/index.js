import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';
import { getAuth, updateProfile } from "firebase/auth";

const fs = firebase.initializeApp(firebaseConfig);
const db = fs.firestore();

export const loginPage = (email, password) => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
};

export const registerPage = (email, password) => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
};

export const signInGoogleAccount = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider);
};

export const logout = () => {
  return firebase
    .auth()
    .signOut()
};

export const getName = (name) => {
  const auth = getAuth();
  return updateProfile(auth.currentUser, {
    displayName: name,
  })
};

export const createVoucher = (voucher) => {
  return firebase
    .firestore()
    .collection('vouchers')
    .add(voucher);
};

export const getVoucher = () => {
  const getVoucher = firebase.firestore().collection('vouchers')
  return getVoucher.get()
}