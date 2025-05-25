(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.41,
  "pitch": 0
 },
 "id": "camera_208CE894_0868_801A_418D_FDE090DB51D3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 103.21,
   "backwardYaw": -120.12,
   "distance": 1,
   "panorama": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 105.26,
   "backwardYaw": -120.12,
   "distance": 1,
   "panorama": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 157.77,
   "backwardYaw": 150.57,
   "distance": 1,
   "panorama": "this.panorama_0DB10794_07E8_801B_418A_23648147084C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 155.97,
   "backwardYaw": 150.57,
   "distance": 1,
   "panorama": "this.panorama_0DB10794_07E8_801B_418A_23648147084C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.03,
   "backwardYaw": -137.2,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -163.93,
   "backwardYaw": -137.2,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -45.35,
   "backwardYaw": -10.59,
   "distance": 1,
   "panorama": "this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -49.03,
   "backwardYaw": -10.59,
   "distance": 1,
   "panorama": "this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -105.26,
   "backwardYaw": 128.59,
   "distance": 1,
   "panorama": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -114.34,
   "backwardYaw": 128.59,
   "distance": 1,
   "panorama": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B"
  }
 ],
 "hfov": 360,
 "label": "Living",
 "id": "panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
 "thumbnailUrl": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": 250.76,
   "y": 656.48,
   "x": 333.16
  }
 ],
 "overlays": [
  "this.overlay_1FA4E97C_0838_800B_4193_8102D5BF8386",
  "this.overlay_1F8B6D89_0827_800A_4192_AC8270ACD41C",
  "this.overlay_1F5BAC24_0828_803B_4197_10A487C28E7E",
  "this.overlay_1F4A533C_082B_800A_4193_87DB3690855B",
  "this.overlay_1F9081EF_0829_8005_4198_92F6EAAF0A8D",
  "this.overlay_1F97D388_0828_800B_419C_B3A130DEF81E",
  "this.overlay_1FBF35BA_082F_800F_4198_B3B3DF29B67A",
  "this.overlay_100CE208_0828_800B_4177_784A45D685A2",
  "this.overlay_10A75D41_082B_807D_4174_F469FFE28493",
  "this.overlay_108D0008_0829_800B_419F_485E821A9CE6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A80E644_08E8_807B_418E_2985DEED3BB7",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DD014B3_0819_801D_418D_17A3B1F10324",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A805644_08E8_807B_417D_13F16C630306",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208687B3_0828_801D_4140_2C36090D1F91",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_228B165E_0868_8007_4195_AF55EE9C906F",
  "this.PanoramaPlayListItem_228BE65E_0868_8007_416C_FD34B8F62276",
  "this.PanoramaPlayListItem_2288765E_0868_8007_4194_0B75C295ECD4",
  "this.PanoramaPlayListItem_2288F65E_0868_8007_419C_7D7340650A80",
  "this.PanoramaPlayListItem_2289A65E_0868_8007_41A1_33E70BA8FD4C",
  "this.PanoramaPlayListItem_22864669_0868_800A_419F_DAFBA1DA104B",
  "this.PanoramaPlayListItem_2286C669_0868_800A_418F_E9C28580993F",
  "this.PanoramaPlayListItem_22876669_0868_800A_41A1_5BAA9040DF91",
  "this.PanoramaPlayListItem_2287F669_0868_800A_4190_5321886A372A",
  "this.PanoramaPlayListItem_2284A669_0868_800A_419D_53EB884DDE93",
  "this.PanoramaPlayListItem_22855669_0868_800A_4194_64D7C1C2B9B7"
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.22,
  "pitch": 0
 },
 "id": "camera_2227A746_0868_8007_4181_5F5C922111FF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 171.33,
   "backwardYaw": 173.09,
   "distance": 1,
   "panorama": "this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.36,
   "backwardYaw": 173.09,
   "distance": 1,
   "panorama": "this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F"
  }
 ],
 "hfov": 360,
 "label": "Gerbang",
 "id": "panorama_0DB556F0_07E9_801B_4184_E4FD64C80574",
 "thumbnailUrl": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 184.81,
   "y": 449.45,
   "x": 160.45
  }
 ],
 "overlays": [
  "this.overlay_1DB20582_0828_80FE_4189_81C604DAE6FA",
  "this.overlay_1D79F2F4_0828_801A_4183_9421689414DF",
  "this.overlay_1DB16805_0829_8005_4192_D2E45A609235",
  "this.overlay_1D9E0448_0828_800B_4191_B3E518E08248"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_22C59277_081B_8005_415D_29F7404550B0",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.51,
  "pitch": 0
 },
 "id": "camera_22CDA6F3_0868_801D_419B_B418A2E62A91",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_22BA0277_081B_8005_4186_AA4998326942",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.22,
  "pitch": 0
 },
 "id": "camera_223AE759_0868_800D_419D_D448B5BAC91D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DF44573_0828_801E_4172_0D9E2FE19FBE",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C2DE1EC_08E8_800A_419B_5EF02676B474",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C5B1C6F_0818_8005_419D_D0FC7D07B073",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 150.57,
   "backwardYaw": 157.77,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  }
 ],
 "hfov": 360,
 "label": "MandiBawah",
 "id": "panorama_0DB10794_07E8_801B_418A_23648147084C",
 "thumbnailUrl": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": 108.29,
   "y": 451,
   "x": 794.66
  }
 ],
 "overlays": [
  "this.overlay_1138A1F8_0819_800B_4195_BBDBFEA1209C",
  "this.overlay_11F08989_0818_800D_419F_933C44B9508E"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2BAD8C14_08EB_801A_4192_24162956607E",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Floor_1",
 "id": "map_09DB02B2_07F9_801F_417A_0868DD809595",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_t.png",
 "width": 979,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595.png",
    "class": "ImageResourceLevel",
    "width": 979,
    "height": 1950
   },
   {
    "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_lq.png",
    "class": "ImageResourceLevel",
    "width": 181,
    "height": 361,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.07,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.5,
 "scaleMode": "fit_to_height",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayInsideColor": "#0099FF",
 "height": 1950,
 "overlays": [
  "this.overlay_15D431D1_07E9_801D_418A_2D405812060D",
  "this.overlay_1696D975_07E8_801A_4168_A1CED18EF04C",
  "this.overlay_1BE30B1E_0818_8007_419C_6B3C6904A80F",
  "this.overlay_1CBB288A_0819_800F_4180_D79BE8535375"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_228A165E_0868_8007_419B_37A306F95CBE"
},
{
 "class": "FadeOutEffect",
 "duration": 200,
 "id": "effect_29CD16A0_0818_803B_419B_E05D80544E29",
 "easing": "quad_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.05,
  "pitch": 0
 },
 "id": "camera_202D9930_0868_801B_416B_C173A019E9EC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.51,
  "pitch": 0
 },
 "id": "camera_22C22707_0868_8005_4194_1CB0A36C825E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 0
 },
 "id": "camera_224987F9_0868_800A_417D_EE49ECF14758",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A804644_08E8_807B_4185_8BDBEC4F117A",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2080B7B3_0828_801D_4191_9FE24A63AFC1",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C5B2C6F_0818_8005_419A_11402B0291CE",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_228D765E_0868_8007_4198_DDFC49A8D61A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.62,
  "pitch": 0
 },
 "id": "camera_20DAD91B_0868_800E_4195_583F380D9C19",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.57,
  "pitch": 0
 },
 "id": "camera_22D12730_0868_801B_419D_CEDDEDB16C54",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DD054B3_0819_801D_4184_10D3B212EF38",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.41,
  "pitch": 0
 },
 "id": "camera_208748A3_0868_803E_4184_EE50F7E5C1CB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 76.33,
   "backwardYaw": -153.78,
   "distance": 1,
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 78.51,
   "backwardYaw": -153.78,
   "distance": 1,
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -124.61,
   "backwardYaw": -79.51,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -127.91,
   "backwardYaw": -79.51,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  }
 ],
 "hfov": 360,
 "label": "Kiri",
 "id": "panorama_0DB85765_07E8_803A_4168_848F56013084",
 "thumbnailUrl": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 123.29,
   "y": 799.45,
   "x": 665.89
  }
 ],
 "overlays": [
  "this.overlay_12FD76DA_0869_800F_419F_37873ADC8EBA",
  "this.overlay_14751EFD_0868_800A_4192_EC07489696C5",
  "this.overlay_136A7E74_086F_801A_4133_CC36423E8AC8",
  "this.overlay_13C94DBC_0868_800A_419C_1DC47F568674"
 ]
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_17314523_0868_803D_4191_5BF2ACF38BAA",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2BAD0C14_08EB_801A_4199_4BECC7F7C76F",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DCA5D34_0828_801B_4190_6710A56F4B6E",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208727B3_0828_801D_4181_C0C4DC69C6E0",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.74,
  "pitch": 0
 },
 "id": "camera_2037E94C_0868_800B_4190_A392D3991B8E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 166.43,
   "backwardYaw": 27.35,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 168.57,
   "backwardYaw": 27.35,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  }
 ],
 "hfov": 360,
 "label": "MandiAtas",
 "id": "panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
 "thumbnailUrl": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": -75.96,
   "y": 561.57,
   "x": 195.49
  }
 ],
 "overlays": [
  "this.overlay_12EA21C6_086B_8006_4153_867F295817D9",
  "this.overlay_136E9350_086B_801B_4194_F73AF6568608"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB85765_07E8_803A_4168_848F56013084_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0
 },
 "id": "camera_22F7D6D7_0868_8005_4197_53FBC30D5322",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 0
 },
 "id": "camera_225CB806_0868_8006_419C_353B74520898",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A801644_08E8_807B_4182_98EEAE3FEC87",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.59,
   "backwardYaw": -45.35,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.29,
   "backwardYaw": -45.35,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173.09,
   "backwardYaw": 171.33,
   "distance": 1,
   "panorama": "this.panorama_0DB556F0_07E9_801B_4184_E4FD64C80574"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.58,
   "backwardYaw": 171.33,
   "distance": 1,
   "panorama": "this.panorama_0DB556F0_07E9_801B_4184_E4FD64C80574"
  }
 ],
 "hfov": 360,
 "label": "Carport",
 "id": "panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F",
 "thumbnailUrl": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 26.13,
   "y": 166.95,
   "x": 187.95
  }
 ],
 "overlays": [
  "this.overlay_1E4F4CFD_083F_8005_418D_885A6F3961C0",
  "this.overlay_1F3BA13A_083F_800F_418A_F26C5C6B3384",
  "this.overlay_1EE5AB6E_083B_8007_4198_8678523F2624",
  "this.overlay_1E615873_0838_801E_4163_680FB5D7FEDC"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DE0A29B_0828_800D_4196_02BD22DB9FE7",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2D1382BF_0828_8005_4192_2ED143F5D899",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.57,
  "pitch": 0
 },
 "id": "camera_22D8571C_0868_800A_4196_DAF86C5E161E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81D644_08E8_807B_4192_CBDBC2B27A78",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.65,
  "pitch": 0
 },
 "id": "camera_20EAE8DD_0868_8005_419A_D98E1505ABAB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.79,
  "pitch": 0
 },
 "id": "camera_20C8A906_0868_8007_417B_965CD08490EF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2D13C2BF_0828_8005_417E_03C4A37FD32A",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81B644_08E8_807B_417A_96E33A558BB4",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208797B3_0828_801D_4179_4A8CC03274C1",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DCA6D34_0828_801B_419B_0BB4F7E6BB5D",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D00D8B_0828_800D_419C_CDEEFC453C52",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208707B3_0828_801D_4191_7A9734A62487",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.8,
  "pitch": 0
 },
 "id": "camera_23A4881F_0868_8005_41A0_469D5DF89434",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_228DD65E_0868_8007_41A1_304769E7D2D4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.79,
  "pitch": 0
 },
 "id": "camera_20F0A8FD_0868_800A_4197_2ED1878A4AB7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A819644_08E8_807B_4180_D92B4637B19E",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2E5E8BB3_0818_801D_4184_4FB590667026",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A80C644_08E8_807B_419C_BB6E0B2AECA6",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_21D0AD8B_0828_800D_41A0_F062EE1B7DDE",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81F644_08E8_807B_419C_8E0505B46E62",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DE1629B_0828_800D_4189_E55713F0CD7B",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C5B6C6F_0818_8005_41A0_91A0A2BE2C8B",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.62,
  "pitch": 0
 },
 "id": "camera_20C08913_0868_801E_418A_8518E8EED46A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2086A7B3_0828_801D_419F_CD79C5141477",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2BAD1C14_08EB_801A_4184_FE3A47260E3B",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DE0929B_0828_800D_4198_DC5889163C4C",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "id": "effect_2587FEC0_0827_807A_4186_0424E2E6FE30",
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DF58573_0828_801E_4191_2B2B0D55760D",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D1AD8B_0828_800D_419E_60ED50C39737",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.88,
  "pitch": 0
 },
 "id": "camera_2274F7E0_0868_8001_4184_9B4D4007C6B4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.91,
  "pitch": 0
 },
 "id": "camera_226D97B6_0868_8007_4137_2FBD9EAC9F80",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.8,
  "pitch": 0
 },
 "id": "camera_22518815_0868_801A_4199_77EEF017A048",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.65,
  "pitch": 0
 },
 "id": "camera_20256939_0868_800A_419E_40F48AC77533",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DF47573_0828_801E_4198_B716E915B094",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D08D8B_0828_800D_419E_AF1C518EC888",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_22C55277_081B_8005_4190_4FBDFD08CA5D",
 "easing": "cubic_in_out"
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.05,
  "pitch": 0
 },
 "id": "camera_20D30924_0868_803B_4168_D22CE0CA1B70",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C5B3C6F_0818_8005_417D_89916C5FD5AB",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2E5EBBB3_0818_801D_417A_735BFFE51E0D",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2034B94D_0868_800A_418D_EF9FAE7AC92E",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DCA2D34_0828_801B_4193_5A80A44CE570",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A802644_08E8_807B_4174_23BBCEBD0C04",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "id": "camera_209558CB_0868_800E_419C_682FD370A648",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A818644_08E8_807B_4190_B0878247B51A",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81E644_08E8_807B_4192_870E069EC73B",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DD004B3_0819_801D_4191_E5FFE5822AD7",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.49,
  "pitch": 0
 },
 "id": "camera_2231B776_0868_8007_418C_2C02E8CE8C16",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.49,
  "pitch": 0
 },
 "id": "camera_2202178B_0868_800E_4191_865D57AC548F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2E5E0BB3_0818_801D_419D_D0D91390C118",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.41,
  "pitch": 0
 },
 "id": "camera_20B10885_0868_80FA_41A0_841C5A986B64",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.41,
  "pitch": 0
 },
 "id": "camera_208B5899_0868_800A_4192_C7CF8AE80593",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.67,
  "pitch": 0
 },
 "id": "camera_20E568E5_0868_8005_4194_04F58225E94F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -85.04,
   "backwardYaw": 155.38,
   "distance": 1,
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -87.46,
   "backwardYaw": 155.38,
   "distance": 1,
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 126.49,
   "backwardYaw": -32.95,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 119.92,
   "backwardYaw": -32.95,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  }
 ],
 "hfov": 360,
 "label": "Kanan",
 "id": "panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
 "thumbnailUrl": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 252.26,
   "y": 804.07,
   "x": 365.37
  }
 ],
 "overlays": [
  "this.overlay_13E4597D_0869_8005_4196_1A5137EE1ABE",
  "this.overlay_14555AA8_0868_800A_419C_D8045307C52E",
  "this.overlay_15217132_0868_801F_4194_A30D4D5EE972",
  "this.overlay_14B158A0_086B_803A_419D_F7B980930D8E"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DD024B3_0819_801D_4177_1803D3E285C1",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208157B3_0828_801D_418D_E186EA8D9A9C",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DCA7D34_0828_801B_41A0_831496989F28",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A806644_08E8_807B_4163_A515F6437F80",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Floor_2",
 "id": "map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_t.png",
 "width": 972,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C.png",
    "class": "ImageResourceLevel",
    "width": 972,
    "height": 1332
   },
   {
    "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_lq.png",
    "class": "ImageResourceLevel",
    "width": 218,
    "height": 299,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.07,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.5,
 "scaleMode": "fit_to_height",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayInsideColor": "#0099FF",
 "height": 1332,
 "overlays": [
  "this.overlay_1555A996_07E8_8007_4198_C2FEB81D5CEC",
  "this.overlay_15364216_07E8_8007_4189_64EC3AD3D507",
  "this.overlay_14EAD63E_07E8_8007_4176_5C5A2A3D9DB4",
  "this.overlay_14BB9067_07E7_8005_419D_EC021BA35BD6",
  "this.overlay_1BBB8032_0818_801F_419A_56E2D4D5DEDE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_22BA3277_081B_8005_418F_A03458418218",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -79.51,
   "backwardYaw": -124.61,
   "distance": 1,
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -83.19,
   "backwardYaw": -124.61,
   "distance": 1,
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -137.2,
   "backwardYaw": -161.03,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.15,
   "backwardYaw": -161.03,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -32.95,
   "backwardYaw": 126.49,
   "distance": 1,
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -32.28,
   "backwardYaw": 126.49,
   "distance": 1,
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 27.35,
   "backwardYaw": 166.43,
   "distance": 1,
   "panorama": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 27.76,
   "backwardYaw": 166.43,
   "distance": 1,
   "panorama": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC"
  }
 ],
 "hfov": 360,
 "label": "Atas",
 "id": "panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
 "thumbnailUrl": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 221.55,
   "y": 501.15,
   "x": 412.85
  }
 ],
 "overlays": [
  "this.overlay_111E3D5B_0819_800D_4181_5F5DA209525F",
  "this.overlay_11B8E830_0818_801B_4197_96ECA5AD2212",
  "this.overlay_1194EE30_081B_801A_419F_4D25DB1C7368",
  "this.overlay_121ACDE2_081B_803F_419D_2CF485387AF7",
  "this.overlay_1228C18E_0819_8006_4167_4445E8FF106E",
  "this.overlay_12538DC5_0818_8005_4196_0B423AD567D3",
  "this.overlay_12BA83C3_0867_807D_4178_CB9118E15905",
  "this.overlay_12D261BD_0868_8005_4198_7D26B9FBA97F"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208027B3_0828_801D_4192_B6224B2ACE7F",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 128.59,
   "backwardYaw": -105.26,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  }
 ],
 "hfov": 360,
 "label": "Bedroom",
 "id": "panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
 "thumbnailUrl": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": 172.22,
   "y": 770.47,
   "x": 645.5
  }
 ],
 "overlays": [
  "this.overlay_1147C50B_0818_800D_4185_D0BE6D357461",
  "this.overlay_1228A364_081F_803A_417B_418510D18CE2"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.88,
  "pitch": 0
 },
 "id": "camera_2260C7C7_0868_8006_419B_C02A78946773",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Siteplan",
 "id": "map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_t.png",
 "width": 402,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80.png",
    "class": "ImageResourceLevel",
    "width": 402,
    "height": 725
   },
   {
    "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_lq.png",
    "class": "ImageResourceLevel",
    "width": 190,
    "height": 343,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.2,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.5,
 "scaleMode": "fit_to_height",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayInsideColor": "#0099FF",
 "height": 725,
 "overlays": [
  "this.overlay_29222E9E_08E8_8006_4177_560478564F90",
  "this.overlay_2A2C1CA3_08E9_803D_4197_C565C0B438E4"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D70D8B_0828_800D_419A_55A121A275BB",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.39,
  "pitch": 0
 },
 "id": "camera_22E6D6AE_0868_8006_416F_0A8A5B1111AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.91,
  "pitch": 0
 },
 "id": "camera_2219179F_0868_8006_4196_DEF5FF0CB338",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A80D644_08E8_807B_4188_13B91B80F042",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "id": "effect_25879EC0_0827_807A_419F_B039C594B6CC",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.67,
  "pitch": 0
 },
 "id": "camera_20FE98E9_0868_800A_4195_44359830663D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208787B3_0828_801D_4197_9F0012D1715F",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.23,
  "pitch": 0
 },
 "id": "camera_20F638F3_0868_801D_4183_6E1318175138",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2D13B2BF_0828_8005_419C_311DC8106711",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A800644_08E8_807B_4179_4F883FB0EF06",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -120.12,
   "backwardYaw": 103.21,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -116.32,
   "backwardYaw": 103.21,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  }
 ],
 "hfov": 360,
 "label": "Dapur",
 "id": "panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
 "thumbnailUrl": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": -68.89,
   "y": 245.52,
   "x": 380.34
  }
 ],
 "overlays": [
  "this.overlay_10BE3CA0_0827_803A_4174_52D5FD51D6E8",
  "this.overlay_11478773_0827_801D_4183_182C01D0AE68"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DE1529B_0828_800D_4190_E5CAB7EC4C11",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 200,
 "id": "effect_29CD66A0_0818_803B_4190_934A6AEE0753",
 "easing": "quad_in"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D39D8B_0828_800D_4181_5A40C1C56E49",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_228DA65E_0868_8007_4166_2B9A29B58871"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.39,
  "pitch": 0
 },
 "id": "camera_22EE8697_0868_8005_4192_130E110B5A31",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0DB10794_07E8_801B_418A_23648147084C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_228A365E_0868_8007_4199_E921E9BE94F4"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A807644_08E8_807B_4196_737E72118D2B",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.96,
  "pitch": 0
 },
 "id": "camera_209C18B6_0868_8006_4169_B812C83E5DED",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.96,
  "pitch": 0
 },
 "id": "camera_2082B8AD_0868_8005_4194_7F238449D20F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 155.38,
   "backwardYaw": -85.04,
   "distance": 1,
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 154.72,
   "backwardYaw": -85.04,
   "distance": 1,
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -153.78,
   "backwardYaw": 76.33,
   "distance": 1,
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -151.86,
   "backwardYaw": 76.33,
   "distance": 1,
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084"
  }
 ],
 "hfov": 360,
 "label": "Balkon",
 "id": "panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
 "thumbnailUrl": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_t.jpg",
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 182.44,
   "y": 1230.09,
   "x": 488.69
  }
 ],
 "overlays": [
  "this.overlay_140CA710_0868_801B_4180_B00E1AB3A893",
  "this.overlay_153CD696_0869_8006_4192_4B0462CC548C",
  "this.overlay_1538B1DF_0868_8005_413F_7A19437A76E6",
  "this.overlay_157ED137_0868_8005_419D_224F0194667D"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2DF59573_0828_801E_419F_8C7494114A19",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2BB2591F_08EB_8005_4170_EC6FD37BB7EB",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_21D71D8B_0828_800D_419A_3E3272552727",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.65,
  "pitch": 0
 },
 "id": "camera_203C0943_0868_807E_417F_25D9545ED358",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "id": "camera_209BD8C1_0868_807D_4193_2EEC06668D13",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_228D565E_0868_8007_4170_8B9EED8D92AB"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_21D1DD8B_0828_800D_4194_303A20CAC1D4",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.65,
  "pitch": 0
 },
 "id": "camera_20EEB8D4_0868_801B_4184_3D91F03E7C16",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2E5ECBB3_0818_801D_4194_D22EB05B9EB8",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208017B3_0828_801D_41A1_0B520F51EE9F",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0
 },
 "id": "camera_22FF96C2_0868_807F_4190_245D531D7E10",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A803644_08E8_807B_4181_F215F5190C71",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2D1472BF_0828_8005_415D_559D8CF63FE2",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81A644_08E8_807B_4199_BA780616C9ED",
 "easing": "cubic_in_out"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.Button_17312523_0868_803D_4192_FFDC412A7D19",
  "this.Button_17314523_0868_803D_4191_5BF2ACF38BAA",
  "this.Button_17317523_0868_803D_4185_1CCDD912D023",
  "this.Button_17316523_0868_803D_417E_BCFA3B6EBB22",
  "this.Button_17319523_0868_803D_415C_F1EEA314AB4B",
  "this.Container_29E43855_0828_8005_416F_A46E143B25DC"
 ],
 "left": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17318523_0868_803D_4196_4BE8427F4E1F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "100%",
 "layout": "horizontal",
 "bottom": 15,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "ContainerFloor"
 },
 "children": [
  "this.MapViewer",
  "this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482",
  "this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4",
  "this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C",
  "this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358",
  "this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7",
  "this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0",
  "this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E",
  "this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3",
  "this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D",
  "this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7",
 "scrollBarVisible": "rollOver",
 "right": 15,
 "width": 300,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "top": 15,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 300,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Logo BMI"
 },
 "children": [
  "this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_20AA0897_0828_8005_4198_75B2E94D10DC",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "100%",
 "layout": "horizontal",
 "top": 15,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 100,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button settings VR"
 },
 "id": "Button_17312523_0868_803D_4192_FFDC412A7D19",
 "fontSize": 12,
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17312523_0868_803D_4192_FFDC412A7D19.png",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "backgroundColor": [
  "#000000"
 ],
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_17312523_0868_803D_4192_FFDC412A7D19_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17319523_0868_803D_415C_F1EEA314AB4B",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "paddingRight": 0,
 "fontSize": 12,
 "width": 60,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17319523_0868_803D_415C_F1EEA314AB4B.png",
 "borderSize": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "pressedIconHeight": 30,
 "backgroundColor": [],
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_17319523_0868_803D_415C_F1EEA314AB4B_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17317523_0868_803D_4185_1CCDD912D023",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Mute"
 },
 "paddingRight": 0,
 "fontSize": 12,
 "width": 60,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17317523_0868_803D_4185_1CCDD912D023.png",
 "borderSize": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "pressedIconHeight": 30,
 "backgroundColor": [],
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_17317523_0868_803D_4185_1CCDD912D023_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F, this.camera_20B10885_0868_80FA_41A0_841C5A986B64); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arah Keluar"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 423,
      "height": 82
     }
    ]
   },
   "pitch": -11.12,
   "yaw": -45.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1FA4E97C_0838_800B_4193_8102D5BF8386",
 "maps": [
  {
   "hfov": 36.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 82,
      "height": 16
     }
    ]
   },
   "pitch": -11.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B, this.camera_208B5899_0868_800A_4192_C7CF8AE80593); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 40.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 488,
      "height": 88
     }
    ]
   },
   "pitch": -18.9,
   "yaw": -105.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1F8B6D89_0827_800A_4192_AC8270ACD41C",
 "maps": [
  {
   "hfov": 40.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 88,
      "height": 16
     }
    ]
   },
   "pitch": -18.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B, this.camera_208748A3_0868_803E_4184_EE50F7E5C1CB); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.35,
   "image": "this.AnimatedImageResource_15091020_081B_803A_416B_52C1FAC4AB60",
   "pitch": -44.37,
   "yaw": -114.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F5BAC24_0828_803B_4197_10A487C28E7E",
 "maps": [
  {
   "hfov": 26.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -44.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F, this.camera_208CE894_0868_801A_418D_FDE090DB51D3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.11,
   "image": "this.AnimatedImageResource_1508D020_081B_803A_4164_DD9CDEA24BE0",
   "pitch": -25.9,
   "yaw": -49.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F4A533C_082B_800A_4193_87DB3690855B",
 "maps": [
  {
   "hfov": 24.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -25.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F, this.camera_2260C7C7_0868_8006_419B_C02A78946773); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.91,
   "image": "this.AnimatedImageResource_15086020_081B_803A_419A_9DF8D7EC682C",
   "pitch": -35.2,
   "yaw": 103.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F9081EF_0829_8005_4198_92F6EAAF0A8D",
 "maps": [
  {
   "hfov": 21.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -35.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F, this.camera_2274F7E0_0868_8001_4184_9B4D4007C6B4); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Kitchen Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 397,
      "height": 285
     }
    ]
   },
   "pitch": -23.8,
   "yaw": 105.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1F97D388_0828_800B_419C_B3A130DEF81E",
 "maps": [
  {
   "hfov": 31.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB10794_07E8_801B_418A_23648147084C, this.camera_224987F9_0868_800A_417D_EE49ECF14758); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Bathroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 288,
      "height": 85
     }
    ]
   },
   "pitch": -22.55,
   "yaw": 157.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1FBF35BA_082F_800F_4198_B3B3DF29B67A",
 "maps": [
  {
   "hfov": 23.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": -22.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB10794_07E8_801B_418A_23648147084C, this.camera_225CB806_0868_8006_419C_353B74520898); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.39,
   "image": "this.AnimatedImageResource_150B8020_081B_803A_417E_3A64C027FCE0",
   "pitch": -40.47,
   "yaw": 155.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_100CE208_0828_800B_4177_784A45D685A2",
 "maps": [
  {
   "hfov": 20.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -40.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_22518815_0868_801A_4199_77EEF017A048); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 408,
      "height": 120
     }
    ]
   },
   "pitch": 24.18,
   "yaw": -161.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_10A75D41_082B_807D_4174_F469FFE28493",
 "maps": [
  {
   "hfov": 32.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": 24.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_23A4881F_0868_8005_41A0_469D5DF89434); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.15,
   "image": "this.AnimatedImageResource_150B2020_081B_803A_4155_24943CB7EF30",
   "pitch": 12.63,
   "yaw": -163.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_108D0008_0829_800B_419F_485E821A9CE6",
 "maps": [
  {
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.63
  }
 ]
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_21D39D8B_0828_800D_4181_5A40C1C56E49, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_22BA3277_081B_8005_418F_A03458418218, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_2C5B6C6F_0818_8005_41A0_91A0A2BE2C8B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_2DD014B3_0819_801D_418D_17A3B1F10324, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2E5E0BB3_0818_801D_419D_D0D91390C118, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_2DCA2D34_0828_801B_4193_5A80A44CE570, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_2DE0929B_0828_800D_4198_DC5889163C4C, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_2D13C2BF_0828_8005_417E_03C4A37FD32A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_2DF58573_0828_801E_4191_2B2B0D55760D, 'hideEffect', false)",
 "camera": "this.panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_228B165E_0868_8007_4195_AF55EE9C906F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_2BAD8C14_08EB_801A_4192_24162956607E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_22BA0277_081B_8005_4186_AA4998326942, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_2C5B1C6F_0818_8005_419D_D0FC7D07B073, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_2DD004B3_0819_801D_4191_E5FFE5822AD7, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2E5ECBB3_0818_801D_4194_D22EB05B9EB8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_2DCA5D34_0828_801B_4190_6710A56F4B6E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_2DE0A29B_0828_800D_4196_02BD22DB9FE7, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_2D13B2BF_0828_8005_419C_311DC8106711, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_2DF59573_0828_801E_419F_8C7494114A19, 'hideEffect', false)",
 "media": "this.panorama_0DB556F0_07E9_801B_4184_E4FD64C80574",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_228B165E_0868_8007_4195_AF55EE9C906F",
 "start": "this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "if(this.existsKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')){ if(this.getKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')) { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_2BB2591F_08EB_8005_4170_EC6FD37BB7EB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2034B94D_0868_800A_418D_EF9FAE7AC92E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482'); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_2BAD1C14_08EB_801A_4184_FE3A47260E3B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_22C59277_081B_8005_415D_29F7404550B0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_2C5B3C6F_0818_8005_417D_89916C5FD5AB, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_2DD024B3_0819_801D_4177_1803D3E285C1, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2E5E8BB3_0818_801D_4184_4FB590667026, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_2DCA7D34_0828_801B_41A0_831496989F28, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_2DE1529B_0828_800D_4190_E5CAB7EC4C11, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_2D1382BF_0828_8005_4192_2ED143F5D899, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_2DF47573_0828_801E_4198_B716E915B094, 'hideEffect', false)",
 "camera": "this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_camera",
 "begin": "this.registerKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482', this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_228BE65E_0868_8007_416C_FD34B8F62276, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_2BB2591F_08EB_8005_4170_EC6FD37BB7EB, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_2BAD0C14_08EB_801A_4199_4BECC7F7C76F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_22C55277_081B_8005_4190_4FBDFD08CA5D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_2C5B2C6F_0818_8005_419A_11402B0291CE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_2DD054B3_0819_801D_4184_10D3B212EF38, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2E5EBBB3_0818_801D_417A_735BFFE51E0D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_2DCA6D34_0828_801B_419B_0BB4F7E6BB5D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_2DE1629B_0828_800D_4189_E55713F0CD7B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_2D1472BF_0828_8005_415D_559D8CF63FE2, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_2DF44573_0828_801E_4172_0D9E2FE19FBE, 'hideEffect', false)",
 "media": "this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_228BE65E_0868_8007_416C_FD34B8F62276",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81E644_08E8_807B_4192_870E069EC73B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_21D1AD8B_0828_800D_419E_60ED50C39737, 'hideEffect', false)",
 "camera": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2288765E_0868_8007_4194_0B75C295ECD4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81D644_08E8_807B_4192_CBDBC2B27A78, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true, -1, this.effect_2C2DE1EC_08E8_800A_419B_5EF02676B474, 'showEffect', false)",
 "media": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2288765E_0868_8007_4194_0B75C295ECD4",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A818644_08E8_807B_4190_B0878247B51A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_21D00D8B_0828_800D_419C_CDEEFC453C52, 'hideEffect', false)",
 "camera": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2288F65E_0868_8007_419C_7D7340650A80, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81F644_08E8_807B_419C_8E0505B46E62, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true, -1, this.effect_21D1DD8B_0828_800D_4194_303A20CAC1D4, 'showEffect', false)",
 "media": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2288F65E_0868_8007_419C_7D7340650A80",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81A644_08E8_807B_4199_BA780616C9ED, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_21D08D8B_0828_800D_419E_AF1C518EC888, 'hideEffect', false)",
 "camera": "this.panorama_0DB10794_07E8_801B_418A_23648147084C_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2289A65E_0868_8007_41A1_33E70BA8FD4C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A819644_08E8_807B_4180_D92B4637B19E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true, -1, this.effect_21D0AD8B_0828_800D_41A0_F062EE1B7DDE, 'showEffect', false)",
 "media": "this.panorama_0DB10794_07E8_801B_418A_23648147084C",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2289A65E_0868_8007_41A1_33E70BA8FD4C",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A804644_08E8_807B_4185_8BDBEC4F117A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_21D70D8B_0828_800D_419A_55A121A275BB, 'hideEffect', false)",
 "camera": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_22864669_0868_800A_419F_DAFBA1DA104B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81B644_08E8_807B_417A_96E33A558BB4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true, -1, this.effect_21D71D8B_0828_800D_419A_3E3272552727, 'showEffect', false)",
 "media": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_22864669_0868_800A_419F_DAFBA1DA104B",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A806644_08E8_807B_4163_A515F6437F80, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2086A7B3_0828_801D_419F_CD79C5141477, 'hideEffect', false)",
 "camera": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2286C669_0868_800A_418F_E9C28580993F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A805644_08E8_807B_417D_13F16C630306, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true, -1, this.effect_208687B3_0828_801D_4140_2C36090D1F91, 'showEffect', false)",
 "media": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2286C669_0868_800A_418F_E9C28580993F",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A800644_08E8_807B_4179_4F883FB0EF06, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_208727B3_0828_801D_4181_C0C4DC69C6E0, 'hideEffect', false)",
 "camera": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_22876669_0868_800A_41A1_5BAA9040DF91, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A807644_08E8_807B_4196_737E72118D2B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true, -1, this.effect_208707B3_0828_801D_4191_7A9734A62487, 'showEffect', false)",
 "media": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_22876669_0868_800A_41A1_5BAA9040DF91",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A802644_08E8_807B_4174_23BBCEBD0C04, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_208797B3_0828_801D_4179_4A8CC03274C1, 'hideEffect', false)",
 "camera": "this.panorama_0DB85765_07E8_803A_4168_848F56013084_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2287F669_0868_800A_4190_5321886A372A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A801644_08E8_807B_4182_98EEAE3FEC87, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true, -1, this.effect_208787B3_0828_801D_4197_9F0012D1715F, 'showEffect', false)",
 "media": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2287F669_0868_800A_4190_5321886A372A",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80C644_08E8_807B_419C_BB6E0B2AECA6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_208027B3_0828_801D_4192_B6224B2ACE7F, 'hideEffect', false)",
 "camera": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2284A669_0868_800A_419D_53EB884DDE93, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A803644_08E8_807B_4181_F215F5190C71, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true, -1, this.effect_208017B3_0828_801D_41A1_0B520F51EE9F, 'showEffect', false)",
 "media": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2284A669_0868_800A_419D_53EB884DDE93",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80E644_08E8_807B_418E_2985DEED3BB7, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_208157B3_0828_801D_418D_E186EA8D9A9C, 'hideEffect', false); this.trigger('tourEnded')",
 "camera": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_22855669_0868_800A_4194_64D7C1C2B9B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 0); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80D644_08E8_807B_4188_13B91B80F042, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true, -1, this.effect_2080B7B3_0828_801D_4191_9FE24A63AFC1, 'showEffect', false)",
 "media": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_22855669_0868_800A_4194_64D7C1C2B9B7",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true)"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 55.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 628,
      "height": 85
     }
    ]
   },
   "pitch": -1.7,
   "yaw": 5.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1DB20582_0828_80FE_4189_81C604DAE6FA",
 "data": {
  "label": "Arah Keluar"
 },
 "maps": [
  {
   "hfov": 55.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 118,
      "height": 16
     }
    ]
   },
   "pitch": -1.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.79,
   "image": "this.AnimatedImageResource_1D5529D5_0827_8005_4157_5AE6D31A3BC6",
   "pitch": -16.52,
   "yaw": -7.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1D79F2F4_0828_801A_4183_9421689414DF",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F, this.camera_2219179F_0868_8006_4196_DEF5FF0CB338); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 40.88,
   "image": "this.AnimatedImageResource_1507001C_081B_800A_419F_A2AD8F6150A8",
   "pitch": -12.98,
   "yaw": 171.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1DB16805_0829_8005_4192_D2E45A609235",
 "maps": [
  {
   "hfov": 40.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -12.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F, this.camera_226D97B6_0868_8007_4137_2FBD9EAC9F80); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Show Unit BMI"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 43.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 494,
      "height": 285
     }
    ]
   },
   "pitch": -5.46,
   "yaw": 177.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1D9E0448_0828_800B_4191_B3E518E08248",
 "maps": [
  {
   "hfov": 43.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_20F638F3_0868_801D_4183_6E1318175138); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.27,
   "image": "this.AnimatedImageResource_150A7020_081B_803A_4174_89ABE78BD194",
   "pitch": -33.57,
   "yaw": 150.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1138A1F8_0819_800B_4195_BBDBFEA1209C",
 "maps": [
  {
   "hfov": 34.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -33.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 41.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 488,
      "height": 285
     }
    ]
   },
   "pitch": -13.25,
   "yaw": 157.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_11F08989_0818_800D_419F_933C44B9508E",
 "data": {
  "label": "Living Room"
 },
 "maps": [
  {
   "hfov": 41.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.25
  }
 ]
},
{
 "map": {
  "width": 130.39,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 19,
     "height": 16
    }
   ]
  },
  "y": 603.87,
  "x": 268.39,
  "offsetY": 0,
  "height": 105.23,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 105.23,
  "y": 603.87,
  "width": 130.39,
  "x": 267.97,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 130,
     "height": 105
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "id": "overlay_15D431D1_07E9_801D_418A_2D405812060D",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 140.87,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 19,
     "height": 16
    }
   ]
  },
  "y": 188.71,
  "x": 310.01,
  "offsetY": 0,
  "height": 113.61,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 113.61,
  "y": 188.71,
  "width": 140.87,
  "x": 309.9,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 140,
     "height": 113
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "id": "overlay_1696D975_07E8_801A_4168_A1CED18EF04C",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 105.23,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 396.29,
  "x": 742.15,
  "offsetY": 0,
  "height": 109.42,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 109.42,
  "y": 396.29,
  "width": 105.23,
  "x": 742.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 105,
     "height": 109
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "id": "overlay_1BE30B1E_0818_8007_419C_6B3C6904A80F",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 100.45,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 708.71,
  "x": 595.38,
  "offsetY": 0,
  "height": 123.52,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 123.52,
  "y": 708.71,
  "width": 100.45,
  "x": 595.27,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 100,
     "height": 123
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "id": "overlay_1CBB288A_0819_800F_4180_D79BE8535375",
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_2227A746_0868_8007_4181_5F5C922111FF); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.23,
   "image": "this.AnimatedImageResource_2B2D95A7_0878_8005_4193_B75B9628D958",
   "pitch": -29.92,
   "yaw": 76.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12FD76DA_0869_800F_419F_37873ADC8EBA",
 "maps": [
  {
   "hfov": 23.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -29.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_223AE759_0868_800D_419D_D448B5BAC91D); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Balcony"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -21.54,
   "yaw": 78.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_14751EFD_0868_800A_4192_EC07489696C5",
 "maps": [
  {
   "hfov": 23.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -21.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_2231B776_0868_8007_418C_2C02E8CE8C16); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 460,
      "height": 285
     }
    ]
   },
   "pitch": -25.56,
   "yaw": -124.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_136A7E74_086F_801A_4133_CC36423E8AC8",
 "maps": [
  {
   "hfov": 36.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -25.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_2202178B_0868_800E_4191_865D57AC548F); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.62,
   "image": "this.AnimatedImageResource_2B2E65A7_0878_8005_415D_D1BA083AB3B7",
   "pitch": -44.12,
   "yaw": -127.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_13C94DBC_0868_800A_419C_1DC47F568674",
 "maps": [
  {
   "hfov": 28.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -44.12
  }
 ]
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17314523_0868_803D_4191_5BF2ACF38BAA",
 "rollOverIconWidth": 30,
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Gyro"
 },
 "paddingRight": 0,
 "fontSize": 12,
 "width": 60,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17314523_0868_803D_4191_5BF2ACF38BAA.png",
 "borderSize": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "pressedIconHeight": 30,
 "backgroundColor": [],
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_17314523_0868_803D_4191_5BF2ACF38BAA_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_20256939_0868_800A_419E_40F48AC77533); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.48,
   "image": "this.AnimatedImageResource_2B2CF5A7_0878_8005_4192_BC1CFE964495",
   "pitch": -48.84,
   "yaw": 166.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12EA21C6_086B_8006_4153_867F295817D9",
 "maps": [
  {
   "hfov": 23.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -48.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_203C0943_0868_807E_417F_25D9545ED358); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 431,
      "height": 285
     }
    ]
   },
   "pitch": -24.81,
   "yaw": 168.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_136E9350_086B_801B_4194_F73AF6568608",
 "maps": [
  {
   "hfov": 34.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -24.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_20EEB8D4_0868_801B_4184_3D91F03E7C16); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.37,
   "image": "this.AnimatedImageResource_15068020_081B_803A_417B_CB458F9538F8",
   "pitch": -18.87,
   "yaw": -10.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1E4F4CFD_083F_8005_418D_885A6F3961C0",
 "maps": [
  {
   "hfov": 25.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_20EAE8DD_0868_8005_419A_D98E1505ABAB); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Show Unit BMI"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 448,
      "height": 285
     }
    ]
   },
   "pitch": -15.26,
   "yaw": -7.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1F3BA13A_083F_800F_418A_F26C5C6B3384",
 "maps": [
  {
   "hfov": 38.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -15.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB556F0_07E9_801B_4184_E4FD64C80574, this.camera_20E568E5_0868_8005_4194_04F58225E94F); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arah Keluar"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 431,
      "height": 285
     }
    ]
   },
   "pitch": -14.76,
   "yaw": 173.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1EE5AB6E_083B_8007_4198_8678523F2624",
 "maps": [
  {
   "hfov": 36.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -14.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB556F0_07E9_801B_4184_E4FD64C80574, this.camera_20FE98E9_0868_800A_4195_44359830663D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_15063020_081B_803A_418E_1284AA624288",
   "pitch": -17.2,
   "yaw": 170.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1E615873_0838_801E_4163_680FB5D7FEDC",
 "maps": [
  {
   "hfov": 19.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.2
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MapViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "toolTipShadowColor": "#333333",
 "height": 250,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_20C08913_0868_801E_418A_8518E8EED46A); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Balcony"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -15.76,
   "yaw": -85.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_13E4597D_0869_8005_4196_1A5137EE1ABE",
 "maps": [
  {
   "hfov": 24.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_20DAD91B_0868_800E_4195_583F380D9C19); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.57,
   "image": "this.AnimatedImageResource_2B2EE5A7_0878_8005_419C_E72D962367F1",
   "pitch": -29.55,
   "yaw": -87.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_14555AA8_0868_800A_419C_D8045307C52E",
 "maps": [
  {
   "hfov": 28.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -29.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_20D30924_0868_803B_4168_D22CE0CA1B70); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 42.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 508,
      "height": 285
     }
    ]
   },
   "pitch": -16.52,
   "yaw": 126.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_15217132_0868_801F_4194_A30D4D5EE972",
 "maps": [
  {
   "hfov": 42.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -16.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_202D9930_0868_801B_416B_C173A019E9EC); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.42,
   "image": "this.AnimatedImageResource_2B2F95A7_0878_8005_416F_87CCBAE1869E",
   "pitch": -38.72,
   "yaw": 119.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_14B158A0_086B_803A_419D_F7B980930D8E",
 "maps": [
  {
   "hfov": 25.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -38.72
  }
 ]
},
{
 "map": {
  "width": 87.37,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 17
    }
   ]
  },
  "y": 756.23,
  "x": 321.9,
  "offsetY": 0,
  "height": 95.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 95.96,
  "y": 756.09,
  "width": 87.37,
  "x": 321.69,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 87,
     "height": 95
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "id": "overlay_1555A996_07E8_8007_4198_C2FEB81D5CEC",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 84,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 754.8,
  "x": 624.18,
  "offsetY": 0,
  "height": 89.73,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 89.73,
  "y": 754.59,
  "width": 84,
  "x": 623.89,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 84,
     "height": 89
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "id": "overlay_15364216_07E8_8007_4189_64EC3AD3D507",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 81.64,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 1188.77,
  "x": 448.08,
  "offsetY": 0,
  "height": 83.07,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 83.07,
  "y": 1188.56,
  "width": 81.64,
  "x": 447.87,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 81,
     "height": 83
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "id": "overlay_14EAD63E_07E8_8007_4176_5C5A2A3D9DB4",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 93.1,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 16
    }
   ]
  },
  "y": 458.32,
  "x": 366.44,
  "offsetY": 0,
  "height": 85.94,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 85.94,
  "y": 458.18,
  "width": 93.1,
  "x": 366.3,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 93,
     "height": 85
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "id": "overlay_14BB9067_07E7_8005_419D_EC021BA35BD6",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 90.92,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 515.61,
  "x": 150.24,
  "offsetY": 0,
  "height": 92.35,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 92.35,
  "y": 515.4,
  "width": 90.92,
  "x": 150.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 90,
     "height": 92
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "id": "overlay_1BBB8032_0818_801F_419A_56E2D4D5DEDE",
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_22FF96C2_0868_807F_4190_245D531D7E10); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.69,
   "image": "this.AnimatedImageResource_2B2AA5A3_0878_803E_418D_A41B57C612DA",
   "pitch": -42.74,
   "yaw": -137.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_111E3D5B_0819_800D_4181_5F5DA209525F",
 "maps": [
  {
   "hfov": 19.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -42.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_22F7D6D7_0868_8005_4197_53FBC30D5322); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 414,
      "height": 285
     }
    ]
   },
   "pitch": -30.08,
   "yaw": -134.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_11B8E830_0818_801B_4197_96ECA5AD2212",
 "maps": [
  {
   "hfov": 31.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -30.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_22CDA6F3_0868_801D_419B_B418A2E62A91); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.17,
   "image": "this.AnimatedImageResource_2B2B25A7_0878_8005_4184_2343C253B661",
   "pitch": -42.86,
   "yaw": -32.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1194EE30_081B_801A_419F_4D25DB1C7368",
 "maps": [
  {
   "hfov": 25.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -42.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_22C22707_0868_8005_4194_1CB0A36C825E); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -28.33,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_121ACDE2_081B_803F_419D_2CF485387AF7",
 "maps": [
  {
   "hfov": 22.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -28.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_22EE8697_0868_8005_4192_130E110B5A31); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -17.52,
   "yaw": -79.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1228C18E_0819_8006_4167_4445E8FF106E",
 "maps": [
  {
   "hfov": 23.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_22E6D6AE_0868_8006_416F_0A8A5B1111AA); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23,
   "image": "this.AnimatedImageResource_2B2C05A7_0878_8005_4193_E065FBB50913",
   "pitch": -30.93,
   "yaw": -83.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12538DC5_0818_8005_4196_0B423AD567D3",
 "maps": [
  {
   "hfov": 23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -30.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC, this.camera_22D8571C_0868_800A_4196_DAF86C5E161E); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.77,
   "image": "this.AnimatedImageResource_2B2C65A7_0878_8005_4176_A55F4CB4E79B",
   "pitch": -39.22,
   "yaw": 27.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12BA83C3_0867_807D_4178_CB9118E15905",
 "maps": [
  {
   "hfov": 20.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -39.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC, this.camera_22D12730_0868_801B_419D_CEDDEDB16C54); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Bathroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -27.32,
   "yaw": 27.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_12D261BD_0868_8005_4198_7D26B9FBA97F",
 "maps": [
  {
   "hfov": 22.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -27.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_2037E94C_0868_800B_4190_A392D3991B8E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.29,
   "image": "this.AnimatedImageResource_2B2A25A2_0878_803F_4187_9A2622F65A42",
   "pitch": -51.91,
   "yaw": 128.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1147C50B_0818_800D_4185_D0BE6D357461",
 "maps": [
  {
   "hfov": 24.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -51.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 28.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 394,
      "height": 285
     }
    ]
   },
   "pitch": -35.11,
   "yaw": 131.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1228A364_081F_803A_417B_418510D18CE2",
 "data": {
  "label": "Living Room"
 },
 "maps": [
  {
   "hfov": 28.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -35.11
  }
 ]
},
{
 "map": {
  "width": 43,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 18
    }
   ]
  },
  "y": 423.95,
  "x": 138.95,
  "offsetY": 0,
  "height": 51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 51,
  "y": 423.95,
  "width": 43,
  "x": 138.95,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 51
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "id": "overlay_29222E9E_08E8_8006_4177_560478564F90",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 46,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ]
  },
  "y": 146.95,
  "x": 164.95,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 40,
  "y": 146.95,
  "width": 46,
  "x": 164.95,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 46,
     "height": 40
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "id": "overlay_2A2C1CA3_08E9_803D_4197_C565C0B438E4",
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_20F0A8FD_0868_800A_4197_2ED1878A4AB7); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.85,
   "image": "this.AnimatedImageResource_150AF020_081B_803A_417B_44B9AA2D4B14",
   "pitch": -42.23,
   "yaw": -120.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10BE3CA0_0827_803A_4174_52D5FD51D6E8",
 "maps": [
  {
   "hfov": 19.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -42.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_20C8A906_0868_8007_417B_965CD08490EF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 403,
      "height": 285
     }
    ]
   },
   "pitch": -29.33,
   "yaw": -116.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_11478773_0827_801D_4183_182C01D0AE68",
 "maps": [
  {
   "hfov": 30.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -29.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_2082B8AD_0868_8005_4194_7F238449D20F); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -21.79,
   "yaw": 155.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_140CA710_0868_801B_4180_B00E1AB3A893",
 "maps": [
  {
   "hfov": 23.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -21.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_209C18B6_0868_8006_4169_B812C83E5DED); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.68,
   "image": "this.AnimatedImageResource_2B1005A7_0878_8005_419C_AB3D10CB055A",
   "pitch": -56.8,
   "yaw": 154.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_153CD696_0869_8006_4192_4B0462CC548C",
 "maps": [
  {
   "hfov": 14.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -56.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_209BD8C1_0868_807D_4193_2EEC06668D13); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.93,
   "image": "this.AnimatedImageResource_2B1085A7_0878_8005_4164_30FDBA453DE7",
   "pitch": -53.54,
   "yaw": -153.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1538B1DF_0868_8005_413F_7A19437A76E6",
 "maps": [
  {
   "hfov": 15.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -53.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_209558CB_0868_800E_419C_682FD370A648); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 285
     }
    ]
   },
   "pitch": -22.3,
   "yaw": -151.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_157ED137_0868_8005_419D_224F0194667D",
 "maps": [
  {
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -22.3
  }
 ]
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17316523_0868_803D_417E_BCFA3B6EBB22",
 "rollOverIconWidth": 30,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings HS"
 },
 "paddingRight": 0,
 "fontSize": 12,
 "width": 60,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17316523_0868_803D_417E_BCFA3B6EBB22.png",
 "borderSize": 0,
 "borderColor": "#000000",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "pressedIconHeight": 30,
 "backgroundColor": [],
 "click": "if(!this.Button_17312523_0868_803D_4192_FFDC412A7D19.get('visible')){ this.setComponentVisibility(this.Button_17312523_0868_803D_4192_FFDC412A7D19, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17312523_0868_803D_4192_FFDC412A7D19, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.Button_17314523_0868_803D_4191_5BF2ACF38BAA.get('visible')){ this.setComponentVisibility(this.Button_17314523_0868_803D_4191_5BF2ACF38BAA, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17314523_0868_803D_4191_5BF2ACF38BAA, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.Button_17317523_0868_803D_4185_1CCDD912D023.get('visible')){ this.setComponentVisibility(this.Button_17317523_0868_803D_4185_1CCDD912D023, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17317523_0868_803D_4185_1CCDD912D023, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.Button_17319523_0868_803D_415C_F1EEA314AB4B.get('visible')){ this.setComponentVisibility(this.Button_17319523_0868_803D_415C_F1EEA314AB4B, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17319523_0868_803D_415C_F1EEA314AB4B, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')){ this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.IconButton_289C4E30_0828_801B_419A_417103D64582.get('visible')){ this.setComponentVisibility(this.IconButton_289C4E30_0828_801B_419A_417103D64582, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_289C4E30_0828_801B_419A_417103D64582, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')){ this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482.get('visible')){ this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4.get('visible')){ this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C.get('visible')){ this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358.get('visible')){ this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7.get('visible')){ this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0.get('visible')){ this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E.get('visible')){ this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3.get('visible')){ this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D.get('visible')){ this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641.get('visible')){ this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.Container_20AA0897_0828_8005_4198_75B2E94D10DC.get('visible')){ this.setComponentVisibility(this.Container_20AA0897_0828_8005_4198_75B2E94D10DC, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.Container_20AA0897_0828_8005_4198_75B2E94D10DC, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }; if(!this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09.get('visible')){ this.setComponentVisibility(this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09, true, 0, this.effect_2587FEC0_0827_807A_4186_0424E2E6FE30, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09, false, 0, this.effect_25879EC0_0827_807A_419F_B039C594B6CC, 'hideEffect', false) }",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_17316523_0868_803D_417E_BCFA3B6EBB22_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Container72777"
 },
 "children": [
  "this.IconButton_289C4E30_0828_801B_419A_417103D64582"
 ],
 "id": "Container_29E43855_0828_8005_416F_A46E143B25DC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 60,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundColor": [],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 15,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>BMI Siteplan</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Siteplan"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Living Room Lt 1</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Living Lt 1"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_22CD3292_081B_801E_419C_294A22E93A2C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Master Bedroom</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Master Bedroom"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2C66DC7F_0818_8005_4196_19D03306C358",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Kitchen"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bathroom Lt 1</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Bathroom Lt 1"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Living Room Lt 2</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Living Lt 2"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bathroom Lt 2</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Bathroom Lt 2"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Bedroom 2"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Bedroom 3"
 }
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2D094583_0828_80FE_419C_2422AF1E1641",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 3,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 50,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Balcony</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Balcony"
 }
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "HTMLText_20456CF7_082B_8006_4159_AB334357FD09",
 "scrollBarVisible": "rollOver",
 "width": 250,
 "paddingRight": 10,
 "borderSize": 3,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>BUKIT MEKAR INDAH</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:'Century Gothic';\"><B>Virtual 360</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "Judul"
 }
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_15091020_081B_803A_416B_52C1FAC4AB60",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1508D020_081B_803A_4164_DD9CDEA24BE0",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_15086020_081B_803A_419A_9DF8D7EC682C",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_150B8020_081B_803A_417E_3A64C027FCE0",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_150B2020_081B_803A_4155_24943CB7EF30",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1D5529D5_0827_8005_4157_5AE6D31A3BC6",
 "levels": [
  {
   "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 420,
   "height": 330
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1507001C_081B_800A_419F_A2AD8F6150A8",
 "levels": [
  {
   "url": "media/panorama_0DB556F0_07E9_801B_4184_E4FD64C80574_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_150A7020_081B_803A_4174_89ABE78BD194",
 "levels": [
  {
   "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2D95A7_0878_8005_4193_B75B9628D958",
 "levels": [
  {
   "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2E65A7_0878_8005_415D_D1BA083AB3B7",
 "levels": [
  {
   "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2CF5A7_0878_8005_4192_BC1CFE964495",
 "levels": [
  {
   "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_15068020_081B_803A_417B_CB458F9538F8",
 "levels": [
  {
   "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_15063020_081B_803A_418E_1284AA624288",
 "levels": [
  {
   "url": "media/panorama_0C841E30_07E8_801A_418F_E7F2D3D97D8F_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2EE5A7_0878_8005_419C_E72D962367F1",
 "levels": [
  {
   "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2F95A7_0878_8005_416F_87CCBAE1869E",
 "levels": [
  {
   "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2AA5A3_0878_803E_418D_A41B57C612DA",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2B25A7_0878_8005_4184_2343C253B661",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2C05A7_0878_8005_4193_E065FBB50913",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2C65A7_0878_8005_4176_A55F4CB4E79B",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B2A25A2_0878_803F_4187_9A2622F65A42",
 "levels": [
  {
   "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_150AF020_081B_803A_417B_44B9AA2D4B14",
 "levels": [
  {
   "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B1005A7_0878_8005_419C_AB3D10CB055A",
 "levels": [
  {
   "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2B1085A7_0878_8005_4164_30FDBA453DE7",
 "levels": [
  {
   "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "paddingLeft": 0,
 "id": "IconButton_289C4E30_0828_801B_419A_417103D64582",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_289C4E30_0828_801B_419A_417103D64582.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "toggle",
 "height": 30,
 "click": "if(!this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')){ this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, 0, this.effect_29CD66A0_0818_803B_4190_934A6AEE0753, 'showEffect', false) } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, 0, this.effect_29CD16A0_0818_803B_419B_E05D80544E29, 'hideEffect', false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_289C4E30_0828_801B_419A_417103D64582_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "Button37510"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_17314523_0868_803D_4191_5BF2ACF38BAA], 'gyroscopeAvailable'); this.playList_228DD65E_0868_8007_41A1_304769E7D2D4.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_17312523_0868_803D_4192_FFDC412A7D19,this.Button_17319523_0868_803D_415C_F1EEA314AB4B].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player456"
 },
 "children": [
  "this.MainViewer",
  "this.Container_17318523_0868_803D_4196_4BE8427F4E1F",
  "this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7",
  "this.Container_20AA0897_0828_8005_4198_75B2E94D10DC"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": [
  "this.Button_17312523_0868_803D_4192_FFDC412A7D19",
  "this.Button_17319523_0868_803D_415C_F1EEA314AB4B"
 ],
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "buttonToggleMute": "this.Button_17317523_0868_803D_4185_1CCDD912D023",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
