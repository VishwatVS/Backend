const express=require('express');
const app=express();
const port=3000;
//user middleware
const adi=(req,res,next)=>{
    req.query.age
    if(!age)
    {
        console.log("plz enter age")
    }
    if(age<=18){
        res.send("Sorry your age is under 18")
    }
    next();
}
app.use(adi);
app.get('/',(req,res)=>{
    res.send('this is my home page')
})
app.get('/about'),adi,(req,res)=>{
    res.send("this is my about page");
}
app.listen(port,()=>{
    console.log(`app is run at:${port}`)
})