import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './diagnostic.module.css';
import commonStyles from './offre.module.css';

export default function Diagnostic() {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

    const [formData, setFormData] = useState({
        killFeature: '',
        tools: '',
        decisionMakers: '',
        successCriteria: '',
        name: '',
        email: '',
        phone: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (step === 1 && !formData.killFeature) return alert("Veuillez répondre à cette question pour continuer.");
        if (step === 2 && !formData.tools) return alert("Veuillez nous en dire plus sur vos outils actuels.");
        if (step === 3 && !formData.decisionMakers) return alert("Cette information est cruciale pour le délai de 7 jours.");
        if (step === 4 && !formData.successCriteria) return alert("Définissez votre critère de succès.");

        if (step < totalSteps) {
            setStep(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            return alert("Veuillez remplir vos informations de contact.");
        }

        setStatus('submitting');

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyZJOO5RQwbmspI5s1pOjpFPqBeQBhJeRBlAj8gsOWT_jYFdv5p0eBW2N3NkM-Euq-fmA/exec';

        const dataToSend = {
            type: 'Diagnostic Veloce',
            ...formData
        };

        try {
            await fetch(scriptURL, { method: 'POST', body: JSON.stringify(dataToSend), headers: { 'Content-Type': 'application/json' }, mode: 'no-cors' });
            setStatus('success');
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
        }
    };

    const progressPercentage = (step / totalSteps) * 100;

    if (status === 'success') {
        return (
            <Layout title="Diagnostic Envoyé">
                <main className={clsx(commonStyles.sectionDark)} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.container}>
                        <div className={styles.formWrapper} style={{ textAlign: 'center' }}>
                            <div className={styles.successIcon}>🚀</div>
                            <h2 className={styles.questionTitle} style={{ color: 'white' }}>Diagnostic Prêt !</h2>
                            <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '2rem' }}>
                                Merci {formData.name}, j'analyse vos réponses. Je vous recontacte sous 24h pour discuter de la faisabilité de votre projet en 7 jours.
                            </p>
                            <a href="/good-vibe-coding/" className={styles.nextButton} style={{ background: 'white', color: 'black', textDecoration: 'none', display: 'inline-block' }}>
                                Retour au site
                            </a>
                        </div>
                    </div>
                </main>
            </Layout>
        );
    }

    return (
        <Layout title="Fiche de Qualification - Diagnostic">
            <header className={clsx(commonStyles.sectionDark)} style={{ padding: '6rem 0 8rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="hero__title" style={{ fontSize: '3rem' }}>Votre <span className="highlight">Diagnostic Veloce</span></h1>
                    <p className="hero__subtitle" style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        Déterminons ensemble si votre projet peut être propulsé en une semaine.
                    </p>
                </div>
            </header>

            <main className={clsx(commonStyles.sectionLight)} style={{ paddingBottom: '6rem' }}>
                <div className={styles.container}>
                    <div className={styles.formWrapper}>
                        {/* Progress Bar */}
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
                        </div>

                        {/* STEP 1: KILL FEATURE */}
                        {step === 1 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>Étape 1/5 : Priorité</span>
                                    <h2 className={styles.questionTitle}>Si on ne devait garder qu'une seule action que l'utilisateur peut faire, ce serait laquelle ?</h2>
                                </div>

                                <textarea
                                    name="killFeature"
                                    className={styles.textarea}
                                    placeholder="Ex: Le client doit pouvoir payer sa facture en un clic..."
                                    value={formData.killFeature}
                                    onChange={handleChange}
                                    autoFocus
                                />

                                <div className={styles.guidanceBox}>
                                    <div className={styles.guidanceIcon}>💡</div>
                                    <div>
                                        <div className={styles.guidanceTitle}>Conseil Veloce</div>
                                        <p className={styles.guidanceText}>
                                            Pour livrer en 7 jours, on se concentre sur le moteur principal. Le reste est "bonus" pour une V2. Si vous voulez tout faire d'un coup, le délai sera impossible à tenir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: TOOLS */}
                        {step === 2 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>Étape 2/5 : Data</span>
                                    <h2 className={styles.questionTitle}>Quels sont les outils ou les fichiers que vous utilisez aujourd'hui pour cette tâche ?</h2>
                                </div>

                                <textarea
                                    name="tools"
                                    className={styles.textarea}
                                    placeholder="Ex: Un Excel partagé, des emails, Notion..."
                                    value={formData.tools}
                                    onChange={handleChange}
                                    autoFocus
                                />

                                <div className={styles.guidanceBox}>
                                    <div className={styles.guidanceIcon}>🗃️</div>
                                    <div>
                                        <div className={styles.guidanceTitle}>Note sur les Données</div>
                                        <p className={styles.guidanceText}>
                                            Si vos données sont "dans votre tête" ou sur papier, le premier jour sera dédié à la structuration. Vous devrez être 100% disponible pour cette étape clé.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: DECISION MAKERS */}
                        {step === 3 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>Étape 3/5 : Organisation</span>
                                    <h2 className={styles.questionTitle}>Qui va utiliser l'outil au quotidien et qui prend les décisions finales sur le design ?</h2>
                                </div>

                                <textarea
                                    name="decisionMakers"
                                    className={styles.textarea}
                                    placeholder="Ex: Moi seul pour les décisions, mon équipe de 3 pour l'usage..."
                                    value={formData.decisionMakers}
                                    onChange={handleChange}
                                    autoFocus
                                />

                                <div className={styles.guidanceBox}>
                                    <div className={styles.guidanceIcon}>⚖️</div>
                                    <div>
                                        <div className={styles.guidanceTitle}>Alerte Délai</div>
                                        <p className={styles.guidanceText}>
                                            S'il y a plus de 2 décideurs, le délai de 7 jours est en danger. La méthode exige un circuit de décision ultra-court pour avancer heure par heure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 4: SUCCESS CRITERIA */}
                        {step === 4 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>Étape 4/5 : Objectif</span>
                                    <h2 className={styles.questionTitle}>Qu'est-ce qui ferait que vendredi soir, vous vous disiez : "C'est un succès total" ?</h2>
                                </div>

                                <textarea
                                    name="successCriteria"
                                    className={styles.textarea}
                                    placeholder="Ex: Que je n'aie plus à saisir les adresses manuellement..."
                                    value={formData.successCriteria}
                                    onChange={handleChange}
                                    autoFocus
                                />

                                <div className={styles.guidanceBox}>
                                    <div className={styles.guidanceIcon}>🏆</div>
                                    <div>
                                        <div className={styles.guidanceTitle}>Focus Énergie</div>
                                        <p className={styles.guidanceText}>
                                            Cela me permet de savoir exactement où mettre mon énergie. Beauté du design ou puissance de l'automatisation ? Vous choisissez le combat prioritaire.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 5: CONTACT */}
                        {step === 5 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>Dernière étape</span>
                                    <h2 className={styles.questionTitle}>Où dois-je envoyer les résultats du diagnostic ?</h2>
                                </div>
                                <div className={styles.contactGrid}>
                                    <div>
                                        <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Nom Complet</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className={styles.inputField}
                                            placeholder="Votre nom"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className={styles.inputField}
                                            placeholder="votre@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className={styles.inputField}
                                            placeholder="06 ..."
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className={styles.navContainer}>
                            {step > 1 ? (
                                <button type="button" onClick={handleBack} className={styles.backButton}>
                                    ← Précédent
                                </button>
                            ) : <div></div>}

                            {step < totalSteps && (
                                <button type="button" onClick={handleNext} className={styles.nextButton}>
                                    Suivant →
                                </button>
                            )}

                            {step === totalSteps && (
                                <button
                                    onClick={handleSubmit}
                                    disabled={status === 'submitting'}
                                    className={clsx(styles.nextButton, styles.finalSubmitButton)}
                                >
                                    {status === 'submitting' ? 'Analyse...' : '🚀 Envoyer mon diagnostic'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
