const algo_check = (the_string)=>{
    let result;
    // Put brackets into an array
    let y = the_string
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

    const bad_stuff = ['{]', '{)', '[}', '[)', '(}', '(]']

    bad_stuff.forEach(a=>{
        if(y.includes(a)){
            console.log('fail fail fail')
            result = 'fail'
            return
        }
    })

    if(result == 'fail'){
        console.log('fail')
    }else{
        console.log('win !!!')
    }
}

algo_check('()()()({}[]())')