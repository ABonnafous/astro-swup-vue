import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupProgressPlugin from "@swup/progress-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";
import SwupSlideTheme from "@swup/slide-theme";

new Swup({
  plugins: [
    new SwupA11yPlugin(),
    new SwupHeadPlugin(),
    new SwupPreloadPlugin(),
    new SwupProgressPlugin(),
    new SwupScriptsPlugin(),
    new SwupSlideTheme(),
  ],
});
