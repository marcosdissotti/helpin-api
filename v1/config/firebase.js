'use strict';
const Env = use('Env');
/*
 |--------------------------------------------------------------------------
 | Firebase
 |--------------------------------------------------------------------------
 |
 | Provide details of firebase project
 |
 */

module.exports = {

  /*
   |--------------------------------------------------------------------------
   | Firebase Admin credentials key file
   |--------------------------------------------------------------------------
   */
  credentials: Env.get('FIREBASE_CREDENTIALS'),
  /*
   |--------------------------------------------------------------------------
   | API key
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get('FIREBASE_API_KEY'),
  /*
   |--------------------------------------------------------------------------
   | Auth
   |--------------------------------------------------------------------------
   */
  authDomain: Env.get('FIREBASE_AUTH_DOMAIN'),
  /*
   |--------------------------------------------------------------------------
   | Database
   |--------------------------------------------------------------------------
   */
  databaseURL: Env.get('FIREBASE_DATABASE_URL'),
  /*
   |--------------------------------------------------------------------------
   | Hosting
   |--------------------------------------------------------------------------
   */
  storageBucket: Env.get('FIREBASE_STORAGE_BUCKET'),

  projectId: Env.get('FIREBASE_PROJECT_ID'),

  messagingSenderId: Env.get('FIREBASE_MESSAGING_SENDER_ID')

};
