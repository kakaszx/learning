//retornando elementos pelo id

//utilizando o getElementById()
const getId = document.getElementById("vingadores");
console.log(getId);

//utilizando o document.querySelector()
const queryId = document.querySelector("#vingadores");
console.log(queryId);

// pegando pela class
const getClass1 = document.getElementsByClassName("nome");
console.log(getClass1);
console.log(getClass1[2].textContent);
getClass1[2].textContent = "Hulk";

const getClass2 = document.querySelector(".nome");
console.log(getClass2);

const getTag1 = document.getElementsByTagName("td");
console.log(getTag1);

const getTag2 = document.getElementsByTagName("tr");
console.log(getTag2);
