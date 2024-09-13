const express = require("express")
require("dotenv").config()
const { mongoose } = require("mongoose")

const Project =require("./model/projectModel")



app =express()
app.set("views","../frontend/views")
app.set('view engine', 'ejs');

app.use(express.static("../frontend"))


app.get("/",async (req,res)=>{
    let projects = await Project.find({});
    console.log(projects);
   
    res.render("index",{projects})
})

mongoose.connect("mongodb://localhost:27017/agency_proje").then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on ${process.env.PORT}`)
    })
}).catch(err=>console.error(err))