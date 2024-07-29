import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import ProductImages from "@/components/common/ProductImages";
import Product from "@/components/common/Product";
import MediaBanner from "@/components/common/MediaBanner";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/common/TransitionLink";

import { type Product as ProductType } from "@/types";
import { type GetStaticPaths } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Page({
  products,
}: {
  products: ProductType[];
  meta: { total: number; page: number; limit: number };
}) {
  const { t } = useTranslation("common");
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-5`}
    >
      <Navigation />

      <div className="w-full max-w-[var(--max-width)] flex items-center justify-start gap-2">
        <button
          className="w-[105px] h-10 bg-[#EBEBEB80] rounded-[10px] font-medium text-sm leading-[16.94px] text-center text-[#858585] active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
        >
          Products
        </button>
        <TransitionLink isButton href="/products">
          <button
            className="h-10 px-5 bg-[#EBEBEB] rounded-[10px] flex items-center justify-center active:opacity-95 active:scale-95
          transition duration-400 ease-in-out"
          >
            {"<- "}
            Adhesive Bandage
          </button>
        </TransitionLink>
      </div>

      <section className="w-full max-w-[var(--max-width)] flex items-start justify-start gap-5">
        <ProductImages />
        <div className="h-[480px] w-[500px] flex flex-col items-start justify-between text-base font-normal leading-[19.36px] text-justify">
          <div className="flex flex-col items-start justify-start gap-1">
            <h2 className="font-bold text-[32px] leading-[38.73px]">
              Adhesive Bandage
            </h2>
            <p className="font-medium text-[12px] leading-[14.52px] text-[#27BE5A]">
              В наличии
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-col items-start justify-center gap-5">
            <p>
              <b>Категория:</b> Противовоспалительные
            </p>
            <p>
              <b>Cтрана происхождения:</b> Индия
            </p>
            <p>
              <b>Фармакотерапевтическая группа:</b>
              Анальгетик-антипиретик
            </p>
            <p>
              <b>Активное вещество:</b>
              Парацетамол, Ибупрофен
            </p>
            <p>
              <b>Количество в упаковке:</b>1
            </p>
          </div>

          <div className="flex gap-4">
            <button
              // scrolls to the form
              onClick={() => {
                document.getElementsByTagName("form")[0].scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "end",
                });
              }}
              className="w-[220px] h-[50px] rounded-[10px] bg-[var(--primary)] font-bold text-white text-[16px] leading-[19.36px] active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
            >
              Заказать
            </button>

            <a
              // link to telegram bot
              href="https://t.me/osonaptekabot"
              target="_blank"
            >
              <button
                className="w-[220px] h-[50px] rounded-[10px] bg-[var(--secondary)] font-bold text-black text-[16px] leading-[19.36px] active:opacity-95 active:scale-95
            transition duration-400 ease-in-out"
              >
                Найти в аптеках
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[var(--max-width)] flex flex-col gap-8">
        <h2 className="font-bold text-[32px] leading-[38.73px]">Description</h2>

        <div className="w-full flex flex-col text-base leading-[19.36px] gap-1">
          <h3 className="font-bold mb-2">Форма выпуска</h3>
          <p>Лекарственная форма: Суспензия для приёма внутрь для детей.</p>
          <p>
            Форма выпуска: По 60 мл в пластмассовом флаконе. 1 флакон вместе с
            инструкцией по применению в картонной упаковке.
          </p>
          <p className="mt-2">СОСТАВ:</p>
          <p>Каждые 5 мл сиропа содержат:</p>
          <p>Активные вещества: Парацетамол 162,5 мг, Ибупрофен 100 мг.</p>
          <p>
            Вспомогательные вещества: сахароза, ксантановая камедь, кремний
            коллоидный безводный, метилпарабен, пропилпарабен, натрия бензоат,
            натрия сахарин, сорбитол, повидон К-30, Твин-80, краситель эритрозин
            супра, вкусовой наполнитель апельсина, вода очищенная.
          </p>
        </div>

        <div className="w-full flex flex-col text-base leading-[19.36px] gap-1">
          <h3 className="font-bold mb-2">Состав и форма выпуска</h3>
          <p>
            Суспензия по 60 мл в пластмассовом флаконе. 1 флакон вместе с
            инструкцией по применению в картонной упаковке.
          </p>
        </div>

        <div className="w-full flex flex-col text-base leading-[19.36px] gap-1">
          <h3 className="font-bold mb-2">Фармокологическое действие</h3>
          <p>
            Парацетамол входящий в состав суспензии Болнол плюс парацетамол
            ингибирует циклооксигеназу преимущественно в ЦНС. Жаропонижающее
            свойство парацетамола обусловлено подавлением биосинтеза
            простагландинов непосредственно в гипоталамусе, в особенности
            простагландинов Е2 и F2 медиаторов центра теплорегуляции. Ибупрофен
            в дополнение к анальгезирующему и жаропонижающему свойствам обладает
            заметным противовоспалительным действием. Ибупрофен является
            эффективным ингибитором фермента циклооксигеназы, что приводит к
            заметному подавлению синтеза простагландинов участвующих в
            патогенезе боли и воспаления.
          </p>
        </div>

        <div className="w-full flex flex-col text-base leading-[19.36px] gap-1">
          <h3 className="font-bold mb-2">Состав</h3>
          <p>
            Каждые 5 мл сиропа содержат: Активные вещества: Парацетамол 162,5
            мг, Ибупрофен 100 мг Вспомогательные вещества: сахароза, ксантановая
            камедь, кремний коллоидный безводный, метилпарабен, пропилпарабен,
            натрия бензоат, натрия сахарин, сорбитол, повидон К-30, Твин-80,
            краситель эритрозин супра, вкусовой наполнитель апельсина, вода
            очищенная
          </p>
        </div>

        <div className="w-full flex flex-col text-base leading-[19.36px] gap-1">
          <h3 className="font-bold mb-2">Фармакокинетика</h3>
          <p>
            Входящий в состав суспензии Болнол плюс парацетамол быстро
            всасывается из желудочно-кишечного тракта и пик его концентрации в
            плазме достигается через 10 - 60 мин после приема препарата.
            Парацетамол равномерно распределяется в большинстве жидких сред
            организма. Метаболизируется преимущественно в печени и выводится
            почками. Период полувыведения парацетамол составляет от 1 до 3
            часов. Входящий в состав суспензии Болнол плюс ибупрофен быстро
            всасывается из желудочно-кишечного тракта и пик его концентрации в
            плазме достигается через 1-2 часа после приема препарата. Ибупрофен
            хорошо связывается с белками плазмы. Быстро выводится с мочой
            преимущественно в виде метаболитов и их конъюгатов.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[var(--max-width)] flex flex-col items-start justify-center gap-10 py-20">
        <h2 className="font-bold text-[32px] leading-[38.73px]">
          Популярные препараты
        </h2>
        <div className="w-full max-w-[var(--max-width)] grid grid-cols-1 gap-1 gap-y-[90px] md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </section>

      <MediaBanner
        title={t("Media.title")}
        description={t("Media.description")}
      />

      <Form />

      <Footer />
      <div className="w-full max-w-[var(--max-width)] flex justify-between font-medium text-[15px] leading-[18.15px] text-[#858585] py-8">
        <p>© Company All Rights Reserved by Romi Agency</p>
        <p>Terms & Conditions Legal Notice</p>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const responseProducts = await fetch(`${URL}/product?limit=4`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    data: products,
  }: {
    data: ProductType[];
  } = await responseProducts.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      products,
      // Will be passed to the page component as props
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
