
class Race
{
	constructor(name, track, obstacles, cars)
	{
		this.name = name;
		this.track = track;
		this.obstacles = obstacles;
		this.cars = cars;
	}

	static demo()
	{
		var track = Track.demo();
		var trackStartPos = track.path.vertexPositions[0].clone().add
		(
			track.size.clone().half()
		);
		var carPlayer = Car.fromColorNameAndPos("Red", trackStartPos.clone() );
		var carSpacing = new Coords(0, carPlayer.defn().size.y * 2);
		carPlayer.disposition.pos.subtract(carSpacing);
		carPlayer.activity.defnName = ActivityDefn.Instances().UserInputAccept.name;

		var cars =
		[
			carPlayer,
			Car.fromColorNameAndPos("Yellow", trackStartPos.clone() ),
			Car.fromColorNameAndPos("Green", trackStartPos.clone().add(carSpacing) ),
			Car.fromColorNameAndPos("Blue", trackStartPos.clone().add(carSpacing).add(carSpacing) )
		];

		var obstacles =
		[
			new Obstacle(new Coords(10, 10, 0), track.size.clone().half() )
		];

		var race = new Race
		(
			"RaceDemo",
			track,
			obstacles,
			cars
		);

		return race;
	}

	drawToDisplay(display)
	{
		display.fillWithColor("Green");
		this.track.drawToDisplay(display);
		this.cars.forEach(x => x.drawToDisplay(display) );
	}

	initialize()
	{
		this.track.initialize();
		this.cars.forEach(x => x.initialize() );
	}

	updateForTimerTick(universe, world)
	{
		this.drawToDisplay(universe.display);
		this.cars.forEach(x => x.updateForTimerTick(universe, world, this) );
	}
}
