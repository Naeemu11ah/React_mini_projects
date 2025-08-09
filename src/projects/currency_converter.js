import React, { useState, useEffect } from "react";

const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("0");
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("PKR");
  const [rate, setRate] = useState(null);
  const [result, setResult] = useState("");

  const getFlagUrl = (currencyCode) => {
    const countryCode = countryList[currencyCode];
    return `https://flagsapi.com/${countryCode}/flat/64.png`;
  };

  const fetchRate = async () => {
    if (!amount || isNaN(amount)) return;
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.toLowerCase()}.json`
      );
      const data = await response.json();
      const fetchedRate = data[fromCurr.toLowerCase()][toCurr.toLowerCase()];
      setRate(fetchedRate);
      setResult(
        `${amount}${fromCurr} = ${Math.floor(amount * fetchedRate)}${toCurr}`
      );
    } catch (error) {
      setResult("Failed to fetch rate");
    }
  };

  useEffect(() => {
    fetchRate();
  }, [fromCurr, toCurr]);

  const swapCurrencies = () => {
    const temp = fromCurr;
    setFromCurr(toCurr);
    setToCurr(temp);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-3xl">
      <h3 className="text-[20px] font-bold text-center">Currency Converter</h3>

      <p className="mt-6 text-[16px] font-semibold">Enter Amount</p>
      <input
        type="number"
        className="w-full py-1 px-2 rounded-md border-[1.9px] border-black border-opacity-70 font-semibold text-xl outline-none"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex justify-between items-center mt-1 gap-2">
        {/* FROM */}
        <div className="From">
          <p className="text-[17px] font-semibold mt-[22px]">From</p>
          <div className="flex items-center border-[1.9px] border-black border-opacity-70 rounded-md pl-1">
            <img src={getFlagUrl(fromCurr)} alt="flag" className="w-[30px]" />
            <select
              value={fromCurr}
              onChange={(e) => setFromCurr(e.target.value)}
              className="bg-transparent outline-none border-none p-2"
            >
              {Object.keys(countryList).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <i
          className="fas fa-exchange-alt mt-11 cursor-pointer text-lg hover:rotate-180 transition duration-500"
          onClick={swapCurrencies}
        />

        {/* TO */}
        <div className="To">
          <p className="text-[17px] font-semibold mt-[22px]">To</p>
          <div className="flex items-center border-[1.9px] border-black border-opacity-70 rounded-md pl-1">
            <img src={getFlagUrl(toCurr)} alt="flag" className="w-[30px]" />
            <select
              value={toCurr}
              onChange={(e) => setToCurr(e.target.value)}
              className="bg-transparent outline-none border-none p-2"
            >
              {Object.keys(countryList).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="msg mt-[22px] text-[17px] font-semibold">
        {result || `1${fromCurr} = ${rate || "..."}` + toCurr}
      </p>

      <button
        onClick={fetchRate}
        className="w-full mt-6 py-1 px-4 border-2 border-black rounded-xl bg-purple-700 text-white text-[17px] font-medium cursor-pointer"
      >
        Get Exchange Rates
      </button>
    </div>
  );
}
