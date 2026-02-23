import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import {
	ChatWidget,
	FloatingAppBar,
	Footer,
	SmoothScroll,
} from 'src/components';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter-sans',
});

export const metadata: Metadata = {
	publisher: 'Ahmed Ibraheem Ahmed',
	title: 'Ahmed Ibraheem Ahmed | Fullstack Developer',
	description:
		'Fullstack Developer specializing in MERN stack, Django, React, and modern web technologies. Explore my projects and experience.',
	keywords: [
		'Ahmed Ibraheem Ahmed',
		'Ahmed Ibraheem',
		'Fullstack Developer',
		'MERN Stack',
		'Django',
		'React',
		'Next.js',
		'Portfolio',
		'Web Developer',
		'JavaScript',
		'TypeScript',
		'Qena, Egypt',
		'Egypt',
		'Qena Fullstack Developer',
		'Qena Web Developer',
		'Qena JavaScript Developer',
		'Qena Python Developer',
		'Qena React Developer',
		'Qena Next.js Developer',
	],
	authors: [{ name: 'Ahmed Ibraheem Ahmed' }],
	openGraph: {
		title: 'Ahmed Ibraheem Ahmed | Fullstack Developer',
		description:
			'Explore my work in MERN stack, Django, and modern web development.',
		url: 'https://ahmed-ibraheem-portfolio.vercel.app/',
		siteName: 'Ahmed Ibraheem Ahmed Portfolio',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/fav.webp',
				width: 1200,
				height: 630,
				alt: 'Ahmed Ibraheem Ahmed Portfolio',
				type: 'image/webp',
			},
		],
	},
	icons: { icon: '/fav.webp' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					disableTransitionOnChange
				>
					{children}
					<FloatingAppBar />
					<Footer />
				</ThemeProvider>
				<SmoothScroll />
				<Analytics mode='production' />
				<SpeedInsights />
				<ChatWidget />
			</body>
		</html>
	);
}
