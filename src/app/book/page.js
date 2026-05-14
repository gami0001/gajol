import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Image from "next/image";

const Book = () => {
  return (
    <div>
      <Nav />
      <Hero text="Book table" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20 mx-30">
        {["/assets/table/table_1.png", "/assets/table/table_1.png", "/assets/table/table_2.png", "/assets/table/table_1.png", "/assets/table/table_3.png", "/assets/table/table_1.png", "/assets/table/table_1.png", "/assets/table/table_2.png", "/assets/table/table_1.png", "/assets/table/table_3.png", "/assets/table/table_1.png", "/assets/table/table_1.png", "/assets/table/table_2.png", "/assets/table/table_1.png", "/assets/table/table_3.png"].map((src, index) => (
          <div key={index} className="relative flex items-center justify-center">
            <Image src={src} alt={`table ${index + 1}`} width={200} height={20} />

            <span className="absolute font-bold text-m">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
