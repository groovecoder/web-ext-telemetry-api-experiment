const { Services } = require('resource://gre/modules/Services.jsm')
const { TelemetryController } = require('resource://gre/modules/TelemetryController.jsm')

const TELEMETRY_WEBEXTENSION = 'webextension'

function makeTimestamp (time) {
  const timestamp = typeof time !== 'undefined' ? time : Date.now()
  return Math.round((timestamp - Services.startup.getStartupInfo().process) / 1000)
}

class API extends ExtensionAPI {
  getAPI (context) {
    return {
      telemetry: {
        ping (id, object, eventName, eventTimestamp) {
          const payload = {
            timestamp: makeTimestamp(),
            extension: id,
            events: [
              {
                timestamp: makeTimestamp(eventTimestamp),
                event: eventName,
                object: object
              }
            ]
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
