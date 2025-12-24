import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './systeme.module.css';

export default function Systeme() {
    return (
        <Layout title="Le Système Good Vibe" description="Libérez votre croissance avec un logiciel sur-mesure et des automatisations intelligentes.">

            {/* 1. HERO HEADER */}
            <header className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Libérez votre croissance :<br />
                            <span>Je bâtis votre logiciel et j'automatise vos processus en 72 heures.</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Ne choisissez plus entre une application sur-mesure et des outils qui communiquent entre eux.
                            Je crée votre plateforme et je connecte tous vos outils pour que votre entreprise travaille pour vous, pas l'inverse.
                        </p>
                        <a href="/good-vibe-coding/formulaire" className={styles.ctaButton}>
                            Vérifier si votre projet est éligible au Sprint
                        </a>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. CONCEPT: Cerveau et Corps */}
                <section className={styles.conceptSection}>
                    <div className={styles.container}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pourquoi se contenter d'un logiciel quand vous pouvez avoir un système intelligent ?</h2>
                        </div>

                        <div className={styles.conceptGrid}>
                            <div className={styles.conceptCard}>
                                <span className={styles.conceptIcon}>💪</span>
                                <h3>Le Corps (Le Logiciel)</h3>
                                <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
                                    Une interface moderne, rapide et simple, conçue pour vos clients ou vos employés.
                                    Design premium, UX fluide, et performance maximale.
                                </p>
                            </div>
                            <div className={styles.conceptCard}>
                                <span className={styles.conceptIcon}>🧠</span>
                                <h3>Le Cerveau (L'Automatisation)</h3>
                                <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
                                    Des flux invisibles qui connectent votre app à vos emails, votre CRM, votre facturation et votre Slack.
                                    <br /><br />
                                    <strong>Résultat :</strong> Zéro saisie manuelle. Zéro oubli. 100% de productivité.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. LES 3 PILIERS */}
                <section className={styles.pillarsSection}>
                    <div className={styles.container}>
                        <div className={styles.pillarsGrid}>
                            <div className={styles.pillarCard}>
                                <div className={styles.pillarNumber}>01</div>
                                <h3>Création Accélérée</h3>
                                <p>
                                    Passez de l'idée au produit en 3 jours. J'utilise l'IA pour coder à la vitesse de la pensée, sans jamais sacrifier la qualité senior.
                                </p>
                            </div>
                            <div className={styles.pillarCard}>
                                <div className={styles.pillarNumber}>02</div>
                                <h3>Connectivité Totale</h3>
                                <p>
                                    Votre nouvel outil ne sera pas une île. Il parlera à tous vos outils existants (Stripe, HubSpot, Gmail, Notion...) pour synchroniser vos données en temps réel.
                                </p>
                            </div>
                            <div className={styles.pillarCard}>
                                <div className={styles.pillarNumber}>03</div>
                                <h3>Autonomie Complète</h3>
                                <p>
                                    Vous êtes propriétaire de 100% de votre système. Pas de frais de licence cachés, pas de dépendance. Vous avez les clés d'une machine de guerre.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. LES FORFAITS */}
                <section className={styles.pricingSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Les Forfaits "Clés en main"</h2>
                        <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '2rem' }}>Le CFO simplifie l'achat</p>

                        <div className={styles.pricingGrid}>
                            <div className={styles.pricingCard}>
                                <h3>Le Sprint MVP</h3>
                                <div className={styles.price}>4 500 € <span>HT</span></div>
                                <ul className={styles.featuresList}>
                                    <li>Une application web métier complète</li>
                                    <li>Livraison & Déploiement en 72h</li>
                                    <li>Garantie de 7 jours</li>
                                    <li>Design Premium & Mobile First</li>
                                </ul>
                                <a href="/good-vibe-coding/formulaire" className={styles.ctaButton} style={{ width: '100%', textAlign: 'center', background: 'rgba(255,255,255,0.1)' }}>
                                    Choisir le MVP
                                </a>
                            </div>

                            <div className={clsx(styles.pricingCard, styles.pricingCardFeatured)}>
                                <h3>Le Système Complet</h3>
                                <div className={styles.price}>6 500 € <span>HT</span></div>
                                <ul className={styles.featuresList}>
                                    <li>Tout ce qu'il y a dans le MVP</li>
                                    <li>+ 3 automatisations stratégiques</li>
                                    <li>Intégration complète à votre écosystème</li>
                                    <li>Formation à la gestion des automations</li>
                                </ul>
                                <a href="/good-vibe-coding/formulaire" className={styles.ctaButton} style={{ width: '100%', textAlign: 'center' }}>
                                    Choisir le Système
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FAQ */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2rem' }}>Questions Fréquentes</h2>

                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Est-ce que l'automatisation est fiable ?</div>
                            <div className={styles.faqAnswer}>
                                Oui, j'utilise des standards industriels (Make/Zapier) qui garantissent que vos données circulent sans erreur.
                            </div>
                        </div>

                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>J'ai déjà des outils, peut-on les intégrer ?</div>
                            <div className={styles.faqAnswer}>
                                C'est tout l'intérêt. Le Good Vibe Coding vient lier vos outils actuels pour supprimer les tâches répétitives.
                            </div>
                        </div>

                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Pourquoi 72 heures ?</div>
                            <div className={styles.faqAnswer}>
                                Parce qu'en tant que Senior Dev propulsé par l'IA, je supprime les réunions inutiles et les délais de développement classiques pour me concentrer uniquement sur ce qui crée de la valeur pour vous.
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                            <a href="/good-vibe-coding/formulaire" className={styles.ctaButton}>
                                Je vérifie mon éligibilité maintenant
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </Layout>
    );
}
