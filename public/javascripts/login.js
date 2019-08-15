$(document).ready(function(){
    $("#mensagem").hide();
    $("#mensagemCreate").hide();
    $("#mensagemCreate2").hide();
    $("#accSuccess").hide();
    $("#userExist").hide();
    
    $("#access").click(function(){
        //validar a existencia de um usuario e senha
        if(
            ($("#inputUser").val()=='') //valida se o usuario foi digitado
            ||($("#inputPassword").val()=='') // valida se a senha foi digitada
            )
        { 
            $("#mensagem").show(); //em caso de erro a mensagem de invalidação sera exibida
        }else{
            //enviar os dados do usuario para o server
            var input = {
                user: $("#inputUser").val(), 
                senha: $("#inputPassword").val()
            };
            //console.log(input);
            $.post("http://localhost:3000/users/login",input)
                .done(function(data) {
                    alert("Conexão efetuada com sucesso!"+JSON.stringify(data));
                    window.location.href = data.URL;
                })
                .fail(function(data) {
                    console.log(". . .ERROR. . . "+JSON.stringify(data));
                    $("#mensagem").show();
                })
        }
    });
    $("#createAcc").click(function(){
        $("#userExist").hide();
        if($("#createPassword").val()!=$("#confirmPassword").val()){
            $("#mensagemCreate").show();
        }else{
            var newAcc = {
                Nome: $("#createNome").val(), 
                InfoId: $("#createInfoId").val(), 
                Desc: $("#createDesc").val(),
                Metas: $("#createMetas").val(),
                Gastos: $("#createGastos").val(),
                DataNasc: $("#createData").val(),
                Email: $("#createEmail").val(),
                LinhaGes: $("#createLinhaGes").val(),
                RazSoc: $("#createRazSoc").val()
            };
            $.post("http://localhost:3000/users", newAcc)  //enviar o post para o Localhost porta 3000 e disso enviar para o users
                .done(function(data) {
                    /*if(data == 'X'){
                        $("#userExist").show();
                    }else{*/
                    $('#newUser').modal('hide');
                    $("#accSuccess").show();
                    //console.log(newAcc);
                    //}
                })
                .fail(function(data) {
                    
                    console.log(". . .ERROR. . . "+JSON.stringify(data));
                });
            
        }
    });

    // função de esqueci a senha
    $("#forgotAcc").click(function(){
        if($("#createPass").val()!=$("#confirmPass").val()){
            $("#mensagemCreate2").show();
        }else{
            var attAcc = {
                username: $("#usu").val(), 
                key: $("#createPass").val()
            };
            $.post("http://localhost:3000/users/attSenha", attAcc)  //enviar o post para o Localhost porta 3000 e disso enviar para o users no local de attSenha
                .done(function(data) {
                    if(data == 'V'){
                        console.log("em teoria a troca de senha funcionou: " + data);
                        
                    }else{
                    //$('#newUser').modal('hide');
                    //$("#accSuccess").show();
                    console.log("Deu ruim heim: " +data);
                    }
                })
                .fail(function(data) {
                    
                    console.log(". . .ERROR. . . "+JSON.stringify(data));
                });
            
        }

    });

});















    /*$(document).ready(function(){
    $("#mensagem").hide();
    $("#mensagemCreate").hide();
    $("#accSuccess").hide();
    $("#access").click(function(){
        //validar a existencia de um usuario e senha
        if(
            ($("#inputUser").val()=='') //valida se o usuario foi digitado
            ||($("#inputPassword").val()=='') // valida se a senha foi digitada
            )
        { 
            $("#mensagem").show(); //em caso de erro a mensagem de invalidação sera exibida
        }else{
            //enviar os dados do usuario para o server
            var input = {
                user: $("#inputUser").val(), 
                senha: $("#inputPassword").val()
            };
            console.log(input);
            $.post("http://localhost:3000/users",input)
                .done(function() {
                    alert("Conexão efetuada com sucesso!");
                })
                .fail(function(data) {
                    console.log(". . .ERROR. . . "+JSON.stringify(data));
                })
        }
    });
    $("#createAcc").click(function(){
        if($("#createPassword").val()!=$("#confirmPassword").val()){
            $("#mensagemCreate").show();
        }else{
            var newAcc = {
                username: $("#createUser").val(), 
                key: $("#createPassword").val(), 
                email: $("#email").val()
            };
            console.log(newAcc);
            $.post("http://localhost:3000/users", newAcc)  //enviar o post para o Localhost porta 3000 e disso enviar para o users
                .done(function() {
                    $('#newUser').modal('hide');
                    $("#accSuccess").show();
                    console.log(newAcc);
                })
                .fail(function(data) {
                    console.log(". . .ERROR. . . "+JSON.stringify(data));
                });
            
        }
    });
});*/