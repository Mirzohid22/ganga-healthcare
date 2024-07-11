import Image from "next/image";
import fluttor from "../../public/futtor.png";
import CustomButton from "./common/CustomButton";

export default function Form() {
  return (
    <section className="w-full max-w-[var(--max-width)] flex items-start justify-start gap-20 my-20">
      <div>
        <Image src={fluttor} width={539} height={632} alt="Form image" />
      </div>
      <form className="flex flex-col items-start justify-start max-w-[400px] gap-10">
        <h3 className="text-[24px] font-bold leading-[29.05px]">
          Get In Touch
        </h3>
        <p className="text-[15px] font-normal leading-[18.15px]">
          Your email address will not be published. Required fields are marked*
        </p>
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <div className="w-full flex flex-col items-start justify-start gap-3 text-[15px] leading-[18.15px]">
            <label htmlFor="name" className="font-semibold">
              Your name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nodir Yuldashev"
              className="max-w-[400px] w-full h-[50px] bg-[var(--secondary)] rounded-[10px] px-3"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 text-[15px] leading-[18.15px]">
            <label htmlFor="phone" className="font-semibold">
              Phone*
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="+998 (--) --- -- --"
              className="max-w-[400px] w-full h-[50px] bg-[var(--secondary)] rounded-[10px] px-3"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 text-[15px] leading-[18.15px]">
            <label htmlFor="comment" className="font-semibold">
              Comment*
            </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Write your comment"
              className="max-w-[400px] w-full h-[150px] bg-[var(--secondary)] rounded-[10px] px-3 py-0"
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-4 h-4 bg-[#D9D9D9] rounded-[3px]"
            />
            <label htmlFor="terms">
              I accept all <b>terms & conditions.</b>
            </label>
          </div>
        </div>
        <CustomButton type="submit" variant="primary">
          Отправить сейчас
        </CustomButton>
      </form>
    </section>
  );
}
