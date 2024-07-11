//test/processData.js
const {getData}=require('./utils');
function processData(){
    return `processed :${getData()}`;
    //processed real data

}
module.exports=processData;