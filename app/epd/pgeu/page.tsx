import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = { title: 'Grant Intelligence — EPD' };

// Redirect old URL /epd/pgeu → /epd/grant-intelligence
export default function PGEURedirect() {
  redirect('/epd/grant-intelligence');
}
