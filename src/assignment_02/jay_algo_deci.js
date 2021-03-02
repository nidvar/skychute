// You are given a decimal number n and a natural number k. Implement a program that removes k digits from the number n in a way that the resulting number is the maximum possible: O(n)-

const my_func = (num, k)=>{
    //SETUP
    const front_part = []
    const back_part = []

    let dot_location = 0;
    num.toString().split('').forEach((a,i)=>{
        if(a=='.'){
            dot_location = i
        }
    })
    num.toString().split('').forEach((a,i)=>{
        if(i > dot_location){
            back_part.push(parseInt(a))
        }else if(i<dot_location){
            front_part.push(parseInt(a))
        }
    })
    // PROCESS OF ELIMINATION
    // if number is smaller than K, then can't remove
    if(front_part.length + back_part.length < k){
        console.log('not enough digits to remove')
        return
    }
    //if decimal numbers are the same length as K then just remove decimals
    if(back_part.length == k){
        console.log('WIN !!!!!')
        return front_part.join('')
    }

    //IF K < DECIMALS:
    
    if(back_part.length > k){

        //if all of the numbers from back_part[0] to back_part[k-1] are smaller than back_part[k], then we can delete them all. 
        // eg-> if k = 4 and num =  0.1234932... we can delete everything before 9, and it would be the largest.

        console.log('back part k ', back_part[k-1])
        let sample = back_part.filter((a, i)=>{
            if(i < k){
                return true
            }
        })
        const largest_number = Math.max(...sample)

        if(largest_number < back_part[k]){
            console.log('delete them all')
            let final = []
            back_part.forEach((a, i)=>{
                console.log(a)
                if(i >= 4){
                    final.push(a)
                }
            })
            console.log('final', final)
        }else{

        }
        
    }
}
