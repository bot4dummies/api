'use strict';

const Bool = require('booljs');

// Here is where magic happens
module.exports = (async () => {
    try {
        return new Bool('com.bot4dummies.api')
          .run();
    } catch (error) {
        console.error(error);
    }
})();
