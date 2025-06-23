import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4 theme-toggle-icon" />;
    }
    return theme === "dark" ? (
      <Moon className="h-4 w-4 theme-toggle-icon" />
    ) : (
      <Sun className="h-4 w-4 theme-toggle-icon" />
    );
  };

  const getLabel = () => {
    if (theme === "system") {
      return `System (${resolvedTheme})`;
    }
    return theme === "dark" ? "Dark" : "Light";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 hover:scale-105 transition-all duration-200 theme-pulse"
        >
          {getIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-in slide-in-from-top-2 duration-200"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
