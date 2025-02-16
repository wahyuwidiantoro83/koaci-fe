"use client";
import Layout from "@/components/layout";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { projects } from "@/data/dummy";

const chunkedData = (array = [], size) => {
  let result = [];
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    result.push(array.slice(i * size, i * size + size));
  }
  return result;
};

const Project = (props) => {
  const processedDataProjects = chunkedData(projects, 3);

  return (
    <>
      <Layout>
        <div className="flex items-end w-full px-4 pb-12 lg:px-24 h-56 bg-gradient-to-r from-[#1E74D7] from-[0%] via-[#1F98DB] via-[54%] to-[#1EE0B3] to-100%">
          <h1 className="text-xl md:text-3xl text-white font-normal">
            Proyek Yang Telah Kami Selesaikan
          </h1>
        </div>
        <div className="flex flex-col w-full px-4 py-16 lg:px-24">
          <h2 className="text-2xl md:text-2xl font-normal mb-8">
            Proyek Terpilih dengan klien <br></br> terbaik kami
          </h2>
          <div className="flex flex-col gap-10 lg:gap-16 py-8">
            {processedDataProjects.map((val, idx) => {
              return (
                <>
                  <div
                    className={`h-1 w-full ${idx === 0 ? `hidden md:block` : `hidden`} bg-gray-200`}
                  ></div>
                  <div className="flex flex-col md:flex-row w-full justify-between gap-10 lg:gap-16">
                    {val.map((value, index) => {
                      return (
                        <div className="flex w-full md:w-[30%] flex-col gap-4">
                          <div className="w-full aspect-square overflow-hidden">
                            <Image
                              className="w-full h-full object-cover"
                              src={value.srcImg}
                              alt={value.title}
                            />
                          </div>
                          <div className="flex justify-between">
                            <p className="text-lg">{value.title}</p>
                            <a href="#">
                              <RiArrowRightUpLine className="w-8 h-8" />
                            </a>
                          </div>
                          <div className="flex gap-6">
                            <div className="flex flex-col">
                              <p>Tahun</p>
                              <p className="font-light text-sm">{value.year}</p>
                            </div>
                            <div className="flex flex-col">
                              <p>Bouwheer</p>
                              <p className="font-light text-sm">{value.client}</p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <p>Deskripsi</p>
                            <p className="font-light text-sm">{value.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-1 w-full hidden md:block bg-gray-200"></div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Project;
