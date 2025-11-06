"use Client"

import { SetStateAction, useState } from "react";

const Section5 = () => {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState({});
  const [inValidMessage, setInValidMessage] = useState('');
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
    setInValidMessage('')
  }
  const handleInValid = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setInValidMessage('Please Enter a Valid Email Address')
  }
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(email){
      setEmails({...emails, email});
      setEmail('')
    } else {
      setInValidMessage("Please Enter Your Email Address");
      }
  }
  return (
    <section className={`h-screen flex items-center`}>
      <div className={`card py-12 px-16 w-full h-[50%] flex items-center`}>
        <div className={`w-[50%]`}>
          <h2
          className={`text-white md:text-[min(3vw,36px)] mb-12 font-bold leading-tight`}
          >Ready to get started?<br/>Create an account today</h2>
          <form 
          className={`relative`} 
          onSubmit={handleSubmit}>
            <input 
            type="email" 
            placeholder="Enter your email address"
            onInvalid={handleInValid}
            onChange={handleChange}
            value={email}
            className={`placeholder:text-secondary placeholder:text-lg rounded-lg border border-white/5 p-6 w-full bg-gray-600/4 outline-none text-white text-lg`}
            />
            <button
            className={`absolute top-[15%] right-2.5 h-[70%] btn-con py-0`}
            >GET STARTED</button>
          </form>
          <p 
          className={`text-center text-red-900 mt-4`}
          >{inValidMessage}</p>
        </div>
      </div>
    </section>
  )
}

export default Section5
