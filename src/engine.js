import { removeFromArray } from "./utils/array.utils";

class Engine {

    entities = [];
    systems = [];

    constructor(frameRate = Engine.default.frameRate) {
        this.frameRate = frameRate;
    }

    addEntity(entity) {
        this.systems.forEach(system => {

            const hasRequiredComponents = system.requiredComponents.every(
                component => entity.hasComponentClass(component.name));

            if ( !hasRequiredComponents ){
                return;
            }
            system.targetEntities.push(entity);
        });
    }

    removeEntity(entity) {

    }

    addSystem(system) {
        this.systems.push(system);
    }

    removeSystem(system) {
        removeFromArray(this.systems, system);
    }

    /**
     * Get the current framerate
     * @returns {int} the current framerate
     */
    get frameRate() {
        return this._frameRate;
    }

    /**
     * Set the current framerate
     * @param {int} value - the current framerate
     */
    set frameRate(value) {
        this._frameRate = value;
        clearInterval(this.updateIntervalId);
        this.updateIntervalId = setInterval(this.update, 1000 / this.frameRate);
    }

    update = () => {
        this.systems.forEach(system => system.update());
    };

}

Engine.default = {
    frameRate : 60
};

export default Engine;