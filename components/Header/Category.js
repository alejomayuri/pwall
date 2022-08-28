import { fonts } from "styles/themes";
import { themeColors } from "styles/themes";

export default function Category({ children }) {
  const i = Math.floor(Math.random() * themeColors.length);

  return (
    <>
      <li>
        <a>{children}</a>
      </li>

      <style jsx>{`
        li {
          border-bottom: solid 4px ${themeColors[i]};
          cursor: pointer;
          font-family: ${fonts.header};
          font-weight: 800;
          margin: 5px;
          list-style: none;
          padding: 5px 10px;
          transition: all 0.5s ease;
        }

        li:hover {
          background-color: ${`${themeColors[i]}c7`};
        }
      `}</style>
    </>
  );
}
