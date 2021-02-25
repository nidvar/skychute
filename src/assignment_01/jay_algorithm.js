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

    let one = []
    let two = []
    let three = []

    let one_cl = []
    let two_cl = []
    let three_cl = []

    x.forEach(a=>{
        if(a=='('){
            one.push(a)
        }
        if(a=='{'){
            two.push(a)
        }
        if(a=='['){
            three.push(a)
        }

        if(a == ')'){
            one_cl.push(a)
        }
        if(a == '}'){
            two_cl.push(a)
        }
        if(a == ']'){
            three_cl.push(a)
        }
    })

    //Test number of opening brackets to closing brackets of EACH TYPE.
    if(one.length!= one_cl.length || two.length!= two_cl.length || three.length!= three_cl.length){
        console.log('fail. Odd number')
        return
    }
    
    if(result!='fail'){
        console.log('win')
    }
}

algo_check('(([]}}')