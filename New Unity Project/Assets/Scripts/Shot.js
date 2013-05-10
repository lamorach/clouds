#pragma strict
var homing : boolean = false;
var alive : boolean = false;
var speed : float = 5;
var original : boolean = false;
var tempTime:float =0;
var playerShot:boolean = true;
public static var intPowerUps: int=0;
public static var powerStacks: int=0;
var stacks: int=0;
public static var damage: int=1;
var lifetime : float = 3.0f;
var isVisible : boolean = false;
function Start () 
{

}

function Update () 
{
	if (!isVisible) return;
	if (lifetime < 0)
		Destroy(gameObject);
	lifetime -=Time.deltaTime;
	
stacks=powerStacks;

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
		if (homing)
			Homing();
		else //default behavior is just moving forward
		{
			timeSpeed = speed * Time.deltaTime;
			if (playerShot)
			timeSpeed*=-1;
			transform.Translate(0,timeSpeed,0);
		}

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
		tag="PlayerShot";
	break;
	case "Enemy Base":
		playerShot = false;
		speed = 5;
		tag="EnemyShot";
	break;
	case "LaserPlayer":
		playerShot = true;
		speed = 5;
		tag="LaserPlayer";
	break;
	case "LaserEnemy":
		playerShot = false;
		speed = 5;
		tag="LaserEnemy";
	break;
	
	}
}

function OnBecameInvisible() 
{
	if (!original)
		Destroy(gameObject);
}

function OnBecameVisible()
{
isVisible = true;
}
function OnCollisionEnter(collision : Collision) 
{
	
}

function Homing()
{
			var targetPos = GameObject.Find("Player").transform.position;
			transform.position = Vector3(Mathf.MoveTowards(transform.position.x, targetPos.x, 0.05),
										Mathf.MoveTowards(transform.position.y, targetPos.y, 0.05),
										Mathf.MoveTowards(transform.position.z, targetPos.z, 0.05));
			var rotateTarget = targetPos;
		
			if (GameObject.Find("Main Camera").GetComponent(CameraOrbit).topViewRotate)
			rotateTarget.y -=5;
			else
			{
		
			rotateTarget.y -= 1;
			}
			
			
			transform.LookAt(rotateTarget);
}

