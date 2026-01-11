import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Event from '@/database/event.model';
import {v2 as cloudinary} from 'cloudinary'

export async function POST(req: NextRequest) {
  try {await connectToDatabase();
  const formData=await req.formData();
  let event;
  try{
    event=Object.fromEntries(formData.entries());
  }
  catch(e){
    return NextResponse.json({message:'Invalid Json format'},{status:400})
  }
  const file=formData.get('image') as File;
  if(!file) return NextResponse.json({message:'Image is required'},{status:400})
  
  const arrayBuffer=await file.arrayBuffer();
  const buffer=Buffer.from(arrayBuffer)

  const uploadResult=await new Promise((resolve,reject)=>{cloudinary.uploader.upload_stream({resource_type:'image',folder:'dev-events'},(error,result)=>{if(error) return reject(error); resolve(result);}).end(buffer)});

  event.image=( uploadResult as {secure_url: string}).secure_url;
  
  const createdEvent=await Event.create(event);
  return NextResponse.json({message:'Event Created',event:createdEvent},{status:201})
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      message: "Event Creation Failed",
      error: e instanceof Error ? e.message : "Unknown",
    });
  }
}

