document.getElementById('form-register').addEventListener('submit', (event) => {

    event.preventDefault()

    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const nomor = document.getElementById('nomor').value
    const pesan = document.getElementById('pesan').value
    const emailKontak = document.getElementById('emailKontak').checked
    const nomorKontak = document.getElementById('nomorKontak').checked
    if (nama.length < 5) 
    {
        alert('Nama harus lebih dari 5 huruf!')
        return
    }

    let space = 0;
    for(let i = 0; i < nama.length; i++)
    {
        if(nama[i] == ' ')
        {
            space++
        }
    }

    if (space < 1) 
    {
        alert('Nama harus dua kata!')
        return
    }

    if (!email.endsWith('@gmail.com')) 
    {
        alert('Email harus berakhir @gmail.com!')
        return
    }

    let num = 0;
    
    for(let i = 0; i < nomor.length; i++)
    {
        if(isNaN(nomor[i]) != 0)
        {
            num++
        }
    }
    
    if(num != 0)
    {
        alert('Nomor harus angka semua!')
        return
    }

    if(nomor.length < 10 || nomor.length > 12)
    {
        alert('Nomor harus 10 sampai 12 angka!')
        return
    }

    if(pesan.length < 10)
    {
        alert('Pesan harus minimal 10 huruf!')
        return
    }

    if (!emailKontak && !nomorKontak) 
    {
        alert('Harus memilih minimal salah satu jenis preferensi kontak!')
        return
    }
    
    alert('Pesan berhasil')
    window.location.href = 'beranda.html'
})