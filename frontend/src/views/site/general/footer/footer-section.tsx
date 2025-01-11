import { useTranslation } from "react-i18next";

function FooterSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col justify-start bg-primary rtl:text-2xl-rtl ltr:text-md-ltr text-primary-foreground">
        <div className="flex flex-col">
          <h1>
            {`${t("address")}: `}
            <span className=" rtl:text-lg-rtl">{t("moph_address")}</span>
          </h1>
          <h1>
            {`${t("email")}: `}
            <span className=" rtl:text-lg-rtl">info@moph.gov.af</span>
          </h1>
          <h1>
            {`${t("contact")}: `}
            <span className=" rtl:text-lg-rtl">+93(0) 20 230 1374</span>
          </h1>
        </div>
        <div className="flex items-center justify-end mt-10">
          <p>{t("powered_by")}</p>
        </div>
        <div className="absolute border border-blue-500 mt-60 w-full p-3 ltr:text-right rtl:text-left right-0 bg-slate-700 text-sm">
          {t("2024_ars")}
        </div>
      </div>
    </>
  );
}

export default FooterSection;
