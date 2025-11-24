import Home from './(pages)/home/page';
import HomeLayout from './(pages)/home/layout';
import Section1 from './(pages)/home/@section1/page';
import Section2 from './(pages)/home/@section2/page';
import Section3 from './(pages)/home/@section3/page';
import Section4 from './(pages)/home/@section4/page';
import Section5 from './(pages)/home/@section5/page';

export default function Page() {
  return (
    <HomeLayout
      section1={<Section1 />}
      section2={<Section2 />}
      section3={<Section3 />}
      section4={<Section4 />}
      section5={<Section5 />}
    >
      <Home />
    </HomeLayout>
  );
}
