export default function ContactLayout({
  children,
  section31,
  section32,
}: {
  children: React.ReactNode,
  section31: React.ReactNode,
  section32: React.ReactNode,
}) {
  return (
    <main>
      {children}
      <section>{section31}</section>
      <section>{section32}</section>
    </main>
  )
}