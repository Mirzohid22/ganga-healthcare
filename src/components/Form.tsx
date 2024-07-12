import { useRef, useState, type FormEvent, useCallback } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Image from "next/image";
import fluttor from "../../public/futtor.png";
import CustomButton from "./common/CustomButton";
import { submitFormData } from "@/utils/formSubmit";

export default function Form() {
  const { locale } = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const [nameHasError, setNameHasError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>("");
  const [phoneHasError, setPhoneHasError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>("");

  const nameValidation = useCallback(
    (name: string) => {
      if (name.length > 0 && name.length < 3) {
        setNameHasError(true);
        setNameError(
          locale === "ru"
            ? "Имя должно быть не менее 3 символов"
            : "Name should be at least 3 characters long"
        );
      } else if (name.length > 20) {
        setNameHasError(true);
        setNameError(
          locale === "ru"
            ? "Имя должно быть не более 20 символов"
            : "Name should be at most 20 characters long"
        );
      } else {
        setNameHasError(false);
        setTimeout(() => {
          setNameError("");
        }, 200);
      }
    },
    [locale]
  );

  const phoneValidation = useCallback(
    (phone: string) => {
      if (
        phone.length !== 0 &&
        !phone
          .split(" ")
          .join("")
          .match(/^\+?998\d{9}$/)
      ) {
        setPhoneHasError(true);
        setPhoneError(
          locale === "ru"
            ? "Неверный формат номера телефона"
            : "Invalid phone number format"
        );
      } else {
        setPhoneHasError(false);
        setTimeout(() => {
          setPhoneError("");
        }, 200);
      }
    },
    [locale]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = nameRef.current!.value;
    const phone = phoneRef.current!.value.split(" ").join("");
    const comment = commentRef.current!.value;
    const terms = termsRef.current!.value;
    const id = toast.loading("sending...");
    if (name && phone) {
      const { status, message } = await submitFormData({
        fullName: name,
        comment,
        phone,
        terms: Boolean(terms),
      });
      if (status === "success") {
        toast.dismiss(id);
        toast.success(message);
        formRef.current!.reset();
      } else {
        toast.dismiss(id);
        toast.error(message);
      }
    }
  }

  return (
    <section className="w-full max-w-[var(--max-width)] flex items-start justify-start gap-20 my-20">
      <div>
        <Image src={fluttor} width={539} height={632} alt="Form image" />
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-start max-w-[400px] gap-10"
      >
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
            <div className="w-full flex flex-col items-start justify-start">
              <p
                className={`text-red-600 font-semibold mb-1 transition duration-500 ease-in-out
              ${nameHasError ? "animate-enter" : "animate-exit"}
              `}
              >
                {nameError}
              </p>
              <input
                ref={nameRef}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Nodir Yuldashev"
                className={`max-w-[400px] w-full h-[50px] bg-[var(--secondary)] rounded-[10px] px-3 outline-none
                  ${nameHasError ? "border border-red-500" : ""}
                  `}
                onChange={(e) => {
                  nameValidation(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 text-[15px] leading-[18.15px]">
            <label htmlFor="phone" className="font-semibold">
              Phone*
            </label>
            <div className="w-full flex flex-col items-start justify-start">
              <p
                className={`text-red-600 font-semibold mb-1 transition duration-500 ease-in-out
              ${phoneHasError ? "animate-enter" : "animate-exit"}
              `}
              >
                {phoneError}
              </p>
              <input
                ref={phoneRef}
                required
                type="phone"
                id="phone"
                name="phone"
                placeholder="+998 (--) --- -- --"
                className={`max-w-[400px] w-full h-[50px] bg-[var(--secondary)] rounded-[10px] px-3 outline-none
                  ${phoneHasError ? "border border-red-500" : ""}
                  `}
                onChange={(e) => {
                  phoneValidation(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-3 text-[15px] leading-[18.15px]">
            <label htmlFor="comment" className="font-semibold">
              Comment*
            </label>
            <textarea
              ref={commentRef}
              id="comment"
              rows={4}
              name="comment"
              placeholder="Write your comment"
              className="max-w-[400px] w-full h-[150px] bg-[var(--secondary)] rounded-[10px] p-3 outline-none resize-none"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <input
              ref={termsRef}
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
        <CustomButton
          type="submit"
          variant="primary"
          disabled={nameHasError || phoneHasError}
        >
          Отправить сейчас
        </CustomButton>
      </form>
    </section>
  );
}
