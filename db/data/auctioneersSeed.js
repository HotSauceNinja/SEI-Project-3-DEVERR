import faker from 'faker'

function auctioneersSeed() {

  const auctioneerArray = [] // ! an array to push my fake users into

  for (let index = 0; index < 40; index++) { // ! looping to created users

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const name = `${firstName} ${lastName}`
    const email = `${firstName}${lastName}@email.com`
    const photo = faker.image.people()
    const bio = faker.lorem.sentence()
    const city = faker.address.city()
    auctioneerArray.push({
      name,
      email,
      photo,
      bio,
      city,
      isAuctioneer: true,
      password: 'pass',
      passwordConfirmation: 'pass', // ! setting all the passwords the same
    })
  }

  return (
    auctioneerArray
  )
}

export default auctioneersSeed