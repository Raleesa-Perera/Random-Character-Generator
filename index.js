import express from "express"
import bodyParser from "body-parser"

const app=express();
const port =2500;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.post("/submit",(req,res)=>{
    const ranChar=randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
    const fileEJS=ranChar+".ejs";
    res.render(fileEJS);
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}.`)
});

const randomCharacter=["Homer","Bart","Marge","lisa","maggie","ned-flanders","smithers"];