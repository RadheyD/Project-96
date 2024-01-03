

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jGkbdTG8WuUyyXaYSVjr77UIZXipRvQ",
  authDomain: "kwitter-c-93-50005.firebaseapp.com",
  projectId: "kwitter-c-93-50005",
  storageBucket: "kwitter-c-93-50005.appspot.com",
  messagingSenderId: "1428147545",
  appId: "1:1428147545:web:347d240902f8a912ef1048"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}
function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
  })
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name - "+Room_names);
  row = "<div class = 'room_name' id = "+Room_names +"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML= row;
  //End code
  });});}
getData();

function redirectToRoomName(names) {
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}