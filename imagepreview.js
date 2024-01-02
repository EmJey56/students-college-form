const form = document.getElementById("contactForm");
const form2 = document.getElementById("contactForm2");
const form3 = document.getElementById("contactForm3");
const form4 = document.getElementById("contactForm4");
const form5 = document.getElementById("contactForm5");
const form6 = document.getElementById("contactForm6");
const form7 = document.getElementById("contactForm7");
const form8 = document.getElementById("contactForm8");
const form9 = document.getElementById("contactForm9");
const form10 = document.getElementById("contactForm10");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//222///

form2.addEventListener("submit", (e) => {
  e.preventDefault();
});

//33//
form3.addEventListener("submit", (e) => {
  e.preventDefault();
});

//4//
form4.addEventListener("submit", (e) => {
  e.preventDefault();
});

//55///
form5.addEventListener("submit", (e) => {
  e.preventDefault();
});

//66///
form6.addEventListener("submit", (e) => {
  e.preventDefault();
});

//77///
form7.addEventListener("submit", (e) => {
  e.preventDefault();
});

//88///
form8.addEventListener("submit", (e) => {
  e.preventDefault();
});

//99///
form9.addEventListener("submit", (e) => {
  e.preventDefault();
});

//10///

form10.addEventListener("submit", (e) => {
  e.preventDefault();
});


/////////////////////////////////////////////////////////////

function previewImage(input) {
  const preview = input.parentElement.querySelector(".preview-img");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img").src = "";
  newImageContainer.querySelector(".image-input").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton(true); // Show the delete button
}

function deleteLastImageInput() {
  const imageContainers = document.querySelectorAll(".image-preview-container");
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton(visible) {
  const deleteButton = document.querySelector(".delete-button");
  deleteButton.style.display = visible ? "block" : "none";
}

//222222///

function previewImage2(input) {
  const preview = input.parentElement.querySelector(".preview-img2");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput2(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img2").src = "";
  newImageContainer.querySelector(".image-input2").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton2(true); // Show the delete button
}

function deleteLastImageInput2() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container2"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton2(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton2(visible) {
  const deleteButton = document.querySelector(".delete-button2");
  deleteButton.style.display = visible ? "block" : "none";
}

//333///

function previewImage3(input) {
  const preview = input.parentElement.querySelector(".preview-img3");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput3(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img3").src = "";
  newImageContainer.querySelector(".image-input3").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton3(true); // Show the delete button
}

function deleteLastImageInput3() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container3"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton3(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton3(visible) {
  const deleteButton = document.querySelector(".delete-button3");
  deleteButton.style.display = visible ? "block" : "none";
}

///444////

function previewImage4(input) {
  const preview = input.parentElement.querySelector(".preview-img4");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput4(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img4").src = "";
  newImageContainer.querySelector(".image-input4").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton4(true); // Show the delete button
}

function deleteLastImageInput4() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container4"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton4(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton4(visible) {
  const deleteButton = document.querySelector(".delete-button4");
  deleteButton.style.display = visible ? "block" : "none";
}

///555///

function previewImage5(input) {
  const preview = input.parentElement.querySelector(".preview-img5");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput5(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img5").src = "";
  newImageContainer.querySelector(".image-input5").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton5(true); // Show the delete button
}

function deleteLastImageInput5() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container5"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton5(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton5(visible) {
  const deleteButton = document.querySelector(".delete-button5");
  deleteButton.style.display = visible ? "block" : "none";
}

///666///

function previewImage6(input) {
  const preview = input.parentElement.querySelector(".preview-img6");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput6(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img6").src = "";
  newImageContainer.querySelector(".image-input6").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton6(true); // Show the delete button
}

function deleteLastImageInput6() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container6"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton6(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton6(visible) {
  const deleteButton = document.querySelector(".delete-button6");
  deleteButton.style.display = visible ? "block" : "none";
}

//777///

function previewImage7(input) {
  const preview = input.parentElement.querySelector(".preview-img7");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput7(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img7").src = "";
  newImageContainer.querySelector(".image-input7").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton7(true); // Show the delete button
}

function deleteLastImageInput7() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container7"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton7(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton7(visible) {
  const deleteButton = document.querySelector(".delete-button7");
  deleteButton.style.display = visible ? "block" : "none";
}

///888///

function previewImage8(input) {
  const preview = input.parentElement.querySelector(".preview-img8");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput8(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img8").src = "";
  newImageContainer.querySelector(".image-input8").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton8(true); // Show the delete button
}

function deleteLastImageInput8() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container8"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton8(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton8(visible) {
  const deleteButton = document.querySelector(".delete-button8");
  deleteButton.style.display = visible ? "block" : "none";
}

///9999////

function previewImage9(input) {
  const preview = input.parentElement.querySelector(".preview-img9");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput9(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img9").src = "";
  newImageContainer.querySelector(".image-input9").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton9(true); // Show the delete button
}

function deleteLastImageInput9() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container9"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton9(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton9(visible) {
  const deleteButton = document.querySelector(".delete-button9");
  deleteButton.style.display = visible ? "block" : "none";
}

///10/////

function previewImage10(input) {
  const preview = input.parentElement.querySelector(".preview-img10");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function addImageInput10(button) {
  const imageContainer = button.parentElement;
  const newImageContainer = imageContainer.cloneNode(true);
  newImageContainer.querySelector(".preview-img10").src = "";
  newImageContainer.querySelector(".image-input10").value = "";

  imageContainer.parentElement.appendChild(newImageContainer);
  toggleDeleteButton10(true); // Show the delete button
}

function deleteLastImageInput10() {
  const imageContainers = document.querySelectorAll(
    ".image-preview-container10"
  );
  if (imageContainers.length > 1) {
    const lastContainer = imageContainers[imageContainers.length - 1];
    lastContainer.remove();
  }
  toggleDeleteButton10(imageContainers.length > 2); // Hide the delete button if there are only two image sections left
}

function toggleDeleteButton10(visible) {
  const deleteButton = document.querySelector(".delete-button10");
  deleteButton.style.display = visible ? "block" : "none";
}


////////////////

var firebaseConfig = {
  // Your Firebase config
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

// Array to hold all image input elements
const imageInputs = document.querySelectorAll(".image-input");
const progressBar = document.querySelector(".progress-bar");

// Function to upload the image to Firebase Storage
async function uploadImages() {
  const storage = firebase.storage();
  let imagesUploaded = 0;

  for (const imageInput of imageInputs) {
    const file = imageInput.files[0];

    if (file) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child("images/" + file.name);

      // Upload the image to Firebase Storage
      const uploadTask = imageRef.put(file);

      await new Promise((resolve) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle progress and update the progress bar
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progressBar.style.width = progress + "%";
            progressBar.setAttribute("aria-valuenow", progress);
          },
          (error) => {
            // Handle errors
            console.error("Error uploading image: ", error);
            resolve();
          },
          () => {
            // Handle successful upload
            console.log("Image uploaded successfully.");
            imagesUploaded++;

            // Check if all images are uploaded
            if (imagesUploaded === imageInputs.length) {
              // All images are uploaded, display success message
              const successMessage = document.getElementById("successMessage");
              successMessage.textContent = "Images Uploaded Successfully!";
              progressBar.style.width = "100%"; // Complete the progress bar
              resolve();
            }
          }
        );
      });
    } else {
      console.error("No file selected for upload.");
    }
  }
}
