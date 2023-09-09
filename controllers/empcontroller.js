const employees = require('../Models/empSchema');

exports.addUser = async (req, res) => {

    console.log("Inside add user function");
    console.log(req.file);
    const { fname, lname, email, mobile, gender, status, location } = req.body

    try {
        const preuser = await employees.findOne({ email })

        if (preuser) {
            res.status(406).json("User already exsist !!!")
        }
        else {
            const newemp = new employees({
                fname, lname, email, mobile, gender, status, profile: req.file.filename, location
            })
            await newemp.save()
            res.status(200).json(newemp)

        }
    }
    catch (err) {
        res.status(401).json("Error: " + err)
    }

}

exports.getallUsers = async (req, res) => {
    const search = req.query.search
    const query = {
        fname: { $regex: search, $options: "i" }
    }
    try {
        const allUsers = await employees.find(query)
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const removeData = await employees.findByIdAndDelete({ _id: id })
        res.status(200).json(removeData)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.editUser = async (req, res) => {
    const { id } = req.params
    const { fname, lname, email, mobile, gender, status, location, profile } = req.body
    const file = req.file ? req.file.filename : profile
    try {
        const updateUser = await employees.findByIdAndUpdate({ _id: id }, {
            fname, lname, email, mobile, gender, status, profile: file, location
        }, { new: true })
        await updateUser.save()
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(401).json(error)
    }

}