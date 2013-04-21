using UnityEngine;
using System.Collections;

public class PowerUp : MonoBehaviour 
{

	public bool original;
	


	// Use this for initialization
	public void Start () 
	{
		
	}
	public void Initialize()
	{
		original=false;
	}
	// Update is called once per frame
	void Update () 
	{
		if(!original)
		{
			float translateX =-1 * 1 * Time.deltaTime;
			transform.Translate(translateX,0,0);
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


		