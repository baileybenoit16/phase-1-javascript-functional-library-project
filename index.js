function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            result.push(callback(collection[key], key, collection));
        }
    }

    return result;
}

function myReduce(collection, callback, acc) {
    let startIndex = acc !== undefined ? 0 : 1;
    let accumulator = acc !== undefined ? acc : collection[Object.keys(collection)[0]];

    if (Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], collection);
        }
    } else {
        let keys = Object.keys(collection);
        for (let i = startIndex; i < keys.length; i++) {
            let key = keys[i];
            accumulator = callback(accumulator, collection[key], collection);
        }
    }

    return accumulator;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
}

function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    }

    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

