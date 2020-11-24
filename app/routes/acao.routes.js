module.exports = app => {
    const acoes = require("../controllers/acao.controller");

    var router = require("express").Router();

    router.post("/", acoes.create);

    router.get("/", acoes.findAll);

    router.get("/cliente", acoes.findAllCliente);

    router.get("/:id", acoes.findOne);

    router.put("/:id", acoes.update);

    router.delete("/:id", acoes.delete);

    router.delete("/", acoes.deleteAll);

    app.use('/api/acoes', router);
}