Package.describe({
  summary: " Easy video chat in Meteor using WebRTC ",
  version: "1.0.0",
  git: "https://github.com/pchab/webrtc-videochat.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('pchab:webrtc-videochat.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pchab:webrtc-videochat');
  api.addFiles('pchab:webrtc-videochat-tests.js');
});
