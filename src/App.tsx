import routes from "./routes";
import './App.css'
import './style/flex.css'
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import WebHeader from "./component/Header";
import CarouselMoudel from "./component/CarouselMoudel";
import Fotter from "./component/Fotter";
function App() {
  const Route = useRoutes(routes) 
  return (
    <div className="main-app">
      {/*这里引入由于懒加载后可能会出现对应的路由未返回时的白屏效果*/}
      <WebHeader />
        <Suspense>
          {Route}
        </Suspense>
      <Fotter/>
    </div>
  );
}

export default App;
