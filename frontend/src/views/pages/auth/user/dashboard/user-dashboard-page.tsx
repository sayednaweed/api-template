import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { BarChart2 } from "lucide-react";
import DashboardCard from "@/components/custom-ui/card/DashboardCard";
import axiosClient from "@/lib/axois-client";
import { toast } from "@/components/ui/use-toast";
import BarChartOne from "@/components/custom-ui/charts/bar/BarChartOne";
import PieChartOne from "@/components/custom-ui/charts/pie/PieChartOne";
import BarChartTwo from "@/components/custom-ui/charts/bar/BarChartTwo";

export default function UserDashboardPage() {
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
      <div className="px-1 sm:px-2 pt-4 gird columns-5">
        {renderDashboardCards(
          dashboardData.statuses,
          <BarChart2 className="absolute text-primary/90 top-10 hidden md:block rtl:md:left-2 rtl:lg:left-4 ltr:md:right-2 size-[70px]" />
        )}
        {renderDashboardCards(
          dashboardData.documentUrgencyCounts,
          <BarChart2 className="absolute text-primary/90 top-10 hidden md:block rtl:md:left-2 rtl:lg:left-4 ltr:md:right-2 size-[70px]" />
        )}
      </div>
      {/* Charts */}
      <div className="grid md:grid-cols-5 md:grid-rows-1 gap-x-2 gap-y-4 px-2 mt-4">
        <BarChartOne />
        <PieChartOne />
      </div>
      <BarChartTwo />
    </>
  );
}
