// src/pages/index.js

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css'; 

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // Usa el color Gris/Plata para el texto de la cabecera
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ color: 'var(--ifm-hero-text-color)' }}>
      <div className="container">
        {/* Título Inclusivo y Profesional */}
        <h1 className="hero__title" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '2px' }}>
          DEPARTAMENTO DE POLICÍA DE REGIDOS.
        </h1>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', margin: '20px auto 30px', maxWidth: '800px' }}>
          La fuente oficial para la legislación y normativas internas de LSPD.
        </p>
        
        {/* Botón Dinámico con pulso */}
        <div className={styles.buttons}>
          <Link
            className="button button--info button--lg" 
            style={{ color: 'white' }}
            to="/docs/intro">
            🚓 ACCEDER A REGLAMENTOS OFICIALES
          </Link>
        </div>
        
        {/* Información de Vigencia */}
        <p style={{marginTop: '20px', fontSize: '0.9em', color: 'var(--ifm-hero-text-color)'}}>
          Documentación en vigor a partir del 29 de Octubre de 2025.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio | ${siteConfig.title}`}
      description="Documentación y Reglamentos Oficiales del Los Santos Police Department - RegidosRP.">
      <HomepageHeader />
      
      {/* Mensaje de Bienvenida Largo y Estético (Bloque de saludo) */}
      <main>
        <div className="container padding-vert--xl text--center">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--ifm-color-primary)' }}>
                UN SALUDO DE LA DIRECCIÓN 🫡
              </h2>
              <blockquote style={{ 
                fontSize: '1.1rem', 
                borderLeft: '4px solid var(--ifm-color-warning)',
                paddingLeft: '20px',
                margin: '0 auto',
                textAlign: 'left',
                lineHeight: '1.8'
              }}>
                <p>
                A toda la comunidad de RegidosRP y al honorable personal del LSPD: Bienvenidos a este portal de información. Nuestra misión es mantener la paz, proteger la vida y la propiedad, y aplicar la ley con justicia y equidad. Esta documentación sirve como **el pilar de nuestra conducta** y el estándar por el cual medimos la acción policial. Les invitamos a explorar los códigos de conducta y los procedimientos que nos permiten servirles mejor, garantizando siempre la transparencia y el profesionalismo en cada intervención.
                </p>
                <footer style={{ marginTop: '10px' }}>
                    — Comandancia, <cite title="LSPD">Los Santos Police Department</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}