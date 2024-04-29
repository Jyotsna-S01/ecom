import userModel from "../Models/user.js";
import { hashPassword,comparePassword } from "../Helpers/authHelpers.js";
import jwt from "jsonwebtoken"

export const registerController = async (req,res) =>{
    try {
        const {name, email, password, phone, address, answer} = req.body;
        console.log(req.body);
        if (!name) {
            return res.send({error: "Name is required"});
        }
        if (!email) {
            return res.send({error: "Email is required"});
        }
        if (!password) {
            return res.send({error: "Password is required"});
        }
        if (!phone) {
            return res.send({error: "Phone is required"});
        }
        if (!address) {
            return res.send({error: "Address is required"});
        }
        if (!answer) {
            return res.send({error: "Answer is required"});
        }
        const existingUser = await userModel.findOne({email});

        if(existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already registered. Please login",
            });
        }
        const hashedPassword = await hashPassword(password);

        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            answer,
        }).save();

        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        });
    }
}

export const loginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            });
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }

        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }

        const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "10d",
        });
        res.status(200).send({
            success: true,
            message: "Login success",
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
}