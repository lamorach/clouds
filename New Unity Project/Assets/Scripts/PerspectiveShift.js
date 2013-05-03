#pragma strict
var mainCamera : GameObject;
function Start () {
	mainCamera = GameObject.Find("Main Camera");
}

function Update() {
transform.Translate(new Vector3(-1,0,0));
}
function OnBecameVisible() {
	mainCamera.GetComponent("CameraOrbit").SendMessage("PerspectiveShift");

}