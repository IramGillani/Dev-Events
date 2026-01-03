import { NextRequest, NextResponse } from "next/server";

export async function Post(req: NextRequest) {
  try {
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      message: "Event Creation Failed",
      error: e instanceof Error ? e.message : "Unknown",
    });
  }
}
