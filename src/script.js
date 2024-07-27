 //require('dotenv').config();

const apiKey ="tg_2172e93d-191b-419b-ac0f-543f43ebd7c3-dVyt1MAL5rHwPVxI2kqw9g";

document.addEventListener("DOMContentLoaded", function() {
    // Create Campaign
    const createCampaignForm = document.getElementById("createCampaignForm");
    if (createCampaignForm) {
        createCampaignForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(createCampaignForm);
            fetch('https://www.toingg.com/api/v3/create_campaign/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Campaign created successfully!");
                } else {
                    alert("Failed to create campaign.");
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Update Campaign
    const updateCampaignForm = document.getElementById("updateCampaignForm");
    if (updateCampaignForm) {
        updateCampaignForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const campaignId = document.getElementById("campaignId").value;
            const formData = new FormData(updateCampaignForm);

            fetch(`https://api.toingg.com/campaigns/${campaignId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Campaign updated successfully!");
                } else {
                    alert("Failed to update campaign.");
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Make a Call
    const makeCallForm = document.getElementById("makeCallForm");
    if (makeCallForm) {
        makeCallForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(makeCallForm);
            fetch('https://api.toingg.com/calls', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Call initiated successfully!");
                } else {
                    alert("Failed to initiate call.");
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Get Call Status
    const callStatusForm = document.getElementById("callStatusForm");
    if (callStatusForm) {
        callStatusForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const callId = document.getElementById("callId").value;

            fetch(`https://api.toingg.com/calls/${callId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("statusResult").textContent = `Call Status: ${data.status}`;
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Get Transcription
    const transcriptionForm = document.getElementById("transcriptionForm");
    if (transcriptionForm) {
        transcriptionForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const callId = document.getElementById("callId").value;

            fetch(`https://api.toingg.com/transcriptions/${callId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("transcriptionResult").textContent = `Transcription: ${data.transcription}`;
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Post Call Analysis
    const postCallAnalysisForm = document.getElementById("postCallAnalysisForm");
    if (postCallAnalysisForm) {
        postCallAnalysisForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const callId = document.getElementById("callId").value;

            fetch(`https://api.toingg.com/analysis/${callId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("analysisResult").textContent = `Analysis: ${JSON.stringify(data.analysis)}`;
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
