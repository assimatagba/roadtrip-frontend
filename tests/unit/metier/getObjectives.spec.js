import ObjectivesMetier from '../../../metier/domain/objectives'
import Objective from '../../../metier/models/Objective';

test('it should return Array of Objectives', done => {
  function callback(data) {
    try {
      expect(data[0] instanceof Objective || data.length == 0).toBe(true);
      done();
    } catch (error) {
      done(error);
    }
  }

  ObjectivesMetier.getAllObjectives(callback);
});