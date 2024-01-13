import "../css/hw.css";
import hw from "../js/hw.json";
import hw__base from "../template/hw.hbs";

const listEl = document.querySelector(".hw");

const hwList =  hw__base(hw);

listEl.insertAdjacentHTML("beforeend", hwList);