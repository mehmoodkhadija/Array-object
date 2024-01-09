import React, { useState } from 'react';

export default function Rowcard() {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: 'https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png',
      title: 'Zinger Stacker Combo',
      description: ' 1 Zinger Stacker + 1 Regular fries + 1 Regular drink',
    },
    {
      id: 2,
      image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png',
      title: 'Twister Combo',
      description: 'Twister combo + 1 Regular fries + 1 Regular drink.'
    },
    {
    id: 3,
    image: 'https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png',
    title: 'Crispy Duo Box',
    description: 'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks'
  },
  ]);

  return (
    <div className="container">
<div className="row row-cols-1 row-cols-md-3 g-4 ">
{cards.map((cards) => (
   <div key={cards.id} className='col'>
  

  <div className="card  bg-dark text-light">
    <img src={cards.image} className="card-img-top" alt={`card ${cards.id}`}/>
    <div className="card-body">
      <h5 className="card-title">{cards.title}</h5>
      <p className="card-text">{cards.description}</p>
     
    </div>
  </div>
  </div>
  ))}
</div>
</div>

  
  );
}
