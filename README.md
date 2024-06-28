<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">  
</head>
<body>
   

    <h1 class="bem-vindo" >Bem vindo ao meu Portfólio</h1>

    <div class='container'>
        <div class='card'>
            <h1> Cadastra-se para ter acesso </h1>
        
            <div id='msgError'></div>
            <div id='msgSuccess'></div>
        
            <div class="label-float">
                <input type="text" id="nome" placeholder=" " required>
                <label id="labelNome" for="nome">Nome</label>
            </div>
    
            <div class="label-float">
                <input type="text" id="usuario" placeholder=" " required>
                <label id="labelUsuario" for="usuario">Usuário</label>
            </div>
                
            <div class="label-float">
                <input type="password" id="senha" placeholder=" " required>
                <label id="labelSenha" for="senha">Senha</label>
                <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
                    
            </div>
    
            <div class="label-float">
                <input type="password" id="confirmSenha" placeholder=" " required>
                <label id="labelConfirmSenha" for="confirmSenha">Confirmar Senha</label>
                <i id="verConfirmSenha" class="fa fa-eye" aria-hidden="true"></i>
            </div>
                
            <div class='justify-center'>
                <button onclick='cadastrar()' >Cadastrar</button>
            </div>
    
        
        </div>
    </div>
    <script src="script.js" ></script>
</body>
</html>