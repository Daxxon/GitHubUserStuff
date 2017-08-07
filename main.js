let myBody = '';
let myContainer = '';
let myHeader = '';
let headerH1 = '';
let headerH2Basics = '';
let headerH2Story = '';
let theBasics = '';
let basicsP1 = '';
let basicsP2 = '';
let basicsP3 = '';
let basicsP4 = '';
let basicsP5 = '';
let theStory = '';
let storyP = '';
let userIcon = '';
let name = '';
let username = '';
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
  myContainer = document.createElement('div');
  myContainer.id = 'infoBox';
  myBody.appendChild(myContainer);
  theBasics = document.createElement('div');
  theBasics.id = 'theBasics';
  myContainer.appendChild(theBasics);
  headerH2Basics = document.createElement('h2');
  theBasics.appendChild(headerH2Basics);
  basicsP1 = document.createElement('p');
  theBasics.appendChild(basicsP1);
  basicsP2 = document.createElement('p');
  theBasics.appendChild(basicsP2);
  basicsP3 = document.createElement('p');
  theBasics.appendChild(basicsP3);
  basicsP4 = document.createElement('p');
  theBasics.appendChild(basicsP4);
  basicsP5 = document.createElement('p');
  theBasics.appendChild(basicsP5);
  theStory = document.createElement('div');
  theStory.id = 'theStory';
  myContainer.appendChild(theStory);
  headerH2Story = document.createElement('h2');
  theStory.appendChild(headerH2Story);
  storyP = document.createElement('p');
  theBasics.appendChild(storyP);
  userIcon = document.createElement('div');
  userIcon.id = 'userIcon';
  myContainer.appendChild(userIcon);
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
  name = userData.name;
  userName = userData.login;
  gitHubUrl = userData.html_url;
  emailAddress = userData.email;
  company = userData.company;
  website = userData.blog;
  populatePage(userData);
}

function populatePage(userData) {
  headerH1.innerHTML = `${name}`;
  headerH2Basics.innerHTML = "The Basics";
  headerH2Story.innerHTML = "The Story";
  basicsP1.innerHTML = `Name: ${name}`;
  basicsP2.innerHTML = `Github URL: <a href="${gitHubUrl}">${userName}</a>`
  basicsP3.innerHTML = `Email: ${emailAddress}`;
  basicsP4.innerHTML = `Company: ${company}`
  basicsP5.innerHTML = `Website: ${website}`
}

renderPageElements();
requestUserData();
