const get = (obj, key, defaultValue) =>{
    for (const k in obj) {
        if(obj.hasOwnProperty(k)){
            return Object.values(obj).toString();
        }
    }
    return defaultValue;
}
/*
console.log(get({ hello: 'world' }, 'hello')); // world)
console.log(get({ hello: 'world' }, 'hello', 'kitty')); // 'world')
console.log(get({}, 'hello', 'kitty')); // 'kitty')
*/
export {get}