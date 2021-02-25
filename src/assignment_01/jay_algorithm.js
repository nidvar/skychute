const algo_check = (the_string)=>{
    let result;

    let x = the_string.split('');

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

algo_check('{(){}[()])')