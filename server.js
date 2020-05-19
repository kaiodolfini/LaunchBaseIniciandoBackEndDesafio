const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("view", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    const about = {
        title: "ROCKETSEAT",
        subtitle: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description1: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
        description2: "Em um mundo onde a informação fica obsoleta cada vez mais rápido, velocidade de aprendizado é a chave para o sucesso.",
        description3: "Por isso a Rocketseat oferece através de uma plataforma inteligente e metodologia prática, além de comunidade, eventos, conteúdo e conexão com o mercado de trabalho, todas as ferramentas que você precisa para masterizar no menor tempo possível as tecnologias mais modernas de desenvolvimento web e mobile, e dessa forma avançar para o próximo nível como programador.",
        tecnologies: [
            { name: "Javascript"},
            { name: "Node JS"},
            { name: "React JS"},
            { name: "React Native"}
        ]
    }

    return res.render("about", { about })
})

server.get("/courses", function(req, res){
    return res.render("courses", { items: courses })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5001, function(){
    console.log("Server is Running")
})