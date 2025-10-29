// src/pages/index.js

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css'; 

function HomepageHeader() {
  return (
    // Aplica el color Gris/Plata al texto de la cabecera
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ color: 'var(--ifm-hero-text-color)' }}>
      <div className="container">
        {/* Mensaje de Bienvenida Estético */}
        <h1 className="hero__title" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '2px' }}>
          BIENVENIDO, AGENTE.
        </h1>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', margin: '20px auto 30px', maxWidth: '800px' }}>
          Accede a la documentación oficial para garantizar la **integridad, el orden y la justicia** en Los Santos.
        </p>
        
        {/* Botón Dinámico: 'button--lg' y 'button--info' */}
        <div className={styles.buttons}>
          <Link
            className="button button--info button--lg" 
            style={{ color: 'white' }}
            to="/docs/intro">
            🚓 ACCEDER A REGLAMENTOS OFICIALES
          </Link>
        </div>
        
        {/* Información de Vigencia con color Gris/Plata */}
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
      
      {/* Sección <main> vacía: Quitamos la misión del LSPD */}
      <main></main>
    </Layout>
  );
}