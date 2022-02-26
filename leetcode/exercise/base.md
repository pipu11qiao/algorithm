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