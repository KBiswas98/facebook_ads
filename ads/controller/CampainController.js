const axios = require('axios')

exports.showAll = (req, res, next) => {

    axios.get(`https://graph.facebook.com/v6.0/${process.env.ID}/campaigns?access_token=${process.env.ACCESS_TOKEN}`)
    .then(result => {
        console.log(result)
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })

};

exports.addData = (req, res, next) => {

    const params = {
        name: req.body.name || 'Kamalesh Biswas Roy',
        objective : req.body.objective || 'LINK_CLICKS',
        status : req.body.status || 'PAUSED',
        special_ad_category : req.body.special_ad_catagory || 'NONE'
    }

    const urlBuilder = `https://graph.facebook.com/v6.0/${process.env.ID}/campaigns?access_token=${process.env.ACCESS_TOKEN}&name=${params.name}&objective=${params.objective}&status=${params.status}&special_ad_category=${params.special_ad_category}`

    axios.post(urlBuilder)
    .then( (result) => {
        res.send(result.data)
    })
    .catch( err => {
        console.log(err)
        res.status(400)
    })

};

exports.updateData = (req, res, next) => {
    axios.post(`https://graph.facebook.com/v6.0/${req.headers.campain_id}?access_token=${process.env.ACCESS_TOKEN}`, req.body)
    .then(result => {
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })
}


exports.removeData = (req, res, next) => {

    axios.delete(`https://graph.facebook.com/v6.0/${req.headers.campain_id}?access_token=${process.env.ACCESS_TOKEN}`)
    .then(result => {
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })

}