#pragma strict
var bg:Texture;
function Awake(){
		
	this.GetComponent(GUITexture).texture = bg;
	this.GetComponent(RollingScript).texts = [
	"Hurry Rufus, this place is unstable.",
	"You really want to know?",
	"You see, I can't say that I died!",
	"The version of me in the real world did...",
	"I am just an image created by your consciousness...",
	"Your conscious is getting weaker and hence, so is mine.",
	"Anyhow, we are almost there.",
	"What about me? Don't bother.",
	"There's not much you can do about it now doesn't it!",
	"There's still a place for you in the world.",
	"That? It's noth ... No Rufus! Don't go that way!",""
	];

}
function LoadScene()
{
	Application.LoadLevel("Level 8");

}