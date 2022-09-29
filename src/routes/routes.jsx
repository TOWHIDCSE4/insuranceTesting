import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// GUARD
import { AuthGuard, GuestGuard, ManagerGuard } from './guard';

// LAYOUTS
import AuthLayout from '../pages/Auth/Layout';
import MainLayout from '../pages/Main/Layout';
import AdminLayout from '../pages/Admin/Layout';
import PublicLayout from '../pages/Public/Layout';

// AUTH VIEWS
const Login = lazy(() => import('../pages/Auth/views/Login'));

// MAIN VIEWS
const Dashboard = lazy(() => import('../pages/Dashboard'));
const CustomerCare = lazy(() => import('../pages/CustomerCare'));
const FinanceConsultant = lazy(() => import('../pages/FinanceConsultant'));
const Survey = lazy(() => import('../pages/Survey'));
const Contract_management = lazy(() => import('../pages/ContractManagement'));
const FinancialSolution = lazy(() => import('../pages/FinancialSolution'));
const FinanceKnowledge = lazy(() => import('../pages/FinanceKnowledge'));
const Retirement = lazy(() => import('../pages/FinancialSolution/Retirement'));
const StartupFund = lazy(() => import('../pages/FinancialSolution/StartupFund'));

const InheritanceFund = lazy(() => import('../pages/FinancialSolution/InheritanceFund'));
const ContingencyFund = lazy(() => import('../pages/FinancialSolution/ContingencyFund'));
const HealthFoundation = lazy(() => import('../pages/FinancialSolution/HealthFoundation'));
const EducationFoundation = lazy(() => import('../pages/FinancialSolution/EducationFoundation'));
const IllustrateFiduciary = lazy(() => import('../pages/FinancialSolution/IllustrateFiduciary'));
const PotentialCustomers = lazy(() => import('../pages/PotentialCustomers'));
const Consult = lazy(() => import('../pages/consult'));

const AppointmentManagement = lazy(() => import('../pages/Main/views/AppointmentManagement'));


// ADMIN VIEWS
const Admin = lazy(() => import('../pages/Admin/index'));

const ConfigUser =lazy(()=>
  import('../pages/ConfigUser/index')
);
const ManageFinanceKnowledge = lazy(() => import('../pages/ManageFinanceKnowledge'));
const PaymentManagement = lazy(() => import('../pages/PaymentManagement'));

// NOT FOUND
import NotFound from '../pages/NotFound';

export const routes = () => [
  // MAINLAYOUT
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="dashboard" /> },
      // no page yet
      {
        path: 'dashboard',
        element: <GuestGuard element={<Dashboard />} />,
      },
      {
        path: 'potential-customers',
        element: <GuestGuard element={<PotentialCustomers />} />,
      },
      // no page yet
      {
        path: 'appointment-management',
        element: <GuestGuard element={<AppointmentManagement />} />,
      },
      {
        path: 'advise',
        element: <GuestGuard element={<Consult />} />,
      },
      {
        path: 'advise',
        children: [
          {
            path: 'survey',
            element: <GuestGuard element={<Survey />} />,
          },
          // no page yet
          {
            path: 'finance-consultant',
            element: <GuestGuard element={<CustomerCare />} />,
          },
          {
            path: 'finance-support',
            element: <GuestGuard element={<FinanceConsultant />} />,
          },
          {
            path: 'financial-solutions',
            element: <GuestGuard element={<FinancialSolution />} />,
          },
          {
            path: 'financial-solutions',
            element: <GuestGuard element={<IllustrateFiduciary />} />,
            children: [
              {
                path: 'minh-hoa-gia',
                element: <GuestGuard element={<IllustrateFiduciary />} />,
              },
            ],
          },
          {
            path: 'contract-management',
            element: <GuestGuard element={<Contract_management />} />,
          },
        ],
      },
      {
        path: 'customer-care',
        element: <GuestGuard element={<CustomerCare />} />,
      },
      {
        path: 'finance-support',
        element: <GuestGuard element={<FinanceKnowledge />} />,
      },
      {
        path: 'retirement',
        element: <GuestGuard element={<Retirement />} />,
      },
      {
        path: 'startup-fund',
        element: <GuestGuard element={<StartupFund />} />,
      },
      {
        path: 'inheritance-fund',
        element: <GuestGuard element={<InheritanceFund />} />,
      },
      {
        path: 'contingency-fund',
        element: <GuestGuard element={<ContingencyFund />} />,
      },
      {
        path: 'education-foundation',
        element: <GuestGuard element={<EducationFoundation />} />,
      },
      {
        path: 'health-foundation',
        element: <GuestGuard element={<HealthFoundation />} />,
      },
      // {
      //   path: 'config-user',
      //   element: <GuestGuard element={<ConfigUser />} />,
      // }

    ],
  },
  // AUTHLAYOUT
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth', element: <Navigate to="login" /> },
      { path: 'login', element: <AuthGuard element={<Login />} /> },
    ],
  },
  // ADMINLAYOUT
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <ManagerGuard element={<Admin />} /> },
      {
        path: 'payment',
        element: <ManagerGuard element={<PaymentManagement />} />,
      },
      // no page yet
      {
        path: 'log',
        element: <ManagerGuard element={<CustomerCare />} />,
      },
      {
        path: 'finance-knowledge',
        element: <ManagerGuard element={<ManageFinanceKnowledge />} />,
      },
      // no page yet
      {
        path: 'operation-history',
        element: <ManagerGuard element={<CustomerCare />} />,
      },
      
      {
        path: 'q&a',
        element: <ManagerGuard element={<ManageFinanceKnowledge />} />,
      },
    ],
  },
  
  // PUBLICLAYOUT
  {
    path: '',
    element: <PublicLayout />,
    children: [
      // no page yet
      {
        path: 'setting',
        element: <ConfigUser />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
