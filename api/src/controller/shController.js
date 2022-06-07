import { novoSuperHeroi, procurarHeroiid, procurarHeroinome } from '../repository/shRepository.js';

import { Router } from 'express'
const server = Router();

server.post('/heroi', async (req, resp) => {
    try{
        const novoheroi = req.body;
        if(!novoheroi.nome)
            throw new Error('O heroi precisa de um nome !! ')

        if(!novoheroi.poder)
            throw new Error('Todo heroi tem um poder, o seu não ?')

        if(!novoheroi.voa)
            throw new Error('Preciso saber se o heroi voa ;( ')
        const heroi = await novoSuperHeroi(novoheroi)
        resp.send(heroi)
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/heroi/:id', async (req, resp) => {
    try{
    const nome = Number(req.params.id);

    const [ resposta ] =  await procurarHeroiid(nome);

    console.log( resposta)
    resp.send({
        resposta
    })
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/heroi?nome', async (req, resp) => {
    try{
    const nome = Number(req.params.nome);

    const [ resposta ] =  await procurarHeroinome(nome);

    console.log( resposta)
    resp.send({
        resposta
    })
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;