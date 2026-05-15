import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="text-center my-20 ">
      <Image src="/assets/content-img/testimonial_1.jpg" alt="testimonial 1" width={170} height={170} className="mx-auto" />
      <h3 className="mt-5">Alex</h3>
      <p className="text-gray-500 mt-5 mx-auto max-w-[1000px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nihil hic incidunt, accusamus sapiente doloremque ullam vel inventore autem nam non culpa molestias delectus alias velit veritatis commodi aliquam! Nostrum?</p>

      <div className="grid grid-cols-3 gap-5 mt-5 w-35 mx-auto">
        <div className="border border-white p-2">
          <TiSocialFacebook />
        </div>
        <div className="border border-white p-2">
          <FaTwitter />
        </div>
        <div className="border border-white p-2">
          <FaSnapchatGhost />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
