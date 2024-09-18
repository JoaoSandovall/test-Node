export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] =  page
    }

    router(event) {
    event  = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
}
    
    handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    console.log('antes do fetch')
    fecth(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
        })
}

}

export default new Router()
