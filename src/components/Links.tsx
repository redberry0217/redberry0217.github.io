import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { SiTistory } from "react-icons/si";

const Links = () => {
  const linkItems = [
    {
      icon: <MdOutlineEmail className="w-full h-full" />,
      href: "redberry0217@gmail.com",
      type: "paste",
      tooltip: "Email",
    },
    {
      icon: <MdOutlinePhoneIphone className="w-full h-full" />,
      href: "010-7511-6128",
      type: "paste",
      tooltip: "Phone",
    },
    {
      icon: <FiGithub className="w-full h-full" />,
      href: "https://github.com/redberry0217",
      type: "outlink",
      tooltip: "Github",
    },
    {
      icon: <SiTistory className="w-full h-full" />,
      href: "https://voyager999.tistory.com/",
      type: "outlink",
      tooltip: "Blog",
    },
  ];
  const LINK_STYLE =
    "w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors relative group";

  const handleClickPasteItem = (href: string) => {
    navigator.clipboard.writeText(href);
    alert("Copied to clipboard");
  };

  return (
    <section className="flex gap-[5px] justify-center py-[30px] text-md">
      {linkItems.map((item) => (
        <div className={LINK_STYLE} key={item.href}>
          {item.type === "paste" ? (
            <div onClick={() => handleClickPasteItem(item.href)}>
              {item.icon}
            </div>
          ) : (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          )}
          <div className="select-none absolute -bottom-8 left-1/2 -translate-x-1/2 bg-light text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.tooltip}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Links;
