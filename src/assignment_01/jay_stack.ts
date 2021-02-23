class Stack {
   data:Array<number>;
   size:number;
   maxValues:Array<number>;
   constructor() {
     this.data = [];
     this.size = 0;
     this.maxValues = [];
   }
   push(element:number) {
     if (this.size === 0 || element >= this.findMax()) {
       this.maxValues.push(element)
     }
     else {
       this.maxValues.push(this.findMax())
     }
     this.size += 1
     this.data.push(element);
     return this.data
   }
   pop() {
     if (this.size > 0) {
       this.size -= 1;
       this.maxValues.pop()
       return this.data.pop()
     }
   }
   findMax() {
      let max = this.data.reduce(function(a, b) {
         return Math.max(a, b);
      });  
      return max   
   }
}