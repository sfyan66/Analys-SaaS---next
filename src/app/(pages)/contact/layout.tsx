import PageAnimation from '@/components/layout/page';

export default function ContactLayout({
  children,
  section31,
  section32,
}: {
  children: React.ReactNode;
  section31: React.ReactNode;
  section32: React.ReactNode;
}) {
  return (
    <PageAnimation>
      <main>
        {children}
        <section>{section31}</section>
        <section>{section32}</section>
      </main>
    </PageAnimation>
  );
}
