export default (mongooseType)=>{
    let mandatory = "";
    if(mongooseType[mongooseType.length-1] === '!'){
        mongooseType = mongooseType.substring(0, mongooseType.length-1);
        mandatory = "!";
    }
    let type = "";
    switch(mongooseType){
        case String: type = 'String';
            break;
        case Number: type = 'Float';
            break;
        case Boolean: type = 'Boolean';
            break;
        case Date: type = 'String';
            break;
        case Buffer: type = '[String]';
            break;
        
    }
}