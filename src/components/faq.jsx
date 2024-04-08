import LeafletMap from "./map";

const FAQ = () => {
  return (
    <div className="container mx-auto py-32 gap-16 flex flex-col">
      <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
        FAQs
      </p>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <LeafletMap
            markers={[
              {
                name: "Монгол улс",
                latitude: 47.9201606,
                longitude: 106.9154933,
              },
            ]}
          />
        </div>
        <div className="col-span-3 text-white flex justify-center items-center">
          FAQ
        </div>
      </div>
    </div>
  );
};

export default FAQ;
