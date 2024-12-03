import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "About page description",
    keywords: ['About Page','Fernando','Informacion','...1'],
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}