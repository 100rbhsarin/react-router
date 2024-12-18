import { Form } from "react-router";
import './contact.css'


export const contactData = async ({request})=>{

    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries()); 
       console.log(data)
    } catch (error) {
        console.log(error)
    }

}

export const Contact = ()=>{


    return(
       
        <>
        <section>
<div>
    <h1>Contact Us</h1>
    <p>For Any Help,  Reach out to us</p>

</div>
<fieldset>
<Form  action="/contact" method="post">
    <label htmlFor="username">Full Name</label>
    <input 
    type="text"
    name='username'
    required 
    id="username"
    placeholder="Full Name"
    autoComplete="off"
    />

<label htmlFor="email">Email</label>
<input 
    type="email"
    name='email'
    required 
    id="email"
    placeholder="xyz@email.com"
    autoComplete="off"
    />

<label htmlFor="message">Messaage</label>
<textarea
    type="message"
    name='message'
    cols="30"
    rows="20"
    required 
    id="message"
    placeholder="Discreption"
    autoComplete="off"
    />

<button type="submit">SEND</button>
</Form>
</fieldset>
        </section>
        </>
    )
}