/**
 * Shared type definitions for the navigation system.
 * Single source of truth for all page states and nav items.
 */

export type PageState = 'home' | 'events' | 'gallery' | 'about' | 'contact'

export type NavItem = {
  readonly id: PageState
  readonly label: string
  readonly path: string
}

export const NAV_ITEMS_LEFT: readonly NavItem[] = [
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'events', label: 'Events', path: '/events' },
] as const

export const NAV_ITEMS_RIGHT: readonly NavItem[] = [
  { id: 'gallery', label: 'Gallery', path: '/#gallery' },
  { id: 'contact', label: 'Contact Us', path: '/#contact' },
] as const