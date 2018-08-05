

function loadAfterTime(){


    var points = document.getElementsByClassName('point');


    function revealPoint(indexNum){
      points[indexNum].style.opacity = 1;
      points[indexNum].style.transform = "scaleX(1) translateY(0)";
      points[indexNum].style.msTransform = "scaleX(1) translateY(0)";
      points[indexNum].style.WebkitTransform = "scaleX(1) translateY(0)";
    }

    for (var i = 0; i < points.length; i++){
      revealPoint(i);
      }


};

window.onload = function() {
  setTimeout(loadAfterTime, 250)
};
