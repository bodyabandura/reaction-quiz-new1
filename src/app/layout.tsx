import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Provider from "@/utils/ContextProider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Reaction - quiz</title>
        <link
          rel="icon"
          type="image/x-con"
          href="https://i0.wp.com/www.reaction-club.com/wp-content/uploads/2021/05/cropped-cropped-logo-reaction-bird.png?fit=32%2C32&ssl=1"
        />
      </head>
        <Provider>
          <Layout>
            {children}
          </Layout>
        </Provider>
    </html>
  );
}
