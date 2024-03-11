import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const fileId = '1cskMJPk1WGGJtRL1hdrWHA_cztAz03cp';
  try {
    const res = await fetch(`https://drive.google.com/uc?export=download&id=${fileId}`);
    const blob = await res.blob();
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    return new NextResponse(blob, { status: 200, statusText: "OK", headers });
  } catch (error) {
    return NextResponse.json("Error loading file");
  }
}