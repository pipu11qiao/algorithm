一些常用的解题的点

####  知道两个点的下标求长度， 

  起始index,i, 结束index，j
  长度len = j - i + 1;

#### 知道两个点的下标球中间点的下标，求中间的坐标
let start;
let end;
// (end-start)%2===0 奇数个
const mid = Math.fllor(start+ (start-end)/2) ;
const mid2 = mid+1; // 偶数个

#### 倒序for

for(j=len-1;j>=i;j--){

}

#### 比较的时候类型的差异

const  arr = [7,2,5,3,8,4,4,]
const map={}
arr.forEach(item=>{
  if(map[item]===undefined){
    map[item]=0
  }
  map[item]+=1
});
Object.keys(map).map(item=>Number(item))// 转换为数字
new Set(arr) // 或者用set


#### 数组中两个元素下标表示的键可以用一个数字表示，类似于以len进制表示的二位数

i,j -> i * len + j,每个数都是唯一的