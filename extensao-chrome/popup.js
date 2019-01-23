document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnp').onclick = function (e) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                todo: "preencherFormulario"
            })
        })
    }
});

