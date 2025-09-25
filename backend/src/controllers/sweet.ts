import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

export const getAllSweets = async (req : any, res : any) => {
  try{
    const sweets = await prisma.sweet.findMany();
    return res.status(200).json(sweets);
  }
  catch(error){
    console.log("Error getting all sweets", error);
    return res.status(500).json({
        message : "Internal server error"
    })
  }
};  

export const createSweet = async (req : any, res : any) => {
  try{
    const { name , description, price, quantity } = req.body;
    const userId = req.user.id;

    if (!name || !description || !price || !quantity) {
        res.status(400).send("Invalid Request");
        return;
    };
        const sweet = await prisma.sweet.create({
            data: {
                name,
                description,
                price,
                quantity,
                userId : userId
            },
        });
    res.status(201).json(sweet);
  }
  catch(error){
    console.log("Error creating sweet", error);
    return res.status(500).json({
        message : "Internal server error"
    })
  }
};

export const searchSweets = async (req : any, res : any) => {

};

export const updateSweet = async (req : any, res : any) => {
  try{
    const userId = req.user.id;
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    if (!name || !description || !price || !quantity) {
        res.status(400).send("Invalid Request");
        return;
    }
    const sweet = await prisma.sweet.update({
        where: {
            id: id,
            userId : userId
        },
        data: {
            name,
            description,
            price,
            quantity,
        },
    });
    res.status(200).json(sweet);
  }
  catch(error){
    console.log("Error updating sweet", error);
    return res.status(500).json({
        message : "Internal server error"
    })
  }
};

export const deleteSweet = async (req : any, res : any) => {
  try{
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Sweet ID is required");
    }
    const existingSweet = await prisma.sweet.findUnique({
        where : {
            id : id
        }
    })
    if(!existingSweet) {
        return res.status(400).send("Sweet not found");
    }
    await prisma.sweet.delete({
        where : {
            id : id
        }
    })
    return res.status(200).json({
        message : "Sweet deleted successfully"
    })
  }
  catch(error){
    console.log("Error deleting sweet", error);
    return res.status(500).json({
        message : "Internal server error"
    })
  }
};

export const purchaseSweet = async (req : any, res : any) => {
  const { id } = req.params;
  const { quantity } = req.body;
  if (!quantity) {
    res.status(400).send("Invalid Request");
    return;
  }
  const sweet = await prisma.sweet.update({
    where: {
      id: id,
    },
    data: {
      quantity: quantity,
    },
  });
  res.status(200).json(sweet);
};

export const restokeSweet = async (req : any, res : any) => {
  try{
    const { id } = req.params;
    const { quantity } = req.body;
    if (!quantity) {
        res.status(400).send("Invalid Request");
        return;
    }
    const sweet = await prisma.sweet.update({
        where: {
            id: id,
        },
        data: {
            quantity: quantity,
        }
    });
    res.status(200).json(sweet);
  }
  catch(error){
    console.log("Error restoking sweet", error);
    return res.status(500).json({
        message : "Internal server error"
    })
  }
};  
