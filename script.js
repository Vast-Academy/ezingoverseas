document.addEventListener('DOMContentLoaded', function () {
    // Check the approval status from the database
    checkApprovalStatus().then(isApproved => {
        const currentUrl = window.location.href;
        const excludedPaths = ["clients/", "clients/index.html"];

        // Check if the current URL contains any of the excluded paths
        const isExcluded = excludedPaths.some(path => currentUrl.includes(path));

        if (!isApproved && !isExcluded) {
            createApproveButton();
        }
    });
});

async function createApproveButton() {
    const button = document.createElement('button');
    let db = firebase.database();

    button.textContent = 'Approve The Website';
    button.style.position = 'fixed';
    button.style.top = '30%';
    button.style.left = '50%';
    button.style.width = '250px';
    button.style.height = '50px';
    button.style.backgroundColor = 'white';
    button.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
    button.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
    button.style.color = 'black';
    button.style.border = 'none';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.fontWeight = 'bold';
    button.style.zIndex = '99999999999';
    button.style.cursor = 'pointer';

    try {
        let dataSrc = await db.ref("project/EzingOverseas").once('value');
        let data = dataSrc.val();
        if (data != null) {
            console.log(data.approveWebsite);
            if (data.approveWebsite == true) {
                console.log("hi");
                button.style.display = 'none';
            }
        }
    } catch (e) {
        console.error("Error fetching data: ", e);
        return false;
    }

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#D10363';
        button.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
        button.style.color = 'white';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'white';
        button.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
        button.style.color = 'black';
    });

    document.body.appendChild(button);

    button.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'white';
        modal.style.padding = '20px';
        modal.style.borderRadius = '5px';
        modal.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
        modal.style.zIndex = '9999999';

        const confirmationText = document.createElement('p');
        confirmationText.textContent = "Are you sure you want to Approve the Website?";
        confirmationText.style.fontSize = '18px';
        confirmationText.style.fontWeight = 'bold';
        confirmationText.style.marginBottom = '20px';

        const yesButton = document.createElement('button');
        yesButton.textContent = "Yes";
        yesButton.style.width = '100px';
        yesButton.style.height = '40px';
        yesButton.style.backgroundColor = '#97BE5A';
        yesButton.style.color = 'white';
        yesButton.style.border = 'none';
        yesButton.style.borderRadius = '5px';
        yesButton.style.cursor = 'pointer';
        yesButton.style.marginRight = '10px';
        yesButton.style.fontSize = '16px';
        yesButton.style.fontWeight = 'bold';
               yesButton.addEventListener('click', () => {
            const uniquePassword = '6233'; // Set your unique password here
            const userPassword = prompt('Please enter the password to approve:');
            if (userPassword === uniquePassword) {
                approveWebsite().then(() => {
                    updateUIAfterApproval();
                    modal.remove();
                    button.remove();
                }).catch(error => {
                    console.error('Error approving the website:', error);
                });
            } else {
                alert('Wrong password! Please enter the correct password.');
            }
        });

        const noButton = document.createElement('button');
        noButton.textContent = "No";
        noButton.style.width = '100px';
        noButton.style.height = '40px';
        noButton.style.backgroundColor = '#C0392B';
        noButton.style.color = 'white';
        noButton.style.border = 'none';
        noButton.style.borderRadius = '5px';
        noButton.style.cursor = 'pointer';
        noButton.style.fontSize = '16px';
        noButton.style.fontWeight = 'bold';
        noButton.addEventListener('click', () => {
            modal.remove();
        });

        modal.appendChild(confirmationText);
        modal.appendChild(yesButton);
        modal.appendChild(noButton);
        document.body.appendChild(modal);
    });
}

// Function to check approval status from the database
function checkApprovalStatus() {
    let db = firebase.database();
    return db.ref("project/EzingOverseas").once('value').then(snapshot => {
        const data = snapshot.val();
        return data && Object.values(data).some(item => item["Approved The Website"]);
    }).catch((error) => {
        console.error("Error fetching data: ", error);
        return false;
    });
}

// Function to approve the website
function approveWebsite() {
    return new Promise((resolve, reject) => {
        let db = firebase.database();
        let data = {
            "approveWebsite": true
        };

        db.ref("project/EzingOverseas").set(data).then(() => {
            console.log("Data saved successfully");
            window.location.href = "https://www.vacomputers.com/projects/";

            fetch('https://vacomputers-com-client-api.vercel.app/updateProject', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pro_id: '00016', 
                    progress: '8' 
                })
            }).then(response => response.json())
                .then(data => {
                    if (data.status === "success") {
                        console.log("Project node updated successfully:", data);
                        resolve();
                    } else {
                        console.error("Error updating project node:", data);
                        reject(data);
                    }
                }).catch(error => {
                    console.error("Error updating project node:", error);
                    reject(error);
                });
        }).catch((error) => {
            console.error("Error saving data: ", error);
            reject(error);
        });
    });
}



