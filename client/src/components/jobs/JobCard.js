import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import RoundedButtons from '../../styles/components/RoundedButtons'
import { isAuthenticated } from '../../lib/auth'

function JobCard({ _id, jobTitle, jobPhoto, jobOwner, numberOfBids, jobFee, jobIsLive }) {

  const authenticateUser = isAuthenticated()
  const history = useHistory()

  const handleNoUser = () => {
    if (!authenticateUser){
      history.push('/register')
    }
  }

  return (
    <>
      {jobIsLive ?
        <div className="card glass-morphism " style={{ width: '300px', height: '350px' }}>
          <div className="card-image-container">
            <div className="rounded-button">
              <RoundedButtons type={jobIsLive ? 'green' : 'red'} />
            </div>
            <div onClick={handleNoUser}>
              <Link to={`/jobs/${_id}`} >
                <img src={jobPhoto} alt={jobTitle} className="card-image" />
              </Link>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-user">
              <div className="">
                <img src={jobPhoto} alt={jobTitle} className="card-user-avatar" />
              </div>

              {jobOwner ?
                <div className="card-user-name">
                  <p className="">{jobOwner.name}</p>
                </div>
                :
                <div>This user has removed their account</div>}
                
            </div>
            <div className="card-body-text">
              <div onClick={handleNoUser}>
                <Link to={`/jobs/${_id}`} >
                  <p>{jobTitle}</p>
                </Link>
              </div>
            </div>
            <div className="card-body-footer-container">
              <hr />
              <div className="card-footer-body">
                <div className="card-footer-element">
                  <p>Bids: <span>{numberOfBids}</span></p>
                </div>
                <div className="card-footer-element">
                  <p>Starting Fee: <span>{jobFee}£</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="job-card glass-morphism">
          <div className="card-image-container">
            <div className="rounded-button">

              <RoundedButtons type={jobIsLive ? 'green' : 'red'} />
            </div>
            <div onClick={handleNoUser}>
              <Link to={`/jobs/${_id}`} >
                <img src={jobPhoto} alt={jobTitle} className="card-image" />
              </Link>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-user">
              <div className="">
                <img src={jobPhoto} alt={jobTitle} className="card-user-avatar" />
              </div>
              {jobOwner &&
              <div className="card-user-name">
                <p className="">{jobOwner.name}</p>
              </div>
              }
            </div>
            <div className="card-body-text">
              <div onClick={handleNoUser}>
                <Link to={`/jobs/${_id}`} >
                  <p>{jobTitle}</p>
                </Link>
              </div>
            </div>
            <div className="card-body-footer-container">
              <hr />
              <div className="card-footer-body">
                <div className="card-footer-element">
                  <p>Bids: <span>{numberOfBids}</span></p>
                </div>
                <div className="card-footer-element">
                  <p>Starting Fee: <span>{jobFee}£</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default JobCard