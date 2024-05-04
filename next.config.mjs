/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
    async headers() {
        return [
        {
            source: '/(.*)',
            headers: [
            {
                key: 'X-Frame-Options',
                value: 'DENY',
            },
            ],
        },
        ];
    },
};

export default nextConfig;
