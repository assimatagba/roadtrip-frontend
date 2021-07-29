declare module 'vue2-google-maps' {
    import { PluginFunction } from 'vue'
    export const install: PluginFunction<{}>
    // add type exporting
    export type googleMaps = typeof google.maps
  }