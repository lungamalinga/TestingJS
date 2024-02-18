

const sum = require('../main')


class Stack{
    constructor(){
        this.top = -1
        this.items = {}
    }
    
    get peek(){
        return this.items[this.top];
    }

    push( value ){
        this.top += 1
        this.items[this.top] = value
    }
    
    pop(value){
        const lastIndex = Object.keys(this.items).length
        delete this.items[lastIndex - 1]
        return Number(Object.keys(this.items).length)
    }
}

describe('My Stack', () => {

    // ! Before each
    // * Pre setup the stack before each test
    let stack; 
    
    beforeEach(() => {
        stack = new Stack()
    });

    // ! test
    it('it created empty', () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    } );

    // ! test
    it('can push to top', () => {
        stack.push('🍑')
        expect(stack.top).toBe(0)
    });
    
    // ! test
    it('can pop off', ()=>{
        stack.push('🍑')
        stack.push('🏡')
        expect(stack.pop()).toBe(1)
    });

}) 

// describe ('Sum of two numbers', ()=> {
//     it('add two numbers', ()=> {
//         console.log(`hello world-> ${sum(1,1)}`)
//         expect(sum(1,1)).toBe(2)
//     })  
// })