#pragma strict
var alive : boolean = false;
var speed : float = 5;
var original : boolean = false;
var tempTime:float =0;
var playerShot:boolean = true;
public static var intPowerUps: int=0;
public static var powerStacks: int=0;
var stacks: int=0;
function Start () 
{

}

function Update () 
{	stacks=powerStacks;

	if (!original)
	{
		var timeSpeed : float;
		if (alive && playerShot)
		{
			if(intPowerUps==1)
			{
				timeSpeed = speed * Time.deltaTime;
				if (playerShot)
				timeSpeed*=-1;
				transform.Translate(timeSpeed,0,0);
			}
			else
			{
				timeSpeed = speed * Time.deltaTime;
				if (playerShot)
				timeSpeed*=-1;
				transform.Translate(0,timeSpeed,0);
			}
		
		}
		else if(alive && !playerShot)
		{
			timeSpeed = speed * Time.deltaTime;
			if (playerShot)
			timeSpeed*=-1;
			transform.Translate(0,timeSpeed,0);
		}
	}
}
function Initialize(shotType:String)
{
	alive = true;
	original = false;
	switch(shotType)
	{
	case "Player Base":
		playerShot = true;
		speed = 5;
	break;
	case "Enemy Base":
		playerShot = false;
		speed = 5;
	break;
	}
}

function OnBecameInvisible() 
{
	if (!original)
		Destroy(gameObject);
}

function OnTriggerEnter(other : Collider) 
{
	if (other.gameObject.name == "Enemy(Clone)")
		Destroy(gameObject);
}


