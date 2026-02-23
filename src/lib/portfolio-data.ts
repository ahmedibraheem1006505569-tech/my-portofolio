import {
	AboutMeSectionData,
	ContactUsItems,
	ExperienceItems,
	ProductsItems,
	SkillsItems,
} from './mocks';

export const portfolioData = {
	name: 'Ahmed Ibraheem Ahmed',
	role: 'Entry-Level Fullstack Developer',
	experience: 'Junior',
	phone: '01006505569',
	email: 'ahmedibraheem9213289@gmail.com',
	stack: SkillsItems.map(skill => skill.name),
	projects: ProductsItems.map(p => p.title).join(', '),
	detailedExperience: ExperienceItems.map(e => e.title),
	socials: ContactUsItems.map(c => ({ platform: c.text, link: c.link })),
	education: AboutMeSectionData.find(s => s.title === 'Education')
		?.details.map(d => d.text)
		.filter(Boolean),
};
