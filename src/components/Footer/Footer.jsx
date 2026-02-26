import { Link } from "react-router-dom";
import { imgLogo, textLogo, footerIcons, navElements } from "../../assets/assets.js";

const Footer = ({ activeElem, setActiveElem }) => {
  return (
    <div className="bg-[var(--bg-card)] flex bedar-sm:items-center justify-between flex-col-reverse bedar-sm:flex-row gap-1 bedar-sm:gap-0 px-5 bedar-sc1:px-20 py-5 mt-10 transition-colors duration-300">
      <div>
        {imgLogo ? (
          <img src={imgLogo} />
        ) : (
          <a
            href={`#${navElements[0]}`}
            onClick={() => setActiveElem(navElements[0])}
            className="text-[var(--text-on-card)] select-none text-[24px] bedar-sm:text-2xl font-semibold"
          >
            {textLogo}
          </a>
        )}
      </div>
      <div className="flex gap-[10px]">
        {footerIcons.map(({ name, component: IconComponent, link }) => (
          <Link to={link} key={name} className="flex" title={name}>
            <IconComponent className="w-6 bedar-sm:w-9 h-6 bedar-sm:h-9 rounded-lg fill-zinc-400 hover:fill-[var(--accent)] transition-colors ease-linear social-icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
