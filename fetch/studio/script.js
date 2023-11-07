//TODO: Add Your Code Below
window.addEventListener("load", function(){
    const container = document.getElementById('container');
    //fetch using traditional syntax
    // fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    //     response.json().then(function(data){ //can call it data 
    //         // console.log(data);
    //         for (let i=0; i<data.length; i++){
    //             let astronaut = data[i]; // use the astronaut variable in the loop
    //             container.innerHTML += // keeps updating the div for each new astronaut in the loop
    //             `<div class="astronaut">
    //                 <div class="bio">
    //                     <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    //                     <ul>
    //                         <li>Hours in space: ${astronaut.hoursInSpace}</li>
    //                         <li>Active: ${astronaut.hoursInSpace}</li>
    //                         <li>Skills: ${astronaut.skills.join(", ")}</li>
    //                     </ul>
    //                 </div>
    //                 <img class="avatar" src="${astronaut.picture}">
    //             </div>`
    //         }  
            
    //     });
    // });

    // fetch with modern async/await syntax plus bonus
    async function fetchAndDisplayAstronauts(){ //creating async function
        let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json'); // handle the first promise will await the fetch to get the response  promise
        let data = await response.json(); //await unboxing the response to actually pull data out of the Json 

        //bonus mission 1
        data.sort(function (a, b) { //placed here to sort data after its been fetched, so that its been sorted when you need it
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1; //anonymous function is return a comparison of hours in space of to b and if its true returning 1 if not return -1,
        }); //it will keep going through array untill sorted in the right order

        //bonus #3
        const count = document.getElementById('count'); // created div with id of count
        count.innerHTML = `Astronaut Count: ${data.length}`; //adding the count to the div

        for (let i=0; i<data.length; i++){
            let astronaut = data[i]; // use the astronaut variable in the loop
            
            //Bonus #2
            let activeClass = astronaut.active ? "active" : ""; //each astronaut gets assigned the active if its true otherwise an empty string gets assigned to the li item class
            container.innerHTML += // keeps updating the div for each new astronaut in the loop
            `<div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li class="${activeClass}">Active: ${astronaut.active}</li> 
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>`
        }
    }
// call the async function
fetchAndDisplayAstronauts();
});

