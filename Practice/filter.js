let arr=[1,4,1,7,9,3,6,7,0,10];

let brr=arr.filter((val)=>{
    if(val%2===0){
        return val;
    }
})
console.log(brr);