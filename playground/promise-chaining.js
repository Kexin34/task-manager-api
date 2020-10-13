require('../src/db/mongoose') // db connection
const User = require('../src/models/user') // access the user data

// User.findByIdAndUpdate('5f83a23bf56f580d09415089', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f83a23bf56f580d09415089', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})