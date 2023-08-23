"use client";
import { useState, SyntheticEvent } from "react";
// import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteCategories({ category }: { category: any }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleDelete = async (e: SyntheticEvent) => {
    e.preventDefault();
    alert("Fitur belum ada ya awkwkwk")
    router.refresh();
    setIsOpen(false);
  }

  return (
    <>
      <button className="btn btn-error btn-sm capitalize" onClick={handleModal}>Delete</button>

      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Apakah anda yakin ingin menghapus?</h3>
          <h1 className="text-2xl text-center mt-3 bg-gray-200 dark:bg-neutral py-2 rounded-xl">&quot;{category.categories}&quot;</h1>

          <div className="flex gap-2 justify-center mt-5">
            <button type="button" className="btn btn-neutral btn-sm" onClick={handleModal}>Batal</button>
            <button type="button" className="btn btn-error btn-sm" onClick={handleDelete}>Hapus</button>
          </div>
        </div>
      </div>
    </>
  )
}
