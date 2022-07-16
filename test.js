let fs = '5\n4 1 5 2 3\n5\n1 3 7 9 5'
let inp = fs.split('\n')
let arr = new Set(inp[1].split(' ').map(Number))
let check = inp[3].split(' ').map(Number)
let ans = ''
for(let i = 0; i<Number(inp[2]); i++){
  if(arr.has(check[i])){
    ans+='1\n'
  }else{
    ans+='0\n'
  }
}
console.log(ans)