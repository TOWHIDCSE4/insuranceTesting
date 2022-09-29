import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import {useTranslation} from 'react-i18next';
import InputSearch from '../common/InputSearch';

import { logout } from '../../slices/auth';
import Logo from '../../assets/images/logo.png';
import AvantarDefault from '../../assets/images/avatar-default.png';
import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';
import SetingIcon from '../../assets/images/icons/setting.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({});
  const { me } = useSelector((state) => state.auth);
  useEffect(() => {
    // fetchdata
  }, [payload]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu
      className='header__menu'
      items={[
        {
          key: '1',
          label: (
            <div
              onClick={() => navigate('/setting')}
              className='header__menu__box'
            >
              <img className='header__menu__icon' src={SetingIcon} />
              <span className='header__menu__text'>{t('common.setting')}</span>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div onClick={handleLogout} className='header__menu__box'>
              <img className='header__menu__icon' src={LogoutIcon} />
              <span className='header__menu__text'>{t('common.logout')}</span>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <header className='header'>
      <div className='header__left'>
        <img src={Logo} alt='' />
        <span>{t('common.manulife')}</span>
      </div>
      <div className='header__center'>
        <p>{t('common.slogan')}</p>
      </div>
      <div className='header__right'>
        <InputSearch
          classStyle='input-item-search-dark'
          setPayload={setPayload}
        />
        <Dropdown overlay={menu} placement='bottom'>
          <div className='header__right__user'>
            <span className='header__right__user__name'>{me.fullname}</span>
            <div className='header__right__user__avatar'>
              <Avatar size={30} src={AvantarDefault} />
              <div className='header__right__user__box-icon'>
                <img src={ArrowDownIcon} alt='' />
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  );
}
