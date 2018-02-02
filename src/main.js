import Entity from "./entities/entitiy";

class Main {
    constructor(){
        this.init();
    }

    init(){
        const firstEntity = new Entity(50, 50, 50, 0, 'tree');
        console.log(firstEntity);
    }
}

export default Main;