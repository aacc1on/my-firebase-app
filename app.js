// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const appDiv = document.getElementById("app");
const authDiv = document.getElementById("auth");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send");
const messagesList = document.getElementById("messages");
const fileInput = document.getElementById("fileUpload");
const uploadBtn = document.getElementById("uploadFile");

// Sign up
signupBtn.addEventListener("click", () => {
  auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(user => console.log("Signed up:", user.user.email))
    .catch(err => console.error(err.message));
});

// Login
loginBtn.addEventListener("click", () => {
  auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(user => console.log("Logged in:", user.user.email))
    .catch(err => console.error(err.message));
});

// Auth state
auth.onAuthStateChanged(user => {
  if(user){
    authDiv.style.display = "none";
    appDiv.style.display = "block";
    loadMessages();
  } else {
    authDiv.style.display = "block";
    appDiv.style.display = "none";
  }
});

// Send message
sendBtn.addEventListener("click", () => {
  db.collection("messages").add({
    text: messageInput.value,
    user: auth.currentUser.email,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  messageInput.value = "";
});

// Load messages
function loadMessages(){
  db.collection("messages").orderBy("timestamp")
    .onSnapshot(snapshot => {
      messagesList.innerHTML = "";
      snapshot.forEach(doc => {
        const li = document.createElement("li");
        li.textContent = `${doc.data().user}: ${doc.data().text}`;
        messagesList.appendChild(li);
      });
    });
}

// Upload file
uploadBtn.addEventListener("click", () => {
  const file = fileInput.files[0];
  const fileRef = storage.ref(`uploads/${file.name}`);
  fileRef.put(file).then(() => {
    console.log("File uploaded!");
  });
});
