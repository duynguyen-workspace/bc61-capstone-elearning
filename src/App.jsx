import { ConfigProvider, message } from "antd";
import useRoutesElements from "./routes/useRoutesElements";
import { createContext } from "react";

export const AlertMessage = createContext();

function App() {
  const routeElements = useRoutesElements();
  const [messageApi, contextHolder] = message.useMessage();

  const handleAlert = (type, content) => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            /* here is your component tokens */
            hoverBorderColor: "#000",
            activeBorderColor: "#000",
            padding: 5,
          },
        },
      }}
    >
      <AlertMessage.Provider value={{ handleAlert }}>
        {contextHolder}
        {routeElements}
      </AlertMessage.Provider>
    </ConfigProvider>
  );
}

export default App;
