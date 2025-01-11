import BarChartTwo from "@/components/custom-ui/charts/bar/BarChartTwo";
import BarChartOne from "@/components/custom-ui/charts/bar/BarChartOne";
import PieChartOne from "@/components/custom-ui/charts/pie/PieChartOne";

export default function DebuggerDashboardPage() {
  // const { t } = useTranslation();

  return (
    <>
      {/* Charts */}
      <div className="grid md:grid-cols-5 md:grid-rows-1 gap-x-2 gap-y-4 px-2 mt-4">
        <BarChartOne />
        <PieChartOne />
      </div>
      <BarChartTwo />
    </>
  );
}
