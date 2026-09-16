import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';
import Reveal from '@/components/ui/Reveal';
import { getCopy } from '@/data/copy';
import { researchArticles, researchCategories, researchUi } from '@/data/research';
import { researchJsonLd } from '@/lib/seo';
import { otherLang, path, type Lang } from '@/i18n/config';

function formatDate(date: string, lang: Lang) {
	return new Intl.DateTimeFormat(lang === 'es' ? 'es-AR' : 'en-US', {
		month: 'long',
		year: 'numeric',
	}).format(new Date(`${date}T12:00:00Z`));
}

export default function ResearchIndexPage({ lang }: { lang: Lang }) {
	const copy = getCopy(lang);
	const ui = researchUi[lang];

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(researchJsonLd(lang, copy, 'research')),
				}}
			/>
			<Nav
				lang={lang}
				siteName={copy.meta.siteName}
				nav={copy.nav}
				ui={copy.ui}
				altHref={path('research', otherLang(lang))}
			/>
			<main id='contenido'>
				<section className='relative overflow-hidden border-b border-hairline pt-28 pb-16 sm:pt-32 sm:pb-20'>
					<div aria-hidden='true' className='pointer-events-none absolute inset-0'>
						<div className='bg-grid absolute inset-0' />
					</div>
					<div className='container-page relative'>
						<Reveal>
							<p className='eyebrow text-accent'>{ui.eyebrow}</p>
							<h1 className='mt-6 max-w-4xl text-h2 font-semibold text-gradient sm:text-display sm:leading-[1.04]'>
								{ui.title}
							</h1>
							<p className='mt-7 max-w-2xl text-lead text-ink-muted'>{ui.intro}</p>
						</Reveal>
					</div>
				</section>
				<section className='py-section'>
					<div className='container-page'>
						<div className='grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2'>
							{Object.entries(researchCategories).map(([id, category]) => (
								<div key={id} className='bg-canvas p-6 sm:p-8'>
									<p className='font-mono text-xs uppercase tracking-[0.14em] text-accent'>{category.label[lang]}</p>
									<p className='mt-3 text-sm leading-relaxed text-ink-muted'>{category.description[lang]}</p>
								</div>
							))}
						</div>
						<div className='mt-14 space-y-5 sm:mt-16'>
							{researchArticles.map((article, index) => {
								const category = researchCategories[article.category];
								return (
									<Reveal key={article.slug} delay={index * 80}>
										<article className='card-hairline rounded-xl p-7 sm:p-9'>
											<p className='eyebrow text-accent'>{category.label[lang]}</p>
											<h2 className='mt-5 max-w-3xl text-h2 font-semibold text-ink'>
												<a href={path(article.route, lang)} className='transition-colors hover:text-accent'>
													{article.title[lang]}
												</a>
											</h2>
											<p className='mt-4 max-w-3xl text-lead text-ink-muted'>{article.excerpt[lang]}</p>
											<div className='mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-ink-faint'>
												<span>{formatDate(article.publishedAt, lang)}</span>
												<span>
													{article.readingMinutes} {ui.readingTime}
												</span>
											</div>
											<a
												href={path(article.route, lang)}
												className='mt-8 inline-flex rounded-full border border-hairline-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-raised'
											>
												{ui.readArticle}
											</a>
										</article>
									</Reveal>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer lang={lang} copy={copy} />
		</>
	);
}
