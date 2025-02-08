"use client"; // Este componente é um Client Component porque usa hooks e interatividade
import * as React from "react";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "src/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react"; // Ícones para representar os temas
import { useTheme } from "next-themes";

export function NavBar() {
  const { theme, setTheme } = useTheme(); // Hook para gerenciar o tema
  const [mounted, setMounted] = React.useState(false);

  // Evita problemas de hidratação no Next.js
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Renderiza nada até o componente ser montado no cliente
  }

  return (
    <div className="flex justify-between items-center p-4 bg-background">
      {/* Logo e Links de Navegação */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botão de Alternância de Tema */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
