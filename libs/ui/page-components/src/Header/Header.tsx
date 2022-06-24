import { HeaderNavigationItem } from "@jmick-site/model/page-component";
import { FC } from "react";

export interface HeaderProps {
    navigationList: HeaderNavigationItem[];
}
export const Header: FC<HeaderProps> = ({ navigationList }) => {

    return (
      <header className="bg-jm-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">

              <div className="hidden ml-10 space-x-8 lg:block">
                {navigationList.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigationList.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  