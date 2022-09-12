import Search from "components/Icons/Search";
import { useRandomColor } from "hooks/useRandomColor";

export default function SearchBar() {
  const { color } = useRandomColor();
  return (
    <>
      <div>
        <form>
          <input type="text" />
          <button>
            <Search fill="#fff" />
          </button>
        </form>
      </div>

      <style jsx>{`
        form {
          display: flex;
        }
        input {
          height: 50px;
          width: 990px;
          background-color: #fff;
          border: none;
          color: #000;
          outline: 0;
          padding: 10px;
          font-size: 18px;
        }

        button {
          height: 50px;
          width: 50px;
          border: solid 1px ${color};
          background-color: ${color};
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
