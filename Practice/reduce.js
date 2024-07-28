let arr=[2,3,4,5,6,7,7,8];

let brr=arr.reduce((sumArr,val)=>{
    return sumArr + val;
},0);

console.log(brr);