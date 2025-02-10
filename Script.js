function convertImages() {
    const files = document.getElementById('fileInput').files;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (files.length === 0) {
        alert('Please select images to convert.');
        return;
    }

    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) {
            alert(`Skipping ${file.name} - Not an image.`);
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.maxWidth = '200px';
            img.style.height = 'auto';
            img.style.margin = '10px';
            img.style.borderRadius = '5px';  // Adds a smooth look
            img.style.boxShadow = '0px 4px 8px rgba(255, 255, 255, 0.2)';

            outputDiv.appendChild(img);
            
            const link = document.createElement('a');
            link.setAttribute('href', event.target.result);
            link.setAttribute('download', file.name);
            link.innerText = 'Download';
            link.style.display = 'block';
            link.style.color = '#6200ea';
            link.style.fontWeight = 'bold';
            link.style.marginTop = '5px';

            outputDiv.appendChild(link);
        };

        reader.onerror = function() {
            alert(`Error reading file: ${file.name}`);
        };
    });
}
