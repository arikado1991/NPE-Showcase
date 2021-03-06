﻿#pragma strict


function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(20,20,20);
	
	grid.CreateTrap(Vector3(0,0,5));
	for (var i:int= 0; i < 10; i++)
		grid.CreateTrap(Vector3(i, 0, 5));
	for (var j: int = 0; j < 10; j++)
	{	
		grid.CreateTrap(Vector3(i, j, j+5));
		
	}
	grid.BuildRect(Vector3(i-1,j,j+5), Vector3(i+1, j,j+7),"box");
	var bridge: Vector3[] = new Vector3[14];
	var anotherBridge: Vector3[] = new Vector3[7];
	for (i = 0; i < 7; i++){
		bridge[i] = Vector3(i+3,j,j+5);
		bridge[i+7] = Vector3(3,j,i+8);
		anotherBridge[i] = Vector3(3,j,i+8);
	}
	//Debug.Log(Vector3(i+2,j,j+5).ToString());
	grid.CreateButton(Vector3(i+3,j+1,j+6), bridge.Clone(),[], false);
	
	grid.BuildRect(Vector3(2,j,5), Vector3(4, j,7),"box");	
	grid.CreateButton(Vector3(3,j,6),[],
	[Vector3(3,j-1,2), Vector3(3,j-1,3), Vector3(3,j-2,4),
	Vector3(2,9,4), Vector3(2,j-1,2), Vector3(2,j-1,3), Vector3(2,j-1,2)], true);
	grid.CreateIceBlock(Vector3(3,j+1,6));
	grid.CreateIceBlock(Vector3(3,j+1,5));
	grid.CreateButton(Vector3(3,j,16),
		[Vector3(10,9,18), Vector3(10,8,19), Vector3(9,7,19),
		Vector3(9,6,18), Vector3(9,5,17), Vector3(10,5,17), Vector3(11,5,17)
		
		
		
		
		],
		anotherBridge,true);
		

	var rebuiltBridge: Vector3[] = new Vector3[7];
	grid.CreateBlock(Vector3(1,9,2));
	for (i=2;i< 12;i++){
		grid.CreateTrap(Vector3(0,j--,i));	
	//	rebuiltBridge[i] = Vector3(0,j,i);
	}
	//11,9,17
	for (i = 1; i < 6; i++){
		rebuiltBridge[i] = Vector3(11,6-i,17-i);
	}
	
	
	grid.BuildRect(Vector3(0,0,14), Vector3(2,0,19), "box");
	grid.CreateBlock(Vector3(0,0,13));
	grid.CreateButton(Vector3(0,0,12),[Vector3(1,0,12),Vector3(1,0,11),Vector3(2,0,11),Vector3(3,0,11), Vector3(4,0,11), Vector3(5,0,11)],[Vector3(0,0,13)], false);
	grid.BuildRect(Vector3(5,1,12), Vector3(10,1,18), "box");
	grid.CreateIceBlock(Vector3(6,2,17));
	grid.CreateIceBlock(Vector3(9,2,18));
	grid.CreateIceBlock(Vector3(9,2,16));
	grid.CreateIceBlock(Vector3(6,2,13));
	grid.CreateButton(Vector3(5,1,17),[Vector3(9,1,19), Vector3(8,1,19)],[Vector3(9,1,12)],true);
	grid.CreateButton(Vector3(5,1,14),[Vector3(4,1,17),Vector3(3,1,17)],[],true);
	grid.CreateButton(Vector3(10,1,18),rebuiltBridge,[],true);


	//grid.CreateButton(Vector3(3-j,0,14+j),[],[Vector3(3-i,0,17), Vector3(3-i,0,18), Vector3(3-i,0,19)],false);

	for (i=0;i<3;i++){
		for(j=0;j<3;j++)
			grid.CreateButton(Vector3(2-j,0,16-i),[],[ Vector3(2-i,0,18), Vector3(2-i,0,19)],false);
	}
	grid.CreateButton(Vector3(1,0,14),[],[ Vector3(0,0,17), Vector3(1,0,17)],false);
	for (i=0;i<2;i++)
		for(j=15;j<17;j++)
			grid.Destroy(Vector3(i,0,j));
	grid.SpawnCharacter(Vector3(0,1,5));
	grid.CreateBlock(Vector3(0,0,14));
//	grid.SpawnCharacter(Vector3(5,2,12));
	grid.CreatePizza(Vector3(3,12,16));
	grid.CreatePuppy(Vector3(0,1,14));
	grid.CreateDestination (Vector3(0,1,19));
	
	grid.character.prefab.FindGameObjectWithTag("MainCamera").BroadcastMessage("Shake");
}
