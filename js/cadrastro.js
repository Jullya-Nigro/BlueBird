function cadastrarUsuario(){
    event.preventDefault();
    var nome = document.getElementById("nome").value
   
    var email = document.getElementById("email").value
    
    var cpf = document.getElementById("cpf").value
  
    var nascimento = document.getElementById("nascimento").value
    
    var senha = document.getElementById("senha").value
   

    dados = {
        "name":nome,
        "email": email,
        "user_type_id": 1,
        "password": senha,
        "cpf_cnpj": cpf,
        "terms": 1,
        "birthday": nascimento
    }
    console.log(dados)
    chamadaApi(dados)
    
}

async function chamadaApi(dados) {
    let api = await fetch("https://go-wash-api.onrender.com/api/user",{
      method: "POST",
      body: JSON.stringify(dados),
      headers:{
        "Content-Type": "application/json"
      }
    })
    if(api.status === 200){
        let resp = await api.json()
        console.log(resp)
    }
    window.location.href="login.html"
}
