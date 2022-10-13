const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText =
    "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ["Dwayne The Rock Johnson", "Kris Jenner", "Danny DeVito"];

let inserty = ["Universal Studios", "Japan", "Nobu"];

let insertz = ["began to lay down in the street", "started to hop around like a bunny", "fanned themselves aggressively"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
 
    var xItem, yItem, zItem;
 
 xItem = randomValueFromArray(insertx);
 yItem = randomValueFromArray(inserty);
 zItem = randomValueFromArray(insertz);
 
 newStory = newStory.replace(":insertx:",xItem);
 newStory = newStory.replace(":inserty:",yItem);
 newStory = newStory.replace(":insertz:",zItem);
 newStory = newStory.replace(":insertx:",xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let stonesPerPound = 0.0714286;

    let weight = Math.round(300*stonesPerPound)+ 'stone';
    let temperature =  Math.round((94-32)*5/9)+ 'centigrade';

    newStory = newStory.replace("94 farenheit", temperature);  
    newStory = newStory.replace("300 pounds", weight); 

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}