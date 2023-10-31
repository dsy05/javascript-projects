function init () {
    const abortButton = document.getElementById("abortMission");
    const liftoffButton = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    liftoffButton.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    liftoffButton.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "green" ;
    });

    liftoffButton.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "";
     });
    
    abortButton.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "red" ;
    });

    abortButton.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "";
     });

     abortButton.addEventListener("click", function() {
        let shouldAbort = confirm("Are you sure you want to abort the mission?");
        if (shouldAbort){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home!";
        }
     });

}

window.addEventListener("load", init);
