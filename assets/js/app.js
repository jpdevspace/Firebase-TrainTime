$(function(){

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

    // Hold the db in a variable
    const db = firebase.database();
    // Reference Database
    const dbRef = db.ref();

    // Get the elements
    const $tName = $('#name');
    const $tDest = $('#destination');
    const $tFirstTime = $('#firstTrainTime');
    const $tFreq = $('#frequency');
    const $submit = $('#formFill');
    const $tbody = $('tbody');
    let trainObj = {};

    // Functions
    const getValues = (e) => {
        e.preventDefault();
        // Push values into an obj

        trainObj.tName = $tName.val();
        trainObj.tDest = $tDest.val();
        trainObj.tFirstTime = $tFirstTime.val();
        trainObj.tFreq = $tFreq.val();
        // Clear inputs
        $tName.val('');
        $tDest.val('');
        $tFirstTime.val('');
        $tFreq.val('');
        // Put it into Firebase
        db.ref().push(trainObj);
    }

    // Listen for changes in the database
    dbRef.on('child_added', (snapshot) => {
        console.log(snapshot.val());
        // Fill the table
        $tbody.append(`
            <tr>
                <td>${snapshot.val().tName}</td>
                <td>${snapshot.val().tDest}</td>
                <td>${snapshot.val().tFirstTime}</td>
                <td>${snapshot.val().tFreq}</td>
            </tr>`);
    })



    // Event Listener
    $submit.on('click', getValues);



})