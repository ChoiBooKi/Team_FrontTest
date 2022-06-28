let fs = 'sequence subsequence\nperson compression\nVERDI vivaVittorioEmanueleReDiItalia\ncaseDoesMatter CaseDoesMatter'
let inp = fs.split('\n')
let ans = ''
let include = ''
for(let i = 0; i<inp.length; i++){
  let str = inp[i].split(' ')
  let check = str[0].split('')
  for(let j = 0; j<check.length; j++){
    if(str[1].includes(check[j]) === false){
      include = 'n'
    }
  }
  if(include === 'n'){
    ans += 'No'
  }else {
    ans += 'Yes'
  }
}
console.log(ans)