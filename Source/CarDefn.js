
class CarDefn
{
	constructor(name, acceleration, braking, wheelFrictionTransverse, size)
	{
		this.name = name;
		this.acceleration = acceleration;
		this.braking = braking;
		this.wheelFrictionTransverse = wheelFrictionTransverse;
		this.size = size;
	}

	static byName(name)
	{
		return CarDefn.Instances().byName(name);
	}

	static Instances()
	{
		if (CarDefn._instances == null)
		{
			CarDefn._instances = new CarDefn_Instances();
		}
		return CarDefn._instances;
	}
}

class CarDefn_Instances
{
	constructor()
	{
		this.Default = new CarDefn
		(
			"Default",
			1, // acceleration
			1, // braking
			1, // wheelFrictionTransverse
			new Coords(10, 6) // size
		);

		this._All = 
		[
			this.Default
		];
	}

	byName(name)
	{
		return this._All.find(x => x.name == name);
	}
}
