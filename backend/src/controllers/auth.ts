import { PrismaClient } from "../../generated/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
// import zod from "zod";

const prisma = new PrismaClient();
export const JWT_SECRET = "manasdash";

export const registerUser = async(req : any, res : any) => {
    try{
        const { email , name , password } = req.body;

        if (!email || !name || !password) {
            res.status(400).send("Invalid Request");
            return;
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email : email
            }
        });
        if (existingUser) {
            res.status(400).send("User already exists");
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashedPassword
            }
        });
        const token = jwt.sign({ id : user.id }, JWT_SECRET, { expiresIn: '1d' });

        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        };

        return res.status(200)
        .cookie('accessToken', token, options)
        .json({ user , token });
    }
    catch(error){
        console.log("Error registering user", error);
        return res.status(500).json({
            message : "Internal server error"
        })
    }
};

export const loginUser = async(req : any, res : any) => {
    try{
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(400).send("Invalid Credentials");
            return;
        }
        const token = jwt.sign({ id : user.id }, JWT_SECRET , { expiresIn: '1d' });

        const options = {
            httpOnly: true,
            secure: true
        };

        return res.status(200)
        .cookie('accessToken', token, options)
        .json({ user , token , message: "Login successful" });
    }
    catch(error){
        console.log("Error logging in user", error);
        return res.status(500).json({
            message : "Internal server error"
        })
    }
};

export const logoutUser = (req : any, res : any) => {
    try{
        const options = {
            httpOnly: true,
            secure: true,
            sameSite : 'strict',
            maxAge: 24 * 60 * 60 * 1000
        }
        return res.status(200)
        .clearCookie('accessToken', options)
        .json({ message: "Logout successful" });
    }
    catch(error){
        console.log("Error logging out user", error);
        return res.status(500).json({
            message : "Internal server error"
        })
    }
};
