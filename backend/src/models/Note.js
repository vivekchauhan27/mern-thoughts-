import mongoose from "mongoose";

// 1- create a scchema 
// 2- model based off that schema 

const noteSchema=new mongoose.Schema({
    title: {
        type: String,
        require:true,
    },
    content: {
        type: String,
        required: true,
    },
},
{timestamps: true} //createdAt , updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note