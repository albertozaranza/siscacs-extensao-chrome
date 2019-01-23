chrome.runtime.sendMessage({todo: "showPageAction"})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "preencherFormulario") {
        document.getElementById('nome').value = localStorage.getItem('nome')
        document.getElementById('sobrenome').value = localStorage.getItem('sobrenome')
        document.getElementById('telefone').value = localStorage.getItem('telefone')
    }
})