//async.test.js
const {fetchData ,MyData}=require('./test/async')

test('call back data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(error){
            done(error);
        }
    }
    fetchData(callback)
});
test('callback my data',done=>{
    function callback(data){
        try{
                expect(data.id).toBe(1001)
                done();
        }catch(error){
            done(error);
        }
    }
    MyData(callback)
})
//mock function
test('mocking call back function',done=>{
    const Mockfunction=jest.fn(data=>{
        expect(data).toBe('admin')
        done();
    })
    fetchData(Mockfunction);
})