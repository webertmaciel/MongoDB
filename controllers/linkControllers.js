const Link = require('../models/Link')

const redirect = async (req, res) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title })
        res.redirect(doc.url);
    } catch (error) {
        res.send(error)
    }
}


const addLink = async (req, res) => {
    let link = new Link(req.body)

    try {
        let doc = await link.save()
        res.send("Link Adicionado com Sucesso")
    } catch (error) {
        res.render('index', { error, body: req.body })
    }


}

const allLinks = async (req, res) => {
    try {
        let links = await Link.find({})
        res.render('all', { links })
    } catch (error) {
        res.sand(error)
    }
}


const deleteLink = async (req, res) => {
    let id = req.params.id
    if (!id) {
        id = req.body.id
    }
    try {
        await Link.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.status(404).sand(error)
    }
}







module.exports = { redirect, addLink, allLinks, deleteLink }