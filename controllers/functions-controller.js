const conn = require('../public/scripts/config');

module.exports.getFunctions =  (req,res) => {   
    res.render('../views/higher-order/functions-view');
}

module.exports.postFunctions =  (req,res) => {   
    res.redirect('/functions')
}