"use client";

export function LoadingCard() {
  return (
    <div className="card animate-pulse">

      <div className="card__content">
        {/* Badge */}
        <div className="card__badge bg-(--titulo)">
          &nbsp;
        </div>

        {/* Imagem */}
        <div className="card__image bg-(--foreground) flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-10 h-10 opacity-40 text-(--text)"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M3 15l4-4 4 4 5-5 5 5" />
            <line x1="3" y1="3" x2="21" y2="21" />
          </svg>
        </div>

        {/* Texto */}
        <div className="card__text flex flex-col gap-2">
          <div className="h-4 w-3/4 rounded-md bg-(--text)" />
          <div className="h-4 w-full rounded-md bg-(--text)" />
          <div className="h-4 w-5/6 rounded-md bg-(--text)" />
        </div>

        {/* Footer */}
        <div className="card__footer">
          <div className="h-3 w-20 rounded-md bg-(--links)" />
          <div className="card__button bg-(--destaques)">
            <span className="opacity-0">Ver mais</span>
          </div>
        </div>
      </div>
    </div>
  );
}
