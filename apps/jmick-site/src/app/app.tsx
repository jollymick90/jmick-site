import { HeaderSection } from '@jmick-site/ui/page-components';
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

import './app.scss';
import { HeaderSupportLink } from '@jmick-site/model/page-component';
import back from '../assets/head-background.jpg'
const supportLinks: HeaderSupportLink[] = [
  {
    name: 'Careere',
    href: '#',
    description:
      'Follow me in my path.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Skills',
    href: '#',
    description:
      'java, javascript, kotlin, csharp, html, css, angular, react, vue, svelte, android, graphql',
    icon: SupportIcon,
  },
  {
    name: 'Blog',
    href: '#',
    description:
      'What do you want to know?',
    icon: NewspaperIcon,
  },
]
export function App() {
  return (
    <div className="w-full">
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
