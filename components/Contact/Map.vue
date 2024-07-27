<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
 components: {
  LMap,
  LGeoJson,
  LTileLayer
 },
 data() {
  return {
   dim: [29.1636918, 31.0312522],
   zoom: 8,
   geojson: {
    type: "FeatureCollection",
    features: [
     // ...
    ],
   },
   geojsonOptions: {
    // Options that don't rely on Leaflet methods.
   },
  };
 },
 async beforeMount() {
  // HERE is where to load Leaflet components!
  const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

  // And now the Leaflet circleMarker function can be used by the options:
  this.geojsonOptions.pointToLayer = (feature, latLng) =>
   circleMarker(latLng, { radius: 8 });
  this.mapIsReady = true;
 },
};
</script>

<template>
 <main id='contact-map' class='relative z-10'>
  <div class="mx-auto w-full h-[80vh]">
   <l-map :useGlobalLeaflet="false" ref="map" v-model:zoom="zoom" :center="dim" v-if="false">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
    </l-tile-layer>
    <!-- <l-geo-json :geojson="geojson" :options="geojsonOptions" /> -->
   </l-map>
   <div class="map-wrapper pb-20 px-8 h-full" v-else>
    <div class="main-header">Map</div>
    <div class="sub-header mb-8">Where We Are</div>
    <ContactGoogleMap />
   </div>
  </div>
 </main>
</template>