
class VisualPath
{
	constructor(path, borderWidthInPixels, colorFillName, colorBorderName)
	{
		this.path = path;
		this.borderWidthInPixels = borderWidthInPixels;
		this.colorFillName = colorFillName;
		this.colorBorderName = colorBorderName;

		this._pathTransformed = this.path.clone();
		this._transformDisposition = new TransformDisposition();
	}

	drawToDisplayForEntity(display, entity)
	{
		this._transformDisposition.disposition.overwriteWith(entity.disposition);

		this._pathTransformed.overwriteWith
		(
			this.path
		).transform
		(
			this._transformDisposition
		);

		display.drawPathWithWidthAndColors
		(
			this._pathTransformed, this.borderWidthInPixels,
			this.colorFillName, this.colorBorderName
		);
	}
}
