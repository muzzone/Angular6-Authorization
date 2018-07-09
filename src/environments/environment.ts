// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAkyfrwCvVGH4_JfLdK2ycKAyzG3H6dV_A",
    authDomain: "ng-6-test.firebaseapp.com",
    databaseURL: "https://ng-6-test.firebaseio.com",
    projectId: "ng-6-test",
    storageBucket: "ng-6-test.appspot.com",
    messagingSenderId: "998619900216"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
