const mongoose = require("mongoose");

async function main() {
    
    try {
        mongoose.set("strictQuery", true);
        
        await mongoose.connect(
            "mongodb+srv://beratechsolutions:yohpbGOVsmNY4VBt@partyfull.kb4t7.mongodb.net/?retryWrites=true&w=majority&appName=partyfull"
        );

        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}


module.exports = main; 

