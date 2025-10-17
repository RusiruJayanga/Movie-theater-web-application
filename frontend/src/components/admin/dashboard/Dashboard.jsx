import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//countup
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
//charts
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
//hooks
import { useMovies } from "../../../hooks/common/Movie";
import { useUsers } from "../../../hooks/admin/User";

const Dashboard = () => {
  //movie function
  const { data: movies } = useMovies();
  //user function
  const { data: users } = useUsers();

  //countup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  //pie chart
  const ratingCounts = {
    G: 0,
    PG: 0,
    "PG-13": 0,
    R: 0,
    "NC-17": 0,
  };
  if (movies && Array.isArray(movies)) {
    movies.forEach((movie) => {
      const rating = movie?.ratingCategory;
      if (rating && ratingCounts.hasOwnProperty(rating)) {
        ratingCounts[rating]++;
      }
    });
  }
  const data = Object.entries(ratingCounts).map(([label, value]) => ({
    label,
    value,
  }));

  //bar chart
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="w-[100%] grid grid-cols-1 gap-[20px] xl:grid-cols-4 ">
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
        <h4 className="text-[#f21f30] ">Now Show</h4>
        <p className="opacity-[0.8] ">Movies curontly showing in theater.</p>
        <div className="w-[100%] flex justify-between xl:mt-[50px] ">
          <div className="mt-[10px] ">
            <span className="font-bold text-[60px] text-[#f21f30] ">
              {inView && (
                <CountUp
                  start={0}
                  end={
                    movies?.filter((movie) => movie.status === "nowShowing")
                      .length
                  }
                  duration={3}
                />
              )}
            </span>
            <button
              className="flex w-[150px] border-[1px] border-white hover:bg-white hover:text-black"
              onClick={() => setComponent("now")}
            >
              VIEW DETAILS
            </button>
          </div>
          <img
            className="w-[150px] h-[150px] object-cover xl:w-[100px] xl:h-[100px] "
            src="admin-now.png"
            alt="now"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
        <h4 className="text-[#f21f30] ">Users</h4>
        <p className="opacity-[0.8] ">Right now page has,</p>
        <div className="w-[100%] flex justify-between xl:mt-[50px]">
          <img
            className="w-[150px] h-[150px] object-cover xl:hidden "
            src="admin-user.png"
            alt="now"
          />
          <div className="mt-[10px] ">
            <span className="font-bold text-[60px] text-[#f21f30] ">
              {inView && <CountUp start={0} end={users?.length} duration={3} />}
            </span>
            <button
              className="flex w-[150px] border-[1px] border-white hover:bg-white hover:text-black"
              onClick={() => setComponent("user")}
            >
              VIEW DETAILS
            </button>
          </div>
          <img
            className="hidden xl:block xl:w-[100px] xl:h-[100px] "
            src="admin-user.png"
            alt="now"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] xl:col-span-2 ">
        <h4 className="text-[#f21f30] ">User Engagement</h4>
        <p className="opacity-[0.8] ">Monthly user engagement.</p>
        <div className="mt-[20px] h-[250px] xl:h-[200px] ">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                color: "#f21f30",
              },
            ]}
            sx={{
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "#bdbdbd",
                strokeWidth: 2,
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "#bdbdbd",
                strokeWidth: 2,
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                fill: "#bdbdbd",
                fontWeight: "light",
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                fill: "#bdbdbd",
                fontSize: "13px",
              },
            }}
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] ">
        <h4 className="text-[#f21f30] ">Film Rating</h4>
        <p className="opacity-[0.8] ">Now showing movies classify by age.</p>
        <div className="mt-[20px] xl:mt-[50px] ">
          <PieChart
            colors={["#f21f30", "#ffa953", "#00ffac", "#8016ff", "#00c7e8"]}
            series={[
              {
                data,
                paddingAngle: 5,
                innerRadius: "70%",
                outerRadius: "90%",
              },
            ]}
            height={200}
            width={200}
            sx={{
              "& .MuiChartsLegend-root": {
                fontFamily: "Outfit",
                fontWeight: 300,
                fontSize: "13px",
                color: "var(--text_color_3)",
              },
            }}
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] xl:col-span-3 ">
        <h4 className="text-[#f21f30] ">Income</h4>
        <p className="opacity-[0.8] ">Monthly income statement.</p>
        <div className="mt-[20px] ">
          <BarChart
            series={[
              { data: pData, label: "pv", id: "pvId", color: "#f21f30" },
              { data: uData, label: "uv", id: "uvId" },
            ]}
            xAxis={[{ data: xLabels }]}
            yAxis={[{ width: 50 }]}
            height={250}
            sx={{
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "#bdbdbd",
                strokeWidth: 2,
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "#bdbdbd",
                strokeWidth: 2,
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                fill: "#bdbdbd",
                fontWeight: "light",
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                fill: "#bdbdbd",
                fontSize: "13px",
              },
              "& .MuiChartsLegend-root": {
                fontFamily: "Outfit",
                fontWeight: 300,
                fontSize: "13px",
                color: "var(--text_color_3)",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
