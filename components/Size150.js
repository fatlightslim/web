import Image from "next/image";

export default function Size150({
  data = {
    img: {
      src: "/img/sp3000/size.png",
      alt: "sp3000 size",
      width: 1000,
      height: 683,
    },
  },
}) {
  return (
    <div className="">
      <div className="relative py-12">
        <div className="relative max-w-7xl mx-auto sm:px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-white lg:rounded-lg sm:shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="p-4">
              <div className="lg:self-center">
                <div className="flex flex-col">
                  <div className=" overflow-x-auto ">
                    <div className="align-top inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border border-green-700">
                        <table className="min-w-full border border-green-700 text-center text-sm text-green-800 font-medium ">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                colSpan="2"
                                className="px-6 py-3 text-green-800 font-bold text-lg tracking-wider bg-white"
                              >
                                製品仕様
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            <tr>
                              <th className="py-2 border border-green-700">
                                型番
                              </th>
                              <td className="py-2 border border-green-700">
                                SP150
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                照射範囲
                              </th>
                              <td className="py-2 border border-green-700">
                                90cm x 90cm
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                スペクトラム
                              </th>
                              <td className="py-2 border border-green-700">
                                3000-3200nm
                                <br />
                                6000-6500nm
                                <br />
                                650-665nm
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                PPF
                              </th>
                              <td className="py-2 border border-green-700">
                                561μmol/s
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                LEDチップ
                              </th>
                              <td className="py-2 border border-green-700">
                                322個
                                <br />
                                SMD LED
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                消費電力
                              </th>
                              <td className="py-2 border border-green-700">
                              134W±5%@AC120V
                                <br />
                                139W±5%@AC240V
                              
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                サイズ
                              </th>
                              <td className="py-2 border border-green-700">
                              598mm x 80mm x 50mm
                                <br />
                                1.9kg
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 "> */}
            <div className="sm:mt-12">
              <Image
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
                // className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
