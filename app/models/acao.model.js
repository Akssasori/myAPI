const { mongoose } = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema(
            {
                programa: String,
                data: Date,
                cliente: String,
                agencia: String,
                produto: String,
                tipoAcao: String,
                descricao: String,
                horarioEntrada: Date,
                horarioSaida: Date,
                numeroVideo: Number,
                numeroCliente: Number,
                numeroAgencia: Number,
                numeroSistema: Number

            },
            { timestamps : true }
        );

        schema.method("toJSON", function(){
            const {__v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
        });

        const Acao = mongoose.model("acao", schema);
        return Acao;
};
    