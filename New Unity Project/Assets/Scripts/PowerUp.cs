using UnityEngine;
using System.Collections;

public class PowerUp : MonoBehaviour 
{
	float spawnTimer=10;
	public GameObject power;
	float y=9303;


	// Use this for initialization
	void Start () 
	{
		
	}
	
	// Update is called once per frame
	void Update () 
	{
		if(spawnTimer<=0)
		{
			spawnTimer=10;
			GameObject powerUp=(GameObject)Instantiate(power,new Vector3(18464,9303,2998),power.transform.rotation);
		}
		if(spawnTimer>0)
		{
			spawnTimer-=Time.deltaTime;
		}
	}
	
	void OnCollisionEnter(Collision collision)
	{
		
		
		if(collision.gameObject.tag=="Player")
		{
			DestroyObject(collider.gameObject);
			///GameObject.Instantiate(,transform.position,bullet.transform.rotation);
			print("hit");
		}
		
	}
	
	void SetPowerUp(string powerUp)
	{
		switch(powerUp)
		{
		case "Lenzo":
			break;
		case "Nimbus":
			break;
		case "Ghost":
			break;
		case "Cirro":
			break;
		case "Nuvem":
			break;
		case "Wolk":
			break;
		}
			
	
	}
}


		