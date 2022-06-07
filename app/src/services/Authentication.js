import Api from '@/services/Api.js'

export default {
    registerUser(data) {
        return Api().post('register', data);
    },
    login(data) {
        return Api().post('login', data);
    }
}