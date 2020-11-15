export default function BlogBanner(params) {
  return (
    <div className="bg-pink-500 text-white text-center rounded-3xl p-4 md:py-8">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div
            className="rounded-full bg-white flex content-center flex-wrap mx-auto"
            style={{
              width: 200,
              height: 200,
            }}
          >
            <span className="text-pink-500 text-3xl font-bold mx-auto">
              スタッフ
              <br />
              自腹レビュー
            </span>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl inline-bold font-extrabold">
            植物用ライトの選び方
          </h3>
          <p className="text-yellow text-xl my-4">
            LEDオタク達がこれまで使ってきたライトを紹介します！
          </p>
          <a
            href="https://fatlightslim.com/blogs/staff/how-to-choose-your-grow-light"
            className="px-4 py-2 rounded bg-white text-pink-500 font-bold"
          >
            詳細を見る
          </a>
        </div>
      </div>
    </div>
  )
}
