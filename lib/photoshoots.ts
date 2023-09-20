import { prisma } from "./prisma"

export async function getPhotoshoots (){
    try{
        const photoshoots = await prisma.photoshoot.findMany({
            include: {
              participants: true
            }
          })
        return {photoshoots}
    }catch(error){
        return {error}
    }
}
export async function getPhotoshootsForEmail (email: string){

    try{
        const filteredPhotoshoots = await prisma.photoshoot.findMany({
            where: {
              participants: {
                some: {
                  email
                }
              }
            },
            include: {
              participants: true
            }
          });
          
          return {filteredPhotoshoots}
    }catch(error){
        return {error}
    }
}

export async function createPhotoshoot (name: string, email: string, googleLink: string){
    try{
        const photoshoot = await prisma.photoshoot.create({data: { name: name, link: googleLink}  })
        await prisma.participant.create({data: { photoshootId: photoshoot?.id, email:email}})
        return {photoshoot}
        
    }catch(error){
        return {error}
    }
}

export async function deletedPhotoshoot(id: string){
    console.log(id);
    try{

        await prisma.photoshoot.delete({
            where: { id: id },
            include: { participants: true }
          });
      
        
  
    return {deletedPhotoshoot};
}
    catch(error){
        return {error}
    }
  };