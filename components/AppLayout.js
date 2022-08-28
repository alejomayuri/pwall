import { fonts } from "styles/themes";
import Image from "next/image";
import HeadeMenu from "components/Header/HeaderMenu";
import HeaderButton from "components/Header/HeaderButton";

export default function AppLayout({ children }) {
  return (
    <>
      <div className="container">
        <header>
          <div className="top__header">
            <div className="logo">
              <Image src="/P.png" alt="pwall" height={75} width={140} />
            </div>
            <HeadeMenu />

            <HeaderButton filled={true}>Publicar</HeaderButton>

            <HeaderButton filled={false}>Log in</HeaderButton>
          </div>
          <div className="search__bar">
            <form>
              <label placeholder="Buscar..." />
              <button>Buscar</button>
            </form>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          width: 1040px;
        }

        header {
          padding-top: 15px;
        }

        .top__header {
          display: flex;
          justify-content: space-between;
        }

        .logo {
          height: 75px;
          width: 140px;
        }

        .logo img {
          width: 100%;
        }

        .post__button,
        .login__button {
          align-items: center;
          display: flex;
        }

        .post__button button {
          background-color: #7f127f;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-family: ${fonts.header};
          font-size: 17px;
          font-weight: 800;
          height: 40px;
          width: 120px;
        }

        .login__button button {
          background-color: transparent;
          border: solid 3px #7f127f;
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
