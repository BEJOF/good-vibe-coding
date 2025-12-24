import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './engineering.module.css';

export default function Engineering() {
    return (
        <Layout title="Vibe Engineering" description="Expertise 15 ans pour vos projets Web & App.">

            {/* 1. HERO SECTION */}
            <header className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Votre projet Web ou App déployé en <span className={styles.titleAccent}>7 jours.</span> Garanti.
                        </h1>
                        <p className={styles.heroSubtitle}>
                            J'allie 15 ans d'expertise en ingénierie à la puissance de l'IA pour transformer vos idées en solutions concrètes, sans les délais interminables des agences classiques.
                        </p>

                        {/* Social Proof Badge - Above CTA */}
                        <div className={styles.socialProofBadge}>
                            <span className={styles.badgePulse}></span>
                            <span>🚀 8 clients propulsés en 2024</span>
                        </div>

                        <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                            Estimer mon projet en 2 minutes →
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. METHOD SECTION */}
                <section className={styles.methodSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white', marginBottom: '3rem' }}>Le Choc de Simplification</h2>
                        <div className={styles.methodGrid}>
                            <div className={styles.methodCard}>
                                <div className={styles.methodTitle}>⚡ Vitesse Radicale</div>
                                <p className={styles.methodText}>
                                    Ce qui prenait des mois prend désormais des jours grâce au "Vibe Coding".
                                </p>
                            </div>
                            <div className={styles.methodCard}>
                                <div className={styles.methodTitle}>🛡️ Qualité Senior</div>
                                <p className={styles.methodText}>
                                    Un code propre, sécurisé et évolutif, supervisé par 15 ans d'expérience.
                                </p>
                            </div>
                            <div className={styles.methodCard}>
                                <div className={styles.methodTitle}>🤝 Zéro Friction</div>
                                <p className={styles.methodText}>
                                    Vous parlez business, je m'occupe de la technique. Tout est automatisé.
                                </p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Démarrer mon projet →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 3. SOLUTIONS / PRICING SECTION */}
                <section className={styles.pricingSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Nos 3 Solutions</h2>
                        <p style={{ textAlign: 'center', color: '#888', marginBottom: '3rem' }}>Transparence Totale.</p>

                        <div className={styles.pricingTable}>
                            <div className={styles.pricingCard}>
                                <div className={styles.pricingHeader}>Site Web High-End</div>
                                <p className={styles.pricingDesc}>Pour une image de marque forte et une conversion maximale.</p>
                                <div className={styles.pricingPrice}>À partir de 2 500 €</div>
                                <div className={styles.pricingDelivery}>Livraison : 5 jours</div>
                            </div>
                            <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
                                <div className={styles.pricingHeader}>App & Logiciel Métier</div>
                                <p className={styles.pricingDesc}>Pour créer votre produit (SaaS) ou un outil interne sur mesure.</p>
                                <div className={styles.pricingPrice}>À partir de 4 900 €</div>
                                <div className={styles.pricingDelivery}>Livraison : 7-10 jours</div>
                            </div>
                            <div className={styles.pricingCard}>
                                <div className={styles.pricingHeader}>Automatisation Totale</div>
                                <p className={styles.pricingDesc}>Pour connecter vos outils et supprimer vos tâches répétitives.</p>
                                <div className={styles.pricingPrice}>Sur devis</div>
                                <div className={styles.pricingDelivery}>Pack dès 1 500 € • Gain immédiat</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Démarrer mon projet maintenant
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SOCIAL PROOF / TESTIMONIALS */}
                <section className={styles.testimonialsSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: 'white', marginBottom: '3rem' }}>Ils m'ont fait confiance</h2>
                        <div className={styles.testimonialsGrid}>
                            <div className={styles.testimonialCard}>
                                <p className={styles.testimonialText}>"Livraison en 5 jours, qualité irréprochable. Je recommande."</p>
                                <div className={styles.testimonialAuthor}>— Startup SaaS, Paris</div>
                            </div>
                            <div className={styles.testimonialCard}>
                                <p className={styles.testimonialText}>"Notre MVP était en ligne avant même la fin du mois. Impressionnant."</p>
                                <div className={styles.testimonialAuthor}>— E-commerce, Lyon</div>
                            </div>
                            <div className={styles.testimonialCard}>
                                <p className={styles.testimonialText}>"Enfin un développeur qui comprend le business, pas juste la tech."</p>
                                <div className={styles.testimonialAuthor}>— Agence Marketing, Bordeaux</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Rejoindre les 8 clients propulsés →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 4. HUMAN SECTION */}
                <section className={styles.humanSection}>
                    <div className={styles.container}>
                        <div className={styles.humanGrid}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem' }}>L'Expert derrière la Vibe</h2>
                                <div className={styles.humanQuote}>
                                    <p>
                                        "Bonjour, je suis <strong>Jonathan Labéjof</strong>.
                                        Après 15 ans à coder pour des grands comptes et des startups, j'ai vu trop de projets s'enliser dans des réunions inutiles.<br /><br />
                                        J'ai créé <strong>Vibe Engineering</strong> pour redonner du plaisir à la création : je code à la vitesse de votre pensée. Vous n'engagez pas une agence de 20 personnes, vous engagez un partenaire qui exécute en temps réel."
                                    </p>
                                </div>
                            </div>
                            <div className={styles.profileImageContainer}>
                                <img src={useBaseUrl('/img/photo.png')} className={styles.profileImage} alt="Expert Profile" />
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Discutons de votre projet →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 5. PROCESS SECTION */}
                <section className={styles.processSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white' }}>Le Processus Automatisé</h2>
                        <div className={styles.processGrid}>
                            <div className={styles.processStep}>
                                <div className={styles.processIcon}>1</div>
                                <div className={styles.processTitle}>Le Quiz</div>
                                <div style={{ color: '#888' }}>2 min pour qualifier votre besoin.</div>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.processIcon}>2</div>
                                <div className={styles.processTitle}>Le Diagnostic IA</div>
                                <div style={{ color: '#888' }}>Votre PRD reçu flash sous 2h.</div>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.processIcon}>3</div>
                                <div className={styles.processTitle}>L'Appel Flash</div>
                                <div style={{ color: '#888' }}>15 min pour valider les détails.</div>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.processIcon}>4</div>
                                <div className={styles.processTitle}>Le Sprint</div>
                                <div style={{ color: '#888' }}>Lancement développement immédiat.</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Démarrer mon projet →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ SECTION */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white', marginBottom: '3rem' }}>FAQ</h2>

                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Pourquoi est-ce si rapide ?</div>
                            <div className={styles.faqAnswer}>
                                J'utilise une méthode hybride (Vibe Coding) qui décuple ma vitesse de production sans sacrifier la rigueur architecturale.
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>C'est du "No-Code" ?</div>
                            <div className={styles.faqAnswer}>
                                Non. C'est du vrai code, robuste et dont vous êtes propriétaire à 100%.
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Et après la livraison ?</div>
                            <div className={styles.faqAnswer}>
                                Je propose un forfait de maintenance et hébergement pour que vous n'ayez jamais à gérer un serveur.
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                            <h3 style={{ color: 'white', marginBottom: '2rem' }}>Prêt à passer à la vitesse supérieure ?</h3>
                            <Link to="/good-vibe-coding/audit-sprint" className={styles.ctaButton} style={{ fontSize: '1.3rem', padding: '1.2rem 3rem' }}>
                                Générer mon dossier de projet (PRD) gratuitement
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
        </Layout>
    );
}
