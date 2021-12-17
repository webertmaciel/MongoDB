const Link = require('../models/Link')

const redirect = async (req, res) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title })
        res.redirect(doc.url);
    } catch (error) {
        res.send("houve um error")
    }
}


const addLink = async (req, res) => {
    let link = new Link(req.body)

    try {
        let doc = await link.save()
        res.send("Link Adicionado com Sucesso")
    } catch (error) {
        res.render('index', { error })
    }


}







module.exports = { redirect, addLink }