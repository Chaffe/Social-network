import firebase from 'firebase/app';

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    },
    async register({}, { email, password, name, fullname, birth: { day, month, year }, sex }) {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.id : null;
    },
    async logout() {
      await firebase.auth().signOut();
    },
  },
};
