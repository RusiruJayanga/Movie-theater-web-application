import React from "react";
//loading
import Loading from "../../../hooks/common/Loading";
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
import { useBookings } from "../../../hooks/admin/Booking";

const Dashboard = () => {
  //fetch movies function
  const { data: movies, isLoading, isError } = useMovies();
  //filter movies
  const nowShowing = movies?.filter(
    (movie) =>
      movie.status === "nowShowing" && new Date(movie.closeDate) >= new Date()
  );

  //fetch users function
  const { data: users } = useUsers();
  //filter users
  const filterUsers = users?.filter((user) => user?.status === "active");
  //line chart
  //12 months
  const monthlyCountsLine = Array(12).fill(0);
  //users added per month
  filterUsers?.forEach((user) => {
    const monthIndex = new Date(user.addedDate).getMonth();
    if (monthIndex === 0) {
      monthlyCountsLine[0] += 1;
    } else if (monthIndex === 1) {
      monthlyCountsLine[1] += 1;
    } else if (monthIndex === 2) {
      monthlyCountsLine[2] += 1;
    } else if (monthIndex === 3) {
      monthlyCountsLine[3] += 1;
    } else if (monthIndex === 4) {
      monthlyCountsLine[4] += 1;
    } else if (monthIndex === 5) {
      monthlyCountsLine[5] += 1;
    } else if (monthIndex === 6) {
      monthlyCountsLine[6] += 1;
    } else if (monthIndex === 7) {
      monthlyCountsLine[7] += 1;
    } else if (monthIndex === 8) {
      monthlyCountsLine[8] += 1;
    } else if (monthIndex === 9) {
      monthlyCountsLine[9] += 1;
    } else if (monthIndex === 10) {
      monthlyCountsLine[10] += 1;
    } else if (monthIndex === 11) {
      monthlyCountsLine[11] += 1;
    } else {
      return;
    }
  });

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

  //fetch session function
  const { data: bookings } = useBookings();
  //bar chart
  //12 months
  const monthlyCountsBar = Array(12).fill(0);
  //users added per month
  filterUsers?.forEach((user) => {
    const monthIndex = new Date(user.addedDate).getMonth();
    if (monthIndex === 0) {
      monthlyCountsBar[0] += 1;
    } else if (monthIndex === 1) {
      monthlyCountsBar[1] += 1;
    } else if (monthIndex === 2) {
      monthlyCountsBar[2] += 1;
    } else if (monthIndex === 3) {
      monthlyCountsBar[3] += 1;
    } else if (monthIndex === 4) {
      monthlyCountsBar[4] += 1;
    } else if (monthIndex === 5) {
      monthlyCountsBar[5] += 1;
    } else if (monthIndex === 6) {
      monthlyCountsBar[6] += 1;
    } else if (monthIndex === 7) {
      monthlyCountsBar[7] += 1;
    } else if (monthIndex === 8) {
      monthlyCountsBar[8] += 1;
    } else if (monthIndex === 9) {
      monthlyCountsBar[9] += 1;
    } else if (monthIndex === 10) {
      monthlyCountsBar[10] += 1;
    } else if (monthIndex === 11) {
      monthlyCountsBar[11] += 1;
    } else {
      return;
    }
  });

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <p className="font-extralight text-[#bdbdbd]">no data to show</p>;
  }

  return (
    <div className="w-[100%] grid grid-cols-1 gap-[20px] xl:grid-cols-4 font-light ">
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
        <h4 className="text-[#f21f30] font-medium ">NOW SHOWING</h4>
        <p className="text-[#bdbdbd]">Movies curontly showing in theater.</p>
        <div className="w-[100%] flex items-center justify-around xl:mt-[50px] ">
          <span className="w-[150px] font-bold text-[110px] text-[#f21f30] ">
            {inView && (
              <CountUp start={0} end={nowShowing?.length || 0} duration={3} />
            )}
          </span>
          <img
            className="w-[150px] h-[150px] object-cover xl:w-[100px] xl:h-[100px] "
            src="admin-now.png"
            alt="now"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] " ref={ref}>
        <h4 className="text-[#f21f30] font-medium  ">USERS </h4>
        <p className="text-[#bdbdbd]">Now we have active users of,</p>
        <div className="w-[100%] flex items-center justify-around xl:mt-[50px] ">
          <img
            className="w-[150px] h-[150px] object-cover xl:hidden "
            src="admin-user.png"
            alt="now"
          />
          <span className="w-[150px] font-bold text-[110px] text-[#f21f30]">
            {inView && (
              <CountUp start={0} end={filterUsers?.length || 0} duration={3} />
            )}
          </span>
          <img
            className="hidden xl:block xl:w-[100px] xl:h-[100px] "
            src="admin-user.png"
            alt="now"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-[#1a1a1a] p-[10px] xl:col-span-2 ">
        <h4 className="text-[#f21f30] font-medium">USER ENGAGEMENT</h4>
        <p className="text-[#bdbdbd]">Monthly user engagement.</p>
        <div className="mt-[20px] h-[250px] xl:h-[200px] ">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            series={[
              {
                data: monthlyCountsLine,
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
        <h4 className="text-[#f21f30] font-medium">MOVIE RATING</h4>
        <p className="text-[#bdbdbd]">Movies classify by age.</p>
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
        <h4 className="text-[#f21f30] font-medium">INCOME</h4>
        <p className="text-[#bdbdbd]">Monthly income statement.</p>
        <div className="mt-[20px] ">
          <BarChart
            series={[{ data: monthlyCountsBar, color: "#f21f30" }]}
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
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
