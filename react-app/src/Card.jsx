import profilePic from './assets/profile.jpeg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src= {profilePic} width="200px" alt="" />
            <h2 className='card-title'>Abin Babu</h2>
            <p className = 'card-text'>I am a Developer</p>
        </div>
    )
}

export default Card