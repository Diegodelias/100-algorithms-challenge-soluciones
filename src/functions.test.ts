// const { expect } = require('@jest/globals');
import { arrayChange } from './functions'


test('18 array change', () =>{
    expect(arrayChange([1,1,1])).toBe(3)
    expect(arrayChange([1,2,1])).toBe(2)
    
   
});