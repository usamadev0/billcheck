import { permanentRedirect } from 'next/navigation';

// Legacy duplicate of /duplicate-bill — see /sngpl-bill-check-online
// for the same reasoning. Redirects into the canonical, nav-linked page.
export default function Legacy() {
  permanentRedirect('/duplicate-bill');
}
