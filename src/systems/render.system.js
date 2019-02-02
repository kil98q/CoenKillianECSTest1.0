import System from "./system";
import Transform from "../components/transform.component";

class RenderSystem extends System {

    getRequiredComponents(){
        return [ Transform ];
    }

    updateEntity = entity => {
        const { transform } = entity.components;

        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(transform.position.x % c.width, transform.position.y % (c.height - 50), 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

}

export default RenderSystem;
