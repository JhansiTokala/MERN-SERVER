//test/async.js
//how we cam\n perform unit test on async
//function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:1001});
    },1000)

}
//
module.exports={fetchData,MyData};