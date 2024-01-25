import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t1jvpck', 'template_y0g9qmc', form.current, 'WTJd8eCZYGJyVwxql')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                    <form ref={form} className="email-container" onSubmit={sendEmail}>
                        <input type="email" name='user_email' placeholder='Enter Your Email Address' />
                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Join
