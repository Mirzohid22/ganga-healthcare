import Image from "next/image";
import instagram from "../../public/instagram.png";
import facebook from "../../public/facebook.png";
import whatsapp from "../../public/whatsapp.png";

export default function Footer() {
  return (
    <footer className="w-full max-w-[var(--max-width)] h-[420px] bg-[#F7F7F7] rounded-[10px] p-[70px] flex justify-between items-start">
      <div className="flex flex-col items-start justify-start gap-7">
        <h3 className="font-bold text-[24px] leading-[29.05px]">Contact us</h3>

        <div className="font-normal text-[15px] leading-[18.15px] flex flex-col items-start justify-center gap-1">
          <h4 className="font-bold">Address:</h4>
          <p>
            Юнусабадский район, <br />
            Хасанбой-I, Исломобод махалля, <br />
            Tashkent, Uzbekistan
          </p>
        </div>

        <div className="font-normal text-[15px] leading-[18.15px] flex flex-col items-start justify-center gap-1">
          <h4 className="font-bold">Phone:</h4>
          <p>8 90 322 00 40</p>
        </div>

        <div className="font-normal text-[15px] leading-[18.15px] flex flex-col items-start justify-center gap-1">
          <h4 className="font-bold">Email:</h4>
          <p>info@company.com</p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a href="https://www.instagram.com/ganga_healthcare/" target="_blank">
            <Image src={instagram} width={25} height={25} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/ganga.healthcare/about" target="_blank">
            <Image src={facebook} width={25} height={25} alt="facebook" />
          </a>
          <a href="https://www.facebook.com/ganga.healthcare/about" target="_blank">
            <Image src={whatsapp} width={25} height={25} alt="whatsapp" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-7">
        <h3 className="font-bold text-[24px] leading-[29.05px]">Services</h3>
        <div className="text-[#6B6B6B] text-[15px] font-normal leading-[18.15px] flex flex-col items-start justify-start gap-5">
          <p>Карта аптек</p>
          <p>Доставка</p>
          <p>Самовывоз</p>
          <p>Контакты</p>
          <p>Публичная оферта</p>
          <p>Подарочные карты</p>
          <p>Безопасность</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-7">
        <h3 className="font-bold text-[24px] leading-[29.05px]">
          Our Practice
        </h3>
        <div className="text-[#6B6B6B] text-[15px] font-normal leading-[18.15px] flex flex-col items-start justify-start gap-5">
          <p>Карта аптек</p>
          <p>Оплата</p>
          <p>Доставка</p>
          <p>Самовывоз</p>
          <p>Контакты</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-7">
        <h3 className="font-bold text-[24px] leading-[29.05px]">
          Working Hours
        </h3>
        <div className="w-[231px] text-[#6B6B6B] text-[15px] font-normal leading-[18.15px] flex flex-col items-start justify-start gap-5">
          <div className="w-full flex items-center justify-between">
            <p>Mon - Wed</p>
            <p>8:00 AM - 7:00 PM</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Thu</p>
            <p>8:00 AM - 5:00 PM</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Fri</p>
            <p>8:00 AM - 5:00 PM</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Sat - Sun</p>
            <p>8:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
