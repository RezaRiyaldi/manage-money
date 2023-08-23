"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddCategories() {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [maxNominal, setMaxNominal] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post('api/categories', {
      categories: category,
      max_nominal: Number(maxNominal)
    });

    setCategory('');
    setMaxNominal('');
    router.refresh(); 
    setIsOpen(false);
  }

  return (
    <>
      <button className="btn btn-success btn-sm capitalize" onClick={handleModal}>+ Tambah</button>

      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Tambah Kategori Baru</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label htmlFor="" className="label font-bold">Kategori</label>
              <input type="text" className="input input-bordered" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Kategori Baru" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="" className="label font-bold">Nominal Maksimal</label>
              <input type="number" className="input input-bordered" value={maxNominal} onChange={(e) => setMaxNominal(e.target.value)} placeholder="Nominal Maksimal" />
            </div>
            <div className="modal-action border-t pt-5 border-t-slate-700">
              <button type="button" className="btn btn-neutral btn-sm" onClick={handleModal}>Batal</button>
              <button type="submit" className="btn btn-success btn-sm">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
