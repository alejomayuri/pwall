import { fonts } from "styles/themes";
import { useRandomColor } from "hooks/useRandomColor";

export default function Category({ children }) {
  const { color } = useRandomColor();

  return (
    <>
      <li>
        <a>{children}</a>
      </li>

      <style jsx>{`
        li {
          border-bottom: solid 4px ${color};
          cursor: pointer;
          font-family: ${fonts.header};
          font-weight: 800;
          margin: 5px;
          list-style: none;
          padding: 5px 10px;
          transition: all 0.5s ease;
        }

        li:hover {
          background-color: ${`${color}c7`};
        }
      `}</style>
    </>
  );
}
