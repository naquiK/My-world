

const Contact = () => {
    const handerFormSubmit = (formData) =>{
        const formInputData=Object.fromEntries(formData.entries())
        console.log(formInputData)
    }
  return (
   <section className="section-contact">
    <h2 className="container-title">
        Contact Us
    </h2>
    <div className="contact-wrapper container">
    <form action={handerFormSubmit}>
        <input type="text" required autoComplete="Off" placeholder="Enter Your Name" name="username" />
        <input type="text" required autoComplete="Off" placeholder="Enter Your Email" name="email" className="form-control" />
        <textarea rows={"10"} name="comments" className="form-control" required autoComplete="Off" placeholder="Enter Your Comment"></textarea>
        <button  type="submit">Send</button>
    </form>

    </div>
   
   </section>
  )
}

export default Contact
