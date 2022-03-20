import { BdPlugin } from "@betterdiscord/bdapi";
import css from "./styles/index.scss";

export default class Plugin implements BdPlugin {
    start(): void {
        // setup your plugin here
        // add any patches and styles you need
        BdApi.alert("Plugin", "Plugin is running!");
        BdApi.injectCSS("Plugin", css);
    }
    stop(): void {
        // cleanup your plugin here
        // remove any patches and styles you added
        BdApi.clearCSS("Plugin");
    }
}
