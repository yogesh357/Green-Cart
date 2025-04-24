import React from 'react'
 
function ContactUs() {
    return (
        <div className='flex flex-col gap-5 mt-16 '>
            <div>
                <h2 className='text-2xl flex align-middle'>
                    We’d love to hear from you! Whether you have a question about our products, need help with an order, or want to provide feedback, our team is here to assist you.

                </h2>
            </div>
            <div className='grid  md:grid-cols-3 gap-5 sm:grid-cols-1 mt-10'>


                <div>
                    <h1>Customer Support</h1>
                    <div>
                        <p>📞 Phone: <span className='text-blue-500 hover:underline'>+91-9845670338</span></p>
                        <p>📧 Email: <span className='text-blue-500 hover:underline'> support@greecart.com</span></p>
                        <p>🕒 Working Hours: Monday – Sunday, 9:00 AM – 8:00 PM</p>
                    </div>
                </div>
                <div>
                    <h1>Need Help with an Order?   </h1>
                    <p>For order-related inquiries (delivery, refunds, replacements), please email us at
                        <p className='text-blue-500 hover:underline'>orders@greecart.com </p>with your order number.</p>

                </div>
                <div>
                    <h1>Business & Partnerships</h1>
                    <p>Interested in collaborating or selling on Greecart?</p>
                    <p> 📧 Email: <span className='text-blue-500 hover:underline'> business@greecart.com</span></p>
                </div>

                {/* <div>
                    <h1>Stay Connected on</h1>
                    <InstagramIcon />
                    <FacebookIcon />
                    < GitHubIcon />
                    <TwitterIcon />

                </div> */}
            </div>
        </div>
    )
}

export default ContactUs
