import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Incio from "./pages/Incio";
import Movimentacoes from "./pages/Movimentacoes";
import Caixinhas from "./pages/Caixinhas";
import DetalhesCaixinha from "./pages/DetalhesCaixinha";
import Categorias from "./pages/Categorias";
import ContasConectadas from "./pages/ContasConectadas";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Incio />} />
      <Route path="/02-incio" element={<Incio />} />
      <Route path="/movimentacoes" element={<Movimentacoes />} />
      <Route path="/03-movimentacoes" element={<Movimentacoes />} />
      <Route path="/caixinhas" element={<Caixinhas />} />
      <Route path="/04-caixinhas" element={<Caixinhas />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/06-categorias" element={<Categorias />} />
      <Route path="/contas-conectadas" element={<ContasConectadas />} />
      <Route path="/07-conectar-conta" element={<ContasConectadas />} />
      <Route path="/detalhes-caixinha" element={<DetalhesCaixinha />} />
      <Route path="/05-detalhes-da-caixinha" element={<DetalhesCaixinha />} />
    </Routes>
  );
}
export default App;
