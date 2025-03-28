// Initialize progress bar
function updateProgress(step) {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${step * 25}%`;
}

// Update symptoms list when hair type changes
document.getElementById('hairType').addEventListener('change', function() {
    const type = this.value;
    const symptomsList = document.getElementById('symptomsList');
    symptomsList.innerHTML = '';

    if (type && hairLossData.types[type]) {
        hairLossData.types[type].symptoms.forEach(symptom => {
            const div = document.createElement('div');
            div.className = 'form-check';
            div.innerHTML = `
                <input class="form-check-input" type="checkbox" value="${symptom}" id="symptom${symptom.replace(/\s+/g, '')}">
                <label class="form-check-label" for="symptom${symptom.replace(/\s+/g, '')}">
                    ${symptom}
                </label>
            `;
            symptomsList.appendChild(div);
        });
    }
});

function generateDiagnosis() {
    const patientName = document.getElementById('patientName').value;
    const hairType = document.getElementById('hairType').value;
    const duration = document.getElementById('duration').value;

    if (!patientName || !hairType) {
        alert('Please fill in all required fields');
        return;
    }

    const typeData = hairLossData.types[hairType];
    const diagnosisOutput = document.getElementById('diagnosisOutput');
    
    diagnosisOutput.innerHTML = `
        <div class="treatment-card">
            <h5>Diagnosis Summary</h5>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Condition:</strong> ${typeData.name}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Description:</strong> ${typeData.description}</p>
        </div>
        <div class="treatment-card">
            <h5>Causes</h5>
            <ul class="cause-list">
                ${typeData.causes.map(cause => `
                    <li><i class="fas fa-exclamation-circle"></i>${cause}</li>
                `).join('')}
            </ul>
        </div>
        <div class="treatment-card">
            <h5>Treatment Plan</h5>
            ${Object.entries(typeData.treatments).map(([type, treatments]) => `
                <div class="treatment-type">
                    <h6>${type.charAt(0).toUpperCase() + type.slice(1)} Treatments</h6>
                    ${treatments.map(treatment => `
                        <div class="treatment-details">
                            <p><strong>${treatment.name}</strong></p>
                            <p>Dosage: ${treatment.dosage}</p>
                            <p>Duration: ${treatment.duration || 'As prescribed'}</p>
                            <p>Notes: ${treatment.notes}</p>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
        ${typeData.treatments.procedures ? `
            <div class="procedure-card">
                <h5>Procedures</h5>
                ${typeData.treatments.procedures.map(procedure => `
                    <div class="treatment-details">
                        <p><strong>${procedure.name}</strong></p>
                        <p>Frequency: ${procedure.frequency || 'As needed'}</p>
                        <p>Notes: ${procedure.notes}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}
        ${typeData.treatments.lifestyle ? `
            <div class="lifestyle-recommendations">
                <h5>Lifestyle Recommendations</h5>
                <ul class="lifestyle-list">
                    ${typeData.treatments.lifestyle[0].recommendations.map(rec => `
                        <li><i class="fas fa-check-circle"></i>${rec}</li>
                    `).join('')}
                </ul>
            </div>
        ` : ''}
        <div class="treatment-card">
            <h5>Hair Cycle Information</h5>
            ${Object.entries(hairLossData.hairCycle).map(([phase, data]) => `
                <div class="hair-cycle-card">
                    <h5>${data.name}</h5>
                    <p><strong>Description:</strong> ${data.description}</p>
                    <p><strong>Duration:</strong> ${data.duration}</p>
                    <p><strong>Recommended Treatments:</strong></p>
                    <ul>
                        ${data.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        <div class="prevention-card">
            <h5>Prevention Recommendations</h5>
            <div class="row">
                <div class="col-md-4">
                    <h6>General</h6>
                    <ul class="prevention-list">
                        ${hairLossData.prevention.general.map(item => `
                            <li><i class="fas fa-shield-alt"></i>${item}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6>Nutrition</h6>
                    <ul class="prevention-list">
                        ${hairLossData.prevention.nutrition.map(item => `
                            <li><i class="fas fa-utensils"></i>${item}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6>Hair Care</h6>
                    <ul class="prevention-list">
                        ${hairLossData.prevention.hairCare.map(item => `
                            <li><i class="fas fa-cut"></i>${item}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    document.getElementById('outputSection').style.display = 'block';
    updateProgress(1);
}

function generatePrescription() {
    const patientName = document.getElementById('patientName').value;
    const hairType = document.getElementById('hairType').value;
    const prescriptionOutput = document.getElementById('prescriptionOutput');
    
    if (!hairType) {
        alert('Please select a hair loss type first');
        return;
    }

    const typeData = hairLossData.types[hairType];
    
    prescriptionOutput.innerHTML = `
        <div class="prescription-section">
            <h5>Prescription</h5>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Condition:</strong> ${typeData.name}</p>
            <hr>
            <div class="prescription-items">
                ${Object.entries(typeData.treatments).map(([type, treatments]) => `
                    <div class="treatment-type">
                        <h6>${type.charAt(0).toUpperCase() + type.slice(1)} Medications</h6>
                        ${treatments.map(treatment => `
                            <div class="treatment-details">
                                <p><strong>${treatment.name}</strong></p>
                                <p>Dosage: ${treatment.dosage}</p>
                                <p>Duration: ${treatment.duration || 'As prescribed'}</p>
                                <p>Notes: ${treatment.notes}</p>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    updateProgress(2);
}

function generateLabRecommendations() {
    const labsOutput = document.getElementById('labsOutput');
    
    labsOutput.innerHTML = `
        <div class="lab-recommendations">
            <h5>Recommended Laboratory Tests</h5>
            ${Object.entries(hairLossData.labTests).map(([category, tests]) => `
                <div class="treatment-type">
                    <h6>${category.charAt(0).toUpperCase() + category.slice(1)}</h6>
                    <ul>
                        ${tests.map(test => `<li>${test}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;

    updateProgress(3);
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(20);
    doc.text('Hair Care Diagnostic Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Patient: ${document.getElementById('patientName').value}`, 20, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
    
    const hairType = document.getElementById('hairType').value;
    const typeData = hairLossData.types[hairType];
    
    // Add diagnosis
    doc.setFontSize(14);
    doc.text('Diagnosis', 20, 70);
    doc.setFontSize(12);
    doc.text(`Condition: ${typeData.name}`, 20, 80);
    doc.text(`Description: ${typeData.description}`, 20, 90);
    
    // Add treatment plan
    doc.setFontSize(14);
    doc.text('Treatment Plan', 20, 110);
    doc.setFontSize(12);
    
    let yPos = 120;
    Object.entries(typeData.treatments).forEach(([type, treatments]) => {
        doc.text(`${type.charAt(0).toUpperCase() + type.slice(1)} Treatments:`, 20, yPos);
        yPos += 10;
        treatments.forEach(treatment => {
            doc.text(`- ${treatment.name}`, 30, yPos);
            yPos += 10;
            doc.text(`  Dosage: ${treatment.dosage}`, 40, yPos);
            yPos += 10;
            doc.text(`  Duration: ${treatment.duration || 'As prescribed'}`, 40, yPos);
            yPos += 10;
        });
    });
    
    // Add prevention recommendations
    doc.setFontSize(14);
    doc.text('Prevention Recommendations', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    hairLossData.prevention.general.forEach(item => {
        doc.text(`- ${item}`, 30, yPos);
        yPos += 10;
    });
    
    // Save PDF
    doc.save('hair-care-diagnostic-report.pdf');
    
    updateProgress(4);
} 