
class Obstacle
{
	constructor(size, pos)
	{
		this.size = size;
		this.disposition = Disposition.fromPos(pos);

		this._bounds = new ShapeRectangle(this.disposition.pos, this.size);
	}

	bounds()
	{
		return this._bounds;
	}

	drawToDisplay(display)
	{
		display.drawRectangleOfSizeWithDispositionAndColor
		(
			this.size, this.disposition, "Gray"
		);
	}
}

