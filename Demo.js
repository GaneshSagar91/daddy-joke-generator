const jokeEle = document.getElementById("joke");
const btnEle = document.getElementById("btn");



const apiKey = "Psqwz9JuBmANg4/KIcAxNQ==M3Tx3lyMjyKkqJmm";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method:"GET",
  headers:{"X-Api-Key": apiKey}
};

async function generateJoke(){

  jokeEle.innerText = "Updating...."

  btnEle.disabled = true;
  btnEle.innerText = "Loading...";

  let data = await fetch(apiURL, options);
  let joke = await data.json();

  
  btnEle.innerText = "Tell me a joke";
  btnEle.disabled = false ;
  jokeEle.innerText = joke[0].joke ;
  

  // console.log(joke[0].joke);
  // console.log(data);
}

btnEle.addEventListener("click",generateJoke);  