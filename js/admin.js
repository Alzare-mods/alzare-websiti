
if(!localStorage.getItem("admin")) location="login.html";

function guardarProducto(){
  const reader=new FileReader();
  const file=document.getElementById("imagen").files[0];
  reader.onload=function(){
    const producto={
      nombre:document.getElementById("nombre").value,
      precio:document.getElementById("precio").value,
      descripcion:document.getElementById("descripcion").value,
      tallas:document.getElementById("tallas").value,
      colores:document.getElementById("colores").value,
      cantidad:document.getElementById("cantidad").value,
      categoria:document.getElementById("categoria").value,
      imagen:reader.result
    };
    let lista=JSON.parse(localStorage.getItem("productos")||"[]");
    lista.push(producto);
    localStorage.setItem("productos",JSON.stringify(lista));
    mostrar();
  };
  if(file) reader.readAsDataURL(file);
}

function mostrar(){
  let lista=JSON.parse(localStorage.getItem("productos")||"[]");
  let html="";
  lista.forEach(p=>{
    html+=`<div class='item'>
      <img src='${p.imagen}' width='120'>
      <p>${p.nombre} - ${p.precio}</p>
    </div>`;
  });
  document.getElementById("lista").innerHTML=html;
}
mostrar();

function logout(){
  localStorage.removeItem("admin");
  location="login.html";
}
