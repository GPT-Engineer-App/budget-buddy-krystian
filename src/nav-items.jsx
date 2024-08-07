import { Home, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import KrystianChat from "./pages/KrystianChat.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Krystian Chat",
    to: "/chat",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <KrystianChat />,
  },
];
