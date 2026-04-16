function occeranceChar(str){
    result = {}
    for(let char of str){
        result[char]= (result[char]||0)+1 
    }
    return result
}

console.log(occeranceChar("maruthiprasad"))