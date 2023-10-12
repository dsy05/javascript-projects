
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCool: "100%",
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let outputs = {
      2: 'Launch',
      3: 'Code',
      5: 'Rocks'
    };
    let result = "";
    for (let modulus in outputs) {
      if (num % Number(modulus) === 0) {
        if (modulus == 5 && result.length > 0) {
            result += " ";
        }
        result += outputs[modulus];
      }
    }
    if (result.length === 0) {
      result = "Rutabagas! That doesn't work.";
    } else {
      result += "!";
    }
    if (result === "Launch Rocks!") {
      result += " (CRASH!!!!)"
    }
    return result;
  }
};

module.exports = launchcode;
    

