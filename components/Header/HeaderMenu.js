import SeeMore from "components/Icons/SeeMore";
import Category from "./Category";

const CATEGORIES = [
  "Conciertos",
  "Ropa",
  "Mascotas",
  "Gamer",
  "Comida",
  "Nuevo",
];

export default function HeadeMenu() {
  return (
    <>
      <div className="category__list">
        <ul>
          {CATEGORIES.map((category) => {
            return <Category key={category}>{category}</Category>;
          })}
          <Category>
            <SeeMore width={16} fill="#fff" />
          </Category>
        </ul>
      </div>

      <style jsx>{`
        .category__list ul {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: space-between;
          margin: 0;
          padding: 0;
        }

        .category__list ul li {
          list-style: none;
        }
      `}</style>
    </>
  );
}
