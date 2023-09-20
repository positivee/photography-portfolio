import { usePathname } from "next/navigation";
import Gallery from "../components/Gallery";
import { getFolders, getImages } from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";
import PackageOfferSection from "../components/PackageOfferSection";
import PhotoBookSection from "../components/PhotoBookSection";
import ContactSection from "../components/ContactSection";

export default async function Home() {
  const images = await getImages();

  return (
    <>
      <main className="container m-auto mt-12">
        <div className="mx-12">
          <div className="gap-12 lg:flex">
            <Image
              alt="My portrait"
              className="object-contain md:w-1/3 float-left mr-4 mb-4"
              src={"/img/my-portrait.jpg"}
              width={1920}
              height={2688}
            />
            <div className="">
              <h1 className="text-3xl  font-semibold mb-4 ">
                Wedding and Portrait Photographer in Warsaw
              </h1>
              <p className="text-justify mb-4 text-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>

              <p className="text-justify text-lg">
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed
                ipsum.Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
          <Gallery images={images} slug={"photo"} />
          <PackageOfferSection />
        </div>
      </main>
      <PhotoBookSection />
      <ContactSection />
    </>
  );
}
