import "./App.css";
import Header from "./libs/organisms/Header/Header";
import MainContent from "./libs/organisms/MainContent/MainContent";
import FiltersSection from "./libs/organisms/FiltersSection/FiltersSection";
import { useCarStore } from "./store/store";
import clsx from "clsx";

function App() {
  const isMenuOpen = useCarStore((state: any) => state.isMenuOpen);
  return (
    <div className="">
      <div className="only-header">
        <Header></Header>
      </div>
      <div className="container py-4 d-flex col-12">
        {isMenuOpen ? (
          <div className="col-2 filter-section-container">
            <FiltersSection></FiltersSection>
          </div>
        ) : (
          <></>
        )}

        <div className={clsx(isMenuOpen ? "col-10" : "col-12", "px-lg-4")}>
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;
