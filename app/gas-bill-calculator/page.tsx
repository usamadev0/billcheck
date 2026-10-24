import { permanentRedirect } from 'next/navigation';

// Legacy duplicate of /calculator — see /sngpl-bill-check-online for the
// same reasoning. Redirects into the canonical, nav-linked page.
export default function Legacy() {
  permanentRedirect('/calculator');
}
