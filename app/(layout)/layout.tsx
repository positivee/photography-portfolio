import { getServerSession } from "next-auth";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function footerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar session={session} />
      <div className="grow">{children}</div>
      <Footer />
    </section>
  );
}
