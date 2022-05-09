const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:LUCCA0108052015@fiaptecnico.nw8ac.mongodb.net/test')
}

module.exports = conexao
