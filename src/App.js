import React, { Component } from "react";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";
import Layout from "./hoc/Layout/Layout";
import Axios from "axios";
import "./entry.scss";

import TempToggle from "./components/TempToggle/TempToggle";

import styled from "styled-components";

class App extends Component {
  state = {
    city: "jakarta",
    data: [],
    units: "c",
    country: "",
  };

  DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  Toggler = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  TextLink = styled.div`
    color: ${(props) => (props.active ? "black" : "#a4a6ac")};
    font-size: 1.3em;
    font-weight: 600;
    border-bottom: ${(props) => (props.active ? "black solid 2px" : "none")};
  `;

  componentDidMount() {
    this.updateWeather(this.state.city);
  }

  updateWeather = (city) => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=64d076ca6ef5b81f2af42f681f245c17&units=metric`
    ).then((res) => {
      let min_temp = [];
      let max_temp = [];
      let day = 1;
      let data = [];
      for (const [index, i] of res.data.list.entries()) {
        min_temp.push(i.main.temp_min);
        max_temp.push(i.main.temp_max);
        if ((index + 1) % 8 === 0) {
          let day_num = new Date(i.dt_txt.split(" ")[0]).getDay();
          data.push({
            day: this.DAYS[day_num].slice(0, 3),
            weather: i.weather[0].main,
            min: Math.min(...min_temp),
            max: Math.max(...max_temp),
          });

          // reset data
          min_temp = [];
          max_temp = [];
          day++;
        }
        this.setState({
          data: data,
          country: this.country2To3[res.data.city.country],
          city: res.data.city.name,
        });
      }
    });
  };

  switchTempsUnit = () => {
    let toggleTo = this.state.units === "c" ? "f" : "c";
    console.log("convert to", toggleTo);

    let data = this.state.data;
    let convertedData = [];
    for (const i of data) {
      i.min = this.convertTempTo(toggleTo, i.min).toFixed(2);
      i.max = this.convertTempTo(toggleTo, i.max).toFixed(2);
      convertedData.push(i);
    }

    this.setState({ units: toggleTo, data: convertedData });
  };

  convertTempTo(toggleTo, number) {
    if (toggleTo === "c") {
      // f to c
      return ((number - 32) * 5) / 9;
    } else if (toggleTo === "f") {
      // c to f
      return (number * 9) / 5 + 32;
    }
  }

  changeCity = (city_target) => {
    this.setState({ city: city_target, data: [] });
    this.updateWeather(city_target);
  };

  country2To3 = {
    AF: "AFG",
    AX: "ALA",
    AL: "ALB",
    DZ: "DZA",
    AS: "ASM",
    AD: "AND",
    AO: "AGO",
    AI: "AIA",
    AQ: "ATA",
    AG: "ATG",
    AR: "ARG",
    AM: "ARM",
    AW: "ABW",
    AU: "AUS",
    AT: "AUT",
    AZ: "AZE",
    BS: "BHS",
    BH: "BHR",
    BD: "BGD",
    BB: "BRB",
    BY: "BLR",
    BE: "BEL",
    BZ: "BLZ",
    BJ: "BEN",
    BM: "BMU",
    BT: "BTN",
    BO: "BOL",
    BA: "BIH",
    BW: "BWA",
    BV: "BVT",
    BR: "BRA",
    VG: "VGB",
    IO: "IOT",
    BN: "BRN",
    BG: "BGR",
    BF: "BFA",
    BI: "BDI",
    KH: "KHM",
    CM: "CMR",
    CA: "CAN",
    CV: "CPV",
    KY: "CYM",
    CF: "CAF",
    TD: "TCD",
    CL: "CHL",
    CN: "CHN",
    HK: "HKG",
    MO: "MAC",
    CX: "CXR",
    CC: "CCK",
    CO: "COL",
    KM: "COM",
    CG: "COG",
    CD: "COD",
    CK: "COK",
    CR: "CRI",
    CI: "CIV",
    HR: "HRV",
    CU: "CUB",
    CY: "CYP",
    CZ: "CZE",
    DK: "DNK",
    DJ: "DJI",
    DM: "DMA",
    DO: "DOM",
    EC: "ECU",
    EG: "EGY",
    SV: "SLV",
    GQ: "GNQ",
    ER: "ERI",
    EE: "EST",
    ET: "ETH",
    FK: "FLK",
    FO: "FRO",
    FJ: "FJI",
    FI: "FIN",
    FR: "FRA",
    GF: "GUF",
    PF: "PYF",
    TF: "ATF",
    GA: "GAB",
    GM: "GMB",
    GE: "GEO",
    DE: "DEU",
    GH: "GHA",
    GI: "GIB",
    GR: "GRC",
    GL: "GRL",
    GD: "GRD",
    GP: "GLP",
    GU: "GUM",
    GT: "GTM",
    GG: "GGY",
    GN: "GIN",
    GW: "GNB",
    GY: "GUY",
    HT: "HTI",
    HM: "HMD",
    VA: "VAT",
    HN: "HND",
    HU: "HUN",
    IS: "ISL",
    IN: "IND",
    ID: "IDN",
    IR: "IRN",
    IQ: "IRQ",
    IE: "IRL",
    IM: "IMN",
    IL: "ISR",
    IT: "ITA",
    JM: "JAM",
    JP: "JPN",
    JE: "JEY",
    JO: "JOR",
    KZ: "KAZ",
    KE: "KEN",
    KI: "KIR",
    KP: "PRK",
    KR: "KOR",
    KW: "KWT",
    KG: "KGZ",
    LA: "LAO",
    LV: "LVA",
    LB: "LBN",
    LS: "LSO",
    LR: "LBR",
    LY: "LBY",
    LI: "LIE",
    LT: "LTU",
    LU: "LUX",
    MK: "MKD",
    MG: "MDG",
    MW: "MWI",
    MY: "MYS",
    MV: "MDV",
    ML: "MLI",
    MT: "MLT",
    MH: "MHL",
    MQ: "MTQ",
    MR: "MRT",
    MU: "MUS",
    YT: "MYT",
    MX: "MEX",
    FM: "FSM",
    MD: "MDA",
    MC: "MCO",
    MN: "MNG",
    ME: "MNE",
    MS: "MSR",
    MA: "MAR",
    MZ: "MOZ",
    MM: "MMR",
    NA: "NAM",
    NR: "NRU",
    NP: "NPL",
    NL: "NLD",
    AN: "ANT",
    NC: "NCL",
    NZ: "NZL",
    NI: "NIC",
    NE: "NER",
    NG: "NGA",
    NU: "NIU",
    NF: "NFK",
    MP: "MNP",
    NO: "NOR",
    OM: "OMN",
    PK: "PAK",
    PW: "PLW",
    PS: "PSE",
    PA: "PAN",
    PG: "PNG",
    PY: "PRY",
    PE: "PER",
    PH: "PHL",
    PN: "PCN",
    PL: "POL",
    PT: "PRT",
    PR: "PRI",
    QA: "QAT",
    RE: "REU",
    RO: "ROU",
    RU: "RUS",
    RW: "RWA",
    BL: "BLM",
    SH: "SHN",
    KN: "KNA",
    LC: "LCA",
    MF: "MAF",
    PM: "SPM",
    VC: "VCT",
    WS: "WSM",
    SM: "SMR",
    ST: "STP",
    SA: "SAU",
    SN: "SEN",
    RS: "SRB",
    SC: "SYC",
    SL: "SLE",
    SG: "SGP",
    SK: "SVK",
    SI: "SVN",
    SB: "SLB",
    SO: "SOM",
    ZA: "ZAF",
    GS: "SGS",
    SS: "SSD",
    ES: "ESP",
    LK: "LKA",
    SD: "SDN",
    SR: "SUR",
    SJ: "SJM",
    SZ: "SWZ",
    SE: "SWE",
    CH: "CHE",
    SY: "SYR",
    TW: "TWN",
    TJ: "TJK",
    TZ: "TZA",
    TH: "THA",
    TL: "TLS",
    TG: "TGO",
    TK: "TKL",
    TO: "TON",
    TT: "TTO",
    TN: "TUN",
    TR: "TUR",
    TM: "TKM",
    TC: "TCA",
    TV: "TUV",
    UG: "UGA",
    UA: "UKR",
    AE: "ARE",
    GB: "GBR",
    US: "USA",
    UM: "UMI",
    UY: "URY",
    UZ: "UZB",
    VU: "VUT",
    VE: "VEN",
    VN: "VNM",
    VI: "VIR",
    WF: "WLF",
    EH: "ESH",
    YE: "YEM",
    ZM: "ZMB",
    ZW: "ZWE",
    XK: "XKX",
  };

  render() {
    return (
      <Layout
        changeCityHandler={this.changeCity}
        city={this.state.city}
        country={this.state.country.toLowerCase()}
      >
        <this.Toggler>
          <div className="d-flex">
            <this.TextLink>Today</this.TextLink>
            <this.TextLink className="ml-4" active>
              Week
            </this.TextLink>
          </div>

          <div className="d-flex">
            <TempToggle
              selected={this.state.units}
              toggled={this.switchTempsUnit}
            ></TempToggle>
          </div>
        </this.Toggler>

        <ForecastPanel data={this.state.data} />
      </Layout>
    );
  }
}

export default App;
