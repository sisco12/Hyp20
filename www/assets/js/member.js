const URL = {
    ID: '/' + window.location.search.split("=")[1],
    API: "https://immense-coast-05289.herokuapp.com/api",
    EVENTS: "/events",
    PERSON: "/person"
};

fetch(URL.API + URL.PERSON + URL.ID)
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Fetch response failed. Status Code: " + response.status);
            return Promise.reject(response);
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        document.title = `${data.name}`;
        var L_description = JSON.parse(data.long_description);

        document.getElementById("breadcrumb_title").innerHTML = `<li class="breadcrumb-item">Staff</li><li class="breadcrumb-item">Member: ${data.name}</li>`

        document.getElementById(
            "person_name"
        ).innerHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-start"><h1>${data.name}</h1></div>`;
        return fetch(URL.API + URL.PERSON + URL.ID + URL.EVENTS);
    })
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Fetch response failed. Status Code: " + response.status);
            return Promise.reject(response);
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Fetch JS failed: ", error);
    });