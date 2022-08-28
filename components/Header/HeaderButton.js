import { fonts } from "styles/themes";
import { themeColors } from "styles/themes";

export default function HeaderButton({ children, filled }) {
  const i = Math.floor(Math.random() * themeColors.length);
  return (
    <>
      <div>
        <button>{children}</button>
      </div>

      <style jsx>{`
        div {
          align-items: center;
          display: flex;
        }

        button {
          background-color: ${filled ? themeColors[i] : "transparent"};
          border: ${filled ? "none" : `solid 3px ${themeColors[i]}`};
          border-radius: 5px;
          cursor: pointer;
          font-family: ${fonts.header};
          font-size: 17px;
          font-weight: 800;
          height: 40px;
          width: 120px;
        }
      `}</style>
    </>
  );
}
