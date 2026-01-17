import PricingCard from '@/components/pricing-card';
import PageAnimation from '@/components/layout-component/page';
import { plans } from './pricing-data';

const pricing = () => {
  return (
    <PageAnimation>
      <main className={`flex items-center my-20`}>
        <section className={`flex-1`}>
          <h1 className={`text-white head1 text-center mt-24 mb-24`}>
            Pricing plans for
            <br />
            every kind of user
          </h1>
          <div
            className={`flex justify-around xl:flex-row flex-col gap-8 items-center `}
          >
            {plans.map((plan) => (
              <PricingCard
                key={plan.type}
                type={plan.type}
                price={plan.price}
                description={plan.description}
                features={plan.features}
              />
            ))}
          </div>
        </section>
      </main>
    </PageAnimation>
  );
};

export default pricing;
