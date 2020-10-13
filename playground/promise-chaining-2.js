require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f838cfba41e9e09c99002d7').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5f83917a634d380a4a9ff381').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})