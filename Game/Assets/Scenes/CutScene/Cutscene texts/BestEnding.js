#pragma strict
var bg:Texture;
function Awake(){
		
	this.GetComponent(GUITexture).texture = bg;
	this.GetComponent(RollingScript).texts = [
	"Why the hell didn't you listen to me!",
	"That was the only way for you to come back.",
	"I can't do anything to get you out now...",
	"You don't mind staying here?",
	"That's the stupidest thing I've heard.",
	"But that makes me happy.",
	"...",
	"That's good enough for me.",
	"I guess I'll give up what's left of me to get you out.",
	"Hehe! It's been too long that this existence of mine becomes boring anyways...",
	"I'm sorry for using your consciousness to maintain this pitiful existence",
	"It's pathetic, I know",
	"But I'm fine now, really.",
	"Take care Rufus. You're a good man.",
	"Oh! One more thing, when it is something you want. Don't hesitate.",
	"<flash>",
	" ---- Sometimes 5 years later ---- ",
	"Haah! What a day.",
	"It's been 2 years already can you believe it?",
	"The flowershop bussiness starts to fly, it was like a dream come true.",
	"Oh! Larry called today, he said he want you to go with him for a beer.",
	"Ow! That was quite a kick!",
	"Say, what should we name him?",
	"Spike huh? Why?",""
	];

}
function LoadScene()
{
	Application.LoadLevel("Credit");

}