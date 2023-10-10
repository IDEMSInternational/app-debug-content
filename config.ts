import { generateDeploymentConfig } from "scripts";
import { logWarning } from "scripts/src/utils";
import { SKINS } from "./skins";

const config = generateDeploymentConfig("debug");

config.api = {
  db_name:'debug',
};

config.google_drive = {
  sheets_folder_ids: ["1YcG0GDJME1Ds1UzwXcEmo97Ckb5tnUWc"],
  assets_folder_ids: ["1bnGPB70wPp9hzVOpT4LkPX9h3FwIrqfs"],
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/app-debug-content.git",
  content_tag_latest: "1.1.30",
};

config.app_data.output_path = "./app_data";

config.app_config.ASSET_PACKS = {
  enabled: true,
  bucketName: "debug",
  folderName: "asset_packs",
};

// set supabase config if decrypted values available
try {
  const supabaseConfig = require("./encrypted/supabaseConfig.json");
  config.supabase = { ...supabaseConfig, enabled: true };
} catch {
  logWarning({
    msg1: "Deployment config requires encrypted data",
    msg2: "Decrypt config in order to access supabase functionality",
  });
}

config.error_logging = {
  dsn: "https://69ccfba168f04b848cdd96ac066d01b5@app.glitchtip.com/2438",
};

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "Debug App";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Debug App";
config.app_config.APP_SKINS.defaultSkinName = SKINS.defaultSkin.name
config.app_config.APP_SKINS.available = [SKINS.defaultSkin, SKINS.debug]
config.app_config.APP_UPDATES.enabled = true
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete"

export default config;
