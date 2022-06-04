import { FC } from "react";
export interface HeaderProps {
    name: string
}
export const Header: FC<HeaderProps> = ({ name }) => {
    return <div className="">
        {name}
    </div>
}