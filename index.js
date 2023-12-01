const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//rotas
app.post('/createproduct', (req, res)=>{
    const name = req.body.name;
    const price = req.body.price;
    if(!name){
        res.status(422).json({message:'Preencher o campo nome!'});
        return
    }
    console.log(name);
    console.log(price);
    res.status(201).json({message:`O nome do produto é: ${name} e o preço: R$ ${price} foi criado com sucesso!`});

})
app.get('/', (req, res)=>{
    res.status(200).json({message:'Primeira rota criada com sucesso'})
})

app.listen(3000)