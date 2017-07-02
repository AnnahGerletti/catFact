// the const varable that can never be changed. better to use for things you don't want to acidentlly change.
// const catfact =
// const url =

document.addEventListener('DOMContentLoaded', start)
//add eventlisteners after content in loaded
function start () {
  document.getElementById("goodbutton").addEventListener("click", tallyCountGood)
  document.getElementById("badbutton").addEventListener("click", tallyCountBad)
  newCatFact()

photocycle()

}

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
  // on click
    function newCatFact(){

      var randomfact = getRandomInt(1, 622);
      var url = 'http://www.catfact.info/api/v1/facts.json?page=' + randomfact + '&per_page=1';//randomfact is a random page number
console.log(url)
      // API fetch function to retreve info from outside source
      fetch(url).then(function(response) {
          return response.json(); // transforms the data into json
      }).then(function(data) { //can ulter the data how you want it to look
          document.getElementById("catfact").innerText = data.facts[0].details;
          console.log(data);
      }).catch(function() {
          console.log("booo");
      });
    }

// set url to a var then used .slice to select specific objects from the api array
//
  // h4.addEventListener("click",newFact);
  // function newFact(){
