import Pagination from "./pagination/vi_VN";
import Calendar from './calendar/vi_VN';
import DatePicker from './date-picker/vi_VN';
import TimePicker from './time-picker/vi_VN';
var typeTemplate = '${label} không phải là ${type} hợp lệ';
var localeValues = {
  locale: 'vi',
  Pagination: Pagination,
  DatePicker: DatePicker,
  TimePicker: TimePicker,
  Calendar: Calendar,
  global: {
    placeholder: 'Hãy chọn'
  },
  Table: {
    filterTitle: 'Bộ lọc',
    filterConfirm: 'OK',
    filterReset: 'Tạo Lại',
    filterEmptyText: 'Không lọc',
    filterCheckall: 'Chọn tất cả',
    filterSearchPlaceholder: 'Tìm kiếm trong bộ lọc',
    emptyText: 'Không có dữ liệu',
    selectAll: 'Chọn Tất Cả',
    selectInvert: 'Chọn Ngược Lại',
    selectNone: 'Xóa tất cả',
    selectionAll: 'Chọn tất cả',
    sortTitle: 'Sắp xếp',
    expand: 'Mở',
    collapse: 'Đóng',
    triggerDesc: 'Bấm để sắp xếp giảm dần',
    triggerAsc: 'Bấm để sắp xếp tăng dần',
    cancelSort: 'Bấm để hủy sắp xếp'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Huỷ',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Huỷ'
  },
  Transfer: {
    searchPlaceholder: 'Tìm ở đây',
    itemUnit: 'mục',
    itemsUnit: 'mục',
    remove: 'Xóa',
    selectCurrent: 'Chọn trang hiện tại',
    removeCurrent: 'Xóa trang hiện tại',
    selectAll: 'Chọn tất cả',
    removeAll: 'Xóa tất cả',
    selectInvert: 'Đảo ngược trang hiện tại'
  },
  Upload: {
    uploading: 'Đang tải lên...',
    removeFile: 'Gỡ bỏ tập tin',
    uploadError: 'Lỗi tải lên',
    previewFile: 'Xem thử tập tin',
    downloadFile: 'Tải tập tin'
  },
  Empty: {
    description: 'Không có dữ liệu'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Sửa',
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    expand: 'Mở rộng'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Trường ${label} bị lỗi dữ liệu',
      required: '${label} không được để trống',
      "enum": '${label} là một trong các mục [${enum}]',
      whitespace: '${label} không thể là một ký tự trắng',
      date: {
        format: '${label} bị sai định dạng ngày',
        parse: '${label} không thể được chuyển sang dạng ngày',
        invalid: '${label} không phải là ngày hợp lệ'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} phải có ${len} ký tự',
        min: '${label} có ít nhất ${min} ký tự',
        max: '${label} có nhiều nhất ${max} ký tự',
        range: '${label} cần có từ ${min}-${max} ký tự'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} nhỏ nhất là ${min}',
        max: '${label} lớn nhất là ${max}',
        range: '${label} trong khoảng ${min}-${max}'
      },
      array: {
        len: '${label} có ${len} phần tử',
        min: '${label} có tối thiểu ${min} phần tử',
        max: '${label} có tối đa ${max} phần tử',
        range: '${label} có số phần tử trong khoảng ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} không phù hợp với mẫu ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
export default localeValues;