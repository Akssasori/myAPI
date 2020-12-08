const db = require("../models");
const Acao = db.acoes;

exports.create = (req,res) =>{ //FOI
    if(!req.body.programa){
        res.status(400).send({ message: "Não pode ser vazio!"});
        return;
    }
    const acao = new Acao({
        programa: req.body.programa,
        data: req.body.data,
        cliente: req.body.cliente,
        agencia: req.body.agencia,
        produto: req.body.produto,
        tipoAcao: req.body.tipoAcao,
        descricao: req.body.descricao,
        horarioEntrada: req.body.horarioEntrada,
        horarioSaida: req.body.horarioSaida,
        numeroVideo: req.body.numeroVideo,
        numeroCliente: req.body.numeroCliente,
        numeroAgencia: req.body.numeroAgencia,
        numeroSistema: req.body.numeroSistema

    });
    acao
        .save(acao)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum problema acorreu enquanto estava criando a acao"
            });
        });

};

exports.findAll = (req, res) => { //foi
    const programa = req.query.programa;
    var condition = programa ? { programa: { $regex: new RegExp(programa), $options: "i"} } : {};

    Acao.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                 err.message || "Algum erro ocorreu enquanto buscava acao"
            });
        });
};

exports.findOne = (req,res) => { //foi
    const id = req.params.id;

    Acao.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Não achei acao com o id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Erro acao com id = " + id});
        });

};

exports.update = (req, res) => { //foi
    if (!req.body){
        return res.status(400).send({
            message: "o valor para ser atualizado não pode ser vazio!"
        });
    }
    const id = req.params.id;

    Acao.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Não foi possivel atualizar o programa com id=${id}. talvez ele não exista!`
            });
        } else res.send({ message: "Acao atualizada"});
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro na hora de atualizar com id = "+ id
        });
    });

};

exports.delete = (req, res) => { //FOI
    const id = req.params.id;

    Acao.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Não pude deletar a acao com id ${id}. talvez ele não exista`
                });
            } else {
                res.send({
                    message: "Acao foi deletada"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não pude deletar a acao com id= "+id
            });
        });

};

exports.deleteAll = (req, res) => { //FOI
    Acao.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Acoes deletadas com sucesso`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                 err.message || "Algum erro ocorreu ao remover todas as ações"
            });
        });

};

exports.findAllCliente = (req, res) => {
    Acao.find({ cliente : true })
     .then(data => {
         res.send(data);
     })
     .catch(err => {
         res.status(500).send({
             message:
              err.message || "Algum erro ocorreu ao buscar clientes"

         });
     });


};

exports.findAll = (req, res) => { //foi
    const produto = req.query.produto;
    var condition = produto ? { produto: { $regex: new RegExp(produto), $options: "i"} } : {};

    Acao.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                 err.message || "Algum erro ocorreu enquanto buscava acao"
            });
        });
};

exports.findAll = (req, res) => { //foi
    const tipoAcao = req.query.tipoAcao;
    var condition = tipoAcao ? { tipoAcao: { $regex: new RegExp(tipoAcao), $options: "i"} } : {};

    Acao.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                 err.message || "Algum erro ocorreu enquanto buscava acao"
            });
        });
};