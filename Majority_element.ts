function majorityElement(nums: number[]): number {

    let map = new Map();

    for(let i of nums){
        map.set(i,map.get(i)+1||1)
    }

    let n = Math.floor(nums.length/2)

    // console.log('n',n)
    // console.log('mpa',map)

    for(let i of map){
        if(i[1]>n){
            return i[0]
        }
    }
    
    return -1

};
