import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <CustomFooter>
      <p>Ant-Design ©2022</p>
    </CustomFooter>
  );
};

export default FooterComponent;

const CustomFooter = styled(Footer)`
  margin: 0 auto;
  text-align: center;
  p {
    margin-bottom: 0;
  }
`;
