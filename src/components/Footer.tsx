import { useEffect, useState } from "react";

type Props = {
  footerAPI: any;
};

const Footer = ({ footerAPI }: Props) => {
  const [year, setYear] = useState<any | null>();
  const { titles, links } = footerAPI;
  // console.log(footerAPI);
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
          {titles.map((val: any, i: number) => (
            <div key={i} className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {links.map((list: any, i: number) => (
            <ul key={i} className="grid items-center gap-1">
              {list.map((link: any, i: number) => (
                <li key={i} className="text-sm sm:text-xs">
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm md:text-center">
            Copyright<sup className="text-base font-bold">&copy;</sup> All
            Reserved Rights <span className="font-semibold">{year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
