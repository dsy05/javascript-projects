const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  test("should be nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("director is jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("percentage of cool employees", function() {
    expect(launchcode.percentageCool).toBe("100%");
  });

  test("programs offered", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  describe("should have a method, launchoutput, which", function() {

    test("should return 'launch!' for numbers divisible only by 2", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
    
    test("should return 'Code!' for numbers divisible only by 3", function() {
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });

    test("should return 'Code!' for numbers divisible only by 5", function() {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });

    test("should return 'LaunchCode!' for numbers divisible by 2 and 3", function() {
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });

    test("should return 'Code Rocks!' for numbers divisible by 3 and 5", function() {
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });

    //modify 2 and 5 return
    test("should return 'Launch Rocks!' for numbers divisible by 2 and 5", function() {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    });

    test("should return 'LaunchCode Rocks!' for numbers divisible by 2, 3 and 5", function() {
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });

    test("should return 'Rutabagas! That doesn't work.' for numbers not divisible by 2, 3 and 5", function() {
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });

  })
});