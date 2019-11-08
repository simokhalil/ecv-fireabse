import { auth } from './firebase';

export function createUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signout() {
  return auth.signOut();
}
