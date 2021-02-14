import Layout from "../../components/Layout"
import Blog from "../../components/LayoutBlog"

export default function Posts(params) {
  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              植物用ライトの選び方
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              FATLightSLIMのスタッフが経験してきた室内LED栽培の記録です。オタク達がこれまで使ってきたライトを紹介します！
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/strawberry_1024x1024.jpg?v=1602919286"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/posts/how-to-choose-your-grow-light" className="hover:underline">
                      How to choose your grow light
                    </a>
                  </p>
                  <a href="/posts/how-to-choose-your-grow-light" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      スタッフ自腹レビュー
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                    「植物用ライトにはどんな種類があるのか知りたい」「自宅の栽培規模にあった植物用 LED ライトを探している」この記事はそんな方へ向けて書いています。
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {/* <a href="#"> */}
                      <span className="sr-only">オカダ</span>
                      <img
                        className="h-10 w-10 rounded-full border"
                        src="/img/Bender_Rodriguez.png"
                        alt=""
                      />
                    {/* </a> */}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {/* <a href="#" className="hover:underline"> */}
                        オカダ
                      {/* </a> */}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-10">11/10/2020</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="/img/whatisppfd.png"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/posts/ishikawa-in-da-house/what-is-ppfd" className="hover:underline">
                      Ishikawa in da house
                    </a>
                  </p>
                  <a href="/posts/ishikawa-in-da-house/what-is-ppfd" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      PPFDってなんだ？
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                    とりあえず何から書けばいいのかと考えましたが、まず会社側の人間でありながらこの植物用ライトについてあまりに知識がないんじゃないかと思いまして、自分の勉強用にもこのライトに関する『ワード』といったものを紹介説明させていただきたいと思います。
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">石川</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/img/birdman_620x350.jpg"
                        alt="birdman"
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">
                        石川
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-02-12">2/3/2021</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
