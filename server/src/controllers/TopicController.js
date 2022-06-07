const { Topic } = require('../models')

module.exports = {
    async createTopic(req, res){
        try{
            const topic = await Topic.create({
                name: req.body.title,
                description: req.body.description
            })

            console.log(topic)
            res.send({status: 200,topic: topic})
        } catch(err){
            console.log(err.errors[0].message)
            res.send({status: 400, error: err.errors[0].message})
        }

    },

    async getTopics(req, res){
        const topics = await Topic.findAll();
        if(topics){
            res.send({
                status: 200,
                topics: topics
            })
        }
    }
}