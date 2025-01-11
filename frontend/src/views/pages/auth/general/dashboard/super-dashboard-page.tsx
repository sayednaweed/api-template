import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Shimmer from "@/components/custom-ui/shimmer/Shimmer";
import ShimmerItem from "@/components/custom-ui/shimmer/ShimmerItem";
import { BarChart2, PersonStanding } from "lucide-react";
import DashboardCard from "@/components/custom-ui/card/DashboardCard";
import axiosClient from "@/lib/axois-client";
import { toast } from "@/components/ui/use-toast";
import BarChartTwo from "@/components/custom-ui/charts/bar/BarChartTwo";
import BarChartOne from "@/components/custom-ui/charts/bar/BarChartOne";
import PieChartOne from "@/components/custom-ui/charts/pie/PieChartOne";
import AreaChartOne from "@/components/custom-ui/charts/area/areaChartOne";
import AreaChartTow from "@/components/custom-ui/charts/area/areaChartTwo";
import { AreaChartThree } from "@/components/custom-ui/charts/area/areaChartThree";
import { AreaChartEleven } from "@/components/custom-ui/charts/area/areaChartEleven";
import { AreaChartFour } from "@/components/custom-ui/charts/area/areaChartFour";
import { AreaChartFive } from "@/components/custom-ui/charts/area/areaChartFive";
import { AreaChartSix } from "@/components/custom-ui/charts/area/areaChartSix";
import { AreaChartSeven } from "@/components/custom-ui/charts/area/areaChartSeven";
import { AreaChartEight } from "@/components/custom-ui/charts/area/areaChartEight";
import AreaChartNine from "@/components/custom-ui/charts/area/areaChartNine";
import { AreaChartTen } from "@/components/custom-ui/charts/area/areaChartTen";
import BarChartThree from "@/components/custom-ui/charts/bar/BarChartThree";
import BarChartFour from "@/components/custom-ui/charts/bar/BarChartFour";
import BarChartFive from "@/components/custom-ui/charts/bar/BarChartFive";
import BarChartSix from "@/components/custom-ui/charts/bar/BarChartSix";
import BarChartSeven from "@/components/custom-ui/charts/bar/BarChartSeven";
import BarChartEight from "@/components/custom-ui/charts/bar/BarChartEight";
import BarChartNine from "@/components/custom-ui/charts/bar/BarChartNine";
import PieChartTwo from "@/components/custom-ui/charts/pie/PieChartTwo";
import PieChartThree from "@/components/custom-ui/charts/pie/PieChartThree";
import PieChartFour from "@/components/custom-ui/charts/pie/PieChartFour";
import PieChartSix from "@/components/custom-ui/charts/pie/PieChartSix";
import PieChartSeven from "@/components/custom-ui/charts/pie/PieChartSeven";
import PieChartEight from "@/components/custom-ui/charts/pie/PieChartEight";
import PieChartNine from "@/components/custom-ui/charts/pie/PieChartNine";
import PieChartTen from "@/components/custom-ui/charts/pie/PieChartTen";
import PieChartEleven from "@/components/custom-ui/charts/pie/PieChartEleven";
import LineChartOne from "@/components/custom-ui/charts/line/LineChartOne";
import LineChartTwo from "@/components/custom-ui/charts/line/LineChartTwo";
import LineChartThree from "@/components/custom-ui/charts/line/LineChartThree";
import LineChartFour from "@/components/custom-ui/charts/line/LineChartFour";
import LineChartFive from "@/components/custom-ui/charts/line/LineChartFive";
import LineChartSix from "@/components/custom-ui/charts/line/LineChartSix";
import LineChartSeven from "@/components/custom-ui/charts/line/LineChartSeven";
import LineChartEight from "@/components/custom-ui/charts/line/LineChartEight";
import LineChartNine from "@/components/custom-ui/charts/line/LineChartNine";
import LineChartTen from "@/components/custom-ui/charts/line/LineChartTen";
import RadarChartOne from "@/components/custom-ui/charts/radar/RadarChartOne";
import RadarChartTwo from "@/components/custom-ui/charts/radar/RadarChartTwo";
import RadarChartThree from "@/components/custom-ui/charts/radar/RadarChartThree";
import RadarChartOneFour from "@/components/custom-ui/charts/radar/RadarChartFour";
import RadarChartFour from "@/components/custom-ui/charts/radar/RadarChartFour";
import RadarChartOneFive from "@/components/custom-ui/charts/radar/RadarChartFive";
import RadarChartSix from "@/components/custom-ui/charts/radar/RadarChartSix";
import RadarChartSeven from "@/components/custom-ui/charts/radar/RadarChartSeven";
import RadarChartEight from "@/components/custom-ui/charts/radar/RadarChartEight";
import RadarChartNine from "@/components/custom-ui/charts/radar/RadarChartNine";
import RadarChartTen from "@/components/custom-ui/charts/radar/RadarChartTen";
import RadarChartEleven from "@/components/custom-ui/charts/radar/RadarChartEleven";
import RadarChartTwelve from "@/components/custom-ui/charts/radar/RadarTwelve";
import RadarChartThirtheen from "@/components/custom-ui/charts/radar/RadarChartThirteen";
import RadarChartFourteen from "@/components/custom-ui/charts/radar/RadarChartFourteen";
import RadarChartFive from "@/components/custom-ui/charts/radar/RadarChartFive";
import RadialChartOne from "@/components/custom-ui/charts/radial/RadialChartOne";
import RadialChartTwo from "@/components/custom-ui/charts/radial/RadialChartTwo";
import RadialChartThree from "@/components/custom-ui/charts/radial/RadialChartThree";
import RadialChartFour from "@/components/custom-ui/charts/radial/RadialChartFour";
import RadialChartFive from "@/components/custom-ui/charts/radial/RadialChartFive";
import RadialChartSix from "@/components/custom-ui/charts/radial/RadialChartSix";
import TooltipChartOne from "@/components/custom-ui/charts/tooltip/TooltipChartOne";
import TooltipChartTwo from "@/components/custom-ui/charts/tooltip/TooltipChartTwo";
import TooltipChartThree from "@/components/custom-ui/charts/tooltip/TooltipChartThree";
import TooltipChartFour from "@/components/custom-ui/charts/tooltip/TooltipChartFour";
import TooltipChartFive from "@/components/custom-ui/charts/tooltip/TooltipChartFive";
import TooltipChartSix from "@/components/custom-ui/charts/tooltip/TooltipChartSix";
import TooltipChartSeven from "@/components/custom-ui/charts/tooltip/TooltipChartSeven";
import TooltipChartEight from "@/components/custom-ui/charts/tooltip/TooltipChartEight";
import TooltipChartNine from "@/components/custom-ui/charts/tooltip/TooltipChartNine";

export default function SuperDashboardPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const [dashboardData, setDashboardData] = useState<{
    statuses: {
      status_name: string;
      document_count: number;
    }[];
    documentTypePercentages: {
      labels: string[];
      data: number[];
    };
    montlyTypeCount: {
      name: string;
      data: number[];
    }[];
    documenttypesixmonth: {
      document_type_name: string;
      document_count: number;
    }[];
    documentUrgencyCounts: {
      urgency_name: string;
      document_count: number;
    }[];
    monthlyDocumentCounts: {
      labels: string[];
      data: number[];
    };
  }>({
    statuses: [],
    documentTypePercentages: {
      labels: [],
      data: [],
    },
    montlyTypeCount: [],
    documenttypesixmonth: [],
    documentUrgencyCounts: [],
    monthlyDocumentCounts: {
      labels: [],
      data: [],
    },
  });
  const fetchDashboardData = async () => {
    try {
      const response = await axiosClient.get("/dashboard/info");
      const data = response.data;

      const documentTypePercentages = {
        labels: data.documentTypePercentages[0],
        data: data.documentTypePercentages[1],
      };
      setDashboardData({
        statuses: data.statuses,
        documentTypePercentages: documentTypePercentages,
        montlyTypeCount: data.montlyTypeCount,
        documenttypesixmonth: data.documenttypesixmonth,
        documentUrgencyCounts: data.documentUrgencyCounts,
        monthlyDocumentCounts: data.monthlyDocumentCounts,
      });
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast({
        toastType: "ERROR",
        title: "Error!",
        description:
          error.response?.data?.message || "Failed to fetch dashboard data",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const cardLoader = (
    <Shimmer className="flex-1 space-y-2 p-4 h-full w-full overflow-hidden">
      <ShimmerItem className="font-bold ml-1 mt-1 pl-1 w-1/2 rounded-[5px]" />
      <ShimmerItem className="ml-1 mt-1 pl-1 w-1/3 rounded-[5px]" />
      <ShimmerItem className=" pl-1 mt-8 mb-1 w-full h-[64px] animate-none rounded-[5px]" />
    </Shimmer>
  );

  const renderDashboardCards = (data: any[], icon: JSX.Element) =>
    data.map((item) => {
      return (
        <DashboardCard
          loading={loading}
          key={item.urgency_name}
          title={item.status_name || item.urgency_name}
          description={t("January")}
          className="overflow-hidden flex-1 space-y-2 h-full p-4"
          value={item.document_count}
          symbol="+"
          icon={icon}
        />
      );
    });
  return (
    <>
      {/* Cards */}
      <div className="px-1 sm:px-2 pt-4 grid grid-cols-2 md:grid-cols-5">
        {loading ? (
          <>
            {cardLoader}
            {cardLoader}
            {cardLoader}
            {cardLoader}
            {cardLoader}
          </>
        ) : (
          <>
            {renderDashboardCards(
              dashboardData.statuses,
              <BarChart2 className="absolute text-primary/90 top-10 rtl:left-2 rtl:lg:left-4 ltr:right-2 size-[50px] sm:size-[70px]" />
            )}
            {renderDashboardCards(
              dashboardData.documentUrgencyCounts,
              <PersonStanding className="absolute text-primary/90 top-10 rtl:left-2 rtl:lg:left-4 ltr:right-2 size-[50px] sm:size-[70px]" />
            )}
          </>
        )}
      </div>
      {/* Charts */}
      <div className="grid md:grid-cols-5 md:grid-rows-1 gap-x-2 gap-y-4 px-2 mt-4">
        {/* Area Charts  */}
        <AreaChartOne />
        <AreaChartTow />
        <AreaChartThree />
        <AreaChartFour />
        <AreaChartFive />
        <AreaChartSix />
        <AreaChartSeven />
        <AreaChartEight />
        <AreaChartNine />
        <AreaChartTen />
        <AreaChartEleven />

        {/**Bar Charts */}
        <BarChartOne />
        <BarChartTwo />
        <BarChartThree />
        <BarChartFour />
        <BarChartFive />
        <BarChartSix />
        <BarChartSeven />
        <BarChartEight />
        <BarChartNine />

        {/**Pie Charts */}
        <PieChartOne />
        <PieChartTwo />
        <PieChartThree />
        <PieChartFour />
        <PieChartSix />
        <PieChartSeven />
        <PieChartEight />
        <PieChartNine />
        <PieChartTen />
        <PieChartEleven />
        {/** Line Charts */}
        <LineChartOne />
        <LineChartTwo />
        <LineChartThree />
        <LineChartFour />
        <LineChartFive />
        <LineChartSix />
        <LineChartSeven />
        <LineChartEight />
        <LineChartNine />
        <LineChartTen />
        {/**Radar Charts */}
        <RadarChartOne />
        <RadarChartTwo />
        <RadarChartThree />
        <RadarChartFour />
        <RadarChartFive />
        <RadarChartSix />
        <RadarChartSeven />
        <RadarChartEight />
        <RadarChartNine />
        <RadarChartTen />
        <RadarChartEleven />
        <RadarChartTwelve />
        <RadarChartThirtheen />
        <RadarChartFourteen />
        {/**Radial Charts */}
        <RadialChartOne />
        <RadialChartTwo />
        <RadialChartThree />
        <RadialChartFour />
        <RadialChartFive />
        <RadialChartSix />
        {/**Tooltip Charts */}
        <TooltipChartOne />
        <TooltipChartTwo />
        <TooltipChartThree />
        <TooltipChartFour />
        <TooltipChartFive />
        <TooltipChartSix />
        <TooltipChartSeven />
        <TooltipChartEight />
        <TooltipChartNine />
      </div>
    </>
  );
}
