
class Track
{
	constructor(name, size, width, path)
	{
		this.name = name;
		this.size = size;
		this.width = width;
		this.path = path;

		this.widthHalf = this.width / 2;
	}

	static demo()
	{
		var trackSize = new Coords(600, 600);
		var trackWidth = 80;
		var trackPath = new Path
		([
			new Coords(150, 80, 0),
			new Coords(520, 80, 0),
			new Coords(520, 520, 0),
			new Coords(80, 520, 0),
			new Coords(80, 80, 0)
		]);

		var track = new Track
		(
			"TrackDemo",
			trackSize,
			trackWidth,
			trackPath
		);

		return track
	}

	drawToDisplay(display)
	{
		display.drawPathWithWidthAndColors(this.path, this.width, null, "rgb(48, 48, 48)");
	}

	initialize()
	{
		// todo
	}
}
