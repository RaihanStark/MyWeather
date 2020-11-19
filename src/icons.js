// without webpack
import sky1_d from "./assets/svg/01d.svg";
import cloud2_d from "./assets/svg/02d.svg";
import cloud3_d from "./assets/svg/03d.svg";
import cloud4_d from "./assets/svg/04d.svg";
import rain9_d from "./assets/svg/09d.svg";
import rain10_d from "./assets/svg/10d.svg";
import rain11_d from "./assets/svg/11d.svg";
import snow1_d from "./assets/svg/13d.svg";
import mist1_d from "./assets/svg/50d.svg";

import sky1_n from "./assets/svg/01n.svg";
import cloud2_n from "./assets/svg/02n.svg";
import cloud3_n from "./assets/svg/03n.svg";
import cloud4_n from "./assets/svg/04n.svg";
import rain9_n from "./assets/svg/09n.svg";
import rain10_n from "./assets/svg/10n.svg";
import rain11_n from "./assets/svg/11n.svg";
import snow1_n from "./assets/svg/13n.svg";
import mist1_n from "./assets/svg/50n.svg";

import location from "./assets/svg/location.svg";

function getIcon(id) {
  let icons = {
    "01d": sky1_d,
    "02d": cloud2_d,
    "03d": cloud3_d,
    "04d": cloud4_d,
    "09d": rain9_d,
    "10d": rain10_d,
    "11d": rain11_d,
    "13d": snow1_d,
    "50d": mist1_d,
    "01n": sky1_n,
    "02n": cloud2_n,
    "03n": cloud3_n,
    "04n": cloud4_n,
    "09n": rain9_n,
    "10n": rain10_n,
    "11n": rain11_n,
    "13n": snow1_n,
    "50n": mist1_n,
    location: location,
  };
  return icons[id];
}

export default getIcon;
