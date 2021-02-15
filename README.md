# SEI-Project-3: Deverr ![img](https://img.shields.io/badge/version-v%201.0.0-blue)

by [Alberto Cerrone](www.linkedin.com/in/alberto-cerrone), [Sandra Spighel](https://www.linkedin.com/in/sandraspighel/) & [Tim Frame](https://www.linkedin.com/in/tim-frame-187241100/) AKA SpicyKiwiPizza

![welcome_page](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/Home_page.gif?raw=true)

👉 [<b>TRY ME</b>](#website link) 👈

## Table of Contents

  - [Short Description](#short-description)
  - [Background](#background)
  - [Technology Used](#technology-used)
  - [Install](#install)
  - [How To Use DEVERR](#usage)
  - [Project Development](#project-development)
    - [General Approach](#general-approach)
    - [Workflow](#workflow)
    - [Wireframes](#wireframes)
    - [Project Set Up](#project-set-up)
    - [Seeding](#seeding)
    - [Controllers & Routes](#controllers-&-routes)
    - [Mounting the Front End](#mounting-the-front-end)
    - [Schemas](#schemas)
    - [Front End](#front-end)
    - [Home Page](#home-page)
    - [User Index](#user-index)
  - [Final Thoughts & Project Wrap](#final-thoughts-and-project-wrap)
    - [Wins](#wins)
    - [Challenges](#challenges)
    - [Potential future features](#potential-future-features)
  - [License](#license)

## Short Description
Platform aiming to simplify securing developer contracts through implementing a bidding system.

## Background
Inspired by the Fiverr website, Deverr is a job hunting platform allowing Auctioneers to advertise contracts, which interested Developers(Bidders) can 'bid' on.

This is the third project in the General Assembly Software Engineering Immersive course. Working with two other colleagues, we had 10 days to develop a full stack MERN application using an Express API to serve data from a Mongo database, and a separate front-end built with React. 

## Technology Used
### Languages 
* [JavaScript](https://www.javascript.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
### Frameworks & Libraries
* [React](https://reactjs.org/)
* [React-Router-Dom](https://reactrouter.com/ )
* [React-Icons](https://react-icons.github.io/react-icons/)
* [React-Slick](https://react-slick.neostack.com/)
* [Styled-components](https://styled-components.com)
* [Node](https://nodejs.org/en/)
### Dependencies & Components 
* [Axios](https://github.com/axios/axios)
* [Bcrypt](https://pypi.org/project/bcrypt/) 
* [Cloudinary](https://cloudinary.com/documentation)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [Express](https://www.react.express/)
* [Faker.js](https://www.npmjs.com/package/faker) 
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
* [Nodemon](https://nodemon.io/)
* [Mongoose](https://mongoosejs.com/) 
* [Mongoose-unique-validator](https://mongoosejs.com/docs/validation.html) 
* [MongoDB](https://www.mongodb.com/)

---

## Install
* Clone or download the repo 
* Install dependencies in the root of the project <code>yarn</code> 
* Install dependencies in the client folder <code>cd client && yarn</code>
* Start the database <code>mongod --dbpath ~/data/db</code>
* Start the server and front end (concurrently) <code>yarn dev-fullstack</code>

## How To Use DEVERR

![Register & Login](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/Register_user.gif?raw=true)

Auctioneers can view and publish jobs, comment on them and choose the winning bid from all bids received. 

![Post Job](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/post_job.gif?raw=true)

Bidders can browse all the jobs and filter them by category, place comments and bid for jobs.

![Place Bid](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/Place_bid.gif?raw=true)

Users can also favourite other users.

![Favourite User](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/favourite.gif?raw=true)

### Prerequisites
The website is mobile friendly and the user can access it through the browser. 

---

## Project Development
### General Approach
We started by each pitching an idea, discussing in detail and voting in our project group on each element of the idea (from how challenging it would be to build the front and back end, to populating the database and the overall wow factor). 

We selected the project with the highest score, which was a website replicating what Fiverr does, with a smaller scope of categories (focusing on digital jobs only).  

### Workflow
We split our workload in specific areas: Alberto was responsible for styling, Tim for building the front end and I was responsible for building the back end.
In order to assess overall daily progress, we discussed adopting a branch naming convention (COMPONENT - Component updates) and tracking our work using a Trello Board:

![Trello Board](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/Trello%20board.png?raw=true)

### Wireframes

Home page hero
![hero](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/hero.jpg?raw=true)

Register user
![register_page](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/register_page.jpg?raw=true)

Login user
![login](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/login.jpg?raw=true)

User profile
![profile-page](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/profile-page.jpg?raw=true)

### Project Set Up

As our group leader, Tim created the project and set up the repository, after which he installed the dependencies we needed to get the project started (Nodemon, Express and Mongoose) and added a script to the ‘package.json’ to start nodemon for hot reloading. Tim then created the ‘startServer’ function in ‘index.js', which tested if the server was running on port 4000 and connecting to the database. 

It was at this point that I took the lead on working on the back end, while Tim took on creating additional job seeds. 

I started with creating models for the users and the jobs, based on the initial schema we discussed in our project planning:

![Schema1](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/Schema1.png?raw=true)

I then installed bcrypt and mongoose-unique-validator in preparation of writing secure routes. 

### Seeding

In the planning phase we had worked out that we would need to create 40 ‘Auctioneer Profiles’ and 60 ‘Bidder’ profiles. 

While I was working on the models, Alberto took on automating adding user seeds. Our teacher suggested we could use a React dependency called ‘Faker.js’ to create dummy users fast, so he took charge of incorporating this into the data seeding process. 

```
function auctioneersSeed() {
 const auctioneerArray = [] // ! an array to push fake users into
 for (let index = 0; index < 40; index++) { // ! looping to create users
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
```
After creating auctioneerSeeds and bidderSeeds files, he wrote the 'seedDatabase' function used to add all the dummy data to the site.
```
   // CREATING AUCTIONEERS DB
   const auctioneers = auctioneersSeed()
   const createdAuctioneers = await User.create(auctioneers) // ! then pass that users array
   console.log(`😎 Created ${createdAuctioneers.length} Auctioneers`)
```
We had also decided on having 6 types of job categories: Android Developer, Apple Developer, Back-end Developer, Front-end Developer, Game Developer and UI Developer. Tim and I wrote job seed data, having created around 10 jobs per category, to reach 60 jobs in total. 

### Controllers & Routes

I then moved on to creating the controllers and the router, and testing each controller as it was created using Insomnia to make API requests.
Here are the routes our app is using, along with notes about access information:
```
const router = express.Router()
 
// * JOB ROUTES
router.route('/jobs')
 .get(jobs.index) // Show all jobs
 .post(secureRoute, jobs.create) // Create job - Auctioneers only
 
router.route('/jobs/:id')
 .get(secureRoute, jobs.show) // See a single job - Logged in users only
 .put(secureRoute, jobs.update) // Update a job - Only Auctioneer who made this
 .delete(secureRoute, jobs.delete) // Delete a job - Only Auctioneer who made this
 
// * BIDS
router.route('/jobs/:id/bids')
 .post(secureRoute, jobs.createBid) // Only bidders can place bid
 .get(secureRoute, jobs.getBids) // Only Auctioneer who posted can see bid
 
router.route('/jobs/:id/bids/:bidId')
 .delete(secureRoute, jobs.deleteBid) // Only bidders can delete bid
 
router.route('/jobs/:id/bids/:bidId')
 .put(jobs.editBid) // Only bidders can delete bid
 
// * COMMENTS
router.route('/jobs/:id/comments') // Comment and see comments - Logged in users only
 .post(secureRoute, jobs.createComment)
 .get(secureRoute, jobs.getComments)
 
router.route('/jobs/:id/comments/:commentId')
 .delete(secureRoute, jobs.deleteComment) // Delete a comment - Only Auctioneer who posted job and Bidder who wrote comment
 
// * USER ROUTES
router.route('/users')
 .get(users.index) // Show all users
 
router.route('/users/:id')
 .get(secureRoute, users.show) // See a single user profile - only signed in users
 .put(secureRoute, users.update) // * Update a profile - Only user who created it
 .delete(secureRoute, users.delete) // * Delete a profile - Only user who created it
 
// * FAVOURITES
router.route('/users/:id/favourite') // Show all users who favorited this user
 .post(secureRoute, users.favourite) // Logged in users only
 
//  * MESSAGE
router.route('/users/:id/message')
 .post(secureRoute, users.message)
// * USER REGISTER & LOGIN
router.route('/register')
 .post(auth.registerUser) // Register new user
 
router.route('/login')
 .post(auth.loginUser) // Login user
```

I set up three controlled to handle requests made to the server: 
auth.js dealing with registering new users and logging in
jobs.js dealing with job, comment and bid requests
users.js dealing with user requests
As an example, the code below is from the Jobs Controller:

```
//*GET ALL JOBS
async function jobIndex (req, res, next) {
 try {
   const jobs = await Job.find().populate('jobOwner')
   return res.status(200).json(jobs)
 } catch (err){
   next(err)
 }
}
 
//*POST JOB
async function jobCreate (req, res, next) {
 try {
   // if owner is not an auctioneer throw new error: you must be a bidder to place a bid
   if (!req.currentUser.isAuctioneer) throw new Error(notAuctioneer)
 
   // else create the new job
   const newJobData = { ...req.body, jobOwner: req.currentUser._id }
   const newJob = await Job.create(newJobData)
   return res.status(201).json(newJob)
 } catch (err){
   next(err)
 }
}
 
//*GET SINGLE JOB
async function jobShow (req, res, next) {
 const { id } = req.params
 try {
   const job = await Job.findById(id).populate('jobOwner').populate('jobBids.owner').populate('jobComments.owner')
   if (!job) throw new Error(notFound)
   return res.status(200).json(job)
 } catch (err) {
   next(err)
 }
}
//*DELETE JOB 
async function jobDelete (req, res, next) {
 // getting info of person making the request from URL
 const { id } = req.params
 try {
   // find job
   const jobToDelete = await Job.findById(id)
   if (!jobToDelete) throw new Error(notFound)
   if (!jobToDelete.jobOwner.equals(req.currentUser._id)) throw new Error(forbidden)
 
   await jobToDelete.remove()
   return res.sendStatus(204)
 } catch (err){
   next(err)
 }
//*EDIT JOB
async function jobUpdate (req, res, next){
 const { id } = req.params
 try {
   const jobToEdit = await Job.findById(id)
   if (!jobToEdit) throw new Error(notFound)
 
   // if user is not job owner, throw error
   if (!jobToEdit.jobOwner.equals(req.currentUser._id)) throw new Error(forbidden)
   Object.assign(jobToEdit, req.body)
   await jobToEdit.save()
   return res.status(202).json(jobToEdit)
 } catch (err){
   next(err)
 }
}
```

Once it was established the API requests were working correctly, I implemented a secure route that would check if a user had the correct credentials before fulfilling the request. 

I then worked on implementing a custom error handler to help with communicating different types of errors the back-end might encounter while a user was making a request.

```
export default function errorHandler(err, _req, res, next) {
 console.log('🤖 An Error Happened', err.name, err.message)
 if (err.name === 'ValidationError') {
   const customErrors = {}
   for (const key in err.errors) {
     customErrors[key] = err.errors[key].message
   }
   return res.status(422).json({
     message: 'Form Validation Errors',
     errors: customErrors,
   })
 }
 
 if (err.name === castError || err.message === notFound) {
   return res.status(404).json({ message: 'Not found' })
 }
 
 if ((err.name === unauthorized) || 
    (err.message === notAuctioneer) || 
    (err.message === notBidder) || 
    (err.message === notOwner)) {
   return res.status(401).json({ message: 'Unauthorized' })
 }
 
 if (err.message === forbidden) {
   return res.status(403).json({ message: 'Forbidden' })
 }
 next(err)
}
```

Below is a screenshot of Insomnia showcasing an example of testing a route - in this case requesting to update a job with an incorrect token:

![insomnia](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/insomnia.png?raw=true)

### Mounting the Front End

When we were ready to mount the front end, I took the lead in doing so by creating a React app based on a custom template, scaffolded to the back end using the command <code>npx create_react_app client --template cra-template-ga-ldn-projects</code>

I then created the satupProxy.js file to have a matching local host address to my back end, and updated the back end index.js to route all routes via the /api:
```
   //*Routes all routes
   app.use('/api', router)
```
As we are using nodemon to help with automatically restarting the node application when file changes in the directory are detected, I created a new file (nodemon.json) in the root of my project and set it to ignore client directory changes:

```
{
 "ignore": [
   "client"
 ]
}
```
Because we now need to run two terminals simultaneously, I added concurrently (using yarn add) and created a shortcut in my package.json scripts:
```
 "scripts": {
   "dev": "npx nodemon",
   "seed": "node db/seeds.js",
   "dev-fullstack": "concurrently \"yarn dev\" \"cd client && yarn start\""
 }
```
Last, from the client folder, I installed the dependencies we decided are required on the front end. 
I then continued testing back end routes and fixing bugs. We had an issue arising from the fact that when seeding our database, our jobs were not assigned owners, so I wrote a small function to randomly assign jobs to auctioneers:
```
   // MAP THROUGH JOBS DB, FOR EACH JOB ASSIGN A KEY NAMED JOB OWNER REFERENCING AUCTIONEERS DB
   const jobDataWithOwners = jobsData.map(job => {
     // Creating a random index number var
     const randomIndexNumber = Math.round(Math.random() * (createdAuctioneers.length - 1))
     // Assign each job to a random auctioneer
     job.jobOwner = createdAuctioneers[randomIndexNumber]._id
     return job
   })
```

### Schemas

Once Alberto and Tim started working on the front end, it became more and more obvious that because of our Auctioneer and Bidder Schemas, our code was not DRY enough as we had to repeat a lot of code twice. 

To resolve this issue, we decided to restructure our schemas and refactor Bidders and Auctioneers into one User schema with the added boolean field isAuctioneer:

![schema2](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/Schema2.png?raw=true)

### Front End
After I finished implementing everything we discussed for the back end, I moved on to help Tim and Alberto on the front end. 

I changed the head information to include our website name, description and logo, after which I went through the React Slick documentation to prepare implementing the carousel component containing our job categories. We initially wanted the component to sit on the home page, but as our website took shape we all agreed it made more sense to host this at the top of the JOBS page.

After looking at the code again while writing the README, I think a possible update would be to refactor the JobCarousel.js to only use one card which can then be populated with individual job ids and titles.

### Home Page
As Alberto was working on styling other parts of the website, I took on populating and styling the home page. I created the hero and footer, and selected a small number of images to choose from for background, to give the website a sleek, vibrant and fresh look. The images had to include sharp design elements to accentuate the GlassMorphism, and we were keen to have a dynamic background that suggested a network of collaboration.

![styling](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR/blob/main/README%20images/style.png?raw=true)

Working with the same friend I collaborated for Project 1, we processed the hero image to include the DEVERR logo, and edited the selected high resolution image to sharpen it.

I then imported all images and styled the home page to ensure the hero sits nicely at any screen width. 

Last, I wrote the about section of the home page, offering users a brief guide on how to navigate the website. 

### User Index

At this time, Tim had already written the main parts of the website - navigation, register and login components, as well as the majority of the job-related components, and the UserShow component. 

As Tim and Alberto were working on forms, I moved on to create the UserIndex component that showed all the current users of the site, split into Bidders and Auctioneers.
```
<div className="container-general">
 
     <div className="container-general">
       <h1>BIDDERS:</h1>
       <div className="container-general">
         {bidders ?
           bidders.map(user => (
             <div key={user._id}>
               <UserCard key={user._id}  {...user} refreshData={refreshData} />
             </div>
           ))
           :
           <h2>Loading Users</h2>
         }       
       </div>
     </div>
 
     <div className="container-general">
       <h1>AUCTIONEERS:</h1>
       <div className="container-general">
         {auctioneers ?
           auctioneers.map(user => (
             <div key={user._id} >
               <UserCard key={user._id}  {...user} refreshData={refreshData} />
             </div>
           ))
           :
           <h2>Loading Users</h2>
         }
       </div>
     </div>
   </div>
```
I continued by adding functionality to delete a user account, as well as to favourite another user. Below are snippets from the favourite user functionality:
In library / api.js:
```
//* Favourite user
export function favouriteUser(id){
 return axios.post(`${baseUrl}/users/${id}/favourite`, null, headers())
}
```
In UserCard.js :
```
         {favouritedBy &&
           <div className="card-header">
             <div>❤️ {numberOfUsersWhoFavourited}
             </div>
           </div>
         }
        
         <button className="btn" onClick={handleClick}> Favourite
         </button>
```

## Final Thoughts & Project Wrap

### Wins
* Got on very well with team, we had a good workflow and managed to reach our MVP. We were able to support each other and work together towards resolving any issues we ran into.
* Implementing favouriting functionality - I struggled with setting this up on the back end, but very pleased with it now functioning 
* Restructuring the schema to one user model
### Challenges
* **Jobs in database did not have owners**: For initial testing, we did not require each job to have an owner in the database. However, in the working website we want this relationship to be required. To achieve this we added 'required: true' in the job schema, and then linked owners in seeds.js.

* **Assigning Jobs to more than one Auctioneer**: When seeding the database, we needed to ensure that all jobs are owned by Auctioneers, but we did not want to assign all the jobs to one Auctioneer. To solve this issue, we are using Math.random to assign auctioneer owners to jobs randomly: Starting from index 0 in the jobs array we go one by one and assign random auctioneer to each job (with Math.random()). 

* **Refactoring back end schemas from Auctioneer and Bidder to User Schema**: As discussed [above](#schemas)

### Potential future features
* **How to notify the auctioneer when a bid is placed**: When a bid is placed, we loop through the list of auctioneers and alert the one whose id matches the id of the auctioneer who owns the bid.

* **How to create a bid chat** - Tim has managed to add this feature before we published the website

* **Enable Bidder to post photos once he wins bid**: The photos would serve as proof of the delivered project), we could host this on a newly crated bidder profile under a portfolio section.

* **Publish weekly Top 5 of best rated bidders, and of auctioneers with most jobs posted**


## Further information about our planning process is available via the [extended documentation](https://docs.google.com/document/d/1XGp4wVEdUBzMLSSu7ltRPjLcE1I3-e3xVfCZbchfyhY/edit?usp=sharing)
## Contributors
* Alberto Cerrone [📧](mailto:cerrone.alberto93@gmail.com)
* Sandra Spighel [📧](mailto:s.spighel@gmail.com)
* Tim Frame[📧](mailto:t.f.retouching@gmail.com)
---
## Contributing to this project
If you have suggestions for improving this project, please [open an issue on GitHub](https://github.com/HotSauceNinja/SEI-Project-3-DEVERR).

---
## License & copyright
This project was build for educational purposes. All the information on the website, including profiles and job adds, is fictitional. 

©️ [Alberto Cerrone](www.linkedin.com/in/alberto-cerrone)
©️ [Sandra Spighel](https://www.linkedin.com/in/sandraspighel)
©️ [Tim Frame](https://www.linkedin.com/in/tim-frame-187241100/)

