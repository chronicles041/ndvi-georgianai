import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";

type Props = {
  label?: string;
  isCollapse: boolean;
  path: string;
  name: string;
  icon: string;
};

const NavItem = ({ isCollapse, name, path, icon }: Props) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <li
      data-toggle="tooltip"
      title={name}
      className={`${
        path === currentRoute
          ? "bg-gray-300 rounded-l-xl w-full shadow-sm"
          : "hover:bg-gray-200 hover:rounded-l-xl w-full transition duration-400 ease-in-out"
      }`}
    >
      {/* Removed the <a> tag, no longer necessary with <Link> */}
      <Link href={path}>
        <div className="sidebar-a-herf"> {/* Use div instead of <a> */}
          <ToIcon
            type={icon}
            size={!isCollapse ? IconSize.NAVICON : IconSize.LARGENAVICON}
            style={IconStyles.Selected}
          />
          <span
            hidden={isCollapse}
            className={`${
              path === currentRoute ? "font-semibold" : "font-medium"
            } ml-4 text-xl text-secondary px-2`}
          >
            {name}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
