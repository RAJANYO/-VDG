//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAiVz_HA6GEnJ0-jTEC1i2gTuEnMJi6880",
      authDomain: "kwitter-212aa.firebaseapp.com",
      databaseURL: "https://kwitter-212aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-212aa",
      storageBucket: "kwitter-212aa.appspot.com",
      messagingSenderId: "99593692685",
      appId: "1:99593692685:web:871065b3e354fe65cad744",
      measurementId: "G-09KD506CX2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag; document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index."
}
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}function updateLike(id){
      buttonid=id;
      console.log(id);
      likes=document.getElementById(buttonid).value;
      write=Number(likes)+1;
      firebase.database().ref(roomname).child(id).update({
            like:write
      })
}