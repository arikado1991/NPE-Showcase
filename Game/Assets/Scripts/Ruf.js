#pragma strict

function Start () {

}

function Update () {

}

function Spin(angle){
	transform.RotateAround(transform.position,Vector3.up, angle);
	Debug.Log("Spin");
}