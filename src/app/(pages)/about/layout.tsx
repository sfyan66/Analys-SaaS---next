import PageAnimation from '@/components/layout/page';

export default function FeaturesLayout({
  children,
  section21,
  section22,
  section23,
  section24,
}: {
  children: React.ReactNode;
  section21: React.ReactNode;
  section22: React.ReactNode;
  section23: React.ReactNode;
  section24: React.ReactNode;
}) {
  return (
    <PageAnimation>
      <main>
        {children}
        <section>{section21}</section>
        <section>{section22}</section>
        <section>{section23}</section>
        <section>{section24}</section>
      </main>
    </PageAnimation>
  );
}
