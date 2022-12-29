function twoSum(nums: number[], target: number): number[] {

    let res = [];

    let map = new Map();

    for(let i=0;i<nums.length;i++){

        if(map.has(nums[i])){
            res.push(i);
            res.push(map.get(nums[i]));
        }
        else{
            map.set(target-nums[i],i)
        }
    }

    return res;

};
