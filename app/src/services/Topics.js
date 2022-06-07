import Api from '@/services/Api.js'

export default{
    createTopic(data){
        return Api().post('Topics/createTopic', data);
    }
}
