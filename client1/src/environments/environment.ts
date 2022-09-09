// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const appcodes = {
  alignment: "spm-alignment-web",
  master: "spm-master",
};

export const appUrl = "http://184.168.124.155";
export const authUrl = "http://localhost:9091";

export const environment = {
  production: false,
  alignmentUrl: `${appUrl}${appcodes.alignment}`,
  commonUrl: `${appUrl}`,
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
