//Endgame variables
var extEnd = 0;
var supEnd = 0;
var harmEnd = 0;
var symEnd = 0;

//Scene controller
var question;

//Choice Variables
var choice1 = 0;
var choice2 = 0;

//Button Text variables
var button1Text;
var button2Text;

//Audio file variables
var opener;
var question1;
var question2;
var choice101;
var choice102;
var choice201;
var choice202;
var extEndAudio;
var supEndAudio;
var harmEndAudio;
var symEndAudio;

//This is where the files for audio are preloaded before setup runs
function preload(){
 	
 	//Preloading audio files
 	opener = createAudio('assets/audio/opener.mp3');
 	question1 = createAudio('assets/audio/question1.mp3');
 	question2 = createAudio('assets/audio/question2.mp3');
 	choice101 = createAudio('assets/audio/choice101.mp3');
 	choice102 = createAudio('assets/audio/choice102.mp3');
 	choice201 = createAudio('assets/audio/choice201.mp3');
 	choice202 = createAudio('assets/audio/choice202.mp3');
 	extEndAudio = createAudio('assets/audio/extend.mp3');
 	supEndAudio = createAudio('assets/audio/supend.mp3');
 	harmEndAudio = createAudio('assets/audio/harmend.mp3');
 	symEndAudio = createAudio('assets/audio/symend.mp3');
}

//This is where I run the opening function
function setup(){
	createCanvas(700,150);

	playOpener();
}

//This part controls the UI
function draw(){
	background(200);

	strokeWeight(1);
	fill(50);
	rect(0,height-150,width, 200, 20);

	strokeWeight(5);
	fill(255,0,0);
	rect(25,height-125, width/2-50,100,20);
	fill(0,255,0);
	rect(width/2+25, height-125,width/2-50,100,20);

	fill(0)
	textAlign(CENTER);
	textSize(50);
	text(button1Text, width/4,height-60);

	textAlign(CENTER);
	textSize(50);
	text(button2Text, width*0.75, height-60);

}

//This controls the opening scene
function playOpener(){
	//opener.showControls(true);
	question = 0;
	opener.play();
	opener.onended(playQuestion1);
	button1Text = "Click to Skip";
	button2Text = "Click to Skip";
}

//This controls the first question
function playQuestion1(){
	question1.play();
	question1.onended(makeChoice1);
	button1Text = "Listen";
	button2Text = "Listen";
	question = 1;
}

//This controls the choice making scene
function makeChoice1(){
	button1Text = "Inferiority"
	button2Text = "Creativity"
}

//This controls the second choice making scene
function makeChoice2(){
	button1Text = "Humanitarian"
	button2Text = "Personal"
}

//This controls the second question scene
function playQuestion2(){
	question2.play();
	question2.onended(makeChoice2);
	question = 2;
}

//This part controls the endings
function controlEndings(){
	if(choice1 === 1 && choice2 === 1){
		extEndAudio.play();
		button1Text = "Bad";
		button2Text = "End";
	} else if (choice1 === 2 && choice2 === 2){
		supEndAudio.play();
		button1Text = "Bad";
		button2Text = "End";
	} else if (choice1 === 2 && choice2 === 1){
		harmEndAudio.play();
		button1Text = "Good";
		button2Text = "End";
	} else if (choice1 ===1 && choice2 === 2){
		symEndAudio.play();
		button1Text = "Best";
		button2Text = "End";
	}
}

//This part makes the buttons work
function mouseClicked(){
	if(question === 1){
		if(mouseX >= 25 && mouseX <= 350 && mouseY>= height-125 && mouseY <= height-25){
			choice1 = 1;
			button1Text = "Listen";
			button2Text = "Listen";
			choice101.play();
			choice101.onended(playQuestion2);
		} else if (mouseX >= width/2+25 && mouseX <= 675 && mouseY >= height-125 && mouseY <= height-25){
			choice1 = 2;
			button1Text = "Listen";
			button2Text = "Listen";
			choice102.play();
			choice102.onended(playQuestion2);
		}
	} else if (question === 2) {
		if(mouseX >= 25 && mouseX <= 350 && mouseY>= height-125 && mouseY <= height-25){
			choice2 =1;
			button1Text = "Listen";
			button2Text = "Listen";
			choice201.play();
			choice201.onended(controlEndings);
		} else if (mouseX >= width/2+25 && mouseX <= 675 && mouseY >= height-125 && mouseY <= height-25){
			choice2 = 2;
			button1Text = "Listen";
			button2Text = "Listen";
			choice202.play();
			choice202.onended(controlEndings);
		}
	} else if (question === 0) {
		opener.stop();
		playQuestion1();
	}
}
