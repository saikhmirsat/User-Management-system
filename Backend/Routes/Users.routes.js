const express = require('express')
const { UserModel } = require('../Model/Users.model')

const UserRoutes = express()

UserRoutes.get('/', async (req, res) => {
    const data = await UserModel.find()
    res.send(data)
})

UserRoutes.post('/add', async (req, res) => {
    try {
        const data = new UserModel(req.body)
        await data.save()
        res.send({ "msg": "User has been added", "success": true })
    } catch (err) {
        console.log(err)
        res.send({ "msg": "User has been not added", "success": false })
    }
})

UserRoutes.get('/:_id', async (req, res) => {
    const { _id } = req.params
    try {

        const data = await UserModel.findById({ _id })
        res.send(data)

    } catch (err) {
        console.log(err)
        res.send({ "msg": "data not geting", "success": false })
    }
})

UserRoutes.delete('/delete/:_id', async (req, res) => {
    try {

        const { _id } = req.params
        await UserModel.findByIdAndDelete({ _id })
        res.send({ "msg": "User has been deleted", "success": true })

    } catch (err) {
        console.log(err)
        res.send({ "msg": "User has been not deleted", "success": false })
    }
})

UserRoutes.patch('/edit/:_id', async (req, res) => {
    try {

        const { _id } = req.params
        const payload = req.body
        await UserModel.findByIdAndUpdate({ _id }, payload)
        res.send({ "msg": "User data has been edited", "success": true })

    } catch (err) {
        console.log(err)
        res.send({ "msg": "User data has been not edited", "success": false })
    }
})

module.exports = {
    UserRoutes
}