export const HTTP_200 = 200
export const HTTP_400 = 400
export const TYPE_LIST_NORMAL = "NORMAL"
export const TYPE_LIST_CUSTOMERS = "CUSTOMERS"
export const DEFAULT_SIZE = 10
export const PAGE_SIZE_OPTIONS = ['10', '20', '30']
export const FORMAT_DATE = 'DD/MM/YYYY'
export const LOADING_STATUS = {
  idle: "idle",
  pending: "pending",
  succeeded: "succeeded",
  failed: "failed"
}
export const VALIDATE_MESSAGES = {
  required: '${label} không được để trống',
  types: {
    email: 'Định dang này không phải là email',
    number: '${label} không phải là số',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
export const GIFT = "GIFT"

export const CUSTOMER_CARE_INFO = [
  { label: 'Thu nhập', value: "INCOME" },
  { label: 'Lịch hẹn', value: "APPOINTMENT_SCHEDULE" },
  { label: 'Quà', value: "GIFT" },
  { label: 'Ký hợp đồng', value: "CONTRACT" },
  { label: 'Tư vấn', value: "ADVISE" },
  { label: 'Khảo sát', value: "SURVEY" },
  { label: 'Sở thích', value: "INTERESTS" },
  { label: 'Gia đình', value: "FAMILY" },
  { label: 'Giải pháp', value: "SOLUTION" },
  { label: 'Khác', value: "OTHER" }
]


export const CUSTOMER_FILTER_OPTIONS = [
  {label: 'Không còn tiềm năng, dừng tư vấn', value: "STOP_CONSULTING"},
  {label: 'Chưa gọi điện', value: "NOT_CALL_YET"},
  {label: 'Đã gọi điện lần 1, cần gọi lần 2', value: "CALL_1_CALL_2"},
  {label: 'Đã gọi điện lần n, cần gọi lần n+1', value: "CALL_N_CALL_N_1"},
  {label: 'Đã có lịch hẹn gặp khảo sát', value: "APPOINTMENT_SURVEY"},
  {label: 'Đã khảo sát, chờ lịch tư vấn tài chính', value: "SURVEYED_FINANCE_CONSULT"},
  {label: 'Đã có lịch tư vấn tài chính', value: "APPOINTMENT_CONSULT"},
  {label: 'Đã tư vấn tài chính, chờ lịch hẹn tư vấn  giải pháp', value: "CONSULTED_SOLUTION"},
  {label: 'Đã tư vấn giải pháp, chờ chốt kết quả', value: "SOLUTION_RESULT"},
  {label: 'Đã chốt kết quả, chờ thông tin hợp đồng', value: "RESULT_CONTRACT"},
  {label: 'Đã có hợp đồng', value: "CONTRACTED"},
  {label: 'Chăm sóc khách hàng cho hợp đồng tiếp theo', value: "CUSTOMER_CARE"}
];

export const ARR_INFO_REDIRECT = ['SURVEY', 'ADVISE', 'SOLUTION']

export const INFO_PATH = {
  SURVEY: '/advise/survey',
  ADVISE: '/advise/finance-consultant',
  SOLUTION: '/advise/financial-solutions',
}


