// question : 1) find total distance?

let b = 5; // number of buildings
let f = 3; // number of floors
let g = 1; // distance between security gate and 1st building
// let p = [[1,2], [3,1], [4,3], [5,3]]; //number of parcels (each location represented as [a,b] where a->building and b->floor)
let p = [[1,1], [2,3], [3,2], [4,2], [5,1]]
let d = 0; // total distance

function TotDist(){
   for(let i=0;i<p.length;i++){
    if(i==0){
      d = d + (p[i][0]-1 + p[i][1]);
    }
    else{
      d = d + (p[i][0]-p[i-1][0] + p[i][1]);
    } 
   }
   return 2*(d + g)
}

console.log(TotDist());
