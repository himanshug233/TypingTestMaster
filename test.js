var timer = document.getElementById("timer");

var timeRemaining = 60;

var testPara = document.getElementById("testPara");

var textArea = document.getElementById("textArea");

var startWindow = document.getElementById("startWindow");

var startButton = document.getElementById("startButton");

var newTestWindow = document.getElementById("newTestWindow");

var newTestButton = document.getElementById("newTestButton");

var score = 0;



var calculateScore = function() {
	
var paraSubmitted = textArea.value;
	
var submittedWords = paraSubmitted.split(" ");
	
var wordCount = submittedWords.length; 
var testWords = testPara.innerHTML.split(" ");
for( var i=0; i < wordCount ; i++)
{
	if(testWords[i]==submittedWords[i])
	score++;
}
	
return score;
};

var generatePassage = function(){

paraContainer.style.display = "inline-block";
	
textArea.style.display = "inline-block";
	
var passages = [passage1, passage2, passage3, passage4, passage5];
	
testPara.innerHTML = passages[Math.floor(Math.random()*10/2)];


};


var displayTime = function () {

	
var getTime = setInterval(function() {
		timeRemaining--;
	
	timer.innerHTML = "Time Remaining: " + timeRemaining + "s"; 

	
	console.log(timeRemaining);

		
if(timeRemaining == 0) {

			
clearInterval(getTime);

var wrapper = document.getElementById("wrapper");

wrapper.remove();

	   
timer.remove();

		
document.body.appendChild(newTestWindow);
document.getElementById("finalScore").innerHTML = "Your speed: " + calculateScore() + " words per minute.";
	
		newTestWindow.style.display = "block";
		} 
	}, 1000);


	textArea.removeEventListener("keydown", displayTime);
};

var test = function() {
	
	startWindow.style.display = "none";

	timer.innerHTML = "Time Remaining: 60s";
	timer.style.display = "block";

	textArea.addEventListener("keydown", displayTime);

	generatePassage();

};

startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});

var passage1="Four years ago, I wrote a book about Apple and the power of simplicity.It was the result of my observation, having worked with Steve Jobs as his ad agency creative director in the “think different” years,when Apple’s stellar growth was rooted in Steve’s love of simplicity.This love – you might call it obsession – could be seen in Apple’s hardware, software, packaging,marketing, retail store design, even the company’s internal organization.But that was four years ago.Though Apple’s customers remain fiercely loyal, the natives are getting restless. A growing number of people are sensing thatTim Cook’s Apple isn’t as simple as Steve’s Apple. They see complexity in expanding product lines, confusing product names,and the products themselves.";
var passage2="During World War II, Turing was a leading participant in wartime code-breaking, particularly that of German ciphers.He worked at Bletchley Park, the GCCS wartime station, where he made five major advances in the field of cryptanalysis, including specifying the bombe,an electromechanical device used to help decipher German Enigma encrypted signals.Turing’s contributions to the code-breaking process didn’t stop there: He also wrote two papers about mathematical approaches to code-breaking,which became such important assets to the Code and Cypher School (later known as the Government Communications Headquarters)that the GCHQ waited until April 2012 to release them to the National Archives of the United Kingdom.Turing moved to London in the mid-1940s, and began working for the National Physical Laboratory.";
var passage3="The tech world’s book-nerd-in-chief wants you to add two books to your list of summer science reads.To get up to speed on artificial intelligence,Microsoft cofounder and philanthropist Bill Gates recommends Nick Bostrom’s Superintelligence and Pedro Domingos’s The Master Algorithm.Gates never misses an opportunity to plug books he likes, and yesterday (June 1) at Code Conference he took a detour from his and Melinda Gates’s talk of philanthropy to recommend these two titles.“Certainly it’s the most exciting thing going on,” he said of artificial intelligence. “It’s the holy grail, it’s the big dream that anybody who’s ever been in computer science has been thinking about.His wife confirmed that he’s has been focusing on AI. “I can always tell what’s on his mind by what’s in his bag of books,” said Melinda Gates";
var passage4="Google intends to take more control over the Nexus line going forward.During an interview at the Code Conference today,Google CEO Sundar Pichai said that his company would be more opinionated about the design of the phones,particularly where Google sees a need to push the devices forward.That sounds like he could be referring to Google's desire to highlight new technologies with its Nexus devices.It's always done that to some extent — this past year, it included fingerprint sensors in its Nexus devices, helping to usher them in as almost-standard features on new Android phones.But what Pichai focused on during the interview was software. We're used to getting stock Android on Nexus phones,but Pichai says that could change.You’ll see us hopefully add more features on top of Android on Nexus phones, he said.There’s a lot of software innovation to be had.";
var passage5="As Satya Nadella becomes the third CEO of Microsoft, he brings a relentless drive for innovation and a spirit of collaboration to his new role.He joined Microsoft 22 years ago because he saw how clearly Microsoft empowers people to do magical things and ultimately make the world a better place.Many companies, he says, “aspire to change the world.But very few have all the elements required: talent, resources and perseverance. Microsoft has proven that it has all three in abundance.”With a perspective based on more than two decades at Microsoft as someone who pushed to make dynamic changes happen, both in the company’s products and its culture, Satya Nadella says he is both “honored and humbled” to succeed Bill Gates and Steve Ballmer as the third CEO of Microsoft.“Our industry does not respect tradition - it only respects innovation, he says.";
