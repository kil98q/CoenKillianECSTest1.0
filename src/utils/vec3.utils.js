class Vec3 {

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(other){
    	this.x += other.x;
    	this.y += other.y;
    	this.z += other.z;
    }

    sub(other){
    	this.x -= other.x;
    	this.y -= other.y;
    	this.z -= other.z;
    }

}

export default Vec3;