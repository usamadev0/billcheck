import { permanentRedirect, notFound } from 'next/navigation';
import { CATEGORIES, parseSlug, type Category } from '../../../../lib/seo-data';

// ─────────────────────────────────────────────────────────────────
// These URLs used to serve ~10,000 near-duplicate, auto-generated
// pages (one per city x keyword-variation). That pattern matches
// Google's "scaled content abuse" / doorway-page policy and is the
// most likely cause of this site's ranking collapse.
//
// Instead of 404-ing (which throws away any link equity / index
// history) or continuing to serve thin content, every one of these
// legacy URLs now permanently (308) redirects to the single,
// genuinely useful, comprehensive hub page for that city —
// consolidating authority onto far fewer, much stronger pages.
// ─────────────────────────────────────────────────────────────────

export const dynamic = 'force-static';
export const dynamicParams = true;

// No generateStaticParams — nothing new is pre-built here; every
// request is resolved and redirected on demand.

export default async function LegacyProgrammaticPageRedirect({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  if (!CATEGORIES.includes(category as Category)) notFound();

  const parsed = parseSlug(category as Category, slug);
  if (!parsed) notFound();

  permanentRedirect(`/sngpl/cities/${parsed.city.slug}`);
}
