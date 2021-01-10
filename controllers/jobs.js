import Job from '../models/job.js'


//*GET ALL JOBS
async function jobIndex (req, res, next) {
  try {
    const jobs = await Job.find()
    return res.status(200).json(jobs)
  } catch (err){
    next(err)
  }
}

//*POST JOB
async function jobCreate (req, res, next) {
  try {
    const newJob = await Job.create(req.body)
    return res.status(201).json(newJob)
  } catch (err){
    next(err)
  }
}

//*GET SINGLE JOB
async function jobShow (req, res, next) {
  const { id } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error()
    return res.status(200).json(job)
  } catch (err) {
    next(err)
  }
}

//*DELETE JOB
async function jobDelete (req, res, next) {
  const { id } = req.params
  try {
    const jobToDelete = await Job.findById(id)
    if (!jobToDelete) throw new Error()
    await jobToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

//*EDIT JOB
async function jobUpdate (req, res, next){
  const { id } = req.params
  try {
    const jobToEdit = await Job.findById(id)
    if (!jobToEdit) throw new Error()
    Object.assign(jobToEdit, req.body)
    await jobToEdit.save()
    return res.status(202).json(jobToEdit)
  } catch (err){
    next(err)
  }
}

// todo !!!
// async function filmCommentCreate(req, res, next) {
//   const { id } = req.params
//   try {
//     const film = await Film.findById(id)
//     if (!film) throw new Error(notFound)
//     const newComment = { ...req.body, owner: req.currentUser._id }
//     film.comments.push(newComment)
//     await film.save()
//     return res.status(201).json(film)
//   } catch (err) {
//     next(err)
//   }
// }

// async function filmCommentDelete(req, res, next) {
//   const { id, commentId } = req.params
//   try {
//     const film = await Film.findById(id)
//     if (!film) throw new Error(notFound)
//     const commentToDelete = film.comments.id(commentId)
//     if (!commentToDelete) throw new Error(notFound)
//     if (!commentToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
//     await commentToDelete.remove()
//     await film.save()
//     return res.sendStatus(204)
//   } catch (err) {
//     next(err)
//   }

export default {
  index: jobIndex,
  create: jobCreate,
  show: jobShow,
  update: jobUpdate,
  delete: jobDelete,
}