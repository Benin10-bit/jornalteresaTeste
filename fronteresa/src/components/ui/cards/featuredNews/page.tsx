"use client"

import { CardNewsProps } from "@/types/CardNewsProps"
import Link from "next/link"

export default function FeaturedNews({
  type = "destaque",
  title ,
  desc,
  author,
  imgUrl,
  newsUrl,
}: CardNewsProps) {
  return (
    <div className="featured-news">
      <div className="featured-news__shine" />
      <div className="featured-news__glow" />

      <div className="featured-news__content">
        {/* Imagem de fundo com overlay */}
        <div
          className="featured-news__image"
          style={
            imgUrl
              ? { backgroundImage: `url(${imgUrl})` }
              : { background: "linear-gradient(135deg, var(--destaques) 0%, var(--botoes) 100%)" }
          }
        >
          <div className="featured-news__overlay" />
        </div>

        {/* Conteúdo sobreposto */}
        <div className="featured-news__body">
          <div className="featured-news__badge">
            <span>{type}</span>
          </div>

          <div className="featured-news__text">
            <h2 className="featured-news__title">{title}</h2>
            <p className="featured-news__description">{desc}</p>
          </div>

          <div className="featured-news__footer">
            {author && (
              <div className="featured-news__author">
                <svg 
                  className="featured-news__author-icon" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
                <span>{author}</span>
              </div>
            )}

            <Link href={newsUrl} className="featured-news__button text-(--destaques)">
              <span>Ler matéria completa</span>
              <svg 
                className="featured-news__button-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .featured-news {
          position: relative;
          width: 100%;
          height: 700px;
          border-radius: 24px;
          overflow: hidden;
          background: var(--cards);
          border: 1px solid var(--bordas);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: var(--shadow);
        }

        .featured-news:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(75, 64, 53, 0.4);
        }

        [data-tema="dark"] .featured-news:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }

        .featured-news__shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(184, 172, 146, 0.15) 50%,
            transparent 70%
          );
          transform: rotate(45deg);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .featured-news:hover .featured-news__shine {
          opacity: 1;
          animation: shine 1.5s ease-in-out;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }

        .featured-news__glow {
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          background: var(--destaques);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(20px);
        }

        .featured-news:hover .featured-news__glow {
          opacity: 0.4;
        }

        .featured-news__content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .featured-news__image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 25%;
          transition: transform 0.6s ease;
        }

        .featured-news:hover .featured-news__image {
          transform: scale(1.05);
        }

        .featured-news__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(46, 64, 48, 0.1) 0%,
            rgba(46, 64, 48, 0.6) 50%,
            rgba(46, 64, 48, 0.95) 100%
          );
        }

        [data-tema="dark"] .featured-news__overlay {
          background: linear-gradient(
            to bottom,
            rgba(31, 31, 26, 0.1) 0%,
            rgba(31, 31, 26, 0.6) 50%,
            rgba(31, 31, 26, 0.95) 100%
          );
        }

        .featured-news__body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          height: 100%;
          gap: 20px;
        }

        .featured-news__badge {
          align-self: flex-start;
          background: var(--botoes);
          color: var(--input);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(54, 74, 58, 0.3);
        }

        [data-tema="dark"] .featured-news__badge {
          box-shadow: 0 4px 15px rgba(165, 194, 162, 0.3);
        }

        .featured-news__text {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: var(--destaques);
        }

        .featured-news__title {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          color: var(--destaques);
        }

        .featured-news__description {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.95;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          color: var(--destaques);
        }

        .featured-news__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .featured-news__author {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--destaques);
          font-size: 14px;
          opacity: 0.9;
        }

        .featured-news__author-icon {
          width: 20px;
          height: 20px;
        }

        .featured-news__button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }

        .featured-news__button:hover {
          background: var(--destaques);
          color: var(--destaques);
          transform: translateX(4px);
        }

        .featured-news__button-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .featured-news__button:hover .featured-news__button-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .featured-news {
            height: 450px;
          }

          .featured-news__body {
            padding: 24px;
          }

          .featured-news__title {
            font-size: 24px;
          }

          .featured-news__description {
            font-size: 14px;
            -webkit-line-clamp: 2;
          }

          .featured-news__footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .featured-news__button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}