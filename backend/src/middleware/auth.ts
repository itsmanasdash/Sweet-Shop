import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/auth";
import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

export const verifyJWT = async(req : any, res : any, next : any) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = (decoded as any).id;
        const user = await prisma.user.findUnique({
            where: {
                id : userId
            }
        })
        if (!user) {
            return res.status(401).json({ message: "Invalid access token!!" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid access token!!" });
    }
};