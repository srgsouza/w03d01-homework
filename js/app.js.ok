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
  class Tomagotchi {
    constructor(name, age, image, hunger, sleepiness, boredom) {
      this.name = name;
      this.age = age;
      this.image = image;
      this.hunger = hunger;
      this.sleepiness = sleepiness;
      this.boredom = boredom;
    }

    // setName() {
    //   const $inputVal = $('input').val();
    //   const $nameButton = $('<button/>');
    //   $nameButton.text('Set Name');
    //   $('body').append($nameButton);
    //   $nameButton.on('click', () => {
    //     this.name = $inputVal;
    //     console.log(this.name);
    //   })

    //   this.name = name;
    // }

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

  
  const displayStats = function (tomagotchi) {
    $('.stats').text(`Hunger: ${tomagotchi.hunger}\nSleepiness: ${tomagotchi.sleepiness}\nBoredom: ${tomagotchi.boredom}`);

  }
  const feed = function (tomagotchi) {
    const $feed = $('<button/>');
    $feed.text('Feed');
    $($actionDiv).append($feed);
    $feed.on('click', (e) => {
      tomagotchi.feedPet();
      displayStats(tomagotchi);
      console.log(`Hunger is now : ${tomagotchi.hunger}`);
    })
  }
 
  const play = function (tomagotchi) {
    const $play = $('<button/>');
    $play.text('Play');
    $($actionDiv).append($play);
    $play.on('click', (e) => {
      tomagotchi.playWithPet();
      displayStats(tomagotchi);
      console.log(`Boredom is now : ${tomagotchi.boredom}`);
    })
  }

  const lights = function (tomagotchi) {
    const $lights = $('<button/>');
    $lights.text('Lights');
    $($actionDiv).append($lights);
    $lights.on('click', (e) => {
      tomagotchi.lightsOff();
      displayStats(tomagotchi);
        console.log(`Sleepines is now : ${tomagotchi.sleepiness}`);

    })
  }
 
  const createButtons = function () {
    feed(pet);
    play(pet);
    lights(pet);
  }


  // sushi ages very fast. must be eaten (disappear), or they mold
  const pet = new Tomagotchi('sushi', 5, "images/01-sushi-solo.jpeg", 7, 2, 3);
  const pet2 = new Tomagotchi('sushi', 5, "images/01-sushi-solo.jpeg", 7, 2, 3);

  // GLOBAL Variables
  // Create Divs, elements
  const $tomaDiv = $('<div/>');
  const $imageDiv = $('<div/>');
  const $statsDiv = $('<div/> ');
  const $actionDiv = $('<div/>');
  const $image = $('<img/>');
  $tomaDiv.addClass('tomagotchi-div');
  $imageDiv.addClass('image-div');
  $statsDiv.addClass('stats-div');
  $actionDiv.addClass('actions-div'); 
  $image.attr('src', pet.image);

  //  Add Elements to the page
  $('body').append($tomaDiv);
  $tomaDiv.append($imageDiv);  
  $tomaDiv.append($statsDiv);
  $tomaDiv.append($actionDiv);
  $imageDiv.append($image);  

  const $h5 = $('<h5/>');
  const $span = $('<span/>');
  $span.addClass('stats');
  $span.text('');
  $h5.append($span);
  $statsDiv.append($h5);



  //  Main Function 
  const game = () => {
    createButtons();
    let seconds = 0;
    const timePasssing = (tomagotchi) => {
      
      seconds++;
      if (seconds % 1 == 0) {
        tomagotchi.hunger++;
      }
      if (seconds % 5 == 0) {
        tomagotchi.boredom++;
      }
      if (seconds % 7 == 0) {
        tomagotchi.sleepiness++;
      }
      if (seconds % 9 == 0) {
        tomagotchi.age++;
      }
      // ...
      displayStats(tomagotchi);
      if (tomagotchi.hunger >= 10 || tomagotchi.boredom >= 10 || tomagotchi.sleepiness >= 10) {
        console.log('Dead');

        clearInterval(timePasses);
        // Death stuff here
        $actionDiv.hide();
      }
    }
    const timePasses = setInterval(timePasssing, 1000, pet);

  }

  // creates a start button, calls main game function
  const start = function (tomagotchi) {
    const $start = $('<button/>');
    $start.addClass('start');
    $start.text('Start');
    // $($actionDiv).append($start);
    $('body').append($start);
    $start.on('click', (e) => {
      game();
      $start.hide(); 
    })
  }

  // s
  start(pet);


});  // End of jquery main function - process all jquery

