import { db } from './clientConfig';

export const connectDB = (ref, onValid = () => {}, onInvalid = () => {}) => {
  db.ref(ref).on('value', snapshot => {
    if (snapshot.val()) {
      onValid(snapshot.val(), snapshot);
    } else {
      onInvalid(snapshot.val(), snapshot);
    }
  });
};

const RTDBFactory = ref => {
  const dbRef = db.ref(ref);
  const insert = (path = '/', data) => dbRef.child(path).set(data);

  const find = (path = '/') =>
    dbRef
      .child(path)
      .once('value')
      .then(snapshot => snapshot.val());

  return {
    insert,
    find,
  };
};

export default RTDBFactory;
