import HeadComp from "@/layout/HeadComp";
import Chapters from "@/reusable components/chapters";

const ChaptersPage = () => {
  return (
    <>
      <HeadComp title="Women In DeFi || Chapters" />
      <main className="">
        <section className="pt-[80px] hero">
          <section className="md:pt-[113px] pt-[70px] pb-[29px] md:pb-[99px] md:justify-between flex flex-col md:flex-row gap-[38px] md:gap-0 md:items-center max-w-[1272px] md:w-[85%] w-[90%] mx-auto">
            <div className="md:w-[49%]">
              <h3 className="md:mb-[16px] mb-[10px] wow fadeInDown text-[#110138] font-[600] text-[24px] md:text-[40px] leading-[40px] md:leading-[52px]">
                Our Chapters Across The Globe
              </h3>
              <p className="text-[#666481] wow fadeIn text-[16px] md:text-[18px] font-[400] leading-[30px] md:leading-[26px]">
                Join our community and engage with over 3000+ fellow African
                women in the Web3 space, hailing from various corners of the
                continent.
              </p>
            </div>
            <figure className="relative bg-no-repeat bg-[url('/images/chapters-q.png')] bg-cover bg-center wow fadeIn h-[491px] rounded-[24px] md:rounded-[100px] overflow-hidden md:w-[45%] max-w-[540px]"></figure>
          </section>
        </section>
        <Chapters />
      </main>
    </>
  );
};

export default ChaptersPage;
