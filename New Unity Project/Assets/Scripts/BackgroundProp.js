#pragma strict
var original : boolean = false;
function Start () {
}

function Update() {
if (!original)
transform.Translate(new Vector3(-1,0,0));

}