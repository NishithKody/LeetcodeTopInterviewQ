function plusOne(digits: number[]): number[] {

    let res = []
    if(digits[digits.length -1]!=9){
        digits[digits.length-1] = digits[digits.length-1] +1
        return digits
    }
    else{
        let flag =1;
        res.push(0)
        for(let i=digits.length-2; i>=0; i--)
        {
            if(flag==1){
                let temp = digits[i];
                if(temp+1>9){
                    flag=1;
                    res.unshift(0)
                }
                else{
                    flag=0
                    res.unshift(temp+1)
                }
            }
            else{
                res.unshift(digits[i])
            }
        }
        if(flag==1){
            res.unshift(1)
        }
    }
    return res
};
