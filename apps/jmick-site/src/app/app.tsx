import { Header, HeaderSection } from '@jmick-site/ui/page-components';
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

import './app.scss';
import { HeaderNavigationItem, HeaderSupportLink } from '@jmick-site/model/page-component';
import { Routes, Route } from "react-router-dom";

import back from '../assets/head-background.jpg'
const backRef = 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
const supportLinks: HeaderSupportLink[] = [
  {
    name: 'Career',
    href: '#',
    description:
      'Where i come from',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Skills',
    href: '#',
    description:
      'Who i am: java, javascript, kotlin, csharp, html, css, angular, react, vue, svelte, android, graphql',
    icon: SupportIcon,
  },
  {
    name: 'Blog',
    href: '#',
    description:
      'What i think',
    icon: NewspaperIcon,
  },
  {
    name: 'Project',
    href: '#',
    description:
      'What i do',
    icon: NewspaperIcon,
  },
]
const navigationList: HeaderNavigationItem[] = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]
export function App() {
  return (
    <div className="w-full h-full">
      <Header navigationList={navigationList}/>
      <HeaderSection
        supportLinks={supportLinks}
        backgroundImg={back}
        title="Michele Scarpa"
        subtitle='Fullstack developer, orientato al frontend'
        themeColor='jm'
      />
    </div>
  );
}

export default App;
