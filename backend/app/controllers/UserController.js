import UsersModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import SendEmail from "../utility/emailUtility.js";

export const Registration=async(req,res)=>{

    try {
        let reqBody=req.body;
        await UsersModel.create(reqBody)
        return res.json({status:"success","Message":"User registered successfully"})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }

}



