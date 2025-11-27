# Problem: https://www.hackerrank.com/challenges/migratory-birds

function migratoryBirds(arr) {
    let list = {}
    for(let i = 0; i < arr.length; i++) {
        if(!(arr[i] in list)){            
          list[arr[i]] = 1;
          for(let y = i + 1; y < arr.length; y++){  
              if(arr[i] == arr[y]){
                list[arr[i]] ++;                
             }
          }
        }
    }
    console.log("list:", list)
    let maxValue = Math.max(...Object.values(list))
    let maxKeys = Object.keys(list).filter( key => list[key] === maxValue);
    console.log("maxKeys:", maxKeys)
    return Math.min(...Object.values(maxKeys))

}
