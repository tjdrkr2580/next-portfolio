import Animation from "./../Animation";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          "Hello World!"
          <br />
          I'm Kim Tae Hyun.
        </h1>
        <p className="mb-8 leading-relaxed">
          스며들어 하여도 뼈 따뜻한 능히 인간의 자신과 현저하게 것이다. 옷을
          같지 희망의 청춘의 지혜는 튼튼하며, 있으며, 피가 위하여서. 이성은
          열매를 만천하의 그들은 같이, 그들에게 얼음에 것이다. 무엇을 이상을
          방황하였으며, 과실이 끓는 같으며, 찬미를 청춘을 교향악이다. 있는 같이
          인간에 피는 설레는 말이다. 용감하고 동력은 투명하되 일월과 피가 청춘이
          역사를 것이다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
