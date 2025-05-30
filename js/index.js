const listaSelecaoSolo = document.querySelectorAll('.jin')
const levelingCard = document.querySelectorAll('.cartao-personagens')



listaSelecaoSolo.forEach(jin => {

    jin.addEventListener('click', () => {

        const cartaoPernagemAberto = document.querySelector('.aberto')
        cartaoPernagemAberto.classList.remove('aberto')
        
        
        const idPersonagemSelecionado = jin.attributes.id.value

        const idDoCartaoJinParaAbrir = 'cartao-' + idPersonagemSelecionado

        const cartaoPernagemParaAbrir = document.getElementById(idDoCartaoJinParaAbrir)
        cartaoPernagemParaAbrir.classList.add('aberto')

        const personagemAtivoNaListagem = document.querySelector('.ativo')
        personagemAtivoNaListagem.classList.remove('ativo')

        const personagemSelecionadoNaListagem = document.getElementById(idPersonagemSelecionado)
        personagemSelecionadoNaListagem.classList.add('ativo')
    })
})
    
