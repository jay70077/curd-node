const express = require('express');
const app = express();
app.use(express.json());
const books =[
    {id:1 , 'bookname':'Angular'},
    {id:2 , 'bookname':'React'},
    {id:3 , 'bookname':'Vue'},
    {id:4 , 'bookname':'Node'},

];



app.get('/',(req,res)=>{
   res.send('node server started running');
});

app.get('/bookdata',(req,res)=>{
    res.send(books);
});

app.get('/bookdata/:id',(req,res)=>{
    const databook = books.find((data) =>data.id === parseInt(req.params.id));
    if(!databook){
        res.status(400).send('data not found');
    }
    res.send(databook);
});

app.post('/bookdata/new',(req,res)=>{
    const newBook ={
        id: books.length +1,
        name: req.body.bookname
    };
    books.push(newBook);
    res.send(books);
});
app.delete('/bookdata/:id',(req,res)=>{
    const databook = books.find((data) =>data.id === parseInt(req.params.id));
    if(!databook){
        res.status(400).send('data not found');
    }
   const index = books.indexOf(databook);
    books.splice(index ,1);
    res.send(books);

});

app.put('/bookdata/:id',(req,res)=>{
    const databook = books.find((data) =>data.id === parseInt(req.params.id));
    if(!databook){
        res.status(400).send('data not found');
    }
    databook.bookname = req.body.bookname;
    res.send(books)

});


app.listen(5000,()=>{
    console.log('server is runinng');
});