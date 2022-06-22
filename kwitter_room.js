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
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

function addroom(){
roomname=document.getElementById("roomname").value;
firebase.database().ref('/').child(roomname).update({
      purpose:"adding room"
})
}