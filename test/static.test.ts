describe('Static', () => {
    class Configuration {
        static NAME: string = 'Belajar typescript OOP';
        static VERSION: number = 1.0;
        static AUTHOR: string = 'GUE';
    }
  it('should support', () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
})
