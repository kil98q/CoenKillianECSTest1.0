import MovingEntity from './entities/movingentity';
import RenderSystem from './RenderSystem';

export default class Main {

    constructor(){
        // todo: netter als we een echte gameloop hebben

        console.log("base engine running");

        let renderSystem = new RenderSystem();

        let car = new MovingEntity(-300, 200, 14, 0, 'ferrari', {x: 0, y: 0, z:-1});

        renderSystem.add(car);
        
		let car2 = new MovingEntity(300, 200, 14, 0, 'ferrari', {x: 0, y: 0, z:-1});

        renderSystem.add(car2);
        
		let car3 = new MovingEntity(0, 200, 14, 0, 'ferrari', {x: 0, y: 0, z:-1});

        renderSystem.add(car3);
    }

}