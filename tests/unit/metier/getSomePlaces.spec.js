import PlacesMetier from '../../../metier/domain/Places'
import Place from '../../../metier/models/Place';

test('it should return Array of Places', done => {
  function callback(data) {
    try {
      expect(data[0] instanceof Place  || data.length == 0).toBe(true);
      done();
    } catch (error) {
      done(error);
    }
  }

  PlacesMetier.getSomePlaces(callback);
});