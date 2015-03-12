#pragma strict
var customSkin:GUISkin;
var buttonW:int;// = 600;
@HideInInspector
var buttonH:int;// = 100;
@HideInInspector
var padding:int;// = 30;
var levels:String[,]; 

@HideInInspector
var maxLv: int ;

function Start () {
	customSkin.button.fontSize = Screen.height*.05;
	var levelslist = [["Level 1: Back on your feet", "CutScene1"], 
						["Level 2: Button it up!", "CutScene2"], 
						["Level 3: Turn and slide", "CutScene3"], 
//						["Level 4: Combinations", "Level 4"], 
						["Level 4: Flower shop", "CutScene4"], 
						["Level 5: Larry the Mechanic", "CutScene5"], 
						["Level 6: Rufus", "CutScene6"], 
						["Level 7: Spiky pillar of truth", "CutScene7"], 
						
						["Level 8: Meltdown", "CutScene8"], 
	
						["Title Screen", "Title"]];
	maxLv = levelslist.GetLength(0);
	levels = new String[maxLv,2];
	
	for (var i:int = 0; i < maxLv; i++){

		levels[i,0] = levelslist[i][0];
		levels[i,1] = levelslist[i][1];
	}
}
function Update () {}

function OnGUI(){
	GUI.skin = customSkin;
	buttonH = Screen.height*.8/ maxLv;
//	buttonW = buttonH*2;
	padding = Screen.height*.02;
	for (var i:int = 0; i < maxLv; i++){


		var pos:Rect = Rect(Screen.width / 2 - buttonW/2, padding + i*(buttonH+padding), 
							buttonW, buttonH);
		if(GUI.Button(pos, levels[i,0])){
			Debug.Log(levels[i,1]);
			Application.LoadLevel(levels[i,1]);
		}
	}
}