import faker from 'faker'
import { categories } from '../../util/categories.js'

function biddersSeed() {

  const bidderArray = [] // ! an array to push my fake users into

  for (let index = 0; index < 60; index++) { // ! looping to created users
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const name = `${firstName} ${lastName}`
    const email = `${firstName}${lastName}@email.com`
    const photo = faker.image.people()
    const bio = faker.lorem.sentence()
    const city = faker.address.city()

    const bidderCategories = categories[Math.floor(Math.random() * categories.length)]
    const bidderIsAvailable = faker.random.boolean()


    bidderArray.push({
      name,
      email,
      photo,
      bio,
      city,
      password: 'pass', // ! setting all the passwords the same
      passwordConfirmation: 'pass',
      isAuctioneer: false,
      bidderCategories,
      bidderIsAvailable,
    })
  }
  return (
    bidderArray
  )
}

export default biddersSeed