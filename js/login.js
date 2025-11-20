
function login(){
  const u=document.getElementById("user").value;
  const p=document.getElementById("pass").value;
  if(u==="admin" && p==="1234"){
    localStorage.setItem("admin","1");
    window.location="admin.html";
  } else {
    document.getElementById("msg").innerText="Credenciales incorrectas";
  }
}
function logout(){ localStorage.removeItem("admin"); }
