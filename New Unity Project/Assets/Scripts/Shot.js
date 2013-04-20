#pragma strict
var alive : boolean = false;
var speed : float = 5;
var original : boolean = false;
var tempTime:float =0;
var playerShot:boolean = true;
function Start () {

}

function Update () 
{
	if (!original)
	{
		var timeSpeed : float;
	if (alive)
	{
		
		timeSpeed = speed * Time.deltaTime;
		if (playerShot)
		timeSpeed*=-1;
		transform.Translate(0,timeSpeed,0);
	}
	}
}

function OnBecameInvisible() 
{
	if (!original)
		Destroy(gameObject);
}
function OnTriggerEnter(other : Collider) {
	if (other.gameObject.name == "Enemy(Clone)")
		Destroy(gameObject);
}