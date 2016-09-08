/**
 * Created by pjpandey on 9/8/2016.
 */
module.exports = {
    getCall : getCall,
    postCall : postCall
};
function getCall(req, res){
    res.send({params : req.params, query : req.query,methodType : 'GET'});

}

function postCall(req, res){
    res.send({params : req.params, query : req.query, body : req.body, methodType : 'POST'});
}