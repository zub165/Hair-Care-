const hairLossData = {
    types: {
        androgenetic: {
            name: "Androgenetic Alopecia",
            description: "Genetic hair loss condition affecting both men and women, characterized by progressive thinning of hair in a specific pattern. Most common form of hair loss, affecting approximately 50% of men and 40% of women by age 50.",
            symptoms: [
                "Gradual thinning of hair",
                "Receding hairline in men",
                "Diffuse thinning in women",
                "Miniaturization of hair follicles",
                "Increased hair shedding",
                "Family history of hair loss"
            ],
            causes: [
                "Genetic predisposition",
                "DHT (Dihydrotestosterone) sensitivity",
                "Hormonal changes",
                "Age-related factors",
                "Environmental factors",
                "Lifestyle factors"
            ],
            treatments: {
                topical: [
                    {
                        name: "Minoxidil 5%",
                        dosage: "1ml twice daily",
                        duration: "Long-term",
                        notes: "FDA approved for both men and women"
                    },
                    {
                        name: "Topical Finasteride",
                        dosage: "0.1% solution once daily",
                        duration: "Long-term",
                        notes: "Off-label use, consult physician"
                    },
                    {
                        name: "Topical Spironolactone",
                        dosage: "5% solution once daily",
                        duration: "Long-term",
                        notes: "Off-label use, primarily for women"
                    }
                ],
                oral: [
                    {
                        name: "Finasteride",
                        dosage: "1mg daily",
                        duration: "Long-term",
                        notes: "FDA approved for men only"
                    },
                    {
                        name: "Dutasteride",
                        dosage: "0.5mg daily",
                        duration: "Long-term",
                        notes: "Off-label use, stronger than Finasteride"
                    },
                    {
                        name: "Spironolactone",
                        dosage: "100-200mg daily",
                        duration: "Long-term",
                        notes: "For women only, requires monitoring"
                    }
                ],
                supplements: [
                    {
                        name: "Saw Palmetto",
                        dosage: "320mg daily",
                        notes: "Natural DHT inhibitor"
                    },
                    {
                        name: "Biotin",
                        dosage: "5000mcg daily",
                        notes: "Supports hair growth"
                    },
                    {
                        name: "Zinc",
                        dosage: "50mg daily",
                        notes: "Supports hair follicle health"
                    }
                ],
                procedures: [
                    {
                        name: "PRP Therapy",
                        frequency: "Monthly for 3-4 months",
                        notes: "Platelet-rich plasma treatment"
                    },
                    {
                        name: "Low-Level Laser Therapy",
                        frequency: "3 times weekly",
                        notes: "FDA cleared for home use"
                    },
                    {
                        name: "Hair Transplant",
                        type: "FUE/FUT",
                        notes: "Surgical option for advanced cases"
                    }
                ]
            }
        },
        telogen: {
            name: "Telogen Effluvium",
            description: "Temporary hair loss condition where hair prematurely enters the telogen (resting) phase. Often triggered by stress, illness, or hormonal changes.",
            symptoms: [
                "Sudden increase in hair shedding",
                "Diffuse thinning",
                "No specific pattern",
                "Reversible condition",
                "Increased hair in shower drain",
                "Wider part line"
            ],
            causes: [
                "Physical stress",
                "Emotional stress",
                "Hormonal changes",
                "Nutritional deficiencies",
                "Medications",
                "Illness or surgery",
                "Rapid weight loss",
                "Childbirth",
                "Thyroid disorders"
            ],
            treatments: {
                topical: [
                    {
                        name: "Minoxidil 5%",
                        dosage: "1ml twice daily",
                        duration: "3-6 months",
                        notes: "Helps stimulate regrowth"
                    },
                    {
                        name: "Growth Factor Serum",
                        dosage: "Once daily",
                        duration: "3-6 months",
                        notes: "Supports hair follicle health"
                    }
                ],
                oral: [
                    {
                        name: "Iron Supplements",
                        dosage: "As prescribed",
                        notes: "If iron deficiency is present"
                    },
                    {
                        name: "Thyroid Medication",
                        dosage: "As prescribed",
                        notes: "If thyroid disorder is present"
                    }
                ],
                supplements: [
                    {
                        name: "Vitamin D",
                        dosage: "2000-4000 IU daily",
                        notes: "If deficiency is present"
                    },
                    {
                        name: "Zinc",
                        dosage: "50mg daily",
                        notes: "If deficiency is present"
                    },
                    {
                        name: "B Complex",
                        dosage: "As directed",
                        notes: "Supports overall hair health"
                    }
                ],
                lifestyle: [
                    {
                        name: "Stress Management",
                        recommendations: [
                            "Regular exercise",
                            "Meditation",
                            "Adequate sleep",
                            "Balanced diet"
                        ]
                    }
                ]
            }
        },
        alopeciaAreata: {
            name: "Alopecia Areata",
            description: "Autoimmune condition causing patchy hair loss. Can progress to total scalp hair loss (alopecia totalis) or complete body hair loss (alopecia universalis).",
            symptoms: [
                "Round or oval patches of hair loss",
                "Smooth scalp in affected areas",
                "Exclamation mark hairs",
                "Nail changes in some cases",
                "Sudden onset",
                "May affect eyebrows and eyelashes"
            ],
            causes: [
                "Autoimmune disorder",
                "Genetic predisposition",
                "Environmental triggers",
                "Stress",
                "Viral infections",
                "Allergies"
            ],
            treatments: {
                topical: [
                    {
                        name: "Corticosteroid Solution",
                        dosage: "Twice daily",
                        duration: "3-6 months",
                        notes: "Anti-inflammatory treatment"
                    },
                    {
                        name: "Anthralin",
                        dosage: "Once daily",
                        duration: "As prescribed",
                        notes: "Topical irritant therapy"
                    },
                    {
                        name: "Topical Immunotherapy",
                        dosage: "Weekly",
                        notes: "DPCP or SADBE treatment"
                    }
                ],
                oral: [
                    {
                        name: "Prednisone",
                        dosage: "As prescribed",
                        duration: "Short-term",
                        notes: "Systemic corticosteroid"
                    },
                    {
                        name: "Methotrexate",
                        dosage: "As prescribed",
                        duration: "Long-term",
                        notes: "Immunosuppressive medication"
                    }
                ],
                supplements: [
                    {
                        name: "Vitamin D",
                        dosage: "2000-4000 IU daily",
                        notes: "Immune system support"
                    },
                    {
                        name: "Zinc",
                        dosage: "50mg daily",
                        notes: "Immune system support"
                    }
                ],
                procedures: [
                    {
                        name: "Light Therapy",
                        frequency: "2-3 times weekly",
                        notes: "UVB or PUVA therapy"
                    }
                ]
            }
        },
        traction: {
            name: "Traction Alopecia",
            description: "Hair loss caused by prolonged tension on hair follicles, often due to tight hairstyles or hair extensions.",
            symptoms: [
                "Hair loss along hairline",
                "Pain or tenderness in affected areas",
                "Broken hairs",
                "Folliculitis",
                "Thinning in areas of tension"
            ],
            causes: [
                "Tight hairstyles",
                "Hair extensions",
                "Braids",
                "Ponytails",
                "Weaves",
                "Chemical treatments"
            ],
            treatments: {
                topical: [
                    {
                        name: "Anti-inflammatory Cream",
                        dosage: "As needed",
                        notes: "For inflammation"
                    }
                ],
                lifestyle: [
                    {
                        name: "Hairstyle Changes",
                        recommendations: [
                            "Avoid tight hairstyles",
                            "Use gentle hair ties",
                            "Limit chemical treatments",
                            "Regular scalp massage"
                        ]
                    }
                ]
            }
        },
        scarring: {
            name: "Scarring Alopecia",
            description: "Permanent hair loss caused by destruction of hair follicles and replacement with scar tissue.",
            symptoms: [
                "Permanent hair loss",
                "Shiny or smooth scalp",
                "Inflammation",
                "Pain or itching",
                "Redness or scaling"
            ],
            causes: [
                "Lichen planopilaris",
                "Frontal fibrosing alopecia",
                "Discoid lupus",
                "Burns",
                "Infections",
                "Trauma"
            ],
            treatments: {
                topical: [
                    {
                        name: "Corticosteroid Cream",
                        dosage: "Twice daily",
                        notes: "Anti-inflammatory"
                    }
                ],
                oral: [
                    {
                        name: "Hydroxychloroquine",
                        dosage: "As prescribed",
                        notes: "For autoimmune causes"
                    }
                ],
                procedures: [
                    {
                        name: "Hair Transplant",
                        notes: "Only if condition is stable"
                    }
                ]
            }
        }
    },
    labTests: {
        hormonePanel: [
            "Testosterone (Total and Free)",
            "DHT (Dihydrotestosterone)",
            "TSH, T3, T4",
            "Estradiol",
            "Progesterone",
            "FSH/LH"
        ],
        vitaminPanel: [
            "Vitamin D",
            "Ferritin",
            "Zinc",
            "B12",
            "Folate",
            "Vitamin A",
            "Vitamin E"
        ],
        bloodWork: [
            "Complete Blood Count (CBC)",
            "Iron Studies",
            "CMP (Comprehensive Metabolic Panel)",
            "CRP (C-Reactive Protein)",
            "ANA (Antinuclear Antibody)",
            "Thyroid Antibodies"
        ],
        additionalTests: [
            "Scalp Biopsy",
            "Trichogram",
            "Hair Pull Test",
            "Dermoscopy"
        ]
    },
    hairCycle: {
        anagen: {
            name: "Anagen Phase",
            description: "Active growth phase where hair cells divide rapidly",
            duration: "2-7 years",
            treatments: [
                "Minoxidil",
                "Growth factors",
                "PRP therapy",
                "Laser therapy",
                "Nutritional support"
            ]
        },
        catagen: {
            name: "Catagen Phase",
            description: "Transition phase where hair growth stops",
            duration: "2-3 weeks",
            treatments: [
                "Nutritional support",
                "Stress management",
                "Scalp massage",
                "Anti-inflammatory care"
            ]
        },
        telogen: {
            name: "Telogen Phase",
            description: "Resting phase before hair falls out",
            duration: "2-3 months",
            treatments: [
                "Reduce triggers",
                "Anti-inflammatory treatments",
                "Stress management",
                "Nutritional support"
            ]
        },
        exogen: {
            name: "Exogen Phase",
            description: "Shedding phase where hair falls out",
            duration: "Variable",
            treatments: [
                "Gentle hair care",
                "Anti-inflammatory scalp care",
                "Proper washing technique",
                "Avoid excessive brushing"
            ]
        }
    },
    prevention: {
        general: [
            "Maintain healthy diet",
            "Regular exercise",
            "Stress management",
            "Adequate sleep",
            "Gentle hair care",
            "Protect from UV damage"
        ],
        nutrition: [
            "Protein-rich diet",
            "Iron-rich foods",
            "Omega-3 fatty acids",
            "Antioxidant-rich foods",
            "Adequate water intake"
        ],
        hairCare: [
            "Gentle washing",
            "Avoid excessive heat",
            "Protective hairstyles",
            "Regular trims",
            "Scalp massage",
            "Avoid harsh chemicals"
        ]
    },
    trichoTest: {
        geneticMarkers: {
            androgenetic: {
                markers: ["AR", "SRD5A2", "ESR1", "ESR2"],
                recommendations: {
                    topical: [
                        {
                            name: "Minoxidil 5% with Growth Factors",
                            dosage: "1ml twice daily",
                            notes: "Enhanced with IGF-1 and FGF-7"
                        },
                        {
                            name: "Topical Finasteride 0.1%",
                            dosage: "Once daily",
                            notes: "DHT inhibitor with enhanced penetration"
                        }
                    ],
                    oral: [
                        {
                            name: "Finasteride 1mg",
                            dosage: "Daily",
                            notes: "DHT inhibitor"
                        },
                        {
                            name: "Dutasteride 0.5mg",
                            dosage: "Daily",
                            notes: "Stronger DHT inhibitor"
                        }
                    ]
                }
            },
            telogen: {
                markers: ["IL1B", "TNF", "VDR"],
                recommendations: {
                    topical: [
                        {
                            name: "Growth Factor Serum",
                            dosage: "Once daily",
                            notes: "Contains IGF-1, FGF-7, and VEGF"
                        },
                        {
                            name: "Anti-inflammatory Serum",
                            dosage: "Twice daily",
                            notes: "Contains adenosine and L-carnitine"
                        }
                    ],
                    oral: [
                        {
                            name: "MSM",
                            dosage: "1000mg daily",
                            notes: "Sulfur donor for hair growth"
                        },
                        {
                            name: "Lysine",
                            dosage: "500mg daily",
                            notes: "Amino acid for hair strength"
                        }
                    ]
                }
            }
        },
        personalizedTreatments: {
            topical: [
                {
                    name: "TrichoXidil",
                    components: ["IGF-1", "FGF-7", "VEGF"],
                    dosage: "Once daily",
                    notes: "Growth factor serum"
                },
                {
                    name: "DHT Inhibitor Serum",
                    components: ["Saw Palmetto", "Green Tea Extract", "Caffeine"],
                    dosage: "Twice daily",
                    notes: "Natural DHT inhibitors"
                }
            ],
            oral: [
                {
                    name: "Hair Growth Support",
                    components: ["Biotin", "MSM", "Lysine", "Zinc"],
                    dosage: "As directed",
                    notes: "Comprehensive hair support"
                }
            ]
        },
        labTests: {
            genetic: [
                "AR Gene Polymorphism",
                "SRD5A2 Gene Analysis",
                "ESR1/ESR2 Analysis",
                "IL1B/TNF Analysis",
                "VDR Gene Analysis"
            ],
            hormone: [
                "DHT Levels",
                "Testosterone (Total/Free)",
                "Estradiol",
                "Progesterone",
                "TSH/T3/T4"
            ],
            vitamin: [
                "Vitamin D",
                "Ferritin",
                "Zinc",
                "B12",
                "Folate"
            ]
        }
    }
}; 