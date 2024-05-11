const express = require("express")
const User = require("../models/users.model.js")


const router = express.Router()


//get all users
router.get("/", async (req, res) => {

    try {
        const showAll = await User.find()
        return res.status(200).json(showAll)

        // return res.json({ msg: "api is running" })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message })

    }

})


//get single users
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const SUsers = await User.findById({ _id: id })
        return res.status(200).json(SUsers)


    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message })

    }

})


//delete users
router.delete("/:id", async (req, res) => {

    const { id } = req.params

    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id })
        return res.status(200).json(deleteUser)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })

    }
})



//put or patch

router.patch("/:id", async (req, res) => {


    const { id } = req.params
    const { name, email, age } = req.body


    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updateUser)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })

    }
})


//for post frontend data to backend routes
router.post("/", async (req, res) => {
    const { name, email, age } = req.body


    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age
        })

        return res.status(201).json(userAdded)


    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message })

    }





})

module.exports = router