// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosy = 0;

    //buttons
    const takeoffButton = document.getElementById('takeoff'); //find element to have object that represents it
    const landingButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    //areas
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const houston = document.getElementById('houston');

    //Rocket Image
    const rocket = document.getElementById('rocket');

    takeoffButton.addEventListener("click", function() {
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            houston.innerHTML = "Houston, we have liftoff!"
            flightStatus.style.color = "blue";
            houston.style.color = "blue";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosy += 10;
            rocket.style.marginBottom = rocketPosy + 'px';
        }
    });

    landingButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        houston.innerHTML = "Houston, The Eagle has landed!"
        flightStatus.style.color = "green";
        houston.style.color = "green";
        shuttleBackground.style.backgroundColor = "green";
        resetRocket();
        
    });

    abortButton.addEventListener("click", function() {
        let shouldAbort = confirm("Confirm that you want to abort the mission.");
        if (shouldAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            houston.innerHTML = "Okay, Houston, we've had a problem here."
            flightStatus.style.color = "red";
            houston.style.color = "red";
            shuttleBackground.style.backgroundColor = "red";
            resetRocket();
        }
    });

    //use event deligation for directional buttons
    document.addEventListener("click", function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "left" && rocketPosX > -(bkgWidth /2 -40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth /2 -40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosy += 10;
            rocket.style.marginBottom = rocketPosy + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosy -= 10;
            rocket.style.marginBottom = rocketPosy + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    function resetRocket() {
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosy = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosy + 'px';
    };
        
});

