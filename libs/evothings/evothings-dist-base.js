// File: evothings-dist-base.js
//
// Set up definitions needed by Evothings JavaScript libraries
// distribution files.
//

// Global holding everything.
window.evothings = window.evothings || {};

// Define an empty No Operation function. This function is called
// in place of async script loading, since we build a single merged file.
evothings.__NOOP_FUN__ = function() {};
