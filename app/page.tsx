export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="site-header sticky top-0 z-50">
        {/* Barra superior (vino) */}
        <nav className="bg-[#800020] text-white">
          <div className="max-w-[1100px] mx-auto flex items-center justify-between py-3 px-4">
            {/* Izquierda */}
            <a className="brand font-bold text-lg">Dulce Pantalla</a>

            {/* Derecha */}
            <a href="#" className="hover:underline font-medium">
              Iniciar sesión
            </a>
          </div>
        </nav>

        {/* Barra secundaria (blanca con menú centrado) */}
        <nav className="bg-white border-b">
          <ul className="max-w-[1100px] mx-auto flex justify-center gap-6 py-2 px-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-[#800020]">Inicio</a></li>
            <li><a href="#" className="hover:text-[#800020]">Categorías</a></li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="site-main">
        {/* Contenido principal */}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        {/* Pie de página */}
      </footer>
    </>
  );
}
