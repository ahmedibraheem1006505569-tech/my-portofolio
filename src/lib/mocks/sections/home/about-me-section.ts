import {
	Award,
	Briefcase,
	Calendar,
	GraduationCap,
	LucideIcon,
	MapPin,
	User,
} from 'lucide-react';

export interface AboutMeDetail {
	icon: LucideIcon | null;
	text?: string;
	translateZ: string;
	isButton?: boolean;
}

export interface AboutMeCard {
	title: string;
	icon: LucideIcon;
	details: AboutMeDetail[];
}

export const AboutMeSectionData: AboutMeCard[] = [
	{
		title: 'Personal',
		icon: User,
		details: [
			{ icon: MapPin, text: 'Qena, Egypt', translateZ: '50' },
			{
				icon: Calendar,
				text: 'Available to work',
				translateZ: '40',
			},
			{ icon: Briefcase, text: 'Fullstack Developer', translateZ: '50' },
			{ icon: null, translateZ: '60', isButton: true },
		],
	},
	{
		title: 'Education',
		icon: GraduationCap,
		details: [
			{
				icon: GraduationCap,
				text: "Bachelor's degree in Commerce",
				translateZ: '50',
			},
			{ icon: MapPin, text: 'SOUTH VALLEY UNIVERSITY , QENA', translateZ: '40' },
			{ icon: Award, text: 'Grade: GOOD', translateZ: '50' },
			{ icon: Calendar, text: '2018 – 2022', translateZ: '40' },
		],
	},
];
