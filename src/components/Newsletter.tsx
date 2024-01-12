const Newsletter = () => {
  return (
    <div className="flex flex-col items-start gap-4 text-white p-7 max-w-[400px]">
        <h2 className="uppercase text-2xl">Newsletter</h2>
        <p>
            To receive tips on hove to grow your community, sign up to our weekly
            newslwtter. We'll never send you spam or pass on your email adress.
        </p>

        <form action="#" className="flex flex-wrap justify-end w-full gap-5">
            <input type="email" name="" id="" className="w-full p-2 rounded-md"/>
            <button type="submit" className="py-2 px-9 bg-tPink rounded-md font-semibold">
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default Newsletter