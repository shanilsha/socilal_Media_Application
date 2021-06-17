import mongoose from 'mongoose';

const postSechma = mongoose.Schema({
    title : String,
    message : String,
    creator :String,
    tags : [String],
    selectedFile : String,
    likeCount :{
         type : Number,
         default: 0
    },
    createAt : {
        type : Date ,
        default: new Date () 
    }
});

const postMessage = mongoose.model('message',postSechma);

export default postMessage;