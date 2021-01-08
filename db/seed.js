import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDB.js'
import auctioneersSeed from './data/auctioneersSeed.js'
//import User from '../models/user.js'


async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database Connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const auctioneers = auctioneersSeed()

    const createdAuctioneers = await User.create(auctioneers) // ! then pass that users array

    console.log(`😎 Created ${createdAuctioneers.length}`)

    await mongoose.connection.close()

    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('😞 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('👋🏼 Goodbye')
  }
}

seedDatabase()