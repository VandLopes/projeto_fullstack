const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
