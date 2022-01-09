import React from "react";

function Contact() {
    return(
        <section id="Contact" class="Contact">
            <div class="contact-me">
                <h3>Contact Me</h3>
                <p>Any questions?
                    <br />
                    Please feel free to reach out.
                </p>
                <address>
                    P: <a href="609.609.609">609-609-609</a> <br />
                    E: <a href="doringhunter@yahoo.com">doringhunter@yahoo.com</a>
                </address>
            </div>
            <div class="contact-form">
                <form>
                    <label for="contact-name">Enter Your Name:</label>
                    <input type="text" id="contact-name" placeholder="Your Name" />

                    <label for="email">Enter Your Email:</label>
                    <input type="email" placeholder="Email Address" id="email" name="email" class="form-input" />

                    <label for="contact-message">Type Your Message:</label>
                    <textarea id="contact-message" placeholder="Your Message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;