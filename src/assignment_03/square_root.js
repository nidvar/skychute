const square_root_jay=(integer)=>{
    let arr = [];
    for(let i = 1; i<=integer; i++){
        arr.push(i)
    }
    let start = 0;
    let end = arr[arr.length-1];

    let middle = Math.floor(integer/2);
    while(start <= end){

        if(middle*middle==integer){
            console.log(middle)
            return middle
        }
        if(middle*middle > integer){
            end = middle+1
            console.log('bounds', start, end)
        }else if(middle*middle < integer){
            start = middle-1
            console.log('bounds', start, end)
        }
        
        
        if(middle==Math.floor((end+start)/2)){
            middle = 'no square root. closest is ' + middle
            break;
        }

        middle = Math.floor((end+start)/2)

    }
    return middle
}

console.log(square_root_jay(20))

console.log('finished')