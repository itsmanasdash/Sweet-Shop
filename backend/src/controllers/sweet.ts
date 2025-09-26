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
    try{
        const { searchTerm } = req.query;
        if (!searchTerm) {
            res.status(400).send("Invalid Request");
            return;
        }
        const sweets = await prisma.sweet.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    },
                    {
                        description: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        return res.status(200).json(sweets);
    }
    catch(error){
        console.log("Error searching sweets", error);
        return res.status(500).json({
            message : "Internal server error"
        })
    }
};

export const updateSweet = async (req : any, res : any) => {
  try{
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    if (!name || !description || !price || !quantity) {
        res.status(400).send("Invalid Request");
        return;
    }
    const sweet = await prisma.sweet.update({
        where: {
            id: id,
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

export const purchaseSweet = async (req: any, res: any) => {
  const { id } = req.params;
  const { quantity } = req.body;
  
  if (!quantity || quantity <= 0) {
    res.status(400).json({ error: "Invalid quantity. Must be a positive number." });
    return;
  }

  try {
    // First, get the current sweet to check available quantity
    const currentSweet = await prisma.sweet.findUnique({
      where: {
        id: id,
      },
    });

    if (!currentSweet) {
      res.status(404).json({ error: "Sweet not found" });
      return;
    }

    // Check if there's enough stock
    if (currentSweet.quantity < quantity) {
      res.status(400).json({ 
        error: "Insufficient stock", 
        available: currentSweet.quantity,
        requested: quantity 
      });
      return;
    }

    // Update the sweet by reducing the quantity
    const sweet = await prisma.sweet.update({
      where: {
        id: id,
      },
      data: {
        quantity: currentSweet.quantity - quantity, // Reduce quantity
      },
    });

    res.status(200).json({
      message: "Purchase successful",
      sweet: sweet,
      purchasedQuantity: quantity
    });
  } catch (error) {
    console.error("Error purchasing sweet:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const restokeSweet = async (req : any, res : any) => {
  try{
    const { id } = req.params;
    const { quantity } = req.body;
    if (!quantity) {
        res.status(400).send("Invalid Request");
        return;
    }
    const existingSweet = await prisma.sweet.findUnique({
        where: {
            id: id,
        },
    });
    if(!existingSweet) {
        return res.status(400).send("Sweet not found");
    }
    const updatedSweet = existingSweet.quantity + quantity;
    await prisma.sweet.update({
        where: {
            id: id,
        },
        data: {
            quantity: updatedSweet,
        }
    });
    res.status(200).json({
        message : "Sweet restocked successfully",
    });
  }
  catch(error){
    console.log("Error restoking sweet", error);
    return res.status(500).json({
        message : "Internal server error"
    })
  }
};  
