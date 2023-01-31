function firstUniqChar(s: string): number {
    let res = -1;
    let low = Number.MAX_SAFE_INTEGER;

    let map = new Map()

    for (let i=0; i<s.length; i++){
        // console.log(map.get(s[i]),s[i])
        if(map.has(s[i])){
            map.set(s[i],'x')

        }
        else{
            map.set(s[i],i)
        }
    }

    // console.log('map',map)

    for(let i of map.entries()){
        // console.log(i)
        if(i[1]!='x'){
            if(i[1]<low){
                low=i[1]
                res=i[0]
            }
        }
        // console.log(low)
        // console.log('temp',res)
    }
    // console.log('res',res)
    if(res!=-1){
        return low
    }
    else{
        return -1
    }

};
