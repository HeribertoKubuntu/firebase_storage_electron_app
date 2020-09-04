/**
* Created by heriberto.delgado on 2/09/2020.
**/
(function(){
    'use strict';

    // Initialize Firebase
    const config = {
    apiKey: "some_api_key_here",
    authDomain: "some_domain_here.firebaseapp.com",
    databaseURL: "https://some_url_here.firebaseio.com",
    projectId: "some_project_name",
    storageBucket: "some_bucket_here.appspot.com"
    };
    firebase.initializeApp(config);
})();
