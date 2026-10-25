
function bukaUndangan() {
    const cover = document.getElementById('cover');
    cover.classList.add('hide');
}


document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const kehadiran = document.getElementById('kehadiran').value;
    const ucapan = document.getElementById('ucapan').value;
    
    const ucapanBaru = `
        <div class="card border-0 shadow-sm p-3 mb-2 bg-light">
            <div class="d-flex justify-content-between">
                <strong>${nama}</strong>
                <span class="badge ${kehadiran === 'Hadir' ? 'bg-success' : 'bg-danger'}">${kehadiran}</span>
            </div>
            <p class="small text-secondary mb-0 mt-2">${ucapan}</p>
        </div>
    `;
    
    document.getElementById('daftarUcapan').insertAdjacentHTML('afterbegin', ucapanBaru);
    this.reset();
});