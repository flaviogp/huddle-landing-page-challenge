
interface StatisticsProps {
    icon: string;
    amount: number;
    text: string
}
const Statistics = ({icon, amount, text}: StatisticsProps) => {
  return (
    <div className="flex flex-col items-center w-max gap-5">
        <div className="w-full flex justify-start">
            <img src={icon} alt="" className="max-w-7"/>
        </div>
        <p className="font-bold text-6xl text-black/90">{amount}k+</p>
        <span className="text-md text-tPink">{text}</span>
    </div>
  )
}

export default Statistics