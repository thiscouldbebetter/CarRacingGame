
class ShapeRectangle
{
	constructor(center, size)
	{
		this.center = center;
		this.size = size;

		this._max = Coords.create();
		this._min = Coords.create();
		this._sizeHalf = this.size.clone().half();
	}

	max()
	{
		return this._max.overwriteWith(this.center).add(this._sizeHalf);
	}

	min()
	{
		return this._min.overwriteWith(this.center).subtract(this._sizeHalf);
	}

	overlapsWith(other)
	{
		var thisMin = this.min();
		var thisMax = this.max();
		var otherMin = this.min();
		var otherMax = this.max();

		var doesOverlapInAllDimensionsSoFar = true;

		for (var d = 0; d < 2; d++) // todo - Z.
		{
			var thisMinDimension = thisMin.dimensionByIndex(d);
			var thisMaxDimension = thisMax.dimensionByIndex(d);
			var otherMinDimension = otherMin.dimensionByIndex(d);
			var otherMaxDimension = otherMax.dimensionByIndex(d);

			var doesOverlapInThisDimension =
			(
				(
					thisMinDimension > otherMinDimension
					&& thisMinDimension < otherMaxDimension
				)
				||
				(
					thisMaxDimension > otherMinDimension
					&& thisMaxDimension < otherMaxDimension
				)
				||
				(
					otherMinDimension > thisMinDimension
					&& otherMinDimension < thisMaxDimension
				)
				||
				(
					otherMaxDimension > thisMinDimension
					&& otherMaxDimension < thisMaxDimension
				)
			);

			if (doesOverlapInThisDimension == false)
			{
				doesOverlapInAllDimensionsSoFar = false;
				break;
			}
		}

		return doesOverlapInAllDimensionsSoFar;
	}
}
