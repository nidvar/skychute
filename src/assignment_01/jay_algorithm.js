const algo_check = (the_string)=>{
    let result = true;
    // Put brackets into an array
    let x = the_string.split('');

    //If any of these are included, then fail
    const bad_combination = ['{]', '{)', '[}', '[)', '(}', '(]']
    bad_combination.forEach(a=>{
        if(the_string.includes(a)){
            console.log('bad_combination')
            result = false
            return
        }
    })

    let open = []
    let close = []

    x.forEach(a=>{
        if(a=='('|| a=='{' || a=='['){
            open.push(a)
        }
        if(a==')'|| a=='}' || a==']'){
            close.push(a)
        }
    })

    if(open.length!=close.length){
        console.log('fail. Odd number')
        result = false
    }
    return result
}

console.log(algo_check('((()))))'))