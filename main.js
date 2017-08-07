let myBody = '';
let myHeader = '';
let headerH1 = '';
let theBasics = '';
let theStory = '';
let userIcon = '';
let token = {
  daxxon:'34701b01614fe7de8fae776746bc4473188fe671'
};
let name = '';
let gitHubUrl = '';
let emailAddress = '';
let company = '';
let website = '';


function renderPageElements() {
  myBody = document.querySelector('body');
  myHeader = document.createElement('header');
  myBody.appendChild(myHeader);
  headerH1 = document.createElement('h1');
  myHeader.appendChild(headerH1);
  theBasics = document.createElement('div');
  theBasics.id = 'theBasics';
  theBasics.appendChild(document.createElement('h3'));
  theStory = document.createElement('div');
  theStory.id = 'theStory';
  theStory.appendChild(document.createElement('h3'));
  userIcon = document.createElement('div');

}

function requestUserData() {
  let dataRequest = new XMLHttpRequest();
  dataRequest.open("GET", "https://api.github.com/users/daxxon");
  dataRequest.addEventListener("load", populateData);
  dataRequest.send();
}

function populateData() {
  let userData = JSON.parse(this.responseText);
  console.log(userData);
  name = userData.login;
  gitHubUrl = userData.html_url;
  emailAddress = userData.email;
  company = userData.company;
  website = userData.blog;
  populatePage(userData);
}

function populatePage(userData) {
  headerH1.innerHTML = userData.name;
}

renderPageElements();
requestUserData();
