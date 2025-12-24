import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import styles from './deck.module.css';

// Placeholder images since generation failed
const IMG_SLIDE_1 = "https://placehold.co/800x600/1a1a1a/8A2BE2/png?text=Modern+Developer+Workspace";
const IMG_SLIDE_2 = "https://placehold.co/800x600/1a1a1a/8A2BE2/png?text=Dashboard+Mockup+Before+After";
const IMG_SLIDE_3 = "https://placehold.co/800x600/1a1a1a/8A2BE2/png?text=Invisible+Tech+Stack+Security";

export default function Deck() {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={styles.deckContainer}>
            <Head>
                <title>Good Vibe Coding - Presentation</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <button onClick={handlePrint} className={styles.printControl}>
                🖨️ Imprimer / Sauvegarder en PDF
            </button>

            {/* SLIDE 1 */}
            <div className={styles.slide}>
                <div className={styles.bottomBar}>Étape suivante : Appel découverte de 15 min</div>
                <div className={styles.slideContent}>
                    <div className={styles.leftColumn}>
                        <div className={styles.slideSubtitle}>Le concept "Good Vibe Coding"</div>
                        <h1 className={styles.slideTitle}>Plus qu'un logiciel : un moteur de croissance en 72h.</h1>
                        <p className={styles.slideText}>
                            "Je ne vends pas de lignes de code. <span className={styles.highlight}>Je vends de la vélocité.</span> J'utilise l'intelligence artificielle pour construire en 3 jours ce qui prenait 3 mois auparavant."
                        </p>
                        <div className={styles.keyPhrase}>
                            "Passez de l'idée au premier client en une semaine."
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <img src={IMG_SLIDE_1} className={styles.mockupImage} alt="Developer Setup" />
                    </div>
                </div>
            </div>

            {/* SLIDE 2 */}
            <div className={styles.slide}>
                <div className={styles.bottomBar}>Étape suivante : Appel découverte de 15 min</div>
                <div className={styles.slideContent}>
                    <div className={styles.leftColumn}>
                        <div className={styles.slideSubtitle}>L'Étude de Cas (Avant/Après)</div>
                        <h2 className={styles.slideTitle}>Exemple : Automatisation d'une plateforme de réservation.</h2>

                        <div className={styles.beforeAfter}>
                            <div className={styles.baBox}>
                                <div className={styles.baTitle}>LE PROBLÈME (AVANT)</div>
                                <p style={{ fontSize: '1.1rem', color: '#ccc' }}>Le client perdait 15h/semaine à gérer des emails manuels. Risque d'erreur élevé.</p>
                            </div>
                            <div className={styles.baBox} style={{ border: '1px solid #8A2BE2' }}>
                                <div className={styles.baTitle} style={{ color: '#8A2BE2' }}>LA SOLUTION (APRÈS)</div>
                                <p style={{ fontSize: '1.1rem', color: 'white' }}>App sur-mesure connectée au calendrier et facturation. 100% automatisé.</p>
                            </div>
                        </div>

                        <ul className={styles.impactList}>
                            <li>Lancement en 72h chrono.</li>
                            <li>15h gagnées par semaine pour le CEO.</li>
                            <li>Investissement rentabilisé en mois de 2 mois.</li>
                        </ul>
                    </div>
                    <div className={styles.rightColumn}>
                        <img src={IMG_SLIDE_2} className={styles.mockupImage} alt="Dashboard Before After" />
                    </div>
                </div>
            </div>

            {/* SLIDE 3 */}
            <div className={styles.slide}>
                <div className={styles.bottomBar}>Étape suivante : Appel découverte de 15 min</div>
                <div className={styles.slideContent}>
                    <div className={styles.leftColumn}>
                        <div className={styles.slideSubtitle}>La Stack "Zéro Souci"</div>
                        <h2 className={styles.slideTitle}>Une technologie invisible, une sécurité totale.</h2>
                        <p className={styles.slideText}>
                            "J'utilise les outils les plus performants du marché (Next.js, Supabase, Make). Pour vous, cela signifie :"
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
                            <div>
                                <h3 style={{ color: '#8A2BE2', marginBottom: '0.5rem' }}>🚀 Vitesse</h3>
                                <p style={{ color: '#ccc', margin: 0 }}>Chargement instantané pour vos utilisateurs.</p>
                            </div>
                            <div>
                                <h3 style={{ color: '#8A2BE2', marginBottom: '0.5rem' }}>🔒 Sécurité</h3>
                                <p style={{ color: '#ccc', margin: 0 }}>Vos données sont protégées par les standards bancaires.</p>
                            </div>
                            <div>
                                <h3 style={{ color: '#8A2BE2', marginBottom: '0.5rem' }}>📈 Évolutivité</h3>
                                <p style={{ color: '#ccc', margin: 0 }}>L'outil grandit avec votre entreprise.</p>
                            </div>
                        </div>

                        <div className={styles.keyPhrase} style={{ marginTop: '3rem', fontSize: '1.4rem', borderLeftColor: '#FF0080' }}>
                            "Vous êtes propriétaire à 100%. Pas d'abonnement caché."
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <img src={IMG_SLIDE_3} className={styles.mockupImage} alt="Tech Stack" />
                    </div>
                </div>
            </div>

        </div>
    );
}
