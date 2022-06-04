import { HeaderSection } from '@jmick-site/ui/page-components';
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

import './app.scss';
import { HeaderSupportLink } from '@jmick-site/model/page-component';
import back from '../assets/head-background.jpg'
const supportLinks: HeaderSupportLink[] = [
  {
      name: 'Sales',
      href: '#',
      description:
          'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: PhoneIcon,
  },
  {
      name: 'Technical Support',
      href: '#',
      description:
          'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: SupportIcon,
  },
  {
      name: 'Media Inquiries',
      href: '#',
      description:
          'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
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
      />
    </div>
  );
}

export default App;
