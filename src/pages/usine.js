import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './usine.module.css';

export default function Usine() {
    return (
        <Layout title="L'Usine à Succès" description="Développement rapide et automation pour votre business.">

            {/* 1. HERO HEADER */}
            <header className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Vos idées méritent un système,<br />
                            <span style={{ color: '#8A2BE2' }}>pas seulement un logiciel.</span>
                        </h1>
                        <p className={styles.heroSummary}>
                            Je développe votre plateforme sur mesure et j'automatise vos opérations en 72 heures.
                            Récupérez 10h par semaine grâce à l'alliance du code Senior et de l'IA.
                        </p>
                        <a href="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                            Démarrer mon Vibe Check →
                        </a>
                        <div className={styles.socialProof}>
                            ⚡ Déjà +25 systèmes livrés en un éclair.
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. ABOUT SECTION */}
                <section className={styles.aboutSection}>
                    <div className={styles.container}>
                        <div className={styles.aboutGrid}>
                            <div>
                                <h2 className={styles.aboutHeading}>10 ans de code, 72h pour transformer votre business.</h2>
                                <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: 1.8 }}>
                                    Je m'appelle <strong>Benjamin</strong>. Après une décennie à voir des projets s'enliser dans des cycles de développement de 6 mois, j'ai décidé de casser les codes. <br /><br />
                                    Ma philosophie ? <strong>Le Good Vibe Coding.</strong> Je ne suis pas juste un développeur. Je suis un architecte qui utilise l'IA pour coder 10x plus vite, me permettant de me concentrer sur ce qui compte vraiment : votre rentabilité. <br /><br />
                                    Quand je ne suis pas en train de piloter un sprint, je cherche comment supprimer la prochaine tâche manuelle qui vous fait perdre votre sourire.
                                </p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                {/* Placeholder for user photo - Human Factor */}
                                <div style={{
                                    width: '100%', height: '400px', background: '#111',
                                    borderRadius: '20px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', border: '1px solid #333'
                                }}>
                                    <span style={{ opacity: 0.5 }}>[Photo Architecte + Écrans]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. DASHBOARD SECTION */}
                <section className={styles.dashboardSection}>
                    <div className={styles.container}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Le Dashboard de votre Sprint</h2>
                            <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
                                Transparence radicale. Chaque soir à 18h, vous recevez le <code>status.md</code> : un rapport généré directement depuis le cœur du projet.
                            </p>
                        </div>

                        <div className={styles.dashboardMockup}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.dot} style={{ background: '#ff5f56' }}></div>
                                <div className={styles.dot} style={{ background: '#ffbd2e' }}></div>
                                <div className={styles.dot} style={{ background: '#27c93f' }}></div>
                                <span style={{ color: '#aaa', fontSize: '0.8rem', marginLeft: '1rem' }}>~/project/status.md</span>
                            </div>
                            <div className={styles.terminalBody}>
                                <div style={{ marginBottom: '1rem', color: '#8A2BE2', fontWeight: 'bold' }}># STATUS REPORT - JOUR 2 - 18:00</div>

                                <div className={styles.statusLine}>
                                    <span>[x] Intégration Stripe Checkout</span>
                                    <span className={styles.statusSuccess}>DONE</span>
                                </div>
                                <div className={styles.statusLine}>
                                    <span>[x] Connexion Airtable Database</span>
                                    <span className={styles.statusSuccess}>DONE</span>
                                </div>
                                <div className={styles.statusLine}>
                                    <span>[x] Authentification Magic Link</span>
                                    <span className={styles.statusSuccess}>DONE</span>
                                </div>
                                <div className={styles.statusLine}>
                                    <span>[/] Workflow n8n : Envoi Facture PDF</span>
                                    <span className={styles.statusPending}>IN PROGRESS</span>
                                </div>
                                <br />
                                <div style={{ color: '#aaa' }}>
                                    > Décisions du jour : Architecture Serverless validée pour réduire les coûts de 40%.
                                    <br />
                                    > Prochaine étape : Tests E2E et déploiement Production demain 10h.
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <a href="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Démarrer mon Vibe Check →
                            </a>
                        </div>
                    </div>
                </section>

                {/* 4. OFFER SECTION */}
                <section className={styles.offerSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white', marginBottom: '2rem' }}>Ce que vous achetez (L'Offre Combo)</h2>

                        <div className={styles.compareGrid}>
                            <div className={styles.compareBox + ' ' + styles.beforeBox}>
                                <h3 style={{ color: '#e06c75', marginBottom: '2rem' }}>AVANT</h3>
                                <ul className={styles.compareList}>
                                    <li>❌ Des outils qui ne se parlent pas</li>
                                    <li>❌ Des fichiers Excel qui saturent</li>
                                    <li>❌ Devis agence à 25k€</li>
                                    <li>❌ 4 mois d'attente incertaine</li>
                                </ul>
                            </div>
                            <div className={styles.compareBox + ' ' + styles.afterBox}>
                                <h3 style={{ color: '#98c379', marginBottom: '2rem' }}>APRÈS (GOOD VIBE)</h3>
                                <ul className={styles.compareList}>
                                    <li>✅ <strong>Logiciel MVP</strong> : App web/mobile robuste</li>
                                    <li>✅ <strong>Cerveau Automation</strong> : n8n Connect (Stripe, HubSpot...)</li>
                                    <li>✅ <strong>PRD Flash</strong> : Feuille de route stratégique</li>
                                    <li>✅ <strong>Prix Fixe</strong> : 4 500 € - 6 500 €</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <a href="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Vérifier mon éligibilité au forfait
                            </a>
                        </div>
                    </div>
                </section>

                {/* 5. TESTIMONIALS */}
                <section className={styles.testimonialSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'white' }}>Ils ont survécu au Sprint</h2>
                        <div className={styles.testimonialGrid}>
                            <div className={styles.testimonialCard}>
                                <div className={styles.quote}>"Je passais mes dimanches sur ma compta. Benjamin a tout automatisé en 3 jours. L'outil est propre, rapide, et surtout : il travaille pour moi."</div>
                                <div className={styles.author}>— Marc, Fondateur SaaS</div>
                            </div>
                            <div className={styles.testimonialCard}>
                                <div className={styles.quote}>"Une agence me demandait 3 mois. Ici, c'était plié en 72h. Le rapport status.md quotidien est un game-changer pour la confiance."</div>
                                <div className={styles.author}>— Sarah, Ops Manager</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <a href="/good-vibe-coding/audit-sprint" className={styles.ctaButton}>
                                Je réserve mon Sprint 72h
                            </a>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>La FAQ "No Bullshit"</h2>

                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Comment pouvez-vous être aussi rapide ?</div>
                            <div className={styles.faqAnswer}>
                                Parce que j'utilise l'IA pour les tâches répétitives (tests, boilerplate) et mon expérience pour l'architecture. Je ne vends pas mes heures, je vends votre résultat.
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Et si je veux des modifs après ?</div>
                            <div className={styles.faqAnswer}>
                                Chaque sprint inclut une phase de polissage. Ensuite, mon offre 'Sérénité' prend le relais pour faire évoluer votre système.
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Est-ce vraiment un forfait fixe ?</div>
                            <div className={styles.faqAnswer}>
                                Oui. Le client déteste l'incertitude budgétaire. 72h = Prix Fixe. C'est simple, c'est carré, c'est rassurant.
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </Layout>
    );
}
