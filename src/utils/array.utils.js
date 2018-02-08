const removeFromArray = (collection, target) => {
    const index = collection.indexOf(target);
    if ( index > -1 ){
        collection.splice(index, 1);
    }
    return collection;
};

export { removeFromArray };