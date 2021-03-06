let baseUrl

export async function $fetch (url, options) {
    const finalOptions = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    },options)
    const response = await fetch(`${baseUrl}${url}`, finalOptions)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        const message = await response.text()
        const error = new Error(message)
        error.respones = response
        throw error
    }
}

export default {
    install (Vue, options) {
        console.log('Installed', options)
        //plugin options
        baseUrl = options.baseUrl
        //fetch
        Vue.prototype.$fetch = $fetch
    },
}