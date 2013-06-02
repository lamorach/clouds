#pragma strict

///public var buttonStart : GameObject;
public var buttons : GUITexture;

function Start () 
{

}

function Update () 
{

}

function OnMouseDown()
{
	if(gameObject.tag=="Start")
	{
		Menu.buttons=1;
	}
	else if(gameObject.tag=="Options")
	{
		Menu.buttons=2;
		
	}
	else if(gameObject.tag=="Exit")
	{
		Menu.buttons=3;
		
	}
	
	buttons.color.b=0;

}

function OnMouseUp()
{
	buttons.color.b=.7;
}




