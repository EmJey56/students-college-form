document.addEventListener("DOMContentLoaded", function () {
  // Initialize Firebase
  var firebaseConfig = {
    // Your Firebase configuration here
    apiKey: "AIzaSyAmwBCB44KTMq6yQnSMzoPN1pq5uxcZM_w",
    authDomain: "new-talk-a98e7.firebaseapp.com",
    databaseURL: "https://new-talk-a98e7-default-rtdb.firebaseio.com",
    projectId: "new-talk-a98e7",
    storageBucket: "new-talk-a98e7.appspot.com",
    messagingSenderId: "861871528496",
    appId: "1:861871528496:web:b97fbc1133b820ce78abf5",
    measurementId: "G-5P1C58N4LX",
  };
  firebase.initializeApp(firebaseConfig);

  var submitButton = document.querySelector(".btn-success");
  submitButton.addEventListener("click", uploadImagesToFirebase);
});

/////////////////////////////////

function uploadImagesToFirebase() {
  // Iterate through each form and upload images
  for (let i = 1; i <= 10; i++) {
    var formId = "contactForm" + i;
    var imageInputId = "image-input" + i;

    var form = document.getElementById(formId);
    var imageInput = form.querySelector("." + imageInputId);

    if (imageInput.files.length > 0) {
      var file = imageInput.files[0];
      var storageRef = firebase.storage().ref("images/" + file.name);

      // Upload the image to Firebase Storage
      var uploadTask = storageRef.put(file);

      // Get the download URL once the upload is complete
      uploadTask.on("state_changed", null, null, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          // Store the download URL in Firebase Realtime Database
          firebase
            .database()
            .ref("images/" + file.name)
            .set({
              downloadURL: downloadURL,
            });
        });
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
    // ...
  
    // Add an event listener for the form submit event
    var contactForm = document.querySelector("#contactForm");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      uploadImagesToFirebase(); // Call the function to upload images
    });
  });
  
