

async function getAdvice() {
    //random number generator 1-100
    var random = Math.floor((Math.random()*200) +1);
    //Advice API + our random number
    const apiURL = 'https://api.adviceslip.com/advice/' + random;
    //get the data
    const response = await fetch(apiURL);
      //convert the data into JSON
      const data = await response.json();
      //write the data to the page
      document.querySelector(".adviceID").innerText = data.slip.id;
      document.querySelector(".advice").innerText = data.slip.advice;
//log the keys that are nested under data.standards
    };
//call the function
getAdvice();
//listen for button press to get more advice
document.getElementById("tellme").addEventListener("click", getAdvice);
