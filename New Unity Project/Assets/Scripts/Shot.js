#pragma strict
var alive : boolean = false;
var speed : float = 5;
var original : boolean = false;
function Start () {

}

function Update () {
	if (!original)
	{
	var timeSpeed : float;
	if (active)
	{
		timeSpeed = speed * Time.deltaTime;
		transform.Translate(0,-timeSpeed,0);
	}
	}
}

function OnBecameInvisible() {
	if (!original)
		Destroy(gameObject);
}