import devConfig from "./configs/devConfig.json";
import prodConfig from "./configs/prodConfig.json";
import appConfig from "./configs/appConfig.json";

const envConfig = prodConfig;

const globalConfig = {
  env: envConfig.env,
  timeDirection: appConfig.timeDirection,
  timerBeep: appConfig.timerBeep,
};

export default globalConfig;
