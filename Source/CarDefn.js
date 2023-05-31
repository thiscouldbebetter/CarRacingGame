
class CarDefn
{
	constructor
	(
		name,
		acceleration,
		braking,
		wheelAngleInTurnsMax,
		tireFrictionTransverse,
		speedMax,
		size,
		visual
	)
	{
		this.name = name;
		this.acceleration = acceleration;
		this.braking = braking;
		this.wheelAngleInTurnsMax = wheelAngleInTurnsMax;
		this.tireFrictionTransverse = tireFrictionTransverse;
		this.speedMax = speedMax;
		this.size = size;
		this.visual = visual;
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
		var carSize = new Coords(10, 6, 1); // size

		var carDefnByColor = (colorName) => 
		{
			return new CarDefn
			(
				colorName,
				.05, // acceleration
				.1, // braking
				.125, // wheelAngleInTurnsMax
				.1, // wheelFrictionTransverse
				3, // speedMax
				carSize,
				new VisualPath
				(
					Path.rectangleOfSize(carSize),
					1, // borderWidthInPixels
					colorName, // colorFillName
					"Gray" // colorBorderName
				)
			);
		}

		this.Blue = carDefnByColor("Blue");
		this.Green = carDefnByColor("Green");
		this.Red = carDefnByColor("Red");
		this.Yellow = carDefnByColor("Yellow");

		this._All = 
		[
			this.Blue,
			this.Green,
			this.Red,
			this.Yellow
		];
	}

	byName(name)
	{
		return this._All.find(x => x.name == name);
	}
}
