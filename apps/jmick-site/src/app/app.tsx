import { Header, HeaderSection } from '@jmick-site/ui/page-components';
import { NewspaperIcon, SupportIcon } from '@heroicons/react/outline'

import './app.scss';
import { HeaderNavigationItem, HeaderSupportLink } from '@jmick-site/model/page-component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import back from '../assets/head-background.jpg'
import { ResumePage, RESUME_PATH } from '@jmick-site/feature/career';
import { ContentSamplePage } from '../components/content-sample-page';
export const BLOG_PATH = "/blog";
const supportLinks: HeaderSupportLink[] = [
  {
    name: 'Resume',
    href: `${RESUME_PATH}`,
    description:
      'Who i am: java, javascript, kotlin, csharp, html, css, angular, react, vue, svelte, android, graphql',
    icon: SupportIcon,
  },
  {
    name: 'Blog',
    href: `${BLOG_PATH}`,
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
  { name: 'Resume', href: `${RESUME_PATH}`, },
  { name: 'Blog', href: `${BLOG_PATH}` },
  { name: 'Project', href: '#' },
]

const Home = () => {
  return <HeaderSection
    supportLinks={supportLinks}
    backgroundImg={back}
    title="Michele Scarpa"
    subtitle='Fullstack developer, orientato al frontend'
    themeColor='jm'
  />
}
export function App() {
  return (
    <div className="w-full h-full">
      <Header navigationList={navigationList} />
      <main className="w-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`${RESUME_PATH}`} element={<ResumePage />} />
            <Route path={`${BLOG_PATH}`} element={<ContentSamplePage />} />
          </Routes>
        </Router>
      </main>

    </div>
  );
}

export default App;
