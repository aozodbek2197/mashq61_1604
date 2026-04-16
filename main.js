// 1-mashq
function add(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
console.log(add(1)(2)(3));
// 2-mashq
function memo(fn){
  let cache={};
  return function(x){
    if(cache[x]) return cache[x];
    return cache[x]=fn(x);
  }
}
// 3-mashq
let n=10;
let dp=[0,1];

for(let i=2;i<=n;i++){
  dp[i]=dp[i-1]+dp[i-2];
}
console.log(dp[n]);
// 4-mashq
let n=10;
let dp=[0,1];

for(let i=2;i<=n;i++){
  dp[i]=dp[i-1]+dp[i-2];
}
console.log(dp[n]);
// 5-mashq
let arr=[1,3,-1,-3,5,3,6,7], k=3;
let res=[];

for(let i=0;i<=arr.length-k;i++){
  res.push(Math.max(...arr.slice(i,i+k)));
}
console.log(res);
