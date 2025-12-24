import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './audit-sprint.module.css';
import commonStyles from './offre.module.css';

export default function AuditSprint() {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        // Step 1: Identité
        projectName: '',
        goal: '',
        projectType: '',
        // Step 2: Périmètre
        features: '',
        designStatus: '',
        tools: [],
        toolsOther: '',
        complexDb: '', // CTO Request
        // Step 3: Business
        budget: '',
        deadline: '',
        // Step 4: Validation
        whyVibe: '',
        // Contact
        name: '',
        phone: '',
        email: ''
    });

    const [status, setStatus] = useState('idle'); // idle, analyzing, completed
    const [analysisStep, setAnalysisStep] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (tool) => {
        setFormData(prevState => {
            const tools = prevState.tools.includes(tool)
                ? prevState.tools.filter(t => t !== tool)
                : [...prevState.tools, tool];
            return { ...prevState, tools };
        });
    };

    const handleSelection = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(prev => prev + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        setStatus('analyzing');

        // Simulating AI Processing with steps
        const delays = [1500, 3000, 4500];
        delays.forEach((delay, index) => {
            setTimeout(() => setAnalysisStep(index + 1), delay);
        });

        setTimeout(() => {
            setStatus('completed');
        }, 6000);
    };

    const progressPercentage = ((step - 1) / totalSteps) * 100;

    // AI Analysis End Screen
    if (status === 'analyzing' || status === 'completed') {
        const analysisTexts = [
            `Analyse du contexte pour ${formData.projectName || 'votre projet'}...`,
            "Détection des fonctionnalités clés et complexité...",
            "Calcul de la timeline optimale (Vibe Logic)...",
            "Génération du PRD en cours..."
        ];

        // Logic check for final message (Budget filtering)
        // If budget is "<2.5k", we recycle. Else we propose Call.
        const isEligible = formData.budget !== '<2.5k';

        return (
            <Layout title="Analyse en cours" noFooter>
                <div className={styles.fullPageContainer} style={{ justifyContent: 'center' }}>
                    <div className={styles.formContainer} style={{ width: '100%', maxWidth: '600px', background: 'rgba(0,0,0,0.5)', border: 'none' }}>
                        <div className={styles.aiContainer}>
                            {status === 'analyzing' ? (
                                <>
                                    <div className={styles.aiPulse}>🤖</div>
                                    <h2 className={styles.aiText} style={{ animation: 'fadeIn 0.5s', minHeight: '3em' }}>
                                        {analysisTexts[Math.min(analysisStep, analysisTexts.length - 1)]}
                                    </h2>
                                    <p style={{ opacity: 0.7 }}>Veuillez ne pas fermer cette page.</p>
                                </>
                            ) : (
                                <>
                                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                                        {isEligible ? '�' : '🎓'}
                                    </div>
                                    <h2 className={styles.questionTitle} style={{ marginBottom: '1rem', color: 'white' }}>
                                        {isEligible
                                            ? "Analyse terminée : Projet Compatible."
                                            : "Budget identifié : Phase d'Amorçage."}
                                    </h2>
                                    <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '2rem' }}>
                                        {isEligible
                                            ? "Votre PRD a été généré. Compte tenu du scope, nous pouvons lancer un Sprint."
                                            : "Votre budget semble serré pour un Sprint Vibe complet, mais votre idée est excellente."}
                                    </p>

                                    {isEligible ? (
                                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '12px', border: '1px solid #8A2BE2' }}>
                                            <p style={{ marginBottom: '1.5rem', color: '#fff' }}><strong>Étape suivante :</strong> Validez les détails techniques en 15 min.</p>
                                            <a
                                                href="https://calendly.com/goodvibecoding/15min"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={styles.nextButton}
                                                style={{ display: 'inline-flex', background: '#8A2BE2', color: 'white', border: 'none' }}
                                            >
                                                Réserver mon Appel Flash
                                            </a>
                                            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.6 }}>Votre PRD vous a été envoyé par email.</p>
                                        </div>
                                    ) : (
                                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '12px', border: '1px solid #555' }}>
                                            <p style={{ marginBottom: '1.5rem', color: '#fff' }}>Rejoignez l'Académie Good Vibe pour apprendre à lancer ce projet vous-même ou attendez la prochaine session "Starter".</p>
                                            <button className={styles.nextButton} style={{ background: 'white', color: 'black' }}>
                                                Rejoindre la liste d'attente
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Qualification Vibe" noFooter>
            <div className={styles.fullPageContainer}>

                <div className="container" style={{ paddingTop: '4rem' }}>
                    <div className={styles.formContainer}>

                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Vibe Engineering <span style={{ color: '#8A2BE2' }}>// Audit</span></h1>
                        </div>

                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
                        </div>

                        {/* STEP 1: IDENTITÉ */}
                        {step === 1 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>1. L'Identité (Le Quoi)</span>
                                    <h2 className={styles.questionTitle}>Quel est le nom de votre projet/entreprise ?</h2>
                                </div>
                                <input
                                    type="text"
                                    name="projectName"
                                    className={styles.inputField}
                                    placeholder="Ex: VibeFlow, Agence Alpha..."
                                    value={formData.projectName}
                                    onChange={handleChange}
                                    autoFocus
                                    style={{ marginBottom: '2rem' }}
                                />

                                <div className={styles.questionHeader}>
                                    <h2 className={styles.questionTitle} style={{ fontSize: '1.4rem' }}>En une phrase, quel est l'objectif principal ?</h2>
                                    <p className={styles.helperText}>Ex: Automatiser ma facturation, créer un réseau social de niche...</p>
                                </div>
                                <input
                                    type="text"
                                    name="goal"
                                    className={styles.inputField}
                                    placeholder="Objectif principal..."
                                    value={formData.goal}
                                    onChange={handleChange}
                                    style={{ marginBottom: '2rem' }}
                                />

                                <div className={styles.questionHeader}>
                                    <h2 className={styles.questionTitle} style={{ fontSize: '1.4rem' }}>Quel est le type de solution souhaité ?</h2>
                                </div>
                                <div className={styles.radioGroup}>
                                    <RadioCard
                                        label="Site Web / Landing"
                                        desc="Vitrine pour convertir."
                                        value="Website"
                                        selected={formData.projectType}
                                        onSelect={(val) => handleSelection('projectType', val)}
                                    />
                                    <RadioCard
                                        label="App Métier / SaaS"
                                        desc="Dashboard, Espace Client..."
                                        value="WebApp"
                                        selected={formData.projectType}
                                        onSelect={(val) => handleSelection('projectType', val)}
                                    />
                                    <RadioCard
                                        label="Automatisation"
                                        desc="Connecter des outils (Make/n8n)."
                                        value="Automation"
                                        selected={formData.projectType}
                                        onSelect={(val) => handleSelection('projectType', val)}
                                    />
                                </div>
                            </div>
                        )}

                        {/* STEP 2: PÉRIMÈTRE (SCOPE) */}
                        {step === 2 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>2. Le Périmètre (Pour l'IA du PRD)</span>
                                    <h2 className={styles.questionTitle}>Quelles sont les 3 fonctionnalités indispensables ?</h2>
                                </div>
                                <textarea
                                    name="features"
                                    className={styles.textarea}
                                    placeholder="- Paiement Stripe&#10;- Espace Membre&#10;- Chat en direct"
                                    value={formData.features}
                                    onChange={handleChange}
                                    style={{ marginBottom: '2rem', minHeight: '120px' }}
                                    autoFocus
                                />

                                <div className={styles.questionHeader}>
                                    <h2 className={styles.questionTitle} style={{ fontSize: '1.4rem' }}>Avez-vous déjà un design ou une charte ?</h2>
                                </div>
                                <div className={styles.radioGroup} style={{ marginBottom: '2rem' }}>
                                    <RadioCard label="Oui" value="Oui" selected={formData.designStatus} onSelect={(val) => handleSelection('designStatus', val)} />
                                    <RadioCard label="En cours" value="En cours" selected={formData.designStatus} onSelect={(val) => handleSelection('designStatus', val)} />
                                    <RadioCard label="Non (À faire)" value="Non" selected={formData.designStatus} onSelect={(val) => handleSelection('designStatus', val)} />
                                </div>

                                <div className={styles.questionHeader}>
                                    <h2 className={styles.questionTitle} style={{ fontSize: '1.4rem' }}>Quels outils utilisez-vous déjà ?</h2>
                                </div>
                                <div className={styles.checkboxGroup} style={{ marginBottom: '2rem' }}>
                                    <CheckboxCard label="Stripe" selected={formData.tools.includes('Stripe')} onChange={() => handleCheckboxChange('Stripe')} />
                                    <CheckboxCard label="Airtable" selected={formData.tools.includes('Airtable')} onChange={() => handleCheckboxChange('Airtable')} />
                                    <CheckboxCard label="HubSpot" selected={formData.tools.includes('HubSpot')} onChange={() => handleCheckboxChange('HubSpot')} />
                                    <CheckboxCard label="Notion" selected={formData.tools.includes('Notion')} onChange={() => handleCheckboxChange('Notion')} />
                                    <CheckboxCard label="Autre" selected={formData.tools.includes('Autre')} onChange={() => handleCheckboxChange('Autre')} />
                                </div>
                                {formData.tools.includes('Autre') && (
                                    <div style={{ animation: 'fadeIn 0.3s' }}>
                                        <input
                                            type="text"
                                            name="toolsOther"
                                            className={styles.inputField}
                                            placeholder="Précisez les autres outils..."
                                            value={formData.toolsOther}
                                            onChange={handleChange}
                                            style={{ marginTop: '-1rem', marginBottom: '2rem' }}
                                            autoFocus
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* STEP 3: BUSINESS (FILTRAGE) */}
                        {step === 3 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>3. Le Business (Filtrage)</span>
                                    <h2 className={styles.questionTitle}>Quel est le budget investi pour cette phase ?</h2>
                                    <p className={styles.helperText}>Nous privilégions la transparence pour éviter de vous faire perdre du temps.</p>
                                </div>
                                <div className={styles.radioGroup} style={{ marginBottom: '2rem' }}>
                                    <RadioCard
                                        label="Moins de 2 500 €"
                                        desc="Projet d'amorçage."
                                        value="<2.5k"
                                        selected={formData.budget}
                                        onSelect={(val) => handleSelection('budget', val)}
                                    />
                                    <RadioCard
                                        label="2 500 € - 5 000 €"
                                        desc="MVP Robuste."
                                        value="2.5k-5k"
                                        selected={formData.budget}
                                        onSelect={(val) => handleSelection('budget', val)}
                                    />
                                    <RadioCard
                                        label="5 000 € - 10 000 €"
                                        desc="Système complet."
                                        value="5k-10k"
                                        selected={formData.budget}
                                        onSelect={(val) => handleSelection('budget', val)}
                                    />
                                    <RadioCard
                                        label="+ 10 000 €"
                                        desc="Architecture complexe."
                                        value=">10k"
                                        selected={formData.budget}
                                        onSelect={(val) => handleSelection('budget', val)}
                                    />
                                </div>

                                <div className={styles.questionHeader}>
                                    <h2 className={styles.questionTitle} style={{ fontSize: '1.4rem' }}>Quelle est votre échéance idéale ?</h2>
                                </div>
                                <div className={styles.radioGroup}>
                                    <RadioCard label="Hier (Urgent)" value="Urgent" selected={formData.deadline} onSelect={(val) => handleSelection('deadline', val)} />
                                    <RadioCard label="Sous 15 jours" value="15j" selected={formData.deadline} onSelect={(val) => handleSelection('deadline', val)} />
                                    <RadioCard label="Dans +1 mois" value="1mois+" selected={formData.deadline} onSelect={(val) => handleSelection('deadline', val)} />
                                </div>
                            </div>
                        )}

                        {/* STEP 4: VALIDATION (FIT) */}
                        {step === 4 && (
                            <div className={styles.stepBlock}>
                                <div className={styles.questionHeader}>
                                    <span className={styles.questionTag}>4. La Validation (Le Fit)</span>
                                    <h2 className={styles.questionTitle}>Pourquoi Vibe Engineering plutôt qu'une agence classique ?</h2>
                                </div>
                                <textarea
                                    name="whyVibe"
                                    className={styles.textarea}
                                    placeholder="Votre réponse (nous lisons tout)..."
                                    value={formData.whyVibe}
                                    onChange={handleChange}
                                    style={{ marginBottom: '2rem', minHeight: '100px' }}
                                    autoFocus
                                />

                                <div className={styles.questionHeader}>
                                    <h2 className={styles.questionTitle}>Vos coordonnées</h2>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    className={styles.inputField}
                                    placeholder="Nom complet"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ marginBottom: '1.5rem' }}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    className={styles.inputField}
                                    placeholder="Téléphone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ marginBottom: '1.5rem' }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className={styles.inputField}
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {/* Navigation */}
                        <div className={styles.navContainer}>
                            {step > 1 ? (
                                <button type="button" onClick={handleBack} className={styles.backButton}>
                                    ← Retour
                                </button>
                            ) : <div></div>}

                            <button
                                type="button"
                                onClick={handleNext}
                                className={clsx(styles.nextButton, step === totalSteps && styles.finalSubmitButton)}
                            >
                                {step < totalSteps ? 'Suivant →' : '🚀 Générer mon PRD Flash'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function RadioCard({ label, desc, value, selected, onSelect }) {
    const isSelected = selected === value;
    return (
        <div
            className={clsx(styles.radioLabel, isSelected && styles.radioLabelSelected)}
            onClick={() => onSelect(value)}
        >
            <div className={styles.radioInput} style={{
                borderRadius: '50%', border: '2px solid #555',
                background: isSelected ? '#8A2BE2' : 'transparent',
                borderColor: isSelected ? '#8A2BE2' : '#555',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
            }}>
                {isSelected && <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></div>}
            </div>
            <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.0rem' }}>{label}</div>
                {desc && <div style={{ opacity: 0.7, fontSize: '0.85rem' }}>{desc}</div>}
            </div>
        </div>
    );
}

function CheckboxCard({ label, selected, onChange }) {
    return (
        <div
            className={clsx(styles.checkboxLabel, selected && styles.checkboxLabelSelected)}
            onClick={onChange}
        >
            <div className={styles.checkboxInput} style={{
                borderRadius: '4px', border: '2px solid #555',
                background: selected ? '#8A2BE2' : 'transparent',
                borderColor: selected ? '#8A2BE2' : '#555',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
            }}>
                {selected && <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '2px' }}></div>}
            </div>
            <div style={{ fontWeight: '500', fontSize: '0.9rem' }}>{label}</div>
        </div>
    );
}
