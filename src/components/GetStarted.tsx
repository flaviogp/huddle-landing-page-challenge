import Button from "./Button"

const GetStarted = () => {
  return (
    <section className="container w-full flex flex-col gap-7 items-center p-5 mt-16">
        <h1 className="text-4xl text-center capitalize leading-[50px]">Build the community your fans will love</h1>
        <p className="text-center font-semibold">
            Huddle re-imagines the way we build communities. You have a voice, bot so does
            your audience. Create connections with your users as you engage in genuine discussion.
        </p>   
        <Button />
    </section>
  )
}

export default GetStarted