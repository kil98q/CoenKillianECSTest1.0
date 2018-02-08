import System from "./system";
import Velocity from "../components/velocity.component";
import Transform from "../components/transform.component";

class MovementSystem extends System {

    requiredComponents = [ Velocity, Transform ];

    updateEntity = entity => {
        const { transform, velocity } = entity.components;

        transform.x += velocity.x;
        transform.y += velocity.y;
        transform.z += velocity.z;
        transform.rotation += velocity.rotation;

        console.log(transform);
    }

}

export default MovementSystem;