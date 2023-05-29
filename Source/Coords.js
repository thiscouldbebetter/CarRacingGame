
class Coords
{
	constructor(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}

	static create()
	{
		return new Coords(0, 0, 0);
	}

	add(other)
	{
		this.x += other.x;
		this.y += other.y;
		this.z += other.z;

		return this;
	}

	clear()
	{
		this.x = 0;
		this.y = 0;
		this.z = 0;
		return this;
	}

	clone()
	{
		return new Coords(this.x, this.y, this.z);
	}

	dimensionByIndex(dimensionIndex)
	{
		var returnValue = 
		(
			dimensionIndex == 0
			? this.x
			:
			(
				dimensionIndex == 1
				? this.y
				: this.z
			)
		);

		return returnValue;
	}

	divideScalar(scalar)
	{
		this.x /= scalar;
		this.y /= scalar;
		this.z /= scalar;

		return this;
	}

	half()
	{
		return this.divideScalar(2);
	}

	magnitude()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	multiplyScalar(scalar)
	{
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;
	}

	overwriteWith(other)
	{
		this.x = other.x;
		this.y = other.y;
		this.z = other.z;

		return this;
	}

	overwriteWithDimensions(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;

		return this;
	}

	subtract(other)
	{
		this.x -= other.x;
		this.y -= other.y;
		this.z -= other.z;

		return this;
	}

	trimToMagnitudeMax(magnitudeMax)
	{
		var magnitude = this.magnitude();
		if (magnitude > magnitudeMax)
		{
			this.divideScalar(magnitude).multiplyScalar(magnitudeMax);
		}
		return this;
	}
}
