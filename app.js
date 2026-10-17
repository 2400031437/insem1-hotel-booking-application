const hotels = [
  {id:1,name:"The Fern House",location:"COORG, KARNATAKA",category:"Nature",rating:"4.9",price:4200,tag:"GUEST FAVORITE",desc:"A quiet hillside retreat surrounded by coffee gardens.",amenities:["☘ Garden view","⌁ Free Wi-Fi","♨ Breakfast"],scene:"forest"},
  {id:2,name:"Azure Coast Resort",location:"GOA, INDIA",category:"Beach",rating:"4.8",price:6800,tag:"BEACHFRONT",desc:"Slow mornings, ocean views, and sandy beaches nearby.",amenities:["♧ Pool","☼ Beach access","♨ Breakfast"],scene:"beach"},
  {id:3,name:"The Urban Nest",location:"BENGALURU, KARNATAKA",category:"City",rating:"4.7",price:3500,tag:"CITY PICK",desc:"A design-led stay close to the city's best cafes.",amenities:["⌂ City center","⌁ Free Wi-Fi","☕ Cafe"],scene:"city"},
  {id:4,name:"Misty Mountain Lodge",location:"MUNNAR, KERALA",category:"Nature",rating:"4.9",price:5100,tag:"SCENIC ESCAPE",desc:"Wake up to misty peaks and trails through green hills.",amenities:["♧ Mountain view","♨ Restaurant","☘ Garden"],scene:"mountain"},
  {id:5,name:"Palm & Tide Hotel",location:"PONDICHERRY, INDIA",category:"Beach",rating:"4.6",price:3900,tag:"RELAXED LIVING",desc:"A bright boutique stay with coastal charm and calm corners.",amenities:["☼ Near beach","⌁ Free Wi-Fi","♧ Courtyard"],scene:"palm"},
  {id:6,name:"The Heritage Court",location:"JAIPUR, RAJASTHAN",category:"City",rating:"4.8",price:5700,tag:"HERITAGE STAY",desc:"Thoughtful hospitality in a warm, heritage-inspired setting.",amenities:["♜ Heritage","♨ Breakfast","⌂ Central"],scene:"heritage"}
];
const palettes = {
 forest:["#d8e7d0","#83a98b","#315e4d","#e7d3ad"],
 beach:["#cce9ed","#71b9c7","#e9cda2","#f7f0db"],
 city:["#d8e2dc","#8fa69b","#31584a","#e5c7a0"],
 mountain:["#d7e5e8","#9ab7b2","#476d62","#e7d5b5"],
 palm:["#d6e9dc","#76a88d","#2e6853","#e5c59b"],
 heritage:["#f0ddc0","#c39b70","#8b4d37","#e8cda3"]
};
function sceneSvg(scene){
  const p=palettes[scene]||palettes.forest;
  let extra="";
  if(scene==="beach") extra=`<path d="M0 130 Q90 112 180 132 T360 125 V230 H0Z" fill="${p[1]}"/><path d="M0 165 Q90 148 180 166 T360 158 V230 H0Z" fill="#e8d2a7"/><circle cx="280" cy="45" r="24" fill="#f7e5ae"/><path d="M30 230 Q70 150 105 230" fill="#4f8767"/>`;
  else if(scene==="city") extra=`<rect x="20" y="70" width="55" height="120" fill="#b6c6b9"/><rect x="88" y="35" width="68" height="155" fill="#668c7b"/><rect x="170" y="85" width="55" height="105" fill="#b7c9bc"/><rect x="242" y="55" width="75" height="135" fill="#537968"/><g fill="#e9d8b4"><path d="M32 85h10v15H32zM52 85h10v15H52zM100 55h12v16h-12zM128 55h12v16h-12zM100 85h12v16h-12zM128 85h12v16h-12zM255 75h12v17h-12zM283 75h12v17h-12z"/></g>`;
  else if(scene==="mountain") extra=`<path d="M0 150 L75 45 L150 150 L220 62 L360 180 V230 H0Z" fill="#91b6a9"/><path d="M45 88 L75 45 L106 88 L82 78 L74 85 L66 76Z" fill="#f4f1df"/><path d="M165 230 Q200 135 245 230" fill="#557c66"/><path d="M240 230 Q280 125 330 230" fill="#3e6a55"/>`;
  else if(scene==="palm") extra=`<circle cx="285" cy="42" r="22" fill="#f8e4a5"/><path d="M0 160 Q100 145 180 165 T360 155 V230 H0Z" fill="#b7d8c2"/><path d="M275 210 Q280 120 245 55" stroke="#8b6744" stroke-width="9" fill="none"/><path d="M246 56 Q190 35 177 54 Q215 66 246 56 Q218 20 199 26 Q220 49 246 56 Q250 10 272 18 Q264 43 246 56 Q293 20 309 42 Q276 48 246 56" fill="#387557"/>`;
  else if(scene==="heritage") extra=`<rect x="38" y="75" width="284" height="155" fill="#d7b58c"/><path d="M25 82 L180 25 L335 82Z" fill="#9e6548"/><rect x="65" y="110" width="42" height="50" rx="20" fill="#8b4d37"/><rect x="130" y="110" width="42" height="50" rx="20" fill="#8b4d37"/><rect x="195" y="110" width="42" height="50" rx="20" fill="#8b4d37"/><rect x="260" y="110" width="42" height="50" rx="20" fill="#8b4d37"/><rect x="155" y="165" width="50" height="65" fill="#8b4d37"/>`;
  else extra=`<path d="M0 165 Q80 110 150 165 T360 145 V230 H0Z" fill="#9bbd9b"/><path d="M0 190 Q90 150 180 190 T360 175 V230 H0Z" fill="#5b8c68"/><rect x="118" y="85" width="125" height="105" fill="#e5d3b3"/><path d="M105 90 L180 40 L256 90Z" fill="#4d7559"/><rect x="145" y="120" width="25" height="30" fill="#719d8a"/><rect x="190" y="120" width="25" height="30" fill="#719d8a"/>`;
  return `<svg viewBox="0 0 360 230" role="img" aria-label="${scene} hotel illustration" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="230" fill="${p[0]}"/><path d="M0 125 Q80 95 160 125 T360 112 V230 H0Z" fill="${p[1]}" opacity=".5"/>${extra}<path d="M0 215 Q100 200 180 216 T360 210 V230 H0Z" fill="${p[2]}" opacity=".35"/></svg>`;
}
const grid=document.getElementById("hotelGrid"), note=document.getElementById("resultsNote"), dialog=document.getElementById("bookingDialog");
let activeFilter="All", searchTerm="", selectedHotel=null, pendingSearch=null;
const rupees=n=>"₹"+n.toLocaleString("en-IN");
function renderHotels(){
 const list=hotels.filter(h=>(activeFilter==="All"||h.category===activeFilter)&&(`${h.name} ${h.location} ${h.category}`).toLowerCase().includes(searchTerm.toLowerCase()));
 note.textContent=`Showing ${list.length} ${list.length===1?"stay":"handpicked stays"}`;
 grid.innerHTML=list.length?list.map(h=>`<article class="hotel-card"><div class="hotel-image">${sceneSvg(h.scene)}<span class="tag">${h.tag}</span></div><div class="card-body"><div class="card-location">${h.location}</div><div class="card-title-row"><h3>${h.name}</h3><span class="rating">★ ${h.rating}</span></div><p class="card-desc">${h.desc}</p><div class="amenities">${h.amenities.map(a=>`<span>${a}</span>`).join("")}</div><div class="card-footer"><div class="price"><strong>${rupees(h.price)}</strong> <small>/ night</small></div><button class="book-btn" data-book="${h.id}">View & book →</button></div></div></article>`).join(""):`<div class="empty-state">No stays match that search. Try another destination or filter.</div>`;
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activeFilter=btn.dataset.filter;renderHotels()}));
document.getElementById("searchForm").addEventListener("submit",e=>{
 e.preventDefault(); const start=document.getElementById("checkin").value,end=document.getElementById("checkout").value;
 if(start&&end&&end<=start){showToast("Check-out must be after check-in.");return}
 searchTerm=document.getElementById("destination").value.trim();pendingSearch={start,end,guests:document.getElementById("guests").value};
 activeFilter="All";document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="All"));renderHotels();document.getElementById("hotels").scrollIntoView({behavior:"smooth"});
});
function nightsBetween(a,b){if(!a||!b)return 1;return Math.max(1,Math.round((new Date(b)-new Date(a))/86400000))}
function openBooking(h){
 selectedHotel=h;
 const start=pendingSearch?.start||document.getElementById("checkin").value;
 const end=pendingSearch?.end||document.getElementById("checkout").value;
 const guests=pendingSearch?.guests||document.getElementById("guests").value;
 const today=new Date().toISOString().slice(0,10);
 document.getElementById("dialogTitle").textContent="Complete your booking";
 document.getElementById("dialogContent").innerHTML=`<form class="dialog-form" id="bookingForm"><div class="booking-summary"><div class="summary-art">${sceneSvg(h.scene)}</div><div><h3>${h.name}</h3><p>${h.location} · ★ ${h.rating}</p><p>${rupees(h.price)} per night</p></div></div><label>Full name<input name="name" placeholder="Enter your name" required maxlength="80"/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><label>Check-in<input name="start" type="date" min="${today}" value="${start||today}" required/></label><label>Check-out<input name="end" type="date" min="${today}" value="${end||""}" required/></label></div><label>Guests<select name="guests">${["1 guest","2 guests","3 guests","4 guests","5+ guests"].map(g=>`<option ${g===guests?"selected":""}>${g}</option>`).join("")}</select></label><div class="booking-total"><span id="totalLabel">Estimated total · 1 night</span><strong id="totalPrice">${rupees(h.price)}</strong></div><button class="primary-btn" type="submit">Confirm demo booking →</button><p style="font-size:10px;color:#839087;line-height:1.6">Demo only: no payment is collected and no real hotel reservation is made.</p></form>`;
 const form=document.getElementById("bookingForm"), updateTotal=()=>{const n=nightsBetween(form.start.value,form.end.value);document.getElementById("totalLabel").textContent=`Estimated total · ${n} night${n===1?"":"s"}`;document.getElementById("totalPrice").textContent=rupees(n*h.price)};
 form.start.addEventListener("change",()=>{form.end.min=form.start.value;updateTotal()});form.end.addEventListener("change",updateTotal);updateTotal();
 form.addEventListener("submit",e=>{e.preventDefault();if(form.end.value<=form.start.value){showToast("Check-out must be after check-in.");return}const data=Object.fromEntries(new FormData(form).entries());const booking={id:Date.now(),hotelId:h.id,hotel:h.name,location:h.location,name:data.name,email:data.email,start:data.start,end:data.end,guests:data.guests,total:nightsBetween(data.start,data.end)*h.price,status:"Confirmed"};const all=getBookings();all.push(booking);saveBookings(all);document.getElementById("dialogTitle").textContent="You're all set!";document.getElementById("dialogContent").innerHTML=`<div class="confirmation"><div class="checkmark">✓</div><h3>Booking saved</h3><p>Your demo booking for <strong>${h.name}</strong> is confirmed in this browser.<br/>Reference: <strong>SE-${String(booking.id).slice(-7)}</strong><br/>${booking.start} → ${booking.end}<br/>Estimated total: <strong>${rupees(booking.total)}</strong></p><button class="primary-btn" id="doneBtn">Done</button></div>`;document.getElementById("doneBtn").addEventListener("click",()=>dialog.close());updateBookingCount();});
 dialog.showModal();
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-book]");if(b)openBooking(hotels.find(h=>h.id===Number(b.dataset.book)))});
function getBookings(){try{return JSON.parse(localStorage.getItem("stayease-bookings")||"[]")}catch{return []}}
function saveBookings(b){localStorage.setItem("stayease-bookings",JSON.stringify(b))}
function updateBookingCount(){document.getElementById("bookingCount").textContent=getBookings().length}
document.getElementById("myBookingsBtn").addEventListener("click",showBookings);
function showBookings(){
 document.getElementById("dialogTitle").textContent="My bookings";const bookings=getBookings();
 document.getElementById("dialogContent").innerHTML=bookings.length?`<div class="booking-list">${bookings.slice().reverse().map(b=>`<article class="booking-item"><h3>${b.hotel} <span style="float:right">${rupees(b.total)}</span></h3><p>${b.start} → ${b.end} · ${b.guests}</p><p>${b.name} · ${b.status}</p><button class="cancel-btn" data-cancel="${b.id}">Remove demo booking</button></article>`).join("")}</div>`:`<div class="no-bookings">You haven't saved any bookings yet.<br/>Choose a stay to get started.</div>`;
 document.getElementById("dialogContent").querySelectorAll("[data-cancel]").forEach(btn=>btn.addEventListener("click",()=>{saveBookings(getBookings().filter(b=>b.id!==Number(btn.dataset.cancel)));updateBookingCount();showBookings();showToast("Demo booking removed.")}));
 dialog.showModal();
}
document.getElementById("closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
let toastTimer;function showToast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2600)}
const today=new Date(), tomorrow=new Date(today);tomorrow.setDate(today.getDate()+1);const later=new Date(today);later.setDate(today.getDate()+3);
const dateVal=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
document.getElementById("checkin").min=dateVal(today);document.getElementById("checkin").value=dateVal(tomorrow);document.getElementById("checkout").min=dateVal(tomorrow);document.getElementById("checkout").value=dateVal(later);
renderHotels();updateBookingCount();
