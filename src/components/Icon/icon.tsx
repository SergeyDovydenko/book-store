import React from "react";

import { ReactComponent as ArrowLeft } from "./icons/arrowLeft.svg";
import { ReactComponent as Cart } from "./icons/cart.svg";
import { ReactComponent as Favorite } from "./icons/favorite.svg";
import { ReactComponent as Logo } from "./icons/logo.svg";
import { ReactComponent as Moon } from "./icons/moon.svg";
import { ReactComponent as Rating } from "./icons/rating.svg";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Sun } from "./icons/sun.svg";
import { ReactComponent as User } from "./icons/user.svg";
const icons = {
  logo: Logo,
  favorite: Favorite,
  cart: Cart,
  search: Search,
  user: User,
  sun: Sun,
  moon: Moon,
  rating: Rating,
  arrowLeft: ArrowLeft,
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
