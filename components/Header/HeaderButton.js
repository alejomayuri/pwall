import { fonts } from "styles/themes";
import { useRandomColor } from "hooks/useRandomColor";

export default function HeaderButton({ children, filled }) {
  const { color } = useRandomColor();

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
          background-color: ${filled ? color : "transparent"};
          border: ${filled ? "none" : `solid 3px ${color}`};
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
