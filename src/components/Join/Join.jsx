import './Join.css'

const Join = () => {
    return (
        <div>
            <div className="join" id="join-us">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className='stroke-text'>ready to</span>
                        <span>level up</span>
                    </div>
                    <div>
                        <span>your body</span>
                        <span className='stroke-text'>with us?</span>
                    </div>
                </div>

                <div className="right-j">
                    <form action="" className="email-container">
                        <input type="email" name='user-email' placeholder='Enter Your Email Address' />
                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Join
