import cut from '../assets/icons/cutlery.png'
import hotel from '../assets/icons/building.png'
import culture from '../assets/icons/cultures.png'
import popular from '../assets/icons/popularity.png'
import PlacesMetier from '../../metier/domain/places'

// Import the RouteBoxer element so that window.MyRouteBoxer gives us the constructor
import '../RouteBoxer'



export default  (VUE_ELEMENT , google , map) => {

 

 const getRoute =  function (map) {
  VUE_ELEMENT.directionsService = new google.maps.DirectionsService()
  VUE_ELEMENT.directionsDisplay = new google.maps.DirectionsRenderer()
    VUE_ELEMENT.directionsDisplay.setMap(map)
    var vm = VUE_ELEMENT
    vm.directionsService.route({
      origin: VUE_ELEMENT.startingFromPosition,
      destination: VUE_ELEMENT.destinationPosition,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        vm.directionsDisplay.setDirections(response)
      } else {
        console.log('Directions request failed due to ' + status)
      }
    })
  }

  var boxpolys = null;
  var directions = null;
  var routeBoxer = null;
  var distance = null; // km
  var service = null;
  var gmarkers = [];
  var infowindow = new google.maps.InfoWindow();
  var directionService = null;
  var directionsRenderer = null;
  

    function initialize() {
        service = new google.maps.places.PlacesService(map);
        routeBoxer = new window.MyRouteBoxer();
        directionService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer({ map: map });      
      }


      const removeAllMarkers = () => {
          for (var i = 0; i < gmarkers.length; i++ ) {
            gmarkers[i].setMap(null);
          }
          gmarkers.length = 0;
      }
      
      function route() {
        // Clear any previous route boxes from the map
        // clearBoxes();
      
        // Convert the distance to box around the route from miles to km
        // distance = 30 * 1.609344;

        VUE_ELEMENT.currentShowedPlaces = []

        distance = VUE_ELEMENT.distanceBetweenPlacesAndRoad
      
        var request = {
          origin: VUE_ELEMENT.$store.state.pointAoption.description,
          destination: VUE_ELEMENT.$store.state.pointBoption.description,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        }
      
        // Make the directions request
        directionService.route(request, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
      
            // Box around the overview path of the first route
            var path = result.routes[0].overview_path;
            var boxes = routeBoxer.box(path, distance);
            // alert(boxes.length);
            // drawBoxes(boxes);
            findPlaces(boxes,0);
          } else {
            alert("Directions query failed: " + status);
          }
        });
      }
      
      
      
      // Draw the array of boxes as polylines on the map
      function drawBoxes(boxes) {
        boxpolys = new Array(boxes.length);
        for (var i = 0; i < boxes.length; i++) {
          boxpolys[i] = new google.maps.Rectangle({
            bounds: boxes[i],
            fillOpacity: 0,
            strokeOpacity: 1.0,
            strokeColor: '#000000',
            strokeWeight: 1,
            map: map
          });
        }
      }
      
      function getCorrectPlaceTypesArray(filter) {
        if(filter === "Popular") return ["tourist_attraction" , "museum" , "aquarium" , "art_gallery"  ]
        if(filter === "Foods & drinks") return ["restaurant"]
      }
      
      function getCorrectPlaceMarkerImage(filter) {
        if(filter === "Popular") return {
          url: popular,
          size: {width: 90, height: 120, f: 'px', b: 'px',},
          scaledSize: {width: 30, height: 30, f: 'px', b: 'px',},
          }
          if(filter === "Foods & drinks") return VUE_ELEMENT.restaurantsMarkerOptions
      }
      
      
      function findPlaces(boxes,searchIndex) {
         var request = {
             bounds: boxes[searchIndex],
             types: getCorrectPlaceTypesArray(VUE_ELEMENT.currentFilter)
         };
         service.nearbySearch(request, function (results, status) {
         if (status != google.maps.places.PlacesServiceStatus.OK) {
           alert("Request["+searchIndex+"] failed: "+status);
           return;
         }

         for (var i = 0, result; result = results[i]; i++) {
          VUE_ELEMENT.currentShowedPlaces.push(result)
          var marker = createMarker(result , "Popular");
         }
         searchIndex++;
         if (searchIndex < boxes.length) 
           findPlaces(boxes,searchIndex);
         });
      }
      
      // Clear boxes currently on the map
      function clearBoxes() {
        if (boxpolys != null) {
          for (var i = 0; i < boxpolys.length; i++) {
            boxpolys[i].setMap(null);
          }
        }
        boxpolys = null;
      }
      
      function createMarker(place , filter){
          var placeLoc=place.geometry.location;
          if (place.icon) {
            var image = new google.maps.MarkerImage(
                      place.icon, new google.maps.Size(71, 71),
                      new google.maps.Point(0, 0), new google.maps.Point(17, 34),
                      new google.maps.Size(25, 25));
           } else var image = null;
      
          var marker=new google.maps.Marker({
              map:map,
              icon: {
                url: place.icon,
                size: {width: 90, height: 120, f: 'px', b: 'px',},
                scaledSize: {width: 30, height: 30, f: 'px', b: 'px',},
                } ,
              // icon: getCorrectPlaceMarkerImage(VUE_ELEMENT.currentFilter) || image,
              position:place.geometry.location
          });
          var request =  {
                reference: place.reference
          };
          google.maps.event.addListener(marker,'click',function(){
              service.getDetails(request, function(place, status) {
                const addPlaceToTrip = (place) => {
                  // TODO
                  const el = document.querySelector(".gm-ui-hover-effect")
                  console.log(el)
                  if(el){
                    VUE_ELEMENT.$store.state.tripPlacesSelected.push(place)
                    el.click()
                    console.log("jdedejde")
                  }
              
                  
                }
                window.addPlaceToTrip = addPlaceToTrip
                window.place = place
  
                
                var contentStr =  ""
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                  contentStr = '<h5>'+place.name+'</h5><p>'+place.formatted_address;
                  if (!!place.formatted_phone_number) contentStr += '<br>'+place.formatted_phone_number;
                  if (!!place.website) contentStr += '<br><a target="_blank" href="'+place.website+'">'+place.website+'</a>';
                  contentStr += '<br>'+place.types+'</p>';
                  contentStr += `<br> <button onClick=window.addPlaceToTrip(window.place) class='btn btn-primary'> Add this place to my trip ! </button>`
                } else { 
                  contentStr = "<h5>No Result, status="+status+"</h5>";
                }
                infowindow.setContent(contentStr);
                infowindow.open(map,marker);
              });
      
          });
          gmarkers.push(marker);
          // var side_bar_html = "<a href='javascript:google.maps.event.trigger(gmarkers["+parseInt(gmarkers.length-1)+"],\"click\");'>"+place.name+"</a><br>";
          // document.getElementById('side_bar').innerHTML += side_bar_html;
      }
    
    return {
      initialize,
      route,
      getRoute,
      removeAllMarkers
    }
}