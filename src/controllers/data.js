const axios = require('axios');

const getData= (req,res,next)=>{
    const {collectionParam} = req.params;
    let extra='';
    if(req.query.link == 'true'){
      extra='?link=true';
    }
    axios.get(`https://dev.settyl.com/backendbaseapi/api/${collectionParam}`+extra,
                { 'headers': { 'Authorization': '3d0be1c4-ef7a-11eb-9a03-0242ac130003' }})
                .then((data)=>{
                    res.send(data.data);
                })
                .catch((error)=>{
                  console.log(error);
                })
}

module.exports = {getData};
