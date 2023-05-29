
class ShapeSphere
{
	constructor(center, radius)
	{
		this.center = center;
		this.radius = radius;
	}

	overlapsWith(other)
	{
		var distanceBetweenCenters
			other.center.clone().subtract(this.center).magnitude();
		var sumOfRadii = this.radius + other.radius;
		var doSpheresOverlap = (distanceBetweenCenters < sumOfRadii);
		return doSpheresOverlap; 
	}
}
