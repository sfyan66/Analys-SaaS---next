import PricingCard from '@/components/pricing-card/page';
import PageAnimation from '@/components/layout/page';

const plans = [
  {
    type: 'Startup',
    price: '199',
    description:
      'Ideal for new ventures needing core analytics features to get started quickly.',
    features: [
      'All basic features',
      'Up to $10,000 USD traded',
      'Normal support',
      'Mobile App',
    ],
  },
  {
    type: 'Growth',
    price: '399',
    description:
      'Perfect For expanding businesses requiring insights and tools, start your trail now.',
    features: [
      'Everything on Startup plan',
      'Up to 10 team members',
      'Up to 100M tracked events',
      'Premium Support',
    ],
  },
  {
    type: 'Enterprise',
    price: '799',
    description:
      'Comprehensive solution for organizations demanding data capacity.',
    features: [
      'Everything on Growth plan',
      'Up to 1B tracked events',
      'Up to 50 team members',
      'Dedicated Suppor',
    ],
  },
];

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
