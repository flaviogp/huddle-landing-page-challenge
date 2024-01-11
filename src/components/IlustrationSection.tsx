import FollowingConversation from '../assets/images/illustration-flowing-conversation.svg'
import GrowTogether from '../assets/images/illustration-grow-together.svg'
import YourUsers from '../assets/images/illustration-your-users.svg'
import Ilustration from './Ilustration'



const IlustrationSection = () => {
  return (
    <section className='container w-full'>
        <Ilustration 
          image={GrowTogether} 
          title='Grow Together'
          text='Generate meaningfull discussions with your audience and build a strong, loyal community. think of the insightfull conversations you miss out on with a feedback'
          bg={'mobileTop1'}
        />
        <Ilustration 
          image={FollowingConversation} 
          title='Following Conversation'
          text={`You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.`}
        />
        <Ilustration 
          image={YourUsers} 
          title='Your Users'
          text={`It takes no time at all to integrate Huddle with your app's  authentication solution. this means, once signed in to your app, your users can start chatting immediately.`}
        />
    </section>
  )
}

export default IlustrationSection