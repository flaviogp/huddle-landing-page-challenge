import Statistics from './statistics'

import CommunitiesIcon from '../assets/images/icon-communities.svg'
import MessagesIcon from '../assets/images/icon-messages.svg'
const StatisticsSection = () => {
  return (
    <section className='container flex flex-col items-center gap-24 py-28 md:flex-row md:justify-center md:gap-44'>
      <Statistics icon={CommunitiesIcon} amount={1.4} text='Communities Formed'/>
      <Statistics icon={MessagesIcon} amount={2.7} text='Messages Sent'/>
    </section>
  )
}

export default StatisticsSection