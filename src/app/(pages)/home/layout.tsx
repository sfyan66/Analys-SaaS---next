
const HomeLayout = ({
  children,
  section1,
  section2,
  section3,
  section4,
  section5,
}: {
  children: React.ReactNode;
  section1: React.ReactNode;
  section2: React.ReactNode;
  section3: React.ReactNode;
  section4: React.ReactNode;
  section5: React.ReactNode;
}) => {
  return (
    <main>
      <div>{children}</div>
      <section>{ section1 }</section>
      <section>{ section2 }</section>
      <section>{ section3 }</section>
      <section>{ section4 }</section>
      <section>{ section5 }</section>
    </main>
  )
}

export default HomeLayout
