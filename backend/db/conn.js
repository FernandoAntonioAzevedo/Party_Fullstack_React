const mongoose = require("mongoose");

async function main() {
    
    try {
        mongoose.set("strictQuery", true);
        
        await mongoose.connect(
            "mongodb+srv://beratechsolutions:L0leKayJICU7zmAc@cluster0.ktqer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}


module.exports = main; 

