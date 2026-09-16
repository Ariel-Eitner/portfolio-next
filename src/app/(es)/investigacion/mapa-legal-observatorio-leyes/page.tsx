import type { Metadata } from 'next';
import ResearchArticlePage from '@/components/pages/ResearchArticlePage';
import { getCopy } from '@/data/copy';
import { legalMapArticle } from '@/data/research';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('es', getCopy('es'), 'legalMapResearch');

export default function Page() {
	return <ResearchArticlePage lang='es' article={legalMapArticle} />;
}
