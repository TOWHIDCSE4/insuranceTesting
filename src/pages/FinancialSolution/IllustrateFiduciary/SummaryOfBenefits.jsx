import React from "react";
import { Row, Col } from "antd";
import { CircleData } from "./CircleData";
import { CircleTitle } from "./CircleTitle";

export const SummaryOfBenefits = () => {
  return (
    <div className="tom_tat_quyen_container">
      <Row gutter={[16, 10]}>
        <Col lg={8} md={24} sm={24} xs={24}>
          <div className="tom_tat_quyen_left">
            <div className="tom_tat_quyen_left_one">
              <table>
                <thead>
                  <tr>
                    <td>Họ tên</td>
                    <td>Ngày sinh</td>
                    <td>Tuổi</td>
                    <td>Giới tính</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nguyễn Văn Tiến</td>
                    <td>12/06/1978</td>
                    <td>45</td>
                    <td>Nam</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tom_tat_quyen_left_two">
              <div className="tom_tat_quyen_left_two_top">
                <table>
                  <tbody>
                    <tr>
                      <td>Quyền lợi Sống khỏe mỗi ngày</td>
                      <td>125.000.000 đ/năm</td>
                    </tr>
                    <tr>
                      <td>Phạm vi bảo hiểm</td>
                      <td>Việt Nam</td>
                    </tr>
                    <tr>
                      <td>Số tiền ủy thác</td>
                      <td>2.370.000 đ/năm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tom_tat_quyen_left_two_middle">
                <table>
                  <tbody>
                    {/* one */}
                    <tr>
                      <td colSpan={2} className="item_num">
                        1.Điều trị nội trú:
                      </td>
                    </tr>
                    <tr>
                      <td>a. Không phẫu thuật:</td>
                      <td>25.000.000 đ/đợt</td>
                    </tr>
                    <tr>
                      <td>b. Có phẫu thuật:</td>
                      <td>50.000.000 đ/đợt</td>
                    </tr>
                    {/* two */}

                    <tr>
                      <td className="item_num">2. Cấy ghép nội tạng:</td>
                      <td>120.000.000 đ/năm</td>
                    </tr>
                    {/* three */}
                    <tr>
                      <td className="item_num">3. Điều trị ung thư:</td>
                      <td>120.000.000 đ/năm</td>
                    </tr>
                    {/* four */}
                    <tr>
                      <td className="item_num">4. Chi phí xe cứu thương:</td>
                      <td>1.000.000 đ/năm</td>
                    </tr>
                    {/* five */}
                    <tr>
                      <td colSpan={2} className="item_num">
                        5. Điều trị ngoại trú đặc biệt hoặc điều trị trong khoa
                        cấp cứu:
                      </td>
                    </tr>
                    <tr>
                      <td>a. Điều trị trong ngày tại khoa cấp cứu:</td>
                      <td>25.000.000 đ/năm</td>
                    </tr>
                    <tr>
                      <td>b. Điều trị nội trú do tai nạn:</td>
                      <td>50.000.000 đ/năm</td>
                    </tr>
                    <tr>
                      <td>c. Lọc máu ngoài thận:</td>
                      <td className="data_red">Không áp dụng</td>
                    </tr>
                    <tr>
                      <td>b. Điều trị bệnh tâm thần:</td>
                      <td className="data_red">Không áp dụng</td>
                    </tr>
                    {/* six */}
                    <tr>
                      <td colSpan={2} className="item_num">
                        6. Quyền lợi thai sản dành cho nữ (15-45 tuổi):
                      </td>
                    </tr>
                    <tr>
                      <td>a. Sinh thường:</td>
                      <td className="data_red">Không áp dụng</td>
                    </tr>
                    <tr>
                      <td>b. Sinh mổ hoặc biến chứng thai sản:</td>
                      <td className="data_red">Không áp dụng</td>
                    </tr>
                    {/* seven */}
                    <tr>
                      <td className="item_num">7. Hoàn phí:</td>
                      <td>237.000.000 đ/năm</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="sub_label">
                        (Nếu trong năm không phát sinh bất kỳ yêu cầu chi trả
                        nào)
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="tom_tat_quyen_left_two_last">
                  <table>
                    <tbody>
                      <tr>
                        <td>Thời hạn bảo vệ đến:</td>
                        <td>20 năm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="tom_tat_quyen_left_three">
              <div className="tom_tat_quyen_left_three_top">
                <table>
                  <tbody>
                    <tr>
                      <td>Quyền lợi tai nạn nâng cao:</td>
                      <td>2.000.000.000 đ</td>
                    </tr>
                    <tr>
                      <td>Số tiền ủy thác:</td>
                      <td>Tặng miễn phí</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tom_tat_quyen_left_three_middle">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2} className="item_num">
                        1. Thương tật do tai nạn:
                      </td>
                    </tr>
                    <tr>
                      <td>a. Thương tật tối đa tùy theo tỷ lệ:</td>
                      <td>2.000.000.000 đ</td>
                    </tr>
                    <tr>
                      <td>b. Tổn thương nội tạng:</td>
                      <td>150.000.000 đ/lần</td>
                    </tr>
                    <tr>
                      <td>c. Gãy xương tối đa tùy theo tình trạng:</td>
                      <td>2.000.000.000 đ/lần</td>
                    </tr>
                    <tr>
                      <td>d. Bỏng tối đa tùy theo tỷ lệ:</td>
                      <td>2.000.000.000 đ/lần</td>
                    </tr>
                    {/* two */}

                    <tr>
                      <td className="item_num">2.Cấy ghép nội tạng:</td>
                      <td width="35%">4.000.000.000 đ</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="sub_label">
                        (Quyền lợi TV do tai nạn sẽ trừ đi quyền lợi thương tật
                        đã trả trước đó)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tom_tat_quyen_left_three_last">
                <table>
                  <tbody>
                    <tr>
                      <td>Thời hạn bảo vệ đến:</td>
                      <td>70 tuổi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={8} md={24} sm={24} xs={24}>
          <div className="tom_tat_quyen_middle">
            <div className="tom_tat_quyen_middle_one">
              <table>
                <tbody>
                  <tr>
                    <td>Chi phí sinh hoạt hàng tháng</td>
                    <td>10.000.000 đ</td>
                  </tr>
                  <tr>
                    <td>Chi phí sinh hoạt hằng năm</td>
                    <td>120.000.000 đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tom_tat_quyen_middle_two">
              <table>
                <tbody>
                  <tr>
                    <td>Tổng số tiền ủy thác hàng năm</td>
                    <td>25.000.000 đ</td>
                  </tr>
                  <tr>
                    <td>Thời gian ủy thác</td>
                    <td>20 năm</td>
                  </tr>
                  <tr>
                    <td>Tổng vốn ủy thác</td>
                    <td>1.0001.620.000 đ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tom_tat_quyen_middle_three">
              <div className="tom_tat_quyen_middle_three_top">
                <CircleData data="Quyền lợi trợ cấp y tếmở rộng" />
              </div>
              <div className="tom_tat_quyen_middle_three_middle">
                <div className="circle-two">
                  <CircleData data="Quyền lợi sống khỏe mỗi ngày" />
                </div>
                <div className="circle-three">
                  <CircleTitle />
                </div>
                <div className="circle-four">
                  <CircleData data="Quyền lợi bệnh lý nghiêm trọng mở rộng" />
                </div>
              </div>
              <div className="tom_tat_quyen_middle_three_last">
                <div>
                  <CircleData data="Quyền lợi tai nạnnâng cao" />
                </div>
                <div>
                  <CircleData data="Quyền lợi hỗ trợđóng phí" />
                </div>
              </div>
            </div>

            <div className="tom_tat_quyen_middle_four">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>Món quà Tương Lai</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>2.000.000.000 đ</td>
                  </tr>
                  <tr>
                    <td>Số tiền ủy thác:</td>
                    <td>20.000.000 đ</td>
                  </tr>
                  <tr>
                    <td>Thời hạn bảo vệ đến</td>
                    <td>99 tuổi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>

        <Col lg={8} md={24} sm={24} xs={24}>
          <div className="tom_tat_quyen_right">
            <div className="tom_tat_quyen_right_one">
              <table>
                <tbody>
                  <tr>
                    <td rowSpan={2}>
                      <span className="reserve_funds"> Quỹ dự phòng</span>
                    </td>
                    <td>Tại năm HĐ thứ 1</td>
                    <td rowSpan={2}>
                      <span className="reserve_funds">2.000.000.000 đ</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Tại năm HĐ thứ 2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tom_tat_quyen_right_two">
              <div className="tom_tat_quyen_right_two_top">
                <table>
                  <tbody>
                    <tr>
                      <td>Quyền lợi trợ cấp y tế mở rộng</td>
                      <td>300.000 đ</td>
                    </tr>
                    <tr>
                      <td>Số tiền ủy thác</td>
                      <td>1.839.000 đ/năm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tom_tat_quyen_right_two_middle">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="item_num">
                        1. Điều trị nội trú:
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={3} width="30%">
                        a. Khi NĐBH phải nằm viện trong 5 ngày đầu tiên
                      </td>
                      <td>Tại năm HĐ thứ 1</td>
                      <td>100%</td>
                      <td>300.000 đ/ngày</td>
                    </tr>
                    <tr>
                      <td>Tại năm HĐ thứ 2</td>
                      <td>150%</td>
                      <td>450.000 đ/ngày</td>
                    </tr>
                    <tr>
                      <td>Tại năm HĐ thứ 2</td>
                      <td>200%</td>
                      <td>600.000 đ/ngày</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>b. Từ ngày nằm viện thứ 6 trở đi</td>
                      <td>240%</td>
                      <td>720.000 đ/ngày</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        c. Khi NĐBH phải nằm viện tại khoa CSĐB
                      </td>
                      <td>400%</td>
                      <td>1.200.000 đ/ngày</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="item_num">
                        2. Quyền lợi y tế đặc biệt
                      </td>
                      <td>500 lần STBH</td>
                      <td>150.000.000 đ</td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="item_num">
                        3. Quyền lợi tử vong từ 70 tuổi trở đi
                      </td>
                      <td>150.000.000 đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tom_tat_quyen_right_two_last">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3}>Thời hạn bảo vệ đến</td>
                      <td>85 tuổi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tom_tat_quyen_right_three">
              <div className="tom_tat_quyen_right_three_top">
                <table>
                  <tbody>
                    <tr>
                      <td>Quyền lợi trợ cấp y tế mở rộng</td>
                      <td> đ</td>
                    </tr>
                    <tr>
                      <td>Số tiền ủy thác</td>
                      <td>đ/năm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tom_tat_quyen_right_three_middle">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3} className="item_num">
                        1.Quyền lợi bênh lý nghiêm trọng trước 70 tuổi
                      </td>
                    </tr>
                    <tr>
                      <td>-Bảo vệ 4/35 bệnh giai đoạn sớm</td>
                      <td>25%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td>-Bảo vệ 2/35 bệnh giai đoạn giữa</td>
                      <td>50%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td>-Quyền lợi y tế đặc biệt</td>
                      <td>100%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td>-Bảo vệ 1/49 bệnh giai đoạn cuối</td>
                      <td>100%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td>-Bảo vệ bệnh lý giới tính</td>
                      <td>25%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="item_num">
                        2. Quyền lợi bệnh lý nghiêm trọng sau 70 tuổi
                      </td>
                    </tr>
                    <tr>
                      <td>-Quyền lợi y tế đặc biệt</td>
                      <td>100%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td>-Bảo vệ 1/49 bệnh giai đoạn cuối</td>
                      <td>100%</td>
                      <td>d</td>
                    </tr>
                    <tr>
                      <td>3. Quyền lợi tử vong từ 70 tuổi trở đi</td>
                      <td>100%</td>
                      <td>d</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tom_tat_quyen_right_three_last">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3}>Thời hạn bảo vệ đến</td>
                      <td>85 tuổi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tom_tat_quyen_right_four">
              <div className="tom_tat_quyen_right_four_top">
                <table>
                  <tbody>
                    <tr>
                      <td>Quyền lợi Hỗ trợ đóng phí</td>
                      <td>20 năm</td>
                    </tr>
                    <tr>
                      <td>Số tiền ủy thác</td>
                      <td>872.000 đ/năm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tom_tat_quyen_right_four_bottom">
                Khi Người được bảo hiểm bị mắc 1 trong 49 bệnh lý nghiêm trọng
                giai đoạn cuối thì Manulife sẽ chi trả khoản phí bảo hiểm định
                kỳ quy năm vào mỗi ngày kỷ niệm hợp đồng
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="tom_tat_quyen_bottom">
        <div className="tom_tat_quyen_bottom_title">
          Mức tỷ suất đầu tư với lãi suất minh họa - Quỹ Tăng Trưởng
        </div>
        <div className="tom_tat_quyen_bottom_data">
          <table>
            <thead>
              <tr>
                <th>50 tuổi</th>
                <th>55 tuổi</th>
                <th>60 tuổi</th>
                <th>65 tuổi</th>
                <th>70 tuổi</th>
                <th>75 tuổi</th>
                <th>80 tuổi</th>
                <th>85 tuổi</th>
                <th>90 tuổi</th>
                <th>95 tuổi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
                <td>2.934.000.000 đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
