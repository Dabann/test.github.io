const firebaseConfig = {
    apiKey: "AIzaSyDqCC3gjNTnvTbXUGIx1WQRMKAOVUMx0N4",
    authDomain: "keyupedia.firebaseapp.com",
    databaseURL: "https://keyupedia-default-rtdb.firebaseio.com",
    projectId: "keyupedia",
    storageBucket: "keyupedia.appspot.com",
    messagingSenderId: "575964882549",
    appId: "1:575964882549:web:f55fbe54a82087df313a3c",
    measurementId: "G-0FX62HTT4F"
  };
 

  // initialize firebase
  firebase.initializeApp(firebaseConfig);


// refrence database
var keyupediaDB = firebase.database().ref("Keyupedia")

document.getElementById("keyupedia").addEventListener("submit", submetform);

function submetform(e){
    e.preventDefault();

    var name = getElementVal("name");
    var job = getElementVal("job");
    var phone = getElementVal("phone");
    var mail = getElementVal("mail")

    saveMessages(name, job, phone, mail);
}
const saveMessages = (name, job, phone, mail) => {
    var newkeyupedia = keyupediaDB.push();

    newkeyupedia.set({
        name = name,
        job = job,
        phone = phone,
        mail = mail,

    })
}

const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
}