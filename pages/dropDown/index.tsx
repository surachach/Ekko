import { Card, Row, Divider } from "antd";
import MainLayout from "../../components/layout/MainLayout";
import Placement from "./Placement";
import Disabled from "./disabled";
import Trigger from "./trigger";
import Selectable from "./Selectable";
import ContextMenu from "./ContextMenu";

export default function DropDownIndex() {
  return (
    <MainLayout>
      <Row justify="space-evenly" style={{ display: "flex" }}>
        <Card
          title="Drop down"
          extra={<a href="#">More</a>}
          style={{
            width: 700,
          }}
        >
          <Divider orientation="left">Placement</Divider>
          <p>
            Placement แปลว่าตำแหน่ง บทนี้ก็คือ ตำแหน่งของข้อความข้างใน dropDown
            สามารถตั้งค่าตำแหน่งข้อความได้ <br />
            เช่น {"placement= topRight"} กำหนดข้อความไปทางบนซ้าย
          </p>
          <Placement />
          <br />
          <br />

          <Divider orientation="left">Divider and disabled menu item</Divider>
          <p>การปิดการใช้งานใน dropDown ตัวเลือกในรายการ</p>
          <Disabled />
          <br />
          <br />
          <Divider orientation="left">Trigger mode</Divider>
          <Trigger />
          <br />
          <br />
          <p>
            เปลี่ยนโหมดค่า default เป็น mod Click ต้อง Click ถึงจะโชว์ dropDown
          </p>

          <br />
          <Divider orientation="left">Selectable</Divider>
          <Selectable />
          <br />
          <br />
          <p>confic เลือกค่าตัวเลือกได้</p>
          <br />
          <br />
          <Divider orientation="left">Context Menu</Divider>
          <ContextMenu />
          <p>คลิกขวา เพื่อเลือกเมนู</p>
        </Card>
      </Row>
    </MainLayout>
  );
}
