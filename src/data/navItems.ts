import { NavItem } from "@/types/NavItem";
import { ROUTES } from "@/config/routes";

export const NAV_ITEMS: NavItem[] = [
  {
    id: 0,
    label: "nav.home",
    href: ROUTES.HOME,
  },
  {
    id: 1,
    label: "nav.tours",
    href: ROUTES.TOURS,
  },
  { id: 2, label: "nav.about", href: ROUTES.ABOUT_US },
  { id: 3, label: "nav.contact", href: ROUTES.CONTACT },
];
