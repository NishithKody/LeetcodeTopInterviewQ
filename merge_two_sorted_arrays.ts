function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let res=0;

    let n = Math.floor((nums1.length + nums2.length)/2);

    let i =0;
    let j=0;

    let arr = [];
    
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]==nums2[j]){
            arr.push(nums1[i])
            arr.push(nums1[i]);
            i++;
            j++;
        }
        else if(nums1[i]<nums2[j]){
            arr.push(nums1[i]);
            i++;
        }
        else{
            arr.push(nums2[j]);
            j++;
        }
    }

    while(i<nums1.length){
        arr.push(nums1[i])
        i++;
    }
    while(j<nums2.length){
        arr.push(nums2[j])
        j++;
    }

    if(arr.length%2==0){
        res=(arr[n-1]+arr[n])/2;
    }
    else{
        res=arr[n];
    }

    console.log(arr)

    return res;

};
