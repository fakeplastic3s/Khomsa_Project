import React from "react";

function NewCollection() {
  return (
    <div className="w-full bg-slate-50 py-24 px-4">
      <h1 className="font-bold pb-5 text-xl uppercase text-center">New Collection</h1>

      <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10 justify-center items-center ">
        <img src="/produk/1.webp" alt="" width={"25%"} />
        <img src="/produk/2.webp" alt="" width={"25%"} />
        <img src="/produk/3.webp" alt="" width={"25%"} />
        <img src="/produk/1.webp" alt="" width={"25%"} />
        <img src="/produk/2.webp" alt="" width={"25%"} />
        <img src="/produk/3.webp" alt="" width={"25%"} />
      </div>
      <div id="Collection"></div>
    </div>
  );
}

export default NewCollection;
