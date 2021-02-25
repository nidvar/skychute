const algo_check = (the_string)=>{
    let result;
    let y = the_string

    // Put brackets into an array
    let x = the_string.split('');

    // Create bracket template:
    const opening = ['{', '[', '('];
    const closing = ['}', ']', ')'];

    // Check if input is brackets only
    let test = []
    x.forEach(a=>{
        if(!opening.includes(a) && !closing.includes(a)){
            test.push(a)
        }
    })
    if(test.length > 0){
        console.log('fail. non brackets')
        return
    }

    // Check if its even or odd. If Odd, then the sequence fails
    if(x.length%2!=0){
        console.log('fail. Odd number brackets =================')
        return
    }

    // Check if sequence starts / ends with wrong brackets. If so, it fails
    if(closing.includes(x[0]) || opening.includes(x[x.length-1])){
        console.log('sequence fail ===============')
        return
    }

    //If any of these are included, then fail
    const bad_combination = ['{]', '{)', '[}', '[)', '(}', '(]']
    bad_combination.forEach(a=>{
        if(y.includes(a)){
            console.log('bad_combination')
            result = 'fail'
            return
        }
    })

    // Remainging tests to eliminate impurities:
    let op = []
    let cl = []

    let one = []
    let two = []
    let three = []

    x.forEach(a=>{
        if(a=='(' || a == ')'){
            one.push(a)
        }
        if(a=='{' || a == '}'){
            two.push(a)
        }
        if(a=='[' || a == ']'){
            three.push(a)
        }

        if(opening.includes(a)){
            op.push(a)
        }
        if(closing.includes(a)){
            cl.push(a)
        }
    })
    //Test number of opening brackets to closing brackets of EACH TYPE.
    if(one.length%2!=0 || two.length%2!=0 || three.length%2!=0){
        console.log('fail. Odd number')
        return
    }
    
    if(op.length!=cl.length){
        result = 'fail'
    }
    if(result!='fail'){
        console.log('win')
    }
}

algo_check('(()}')