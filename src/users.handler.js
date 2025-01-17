const Users = require('./user.model')

const User = {
    list: async (req, res) => {
        const users = await Users.find();
        res.status(200).send(users)
    },

    create: async (req, res) => {
        const user = new Users(req.body)
        const saveUser = await user.save()
        res.status(201).send(saveUser._id)
    },

    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({_id: id})
        res.status(200).send( user );
    },

    update: async (req, res) => {
        // Obtener ID
        const { id } = req.params
        const user = await Users.findOne({_id: id})

        // Actualizar los datos
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },

    delete: async (req, res) => {
         // Obtener ID
         const { id } = req.params
         const user = await Users.findOne({_id: id})
 
        //  Eliminar dato
        if( user ){
            user.remove()
        } else {
            console.log('No se encontró el usuario');
        }

        res.sendStatus(204)
    },
}

module.exports = User