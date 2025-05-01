// nav fixed
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const fixnav = header.offsetTop;
    const akrom = header.querySelector('.akrom-name');
    const togel = header.querySelectorAll('#btn span');
    const nav = document.querySelectorAll('.nav a');

    const divWA = document.querySelector('.divWA');

    if(window.pageYOffset > fixnav) {
        header.classList.add('header-fix');
        akrom.classList.replace('text-lime-400', 'text-black');
        togel.forEach(t => {
            t.classList.replace('bg-tulisan-terang', 'bg-black');
        });
        nav.forEach(n => {
           n.classList.add('nav-fix'); 
        });
        divWA.classList.add('div-link-muncul');
    } else {
        header.classList.remove('header-fix');
        akrom.classList.replace('text-black', 'text-lime-400');
        togel.forEach(t => {
            t.classList.replace('bg-black', 'bg-tulisan-terang');
        });
        nav.forEach(n => {
            n.classList.remove('nav-fix'); 
         });
         divWA.classList.remove('div-link-muncul');
    }
});


// muncul nav
const btn = document.querySelector('#btn');

const navbar = document.querySelector('.nav');
const span = btn.querySelectorAll('span');
btn.addEventListener('click', () => {
    span[0].classList.toggle('burger-line-atas');
    span[1].classList.toggle('burger-line-tengah');
    span[2].classList.toggle('burger-line-bawah');

    navbar.classList.toggle('nav-buka');
});


document.body.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target != navbar && e.target != btn && e.target != span[0] && e.target != span[1] && e.target != span[2] && e.target != navbar.querySelectorAll('a')[0] && e.target != navbar.querySelectorAll('a')[1] && e.target != navbar.querySelectorAll('a')[2] && e.target != navbar.querySelectorAll('a')[3] && e.target != navbar.querySelectorAll('a')[4]) {
        span[0].classList.remove('burger-line-atas');
        span[1].classList.remove('burger-line-tengah');
        span[2].classList.remove('burger-line-bawah');

        navbar.classList.remove('nav-buka');
    }
});



// document.body.addEventListener('click', (e) => {
//     const navbar = document.querySelector('.nav');
//     if(navbar.className('nav-buka')) {
//         if(!navbar.contains(e.target)) {
//             navbar.classList.remove('nav-buka');
//             console.log(navbar.className);
//         }
//     }
// });
// hilang nav




// selengkapnya
const btnSelengkapnya = document.querySelectorAll('.btn-selengkapnya');
btnSelengkapnya.forEach((btnSel) => {
   const par = btnSel.previousElementSibling;
   
   btnSel.addEventListener('click', (e) => {
        e.preventDefault();
        par.classList.toggle('line-clamp-2');

        if (!par.classList.contains('line-clamp-2')) {
            btnSel.textContent = 'Sembunyikan';
        } else {
            btnSel.textContent = 'Selengkapnya';
        }
   });
});



// operlay gambar
const divProjectt = document.querySelectorAll('.div-project');
divProjectt.forEach(dp => {
    const operlayGambar = dp.querySelector('.kalimat-operlay-gambar');
    const jud = dp.querySelector('.jud');
    
    operlayGambar.textContent = `~ ${jud.textContent} ~`;
});



// lihat foto besar
const btnfoto = document.querySelectorAll('#btn-foto');
btnfoto.forEach(bf => {
    bf.addEventListener('click', () => {
        
        const cardOfBtn = bf.parentElement.parentElement;        
        const img = cardOfBtn.querySelector('img');        
        const imgSrc = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt');


        const wadahFotoBesar = document.querySelector('.wadah-foto-besar');
        const imgBesar = wadahFotoBesar.querySelector('img');
        const closeImgBesar = wadahFotoBesar.querySelector('#btn-close-fotbes');

        imgBesar.setAttribute('src', imgSrc);
        imgBesar.setAttribute('alt', imgAlt);

        wadahFotoBesar.classList.remove('foto-besar-none');
        imgBesar.classList.add('foto-besar-muncul');
        closeImgBesar.classList.add('close-foto-muncul');

        document.body.classList.add('operplow');
    });
});


const closeImgBesar = document.querySelector('#btn-close-fotbes');
closeImgBesar.addEventListener('click', () => {              

    const wadahFotoBesar = document.querySelector('.wadah-foto-besar');
    const imgBesar = wadahFotoBesar.querySelector('img');
    const closeImgBesar = wadahFotoBesar.querySelector('#btn-close-fotbes');

    imgBesar.setAttribute('src', '');
    imgBesar.setAttribute('alt', '');

    imgBesar.classList.remove('foto-besar-muncul');
    closeImgBesar.classList.remove('close-foto-muncul');
    wadahFotoBesar.classList.add('foto-besar-none');
});




// //////////////////////////////
// team
const teamLink = document.querySelectorAll('.teamflex a');
teamLink.forEach(tl => {
    tl.addEventListener('click', (e) => {
        if(tl.getAttribute('href') == '') {
            e.preventDefault();
        }
    });
});




// /////////////////////////////
// contact
const inputNama = document.querySelector('input#nama');
const inputEmail = document.querySelector('input#email');
const pesan = document.querySelector('textarea#pesan');
const btnKirim = document.querySelector('#btn-kirim');
btnKirim.addEventListener('click', () => {
    if(inputNama.value || inputEmail.value || pesan.value) {
        setTimeout(() => {
            inputNama.value = '';
            inputEmail.value = '';
            pesan.value = '';
            alert('Server sedang bermasalah !\nSilahkan hubungi lewat whatsap');
        }, 500)
    }
});



// ------------------- mobile -------------------- //

// ///////////////////////////////////
// link wa 
const divWA = document.querySelector('.divWA');
const linkWA = divWA.querySelector('a');
linkWA.addEventListener('touchstart', () => {
    linkWA.classList.add('link-wa-hover');
});
linkWA.addEventListener('touchend', () => {
    linkWA.classList.remove('link-wa-hover');
});





// ///////////////////////////
// hero
const divFoto = document.querySelector('.div-foto');
const bgFoto = divFoto.querySelector('.bg-foto');
divFoto.addEventListener('touchstart', () => {
   bgFoto.classList.add('bg-foto-keluar');
});


const fotoHome = document.querySelector('.foto-home');
document.body.addEventListener('touchstart', (e) => {
//    console.log(e.target);
   if (bgFoto.classList.contains('bg-foto-keluar')) {
        if (!fotoHome.contains(e.target)) {
            bgFoto.classList.remove('bg-foto-keluar');
        }
   }
});



const btnHubungi = document.querySelector('.btn-hubungi-saya');
btnHubungi.addEventListener('touchstart', () => {
    btnHubungi.classList.add('btn-hubungi-saya-aktif');
});
btnHubungi.addEventListener('touchend', () => {
    btnHubungi.classList.remove('btn-hubungi-saya-aktif');
});




// /////////////////////////////
// about

const sosmed = document.querySelector('.sosmed');
const link = sosmed.querySelectorAll('a');
link.forEach(s => {
    s.addEventListener('touchstart', () => {
        s.classList.add('link-kuning');
    });
    s.addEventListener('touchend', () => {
        s.classList.remove('link-kuning');
    });

});




// /////////////////////////////
// project


const divProject = document.querySelectorAll('.div-project');

let activeCard = null; // untuk menyimpan card yang sedang aktif

divProject.forEach((divP) => {
  const fotoProjectGelap = divP.querySelector('.foto-project-gelap');
  const fotoProjectJudul = divP.querySelector('.foto-project-judul');
  const bgProject = divP.querySelector('.bg-project');
  const jud = divP.querySelector('.jud');
  const par = divP.querySelector('.par');
  const btnSel = divP.querySelectorAll('.btn-selengkapnya');

  divP.addEventListener('touchstart', () => {
    // e.stopPropagation(); // biar event ini gak kena event di body juga

    // Reset semua card
    divProject.forEach((divReset) => {
      divReset.querySelector('.foto-project-gelap')?.classList.remove('foto-project-gelap-muncul');
      divReset.querySelector('.foto-project-judul')?.classList.remove('foto-project-judul-muncul');
      divReset.querySelector('.bg-project')?.classList.remove('bg-project-muncul');
      divReset.querySelector('.jud')?.classList.remove('jud-aktif');
      divReset.querySelector('.par')?.classList.remove('par-aktif');
      divReset.querySelectorAll('.btn-selengkapnya').forEach(bss => {
        bss?.classList.remove('btn-selengkapnya-aktif');
      });
    });

    // Tambahkan class ke card yang disentuh
    fotoProjectGelap.classList.add('foto-project-gelap-muncul');
    fotoProjectJudul.classList.add('foto-project-judul-muncul');
    bgProject.classList.add('bg-project-muncul');
    jud.classList.add('jud-aktif');
    par.classList.add('par-aktif');
    btnSel.forEach(bs => {
        bs.classList.add('btn-selengkapnya-aktif');
    });

    activeCard = divP; // set card aktif sekarang
  });
});

// Kalau user menyentuh selain card aktif → hapus semua class
document.body.addEventListener('touchstart', (e) => {
  if (activeCard && !activeCard.contains(e.target)) {
    activeCard.querySelector('.foto-project-gelap')?.classList.remove('foto-project-gelap-muncul');
    activeCard.querySelector('.foto-project-judul')?.classList.remove('foto-project-judul-muncul');
    activeCard.querySelector('.bg-project')?.classList.remove('bg-project-muncul');
    activeCard.querySelector('.jud')?.classList.remove('jud-aktif');
    activeCard.querySelector('.par')?.classList.remove('par-aktif');
    activeCard.querySelectorAll('.btn-selengkapnya').forEach(bss => {
        bss?.classList.remove('btn-selengkapnya-aktif');
      });
    
    activeCard = null; // reset aktif card
  }
});



// selengkapnya
btnSelengkapnya.forEach((bs) => {
    bs.addEventListener('touchstart', () => {
        bs.classList.add('selengkapnya-kena-jempol');
    });
    bs.addEventListener('touchend', () => {
        bs.classList.remove('selengkapnya-kena-jempol');
    });
});



// tombol lihat foto
btnfoto.forEach(bf => {
    bf.addEventListener('touchstart', () => {
        bf.classList.add('btn-foto-hover-tangan');
    });

    bf.addEventListener('touchend', () => {
        bf.classList.remove('btn-foto-hover-tangan');
    });
});





// /////////////////// 
// team


teamLink.forEach(tl => {
    tl.addEventListener('touchstart', () => {
        tl.classList.add('team-aktif');
    });
    tl.addEventListener('touchend', () => {
        tl.classList.remove('team-aktif');
    });
});




// //////////////////////
// contact
btnKirim.addEventListener('touchstart', () => {
    btnKirim.classList.add('btn-kirim-contact');
});
btnKirim.addEventListener('touchend', () => {
    btnKirim.classList.remove('btn-kirim-contact');
});




// //////////////////////
// footer 
const lihatAlamat = document.querySelector('#peta');
lihatAlamat.addEventListener('touchstart', () => {
    lihatAlamat.classList.add('lihat-alamat-aktif');
});
lihatAlamat.addEventListener('touchend', () => {
    lihatAlamat.classList.remove('lihat-alamat-aktif');
});


const linkNavBawah = document.querySelectorAll('.link-nav-bawah a');
linkNavBawah.forEach(lnb => {
    lnb.addEventListener('touchstart', () => {
        lnb.classList.add('link-nav-bawah-aktif');
    });
    lnb.addEventListener('touchend', () => {
        lnb.classList.remove('link-nav-bawah-aktif');
    });
});



const sosmedBawah = document.querySelectorAll('.sosmed-bawah a');
sosmedBawah.forEach(sb => {
    sb.addEventListener('touchstart', () => {
        sb.classList.add('sosmed-bawah-aktif');
    });
    sb.addEventListener('touchend', () => {
        sb.classList.remove('sosmed-bawah-aktif');
    });
});






// muncul aktif di card
// const divProject = document.querySelectorAll('.div-project');
// divProject.forEach((divP, i) => {
//     const fotoProjectGelap = divP.querySelector('.foto-project-gelap');
//     const fotoProjectJudul = divP.querySelector('.foto-project-judul');

//     const bgProject = divP.querySelector('.bg-project');
//     const jud = divP.querySelector('.jud');
//     const par = divP.querySelector('.par');
//     const btnSel = divP.querySelector('.btn-selengkapnya');


//     divP.addEventListener('touchstart', () => {
       
//         divP.classList.add('card-aktif');

//         fotoProjectGelap.classList.add('foto-project-gelap-muncul');
//         fotoProjectJudul.classList.add('foto-project-judul-muncul');

//         bgProject.classList.add('bg-project-muncul');
//         jud.classList.add('jud-aktif');
//         par.classList.add('par-aktif');
//         btnSel.classList.add('btn-selengkapnya-aktif');

//     });
// });



// const divProject = document.querySelectorAll('.div-project');

// divProject.forEach((divP) => {
//   const fotoProjectGelap = divP.querySelector('.foto-project-gelap');
//   const fotoProjectJudul = divP.querySelector('.foto-project-judul');
//   const bgProject = divP.querySelector('.bg-project');
//   const jud = divP.querySelector('.jud');
//   const par = divP.querySelector('.par');
//   const btnSel = divP.querySelector('.btn-selengkapnya');

//   divP.addEventListener('touchstart', () => {
//     // Langkah 1: Hapus semua class aktif dari semua card
//     divProject.forEach((divReset) => {
//       divReset.querySelector('.foto-project-gelap')?.classList.remove('foto-project-gelap-muncul');
//       divReset.querySelector('.foto-project-judul')?.classList.remove('foto-project-judul-muncul');
//       divReset.querySelector('.bg-project')?.classList.remove('bg-project-muncul');
//       divReset.querySelector('.jud')?.classList.remove('jud-aktif');
//       divReset.querySelector('.par')?.classList.remove('par-aktif');
//       divReset.querySelector('.btn-selengkapnya')?.classList.remove('btn-selengkapnya-aktif');
//     });

//     // Langkah 2: Tambahkan class hanya ke card yang disentuh
//     fotoProjectGelap.classList.add('foto-project-gelap-muncul');
//     fotoProjectJudul.classList.add('foto-project-judul-muncul');
//     bgProject.classList.add('bg-project-muncul');
//     jud.classList.add('jud-aktif');
//     par.classList.add('par-aktif');
//     btnSel.classList.add('btn-selengkapnya-aktif');
//   });
// });




