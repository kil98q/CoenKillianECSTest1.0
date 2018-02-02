import MovingEntity from './entities/movingentity';
import HtmlRenderer from './htmlrenderer';

export default class Main {

    constructor() {
        // todo: netter als we een echte gameloop hebben

        console.log("base engine running");

        const htmlRenderer = new HtmlRenderer();

        for ( let i = 0; i < 5; i++ ){
            const ferrari = new MovingEntity(-500 + i * 75,
                                             -400 + Math.random() * 800,
                                             0,
                                             0,
                                             'ferrari',
                                             { x : 0, y : 0, z : -2 });
            htmlRenderer.add(ferrari);
        }

    }

}