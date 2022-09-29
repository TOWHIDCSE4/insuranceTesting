import React from "react";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { CheckboxGroup } from "../../../components/controls";

export const SurveyForm = () => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="survey-form">
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title2")}</h2>
        <div className="other-box1">
          <CheckboxGroup
            control={control}
            name="other1"
            options={otherList1}
            errors={errors}
            className="checkbox-item"
          />
        </div>
      </div>
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title3")}</h2>
        <div className="other-box1">
          <CheckboxGroup
            control={control}
            name="other2"
            options={otherList2}
            errors={errors}
            className="checkbox-item"
          />
        </div>
      </div>
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title4")}</h2>
        <div className="other-box1">
          <CheckboxGroup
            control={control}
            name="other3"
            options={otherList3}
            errors={errors}
            className="checkbox-item"
          />
        </div>
      </div>
      <div>
        <h2 className="inheritance-title">{t("survey.formTitle.title5")}</h2>
        <div className="other-box2">
          <CheckboxGroup
            control={control}
            name="other4"
            options={otherList4}
            errors={errors}
            className="checkbox-item"
          />
        </div>
      </div>
    </div>
  );
};

const otherList1 = [
  {
    id: 1,
    label: "Có",
    value: 1,
  },
  {
    id: 2,
    label: "Trên 1.000.000 USD",
    value: 2,
  },
  {
    id: 3,
    label: "Không",
    value: 3,
  },
];

const otherList2 = [
  {
    id: 1,
    label: " Vàng, đô la",
    value: 1,
  },
  {
    id: 2,
    label: "Ngân hàng",
    value: 2,
  },
  {
    id: 3,
    label: "Bảo hiểm",
    value: 3,
  },
  {
    id: 4,
    label: "Khác",
    value: 4,
  },
];

const otherList3 = [
  {
    id: 1,
    label: "Tiết kiệm không đều",
    value: 1,
  },
  {
    id: 2,
    label: "Mất kiểm soát chi tiêu",
    value: 2,
  },
  {
    id: 3,
    label: "Thâm hụt",
    value: 3,
  },
  {
    id: 4,
    label: "Đầu tư sai",
    value: 4,
  },
];

const otherList4 = [
  {
    id: 1,
    label: "Đầu tư dần để có tài sản",
    value: 1,
  },
  {
    id: 2,
    label: "Mua tài sản đảm bảo không lãi thanh toán dần với 20% thu nhập",
    value: 2,
  },
  {
    id: 3,
    label: "Khác",
    value: 3,
  },
];
