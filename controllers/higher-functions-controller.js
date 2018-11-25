const conn = require('../public/scripts/config');

module.exports.getFunctions =  (req,res) => {   
    res.render('../views/higher-order/higher-functions-view');
}