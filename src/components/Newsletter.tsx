import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('') 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const test = emailRegex.test(email)

    if(!test) {
      setSuccessMessage('')
      setError( 'Endereço de E-mail invalido!')
      return;
    } else {
      setError('')
      setSuccessMessage('Obrigado por cadastrar seu email!')
      return //Function to submit
    }
    
  }


  return (
    <div className="flex flex-col items-start gap-7 text-white p-7 max-w-[400px] lg:max-w-max">
        <h2 className="uppercase text-2xl">Newsletter</h2>
        <p className="lg:max-w-[380px]">
            To receive tips on hove to grow your community, sign up to our weekly
            newslwtter. We'll never send you spam or pass on your email adress.
        </p>

        <form name="form" onSubmit={(e) => handleSubmit(e)} method="GET"  className="flex flex-wrap justify-end w-full lg:w-[520px] gap-5 lg:gap-0 lg:justify-between">

            <label htmlFor="email">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="w-full p-2 rounded-md lg:max-w-[330px] text-tVeryDarkCyan font-semibold"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
            </label>
            
            <button 
              type="submit" 
              className="py-2 px-9 bg-tPink text-center rounded-md font-semibold"
              
            >
                Subscribe
            </button>
        </form>
        { error && <p className="text-tLightRed">{error}</p> }
        { successMessage && <p className="text-green-500">{successMessage}</p> }
    </div>
  )
}

export default Newsletter