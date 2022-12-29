function longestCommonPrefix(strs: string[]): string {

    let res = ""

    let j =0;
    let flag=0;

    while(j<strs[0].length){
        
        let temp = ""

        for(let i=0;i<strs.length;i++){
            if(j>strs[i].length)
                break;
            
            if(i==0){
                temp=strs[i][j];
                // console.log(temp)
            }
            else{
                // console.log(temp, strs[i][j])
                // console.log(temp!=strs[i][j])
                if(temp!=strs[i][j]){
                    flag=1;
                    console.log("flag",flag)
                    break;
                    
                }
            }

        }
        if(flag==1)
            break;
        res=res+temp;

        j++;

    }
    
    return res;

};
