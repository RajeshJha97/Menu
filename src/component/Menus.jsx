import { useState } from 'react';
import Menu from './Menu';
const Menus = ({ datas }) => {
  const [menus, setMenus] = useState(datas);
  console.log(datas);
  return (
    <main className='menu-container'>
      {/* Title container */}
      <section className='title-container'>
        <h1 className='text-5xl mb-[10px]'>Our Menu</h1>
        <div></div>
      </section>
      {/* button container */}
      <section className='btn-container'>
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Shakes</button>
      </section>
      {/* Menu section */}
      <section className='data-layout'>
        {menus.map((data) => {
          return (
            <section className='data-container'>
              <Menu {...data} key={data.id} />
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Menus;
