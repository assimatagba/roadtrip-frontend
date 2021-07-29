import axios from 'axios'
import FlyOffer from '../../models/FlyOffer';

const url = "http://localhost:3000/bestFlyOffers"
export default {
    getBestFlysOffers : async (testCallback=null) => {
          try {
             const resp = await axios.get(url);
             const tab = FlyOffer.buildArrayOfFlyOffers(resp.data)
             if(testCallback) {testCallback(tab)}
             return tab
          } catch (error) {
              return error
          }
    }
}