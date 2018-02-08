class System {

    targetEntities = [];

    updateEntity(entity) {
        console.warn('override this method');
    }

    update() {
        const l = this.targetEntities.length;
        // for loop blijft toch het snelste helaas..
        for ( let i = 0; i < l; i++ ){
            this.updateEntity(this.targetEntities[ i ])
        }
    }

}

export default System;