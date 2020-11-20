//This program used async/await to print out the login and name of each github user
const fetch = require('node-fetch');
function getUser() {
    fetch(`https://api.github.com/users`)
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {
        
        for (let user of users) {
            fetch ('https://api.github.com/users/' + user.login)
            .then(res => res.json())
            .then(profile => console.log(`{ login:${user.login},name: ${profile.name} }`))
        };
    });
};

getUser()