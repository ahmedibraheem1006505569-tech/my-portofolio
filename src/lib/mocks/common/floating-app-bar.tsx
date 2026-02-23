import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconBulb,
	IconCertificate,
	IconCode,
	IconDownload,
	IconMessage,
	IconUser,
} from '@tabler/icons-react';
import { FloatingDockItems, ToggleTheme } from 'src/components';

export const FloatingAppBarLinks: FloatingDockItems[] = [
	{
		title: 'Toggle Theme',
		icon: <ToggleTheme />,
	},
	{
		title: 'View CV',
		icon: (
			<IconDownload className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: '/Ahmed-Ibraheem-Resume.pdf',
		target: '_blank',
	},
	{
		title: 'About Me',
		icon: (
			<IconUser className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: '#home-about-me-section',
	},
	{
		title: 'Skills',
		icon: (
			<IconBulb className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: '#home-skills-section',
	},
	{
		title: 'Experience',
		icon: (
			<IconCertificate className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: '#home-experience-section',
	},
	{
		title: 'Projects',
		icon: (
			<IconCode className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: '#home-projects-section',
	},
	{
		title: 'Contact',
		icon: (
			<IconMessage className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: '#home-contact-us-section',
	},
	{
		title: 'GitHub',
		icon: (
			<IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: 'https://github.com/ahmedibraheem1006505569-tech',
	},
	{
		title: 'LinkedIn',
		icon: (
			<IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: 'https://www.linkedin.com/in/ahmed-ibraheem-b49290228/',
	},
	{
		title: 'WhatsApp',
		icon: (
			<IconBrandWhatsapp className='h-full w-full text-neutral-500 dark:text-neutral-300' />
		),
		href: 'https://api.whatsapp.com/send/?phone=201006505569&text&type=phone_number&app_absent=0',
	},
];
