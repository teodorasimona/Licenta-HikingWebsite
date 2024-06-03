import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "src/pages/contact/page";
import ExplorePage from "src/pages/explore/page";
import HomePage from "src/pages/home/page";
import Layout from "src/pages/layout";
import LoginPage from "src/pages/login/page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BrowserRouter>
      <div className="bg-lime-950">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
