import { permanentRedirect } from 'next/navigation';

// Legacy duplicate of /bill-check (same target keyword, same intent —
// classic keyword cannibalization). /bill-check is the page wired into
// primary nav + sitemap.ts, so it is the canonical one; this URL now
// 301s into it instead of competing with it for the same rankings.
export default function Legacy() {
  permanentRedirect('/bill-check');
}
