import { auth, provider, db } from "./firebase.js";
import { signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const authDiv = document.getElementById("auth");
const appDiv = document.getElementById("app");
const username = document.getElementById("username");
const publishBtn = document.getElementById("publishBtn");
const postContent = document.getElementById("postContent");
const postsDiv = document.getElementById("posts");

loginBtn.onclick = () => signInWithPopup(auth, provider);
logoutBtn.onclick = () => signOut(auth);

onAuthStateChanged(auth, user => {
  if (user) {
    authDiv.classList.add("hidden");
    appDiv.classList.remove("hidden");
    username.textContent = user.displayName;
  } else {
    authDiv.classList.remove("hidden");
    appDiv.classList.add("hidden");
  }
});

publishBtn.onclick = async () => {
  if (postContent.value.trim() === "") return;
  await addDoc(collection(db, "posts"), {
    text: postContent.value,
    user: auth.currentUser.displayName,
    time: Date.now()
  });
  postContent.value = "";
};

onSnapshot(collection(db, "posts"), snap => {
  postsDiv.innerHTML = "";
  snap.forEach(doc => {
    const d = doc.data();
    postsDiv.innerHTML += `<div><b>${d.user}</b><p>${d.text}</p></div>`;
  });
});
