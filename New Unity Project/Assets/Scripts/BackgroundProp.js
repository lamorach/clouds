#pragma strict
var original : boolean = false;
function Start () {
}

function Update() 
{
	if(GameManager.isPaused==false)
	{
		if (!original)
		{
		transform.Translate(new Vector3(.5,0,0));
		}
	}
}
function Initialize()
{
original = false;
}
function OnBecameInvisible() 
{
		Destroy(gameObject);
}