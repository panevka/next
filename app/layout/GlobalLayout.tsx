import { Typography } from "@/components/ui/Typography";

const navItems = [{ name: "Posts" }, { name: "About" }];

export const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <nav className="w-full flex justify-end p-8 dark:bg-black">
        <ul className="flex flex-row items-end">
          {navItems.map((item) => (
            <li key={item.name} className="px-4">
              <Typography variant="large" as="p">
                {item.name}
              </Typography>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </>
  );
};
