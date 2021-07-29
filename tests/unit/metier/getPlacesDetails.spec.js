import PlacesMetier from '../../../metier/domain/Places'
import Place from '../../../metier/models/Place';

test('it should return place details for lille', done => {
  function callback(data) {
    try {
      // expect(data[0] instanceof Place  || data.length == 0).toBe(true);
      console.log(data)
      expect(data.result.geometry.location.lat).toEqual(50.612743)
      done();
    } catch (error) {
      done(error);
    }
  }

  PlacesMetier.getPlacesDetails("ChIJgYhLMsfVwkcRNI7-txYAMqI",callback);
});