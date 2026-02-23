import {
	IconApi,
	IconBrandAngular,
	IconBrandBootstrap,
	IconBrandCss3,
	IconBrandDjango,
	IconBrandGithub,
	IconBrandHtml5,
	IconBrandJavascript,
	IconBrandMongodb,
	IconBrandNextjs,
	IconBrandNodejs,
	IconBrandPython,
	IconBrandReact,
	IconBrandTailwind,
	IconBrandTypescript,
	IconServer,
	IconSettings,
	IconTestPipe,
	TablerIcon,
} from '@tabler/icons-react';

interface SkillsItem {
	name: string;
	Icon: TablerIcon;
}

export const SkillsItems: SkillsItem[] = [
	{ name: 'JavaScript', Icon: IconBrandJavascript },
	{ name: 'TypeScript', Icon: IconBrandTypescript },
	{ name: 'React.js', Icon: IconBrandReact },
	{ name: 'Next.js', Icon: IconBrandNextjs },
	{ name: 'Node.js', Icon: IconBrandNodejs },
	{ name: 'Express', Icon: IconServer },
	{ name: 'Python', Icon: IconBrandPython },
	{ name: 'Django', Icon: IconBrandDjango },
	{ name: 'MongoDB', Icon: IconBrandMongodb },
	{ name: 'GraphQL', Icon: IconApi },
	{ name: 'Tailwind', Icon: IconBrandTailwind },
	{ name: 'Bootstrap', Icon: IconBrandBootstrap },
	{ name: 'HTML5', Icon: IconBrandHtml5 },
	{ name: 'CSS3', Icon: IconBrandCss3 },
	{ name: 'Axios', Icon: IconApi },
	{ name: 'GitHub', Icon: IconBrandGithub },
	{ name: 'React Testing Library', Icon: IconTestPipe },
	{ name: 'Jest', Icon: IconTestPipe },
	{ name: 'Angular', Icon: IconBrandAngular },
	{ name: 'Deployment', Icon: IconSettings },
];
