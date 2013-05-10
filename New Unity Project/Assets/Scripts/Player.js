#pragma strict
var bullet=new GameObject[5];
var speed : float = 5;
public static var cooldownTimer: float=1;
private var prevX : float;
private var prevY : float;
private var timer=0;
var c : CharacterController;
var isDead: boolean = false;
var startDeath: boolean = false;
var controllable : boolean = true;
private var originalPosition : Vector3;
function Start () {
    c = GetComponent(CharacterController);
     originalPosition = transform.position;
}

function Update () 
{
if (!controllable) return;

	var translationX : float = Input.GetAxis ("Horizontal") * speed;
	var translationY : float = Input.GetAxis ("Vertical") * speed;
	translationX *= Time.deltaTime;
	translationY *= Time.deltaTime;
	rigidbody.transform.Translate(translationX,0,translationY);
	transform.Translate(translationX,0,translationY);
	prevX = translationX;
	prevY = translationY;
	if (!isDead)
	{
		if (Input.GetButton("Fire1") && cooldownTimer<=0)
		{
			if(Shot.intPowerUps==0|| Shot.intPowerUps==4 || Shot.intPowerUps==6)
			{
				cooldownTimer=.4;
				var newBullet = GameObject.Instantiate(bullet[0],transform.position,bullet[0].transform.rotation);
				newBullet.GetComponent(Shot).Initialize("Player Base");
			}
			
			if(Shot.intPowerUps==1)//Lenzo
			{
				cooldownTimer=.5;
				var newTwister = GameObject.Instantiate(bullet[3],transform.position,bullet[3].transform.rotation);
				newTwister.GetComponent(Shot).Initialize("Player Base");
			}//Lenzo end
			
			if(Shot.intPowerUps==2)//Nimbus
			{
				if(Shot.powerStacks>1)
				{
					var newBeam = GameObject.Instantiate(bullet[4],transform.position,bullet[4].transform.rotation);
					newBeam.transform.localScale= new Vector3(.5,.8,.4);
					newBeam.GetComponent(Shot).Initialize("LaserPlayer");
				}
				else
				{
					var newBeam2 = GameObject.Instantiate(bullet[4],transform.position,bullet[4].transform.rotation);
					newBeam2.GetComponent(Shot).Initialize("LaserPlayer");
				}
				
			}//Nimbus end
			
			if(Shot.intPowerUps==3)//Ghost
			{
				if(Shot.powerStacks>1)
				{
					cooldownTimer=1.5;
				}
				else
				{
					cooldownTimer=1.3;
				}
				
				var newFog = GameObject.Instantiate(bullet[2],transform.position,bullet[2].transform.rotation);
				newFog.GetComponent(Shot).Initialize("Player Base");
			}//Ghost end
			
			
			if(Shot.intPowerUps==4)//cirro power
			{
				cooldownTimer=.25;
				
				if(Shot.powerStacks>1)
				{
					cooldownTimer=.2;
				}
			}//cirro end
			
			
			if(Shot.intPowerUps==5)//Nuvem
			{
				if(Shot.powerStacks>1)
				{
					cooldownTimer=.9;
				}
				else
				{
					cooldownTimer=1;
				}
				
				var newAcid = GameObject.Instantiate(bullet[1],transform.position,bullet[1].transform.rotation);
				newAcid.GetComponent(Shot).Initialize("Player Base");
			}//Nuvem end
			
			if(Shot.intPowerUps==6)//wolk power
			{
				cooldownTimer=.4;
				var newBullet2 = GameObject.Instantiate(bullet[0],new Vector3(transform.position.x, transform.position.y-1,transform.position.z),bullet[0].transform.rotation);
				newBullet2.GetComponent(Shot).Initialize("Player Base");
				if(Shot.powerStacks>1)
				{
					cooldownTimer=.4;
					var newBullet3 = GameObject.Instantiate(bullet[0],new Vector3(transform.position.x, transform.position.y-2,transform.position.z),bullet[0].transform.rotation);
					newBullet3.GetComponent(Shot).Initialize("Player Base");
				}
			}///wolk end
			
			
			
		}
		
		
		
		if(cooldownTimer>0)
		{
			cooldownTimer-=Time.deltaTime;
			
		}
	}
	Death();
		
}

function OnCollisionEnter(collision : Collision)
{
	
	if (collision.gameObject.tag=="EnemyShot" || collision.gameObject.tag=="Enemy")
	{
		GameManager.playerHp--;
		if(GameManager.playerHp<=0)
		{
			startDeath=true;
		}
	}


}	

function Death()
{
	if(startDeath)
		{
			print("Player is Dead!");	
			rigidbody.constraints=~RigidbodyConstraints.FreezePositionX;
			yield WaitForSeconds(.4);
			rigidbody.constraints=~RigidbodyConstraints.FreezePositionY;
			print("Player is Dead!");	
			isDead = true;
			
		}
}

function PerspectiveShift(topShift : boolean) {
	if (topShift)
		transform.position.y = originalPosition.y;
	else
		transform.position.z = originalPosition.z;
	controllable = false;
}