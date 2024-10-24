// src/Buku.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Buku = () => {
    const [bukus, setBukus] = useState([]);
    const [formData, setFormData] = useState({
        judul: '',
        penulis: '',
        kategori: '',
        penerbit: '',
        tahun_terbit: '',
        deskripsi: '',
        jumlah_salinan: 1,
    });

    // Fetch Bukus from the API
    useEffect(() => {
        const fetchBukus = async () => {
            const response = await axios.get('http://localhost:8000/api/bukus');
            setBukus(response.data);
        };

        fetchBukus();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/bukus', formData);
            setFormData({
                judul: '',
                penulis: '',
                kategori: '',
                penerbit: '',
                tahun_terbit: '',
                deskripsi: '',
                jumlah_salinan: 1,
            });
            // Fetch updated list of bukus
            const response = await axios.get('http://localhost:8000/api/bukus');
            setBukus(response.data);
        } catch (error) {
            console.error('Error adding Buku:', error);
        }
    };

    return (
        <div>
            <h1>Buku List</h1>
            <ul>
                {bukus.map((buku) => (
                    <li key={buku.id}>{buku.judul} by {buku.penulis}</li>
                ))}
            </ul>

            <h2>Add New Buku</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="judul"
                    placeholder="Judul"
                    value={formData.judul}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="penulis"
                    placeholder="Penulis"
                    value={formData.penulis}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="kategori"
                    placeholder="Kategori"
                    value={formData.kategori}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="penerbit"
                    placeholder="Penerbit"
                    value={formData.penerbit}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="tahun_terbit"
                    placeholder="Tahun Terbit"
                    value={formData.tahun_terbit}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="deskripsi"
                    placeholder="Deskripsi"
                    value={formData.deskripsi}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="jumlah_salinan"
                    placeholder="Jumlah Salinan"
                    value={formData.jumlah_salinan}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Buku</button>
            </form>
        </div>
    );
};

export default Buku;
