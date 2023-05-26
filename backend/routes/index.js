var express = require('express');
var router = express.Router();
var monk=require('monk');
var db=monk('127.0.0.1:27017/DriveReady')
var mean=db.get('Mean')
if(!db){
  console.log("DB not Connected");
}else{
  console.log("DB Connected")
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getData',function(req,res){
  mean.find({},function(err,docs){
    if(err){
      res.send(err)
    }else{
      res.send(docs)
      // console.log(docs)
    }
  })
})
module.exports = router;
