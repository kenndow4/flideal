import DashboardPage from "@/src/components/dashboardFLight";
import { Providers } from "@/src/providers/providers";


export default function App() {

  return (
    <Providers>
    <DashboardPage/>
    </Providers>
  );
}
