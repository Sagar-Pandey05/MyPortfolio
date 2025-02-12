import React, { useState } from 'react'

const Page12 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [area, setArea] = useState("")
    

    const onSubmit = async (event) => {
        event.preventDefault();
        if (name === "" || email === "" || phone === "" || area === "") {
            alert("Please Fill All The Fields")
            return
        }
        if(!/[@.]/.test(email)){
            alert("Please Enter A Valid Email")
            return
        }

        if(phone.length < 10){
            alert("Please Enter A Valid Phone Number")
            return
        }

        alert("Thank You For Contacting Me")
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4881851e-d2a1-46c0-a009-708544a35b7f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }

        setName("")
        setEmail("")
        setPhone("")
        setArea("")
    };

    return (
        <div className='h-screen p-5 bg-white relative overflow-hidden'>
            <div className='h-full w-full flex  rounded-[50px] overflow-hidden bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1857,h_911,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)]'>
                <div id="left" className='h-full w-1/3 text-white absolute top-[30%] left-[7%]'>
                    <h1 className='text-white uppercase font-[file3] text-[17vw] leading-[1px]'>Got An</h1>
                    <h1 className='text-white uppercase font-[file3] text-[17vw] '>idea</h1>
                    <p className='text-gray-500 uppercase font-[file2] font-bold text-xl'>It is not about solving the problem</p>
                    <p className='text-gray-500 uppercase font-[file2] font-bold text-xl'>It's <span className='text-white uppercase font-[file2] font-light text-xl'>about makeing solution</span></p>
                    <hr className='line' />
                </div>
                <div id="right" className='h-full w-2/3 absolute left-[50%] top-[13%]'>
                    <h1 className='text-white text-[17vh] font-[file3] uppercase -mb-8'>Connect With Me</h1>
                    <hr className='w-[30vw] border-2 mb-10'/>
                    <form onSubmit={(e)=>{
                        onSubmit(e);
                    }}>
                        <input type="text" placeholder='Enter Your Name' name='name' className='inp outline-none bg-transparent text-white font-[alagfile]' value={name} onChange={(e)=>{
                            setName(e.target.value)
                        }} /><br />
                        <input type="email" placeholder='Enter Your E-mail' name='email' className='inp outline-none bg-transparent text-white font-[alagfile]' value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }} /><br />
                        <input type="Number" placeholder='Enter Your Phone Number' name='phone' className='inp outline-none bg-transparent text-white font-[alagfile]' value={phone} onChange={(e)=>{
                            setPhone(e.target.value)
                        }} /><br />
                        <textarea name='message' className='border border-gray-500 w-[30vw] h-20 mb-4 outline-none bg-transparent text-white font-[alagfile]' id="textArea" placeholder="Think ? Write Here..." value={area} onChange={(e)=>{
                            setArea(e.target.value)
                        }} ></textarea><br />
                        <button type='submit' className='border-2 bg-white px-5 py-2 text-lg font-semibold font-[alagfile] rounded-md hover:bg-black hover:text-white hover:rounded-3xl'>Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page12

