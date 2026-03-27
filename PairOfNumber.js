let Array = [2,3,4,5,6,7]
target = 9
for(let i =0;i<Array.length;i++){
    for(let j=i+1;j<Array.length;j++){
        if (Array[i]+Array[j]=== target){
            console.log(Array[i],Array[j])
        }
    }
}