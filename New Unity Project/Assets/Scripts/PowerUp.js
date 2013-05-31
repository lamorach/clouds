#pragma strict

var buffAnimation: AnimationClip;
var original:boolean;
	// Use this for initialization
	function Start () 
	{
		
	}
	function Initialize()
	{
		original=false;
	}
	// Update is called once per frame
	function Update () 
	{
		if(buffAnimation==null)
		{
		}
		else
		{
		//	gameObject.animation.Play(buffAnimation.name);
		}
		
		if(!original)
		{
			var translateX :float =-1 * 1 * Time.deltaTime;
			transform.Translate(translateX,0,0);
		}
		//cheat mode stuff
		
		if(Input.GetButtonDown("l"))
		{
			Shot.intPowerUps=2;
			GameManager.currentPower=2;
			Shot.powerStacks++;
		}
	}
	
	function OnCollisionEnter(collision:Collision)
	{
		
		
		if(collision.gameObject.tag=="Player")
		{
			DestroyObject(collider.gameObject);
		
			if(collider.gameObject.tag=="Lenzo" && GameManager.currentPower!=1)
			{
				Shot.powerStacks=0;
			}
			else if(collider.gameObject.tag=="Nimbus" && GameManager.currentPower!=2)
			{
				Shot.powerStacks=0;
			}
			else if(collider.gameObject.tag=="Ghost" && GameManager.currentPower!=3)
			{
				Shot.powerStacks=0;
			}
			else if(collider.gameObject.tag=="Cirro" && GameManager.currentPower!=4)
			{
				Shot.powerStacks=0;
			}
			else if(collider.gameObject.tag=="Nuvem" && GameManager.currentPower!=5)
			{
				Shot.powerStacks=0;
			}
			else if(collider.gameObject.tag=="Wolk" && GameManager.currentPower!=6)
			{
				Shot.powerStacks=0;
			}
			SetPowerUp(collider.gameObject);
			print("hit");
		}
		
	}
	
	function SetPowerUp(powerPickUp: GameObject)
	{
		
		
		
	
	
		switch(powerPickUp.tag)
		{
		case "Lenzo":
			Shot.intPowerUps=1;
			GameManager.currentPower=1;
			Shot.powerStacks++;
			print ("Lenzo");
			break;
		case "Nimbus":
			Shot.intPowerUps=2;
			GameManager.currentPower=2;
			Shot.powerStacks++;
			print ("Nimbus");
			break;
		case "Ghost":
			Shot.intPowerUps=3;
			GameManager.currentPower=3;
			Shot.powerStacks++;
			print ("Ghost");
			break;
		case "Cirro":
			Shot.intPowerUps=4;
			GameManager.currentPower=4;
			Shot.powerStacks++;
			print ("Cirro");
			break;
		case "Nuvem":
			Shot.intPowerUps=5;
			GameManager.currentPower=5;
			Shot.powerStacks++;
			print ("Nuvem");
			break;
		case "Wolk":
			Shot.intPowerUps=6;
			GameManager.currentPower=6;
			Shot.powerStacks++;
			print ("Wolk");
			break;
			default:
			GameManager.currentPower=0;
			break;
		}
			
	
	}

