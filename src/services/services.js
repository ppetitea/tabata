import Config from "../models/Config";
import globalConfig from "../_config/config";

const config = Config(globalConfig);

export { config };
