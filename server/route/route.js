/**
 * Created by pjpandey on 9/8/2016.
 */
var cntrl = require('../controller/cntrl');
module.exports = function(app){
    app.route('/api/:name/:sex')
        .post(cntrl.postCall)
        .get(cntrl.getCall);
};