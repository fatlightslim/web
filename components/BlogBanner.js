export default function BlogBanner(params) {
  return (
    <div className="bg-pink-500 text-white rounded-3xl p-4">
      <div className="grid md:grid-cols-3 mx-auto max-w-screen-lg">
        <div className="md:col-span-1">
          <div
            className="rounded-full bg-white flex content-center flex-wrap mx-auto"
            style={{
              width: 240,
              height: 240,
            }}
          >
            <span className="text-pink-500 text-4xl font-extrabold mx-auto text-center">
              スタッフ
              <br />
              自腹レビュー
            </span>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-3xl md:text-6xl font-extrabold leading-none tracking-tight whitespace-no-wrap mt-4">
            植物用ライトの選び方
          </h3>
          <p className="text-white font-bold text-xl my-4 text-left tracking-tighter leading-1">
            {process.env.site.name}
            のスタッフが経験してきた室内LED栽培の記録です。<br />オタク達がこれまで使ってきたライトを紹介します！
          </p>
          <a
            href="https://fatlightslim.com/blogs/staff/how-to-choose-your-grow-light"
            // className="px-4 py-2 rounded bg-yellow-500 text-black font-extrabold text-2xl"
            className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold px-6 py-2 inline-block transition duration-500 ease-in-out cursor-pointer text-xl text-black"
          >
            詳細を見る
          </a>
        </div>
      </div>
    </div>
  )
}
