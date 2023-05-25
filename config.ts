import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("debug");

config.google_drive = {
  sheets_folder_id: "1YcG0GDJME1Ds1UzwXcEmo97Ckb5tnUWc",
  assets_folder_id: "1bnGPB70wPp9hzVOpT4LkPX9h3FwIrqfs",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/App-Debug-Content.git",
  content_tag_latest: "1.1.1",
};

config.app_data.output_path = "./app_data";

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "Debug App";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Debug App";

export default config;