import { db } from '../firebase';

export function addUserInfo(uid, info) {
  return db.collection('users').doc(uid).set(info);
}

export function getUserInfo(uid) {
  return db.collection('users').doc(uid).get();
}
