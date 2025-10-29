// src/pages/index.js

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css'; // Importa los estilos CSS Module para el fondo

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Título Principal */}
        <h1 className="hero__title">
          {siteConfig.title} 
        </h1>
        {/* Subtítulo/Lema */}
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        
        {/* Botón de Acceso (Clase button--lg para el efecto de brillo) */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚓 ACCEDER A REGLAMENTOS OFICIALES
          </Link>
        </div>
        
        {/* Información de Vigencia */}
        <p style={{marginTop: '20px', fontSize: '0.9em', color: 'rgba(255,255,255,0.7)'}}>
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
      
      {/* Sección de Misión y Contacto */}
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3 text--center">
              <h2>Misión del LSPD</h2>
              <p>
                El Departamento de Policía de Los Santos se dedica a proteger la vida y la propiedad, mantener el orden público y garantizar la seguridad de todos los ciudadanos dentro de los límites de la ley y el respeto mutuo. Somos el pilar de la legalidad en RegidosRP.
              </p>
              <Link
                className="button button--primary"
                to="/blog">
                Ver Anuncios Recientes
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}