//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
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) { // cb: callback
//         // if (!file.originalname.endWith('.pdf)) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)
//     }
// })

// // End point for client to upload, (upload.single: middleware)
// // app.post('/upload', upload.single('upload'), (req, res) => {
// //     res.send()
// // })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {         // function: design to handle error
//     res.status(400).send({ error: error.message })
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// express, middleware function
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// Middleware function, maintenance message
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')


// const main = async () => {
//     // const task = await Task.findById('5f8620382e6da54d9f1a2a1d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5f861f7d31b2884d8ff8103b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()