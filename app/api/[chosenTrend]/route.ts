import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {    
  const lastSlashIndex = req.url.lastIndexOf('/');
  const content = req.url.substring(lastSlashIndex + 1);
  const trendName = decodeURIComponent(content);
  
  return NextResponse.redirect(
      `http://localhost:3001/trends?activeTab=top&chosenTrend=${trendName}`,
      {status: 302}
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
