export default function Faq({
  data = [
    {
      q: "支払い方法を教えてください",
      a: "クレジットカード、代金引換がお選びいただけます",
    },
    {
      q: "配送について教えてください",
      a:
        // "在庫がある商品は即日発送します。\nご注文から一週間以内の到着となります。",
        "MARS HYDRO社の製品は海外工場から直送もしくは大阪市の倉庫からの発送となります。配送コストを抑え低価格で商品を提供するため、配送コストを抑え低価格で商品を提供するため、ご注文から到着まで7~10日程度のお時間を頂戴することをあらかじめご了承くださいますようお願いいたします。"
    },
    {
      q: "匿名での配送はできますか？",
      a: "はい、可能です。|メルカリ|でも販売してます",
      link: "https://www.mercari.com/jp/u/277323469/",
    },
    {
      q: "本当に安全ですか？",
      a: `当店はMARS HYDROの公式代理店です。\n全ての商品に3年間の保証がつきます。`,
    },
    {
      q: "TSシリーズとSPシリーズの違いは何ですか？",
      a: "SPシリーズはTSシリーズの基本的な機能に加え、\n防水・SAMSUNGチップ・省エネ性能を改良した最新モデルになります。"
    }
  ],
}) {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-indigo-900">
        <h2 className="text-3xl font-extrabold ">よくある質問</h2>
        <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            {data.map((v) => {
              return (
                <div key={v.q}>
                  <dt className="text-lg leading-6 font-medium text-indigo-700">
                    {v.q}
                  </dt>
                  <dd className="mt-2 text-base text-indigo-900">{v.a}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
