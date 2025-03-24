
// Datos de las tarjetas
const cards = [
    { img: "images/Prueba2.png", title: "Video Llamada", desc: "Llamadas web de bajo consumo." },
    { img: "images/proyects/ImagenWeb01.webp", title: "E-Commerce", desc: "Tienda en línea con pagos." },
    { img: "images/software.jpg", title: "Dashboard", desc: "Análisis de datos en tiempo real." }
];

// Esperar a que el DOM cargue antes de modificarlo
document.addEventListener("DOMContentLoaded", () => {
    // Generar tarjetas dinámicamente
    document.getElementById("cards").innerHTML = cards.map(card => `
    <article class="card relative flex flex-col items-center justify-center rounded-lg w-80 h-[380px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        
        <figure class="flex rounded-sm relative h-1/2 w-full">
        <svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clipShape">
                    <path d="M20 0C5 0 0 5 0 20V145c0 12 3 15 20 15h135c7 0 10 3 10 10v10c0 18 2 20 20 20H300c15 0 20-5 20-20V20c0-15-5-20-20-20H20" />
                </clipPath>
            </defs>
            <image xlink:href="${card.img}" clip-path="url(#clipShape)" width="320" height="200" preserveAspectRatio="xMidYMid slice" />
        </svg>
        </figure>

        <div class="absolute items-center justify-start flex left-0 rounded-t-lg bg-slate-800 px-4 w-1/2 h-[45px] border-t-4 border-r-4 border-transparent">
            <h3 class="card-title flex font-sans font-bold text-white">${card.title}</h3>
        </div>

        <div class="flex w-[320px] h-[178px]  content-[' '] bg-slate-800 rounded-b-lg px-4 text-white  mt-2 rounded-tr-lg translate-y-2">
            <h1>${card.desc}</h1>
        </div>

        
    </article>

       
    `).join("");
});

// tailwind.config = {
//   content: [],
//   theme: {
//     extend: {
//       keyframes: {
//         'slide': {
//           '0%': { transform: 'translateY(0)' },
//           '100%': { transform: 'translateY(-100%)' },
//         },
//         'trans-right': {
//           '0%, 100%': { transform: 'translateX(10px)' },
//           '50%': { transform: 'translateX(0)' }
//         }
//       },
//       animation: {
//         'slide': 'slide 20s infinite linear',
//         'trans-right': 'trans-right 1.5s ease-in-out infinite'
//       },
//       colors: {
//         clifford: '#da373d',
//       }
//     },
//   },
//   plugins: [],
// }  
