import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
//loading
import Loading from "../../../hooks/common/Loading";
//error
import Error from "../../../hooks/common/Error";
//hooks
import { useMovie } from "../../../hooks/user/Details";
import { formatDuration } from "../../../hooks/common/Format";
import { useShowTime } from "../../../hooks/user/Showtime";
import { useAddBooking } from "../../../hooks/user/Booking";
//payPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

//seat select
const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const seatPrice = 1;

const Booking = () => {
  //movie id
  const location = useLocation();
  const movieId = location.state?.movieId;

  //movies
  const { data: movieDetails, isLoading, isError } = useMovie(movieId);
  //showtime
  const { data: showTimeDetails } = useShowTime(movieId);
  //add booking
  const { mutate: addBooking } = useAddBooking();

  //timw function
  const [selectedTime, setSelectedTime] = useState(null);
  //filter time
  const selectSeat = showTimeDetails?.filter(
    (showtime) => showtime._id === selectedTime
  );
  //week day calculate
  const normalize = (d) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  };

  const startOfWeek = (date, weekStartsOn = 1) => {
    const d = normalize(date);
    const diff = (d.getDay() - weekStartsOn + 7) % 7;
    d.setDate(d.getDate() - diff);
    return normalize(d);
  };

  const getWeekRangeFor = (date = new Date(), weekStartsOn = 1) => {
    const start = startOfWeek(date, weekStartsOn);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start: normalize(start), end: normalize(end) };
  };

  const fmt = (d) => {
    const x = normalize(d);
    return `${String(x.getMonth() + 1).padStart(2, "0")}/${String(
      x.getDate()
    ).padStart(2, "0")}/${x.getFullYear()}`;
  };

  const getCurrentWeekRange = (weekStartsOn = 1) => {
    const today = new Date();
    const jsTodayIdx = today.getDay();
    const weekEndIdx = (weekStartsOn + 6) % 7;
    const baseDate =
      jsTodayIdx === weekEndIdx
        ? new Date(today.setDate(today.getDate() + 1))
        : today;
    const { start, end } = getWeekRangeFor(baseDate, weekStartsOn);
    return `${fmt(start)} - ${fmt(end)}`;
  };

  //date calculate
  const today = new Date().getDay();
  let isDayPassed = false;
  if (today === 0) {
    isDayPassed = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  } else if (today === 1) {
    isDayPassed = [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  } else if (today === 2) {
    isDayPassed = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  } else if (today === 3) {
    isDayPassed = ["Thursday", "Friday", "Saturday", "Sunday"];
  } else if (today === 4) {
    isDayPassed = ["Friday", "Saturday", "Sunday"];
  } else if (today === 5) {
    isDayPassed = ["Saturday", "Sunday"];
  } else if (today === 6) {
    isDayPassed = ["Sunday"];
  }
  const isDayPassedOrToday = (dayString) => {
    return isDayPassed.includes(dayString);
  };

  //seats function
  const [selectedSeats, setSelectedSeats] = useState([]);
  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  //checkout
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPaypal, setShowPaypal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const bookedSeats = [];
  bookedSeats.push(...selectedSeats);
  const totalPrice = selectedSeats.length * seatPrice;

  const handleCheckout = () => {
    if (!selectedTime) {
      setError("Please select a showtime.");
      return;
    } else if (selectedSeats.length === 0) {
      setError("Please select at least one seat.");
      return;
    }
    setError("");
    setShowPaypal(true);
  };

  const buildBookingData = (paymentInfo) => ({
    movieId,
    showtimeId: selectedTime,
    bookedSeats,
    totalAmount: totalPrice,
    weekRange: getCurrentWeekRange(),
    payment: paymentInfo,
  });

  //loading
  if (isLoading) {
    return <Loading />;
  }
  //error
  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-[100%] p-[10px] text-[#eeeeee] font-light mt-[20px] cursor-default xl:w-[1240px] xl:mx-auto ">
      <div className="flex flex-wrap items-center justify-center gap-[20px] ">
        <div>
          <div className="flex gap-[20px] ">
            <img
              className="w-[70px] h-[70px] object-cover rounded-full md:w-[90px] md:h-[90px] "
              src={movieDetails?.poster || "default_movie.jpg"}
              alt={movieDetails?.title}
            />
            <div>
              <h2 className="font-medium text-white uppercase ">
                {movieDetails?.title}
              </h2>
              <p>
                <span className="capitalize">
                  {formatDuration(movieDetails?.runtime) || "N/A"}
                </span>
                <span className="ml-[10px] pl-[10px] border-l-[2px] border-[#bdbdbd] text-[#f21f30] opacity-[1] font-bold ">
                  {movieDetails?.ratingCategory || "N/A"}
                </span>
              </p>
            </div>
          </div>
          <h4 className="text-white font-medium mt-[40px]">
            <i className="bi bi-geo-alt"></i> AMC PORT, MATARA
          </h4>
          <p className="text-[#bdbdbd]">
            Select Showtime for{" "}
            <span className="text-white">{getCurrentWeekRange()}</span>
          </p>
          <div className="w-[320px] mt-[20px] flex flex-wrap gap-[10px] mx-auto md:w-[100%] ">
            {/* repeat */}
            {showTimeDetails?.map((showtime) => (
              <label
                className={`${
                  selectedTime === showtime?._id
                    ? "border-white bg-white text-black font-medium"
                    : "border-[#bdbdbd]/50 bg-[#0c0c0c] text-[#eeeeee]"
                } ${
                  isDayPassedOrToday(showtime?.date)
                    ? "cursor-pointer hover:border-[#bdbdbd]"
                    : "opacity-[0.6] cursor-not-allowed"
                } w-[200px] h-[40px] rounded-[20px] border-[1px] flex items-center justify-center transition-colors duration-300 ease-out`}
                key={showtime?._id}
                onClick={() => {
                  if (isDayPassedOrToday(showtime?.date)) {
                    setSelectedTime(showtime?._id);
                  }
                }}
              >
                <p className="capitalize">
                  {showtime?.date} {showtime?.time}
                </p>
              </label>
            ))}
            {/* repeat */}
          </div>
        </div>
        {/* summery */}
        <div className="w-[90%] block md:w-[300px] mt-[30px] xl:ml-auto xl:w-[400px] ">
          <h4 className="text-white font-medium">SUMMARY</h4>
          <p className="text-[#bdbdbd] mt-[10px]">Selected Seats</p>
          <h5 className="w-[100%] font-light p-[5px] border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 mt-[5px]">
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </h5>
          <p className="text-[#bdbdbd] mt-[10px]">Total Price</p>
          <h5 className="w-[100%] p-[5px] font-light border-t-[1px] border-b-[1px] border-[#bdbdbd]/50 mt-[5px]">
            $.{totalPrice}.00
          </h5>
          <p className="w-[100%] lowercase h-[30px] text-[#f21f30] font-extralight">
            {error}
          </p>
          {/* paypal */}
          {!showPaypal ? (
            <button
              className="flex w-[200px] bg-[#f21f30] text-white border-[1px] border-[#f21f30] hover:bg-[#0c0c0c] hover:text-[#f21f30]"
              onClick={handleCheckout}
            >
              CHECK OUT
            </button>
          ) : (
            <div className="w-[200px]">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ASUsq6Nhh-mX4v3WU5vNc7cLHGZWGNPxJclU53zxypB1UNcYpsXLkkCwLzBODLZPwT2cTR61EMW4_Lrn",
                  currency: "USD",
                  intent: "capture",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  forceReRender={[totalPrice, "USD"]}
                  createOrder={(data, actions) => {
                    setPaymentProcessing(true);

                    const amountStr = Number(totalPrice).toFixed(2);

                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amountStr,
                            currency_code: "USD",
                          },
                          description: `Booking for ${
                            movieDetails?.title
                          } - seats: ${bookedSeats.join(", ")}`,
                        },
                      ],
                      application_context: {
                        shipping_preference: "NO_SHIPPING",
                      },
                    });
                  }}
                  onApprove={async (data, actions) => {
                    try {
                      const capture = await actions.order.capture();
                      const bookingData = buildBookingData({
                        id: capture.id,
                        status: capture.status,
                        payer: capture.payer,
                        purchase_units: capture.purchase_units,
                      });
                      addBooking(bookingData, {
                        onSuccess: () => {
                          setPaymentProcessing(false);
                          navigate("/thank");
                        },
                        onError: (err) => {
                          setPaymentProcessing(false);
                          toast.error(
                            "Booking save failed. Please contact support !"
                          );
                          console.error("addBooking error:", err);
                        },
                      });
                    } catch (err) {
                    } finally {
                      setPaymentProcessing(false);
                    }
                  }}
                  onError={(err) => {
                    console.error("PayPal error:", err);
                    setPaymentProcessing(false);
                    toast.error(
                      "Payment could not be processed. Try again later !"
                    );
                  }}
                  onCancel={() => {
                    setPaymentProcessing(false);
                    toast.info("Payment cancelled !");
                  }}
                />
              </PayPalScriptProvider>
              {paymentProcessing && (
                <p className="mt-2">Processing payment...</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-[60px]">
        {/* screen */}
        <div className="w-[90%] mx-auto h-[10px] rounded-tl-[100%] rounded-tr-[100%] bg-[#bdbdbd] my-6 relative xl:w-[70%] "></div>

        {/* seat grid */}
        <div className="w-[100%] flex flex-col gap-[20px] mt-[60px] xl:mt-[100px]">
          <div className="flex justify-center gap-[10px]">
            {rows.map((row) => {
              const isSelected = selectedSeats.includes(`A${row + 1}`);
              const margin = row === 5 ? "xl:ml-[20px]" : "";
              return (
                <div
                  onClick={
                    selectSeat?.length === 0 ||
                    selectSeat?.[0]?.seats?.[row]?.isBooked === true
                      ? null
                      : () => toggleSeat(`A${row + 1}`)
                  }
                  className={` ${
                    selectSeat?.[0]?.seats?.[row]?.isBooked === true &&
                    "bg-[#1a9362] border-[#1a9362]"
                  } ${
                    isSelected
                      ? "bg-[#f21f30] border-[#f21f30]"
                      : "border-[#bdbdbd]/50 "
                  } ${margin}
                      w-[60px] h-[40px] border-[2px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition duration-300 ease-out hover:border-[#bdbdbd] md:rounded-tl-[40%] md:rounded-tr-[40%] border-[#bdbdbd]/50 
                    `}
                  key={`A${row + 1}`}
                >
                  A{row + 1}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-[10px]">
            {rows.map((row) => {
              const isSelected = selectedSeats.includes(`B${row + 1}`);
              const margin = row === 5 ? "xl:ml-[20px]" : "";
              return (
                <div
                  onClick={
                    selectSeat?.length === 0 ||
                    selectSeat?.[0]?.seats?.[row + 10]?.isBooked === true
                      ? null
                      : () => toggleSeat(`B${row + 1}`)
                  }
                  className={` ${
                    selectSeat?.[0]?.seats?.[row + 10]?.isBooked === true &&
                    "bg-[#1a9362] border-[#1a9362]"
                  } ${
                    isSelected
                      ? "bg-[#f21f30] border-[#f21f30]"
                      : "border-[#bdbdbd]/50 "
                  } ${margin} xl:ml-[3px]
                      w-[60px] h-[40px] border-[2px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition duration-300 ease-out hover:border-[#bdbdbd] md:rounded-tl-[40%] md:rounded-tr-[40%] border-[#bdbdbd]/50 
                    `}
                  key={`B${row + 1}`}
                >
                  B{row + 1}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-[10px]">
            {rows.map((row) => {
              const isSelected = selectedSeats.includes(`C${row + 1}`);
              const margin = row === 5 ? "xl:ml-[20px]" : "";
              return (
                <div
                  onClick={
                    selectSeat?.length === 0 ||
                    selectSeat?.[0]?.seats?.[row + 20]?.isBooked === true
                      ? null
                      : () => toggleSeat(`C${row + 1}`)
                  }
                  className={` ${
                    selectSeat?.[0]?.seats?.[row + 20]?.isBooked === true &&
                    "bg-[#1a9362] border-[#1a9362]"
                  } ${
                    isSelected
                      ? "bg-[#f21f30] border-[#f21f30]"
                      : "border-[#bdbdbd]/50 "
                  } ${margin} xl:ml-[6px]
                      w-[60px] h-[40px] border-[2px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition duration-300 ease-out hover:border-[#bdbdbd] md:rounded-tl-[40%] md:rounded-tr-[40%] border-[#bdbdbd]/50 
                    `}
                  key={`C${row + 1}`}
                >
                  C{row + 1}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-[10px]">
            {rows.map((row) => {
              const isSelected = selectedSeats.includes(`D${row + 1}`);
              const margin = row === 5 ? "xl:ml-[20px]" : "";
              return (
                <div
                  onClick={
                    selectSeat?.length === 0 ||
                    selectSeat?.[0]?.seats?.[row + 30]?.isBooked === true
                      ? null
                      : () => toggleSeat(`D${row + 1}`)
                  }
                  className={` ${
                    selectSeat?.[0]?.seats?.[row + 30]?.isBooked === true &&
                    "bg-[#1a9362] border-[#1a9362]"
                  } ${
                    isSelected
                      ? "bg-[#f21f30] border-[#f21f30]"
                      : "border-[#bdbdbd]/50 "
                  } ${margin} xl:ml-[8px]
                      w-[60px] h-[40px] border-[2px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition duration-300 ease-out hover:border-[#bdbdbd] md:rounded-tl-[40%] md:rounded-tr-[40%] border-[#bdbdbd]/50 
                    `}
                  key={`D${row + 1}`}
                >
                  D{row + 1}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-[10px]">
            {rows.map((row) => {
              const isSelected = selectedSeats.includes(`E${row + 1}`);
              const margin = row === 5 ? "xl:ml-[20px]" : "";
              return (
                <div
                  onClick={
                    selectSeat?.length === 0 ||
                    selectSeat?.[0]?.seats?.[row + 40]?.isBooked === true
                      ? null
                      : () => toggleSeat(`E${row + 1}`)
                  }
                  className={` ${
                    selectSeat?.[0]?.seats?.[row + 40]?.isBooked === true &&
                    "bg-[#1a9362] border-[#1a9362]"
                  } ${
                    isSelected
                      ? "bg-[#f21f30] border-[#f21f30]"
                      : "border-[#bdbdbd]/50 "
                  } ${margin} xl:ml-[10px]
                      w-[60px] h-[40px] border-[2px] rounded-[5px] text-[14px] flex items-center cursor-pointer font-extralight justify-center transition duration-300 ease-out hover:border-[#bdbdbd] md:rounded-tl-[40%] md:rounded-tr-[40%] border-[#bdbdbd]/50 
                    `}
                  key={`E${row + 1}`}
                >
                  E{row + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
