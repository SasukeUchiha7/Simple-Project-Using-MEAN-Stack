const express = require('express');
const router  = express.Router();

const Contact = require("../models/contacts");

//Retrieve Contacts
router.get("/contacts",(req,res, next)=>{
    Contact.find((err, contacts)=>{
        res.json(contacts);
    })
});

//Add Contacts
router.post("/contact", (req,res,next)=>{
    let newContact= new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err)
            res.json({msg : "Failed to add contact"});
        else
            res.json({msg : "Added contact successfully"});
    });
});

//Delete Contacts
router.delete("/contact/:id", (req,res,next)=>{
    Contact.remove({_id: req.params.id}, (err, result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;