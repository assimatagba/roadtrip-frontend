import PlacesMetier from '../../../metier/domain/Places'


test('it should return Array of places suggestions', done => {
    function callback(data) {
      try {
        expect(data.predictions != null).toBe(true);
        expect(data.predictions.length != 0).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    }
  
    PlacesMetier.getInputSuggestions("rue du faubourg",callback);
  });