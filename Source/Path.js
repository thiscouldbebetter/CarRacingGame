
class Path
{
	constructor(vertexPositions)
	{
		this.vertexPositions = vertexPositions;
	}

	transform(transformationToApply)
	{
		this.vertexPositions.forEach
		(
			x => transformationToApply.coordsTransform(x)
		);
	}
}
