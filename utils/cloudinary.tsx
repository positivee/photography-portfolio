import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getFolders(): Promise<
  {
    name: string;
    path: string;
  }[]
> {
  const results = await cloudinary.v2.api.sub_folders(
    `${process.env.CLOUDINARY_PHOTOSHOOTS_FOLDER}`,
    {
      max_results: 50,
    }
  );

  console.log(results.folders);

  return results.folders;
}
export async function getImagesFromFolder(folderName: string) {
  const results = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: `${process.env.CLOUDINARY_PHOTOSHOOTS_FOLDER}/${folderName}/`,
  });
  let reducedResults = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  return reducedResults;
}

export async function getImages() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_HOME_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(25)
    .execute();

  let reducedResults = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }
  return reducedResults;
}

export default cloudinary;
