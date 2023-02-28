// GET https://cats.petiteweb.dev/api/single/:user/show - отобразить всех котиков
// GET https://cats.petiteweb.dev/api/single/:user/ids - отобразить все возможные айди котиков
// GET https://cats.petiteweb.dev/api/single/:user/show/:id  - отобразить конкретного котика
// POST https://cats.petiteweb.dev/api/single/:user/add - добавить котика
// PUT https://cats.petiteweb.dev/api/single/:user/update/:id - изменить информацию о котике
// DELETE  https://cats.petiteweb.dev/api/single/:user/delete/:id - удалить котика из базы данных

const config = {
    baseUrl: 'https://cats.petiteweb.dev/api/single/Subbot1nV',
    headers: {
        'content-type': 'application/json',
    }
}

class Api {
    #getResponse(res) {
        return res.ok ? res.json() : Promise.reject();
    }

    #baseUrl;
    #headers;

    constructor(config) {
        this.#baseUrl = config.baseUrl,
        this.#headers = config.headers
    }

    getAllCats(){
        return fetch(`${this.#baseUrl}/show`)
            .then(this.#getResponse)
    }
    
    getCatById(idCat){
        return fetch(`${this.#baseUrl}/show/${idCat}`)
            .then(this.#getResponse)
    }

    getIdsCats(){
        return fetch(`${this.#baseUrl}/ids`)
            .then(this.#getResponse)
    }

    addNewCat(data){
        return fetch(`${this.#baseUrl}/add`, {
            headers: this.#headers,
            body: JSON.stringify(data)
        })
            .then(this.#getResponse)
    }
    
    updateCatById(idCat, data){
        return fetch(`${this.#baseUrl}/update/${idCat}`, {
            method: 'PUT',
            headers: this.#headers,
            body: JSON.stringify(data)
        })
            .then(this.#getResponse)
    }

    udeleteByCatById(idCat){
        return fetch(`${this.#baseUrl}/delete/${idCat}`, {
            method: 'DELETE',
        })
            .then(this.#getResponse)
    }
}

 const api = new Api(config);