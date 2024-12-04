let hasDownloaded = false;  // Track if the image has been downloaded already

        // Get the download button and link
        const downloadButton = document.getElementById('downloadButton');
        const downloadLink = document.getElementById('downloadLink');
        
        // Add an event listener to the download button
        downloadButton.addEventListener('click', function() {
            if (hasDownloaded) {
                // If the user has already downloaded the image, ask for confirmation
                const confirmDownload = confirm("You have already downloaded the image. Would you like to download it again?");
                
                if (confirmDownload) {
                    // Trigger the download again
                    downloadLink.click();
                }
            } else {
                // First time download, trigger the download
                downloadLink.click();
                hasDownloaded = true;  // Mark that the image has been downloaded
            }
        });