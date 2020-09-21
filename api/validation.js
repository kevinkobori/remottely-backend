module.exports = app => {
    function existsOrError (value, msg) {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === 'string' && !value.trim()) throw msg
    }

    function notExistsOrError (value, msg) {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return
        }
        throw msg
    }

    function equalsOrError (valueA, valueB, msg) {
        if (valueA !== valueB) throw msg
    }

    function fullNameOrError (value, msg) {
        const reg = /\s/
        if (value.length < 7 || !reg.test(value)) throw msg
    }

    function emailOrError (value, msg) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        if (!reg.test(value)) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError, fullNameOrError, emailOrError }
}