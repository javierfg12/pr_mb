/* ================================================
   MásBarata – Estado compartido (carrito, productos)
   Incluir PRIMERO en todas las páginas
   ================================================ */

/* ── CATÁLOGO COMPLETO DE PRODUCTOS ── */
const CATALOG = [
  /* COLLARES */
  { id: 1,  cat: 'collares',      name: 'Collar con Nombre de Plata',         price: 24.99, oldPrice: null,  badge: 'Personalizable', rating: 4.9, reviews: 312,
    desc: 'Collar de plata de ley 925 con colgante personalizado con tu nombre o el de quien quieras. Incluye caja regalo.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="72" rx="58" ry="9" fill="none" stroke="#999" stroke-width="1.2" opacity="0.55"/><line x1="90" y1="81" x2="90" y2="112" stroke="#999" stroke-width="1" opacity="0.5"/><text x="90" y="162" text-anchor="middle" font-family="Georgia,serif" font-size="36" font-style="italic" fill="#C8C8C8" opacity="0.75">Sara</text><line x1="50" y1="178" x2="130" y2="178" stroke="#555" stroke-width="0.5"/></svg>` },
  { id: 2,  cat: 'collares',      name: 'Collar Gargantilla Fina',            price: 12.99, oldPrice: 19.99, badge: '-35%', rating: 4.7, reviews: 88,
    desc: 'Gargantilla minimalista en plata de ley 925. Diseño fino y elegante, ideal para llevar solo o en capas.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="110" rx="70" ry="10" fill="none" stroke="#bbb" stroke-width="2" opacity="0.7"/></svg>` },
  { id: 3,  cat: 'collares',      name: 'Collar Perla Barroca',               price: 18.50, oldPrice: null,  badge: null,   rating: 4.8, reviews: 54,
    desc: 'Collar con perla barroca cultivada de agua dulce, engarzada en plata de ley 925. Pieza única.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="80" rx="55" ry="8" fill="none" stroke="#999" stroke-width="1.2" opacity="0.5"/><line x1="90" y1="88" x2="90" y2="130" stroke="#999" stroke-width="1" opacity="0.5"/><ellipse cx="90" cy="148" rx="22" ry="24" fill="#C8C8C8" opacity="0.7"/></svg>` },

  /* PULSERAS */
  { id: 4,  cat: 'pulseras',      name: 'Pulsera Corazón Perla',              price: 8.99,  oldPrice: 14.99, badge: '-40%', rating: 4.9, reviews: 201,
    desc: 'Pulsera de plata de ley 925 con dije de corazón y perla. Cierre de mosquetón regulable.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="120" rx="62" ry="45" fill="none" stroke="#aaa" stroke-width="3" opacity="0.6"/><path d="M90,90 C90,90 75,75 68,82 C61,89 68,100 90,115 C112,100 119,89 112,82 C105,75 90,90 90,90Z" fill="#C8C8C8" opacity="0.85"/></svg>` },
  { id: 5,  cat: 'pulseras',      name: 'Pulsera Triple Protección',          price: 12.50, oldPrice: 24.99, badge: '-50%', rating: 4.8, reviews: 167,
    desc: 'Pulsera de tres hilos de plata de ley 925 con dije de estrella, luna y sol. Símbolo de protección y buena fortuna.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="120" r="55" fill="none" stroke="#C8C8C8" stroke-width="1" opacity="0.4"/><circle cx="90" cy="120" r="40" fill="none" stroke="#C8C8C8" stroke-width="0.8" opacity="0.3"/><circle cx="90" cy="120" r="24" fill="none" stroke="#C8C8C8" stroke-width="0.6" opacity="0.25"/><polygon points="90,75 108,108 90,120 72,108" fill="#C8C8C8" opacity="0.7"/></svg>` },
  { id: 6,  cat: 'pulseras',      name: 'Pulsera Esclava Grabada',            price: 16.99, oldPrice: null,  badge: 'Nuevo', rating: 4.6, reviews: 32,
    desc: 'Esclava rígida de plata de ley 925. Personalizable con grabado interior de texto libre (hasta 20 caracteres).',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="100" width="120" height="38" rx="19" fill="none" stroke="#bbb" stroke-width="2.5" opacity="0.6"/><text x="90" y="124" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#C8C8C8" opacity="0.55">Para siempre</text></svg>` },

  /* PENDIENTES */
  { id: 7,  cat: 'pendientes',    name: 'Pendientes Aro Liso 2cm',            price: 7.99,  oldPrice: null,  badge: null,   rating: 4.7, reviews: 289,
    desc: 'Aros lisos de plata de ley 925, diámetro 2 cm. Cierre de presión. El básico imprescindible.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="110" r="36" fill="none" stroke="#bbb" stroke-width="3" opacity="0.6"/><circle cx="120" cy="110" r="36" fill="none" stroke="#bbb" stroke-width="3" opacity="0.6"/></svg>` },
  { id: 8,  cat: 'pendientes',    name: 'Pendientes Gota Diamante',           price: 11.99, oldPrice: 19.99, badge: '-40%', rating: 4.8, reviews: 143,
    desc: 'Pendientes colgantes con forma de gota facetada en plata de ley 925. Efecto diamante bajo la luz.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="50" x2="60" y2="90" stroke="#aaa" stroke-width="1.5" opacity="0.6"/><polygon points="60,90 80,128 60,144 40,128" fill="#C8C8C8" opacity="0.85"/><line x1="120" y1="50" x2="120" y2="90" stroke="#aaa" stroke-width="1.5" opacity="0.6"/><polygon points="120,90 140,128 120,144 100,128" fill="#C8C8C8" opacity="0.85"/></svg>` },

  /* COLGANTES */
  { id: 9,  cat: 'colgantes',     name: 'Colgante Nudo de la Bruja',          price: 5.99,  oldPrice: 9.99,  badge: '-40%', rating: 4.9, reviews: 412,
    desc: 'Colgante con nudo celta en plata de ley 925. Símbolo de protección y buena suerte. Incluye cadena de 45 cm.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="120" rx="55" ry="42" fill="none" stroke="#999" stroke-width="2" opacity="0.5"/><ellipse cx="90" cy="120" rx="38" ry="28" fill="none" stroke="#bbb" stroke-width="1" opacity="0.3"/><circle cx="90" cy="78" r="5" fill="#C8C8C8" opacity="0.6"/><circle cx="135" cy="104" r="4" fill="#C8C8C8" opacity="0.5"/><circle cx="90" cy="162" r="5" fill="#C8C8C8" opacity="0.6"/><circle cx="45" cy="104" r="4" fill="#C8C8C8" opacity="0.5"/></svg>` },
  { id: 10, cat: 'colgantes',     name: 'Colgante Estrella de David',         price: 8.99,  oldPrice: null,  badge: null,   rating: 4.6, reviews: 67,
    desc: 'Colgante con estrella hexagonal en plata de ley 925. Diseño geométrico elegante con acabado pulido.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><polygon points="90,72 106,100 134,100 114,118 122,148 90,130 58,148 66,118 46,100 74,100" fill="#C8C8C8" opacity="0.7" stroke="#fff" stroke-width="0.8"/></svg>` },

  /* PERSONALIZADOS */
  { id: 11, cat: 'personalizados', name: 'Collar Inicial con Brillante',      price: 19.99, oldPrice: null,  badge: 'Personalizable', rating: 5.0, reviews: 88,
    desc: 'Colgante con tu inicial en plata de ley 925, con piedra de circonita incrustada. Disponible en letras A–Z.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><text x="90" y="160" text-anchor="middle" font-family="Georgia,serif" font-size="100" font-style="italic" fill="#C8C8C8" opacity="0.6">A</text></svg>` },
  { id: 12, cat: 'personalizados', name: 'Pulsera con Fecha Grabada',         price: 22.50, oldPrice: null,  badge: 'Personalizable', rating: 4.9, reviews: 156,
    desc: 'Pulsera de eslabones en plata de ley 925 con plaquita grabada con una fecha especial. El regalo perfecto.',
    svg: `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="105" width="124" height="30" rx="15" fill="none" stroke="#bbb" stroke-width="2" opacity="0.6"/><text x="90" y="125" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#C8C8C8" opacity="0.6">14 · 02 · 2024</text></svg>` },
];

/* ── CARRITO (localStorage) ── */
const Cart = {
  _key: 'masbarata_cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this._key)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this._key, JSON.stringify(items));
    this._notify();
  },

  add(productId, qty = 1, opts = {}) {
    const items = this.get();
    const existing = items.find(i => i.id === productId && JSON.stringify(i.opts) === JSON.stringify(opts));
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, qty, opts });
    }
    this.save(items);
  },

  remove(productId, opts = {}) {
    const items = this.get().filter(i => !(i.id === productId && JSON.stringify(i.opts) === JSON.stringify(opts)));
    this.save(items);
  },

  updateQty(productId, qty, opts = {}) {
    const items = this.get();
    const item = items.find(i => i.id === productId && JSON.stringify(i.opts) === JSON.stringify(opts));
    if (item) item.qty = qty;
    this.save(items);
  },

  clear() { localStorage.removeItem(this._key); this._notify(); },

  count() { return this.get().reduce((s, i) => s + i.qty, 0); },

  total() {
    return this.get().reduce((sum, i) => {
      const p = CATALOG.find(p => p.id === i.id);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  },

  _notify() {
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = `Carrito (${this.count()})`;
    });
  }
};

/* ── HELPERS ── */
function fmt(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ── NAV COMPARTIDA: actualizar contador al cargar ── */
document.addEventListener('DOMContentLoaded', () => {
  Cart._notify();
});
