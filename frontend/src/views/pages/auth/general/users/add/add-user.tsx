import AddUserAccount from "./steps/AddUserAccount";
import AddUserInformation from "./steps/AddUserInformation";
import AddUserPermission from "./steps/AddUserPermission";
import { useTranslation } from "react-i18next";
import { useModelOnRequestHide } from "@/components/custom-ui/model/hook/useModelOnRequestHide";
import CloseButton from "@/components/custom-ui/button/CloseButton";
import Stepper from "@/components/custom-ui/stepper/Stepper";
import CompleteStep from "@/components/custom-ui/stepper/CompleteStep";
import axiosClient from "@/lib/axois-client";
import { toast } from "@/components/ui/use-toast";
import { Dispatch, SetStateAction } from "react";
import { setServerError } from "@/validation/validation";
import { User } from "@/database/tables";
import { Check, Database, ShieldBan, User as UserIcon } from "lucide-react";

export interface AddUserProps {
  onComplete: (user: User) => void;
}
export default function AddUser(props: AddUserProps) {
  const { onComplete } = props;
  const { t } = useTranslation();
  const { modelOnRequestHide } = useModelOnRequestHide();
  const beforeStepSuccess = async (
    userData: any,
    currentStep: number,
    setError: Dispatch<SetStateAction<Map<string, string>>>
  ) => {
    if (currentStep == 1) {
      try {
        let formData = new FormData();
        formData.append("email", userData?.email);
        formData.append("contact", userData?.contact);
        const response = await axiosClient.post(
          "user/validate/email/contact",
          formData
        );
        if (response.status == 200) {
          const emailExist = response.data.email_found === true;
          const contactExist = response.data.contact_found === true;
          if (emailExist || contactExist) {
            const errMap = new Map<string, string>();
            if (emailExist) {
              errMap.set("email", `${t("email")} ${t("is_registered_before")}`);
            }
            if (contactExist) {
              errMap.set(
                "contact",
                `${t("contact")} ${t("is_registered_before")}`
              );
            }
            setError(errMap);
            return false;
          }
        }
      } catch (error: any) {
        toast({
          toastType: "ERROR",
          title: t("error"),
          description: error.response.data.message,
        });
        console.log(error);
        return false;
      }
    }
    return true;
  };
  const stepsCompleted = async (
    userData: any,
    setError: Dispatch<SetStateAction<Map<string, string>>>
  ) => {
    let formData = new FormData();
    formData.append("full_name", userData.full_name);
    formData.append("username", userData.username);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    if (userData.contact) formData.append("contact", userData.contact);
    formData.append("destination", userData.destination.id);
    formData.append("job", userData.job.id);
    formData.append("role", userData.role.id);
    if (userData.status) formData.append("status", userData.status);
    else formData.append("status", "false");
    if (!userData.grant) formData.append("grant", "false");
    else formData.append("grant", userData.grant);
    formData.append("Permission", JSON.stringify(userData?.Permission));
    try {
      const response = await axiosClient.post("user/store", formData);
      if (response.status == 200) {
        onComplete(response.data.user);
        toast({
          toastType: "SUCCESS",
          description: response.data.message,
        });
      }
    } catch (error: any) {
      toast({
        toastType: "ERROR",
        title: t("error"),
        description: error.response.data.message,
      });
      setServerError(error.response.data.errors, setError);
      console.log(error);
      return false;
    }
    return true;
  };
  const closeModel = () => {
    modelOnRequestHide();
  };

  return (
    <div className="pt-4">
      {/* Header */}
      <div className="flex px-1 py-1 fixed w-full justify-end">
        <CloseButton dismissModel={closeModel} />
      </div>
      {/* Body */}
      <Stepper
        isCardActive={true}
        size="wrap-height"
        className="bg-transparent dark:!bg-transparent"
        progressText={{
          complete: t("complete"),
          inProgress: t("in_progress"),
          pending: t("pending"),
          step: t("step"),
        }}
        loadingText={t("loading")}
        backText={t("back")}
        nextText={t("next")}
        confirmText={t("confirm")}
        steps={[
          {
            description: t("personal_details"),
            icon: <UserIcon className="size-[16px]" />,
          },
          {
            description: t("account_information"),
            icon: <Database className="size-[16px]" />,
          },
          {
            description: t("permissions"),
            icon: <ShieldBan className="size-[16px]" />,
          },
          {
            description: t("complete"),
            icon: <Check className="size-[16px]" />,
          },
        ]}
        components={[
          {
            component: <AddUserInformation />,
            validationRules: [
              { name: "full_name", rules: ["required", "max:45", "min:3"] },
              { name: "username", rules: ["required", "max:45", "min:3"] },
              { name: "email", rules: ["required"] },
              { name: "destination", rules: ["required"] },
              { name: "job", rules: ["required"] },
            ],
          },
          {
            component: <AddUserAccount />,
            validationRules: [
              { name: "password", rules: ["required", "max:25", "min:8"] },
              { name: "role", rules: ["required"] },
            ],
          },
          {
            component: <AddUserPermission />,
            validationRules: [],
          },
          {
            component: (
              <CompleteStep
                successText={t("congratulation")}
                closeText={t("close")}
                againText={t("again")}
                closeModel={closeModel}
                description={t("user_acc_crea")}
              />
            ),
            validationRules: [],
          },
        ]}
        beforeStepSuccess={beforeStepSuccess}
        stepsCompleted={stepsCompleted}
      />
    </div>
  );
}
