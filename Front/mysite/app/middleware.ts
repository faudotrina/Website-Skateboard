import { NextRequest, NextResponse } from 'next/server';

const middleware = (req: NextRequest) => {
    const token = req.cookies.get('accessToken');
    const url = req.nextUrl.clone();

    console.log('Middleware triggered for URL:', url.href);
    console.log('Access Token:', token);

    if (!token && url.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', url));
    }

    return NextResponse.next();
};

export default middleware;

export const config = {
    matcher: ['/dashboard/:path*'], // This will match any route starting with /dashboard
};
