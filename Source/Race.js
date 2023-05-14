
class Race
{
	constructor(name, track, cars)
	{
		this.name = name;
		this.track = track;
		this.cars = cars;
	}

	static demo()
	{
		var track = Track.demo();
		var trackStartPos = track.path.vertexPositions[0];
		var cars = [
			Car.fromColorNameAndPos("Red", trackStartPos.clone() )
		];

		var race = new Race
		(
			"RaceDemo",
			track,
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
		this.cars.forEach(x => x.updateForTimerTick(universe, world) );
	}
}
