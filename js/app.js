// // 
// tomagotchi - mini - project
// Description
// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and Javascript to interact with our pet.

//   Requirements
// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class(JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet.Hunger(1 - 10 scale), Sleepiness(1 - 10 scale), Boredom(1 - 10 scale), Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet
// Add the ability to name your pet
// Style the page
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages
// Animate your pet across the screen
// Extras
// have your tomagotchi give birth, to baby tomagotchi
// with special powers(extends the class)
// add an excercise method to your tomagotchi, that affects certain properties
// Add anything you can think of, use your imagination

// Pretiest, Creative, Functionality

$(() => { // main jquery function - process all jquery

  console.log('Tomagotchi');
  const petList = [];
  const familyList = [];
  class Tomagotchi {
    constructor(name, age, image, hunger, sleepiness, boredom) {
      this.name = name;
      this.age = age;
      this.image = image;
      this.hunger = hunger;
      this.sleepiness = sleepiness;
      this.boredom = boredom;
      petList.push(this);
    }
    feedPet() {
      this.hunger -= 1;
    }
    playWithPet() {
      this.boredom -= 1;
    }
    lightsOff() {
      this.sleepiness -= 1;
    }
  } // End of Class

  // class Family {
  //   constructor(name, age, image, hunger, sleepiness, boredom) {
  //     this.name = name;
  //     this.age = age;
  //     this.image = image;
  //     this.hunger = hunger;
  //     this.sleepiness = sleepiness;
  //     this.boredom = boredom;
  //     petList.push(this);
  //   }
  //   feedPet() {
  //     this.hunger -= 1;
  //   }
  //   playWithPet() {
  //     this.boredom -= 1;
  //   }
  //   lightsOff() {
  //     this.sleepiness -= 1;
  //   }
  // } // End of Class

  const displayStats = function (tomagotchi) {
    $($statsDiv[tomagotchi.name]).text(`Hunger: ${tomagotchi.hunger} Boredom: ${tomagotchi.boredom} Sleepiness: ${tomagotchi.sleepiness}`);
    // $('span').text(`Hunger: ${tomagotchi.hunger} Boredom: ${tomagotchi.boredom} Sleepiness: ${tomagotchi.sleepiness}`);
  }

  const feed = function (tomagotchi) {
    const $feed = $('<button/>');
    $feed.text('Feed');
    $feed.addClass('btn btn - primary');
    $($actionDiv[tomagotchi.name]).append($feed);
    $feed.on('click', (e) => {
      tomagotchi.feedPet();
      displayStats(tomagotchi);
    })
  }
 
  const play = function (tomagotchi) {
    const $play = $('<button/>');
    $play.text('Play');
    $play.addClass('btn btn - primary');
    $($actionDiv[tomagotchi.name]).append($play);
    $play.on('click', (e) => {
      tomagotchi.playWithPet();
      displayStats(tomagotchi);
    })
  }

  const lights = function (tomagotchi) {
    const $lights = $('<button/>');
    $lights.text('Lights');
    $lights.addClass('btn btn - primary');
    $($actionDiv[tomagotchi.name]).append($lights);
    $lights.on('click', (e) => {
      tomagotchi.lightsOff();
      displayStats(tomagotchi);
    })
  }
 
  const createButtons = function (tomagotchi) {
    feed(tomagotchi);
    play(tomagotchi);
    lights(tomagotchi);
  }

  const pet = new Tomagotchi('sushi', 5, "images/01-sushi-solo.jpeg", 1, 1, 1);
  const pet2 = new Tomagotchi('sashimi', 5, "images/04-sushi.jpeg", 1, 2, 3);
  // const pet4 = new Tomagotchi('beachy', 5, "images/03-sushi.jpg", 1, 2, 3);

  // const dad = new Family('sushi', 5, "images/01-sushi-solo.jpeg", 6, 2, 3);
  // const mom = new Family('sashimi', 5, "images/04-sushi.jpeg", 1, 2, 3);
  // const kid = new Family('beachy', 5, "images/03-sushi.jpg", 1, 2, 3);

  const addBabyToPetList = function () {
    const pet3 = new Tomagotchi('gumbino', 5, "images/02-sushi.jpg", 1, 2, 3);
    const pet4 = new Tomagotchi('gumbina', 5, "images/02-sushi.jpg", 1, 2, 3);
    console.log('called addBabyToPetList');
  }
  
  // GLOBAL Variables
  let $tomaDiv = $('<div/>');
  let $imageDiv = $('<div/>');
  let $statsDiv = $('<div/>');
  let $actionDiv = $('<div/>');
  let $image = $('<img/>');
  let $babyButton = $('<button/>');

  const constructDivs = function (element) {
    // Create Divs, elements
    $tomaDiv[element.name] = $('<div/>');
    $imageDiv[element.name] = $('<div/>');
    $statsDiv[element.name] = $('<div/>');
    $actionDiv[element.name] = $('<div/>');
    $image[element.name] = $('<img/>');

    // Add Classes, attributes
    $tomaDiv[element.name].addClass(element.name + ' tomadiv');
    $imageDiv[element.name].addClass('image-div-' + element.name + ' image-div');  // not sure we need this
    $statsDiv[element.name].addClass('stats-div-' + element.name + ' stats-div');  // not sure we need this
    $actionDiv[element.name].addClass('action-div-' + element.name + ' action-div'); // not sure we need this
    $image[element.name].addClass('image-' + element.name + ' image');
    $image[element.name].attr('src', element.image);

    // Add Elements to the page
    $('.main').append($tomaDiv[element.name]);
    $($tomaDiv[element.name]).append($imageDiv[element.name]);
    $($tomaDiv[element.name]).append($statsDiv[element.name]);
    $($tomaDiv[element.name]).append($actionDiv[element.name]);
    $($imageDiv[element.name]).append($image[element.name]);

    const $h5 = $('<h5/>');
    const $span = $('<span/>');
    // $span.addClass(element.name);
    $span.addClass('span-' + element.name);
    $span.text('');
    $h5.append($span);
    $($statsDiv[element.name]).append($h5);
  }

  //  Main Function 
  const game = (tomagotchi) => {
    createButtons(tomagotchi);
    let seconds = 0;
    const timePasssing = (tomagotchi) => {
      seconds++;
      if (seconds % 3  == 0) {
        tomagotchi.hunger++;
      }
      if (seconds % 5 == 0) {
        tomagotchi.boredom++;
      }
      if (seconds % 7 == 0) {
        tomagotchi.sleepiness++;
      }
      if (seconds % 3 == 0) {
        tomagotchi.age++;
        $('.baby-button').append($babyButton);
      }
      // ...
      displayStats(tomagotchi);
      
      if (tomagotchi.hunger >= 10 || tomagotchi.boredom >= 10 || tomagotchi.sleepiness >= 10) {
        console.log('Dead');

        clearInterval(timePasses);
        // Death stuff here
        tomagotchi.image = "images/rotten-fish-2.jpeg";  // assign new image to the object
        $image[tomagotchi.name].attr('src', tomagotchi.image); // inserts image into page
        const name = tomagotchi.name.toUpperCase();
        $statsDiv[tomagotchi.name].text(`${name} is DEAD!`);
        $actionDiv[tomagotchi.name].hide();
      }      
    }
    const timePasses = setInterval(timePasssing, 1000, tomagotchi);
  }

  const makeBaby = function () {
    // Using global variable -> $babyButton = $('<button/>');
    $babyButton.addClass('start btn btn-primary');
    $babyButton.text('Make Babies');
    // $('.baby-button').append($babyButton);
    $babyButton.on('click', (e) => {
      addBabyToPetList();
      //  $tomaDiv.empty();
      $('.tomadiv').remove();
      $babyButton.hide();
      addSquare();
      //restart game - TODO - this is not DRY (start function)
      petList.forEach(tomagotchi => {
        constructDivs(tomagotchi);
        tomagotchi.sleepiness = 0;
        game(tomagotchi);
      });
    });
  };

 
  // TESTING
  const addSquare = () => {
    const square = $('<div/>');
    // applyRandomColor(square);
    $('.squares').append(square);
    square.on('click', e => {
      // disappear($(e.currentTarget)); //e.currentTarget is the stuff that got clicked
      $(e.currentTarget).hide();
    });
  }
  // END of testing

  // creates a start button, calls main game function
  const start = function (tomagotchi) {
    const $start = $('<button/>');
    $start.addClass('start btn btn-primary');
    $start.text('Start');
    // $($actionDiv).append($start);
    $('.start-button').append($start);
    $start.on('click', (e) => {
      petList.forEach(tomagotchi => {
        constructDivs(tomagotchi);
        
        game(tomagotchi);
      });
      $start.hide(); 
    });
    makeBaby(); 
  };

  start();

});  // End of jquery main function - process all jquery

