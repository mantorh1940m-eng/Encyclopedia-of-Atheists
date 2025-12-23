import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔑 مفاتيح مشروعك (التي استخرجتها)
const firebaseConfig = {
  apiKey: "AIzaSyAAmXaAeRKC_YAo3FiUCyyIMLgC2ThTPis",
  authDomain: "encyclopedia-of-atheists.firebaseapp.com",
  projectId: "encyclopedia-of-atheists",
  storageBucket: "encyclopedia-of-atheists.firebasestorage.app",
  messagingSenderId: "90678844254",
  appId: "1:90678844254:web:7206a46d936048e64a4dcf"
};

// تشغيل Firebase
export const app = initializeApp(firebaseConfig);

// تسجيل الدخول Google
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// قاعدة البيانات
export const db = getFirestore(app);
