
class Track
{
	constructor(name, size, width, path)
	{
		this.name = name;
		this.size = size;
		this.width = width;
		this.path = path;

		this.disposition = Disposition.fromPos(this.size.clone().half() );

		this.widthHalf = this.width / 2;
		var borderWidth = this.width / 10;
		var lineColor = "LightGray";

		this.visual = new VisualMultiple
		([
			// Border lines.
			new VisualPath
			(
				this.path,
				this.width + borderWidth * 2, // borderWidthInPixels
				null, // colorFillName
				lineColor // colorBorder
			),

			// Asphalt.
			new VisualPath
			(
				this.path,
				this.width, // borderWidthInPixels
				null, // colorFillName
				"rgb(48, 48, 48)", // colorBorder
			),

			// Start/finish line.
			new VisualOffset
			(
				new Coords(size.x / 40, 0 - size.y * 0.4, 0), // offset
				new VisualPath
				(
					Path.rectangleOfSize(new Coords(borderWidth, this.width, 0) ),
					null, // borderWidthInPixels
					lineColor, // colorFillName
					null // colorBorder
				)
			)
		]);
	}

	static demo()
	{
		var trackSize = new Coords(600, 600, 1);
		var trackWidth = 80;
		var trackPath = new Path
		([
			new Coords(0, -0.4, 0),
			new Coords(0.4, -0.4, 0),
			new Coords(0.4, 0.4, 0),
			new Coords(-0.4, 0.4, 0),
			new Coords(-0.4, -0.4, 0)
		]);

		var transformScale = new TransformScale(trackSize.x);
		trackPath.transform(transformScale);

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
		this.visual.drawToDisplayForEntity(display, this);
	}

	initialize()
	{
		// todo
	}
}
