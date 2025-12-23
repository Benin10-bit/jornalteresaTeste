import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jornal Teresa",
  description: "Jornal Teresa é o portal de notícias do IFRN, trazendo informações atualizadas, reportagens, eventos e novidades da comunidade acadêmica.",
  keywords:"Jornal Teresa, IFRN, notícias IFRN, jornal IFRN, eventos IFRN, atualidades IFRN, Rio Grande do Norte"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-tema="claro" lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
