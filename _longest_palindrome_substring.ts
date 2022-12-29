function longestPalindrome(s: string): string {

    let res = "";

    for(let i=0;i<s.length;i++){
        for(let j=0;j<2;j++){
            let l=i;
            let r= l+j;
            while(s[l] && s[l]==s[r]){
                l--;
                r++;
            }
            if(r-l-1>res.length){
                res=s.slice(l+1,r)
            }
        }
    }

    return res;

};
