#pragma strict
var HitPoints : float = 200.0f;
var Shots :GameObject[]; //shots for pattern 1 and 2 (bombs)
var Shots2 :GameObject[]; //shots for pattern 4
var currentPhase = 0;
//1 is for bombing run left, 2 is for bombing run right, 3 is for sending planes, 4 is for park and shoot
var EnemySpawns :GameObject[]; //enemies to send in pattern 3
var bombFrequency : float = 1.2; //time between bomb drops, decreases as health gets lower
private var bombTimer : float = bombFrequency;
var shotFrequency : float = 0.8; //time between gun shots, same as above
private var shotTimer : float = shotFrequency;
var flyBySpeed : float = 7; //how fast it flys in pattern 1 and 2
var phase4MoveTime : float = 2.0; //how long the bomber will move before it parks and shoots
var phase4MoveTimer = phase4MoveTime;
var phase4BulletLimit = 5;
var phase4BulletsLeft = phase4BulletLimit;
var rotateAmount = 180;
var pissyBossModeActive = false;
function Start () {

}

function OnBecameInvisible () { //when it leaves the screen, change the phase and turn it around
	currentPhase++;
	transform.Rotate(0,0,180);
}
function Update () {
if(GameManager.isPaused==false)
{
	if (currentPhase == 0) return; //for the boss sitting in the scene
	var timeElapsed = Time.deltaTime;
	if (currentPhase == 1) //bombing left
	{
		transform.Translate(0,flyBySpeed * timeElapsed,0);
		if (bombTimer <= 0)
		{
		bombTimer = bombFrequency;
			for (var i = 0; i < Shots.Length; i++)
			{
			var newBullet =	GameObject.Instantiate(Shots[i],transform.position,Shots[i].transform.rotation);
			newBullet.GetComponent(Shot).Initialize("Enemy Base");
			}
		}
		bombTimer -= timeElapsed;
	}
	if (currentPhase == 2) //bombing right
		{
		transform.Translate(0,flyBySpeed * timeElapsed,0);
		if (bombTimer <= 0)
		{
		bombTimer = bombFrequency;
			for (var j = 0; j < Shots.Length; j++)
			{
			var newBullet2 =	GameObject.Instantiate(Shots[j],transform.position,Shots[j].transform.rotation);
			newBullet2.GetComponent(Shot).Initialize("Enemy Base");
			}
		}
		bombTimer -= timeElapsed;
	}
	if (currentPhase == 3) //send enemies
	{
		transform.Translate(0,0,-10);
		for (var k = 0; k < EnemySpawns.Length; k++)
		{
			var spawnedEnemy =GameObject.Instantiate(EnemySpawns[k],new Vector3(18475,9305.613 + 4 * k,2998.23),EnemySpawns[k].transform.rotation);
			
			spawnedEnemy.GetComponent(Enemy).Initialize();
			
			spawnedEnemy.GetComponent(Enemy).xSpeed = 5;
		}
		currentPhase = 4;
	}
	if (currentPhase == 4) //park and shoot
	{
		if (phase4MoveTimer > 0)
		{
			transform.Translate(0,flyBySpeed * timeElapsed,0);
			phase4MoveTimer -=timeElapsed;
		}
		else
		{
			if (shotTimer <= 0)
			{
				phase4BulletsLeft--;
				shotTimer = shotFrequency;
				for (var a = 0; a < Shots2.Length; a++)
				{
					var newBullet3 =	GameObject.Instantiate(Shots2[a],transform.position,Shots2[a].transform.rotation);
					newBullet3.GetComponent(Shot).Initialize("Enemy Base");
				}
				if (phase4BulletsLeft <= 0)
				{
					currentPhase = 5;
					phase4BulletsLeft = phase4BulletLimit;
					phase4MoveTimer = phase4MoveTime;
				}
			}
			shotTimer-= timeElapsed;
		}
	}
	if (currentPhase == 5) //Rotate to go back
	{
		transform.Rotate(0,0,1);
		rotateAmount--;
		if (rotateAmount <= 0)
		{
			currentPhase++;
			flyBySpeed = flyBySpeed;
			rotateAmount = 180;
			}
	}
	if (currentPhase == 6) //go back
	{
		transform.Translate(0, flyBySpeed * timeElapsed,0);
	}
	if (currentPhase == 7) //summon more enemies and go back up for bombing runs
	{
		for (var l = 0; l < EnemySpawns.Length; l++)
		{
			var spawnedEnemy2 =GameObject.Instantiate(EnemySpawns[l],new Vector3(18475,9305.613 + 4 * l,2998.23),EnemySpawns[l].transform.rotation);
			
			spawnedEnemy2.GetComponent(Enemy).Initialize();
			
			spawnedEnemy2.GetComponent(Enemy).xSpeed = 5;
		}
		transform.Translate(0,0,10);
		currentPhase = 1;
	}
}
}

function OnCollisionEnter(collision : Collision)
{
var startDeath: boolean = false;
print("bomber hit with " + collision.gameObject.tag.ToString());
if(collision.gameObject.tag=="LaserPlayer")
{
	HitPoints-=.03f;
	collision.gameObject.collider.enabled = false;
	if (HitPoints <= 0)
	startDeath = true;
}
else if (collision.gameObject.tag=="PlayerShot")
{
	collision.gameObject.collider.enabled = false;
	HitPoints -= collision.gameObject.GetComponent(Shot).damage;
	if (HitPoints <= 0)
	startDeath = true;
}
if (HitPoints < 30 && pissyBossModeActive == false)
{
	pissyBossModeActive = true;
	if (flyBySpeed > 0)
	flyBySpeed += 3;
	else
	flyBySpeed -= 3;
	bombFrequency -= 0.4;
}
	if (startDeath)
	{
		currentPhase = 0;
		Destroy(gameObject);
		}
}