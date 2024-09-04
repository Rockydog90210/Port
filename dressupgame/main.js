const canvas = document.getElementById('spriteCanvas')
const ctx = canvas.getContext('2d')

let personSprite = new Image();
personSprite.src ='personSprite.png';

personSprite.onload = () => {
	ctx.drawImage(personSprite,50,0);
}

//sun shirt
let sunShirtSprite = new Image();
sunShirtSprite.src ='sunShirtSprite.png';

sunShirtSpriteButton = document.getElementById('sunShirtSprite');
sunShirtSpriteButton.addEventListener("click",sunShirtSpriteFun);

//Grey cat shirt
let greyCatShirt = new Image();
greyCatShirt.src ='greyCatShirt.png';

greyCatShirtButton = document.getElementById('greyCatShirt');
greyCatShirtButton.addEventListener("click",greyCatShirtFun);

//oneDshirt
let oneDShirtSprite = new Image();
oneDShirtSprite.src ='oneDShirtSprite.png';

oneDShirtSpriteButton = document.getElementById('oneDShirtSprite');
oneDShirtSpriteButton.addEventListener("click",oneDShirtSpriteFun);


//heart dress
let pinkHeartDress = new Image();
pinkHeartDress.src ='pinkHeartDress.png';

pinkHeartDressButton = document.getElementById('pinkHeartDress');
pinkHeartDressButton.addEventListener("click",pinkHeartDressFun);

//red dress with ribbons
let redDressWithRibbons = new Image();
redDressWithRibbons.src ='redDressWithRibbons.png';

redDressWithRibbonsButton = document.getElementById('redDressWithRibbons');
redDressWithRibbonsButton.addEventListener("click",redDressWithRibbonsFun);

//blue shorts
let blueShorts = new Image();
blueShorts.src ='blueShorts.png';

blueShortsButton = document.getElementById('blueShorts');
blueShortsButton.addEventListener("click",blueShortsFun);

//pinkSkirt
let pinkSkirtSprite = new Image();
pinkSkirtSprite.src ='pinkSkirtSprite.png';

pinkSkirtSpriteButton = document.getElementById('pinkSkirtSprite');
pinkSkirtSpriteButton.addEventListener("click",pinkSkirtSpriteFun);

//long pants
let longPantsSprite = new Image();
longPantsSprite.src ='longPantsSprite.png';

longPantsSpriteButton = document.getElementById('longPantsSprite');
longPantsSpriteButton.addEventListener("click",longPantsSpriteFun);

//shoe
let checkShoeSprite = new Image();
checkShoeSprite.src ='checkShoeSprite.png';

checkShoeSpriteButton = document.getElementById('checkShoeSprite');
checkShoeSpriteButton.addEventListener("click",checkShoeSpriteFun);

//accs
let emoAcessSprite = new Image();
emoAcessSprite.src ='emoAcessSprite.png';

emoAcessSpriteButton = document.getElementById('emoAcessSprite');
emoAcessSpriteButton.addEventListener("click",emoAcessSpriteFun);

//makeup
let emoMakeupSprite = new Image();
emoMakeupSprite.src ='emoMakeupSprite.png';

emoMakeupSpriteButton = document.getElementById('emoMakeupSprite');
emoMakeupSpriteButton.addEventListener("click",emoMakeupSpriteFun);

//racconHair
let racconHairSprite = new Image();
racconHairSprite.src ='racconHairSprite.png';

racconHairSpriteButton = document.getElementById('racconHairSprite');
racconHairSpriteButton.addEventListener("click",racconHairSpriteFun);

//yellowhair
let shortYellowHairSprite = new Image();
shortYellowHairSprite.src ='shortYellowHairSprite.png';

shortYellowHairSpriteButton = document.getElementById('shortYellowHairSprite');
shortYellowHairSpriteButton.addEventListener("click",shortYellowHairSpriteFun);

//longyellowhair
let longYellowHairSprite = new Image();
longYellowHairSprite.src ='longYellowHairSprite.png';

longYellowHairSpriteButton = document.getElementById('longYellowHairSprite');
longYellowHairSpriteButton.addEventListener("click",longYellowHairSpriteFun);



//draw utfit button
		//genOutfitButton = document.getElementById('genOutfit');
		//genOutfitButton.addEventListener("click",drawOutfit);

let sunShirtSpriteOn = false;
let greyCatShirtOn = false;
let oneDShirtSpriteOn = false;
let pinkHeartDressOn = false;
let redDressWithRibbonsOn = false;
let blueShortsOn = false;
let longPantsSpriteOn = false;
let pinkSkirtSpriteOn = false;
let checkShoeSpriteOn = false;
let emoAcessSpriteOn = false;
let emoMakeupSpriteOn = false;
let racconHairSpriteOn = false;
let shortYellowHairSpriteOn = false;
let longYellowHairSpriteOn = false;

//functions

function sunShirtSpriteFun(){
	
	if (sunShirtSpriteOn == false){
		sunShirtSpriteOn = true;
		document.getElementById('sunShirtSprite').style.backgroundColor = "grey";
	}else {
		sunShirtSpriteOn = false;
		document.getElementById('sunShirtSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function greyCatShirtFun(){
	
	if (greyCatShirtOn == false){
		greyCatShirtOn = true;
		document.getElementById('greyCatShirt').style.backgroundColor = "grey";
	}else {
		greyCatShirtOn = false;
		document.getElementById('greyCatShirt').style.backgroundColor = "white";
	}
	drawOutfit();
}


function oneDShirtSpriteFun(){
	
	if (oneDShirtSpriteOn == false){
		oneDShirtSpriteOn = true;
		document.getElementById('oneDShirtSprite').style.backgroundColor = "grey";
	}else {
		oneDShirtSpriteOn = false;
		document.getElementById('oneDShirtSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}


function blueShortsFun(){

	if (blueShortsOn == false){
		blueShortsOn = true;
		document.getElementById('blueShorts').style.backgroundColor = "grey";
	}else {
		blueShortsOn = false;
		document.getElementById('blueShorts').style.backgroundColor = "white";
	}
	drawOutfit();
}

function longPantsSpriteFun(){

	if (longPantsSpriteOn == false){
		longPantsSpriteOn = true;
		document.getElementById('longPantsSprite').style.backgroundColor = "grey";
	}else {
		longPantsSpriteOn = false;
		document.getElementById('longPantsSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function pinkSkirtSpriteFun(){
	
	if (pinkSkirtSpriteOn == false){
		pinkSkirtSpriteOn = true;
		document.getElementById('pinkSkirtSprite').style.backgroundColor = "grey";
	}else {
		pinkSkirtSpriteOn = false;
		document.getElementById('pinkSkirtSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}


function pinkHeartDressFun(){
	
	if (pinkHeartDressOn == false){
		pinkHeartDressOn = true;
		document.getElementById('pinkHeartDress').style.backgroundColor = "grey";
	}else {
		pinkHeartDressOn = false;
		document.getElementById('pinkHeartDress').style.backgroundColor = "white";
	}
	drawOutfit();
}

function redDressWithRibbonsFun(){

	if (redDressWithRibbonsOn == false){
		redDressWithRibbonsOn = true;
		document.getElementById('redDressWithRibbons').style.backgroundColor = "grey";
	}else {
		redDressWithRibbonsOn = false;
		document.getElementById('redDressWithRibbons').style.backgroundColor = "white";
	}
	drawOutfit();
}

function checkShoeSpriteFun(){
	
	if (checkShoeSpriteOn == false){
		checkShoeSpriteOn = true;
		document.getElementById('checkShoeSprite').style.backgroundColor = "grey";
	}else {
		checkShoeSpriteOn = false;
		document.getElementById('checkShoeSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function emoAcessSpriteFun(){
	
	if (emoAcessSpriteOn == false){
		emoAcessSpriteOn = true;
		document.getElementById('emoAcessSprite').style.backgroundColor = "grey";
	}else {
		emoAcessSpriteOn = false;
		document.getElementById('emoAcessSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function emoMakeupSpriteFun(){
	
	if (emoMakeupSpriteOn == false){
		emoMakeupSpriteOn = true;
		document.getElementById('emoMakeupSprite').style.backgroundColor = "grey";
	}else {
		emoMakeupSpriteOn = false;
		document.getElementById('emoMakeupSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function racconHairSpriteFun(){
	
	if (racconHairSpriteOn == false){
		racconHairSpriteOn = true;
		document.getElementById('racconHairSprite').style.backgroundColor = "grey";
	}else {
		racconHairSpriteOn = false;
		document.getElementById('racconHairSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function shortYellowHairSpriteFun(){
	
	if (shortYellowHairSpriteOn == false){
		shortYellowHairSpriteOn = true;
		document.getElementById('shortYellowHairSprite').style.backgroundColor = "grey";
	}else {
		shortYellowHairSpriteOn = false;
		document.getElementById('shortYellowHairSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}
function longYellowHairSpriteFun(){
	
	if (longYellowHairSpriteOn == false){
		longYellowHairSpriteOn = true;
		document.getElementById('longYellowHairSprite').style.backgroundColor = "grey";
	}else {
		longYellowHairSpriteOn = false;
		document.getElementById('longYellowHairSprite').style.backgroundColor = "white";
	}
	drawOutfit();
}

function drawOutfit(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(personSprite, 50, 0);
	
	if (emoAcessSpriteOn == true){
		ctx.drawImage(emoAcessSprite, 50,0);
	
	}
	if (emoMakeupSpriteOn == true){
		ctx.drawImage(emoMakeupSprite, 50,0);
	
	}
	if (longYellowHairSpriteOn == true){
		ctx.drawImage(longYellowHairSprite, 50,0);
	
	}
	if (checkShoeSpriteOn == true){
		ctx.drawImage(checkShoeSprite, 50,0);
	
	}
	if (blueShortsOn == true){
		ctx.drawImage(blueShorts, 50,0);
	
	}
	if (longPantsSpriteOn == true){
		ctx.drawImage(longPantsSprite, 50,0);
	
	}
	if (pinkSkirtSpriteOn == true){
		ctx.drawImage(pinkSkirtSprite, 50,0);
	
	}
	if (sunShirtSpriteOn == true){
		ctx.drawImage(sunShirtSprite, 50,0);
		
	}
	if (oneDShirtSpriteOn == true){
		ctx.drawImage(oneDShirtSprite, 50,0);
		
	}
	if (greyCatShirtOn == true){
		ctx.drawImage(greyCatShirt, 50,0);
		
	}
	if (pinkHeartDressOn == true){
		ctx.drawImage(pinkHeartDress, 50,0);
	
	}
	if (redDressWithRibbonsOn == true){
		ctx.drawImage(redDressWithRibbons, 50,0);
	
	}
	if (racconHairSpriteOn == true){
		ctx.drawImage(racconHairSprite, 50,0);
	
	}
	if (shortYellowHairSpriteOn == true){
		ctx.drawImage(shortYellowHairSprite, 50,0);
	
	}
}
	