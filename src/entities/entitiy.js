class Entity {
    
    constructor(x, y, z, rotation, className){
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotation = rotation;
        this.className = className;
    }

    /**
     * Get the current x position of this entity
     * @returns {float} the current x position of this entity
     */
    get x() {
        return this._x;
    }

    /**
     * Set the current x position of this entity
     * @param {float} value - the current x position of this entity
     */
    set x(value) {
        this._x = value;
    }

    /**
     * Get the current y position of this entity
     * @returns {float} the current y position of this entity
     */
    get y() {
        return this._y;
    }

    /**
     * Set the current y position of this entity
     * @param {float} value - the current y position of this entity
     */
    set y(value) {
        this._y = value;
    }

    /**
     * Get the current z position
     * @returns {float} the current z position
     */
    get z() {
        return this._z;
    }

    /**
     * Set the current z position
     * @param {float} value - the current z position
     */
    set z(value) {
        this._z = value;
    }

    /**
     * Get the current rotation of this entity
     * @returns {float} the current rotation of this entity
     */
    get rotation() {
        return this._rotation;
    }

    /**
     * Set the current rotation of this entity
     * @param {float} value - the current rotation of this entity
     */
    set rotation(value) {
        this._rotation = value;
    }

    /**
     * Get the classname of this entity
     * @returns {string} the classname of this entity
     */
    get className() {
        return this._className;
    }

    /**
     * Set the classname of this entity
     * @param {string} value - the classname of this entity
     */
    set className(value) {
        this._className = value;
    }
    
}

export default Entity;