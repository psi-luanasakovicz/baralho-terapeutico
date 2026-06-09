const DEFAULT_VERIFY_URL = 'https://psic-luanasakovicz-store.vercel.app/api/interactive-app/verify';

function getVerifyUrl() {
  return import.meta.env.VITE_STORE_VERIFY_URL || DEFAULT_VERIFY_URL;
}

function showAccessDenied(message) {
  document.body.innerHTML = `
    <div class="access-denied">
      <div class="access-denied__card">
        <span class="access-denied__badge">Acesso restrito</span>
        <h1 class="access-denied__title">Baralho Terapêutico Digital</h1>
        <p class="access-denied__text">${message}</p>
        <a
          class="access-denied__link"
          href="https://psic-luanasakovicz-store.vercel.app/materiais"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver materiais na plataforma
        </a>
      </div>
    </div>
  `;
}

export async function requireStoreAccess() {
  const token = new URLSearchParams(window.location.search).get('token');

  if (!token) {
    showAccessDenied(
      'Este app só funciona para quem adquiriu o material. Abra-o pela Área do Cliente na plataforma.',
    );
    return false;
  }

  try {
    const verifyUrl = `${getVerifyUrl()}?token=${encodeURIComponent(token)}`;
    const response = await fetch(verifyUrl);

    if (!response.ok) {
      showAccessDenied(
        'Seu acesso expirou ou não foi encontrado. Entre na Área do Cliente e abra o baralho novamente.',
      );
      return false;
    }

    const data = await response.json();
    if (!data.valid) {
      showAccessDenied(
        'Não foi possível validar sua compra. Entre na Área do Cliente e abra o baralho novamente.',
      );
      return false;
    }

    return true;
  } catch {
    showAccessDenied(
      'Não foi possível conectar à plataforma. Verifique sua internet e tente abrir o baralho pela Área do Cliente.',
    );
    return false;
  }
}
