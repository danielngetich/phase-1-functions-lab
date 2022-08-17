function distanceFromHqInBlocks(distance){
    if (distance>=42){
    return distance%42;
     }else {
        return 42%distance;
     }
}

function distanceFromHqInFeet(distance){
   if (distance>=42){
      return (distance%42)*264;
       }else {
          return (42%distance)*264;
       }
}
function distanceTravelledInFeet(a,b){
 if (a>b){
   return ((a-b)*264);
 }else return ((b-a)*264);
}

function calculatesFarePrice(a,b){
   if (a>b){
      distanceTravelledInFeet= ((a-b)*264);
    }else distanceTravelledInFeet= ((b-a)*264);

if (distanceTravelledInFeet<400){
   return 0;
}else if (distanceTravelledInFeet>=400 && distanceTravelledInFeet<2000){
   return ((distanceTravelledInFeet-400)*0.02)

}else if (distanceTravelledInFeet>=2000&&distanceTravelledInFeet<=2500){
   return 25;
}else return 'cannot travel that far';
}
