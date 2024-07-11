//test cases for our unit fun sum
const sum=require('./test/sum')
//jest test case
//test function to test
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactly equal
    //expect()->to exceute our unit
})
//run npm test under server folder
test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
})
//toBeNUll->if the received value is Null
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull()
})
//toBeDefined->if a value/variable is defined or not
test('Value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
//toBeTruthy->received value should be truth
test('value is True',()=>{
    const bool=true
    expect(bool).toBeTruthy();
})