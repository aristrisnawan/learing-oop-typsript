"use strict";
describe('Static', () => {
    class Configuration {
    }
    Configuration.NAME = 'Belajar typescript OOP';
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = 'GUE';
    it('should support', () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });
});
