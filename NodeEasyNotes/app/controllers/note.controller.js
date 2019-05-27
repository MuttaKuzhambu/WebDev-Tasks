const Note=require('../models/note.model.js');

exports.create=(req,res)=>{
//validate the request

    if(!req.body.content){
        return res.status(400).send({
            message:"Note content cannot be empty"
        });
    }

    const note= new Note({
        title:req.body.title || "untitled node",
        content:req.body.content
    });

    note.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occured while creating a note"
        });
    });
};

exports.findAll=(req,res)=>{
    Note.find()
    .then(notes=>{
        res.send(notes);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occured while receiving notes"
        });
    });
}

exports.findOne=(req,res)=>{
Note.findById(req.params.noteId)
.then(note=>{
    if(!note){
        return res.status(404).send({
            message:"Note not found with Id "+req.params.noteId
        });
    }
    res.send(note);
})
.catch(err=>{
    if(err.kind=='ObjectId'){
        return res.status(404).send({
            message:" Note note found with id " + req.params.noteId
        });
    }
    return res.status(500).send({
        message:"Error retreiving note with Id "+req.params.noteId
    });
});
};

exports.update=(req,res)=>{
    //validate request
    if(!req.body.content){
        return res.status(400).send({
            message:'Note content cannot be empty'
        });
    }
    //find note and update
    Note.findByIdAndUpdate(req.params.noteId,{
        title:req.body.title||"untitled note",
        content:req.body.content
    },{new:true})
    .then(note=>{
        if(!note){
            return res.status(404).send({
                message:'Note not found with id '+req.params.noteId
            });
        }
        res.send(note);
    })
    .catch(err=>{
        if(err.kind=='ObjectId'){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500),send({
            message:'error updating note with id '+req.params.noteId
        });
    });
};//The {new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.

exports.delete=(req,res)=>{
Note.findByIdAndRemove(req.params.noteId)
.then(note=>{
    if(!note){
        return res.status(404).send({
            message:'note not found with id '+req.params.noteId
        })
    }
    res.send({message:'note deleted successfully'});
})
.catch(err=>{
    if(err.kind=='ObjectId' || err.name=='NotFound'){
        return res.status(404).send({message:'note not found with id '+req.params.noteId});
    }
    return res.status(500),send({message:'could not delete node with id '+req.params.noteId});
});
};  