import { CiPalette } from "react-icons/ci";
import { BsEmojiLaughing } from "react-icons/bs";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { RiVipCrownFill } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { RiSettings3Line } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";
import { FcPicture } from "react-icons/fc";
import { CgMathPlus } from "react-icons/cg";
import { TbBrandSupabase } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BsArrowDown, BsArrowUpShort } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { BiSave } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineCalculator } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../assets/logo.png";
import fondo from "../assets/fondo.svg";

export const variables = {
  sidebarWidth: `300px`,
  sidebarWidthInitial: `10vw`,
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `24px`,
  xlSpacing: `32px`,
  xxlSpacing: `48px`,
  borderRadius: `6px`,
  boxShadowGray: `box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
  -webkit-box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
  -moz-box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);`,

  colorEarning: `#53B257`,
  colorBgEarnings: `#e6ffe7`,
  colorExpenses: `#fe6156`,
  colorBgExpenses: `#fbcbc9`,
  colorError: `#F54E41`,
  colorSuccess: `#aa5102`,
  green: `#53B257`,
  red: `#F54E41`,
  colorPrincipal: `#00F34A`,
  colorSecondary: `#F2C84B`,
  colorSelect: "#F29422",
  bpmaggie: `240px`,
  bplisa: `480px`,
  bpbart: `768px`,
  bpmarge: `992px`,
  bphomer: `1200px`,

  logo: logo,
  bgImage: fondo,

  paletteColors: CiPalette,
  emoji: BsEmojiLaughing,
  iconEditTable: RiEditLine,
  iconDeleteTable: RiDeleteBin2Line,
  iconArrowDown: IoIosArrowDown,
  iconCrown: RiVipCrownFill,
  iconUser: BiUserCircle,
  iconSettings: RiSettings3Line,
  iconCloseSession: MdExitToApp,
  iconEmptyPicture: FcPicture,
  iconAdd: CgMathPlus,
  iconSupabase: TbBrandSupabase,
  iconReact: FaReact,
  iconArrowDownLarge: BsArrowDown,
  iconUpLarge: BsArrowUpShort,
  iconBalance: FaBalanceScale,
  iconGoogle: BsGoogle,
  iconClose: RiCloseLine,
  iconSave: BiSave,
  iconHelp: BsQuestionCircle,
  iconPie: HiOutlineChartPie,
  iconLineal: SlGraph,
  iconBars: BsBarChartLine,
  iconCalculator: AiOutlineCalculator,
  iconCheck: BsCalendarCheck,
  iconArrowRight: IoIosArrowForward,
};
