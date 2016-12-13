# Telemetry API Experiment

[WebExtensions Experiment](https://webextensions-experiments.readthedocs.io) to implement a `browser.telemetry` API.

## Why?

When Mozilla develops an add-on, it needs access to send data to the
[Telemetry](https://wiki.mozilla.org/Telemetry) Pipeline, so we can measure its
events and effects.

## Requirements

* Firefox Developer Edition or Nightly

## Run it

### Install via `.xpi` file:

1. Build the `.xpi` file with `zip`: `zip web-ext-telemetry-api-experiment.xpi api.js install.rdf schema.json`

2. Go to `about:addons`, click "Install Add-on From File...", and choose the
   `.xpi` file

### Load the `install.rdf` file:

1. Go to `about:debugging`, click "Load Temporary Add-on", and choose the
   `install.rdf` file

### Tips

When you are working on a WebExtension add-on that uses `browser.telemetry`, it
helps to install this `.xpi` file into a special
*web-ext-telemetry-api-experiment* Firefox profile, and then use [web-ext](https://github.com/mozilla/web-ext) to run
your add-on with the profile.

    web-ext run -p /path/to/Profiles/web-ext-telemetry-api-experiment --firefox-binary /path/to/aurora|nightly
