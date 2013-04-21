using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour 
{
	enum powerUp{Nimbus,Wolk,Lenzo,Nuvem,Cirro,Ghost};
	int numPowerUp=0;
	public GameObject power;
	float spawnTimer=10;
	// Use this for initialization
	void Start () 
	{
	
	}
	
	// Update is called once per frame
	void Update () 
	{
		if(spawnTimer<=0)
		{
			
			int randomNumX=Random.Range(18468,18473);
			int randomNumY=Random.Range(9300,9306);
			spawnTimer=10;
			GameObject powerUp=(GameObject)Instantiate(power,new Vector3(randomNumX,randomNumY,2998),power.transform.rotation);
			powerUp.GetComponent<PowerUp>().Initialize();
		}	
		if(spawnTimer>0)
		{
			spawnTimer-=Time.deltaTime;
		}
	
	}
}
