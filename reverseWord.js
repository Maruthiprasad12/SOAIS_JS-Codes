function reverseWord(str){
    let result = ''
    let word = ''

    for(let i=0;i<str.length;i++){
        if(str[i]!==' '){
            word = str[i]+word
        }else{
            result += word+' '
            word = ''
        }
    }
     result += word
     return result
} 
console.log(reverseWord('hello world'))