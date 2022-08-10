import { Button } from "antd";
import { useRouter } from "next/router";
import MainLayout from "../components/layout/MainLayout";

const App: React.FC = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div>
        <h1>Grid</h1>
        <ul>
          <li>
            <Button
              onClick={() => {
                router.push("/grid/Grid-Getter");
              }}
              type="link"
            >
              Link to Grid
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                router.push("/dropDown/");
              }}
              type="link"
            >
              Link to Dropdown
            </Button>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default App;
