export const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (_, __, index) => index + 1,
    align: "center",
  },
  {
    title: "Họ và tên",
    dataIndex: "fullname",
    key: "fullname",
    align: "center",
  },
  {
    title: "Tuổi",
    dataIndex: "age",
    key: "age",
    align: "center",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone1",
    key: "phone1",
    width: "10%",
    align: "center",
  },
  {
    title: "Thân quen",
    dataIndex: "acquaintanceLevel",
    key: "acquaintanceLevel",
    align: "center",
  },
  {
    title: "Thu nhập",
    dataIndex: "income",
    key: "income",
    align: "center",
  },
  {
    title: "Hôn nhân",
    dataIndex: "maritalStatus",
    key: "maritalStatus",
    align: "center",
  },
  {
    title: "Nghề nghiệp",
    dataIndex: "job",
    key: "job",
    align: "center",
  },
  {
    title: "Loại",
    dataIndex: "typeId",
    key: "typeId",
    align: "center",
  },
  {
    title: "Thần số học",
    dataIndex: "numerology",
    key: "numerology",
    align: "center",
  },
  {
    title: "Tỉ lệ thành công",
    dataIndex: "successfulProb",
    key: "successfulProb",
    align: "center",
  },
  {
    title: "Khác",
    dataIndex: "note",
    key: "note",
    width: "10%",
    className: "other",
    align: "center",
  },
  {
    title: "",
    dataIndex: "actions",
    className: "actions",
    align: "center",
  },
];

export const REGEX_PHONE = new RegExp(
  /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/,
);
