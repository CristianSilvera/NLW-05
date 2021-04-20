import express, { request, response } from "express";

const app = express();

/**
 * GET = Buscar
 * POST = Creación
 * PUT = Alteración
 * DELETAR = Borrar
 * PATCH = Alterar una información específica
 */

app.get("/", (request, response) => {
    // return response.send("Hello NLW#05");
    return response.json({
        message: "Hello NLW#05"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Registro de usuario exitoso!"
    });
});

app.listen(3333, () => console.log("Server is running on: http://localhost:3333/"));
