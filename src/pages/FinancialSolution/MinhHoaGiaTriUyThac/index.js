import { Button, Tabs } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import PageBack from '../../../assets/images/financial/PageBack';
import Calender from '../../../assets/images/icons/components/calender';
import Clock from '../../../assets/images/icons/components/Clock';
import User from '../../../assets/images/icons/components/user';

const MinhHoaGiaTriUyThac = () => {
  const tabExtra = () => {
    return (
      <>
        <div className='tab-extra'>
          <div className='date'>
            <Calender />
            <p>
              Ngày minh họa: <span>14/07/2022</span>
            </p>
          </div>
          <div className='user'>
            <User />
            <p>
              Khách hàng: <span>Kathryn Murphy</span>
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className='minh-hoa-gia'>
        <div className='minh-header'>
          <Link to='/advise/financial-solutions'>
            <PageBack />
          </Link>
          <div className='minh-header_btns'>
            <Button icon={<Clock />} className='btn-secondary'>
              Lịch sử
            </Button>
            <Button className='btn-primary'>Chốt hợp đồng</Button>
            <Button className='btn-primary'>Gửi email</Button>
            <Button className='btn-primary'>Lưu</Button>
          </div>
        </div>
        <Tabs defaultActiveKey='1' tabBarExtraContent={tabExtra()}>
          <Tabs.TabPane tab='Minh họa giá trị ủy thác' key='1'>
            <table className='minh_table'>
              <tr className='table_top'>
                <th colSpan={4}>Thời gian ủy thác</th>
                <th>20 năm</th>
                <th rowSpan={2} colSpan={3}>
                  đầu tư thêm
                </th>
                <th>Số tiền</th>
                <th>Số năm đầu tư thêm</th>
              </tr>
              <tr className='table_top'>
                <th colSpan={4}>Mức tỷ suất đầu tư minh họa</th>
                <th>6,0%</th>
                <th>50.000.0000</th>
                <th>10 năm</th>
              </tr>
              <tr>
                <th rowSpan={2}>Tuổi</th>
                <th rowSpan={2}>Năm HĐ</th>
                <th rowSpan={2}>Phí BH cơ bản</th>
                <th rowSpan={2}>Phí BH đóng thêm</th>
                <th rowSpan={2}>Tổng phí BH lũy kế</th>
                <th colSpan={4}>
                  Mức tỷ suất đầu tư với lãi suất minh họa - Quỹ Tăng Trưởng
                </th>
                <th colSpan={4}>Các kênh đầu tư khác</th>
              </tr>

              <tr>
                <th>GTTK cơ bản</th>
                <th>GTTK đóng thêm</th>
                <th>GTTK hợp đồng</th>
                <th>Giá trị hoàn lại</th>
                <th>Ngân hàng</th>
              </tr>

              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
              <tr>
                <td>31</td>
                <td>1</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
                <td>22.711.000</td>
              </tr>
            </table>
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tóm tắt quyền lợi bằng bông hoa' key='2'>
            Tóm tắt quyền lợi bằng bông hoa
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default MinhHoaGiaTriUyThac;
