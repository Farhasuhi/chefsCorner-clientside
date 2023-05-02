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
app.get('/recipes/:id',(req,res)=>{
   const id=parseInt(req.params.id);
   const recipe=recipes.find(r=>parseInt(r.recipe_id)===id);
   res.send(recipe)
})
app.get('/chefs/:id',(req,res)=>{
    const id=req.params.id;
    const chefsId=recipes.filter(recipe=>recipe.chef_id===id)
    res.send(chefsId)

})

app.listen(port,()=>{
    console.log(`chefs corner running on port",${port}`)
})


