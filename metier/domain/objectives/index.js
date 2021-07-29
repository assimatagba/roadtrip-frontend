import axios from 'axios'
import Objective from '../../models/Objective';

const url = "http://localhost:3000/ourObjectives"
export default {
    getAllObjectives : async (testCallback=null) => {
          try {
             const resp = await axios.get(url);
             const tab = Objective.buildArrayOfObjectives(resp.data)
             if(testCallback) {testCallback(tab)}
             return tab
          } catch (error) {
              return error
          }
    }
}