const Newsletter = () => {
  return (
    <div className="flex flex-col items-start gap-7 text-white p-7 max-w-[400px] lg:max-w-max">
        <h2 className="uppercase text-2xl">Newsletter</h2>
        <p className="lg:max-w-[380px]">
            To receive tips on hove to grow your community, sign up to our weekly
            newslwtter. We'll never send you spam or pass on your email adress.
        </p>

        <form action="#" className="flex flex-wrap justify-end w-full lg:w-[520px] gap-5 lg:gap-0 lg:justify-between">
            <input type="email" name="" id="" className="w-full p-2 rounded-md lg:max-w-[330px]"/>
            <button type="submit" className="py-2 px-9 bg-tPink text-center rounded-md font-semibold">
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default Newsletter