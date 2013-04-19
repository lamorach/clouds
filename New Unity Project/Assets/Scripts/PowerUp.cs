using UnityEngine;
using System.Collections;

public class PowerUp : MonoBehaviour 
{
	GameObject player;

	// Use this for initialization
	void Start () 
	{
	
	}
	
	// Update is called once per frame
	void Update () 
	{
	
	}
	
	void onCollisionEnter(Collision collision)
	{
		if(collision.gameObject.tag=="PowerUp")
		{
			///GameObject.Instantiate(,transform.position,bullet.transform.rotation);
			print("hit");
			
			
		}
		
	}
}
