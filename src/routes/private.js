import Dashboard from '../assets/images/icons/dashboard.svg';
import Users from '../assets/images/icons/users.svg';
import Calendar from '../assets/images/icons/calendar.svg';
import Support from '../assets/images/icons/support.svg';
import Care from '../assets/images/icons/care.svg';
import QA from '../assets/images/icons/q&a.svg';
import Book from '../assets/images/icons/book.svg';

const PrivateRoutes = [
  {
    path: '/dashboard',
    key: 'dashboard',
    label: 'Trang chủ',
    icon: Dashboard,
  },
  {
    path: '/potential-customers',
    key: 'potential-customers',
    label: 'Khách hàng tiềm năng',
    icon: Users,
  },
  {
    path: '/appointment-management',
    key: 'appointment-management',
    label: 'Quản lý lịch hẹn',
    icon: Calendar,
  },
  {
    path: '/advise',
    key: 'advise',
    label: 'Tư vấn',
    icon: Support,
    children: [
      {
        path: '/advise/survey',
        key: 'survey',
        label: 'Khảo sát',
      },
      {
        path: '/advise/finance-consultant',
        key: 'advise-finance-consultant',
        label: 'Tư vấn tài chính',
      },
      {
        path: '/advise/financial-solutions',
        key: 'financial-solutions',
        label: 'Giải pháp tài chính',
      },
      {
        path: '/advise/contract-management',
        key: 'contract-management',
        label: 'Quản lý hợp đồng',
      },
    ],
  },
  {
    path: '/customer-care',
    key: 'customer-care',
    label: 'Chăm sóc',
    icon: Care,
  },
  {
    path: '/finance-support',
    key: 'finance-support',
    label: 'Kiến thức tư vấn tài chính',
    icon: Book,
  },
  {
    path: '/retirement',
    key: 'retirement',
  },
  {
    path: '/startup-fund',
    key: 'startup-fund',
  },
  {
    path: '/inheritance-fund',
    key: 'inheritance-fund',
  },
  {
    path: '/contingency-fund',
    key: 'contingency-fund',
  },
  {
    path: '/education-foundation',
    key: 'education-foundation',
  },
  {
    path: '/health-foundation',
    key: 'health-foundation',
  },
  // {
  //   path: "/qminh-hoa-gia",
  //   key: "minh-hoa-gia",
  //   page: <MinhHoaGiaTriUyThac />,
  // },
];

export default PrivateRoutes;

export const RoutesWithOutMenu = [
  {
    path: '/advise/financial-solutions/minh-hoa-gia',
    key: 'minh-hoa-gia',
    label: 'Minh họa giá trị ủy thác',
  },
  {
    path: '/payment',
    key: 'payment-management',
    label: 'Quản lý thanh toán',
  },
  {
    path: '/content-management',
    key: 'content-management',
    label: '',
  },
];
