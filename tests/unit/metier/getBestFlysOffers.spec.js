import FlysMetier from '../../../metier/domain/flys'
import FlyOffer from '../../../metier/models/FlyOffer';

test('it should return Array of FlyOffer', done => {
  function callback(data) {
    try {
      expect(data[0] instanceof FlyOffer || data.length == 0).toBe(true);
      done();
    } catch (error) {
      done(error);
    }
  }

  FlysMetier.getBestFlysOffers(callback);
});