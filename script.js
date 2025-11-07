// 🌟 ANIMASI SCROLL
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// 💬 KIRIM PESAN WHATSAPP
function sendWA(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;
  const WA_NUMBER = '6282249123097';
  const text = `Halo, saya ${name} (${email}). Pesan: ${msg || '-'}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  alert('Membuka WhatsApp...');
}

function pesanRumah(type, harga) {
  const WA_NUMBER = '6282249123097';
  const text = `Halo, saya tertarik dengan rumah ${type} seharga ${harga}. Apakah unit ini masih tersedia?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}


// === FILTER READY STOK ===
const filterButtons = document.querySelectorAll('.filter-btn');
const readyCards = document.querySelectorAll('.ready-item'); // pastikan class-nya 'ready-item' sesuai HTML

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hapus status aktif di semua tombol
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Tambahkan kelas aktif ke tombol yang diklik
    button.classList.add('active');

    const filter = button.getAttribute('data-filter'); // ambil nilai data-filter

    readyCards.forEach(card => {
      const status = card.getAttribute('data-status'); // ambil status dari tiap item (tersedia / terjual)

      if (filter === 'all') {
        card.style.display = 'flex';
      } else if (status === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});



// === Modal Brosur ===
const modal = document.getElementById("brosurModal");
const openBtn = document.getElementById("openBrosurBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => modal.classList.add("active");
closeBtn.onclick = () => modal.classList.remove("active");
window.onclick = (e) => { if (e.target === modal) modal.classList.remove("active"); };


