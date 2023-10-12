import React from "react";

import { ReactComponent as Logo } from "./icons/logo.svg";
import { ReactComponent as Favorite } from "./icons/favorite.svg";
import { ReactComponent as Cart } from "./icons/cart.svg";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as User } from "./icons/user.svg";

const icons = {
    logo: Logo,
    favorite: Favorite,
    cart: Cart,
    search: Search,
    user: User,
};

export type IconType = keyof typeof icons;


export interface ITIconProps extends React.SVGProps<SVGSVGElement> {
    type: IconType;
}

const Icon: React.FC<ITIconProps> = ({ type, ...props }) => {

    const Element = icons[type];
    return <Element {...props} />;
};

export default Icon;
