const express = require('express');
const bodyParser = require('body-parser')
const connectionDb = require('./db.js');
const app = express();
const db = require('./Models')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.listen(3000, function () {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.send('ok');
})


app.get('/articles', async (req, res) => {
    const articles = await db.Article.findAll();
    res.send(articles);
})


app.get('/article/:id', async (req, res) => {
    const article = await db.Article.findAll({
        where: {
            id: req.params.id
        }
    })
    res.send(article)
})

app.post('/article', (req, res) => {
    console.log(req.body)
    db.Article.create({
        name: req.body.name,
        description: req.body.description
    })
    res.send({"Succes":"Article crée"})
})

app.put('/article/:id', (req, res) => {
    db.Article.update({name: req.body.name, description: req.body.description}, {
        where: {
            id: req.params.id
        }
    });
    res.send({"Succes":"Article modifié"})
})

app.delete('/article/:id', (req, res) => {
    db.Article.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({"Succes":"Article supprimé"})
})

