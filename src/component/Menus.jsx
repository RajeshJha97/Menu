import { useState } from "react";
import Menu from "./Menu";
const Menus = ({ datas }) => {
  const [menus, setMenus] = useState(datas);

  const handleBreakfast = () => {
    const newMenu = datas.filter((data) => {
      return data.category === "breakfast";
    });
    setMenus(newMenu);
  };
  const handleLunch = () => {
    const newMenu = datas.filter((data) => {
      return data.category === "lunch";
    });
    setMenus(newMenu);
  };
  const handleShakes = () => {
    const newMenu = datas.filter((data) => {
      return data.category === "shakes";
    });
    setMenus(newMenu);
  };
  const handleAll = () => {
    setMenus(datas);
  };

  console.log(datas);
  return (
    <main className="menu-container">
      {/* Title container */}
      <section className="title-container">
        <h1 className="text-5xl mb-[10px]">Our Menu</h1>
        <div></div>
      </section>
      {/* button container */}
      <section className="btn-container">
        <button onClick={handleAll}>All</button>
        <button onClick={handleBreakfast}>Breakfast</button>
        <button onClick={handleLunch}>Lunch</button>
        <button onClick={handleShakes}>Shakes</button>
      </section>
      {/* Menu section */}
      <section className="data-layout">
        {menus.map((data) => {
          return (
            <section className="data-container">
              <Menu {...data} key={data.id} />
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Menus;
