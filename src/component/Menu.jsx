const Menu = ({ id, title, category, desc, price, img }) => {
  // console.log(props);
  return (
    <section className='card'>
      {/* img-container */}
      <section className='img-container'>
        <img src={img} alt='title' className='h-60 w-[26rem]' />
      </section>
      {/* menu tilte */}
      <section className='price-container'>
        <h1 className='text-lg font-mono '>{title}</h1>
        <h2 className='bg-[#F59E0B] pl-1 pr-1 rounded-md'>{`$${price}`}</h2>
      </section>
      {/* Description */}
      <section className='description'>
        <p>{desc}</p>
      </section>
    </section>
  );
};

export default Menu;
