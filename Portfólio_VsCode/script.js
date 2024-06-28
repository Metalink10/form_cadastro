let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha =false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector ('#msgSuccess')




btn.addEventListener('click', ()=> {
    let inputSenha = Document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')

    } else {
        inputSenha.setAttribute('type', 'password')
    }
})



nome.addEventListener('keyup', ()=>{
    if (nome.value.length <= 3){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = ('Nome *Insira no mínimo 3 caracteres')
        nome.setAttribute('style', 'border-color: red')
        validNome = false
        
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = ('Nome')
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', ()=>{
    if (usuario.value != nome.value){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = ('usuario *deve ser igual ao "nome"')
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false

    } else {
        if (usuario.value == nome.value) {
            labelUsuario.setAttribute('style', 'color: green')
            labelUsuario.innerHTML = 'Usuário'
            usuario.setAttribute('style', 'border-color: green')
            validUsuario =true
            
        } else {
            usuario.value != nome.value 
            labelUsuario.setAttribute('style', 'color: green')
            labelUsuario.innerHTML + 'Usuário'
            validUsuario = false
        }
        
    }
})

senha.addEventListener('keyup', ()=>{
    if (senha.value.length <= 5){
        labelSenha.innerHTML = 'Senha deve ter no mínimo 5 caracteres'
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        validSenha = false

    } else {
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        labelSenha.setAttribute('style', 'color: green')
        validConfirmSenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if (confirmSenha.value.length <= 5){
        labelConfirmSenha.innerHTML = 'Senha deve ter no mínimo 5 caracteres'
        labelConfirmSenha.setAttribute('style', 'color: red')
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false

    } else {
        if (confirmSenha.value != senha.value){
            labelConfirmSenha.innerHTML = '*Senhas não conferem*'
            labelConfirmSenha.setAttribute('style', 'color: red')
            validConfirmSenha = false
            
        } else {
            labelConfirmSenha.innerHTML = 'Senha'
            confirmSenha.setAttribute('style', 'border-color: green  ')
            labelConfirmSenha.setAttribute('style', 'color: green')
            validConfirmSenha = true

        }   
         


    }
})

msgError

function cadastrar(){
    if ( validNome || validUsuario || validSenha || validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCad:  nome.value,
            userCad: usuario.value,
            senhaCad: senha.value

        }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando usuário'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML =''

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha o formulario para continuar'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')


        

    }
}


