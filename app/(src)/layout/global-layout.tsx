import { Typography } from "@mantine/core";
import Link from "next/link";

const navItems = [
  { name: "Articles", href: "/articles" },
  { name: "About", href: "/about" },
];

export const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <nav className="w-full flex justify-end p-8 dark:bg-black">
        <ul className="flex flex-row items-end">
          {navItems.map((item) => (
            <li key={item.name} className="px-4">
              <Link href={item.href || "#"}>
                <Typography c="white" variant="xl">
                  {item.name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </>
  );
};
