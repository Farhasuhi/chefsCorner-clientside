const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors())
const port=process.env.PORT || 5000;
const chefs=require('./data/chefs.json');
const recipes=require('./data/recipes.json')

app.get('/',(req,res)=>{
    res.send('chefs corner server site')
})

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
})

app.listen(port,()=>{
    console.log(`chefs corner running on port",${port}`)
})


