$(function(){
    console.log('Working!');
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCn6bxidmbH6601u0islr5_xyteVr41dLI",
        authDomain: "codersay-53fd9.firebaseapp.com",
        databaseURL: "https://codersay-53fd9.firebaseio.com",
        projectId: "codersay-53fd9",
        storageBucket: "codersay-53fd9.appspot.com",
        messagingSenderId: "878808016417"
    };
    firebase.initializeApp(config);

    // Reference Firebase DB
    const db = firebase.database();

    // Get the elements
    const $tName = $('#name');
    const $tDest = $('#destination');
    const $tFirstTime = $('#firstTrainTime');
    const $tFreq = $('#frequency');



})