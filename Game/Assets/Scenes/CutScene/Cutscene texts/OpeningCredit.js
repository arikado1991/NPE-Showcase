#pragma strict

// button width:

var texts: String[];

var showText: String;

var bg: Texture;


function Awake(){
	this.GetComponent(GUITexture).texture = bg;
	this.GetComponent(RollingScript).texts = ["Created by:\n:NullPtrException","Lead Programmers:\n\nEric Miller\nJiacheng Liu\nViet Phan", "Story writer:\n\nEmily Haymond", 
	"Music composer:\n\nShannon Daniel \n","","Parkour expert\n\nAshwin Lall"];

}

function LoadScene()
{
	Application.LoadLevel("Title");

}