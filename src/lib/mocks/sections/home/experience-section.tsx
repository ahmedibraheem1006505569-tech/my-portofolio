import {
	IconBriefcase, IconTool
} from '@tabler/icons-react';
import { TimelineEntry } from 'src/components';

export const ExperienceItems: TimelineEntry[] = [
	{
		title: 'FullStack MEARN Training at INFORMATION TECHNOLOGY INSTITUTE ( ITI )',
		content: (
			<div className='space-y-3'>
				<div className='flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300'>
					<IconBriefcase className='h-4 w-4 text-emerald-700' />
					<span>QENA • 07/2025 – Present</span>
				</div>
				<p className='text-sm text-neutral-800 dark:text-neutral-200'>
					Currently developing foundational full-stack capabilities through hands-on training, building functional
					web applications using the <strong>MERN/MEAN stack</strong> (Node.js,
					Express, React/ Angular, MongoDB), and creating responsive user
					interfaces with <strong>HTML5</strong>, <strong>CSS3</strong>, and{' '}
					<strong>Bootstrap</strong>. Actively learning and implementing modern web development practices.
				</p>
				<div className='flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400'>
					<IconTool className='h-3 w-3' />
					<span>Node.js</span>
					<span>Express</span>
					<span>React</span>
					<span>Angular</span>
					<span>MongoDB</span>
					<span>HTML5</span>
					<span>CSS3</span>
					<span>Bootstrap</span>
				</div>
			</div>
		),
	},
];
