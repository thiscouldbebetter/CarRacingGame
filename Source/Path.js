
class Path
{
	constructor(vertexPositions)
	{
		this.vertexPositions = vertexPositions;
	}

	static rectangleOfSize(size)
	{
		var sizeHalf = size.clone().half();

		return new Path
		([
			new Coords(0 - sizeHalf.x, 0 - sizeHalf.y, 0),
			new Coords(sizeHalf.x, 0 - sizeHalf.y, 0),
			new Coords(sizeHalf.x, sizeHalf.y, 0),
			new Coords(0 - sizeHalf.x, sizeHalf.y, 0)
		]);
	}

	transform(transformationToApply)
	{
		this.vertexPositions.forEach
		(
			x => transformationToApply.coordsTransform(x)
		);
	}

	// Clonable.

	clone()
	{
		return new Path(this.vertexPositions.map(x => x.clone() ) );
	}

	overwriteWith(other)
	{
		var otherVertexPositions = other.vertexPositions;
		for (var i = 0; i < otherVertexPositions.length; i++)
		{
			this.vertexPositions[i].overwriteWith(otherVertexPositions[i]);
		}
		return this;
	}

	// Transformable.

	transform(transformToApply)
	{
		this.vertexPositions.forEach
		(
			x => transformToApply.transformCoords(x)
		);

		return this;
	}
}
