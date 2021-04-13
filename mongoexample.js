const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const newName = process.argv[3]
const newNumber = process.argv[4]

const url =
  `mongodb+srv://fullstackopen:${password}@fullstackopen.s8j8p.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (!newName || !newNumber) {
  console.log(
    'Either name or number not provided, fetching all existing persons...'
  )

  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}

const newPerson = new Person({
  name: newName,
  number: newNumber,
})


newPerson.save().then(() => {
  console.log(`added ${newName} number ${newNumber} to phonebook`)
  mongoose.connection.close()
})


