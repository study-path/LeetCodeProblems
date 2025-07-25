/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let first = 0;
    let sec = 1;
    yield first;
    yield sec;
    for(let i = 0; i< 50; i++){  
       let res = first + sec;        
        yield  res
        first = sec;
        sec = res;
    }   
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */