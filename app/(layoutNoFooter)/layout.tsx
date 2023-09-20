import { getServerSession } from "next-auth";
import Navbar from "../components/Navbar";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function noFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <Navbar session={session} />
      {children}
    </section>
  );
}
