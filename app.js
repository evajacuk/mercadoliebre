const express= require ('express');

const app = express (); 

app.use(express.static('public'));

app.set('puerto', process.env.PORT || 3030);

app.listen (app.get('puerto'), () => console.log 
('Servidor escuchando en puerto 
${app.get ('puerto')}')) ;

(process.env.PORT|| 3030, function() 
{console.log ('Servidor escuchando')});

//app.listen (3030,()=>{ console.log ('Servidor escuchando');});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});