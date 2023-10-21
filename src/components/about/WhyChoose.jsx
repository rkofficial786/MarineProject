import { data } from "./whyChooseData";

const WhyChooseAPP = () => {
  return (
    <section className="bg-gray-100 py-16 my-[70px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Why Choose APP Engineering and Supplies?
          </h2>
          <p className="text-lg text-gray-700">
            Discover the difference with APP Engineering and Supplies – your
            partner in marine excellence. Let's navigate the seas together,
            setting new standards in quality, reliability, and service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div data-aos="zoom-in-up" className="text-center bg-white p-6 rounded-xl" key={index}>
              <div className="bg-gray-200 text-3xl rounded-full p-4 inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAPP;
