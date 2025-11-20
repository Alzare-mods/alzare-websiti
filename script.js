// script.js - funciones básicas para ALZARE
document.addEventListener('DOMContentLoaded', function(){

  const products = [
    {id:1, name:'Poloche Signature', price:'RD$1,100', img:'img/product1.jpg', desc:'Algodón premium, estampado dorado.'},
    {id:2, name:'T-shirt Alzare', price:'RD$900', img:'img/product2.jpg', desc:'Corte clásico, tejido suave.'},
    {id:3, name:'Pantalón Urban', price:'RD$1,500', img:'img/product3.jpg', desc:'Confort y estilo.'},
    {id:4, name:'Bañador Wave', price:'RD$800', img:'img/product4.jpg', desc:'Secado rápido.'},
    {id:5, name:'Gorra Alzare', price:'RD$350', img:'img/product5.jpg', desc:'Ajustable, bordado dorado.'},
    {id:6, name:'Sudadera Luxe', price:'RD$2,200', img:'img/product6.jpg', desc:'Interior afelpado.'},
  ];

  function createCard(p){
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="price">${p.price}</div>
      <p style="color:rgba(255,255,255,0.7);margin:8px 0 12px">${p.desc}</p>
      <div class="buy">
        <a class="btn small primary" href="https://wa.me/18492568555?text=Hola+ALZAR%C3%89%2C+quiero+comprar+${encodeURIComponent(p.name)}" target="_blank" rel="noopener">Comprar</a>
        <a class="btn small outline" href="#" onclick="alert('Más info: '+${JSON.stringify(p.name)});return false;">Ver</a>
      </div>
    `;
    return div;
  }

  const featuredGrid = document.getElementById('featuredGrid');
  const productsGrid = document.getElementById('productsGrid');

  if(featuredGrid){
    // show first 3 as featured
    products.slice(0,3).forEach(p => featuredGrid.appendChild(createCard(p)));
  }
  if(productsGrid){
    products.forEach(p => productsGrid.appendChild(createCard(p)));
  }

  // mobile menu toggles
  const menuToggle = document.getElementById('menuToggle');
  const menuToggle2 = document.getElementById('menuToggle2');
  const mainNav = document.getElementById('mainNav');
  const mainNav2 = document.getElementById('mainNav');

  [menuToggle, menuToggle2].forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', function(){
      const nav = document.getElementById('mainNav');
      if(!nav) return;
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  });

});