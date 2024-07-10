/** @type {import('next').NextConfig} */
import fs from "fs";
import webpack from "./webpack.config.mjs";

const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            "/*": ["./cache/**/*"],
        },
        serverComponentsExternalPackages: ["sharp", "onnxruntime-node"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.mikn.dev",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "/avatars/**",
            },
            {
                protocol: "https",
                hostname: "cdn.statically.io",
                port: "",
                pathname: "/avatars/*",
            },
            {
                protocol: "https",
                hostname: "cdn.mdusercontent.com",
                port: "",
                pathname: "/avatars/**",
            },
        ],
    },
};
nextConfig.webpack = webpack;

export default nextConfig;
