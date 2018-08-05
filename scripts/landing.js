window.onload = function() {
  if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener("scroll", function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
               animatePoints(pointsArray);
         }
       });
};
var pointsArray = document.getElementsByClassName('point');

function animatePoints(points){

    function revealPoint(indexNum){
      points[indexNum].style.opacity = 1;
      points[indexNum].style.transform = "scaleX(1) translateY(0)";
      points[indexNum].style.msTransform = "scaleX(1) translateY(0)";
      points[indexNum].style.WebkitTransform = "scaleX(1) translateY(0)";
    }

    for (var i = 0; i < points.length; i++){
      revealPoint(i);
      }
}
animatePoints();


/*
function loadAfterTime(){
animatePoints();
}
*/
