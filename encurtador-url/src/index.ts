import app from "./app";

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
    `Rodando na porta ${PORT}`
));

export default server;
