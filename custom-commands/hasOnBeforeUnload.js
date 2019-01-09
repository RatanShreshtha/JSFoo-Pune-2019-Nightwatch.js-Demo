// A custom Nightwatch command.
// The command name is the filename.
// Example usage:
//
//   browser.hasOnBeforeUnload(function(result) {})
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide/#writing-custom-commands

module.exports.command = function(callback) {
  var self = this;

  this.execute(function() {
    return window && typeof window.onbeforeunload === 'function';
  }, [], function(result) {
    callback.call(self, result.value);
  });

  return this;
};
