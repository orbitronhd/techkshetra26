export type PageState =
  "home" | "events" | "gallery" | "about" | "contact" | "tshirts";

export type NavItem = {
  readonly id: PageState;
  readonly label: string;
  readonly path: string;
};

export const NAV_ITEMS_LEFT: readonly NavItem[] = [
  { id: "about", label: "About", path: "/#about" },
  { id: "tshirts", label: "Merch", path: "/#tshirts" },
] as const;

export const NAV_ITEMS_RIGHT: readonly NavItem[] = [
  { id: "events", label: "Events", path: "/#events" },
  { id: "gallery", label: "Gallery", path: "/#gallery" },
] as const;
