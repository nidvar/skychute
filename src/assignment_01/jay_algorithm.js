const algo_check = (the_string)=>{
    let result;
    let y = the_string

    // Put brackets into an array
    let x = the_string.split('');

    //If any of these are included, then fail
    const bad_combination = ['{]', '{)', '[}', '[)', '(}', '(]']
    bad_combination.forEach(a=>{
        if(y.includes(a)){
            console.log('bad_combination')
            result = 'fail'
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
        return
    }
    
    if(result!='fail'){
        console.log('win')
    }
}

algo_check('(({)}(){})')