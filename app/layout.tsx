
import "tailwindcss/tailwind.css";

import  Layout  from "@/app/Dashboard/Layout";


interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: LayoutProps) 
 
{
  return (
    
      <html lang="pt-BR">
      <Layout>
       { children }
      </Layout>
      </html>
  
  );
}


