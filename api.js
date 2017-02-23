const {utils: Cu} = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/TelemetryController.jsm");

const TELEMETRY_WEBEXTENSION = 'webextension'

function makeTimestamp (time) {
  const timestamp = time !== undefined ? time : Date.now()
  return Math.round((timestamp - Services.startup.getStartupInfo().process) / 1000)
}

class API extends ExtensionAPI {
  getAPI (context) {
    return {
      telemetry: {
        event (category, method, object) {
          const payload = {
            timestamp: makeTimestamp(),
            category: 'testpilot.blok',
            method: method,
            object: object
          }
          TelemetryController.submitExternalPing(
            TELEMETRY_WEBEXTENSION,
            payload,
            { addClientId: true, addEnvironment: true }
          )
        }
      }
    }
  }
}
