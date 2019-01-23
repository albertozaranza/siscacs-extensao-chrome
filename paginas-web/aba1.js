copiar = () => {
    localStorage.setItem('nome', document.getElementById('nome').value)
    localStorage.setItem('sobrenome', document.getElementById('sobrenome').value)
    localStorage.setItem('telefone', document.getElementById('telefone').value)
    alert('Dados copiados')
}