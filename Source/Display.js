
class Display
{
	constructor(sizeInPixels)
	{
		this.sizeInPixels = sizeInPixels;
	}

	initialize()
	{
		var d = document;
		var canvas = d.createElement("canvas");
		canvas.width = this.sizeInPixels.x;
		canvas.height = this.sizeInPixels.y;

		var divDisplay = d.getElementById("divDisplay");
		divDisplay.appendChild(canvas);

		this.graphics = canvas.getContext("2d");
	}

	// Drawing.

	fillWithColor(colorName)
	{
		this.graphics.fillStyle = colorName;
		this.graphics.fillRect(0, 0, this.sizeInPixels.x, this.sizeInPixels.y);
	}

	drawLineFromPosToPos(fromPos, toPos)
	{
		this.graphics.strokeStyle = "Blue";
		this.graphics.beginPath();
		this.graphics.moveTo(fromPos.x, fromPos.y);
		this.graphics.lineTo(toPos.x, toPos.y);
		this.graphics.stroke();
	}

	drawPathWithWidthAndColors(path, width, colorFillName, colorBorderName)
	{
		var vertexPositions = path.vertexPositions;
		var g = this.graphics;
		g.fillStyle = colorFillName;
		g.strokeStyle = colorBorderName;
		g.lineWidth = width;
		g.beginPath();
		for (var i = 0; i < vertexPositions.length; i++)
		{
			var pos = vertexPositions[i];
			if (i == 0)
			{
				g.moveTo(pos.x, pos.y);
			}
			else
			{
				g.lineTo(pos.x, pos.y);
			}
		}
		g.closePath();
		g.fill();
		g.stroke();
	}

	drawRectangleOfSizeWithDispositionAndColor(size, disposition, colorName)
	{
		var center = disposition.pos;
		var headingInRadians = disposition.headingInTurns;

		var offsetRight = new Coords
		(
			Math.cos(headingInRadians),
			Math.sin(headingInRadians)
		).multiplyScalar(size.x);

		var offsetBottom = new Coords
		(
			Math.sin(headingInRadians),
			Math.cos(headingInRadians)
		).multiplyScalar(size.y);

		var corners =
		[
			center.clone().subtract(offsetRight).subtract(offsetBottom),
			center.clone().add(offsetRight).subtract(offsetBottom),
			center.clone().add(offsetRight).add(offsetBottom),
			center.clone().subtract(offsetRight).add(offsetBottom),
		];

		var path = new Path(corners);

		this.drawPathWithWidthAndColors(path, 1, colorName, null);
	}
}
