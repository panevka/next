import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:1337/uploads/:path*",
      },
    ];
  },
};

export default withPayload(nextConfig);
