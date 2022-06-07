module.exports = {
    register(req, res, next){
        console.log(!req.body.email)

        if(!req.body.name){
            res.send({
                status: 400,
                error:{
                    type: 'name',
                    message: 'name is missing!'
                }
            })
        }

        if(!req.body.email){
            // console.log('email is missing')
            res.send({
                status: 400,
                error:{
                    type: 'email',
                    message: 'Email is missing!'
                }
            })
        }
        if(!req.body.emailconfirm){
            res.send({
                status: 400,
                error:{
                    type: 'emailconfirm',
                    message: 'Email confirm is missing!'
                }
            })
        }
        if(!req.body.pass){
            res.send({
                status: 400,
                error:{
                    type: 'pass',
                    message: 'Password is missing!'
                }
            })
        }
        if(!req.body.passconfirm){
            res.send({
                status: 400,
                error:{
                    type: 'passconfirm',
                    message: 'Password Confirm is missing!'
                }
            })
        }


        if(req.body.email != req.body.emailconfirm){
            res.send({
                status: 400,
                error:{
                    type: 'emailconfirm',
                    message: 'Emails don\'t match!'
                }
            })
        }

        if(req.body.pass != req.body.passconfirm){
            res.send({
                status: 400,
                error:{
                    type: 'passconfirm',
                    message: 'Passwords don\'t match!'
                }
            })
        }

        if(!req.body.email.match(/.+@.+\..+/g)){
            res.send({
                status: 400,
                error:{
                    type: 'email',
                    message: 'Not a valid email!'
                }
            })
        }

        if(!req.body.pass.match(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d*?^!$#&@%(),.</\\+=;:'"\[\]{}-]{8,}/g)){
            res.send({
                status: 400,
                error:{
                    type: 'pass',
                    message: 'Password invalid, must containt a Capital letter, Number, and must be atleast 8 characters long!'
                }
            })
        }
        // console.log('alls well :D')
        next()
    }
}