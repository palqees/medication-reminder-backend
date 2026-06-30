const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user')
.then(() => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});


// Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});


// Model
const User = mongoose.model('User', userSchema);



// ===================== ROUTES =====================

// GET all users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});


// POST add user
app.post('/users', async (req, res) => {

    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});


// GET user by id
app.get('/users/:id', async (req, res) => {

    const user = await User.findById(req.params.id);

    res.json(user);
});


// UPDATE user
app.put('/users/:id', async (req, res) => {

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedUser);
});


// DELETE user
app.delete('/users/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: "User deleted successfully"
    });
});



// SERVER
app.listen(3000, () => {
    console.log('server is connected successfully');
});