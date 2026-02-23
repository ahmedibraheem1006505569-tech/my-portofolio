import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconFileText,
	IconMail,
	IconProps,
} from '@tabler/icons-react';

interface FooterSectionItem {
	label: string;
	href: string;
	download?: boolean;
	icon?: React.ComponentType<IconProps>;
}

interface FooterSection {
	title: string;
	items: FooterSectionItem[];
}

export const FooterSocials: FooterSectionItem[] = [
	{
		href: 'https://github.com/ahmedibraheem1006505569-tech',
		icon: IconBrandGithub,
		label: 'GitHub',
	},
	{
		href: 'https://www.linkedin.com/in/ahmed-ibraheem-b49290228/',
		icon: IconBrandLinkedin,
		label: 'LinkedIn',
	},
	{
		href: 'mailto:ahmedibraheem9213289@gmail.com',
		icon: IconMail,
		label: 'Email',
	},
	{
		href: 'https://api.whatsapp.com/send/?phone=201006505569&text&type=phone_number&app_absent=0',
		icon: IconBrandWhatsapp,
		label: 'WhatsApp',
	},
];

export const FooterSections: FooterSection[] = [
	{
		title: 'Navigate',
		items: [
			{ label: 'About', href: '#home-about-me-section' },
			{ label: 'Experience', href: '#home-experience-section' },
			{ label: 'Projects', href: '#home-projects-section' },
			{ label: 'Skills', href: '#home-skills-section' },
			{ label: 'Contact', href: '#home-contact-us-section' },
		],
	},
	{
		title: 'Resources',
		items: [
			{
				label: 'Resume',
				href: '/Ahmed-Ibraheem-Resume.pdf',
				download: true,
				icon: IconFileText,
			},
		],
	},
];
