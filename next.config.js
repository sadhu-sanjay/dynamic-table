/** @type {import('next').NextConfig} */
const dotenv = require('dotenv')
const { hostname } = require('os')

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
})

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "avatars.githubusercontent.com" },
        ]
    }
}


module.exports = nextConfig
