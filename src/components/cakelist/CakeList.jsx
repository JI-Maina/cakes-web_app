import "./cakelist.scss";
import Cake from "../cake/Cake";
import Loading from "../loading/Loading";
import { useGlobalContext } from "../../context";

const CakeList = () => {
  const { cakes, loading } = useGlobalContext();
  // console.log(cakes);

  if (loading) {
    return <Loading />;
  }
  if (cakes.length < 1) {
    return <h2 className="section-title">no cakes match your query</h2>;
  }

  return (
    <div className="section">
      <h2 className="section-title">Cakes</h2>

      <div className="cocktails-center">
        {cakes.map((cake) => {
          return <Cake key={cake.id} {...cake} />;
        })}
      </div>
    </div>
  );
};

export default CakeList;
