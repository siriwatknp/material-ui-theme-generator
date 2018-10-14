import firebase from 'firebase/app';
import 'firebase/database';

const developmentConfig = {
  apiKey: 'AIzaSyCOEUP0WenLSE0T-cjRNa6m7oqMSI6tq3M',
  databaseURL: 'https://react-app-ce8ba.firebaseio.com',
  projectId: 'react-app-ce8ba',
};

const fireBaseApp = firebase.initializeApp(developmentConfig);

export const db = fireBaseApp.database();
