import { PrismaClient } from "@prisma/client";
import AddCategories from "./addCategories";
import DeleteCategories from "./deleteCategories";
// import { useEffect, useState } from "react";

const prisma = new PrismaClient()

async function getCategories() {
   const res = await prisma.categories.findMany({
      select: {
         id: true,
         categories: true,
         max_nominal: true
      }
   });

   return res;
}

export default async function Categories() {
   const categories = await getCategories();
   // const [categories, setCategories] = useState([]);
   // const [total, setTotal] = useState(0);

   // useEffect(() => {
   //    async function fetchData() {
   //       const fetchedCategories = await getCategories();
   //       setCategories(fetchedCategories);

   //       const total = fetchedCategories.reduce((accumulator, category) => accumulator + category.max_nominal, 0);

   //       setTotal(total);
   //    }

   //    fetchData();
   // }, []);

   return (
      <>
         <div className="flex justify-between mb-4 border-b-2 pb-3">
            <h1 className="text-3xl font-bold">Kategori Pengeluaran</h1>
            <AddCategories />
         </div>
         <div className="overflow-x-auto">

            <table className="table w-full table-zebra border">
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Kategori</th>
                     <th>Max Nominal</th>
                     <th className="text-center">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {categories.map((category, index) => (
                     <tr key={category.id + index}>
                        <td>{index + 1}</td>
                        <td>{category.categories}</td>
                        <td>Rp. {category.max_nominal.toLocaleString()},-</td>
                        <td className="flex gap-2 justify-center">
                           <button className="btn btn-disabled btn-sm capitalize" title="Fiturnya belum shappp!:V">Edit</button>
                           <DeleteCategories category={category}/>
                        </td>
                     </tr>
                  ))}
               </tbody>
               {/* <tfoot>
                  <tr>
                     <th colSpan={2}>Total</th>
                     <th>{total}</th>
                  </tr>
               </tfoot> */}
            </table>
         </div>
         <div>
         </div>
      </>
   )
}
