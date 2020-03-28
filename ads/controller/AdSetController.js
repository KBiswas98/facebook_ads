const axios = require("axios");


exports.showAll = (req, res, next) => {

    axios.get(`https://graph.facebook.com/v6.0/${process.env.ID}/adsets?access_token=${process.env.ACCESS_TOKEN}`)
    .then(result => {
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })

};

exports.addData = (req, res, next) => {

  const params = {
    name: req.body.name || "My sample ad",
    lifetime_budget: req.body.lifetime_budget || '2000000',
    start_date: req.body.start_date || new Date().toISOString(),
    end_time: req.body.start_date || '2020-04-10T16:57:30.195Z' || new Date().toISOString(),
    status: req.body.status || "PAUSED",
    campaign_id: req.body.campaign_id || "23844359608870112",
    bid_amount: req.body.bid_amount || "500",
    billing_event: req.body.billing_event || "IMPRESSIONS",
    optimization_goal: req.body.optimization_goal || "POST_ENGAGEMENT",
    targeting: req.body.targeting 
  };

  const urlBuilder = `https://graph.facebook.com/v6.0/${process.env.ID}/adsets?access_token=${process.env.ACCESS_TOKEN}`;

  axios
    .post(urlBuilder, params)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      console.log(err);
      res.status(400);
    });
};


exports.updateData = (req, res, next) => {
    console.log(req.headers.adset_id)
    axios.post(`https://graph.facebook.com/v6.0/${req.headers.adset_id}?access_token=${process.env.ACCESS_TOKEN}`, req.body)
    .then(result => {
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })
}


exports.removeData = (req, res, next) => {

    axios.delete(`https://graph.facebook.com/v6.0/${req.headers.adset_id}?access_token=${process.env.ACCESS_TOKEN}`)
    .then(result => {
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })

}
