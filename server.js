const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Conectado ao banco!")
})
.catch(err => {
    console.log("Erro ao se conectar ao banco!", err);
    process.exit();
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res)=>{
    res.json({ message: "Bem vindo a API CGOPC APOIO MERCHANDISING"});
});

require("./app/routes/acao.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server aberto na porta ${PORT}`);
});

