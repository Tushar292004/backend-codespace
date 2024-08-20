import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
    api_key: process.env.CLOUDNIARY_API_key,
    api_secret: process.env.CLOUDNIARY_API_SECRET,
})

const uploadOnCloudnary = async (localFilePath)=>{
    try {
        if (!localFilePath)  return null
        // upload the file on cloudnary
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",               
        })
        console.log("file is Successfully uploaded");
        response.url
        return response
    } catch (error) {
        
    }
}

cloudinary.v2.uploader.upload("",
    { public_id: "olympic_flag"},
    function (error, result) {console.log(result);
    }
)