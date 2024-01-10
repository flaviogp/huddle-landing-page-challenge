import FollowingConversation from '../assets/images/illustration-flowing-conversation.svg'
import GrowTogether from '../assets/images/illustration-grow-together.svg'
import YourUsers from '../assets/images/illustration-your-users.svg'
import Ilustration from './Ilustration'



const IlustrationSection = () => {
  return (
    <section className='container w-full p-7'>
        <Ilustration 
          image={GrowTogether} 
          title='Grow Together'
          text='Generate meaningfull discussions with your audience and build a strong, loyal community. think of the insightfull conversations you miss out on with a feedback'
        />
        <Ilustration 
          image={FollowingConversation} 
          title='Grow Together'
          text='Generate meaningfull discussions with your audience and build a strong, loyal community. think of the insightfull conversations you miss out on with a feedback'
        />
        <Ilustration 
          image={YourUsers} 
          title='Grow Together'
          text='Generate meaningfull discussions with your audience and build a strong, loyal community. think of the insightfull conversations you miss out on with a feedback'
        />
    </section>
  )
}

export default IlustrationSection