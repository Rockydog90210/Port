randomStory = document.getElementById('randomStory')
story = document.getElementById('story')
const customName = document.getElementById('customname');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

storyText = 'It was a :discripor: :timeOfDay:, so :asdf: decited to go :activity:. While :asdf: was :activity:, a :animal: :animalAction: and :animalAction2: witch made :asdf: :asdfAction:.'

//random arrays
discripor = ['nice', 'raining', 'clear', 'cloudy', 'dark', 'warm', 'cold', 'stormy', 'sunny', 'stary', 'foggy', 'hazy', 'cool', 'hot', 'snowy']

timeOfDay =['morning', 'afternoon', 'evening', 'night']

asdf = ['Annie', 'Alex', 'siren', 'Grace', 'Jullies', 'Coco', 'Nick', 'Ellie', 'Addie', 'Rachel', 'Cat', 'Keven', 'mr teacher man','Mr. Neaveill']

activity = ['fishing', 'on a walk', 'running', 'shopping', 'snorkeling', 'hunting', 'cooking', 'danceing', 'singing','smokeing' ]

animal = ['bear', 'fish', 'racoon', 'wolf', 'bird', 'seal', 'fox', 'dragon', 'frog']

animalAction = ['jumped out of a bush', 'jumped out behind them', 'jumped out of a pound', 'fell from the sky', 'tapped them on the shoulder', 'fell out of a tree', 'materialized in front of them', 'ran out of knowwhere','jumped out of a pot' ]

animalAction2 = ['bit there leg', 'said hello', 'cooked them a nice dinner', 'sang a song', 'did a magic trick', 'sang there abc\'s', 'blinked slowly', 'sneezed', 'died', 'threw up a sock', 'high fived them', 'punched them in the face','platonicly kissed there check','booped there nose']

asdfAction = ['happy','laugh','sing','cry','puke','fall over','fall into dispair', 'jump in a voulcannon', 'jump', 'run', 'run home', 'call there mother', 'kill the :animal:', 'punch the :animal:', 'fight the :animal:','smoke','snort crack','pee there pants','kiss the :animal:','do meth','poop','cook a pizza' ] //have to have it serch for istants of animal to replace it. do this in the new story function

randomStory.addEventListener('click', result);


function result() {
  let newStory = storyText;

  //discriporx = discripor[Math.floor(Math.random()*discripor.length)];
  
  discriporx = randomValueFromArray(discripor);
  timeOfDayx = randomValueFromArray(timeOfDay);
  namex = randomValueFromArray(asdf);
  activityx = randomValueFromArray(activity);
  animalx = randomValueFromArray(animal);
  animalActionx = randomValueFromArray(animalAction);
  animalAction2x = randomValueFromArray(animalAction2);
  asdfActionx = randomValueFromArray(asdfAction);
  
  
  
  
 
  newStory = newStory.replaceAll(':discripor:',discriporx);
  newStory = newStory.replaceAll(':timeOfDay:',timeOfDayx);

	if(customName.value !== '') {
	const name = customName.value;
	newStory = newStory.replaceAll(':asdf:',name);
  } else newStory = newStory.replaceAll(':asdf:',namex);
  
  newStory = newStory.replaceAll(':activity:',activityx);
  newStory = newStory.replaceAll(':asdfAction:',asdfActionx); //have serch for animal in aray asdfaction
  //order matters, so it doesnt replkace it slef
  newStory = newStory.replaceAll(':animal:',animalx);
  newStory = newStory.replaceAll(':animalAction:',animalActionx);
  newStory = newStory.replaceAll(':animalAction2:',animalAction2x);

 
  
  
  
  
  story.textContent = newStory;
}


