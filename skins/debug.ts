import { IAppSkin } from "data-models";

const debug: IAppSkin = {
  name: "debug",
  appConfig: {
    APP_SIDEMENU_DEFAULTS: {
      title: "Debug Skin"
    },
    APP_HEADER_DEFAULTS:
    {
      title: "Debug Skin",
      collapse: false,
      colour:'secondary',
      variant:'compact'
    },
    APP_FOOTER_DEFAULTS:{
      templateName:''
    },
    APP_ROUTE_DEFAULTS: {
      home_route: "/template/test"
    },
    APP_THEMES:{
      defaultThemeName:'professional'
    }
    
  },
};
export default debug;
