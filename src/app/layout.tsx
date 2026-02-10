import "./globals.css"

export const metadata = {
  title: "Eclipse Cursos",
  description: "Curso profissional de programação Roblox"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  )
}
