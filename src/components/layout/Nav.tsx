'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import type { Copy } from '@/data/copy';
import { LANG_LABEL, otherLang, path, type Lang } from '@/i18n/config';

/**
 * Sólo recibe las tres piezas de copy que usa. Pasarle el diccionario entero
 * metería la landing completa —bullets, proyectos, FAQ— en el payload de React
 * de todas las páginas, incluida la del mapa, que no la necesita.
 */
type Props = {
	lang: Lang;
	siteName: string;
	nav: Copy['nav'];
	ui: Copy['ui'];
	/** En la landing las anclas son locales; fuera de ella hay que anteponer la home. */
	isHome?: boolean;
	/**
	 * Equivalente de la página actual en el otro idioma. El selector tiene que
	 * llevar a la traducción de donde estás, no siempre a la home.
	 */
	altHref?: string;
};

export default function Nav({ lang, siteName, nav, ui, isHome = false, altHref }: Props) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState<string>('');

	const home = path('home', lang);
	const anchor = (id: string) => (isHome ? `#${id}` : `${home}#${id}`);
	const pageLinks = nav.filter((item) => item.key === 'map' || item.key === 'research');
	const anchorLinks = nav.filter((item) => item.key !== 'map' && item.key !== 'research');
	const alt = otherLang(lang);
	const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(ui.mailSubject)}`;

	// Fondo sólido sólo después de despegarse del hero.
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Scrollspy: marca el ítem cuya sección ocupa la franja superior del viewport.
	// Sólo tiene sentido en la landing, que es donde viven las anclas.
	useEffect(() => {
		if (!isHome) return;

		const sections = nav.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

				const first = visible[0];
				if (first) setActive(first.target.id);
			},
			{ rootMargin: '-20% 0px -70% 0px', threshold: 0 },
		);

		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	}, [nav, isHome]);

	// Con el menú móvil abierto, el fondo no debe scrollear.
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	// Escape cierra el menú.
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open]);

	return (
		<>
			<a
				href='#contenido'
				className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-canvas'
			>
				{ui.skipToContent}
			</a>

			<header
				className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
					scrolled || open ? 'border-b border-hairline bg-canvas/80 backdrop-blur-xl' : 'border-b border-transparent'
				}`}
			>
				<nav aria-label={siteName} className='container-page flex h-16 items-center justify-between gap-3 sm:h-18'>
					{/* El nombre se muestra en todos los tamaños: en móvil era justamente
              donde desaparecía. */}
					<a
						href={isHome ? '#inicio' : home}
						className='group flex shrink-0 items-center gap-2.5 font-mono text-sm font-medium tracking-tight'
					>
						<span className='grid size-8 place-items-center rounded-md border border-hairline-strong bg-raised text-[0.7rem] font-semibold text-accent transition-colors group-hover:border-accent'>
							{profile.initials}
						</span>
						<span className='text-ink'>{profile.name}</span>
					</a>

					<ul className='hidden shrink-0 items-center gap-2 lg:flex'>
						<li className='relative shrink-0'>
							<details className='group'>
								<summary className='flex h-10 list-none items-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-raised/60 px-3 text-sm font-medium text-ink-muted transition-colors hover:border-hairline-strong hover:bg-raised hover:text-ink group-open:border-hairline-strong group-open:bg-raised group-open:text-ink [&::-webkit-details-marker]:hidden'>
									<span>{ui.aboutMenu}</span>
									<svg
										viewBox='0 0 16 16'
										fill='none'
										stroke='currentColor'
										strokeWidth='1.7'
										strokeLinecap='round'
										strokeLinejoin='round'
										aria-hidden='true'
										className='size-3.5 shrink-0 transition-transform group-open:rotate-180'
									>
										<path d='m3.5 6 4.5 4 4.5-4' />
									</svg>
								</summary>
								<ul className='absolute left-0 top-full mt-3 w-60 overflow-hidden rounded-lg border border-hairline-strong bg-raised p-2 shadow-2xl shadow-black/40'>
									<li className='px-3 pb-2 pt-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-faint'>
										{ui.aboutMenu}
									</li>
									{anchorLinks.map((item) => (
										<li key={item.key}>
											<a
												href={anchor(item.id)}
												onClick={(event) => {
													event.currentTarget.closest('details')?.removeAttribute('open');
												}}
												aria-current={active === item.id ? 'true' : undefined}
												className={`block rounded-md px-3 py-3 text-sm transition-colors ${
													active === item.id ? 'bg-canvas text-ink' : 'text-ink-muted hover:bg-canvas hover:text-ink'
												}`}
											>
												{item.label}
											</a>
										</li>
									))}
								</ul>
							</details>
						</li>
						<li><a href='/faro' className='whitespace-nowrap rounded-md px-3 py-2.5 text-sm text-accent transition-colors hover:bg-raised'>FARO</a></li>
						{pageLinks.map((item) => (
							<li key={item.key}>
								<a
									href={path(item.key === 'map' ? 'techMap' : 'research', lang)}
									className='whitespace-nowrap rounded-md px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-raised hover:text-ink'
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>

					<div className='flex shrink-0 items-center gap-2'>
						<a
							href={altHref ?? path('home', alt)}
							hrefLang={alt}
							aria-label={ui.switchLangLabel}
							title={LANG_LABEL[alt]}
							className='rounded-md border border-hairline px-2.5 py-1.5 font-mono text-[0.7rem] uppercase text-ink-muted transition-colors hover:border-hairline-strong hover:text-ink'
						>
							{alt}
						</a>

						<a
							href={mailto}
							className='hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-opacity hover:opacity-85 sm:inline-block'
						>
							{ui.hire}
						</a>

						<button
							type='button'
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-controls='menu-movil'
							aria-label={open ? ui.closeMenu : ui.openMenu}
							className='grid size-10 place-items-center rounded-md border border-hairline text-ink lg:hidden'
						>
							<svg
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.7'
								strokeLinecap='round'
								className='size-5'
								aria-hidden='true'
							>
								{open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 8h16M4 16h16' />}
							</svg>
						</button>
					</div>
				</nav>
			</header>

			{/* Menú móvil */}
			<div
				id='menu-movil'
				hidden={!open}
				className='fixed inset-0 top-16 z-40 overflow-y-auto bg-canvas/95 backdrop-blur-xl lg:hidden'
			>
				<ul className='container-page flex flex-col gap-1 py-6'>
					{nav.map((item, i) => (
						<li key={item.key}>
							<a
								href={
									item.key === 'map' || item.key === 'research'
										? path(item.key === 'map' ? 'techMap' : 'research', lang)
										: anchor(item.id)
								}
								onClick={() => setOpen(false)}
								className='flex items-baseline gap-4 border-b border-hairline py-4 text-2xl font-medium tracking-tight text-ink'
							>
								<span className='font-mono text-xs text-ink-faint'>{String(i + 1).padStart(2, '0')}</span>
								{item.label}
							</a>
						</li>
					))}
					<li><a href='/faro' onClick={() => setOpen(false)} className='flex items-baseline gap-4 border-b border-hairline py-4 text-2xl font-medium tracking-tight text-accent'><span aria-hidden='true' className='font-mono text-xs'>✦</span>FARO</a></li>
					<li className='pt-6'>
						<a
							href={mailto}
							onClick={() => setOpen(false)}
							className='block rounded-full bg-accent px-5 py-3.5 text-center font-medium text-canvas'
						>
							{ui.hire}
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
