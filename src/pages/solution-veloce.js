import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './solution-veloce.module.css';

export default function SolutionVeloce() {
    return (
        <Layout
            title="La Solution Veloce"
            description="Votre outil sur-mesure opérationnel en 7 jours. Expertise senior, prix fixe, livraison garantie.">

            {/* 1. Hero Section */}
            <header className={clsx('hero-section', styles.sectionDark)}>
                <div className="container">
                    <h1 className="hero__title">
                        Votre outil sur-mesure opérationnel en <span className="highlight">7 jours.</span>
                    </h1>
                    <p className={styles.heroContent}>
                        Je conçois et déploie vos systèmes de gestion, vos espaces clients et vos automatisations à une vitesse record. Expertise senior. Prix fixe. Livraison garantie vendredi soir.
                    </p>
                    <div className="section-cta">
                        <a href="formulaire" className="vibe-button pulse">
                            Vérifier mes disponibilités
                        </a>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. La Méthode */}
                <section id="method" className={clsx('section', styles.sectionLight)}>
                    <div className={styles.container}>
                        <h2 className="section-title">Comment est-ce possible en une semaine ?</h2>
                        <p className="section-subtitle">Ma méthode repose sur une approche d'expert simplifiée pour éliminer les délais inutiles :</p>

                        <div className={styles.methodGrid}>
                            <div className={styles.methodCard}>
                                <div className={styles.methodIcon}>🎯</div>
                                <h3>Focus Exclusif</h3>
                                <p>Je ne travaille que sur votre projet. Vous avez 100% de mon attention pendant une semaine.</p>
                            </div>
                            <div className={styles.methodCard}>
                                <div className={styles.methodIcon}>🏗️</div>
                                <h3>Base Technologique Robuste</h3>
                                <p>Je ne repars pas de zéro. J'utilise mes propres structures de haute qualité pour me concentrer immédiatement sur vos besoins métiers.</p>
                            </div>
                            <div className={styles.methodCard}>
                                <div className={styles.methodIcon}>⚡</div>
                                <h3>Décisions Rapides</h3>
                                <p>Pas de réunions de 3 heures. Nous échangeons en direct pour valider chaque étape et avancer vers la mise en ligne.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Nos Solutions */}
                <section id="solutions" className={clsx('section', styles.sectionGradient)}>
                    <div className={styles.container}>
                        <h2 className="section-title">Nos Solutions</h2>
                        <div className={styles.solutionGrid}>
                            <div className={styles.solutionCard}>
                                <span className={styles.poleLabel}>Pôle 01 : Visibilité & Acquisition</span>
                                <h3>Vitrines & Pages de Vente de Haute Qualité</h3>
                                <p>Pour marquer les esprits et transformer vos visiteurs en clients dès la première seconde.</p>
                            </div>

                            <div className={styles.solutionCard}>
                                <span className={styles.poleLabel}>Pôle 02 : Gestion & Organisation</span>
                                <h3>Systèmes Métier & Espaces Clients</h3>
                                <p>Centralisez vos données et offrez un accès professionnel à vos clients. Votre propre outil, sans abonnement mensuel.</p>
                            </div>

                            <div className={styles.solutionCard}>
                                <span className={styles.poleLabel}>Pôle 03 : Automatisation & Gain de Temps</span>
                                <h3>Flux de Travail Intelligents</h3>
                                <p>Supprimez vos tâches manuelles. Je connecte vos outils pour que vos dossiers et factures se gèrent tout seuls.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Le Planning */}
                <section id="planning" className={clsx('section', styles.sectionLight)}>
                    <div className={styles.container}>
                        <h2 className="section-title">Le Planning de votre semaine</h2>
                        <div className={styles.planningTimeline}>
                            <div className={styles.planningItem}>
                                <div className={styles.planningDay}>Lundi</div>
                                <p>Stratégie et mise en place des fondations.</p>
                            </div>
                            <div className={styles.planningItem}>
                                <div className={styles.planningDay}>Mardi à Jeudi</div>
                                <p>Construction intensive de vos fonctionnalités.</p>
                            </div>
                            <div className={styles.planningItem}>
                                <div className={styles.planningDay}>Vendredi</div>
                                <p>Tests finaux, automatisations et mise en service.</p>
                            </div>
                            <div className={styles.planningItem}>
                                <div className={styles.planningDay}>Le week-end</div>
                                <p>Votre outil est prêt, vous pouvez l'utiliser.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Tarifs */}
                <section id="pricing" className={clsx('section', styles.sectionDark)}>
                    <div className={styles.container}>
                        <h2 className="section-title">Tarifs & Engagement</h2>
                        <p className="section-subtitle">La clarté totale, sans frais cachés.</p>
                        <div className={styles.pricingGrid}>
                            <div className={styles.pricingCard}>
                                <div>
                                    <h3>Forfait Visibilité</h3>
                                    <p>Votre vitrine complète en 1 semaine.</p>
                                </div>
                                <div className={styles.priceTag}>3 000 €</div>
                                <a href="formulaire" className="vibe-button">Choisir ce forfait</a>
                            </div>
                            <div className={styles.pricingCard} style={{ border: '2px solid var(--ifm-color-primary)' }}>
                                <div>
                                    <h3>Forfait Système</h3>
                                    <p>Votre outil de gestion ou portail client.</p>
                                </div>
                                <div className={styles.priceTag}>5 000 €</div>
                                <a href="formulaire" className="vibe-button pulse">Choisir ce forfait</a>
                            </div>
                            <div className={styles.pricingCard}>
                                <div>
                                    <h3>Forfait Automate</h3>
                                    <p>L'automatisation complète de vos processus.</p>
                                </div>
                                <div className={styles.priceTag}>4 000 €</div>
                                <a href="formulaire" className="vibe-button">Choisir ce forfait</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. La Garantie */}
                <section id="guarantee" className={clsx('section', styles.sectionLight)}>
                    <div className={styles.container}>
                        <div className={styles.guaranteeBox}>
                            <h2 className="section-title">Une livraison garantie, sans mauvaise surprise.</h2>
                            <div className={styles.guaranteeGrid}>
                                <div className={styles.guaranteeItem}>
                                    <h4>Prix Ferme</h4>
                                    <p>Le tarif validé ensemble ne bougera pas.</p>
                                </div>
                                <div className={styles.guaranteeItem}>
                                    <h4>Délai Tenu</h4>
                                    <p>Si l'outil n'est pas opérationnel vendredi soir, je termine la mission gracieusement.</p>
                                </div>
                                <div className={styles.guaranteeItem}>
                                    <h4>Indépendance Totale</h4>
                                    <p>Vous êtes propriétaire de tout. Aucun lien de dépendance avec moi après la livraison.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. À Propos */}
                <section id="about" className={clsx('section', styles.sectionGradient)}>
                    <div className={styles.container}>
                        <h2 className="section-title">À Propos</h2>
                        <div className={styles.aboutContent}>
                            <p>
                                "Je suis <strong>Jonathan</strong>, expert en solutions digitales. Ma mission est simple : transformer la complexité technique en outils simples et rentables pour les entrepreneurs qui n'ont pas de temps à perdre avec les agences traditionnelles."
                            </p>
                        </div>
                        <div className="section-cta" style={{ marginTop: '4rem' }}>
                            <a href="formulaire" className="vibe-button pulse">
                                Lancer mon projet maintenant
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
