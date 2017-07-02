// var classCycle=['image1','image2','image3','image4'];
//
// console.log('here');
// document.body.classList='image1';
var classCycle=['image1','image2','image3','image4'];
var imgcount=0
console.log('here');


function photocycle(){
  imgcount++;
  if(imgcount>=classCycle.length){
    imgcount=0;
  }
  document.body.classList=classCycle[imgcount]

}
