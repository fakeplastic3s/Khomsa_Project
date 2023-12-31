import { Card } from "flowbite-react";
import React from "react";

function Collection() {
  return (
    <div>
      <div className="w-full py-24 px-4">
        <div className="flex justify-center items-center gap-5  pb-5 ">
          <img src="/logo.png" alt="" width={150} />
          <h1 className="font-bold text-xl uppercase text-center">Collection</h1>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10 justify-center items-center ">
          <Card className="max-w-sm" imgSrc="/produk/1.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk Baru 1</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 13,4</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/2.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk Baru 2</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/3.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/1.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk Baru 1</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 13,4</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/2.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nama Produk Baru 2</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
          <Card className="max-w-sm" imgSrc="/produk/3.JPG" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia eaque odio tempora accusamus quibusdam modi aspernatur laboriosam eveniet facilis commodi dolor, sequi unde itaque, dolorem consectetur officiis dolores
              dignissimos.
            </p>
            <h6 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">$ 8,1</h6>
          </Card>
        </div>
        <div id="Location"></div>
      </div>
    </div>
  );
}

export default Collection;
