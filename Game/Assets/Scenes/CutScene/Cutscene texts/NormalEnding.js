#pragma strict
var bg:Texture;
function Awake(){
		
	this.GetComponent(GUITexture).texture = bg;
	this.GetComponent(RollingScript).texts = [
	"Looks like you made it!",
	"That's a relieve...",
	"It's a pity that I could not accompany you any further.",
	"It's the realm that I no longer have the right to set my paw on.",
	"Don't be sad. You're a good man.",
	"They will except you, eventually ...",
	"...",
	"Hey Rufus, how are you feeling. The name's Niwsha, a few days ago we thought we've lost you.", 
	"Whatever you need, we are here to help.",
	"Oh, and welcome back."

	];

}
function LoadScene()
{
	Application.LoadLevel("Title");

}