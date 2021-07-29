import PlacesMetier from '../../metier/domain/places'
const redirectUserToSelectPointsAandB = (VUE_ELEMENT) => {
    VUE_ELEMENT.$buefy.dialog.alert({
      message: "Please choose starting and arriving point !",
      type: 'is-danger',
      hasIcon: true,
      icon: 'times-circle',
      iconPack: 'fa',
      ariaRole: 'alertdialog',
      ariaModal: true
   })
    VUE_ELEMENT.$router.push({ path: `/` })
    setTimeout(() => {
    console.clear()
    }, 2000);
  return
}

export default (VUE_ELEMENT) => {

 const redirectUserIfStartOrDestionationPointIsNotDefined = () => {
      const isPointAandBNotSelected = !VUE_ELEMENT.$store.state.pointAoption && !VUE_ELEMENT.$store.state.pointBoption
      if(isPointAandBNotSelected) redirectUserToSelectPointsAandB(VUE_ELEMENT)
 }

 const getStartAndDestinationPlaceDetails = async () => {
    const placeAdetails = await PlacesMetier.getPlacesDetails(VUE_ELEMENT.$store.state.pointAoption.place_id)
    const placeBdetails = await PlacesMetier.getPlacesDetails(VUE_ELEMENT.$store.state.pointBoption.place_id)
    return [placeAdetails , placeBdetails]
 }

 const getPlaceLocationFromPlaceDetails = (placeDetails) => placeDetails.result.geometry.location

    return {
      redirectUserIfStartOrDestionationPointIsNotDefined , 
      getStartAndDestinationPlaceDetails , 
      getPlaceLocationFromPlaceDetails,
    }
}