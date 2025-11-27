import Image from 'next/image';
import UserGrowth from '@/components/analytics/userGrowth';
import UserSession from '@/components/analytics/userSession';
import OpacityCom from '@/components/helpers/opacityCom';

const Section3 = () => {
  return (
    <section className={`lg:h-screen py-20`}>
      <div className={`mb-12`}>
        <h4 className={`text-white subhead`}>
          We make it easy to
          <br />
          track all user analytics
        </h4>
        <p className={`text-secondary leading-relaxed text-pp`}>
          Our platform simplifies complex data intoactionable
          <br />
          insights, helping you understand user behavior without the hassle.
        </p>
      </div>
      <div className={`flex justify-between gap-8 lg:flex-row flex-col`}>
        <div className={`flex-1`}>
          <div className={`relative card p-2 rounded-4xl`}>
            <div className={`bg-white/3 card backdrop-blur-md p-6 m-8 mb-0`}>
              <h3 className={`text-white font-semibold mb-1`}>Users Growth</h3>
              <p className={`text-secondary text-sm mb-4`}>
                Active users in the last 7 days
              </p>
              <UserGrowth />
            </div>
            <OpacityCom />
          </div>
          <div className={`ml-12`}>
            <Image
              src={'/search.svg'}
              alt={''}
              width={24}
              height={24}
              className={`opacity-70 mb-4 ml-1`}
            />
            <h4 className={`text-white pb-4 pt-0 text-2xl font-head2`}>
              Advanced tracking
            </h4>
            <p className="text-secondary text-pp max-w-[360px]">
              Go beyond basic metrics with detailed event tracking and custom
              dimension analysis
            </p>
          </div>
        </div>
        <div className={`flex-1`}>
          <div className={`card p-2 flex-1 rounded-4xl relative`}>
            <div className="bg-white/3 card backdrop-blur-md p-6 m-8 mb-0">
              <h3 className="text-white font-semibold mb-1">
                Sessions Per Day
              </h3>
              <p className="text-secondary text-sm mb-4">
                Last 7 days activity
              </p>
              <UserSession />
            </div>
            <OpacityCom />
          </div>
          <div className={`flex-1 ml-12`}>
            <Image
              src={'/eye.svg'}
              alt={''}
              width={24}
              height={24}
              className={`opacity-70 mb-4 ml-1`}
            />
            <h4 className={`text-white pb-4 pt-0 text-2xl font-head2`}>
              In-depth monitoring
            </h4>
            <p className="text-secondary text-pp max-w-[360px]">
              Keep a close eye on key performe indicators and user interactions
              across all of your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
