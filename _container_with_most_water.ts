function maxArea(height: number[]): number {

    let max_water = 0;

    let l =0;
    let r = height.length-1;

    while(l<r){
        let temp = (r-l)*Math.min(height[r],height[l]);
        if(temp>max_water){
            max_water = temp;
        }

        if(height[l]<height[r]){
            l++;
        }
        else if (height[r]<height[l]){
            r--;
        }
        else{
            l++;
        }
    }

    


    return max_water;
};
