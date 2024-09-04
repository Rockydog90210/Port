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

//draw utfit button
		//genOutfitButton = document.getElementById('genOutfit');
		//genOutfitButton.addEventListener("click",drawOutfit);

let sunShirtSpriteOn = false;
let greyCatShirtOn = false;
let pinkHeartDressOn = false;
let redDressWithRibbonsOn = false;
let blueShortsOn = false;


//functions

function sunShirtSpriteFun(){
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	//ctx.drawImage(personSprite, 50, 0);
	//ctx.drawImage(sunShirtSprite, 50,0);
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
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	//ctx.drawImage(personSprite, 50, 0);
	//ctx.drawImage(greyCatShirt, 50,0);
	if (greyCatShirtOn == false){
		greyCatShirtOn = true;
		document.getElementById('greyCatShirt').style.backgroundColor = "grey";
	}else {
		greyCatShirtOn = false;
		document.getElementById('greyCatShirt').style.backgroundColor = "white";
	}
	drawOutfit();
}

function blueShortsFun(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(personSprite, 50, 0);
	ctx.drawImage(blueShorts, 50,0);
	if (blueShortsOn == false){
		blueShortsOn = true;
		document.getElementById('blueShorts').style.backgroundColor = "grey";
	}else {
		blueShortsOn = false;
		document.getElementById('blueShorts').style.backgroundColor = "white";
	}
	drawOutfit();
}


function pinkHeartDressFun(){
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	//ctx.drawImage(personSprite, 50, 0);
	//ctx.drawImage(pinkHeartDress, 50,0);
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
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	//ctx.drawImage(personSprite, 50, 0);
	//ctx.drawImage(redDressWithRibbons, 50,0);
	if (redDressWithRibbonsOn == false){
		redDressWithRibbonsOn = true;
		document.getElementById('redDressWithRibbons').style.backgroundColor = "grey";
	}else {
		redDressWithRibbonsOn = false;
		document.getElementById('redDressWithRibbons').style.backgroundColor = "white";
	}
	drawOutfit();
}



function drawOutfit(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(personSprite, 50, 0);

	if (blueShortsOn == true){
		ctx.drawImage(blueShorts, 50,0);
	
	}
	if (sunShirtSpriteOn == true){
		ctx.drawImage(sunShirtSprite, 50,0);
		
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
}
	