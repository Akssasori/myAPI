module.exports = app => {
    const acoes = require("../controllers/acao.controller");

    var router = require("express").Router();

    router.post("/", acoes.create); //create  OK

    router.get("/", acoes.findAll);//buscar por programa OK

    // router.get("/cliente", acoes.findAllCliente); E O PUBLISH : TRUE

    router.get("/:id", acoes.findOne);//OK

    router.put("/:id", acoes.update);//OK

    router.delete("/:id", acoes.delete);//OK

    router.delete("/", acoes.deleteAll);//OK

    router.get("/produto", acoes.findAll);

    router.get("/tipoacao", acoes.findAll);

    app.use('/api/acoes', router);
}