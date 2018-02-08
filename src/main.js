import Engine from "./engine";
import MovementSystem from "./systems/movement.system";
import Entity from "./entities/entitiy";
import Transform from "./components/transform.component";
import Velocity from "./components/velocity.component";

export default class Main {

    constructor() {
        const engine = new Engine();
        engine.addSystem(new MovementSystem());

        const player = new Entity();
        player.addComponent(new Transform(200));
        player.addComponent(new Velocity(1, 1, 1, 1));

        engine.addEntity(player);

        engine.start();

        // just for fun: na 5 seconden zetten we de framerate naar 1fps
        setTimeout(() => engine.frameRate = 1, 5000);
    }

}