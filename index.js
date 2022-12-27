var axios = require('axios')

function salvar(hora, segunda, terça, quarta, quinta, sexta, sabado){
    axios.post('https://sheetdb.io/api/v1/26ohm1y2fzhzq',{
        "data": {
          "hora": hora, 
          "segunda": segunda, 
          "terça": terça,
          "quarta": quarta,
          "quinta": quinta,
          "sexta": sexta,
          "sabado": sabado
        }
    },{
      "auth": {
        "username": "hzgpqeq0",
        "password": "uiksrus4l96dapa8r0au"
      }
	    }
    ).then(response => {
      console.log(response.data)
    })
}


function coletar(){
  axios.get('https://sheetdb.io/api/v1/26ohm1y2fzhzq', {
      "auth": {
        "username": "hzgpqeq0",
        "password": "uiksrus4l96dapa8r0au"
      }
  })
   .then( response => {
        console.log(response.data);
    });
}

coletar()
console.log("ok")