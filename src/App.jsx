import './styles/reset.css';
import './styles/scss/App.scss';

export default function App() {
  return (
    <section className='grid'>
      <section className='grid__box main-box'>
        <h1 className='main-box__heading'>
          Social Media{' '}
          <span className='main-box__heading--highlighted'>10x</span>{' '}
          <span className='main-box__heading--italic'>Faster</span> with AI
        </h1>
        <img
          src={require('./assets/images/illustration-five-stars.webp')}
          alt='Stars'
          className='main-box__image'
        />
        <p className='main-box__text'>Over 4,000 5-star reviews</p>
      </section>

      <section className='grid__box platforms-box'>
        <div className='platforms-illustration'>
          <div className='platforms-illustration__pill'>
            <div className='platforms-illustration__icon-container'>
              <img
                src={require('./assets/images/instagram-icon.svg')}
                alt='Instagram'
                className='platforms-illustration__icon'
              />
            </div>

            <div className='platforms-illustration__text'>
              <p className='platforms-illustration__handle'>@YourCo</p>
              <p className='platforms-illustration__follower-count'>
                12K Followers
              </p>
            </div>
          </div>

          <div className='platforms-illustration__pill'>
            <div className='platforms-illustration__icon-container'>
              <img
                src={require('./assets/images/x-icon.svg')}
                alt='X'
                className='platforms-illustration__icon'
              />
            </div>

            <div className='platforms-illustration__text'>
              <p className='platforms-illustration__handle'>@YourCo</p>
              <p className='platforms-illustration__follower-count'>
                8K Followers
              </p>
            </div>
          </div>
        </div>
        <h2 className='platforms-box__heading'>
          Manage multiple accounts and platforms
        </h2>
      </section>

      <section className='grid__box maintain-box'>
        <h2 className='maintain-box__heading'>
          Maintain a consistent posting schedule.
        </h2>
        <img
          src={require('./assets/images/illustration-consistent-schedule.webp')}
          alt='Consistent schedule'
          className='maintain-box__image'
        />
      </section>

      <section className='grid__box schedule-box'>
        <h2 className='schedule-box__heading'>Schedule to social media.</h2>
        <img
          src={require('./assets/images/illustration-schedule-posts.webp')}
          alt='Schedule'
          className='schedule-box__image'
        />
        <p className='schedule-box__description'>
          Optimize post timings to publish conetnt at the perfect time for your
          audience.
        </p>
      </section>

      <section className='grid__box grow-box'>
        <img
          src={require('./assets/images/illustration-grow-followers.webp')}
          alt='Increasing followers'
          className='grow-box__image'
        />
        <h2 className='grow-box__heading'>
          Grow followers with non-stop content.
        </h2>
      </section>

      <div className='grid__box stats-box'>
        <p className='stats-box__statistic'>
          <span className='stats-box__value'>&gt;56%</span>
          <span className='stats-box__context'>faster audience growth</span>
        </p>
        <img
          src={require('./assets/images/illustration-audience-growth.webp')}
          alt='Avatars'
          className='stats-box__image'
        />
      </div>

      <section className='grid__box content-box'>
        <h2 className='content-box__heading'>
          Create and schedule content{' '}
          <span className='content-box__heading--highlighted'>quicker.</span>
        </h2>
        <img
          src={require('./assets/images/illustration-create-post.webp')}
          alt='Create post button'
          className='content-box__image'
        />
      </section>

      <section className='grid__box ai-box'>
        <h2 className='ai-box__heading'>Write your content using AI.</h2>
        <img
          src={require('./assets/images/illustration-ai-content.webp')}
          alt='AI chatbot'
          className='ai-box__image'
        />
      </section>
    </section>
  );
}
