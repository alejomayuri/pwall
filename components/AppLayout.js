import { fonts } from "styles/themes";
import Image from "next/image";
import HeadeMenu from "components/Header/HeaderMenu";
import HeaderButton from "components/Header/HeaderButton";
import SearchBar from "./Header/SearchBar";

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
          <SearchBar />
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
          padding-bottom: 20px;
        }

        .logo {
          height: 75px;
          width: 140px;
        }

        .logo img {
          width: 100%;
        }
      `}</style>
    </>
  );
}
