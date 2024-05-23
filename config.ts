import { generateDeploymentConfig, loadEncryptedConfig } from "scripts";
import { SKINS } from "./skins";

const config = generateDeploymentConfig("debug");

config.api.db_name = "debug"

config.google_drive = {
  sheets_folder_ids: ["1YcG0GDJME1Ds1UzwXcEmo97Ckb5tnUWc"],
  assets_folder_ids: ["1bnGPB70wPp9hzVOpT4LkPX9h3FwIrqfs"],
};

config.web.favicon_asset = "images/icons/favicon.svg";

config.git = {
  content_repo: "https://github.com/IDEMSInternational/app-debug-content.git",
  content_tag_latest: "1.2.29",
};

config.app_config.ASSET_PACKS = {
  enabled: true,
  bucketName: "debug",
  folderName: "asset_packs",
};

// set supabase config if decrypted values available
// TODO - should supabase match general config and additional settings

const supabaseConfig = loadEncryptedConfig("supabaseConfig.json");
config.supabase = { ...supabaseConfig, enabled: supabaseConfig ? true : false };

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
  auth: { enabled: true },
  crashlytics: { enabled: true }
}

config.error_logging = {
  dsn: "https://69ccfba168f04b848cdd96ac066d01b5@app.glitchtip.com/2438",
};

config.android = {
  app_id: 'international.idems.debug_app',
  app_name: 'Debug App',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
}

config.ios.app_id = "international.idems.debug-app"
config.ios.app_name = "Debug App"

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "Debug App";
config.app_config.APP_HEADER_DEFAULTS.collapse = true;
config.app_config.APP_HEADER_DEFAULTS.colour = "primary";
config.app_config.APP_HEADER_DEFAULTS.variant = "default";

config.app_config.APP_FOOTER_DEFAULTS.templateName = "feat_footer"

config.app_config.APP_SIDEMENU_DEFAULTS.title = "Debug App";

config.app_config.APP_SKINS.defaultSkinName = SKINS.defaultSkin.name
config.app_config.APP_SKINS.available = [SKINS.defaultSkin, SKINS.debug]

config.app_config.APP_THEMES.available = ["default", "professional", "pfr"]
config.app_config.APP_THEMES.defaultThemeName = "default"

config.app_config.TASKS.enabled = true
config.app_config.TASKS.taskGroupsListName = "feat_task_groups"

config.app_config.APP_UPDATES.enabled = true
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete"

config.app_config.APP_AUTHENTICATION_DEFAULTS.enforceLogin = false
config.app_config.APP_AUTHENTICATION_DEFAULTS.signInTemplate = "example_google_auth"

config.app_config.APP_LANGUAGES_META = { en_rtl: { rtl: true } }

export default config;
