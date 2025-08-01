import Header from "@/components/Header";
import VideoCard from "@/components/ViedoCard";
import { dummyCards } from "@/constants";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="adrian@domain.com"
        title="Adrian"
        userImg="/assets/images/dummy.jpg"
      />
     <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Page;
