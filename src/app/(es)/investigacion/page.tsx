import type { Metadata } from 'next';
import ResearchIndexPage from '@/components/pages/ResearchIndexPage';
import { getCopy } from '@/data/copy';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('es', getCopy('es'), 'research');

export default function Page() {
	return <ResearchIndexPage lang='es' />;
}
