import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getPhotoshoots, getPhotoshootsForEmail } from "@/lib/photoshoots";
import { getServerSession } from "next-auth";
import PhotoshootCard from "@/app/components/PhotoshootCard";
import Image from "next/image";
import AdminPanel from "@/app/components/AdminPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client panel: view shared images - Portfolio.",
};

async function ClientPage() {
  const session = await getServerSession(authOptions);

  const { photoshoots } = await getPhotoshoots();

  const { filteredPhotoshoots } = await getPhotoshootsForEmail(
    session?.user?.email ?? ""
  );

  return (
    <div className="container m-auto px-12 ">
      <span className="text-3xl text-center block mt-12">
        Welcome{" "}
        <Image
          src={session?.user?.image ?? ""}
          height={25}
          width={25}
          className="rounded-full inline-block"
          alt="User Image"
        />{" "}
        {session?.user?.email}
      </span>

      <h1 className="text-2xl mt-12">Photoshoots shared for you by admin:</h1>
      <div>
        {filteredPhotoshoots ? (
          filteredPhotoshoots?.map((photoshoot) => (
            <>
              <PhotoshootCard
                key={photoshoot.id}
                photoshoot={photoshoot}
                session={session}
              />
            </>
          ))
        ) : (
          <div>Your photoshoots avaliable or loading data</div>
        )}
      </div>

      {session?.user?.role === "user" && (
        <>
          <AdminPanel />
          <div>
            {photoshoots ? (
              photoshoots?.map((photoshoot) => (
                <PhotoshootCard
                  key={photoshoot.id}
                  photoshoot={photoshoot}
                  session={session}
                />
              ))
            ) : (
              <div>Your photoshoots avaliable or loading data</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ClientPage;
