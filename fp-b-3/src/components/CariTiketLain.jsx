import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

export default function CariTiketLain() {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const departureDateRef = useRef(null);
  const returnDateRef = useRef(null);

  return (
    <div className="mx-auto max-w-screen-xl flex justify-between items-center bg-white rounded-xl shadow-lg">
      <div className="flex items-center p-8">
        <div className="block sm:hidden pr-5 absolute sm:justify-start">
          <button
            onClick={handleDropdownToggle}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute  mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold"
              >
                <div className="flex items-center gap-x-2 ">
                  <div className="cursor-pointer">
                    <SlCalender
                      onClick={() => departureDateRef.current.setFocus()}
                    />
                  </div>
                  <div className="font-medium">Waktu Keberangkatan</div>
                </div>
                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  dateFormat="EEE, d MMM yyyy"
                  className="cursor-pointer text-[#0C68BE]"
                  ref={departureDateRef}
                />
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold"
              >
                <div className="flex items-center gap-x-2 ">
                  <div className="cursor-pointer ">
                    <SlCalender
                      onClick={() => returnDateRef.current.setFocus()}
                    />
                  </div>
                  <div className="font-medium ">Waktu Kembali</div>
                </div>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  dateFormat="EEE, d MMM yyyy"
                  className="cursor-pointer text-[#0C68BE]"
                  ref={returnDateRef}
                />
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold sm:hidden"
              >
                <div className="flex items-center font-semibold gap-x-2">
                  <div className="flex items-center gap-2">
                    <GiAirplaneDeparture />
                    <div>Jakarta (CGK)</div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold sm:hidden"
              >
                <div className="flex items-center font-semibold gap-x-2">
                  <div className="flex items-center gap-2">
                    <GiAirplaneArrival />
                    <div>Medan (KLM)</div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold sm:hidden"
              >
                <div className="flex items-center gap-x-2 px-">
                  <div className="text">1 passengers</div>
                  <div className=""> |</div>
                  <div>Economy</div>
                </div>
              </a>
            </div>
          )}
        </div>
        <div
          className="hidden flex-col pr-20 border-r border-gray-500 sm:flex"
          style={{ borderRight: "1px solid", height: "40px" }}
        >
          <div className="flex items-center font-semibold gap-x-2">
            <div className="flex items-center gap-2">
              <GiAirplaneDeparture />
              <div>Jakarta (CGK)</div>
            </div>
            <div> - </div>
            <div className="flex items-center gap-2">
              <GiAirplaneArrival />
              <div>Medan (KLM)</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div>1 passengers</div>
            <div className=""> | Economy</div>
          </div>
        </div>

        <div
          className="hidden flex-col pr-20 pl-20 border-r border-gray-500 md:flex "
          style={{ borderRight: "1px solid", height: "40px" }}
        >
          <div className="flex items-center gap-x-2 ">
            <div className="cursor-pointer">
              <SlCalender onClick={() => departureDateRef.current.setFocus()} />
            </div>
            <div className="font-medium">Waktu Keberangkatan</div>
          </div>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            dateFormat="EEE, d MMM yyyy"
            className="cursor-pointer text-[#0C68BE]"
            ref={departureDateRef}
          />
        </div>
        <div
          className="hidden flex-col pl-20 md:flex"
          style={{ borderRight: "1px", height: "40px" }}
        >
          <div className="flex items-center gap-x-2 ">
            <div className="cursor-pointer ">
              <SlCalender onClick={() => returnDateRef.current.setFocus()} />
            </div>
            <div className="font-medium ">Waktu Kembali</div>
          </div>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="EEE, d MMM yyyy"
            className="cursor-pointer text-[#0C68BE]"
            ref={returnDateRef}
          />
        </div>
      </div>
      <div className="flex items-center p-8">
        <div className="hidden sm:block md:hidden pr-5 relative">
          <button
            onClick={handleDropdownToggle}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold"
              >
                <div className="flex items-center gap-x-2 ">
                  <div className="cursor-pointer">
                    <SlCalender
                      onClick={() => departureDateRef.current.setFocus()}
                    />
                  </div>
                  <div className="font-medium">Waktu Keberangkatan</div>
                </div>
                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  dateFormat="EEE, d MMM yyyy"
                  className="cursor-pointer text-[#0C68BE]"
                  ref={departureDateRef}
                />
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold"
              >
                <div className="flex items-center gap-x-2 ">
                  <div className="cursor-pointer ">
                    <SlCalender
                      onClick={() => returnDateRef.current.setFocus()}
                    />
                  </div>
                  <div className="font-medium ">Waktu Kembali</div>
                </div>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  dateFormat="EEE, d MMM yyyy"
                  className="cursor-pointer text-[#0C68BE]"
                  ref={returnDateRef}
                />
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold sm:hidden"
              >
                <div className="flex items-center font-semibold gap-x-2">
                  <div className="flex items-center gap-2">
                    <GiAirplaneDeparture />
                    <div>Jakarta (CGK)</div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold sm:hidden"
              >
                <div className="flex items-center font-semibold gap-x-2">
                  <div className="flex items-center gap-2">
                    <GiAirplaneArrival />
                    <div>Medan (KLM)</div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block rounded-md  px-4 py-2 text-gray-800/60 hover:bg-gray-300 hover:text-gray-800 font-semibold sm:hidden"
              >
                <div className="flex items-center gap-x-2 px-">
                  <div className="text">1 passengers</div>
                  <div className=""> |</div>
                  <div>Economy</div>
                </div>
              </a>
            </div>
          )}
        </div>
        <button className="rounded-xl bg-[#2A91E5] px-5 py-2.5 font-medium text-white hover:bg-sky-700 hover:shadow">
          Cari Tiket Lainnya
        </button>
      </div>
    </div>
  );
}