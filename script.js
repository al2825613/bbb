
function getQualities() {
    const url = document.getElementById('videoURL').value;
    fetch('apiHandler.php?url=' + encodeURIComponent(url))
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('qualityOptions');
            container.innerHTML = '';
            if (data && data.length) {
                data.forEach(q => {
                    const a = document.createElement('a');
                    a.href = q.url;
                    a.textContent = `تحميل بجودة ${q.quality}`;
                    a.className = 'downloadLink';
                    a.target = '_blank';
                    container.appendChild(a);
                });
            } else {
                container.innerHTML = 'لم يتم العثور على جودات.';
            }
        });
}
