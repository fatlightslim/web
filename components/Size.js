import Image from "next/image";

export default function Size({
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
                                SP3000
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                照射範囲
                              </th>
                              <td className="py-2 border border-green-700">
                                150cm x 60cm
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                スペクトラム
                              </th>
                              <td className="py-2 border border-green-700">
                                380-410nm
                                <br />
                                650-66nm
                                <br />
                                730-740nm
                                <br />
                                2800K-3000K
                                <br />
                                4800-5000K
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                PPF
                              </th>
                              <td className="py-2 border border-green-700">
                                847μmol/s
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                LEDチップ
                              </th>
                              <td className="py-2 border border-green-700">
                                957個
                                <br />
                                SAMSUNG LM301B
                                <br />
                                OSRAM 3030
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                消費電力
                              </th>
                              <td className="py-2 border border-green-700">
                                300W±5%@AC120V
                                <br />
                                293W±5%@AC240V
                                <br />
                                292W±5%@AC277V
                              </td>
                            </tr>
                            <tr>
                              <th className="py-2 border border-green-700">
                                サイズ
                              </th>
                              <td className="py-2 border border-green-700">
                                1080mm x 80mm x 103mm
                                <br />
                                4.6kg
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
