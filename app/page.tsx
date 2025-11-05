import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import {
    siteOgImage,
    siteOgImageAlt,
    siteTagline,
    siteTitle,
} from "@/lib/seo";

export const metadata: Metadata = {
    title: siteTitle,
    description: siteTagline,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: siteTitle,
        description: siteTagline,
        images: [
            {
                url: siteOgImage,
                width: 1200,
                height: 630,
                alt: siteOgImageAlt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteTagline,
        images: [siteOgImage],
    },
};

export default function Page() {
    return <HomePageContent />;
}