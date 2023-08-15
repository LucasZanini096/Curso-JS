const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)
    xhr.send();

    xhr.addEventListener("load", () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);            
        } else {
            obj.console.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    })

}

document.addEventListener("click", e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === "a") {
        carregaPagina(el)
    }
});

function carregaPagina(el) {
    const href = el.getAttibute('href');
    console.log(href)

    request({
        method: "GET",
        url: href,
        success(response) {
            carregaResultado(response)
        },
        error(errorText) {
            console.log(errorText);
        }
    })
}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response 
}