const person = document.getElementById("person");
const email = document.getElementById("email");
const username = document.getElementById("username");
const avatar = document.getElementById("avatar");
const ticket = document.getElementById("ticket");

async function useFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function initData() {
  const url = "https://randomuser.me/api/";
  const { results } = await useFetch(url);
  configureNumber();
  configureNames(results[0]);
}

function configureNames(results) {
  console.log(results);
  person.innerText = `${results.name.first} ${results.name.last}`;
  person.title = person.innerText;
  email.innerText = results.email;
  username.innerText = person.innerText;
  avatar.src = results.picture.thumbnail;
}

function configureNumber() {
  ticket.innerText =  `#${ Math.floor(Math.random() * 99999)}`;
}
initData();
