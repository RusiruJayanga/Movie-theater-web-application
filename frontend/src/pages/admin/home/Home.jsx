import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//countup
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
//charts
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const Home = () => {
  //countup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  //pie chart
  const data = [
    { label: "G", value: 400 },
    { label: "PG-13", value: 300 },
    { label: "PG", value: 300 },
    { label: "R", value: 200 },
    { label: "NC-17", value: 278 },
  ];

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
    <div className="text-white cursor-default flex flex-2 ">
      <div className="hidden md:block h-dvh w-[280px] bg-[#1a1a1a] sticky top-[100px] left-0 font-light ">
        <div className="w-[100%] flex items-center p-[20px] opacity-[1] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer bg-[#303030] ">
          <h5>
            <i className="bi bi-house"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Home</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          movies
        </span>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-eye"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Now Showing</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-eye-slash"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Upcoming</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-plus-square"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Add Movies</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          book
        </span>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-ticket-perforated-fill"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Seats</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-journal"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Bookings</h5>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <span className="font-extralight opacity-[0.8] text-[13px] mt-[20px] ml-[10px]">
          user
        </span>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-person-rolodex"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Contact</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
        <div className="w-[100%] flex items-center justify-center p-[20px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300 ease-out cursor-pointer ">
          <h5>
            <i className="bi bi-person"></i>
          </h5>
          <h5 className="mr-auto ml-[20px]">Users</h5>
          <span className="flex items-center justify-center rounded-full mr-[20px] opacity-[0.8] bg-[#bdbdbd]/30 font-extralight w-[30px] h-[30px] text-[13px]">
            10+
          </span>
          <h5 className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-[#f21f30] transition-colors duration-300 ease-out">
            <i className=" bi bi-chevron-right"></i>
          </h5>
        </div>
      </div>
      {/* info section */}
      <div className="flex-1 p-[20px] md:p-[30px] font-light">
        <div className="w-[100%] h-[100%] grid grid-cols-1 gap-[20px] xl:grid-cols-4 ">
          <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
            <h4 className="text-[#f21f30] ">Now Show</h4>
            <p className="opacity-[0.8] ">
              Movies curontly showing in theater.
            </p>
            <div className="w-[100%] flex justify-between xl:mt-[50px] ">
              <div className="mt-[10px] ">
                <span className="font-bold text-[60px] text-[#f21f30] ">
                  {inView && <CountUp start={0} end={28} duration={3} />}
                </span>
                <Link
                  to=""
                  className="flex items-center justify-center w-[150px] h-[40px] rounded-[20px] border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
                >
                  VIEW DETAILS
                </Link>
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
                  {inView && <CountUp start={0} end={208} duration={3} />}
                </span>
                <Link
                  to=""
                  className="flex items-center justify-center w-[150px] h-[40px] rounded-[20px] border-[1px] border-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
                >
                  VIEW DETAILS
                </Link>
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
            <p className="opacity-[0.8] ">
              Now showing movies classify by age.
            </p>
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
      </div>
      {/* */}
    </div>
  );
};

export default Home;
