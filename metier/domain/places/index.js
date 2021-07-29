import axios from 'axios'
import Place from '../../models/Place';

export default {
    getSomePlaces : async (testCallback=null) => {
          try {
            const url = `${process.env.VUE_APP_FAKE_BACKEND_URL}/places`
             const resp = await axios.get(url);
             const tab = Place.buildArrayOfPlaces(resp.data)
             if(testCallback) {testCallback(tab)}
             return tab
          } catch (error) {
              return error
          }
    },
    getInputSuggestions : async(q,testCallback=null) => {
        try {
            const url = `${process.env.VUE_APP_BACKEND_URL}/googleapi/autocomplete?q=${q}`
            const resp = await axios.get(url);
            if(testCallback) {testCallback(resp.data)}
            return resp.data
         } catch (error) {
            if(testCallback) {testCallback(null)}
             return error
         }
    },
    getPlacesDetails : async(place_id,testCallback=null) => {
        try {
            const url = `${process.env.VUE_APP_BACKEND_URL}/googleapi/placeDetails/${place_id}`
            const resp = await axios.get(url);
            if(testCallback) {testCallback(resp.data)}
            return resp.data
         } catch (error) {
            if(testCallback) {testCallback(null)}
             return error
         }
    },
     
}