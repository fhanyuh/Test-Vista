(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_687E9529_725F_4F9C_41C5_BC3A7BDDC6C6"
},
{
 "class": "FadeOutEffect",
 "id": "effect_644E35F0_725F_4E8C_41CA_CA0B19DA874C",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_796330F9_6CD0_444C_41CA_8C5145E4586F",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2086A7B3_0828_801D_419F_CD79C5141477",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40608D34_4CE3_E26B_419A_8B74D386E230_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_40608D34_4CE3_E26B_419A_8B74D386E230",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')){ if(this.getKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')) { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true, -1, this.effect_644FF5EE_725F_4E95_41D8_DF6F8CAE172B, 'showEffect', false); } else { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false, -1, this.effect_796330F9_6CD0_444C_41CA_8C5145E4586F, 'hideEffect', false); } }; this.unregisterKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22'); if(this.existsKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')){ if(this.getKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')) { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, -1, this.effect_644FD5EE_725F_4E95_41D2_433187EC2022, 'showEffect', false); } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, -1, this.effect_796380F9_6CD0_444C_41D8_B70ABA7034BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC'); if(this.existsKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')){ if(this.getKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')) { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, -1, this.effect_644F95EE_725F_4E95_41D4_56B02E4971D5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, -1, this.effect_7963D0F9_6CD0_444C_41BB_500F12AB99D0, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_644E65EF_725F_4E93_41B7_B1508C9D861B, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_796070F9_6CD0_444C_4199_E708D28A927F, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer'); if(this.existsKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')){ if(this.getKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')) { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_644E75EF_725F_4E93_41B4_F12872992816, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_796080F9_6CD0_444C_41D3_158C63F985EE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')",
   "camera": "this.panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_camera",
   "begin": "this.registerKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482', this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482.get('visible')); this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7', this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')); this.registerKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC', this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')); this.registerKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22', this.Button_17316523_0868_803D_417E_BCFA3B6EBB22.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false); this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false, -1, this.effect_796330F9_6CD0_444C_41CA_8C5145E4586F, 'hideEffect', false); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false); this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, -1, this.effect_796380F9_6CD0_444C_41D8_B70ABA7034BC, 'hideEffect', false); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false); this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, -1, this.effect_7963D0F9_6CD0_444C_41BB_500F12AB99D0, 'hideEffect', false); this.keepComponentVisibility(this.MapViewer, false); this.setComponentVisibility(this.MapViewer, false, -1, this.effect_796070F9_6CD0_444C_4199_E708D28A927F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_796080F9_6CD0_444C_41D3_158C63F985EE, 'hideEffect', false)",
   "media": "this.panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true); this.keepComponentVisibility(this.MapViewer, true); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true)"
  },
  "this.PanoramaPlayListItem_659A532A_725F_4B9D_41AC_08C622D1169A",
  "this.PanoramaPlayListItem_659A832A_725F_4B9D_41D2_618B233DC640",
  "this.PanoramaPlayListItem_6599E32A_725F_4B9D_41D4_FB221A87BCA6",
  "this.PanoramaPlayListItem_6598432A_725F_4B9D_41C3_C0A5FE434108",
  "this.PanoramaPlayListItem_6598C32A_725F_4B9D_41D9_F5D3512F3311",
  "this.PanoramaPlayListItem_659F532A_725F_4B9D_41C5_5A59F30B1EA5",
  "this.PanoramaPlayListItem_659E632B_725F_4B93_4183_1A363C557C2E",
  "this.PanoramaPlayListItem_659EF32B_725F_4B93_41BE_5FE9BA1DC672",
  "this.PanoramaPlayListItem_659D232B_725F_4B93_41D4_246B38FBF7E8",
  "this.PanoramaPlayListItem_659D832B_725F_4B93_41A8_E1F8638866E0",
  "this.PanoramaPlayListItem_659CE32B_725F_4B93_41BC_6074D37CE800",
  "this.PanoramaPlayListItem_6593432D_725F_4B94_41D3_EC266E2385D3",
  "this.PanoramaPlayListItem_6593A32D_725F_4B94_41BD_E67F6C7C0223",
  "this.PanoramaPlayListItem_6592232D_725F_4B94_41D8_3F63682FC0A0",
  "this.PanoramaPlayListItem_6591632D_725F_4B94_41D0_83822ADC6A08"
 ],
 "id": "mainPlayList"
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Kiri",
 "id": "panorama_0DB85765_07E8_803A_4168_848F56013084",
 "thumbnailUrl": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
   "y": 799.31,
   "x": 665.68
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
 "class": "FadeOutEffect",
 "id": "effect_2A802644_08E8_807B_4174_23BBCEBD0C04",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_21D1DD8B_0828_800D_4194_303A20CAC1D4",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.68,
  "pitch": -6.77
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_camera"
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "MandiBawah",
 "id": "panorama_0DB10794_07E8_801B_418A_23648147084C",
 "thumbnailUrl": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
 "id": "effect_29CD16A0_0818_803B_419B_E05D80544E29",
 "duration": 200,
 "easing": "quad_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A804644_08E8_807B_4185_8BDBEC4F117A",
 "duration": 1000,
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
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6BD1C4EF_725F_4E93_41C0_C4B86ED3B351"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.41,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A20B3B8_725F_4AFC_4195_8E236480FEBC"
},
{
 "class": "FadeOutEffect",
 "id": "effect_21D70D8B_0828_800D_419A_55A121A275BB",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.88,
  "pitch": 0
 },
 "id": "camera_6A7D8340_725F_4B8D_41D8_518A6E262C2E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_646C45BE_725F_4EF5_41DB_C41E7AA06BE3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6BC154F8_725F_4E7D_41D8_F66F9537A842"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A62E353_725F_4BB3_41D1_4A10F4ED31F5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_camera"
},
{
 "class": "FadeOutEffect",
 "id": "effect_796380F9_6CD0_444C_41D8_B70ABA7034BC",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -56.31,
   "backwardYaw": 140.9,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -55.52,
   "backwardYaw": 140.9,
   "distance": 1,
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Torn",
 "id": "panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C",
 "thumbnailUrl": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 231.1,
   "y": 177.24,
   "x": 266.47
  }
 ],
 "overlays": [
  "this.overlay_5647BF8F_4D62_FE35_41A6_133409E3623B",
  "this.overlay_51E38A82_4D66_662E_41BB_4F1A036B2D0B"
 ]
},
{
 "class": "FadeInEffect",
 "id": "effect_208707B3_0828_801D_4191_7A9734A62487",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6AF763F9_725F_4A7F_41D5_F09E881B8F4D"
},
{
 "class": "FadeOutEffect",
 "id": "effect_644E55F0_725F_4E8C_41D2_789C84979FE5",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.76,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6BE704E5_725F_4E97_41D7_BA7D25126D6C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_645975D0_725F_4E8D_41D8_99944FA16E2C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6AD2841E_725F_4DB4_41D1_D34AE3A48B6A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_647E6597_725F_4EB3_41B8_1405D1C59825"
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
 "id": "playList_65A51328_725F_4B9D_41CF_301981142C73"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A805644_08E8_807B_417D_13F16C630306",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_644F95EE_725F_4E95_41D4_56B02E4971D5",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.34,
  "pitch": 1.38
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0DB85765_07E8_803A_4168_848F56013084_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.69,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A9C745F_725F_4DB3_41D5_484EDDF607D6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.51,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B598499_725F_4EBF_41CA_391DCA256ECD"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A81E644_08E8_807B_4192_870E069EC73B",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_2080B7B3_0828_801D_4191_9FE24A63AFC1",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A80D644_08E8_807B_4188_13B91B80F042",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_796080F9_6CD0_444C_41D3_158C63F985EE",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_644E75EF_725F_4E93_41B4_F12872992816",
 "duration": 1000,
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
 "id": "playList_65A5C328_725F_4B9D_41C3_BD48B532C63E"
},
{
 "gyroscopeEnabled": true,
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
 "class": "FadeInEffect",
 "id": "effect_208017B3_0828_801D_41A1_0B520F51EE9F",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_7963D0F9_6CD0_444C_41BB_500F12AB99D0",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0DB10794_07E8_801B_418A_23648147084C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6BA3550B_725F_4F93_4180_76C2C03C32E3"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Tol_Raw",
 "id": "panorama_40608D34_4CE3_E26B_419A_8B74D386E230",
 "thumbnailUrl": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 136,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_429FEC5F_4D26_22D5_41C9_C3C6FCE4DECC",
  "this.overlay_439B3863_4D26_62ED_41B0_94ED9E2A9351",
  "this.overlay_423A7300_4D22_E62B_41CB_A3A0559F24EF",
  "this.overlay_43B89AA1_4D3E_266D_41BF_4CFE1FD446AC",
  "this.overlay_43C5DE04_4D22_3E2B_41C3_CEDD1E6F19AB",
  "this.overlay_43ED5FA1_4D22_7E6D_4166_A495D7D0A092",
  "this.overlay_42C8D1FF_4D26_25D5_41C7_D33B094EEF1E",
  "this.overlay_5C1CE448_4D26_223B_4183_CB2DCACA14BC",
  "this.overlay_42C6801B_4D22_225E_41A4_3486A91F17A1",
  "this.overlay_50104765_4D66_2EF5_41B4_B0D300BB4FC5"
 ]
},
{
 "class": "FadeOutEffect",
 "id": "effect_52DF85C6_4D7E_2237_41C6_2AB4DC27A290",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_camera"
},
{
 "class": "FadeOutEffect",
 "id": "effect_21D1AD8B_0828_800D_419E_60ED50C39737",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B4A44A2_725F_4E8D_41C3_3EF0598217E4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B68548D_725F_4E97_41C1_8031CE2762C5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_684A8544_725F_4F95_41C3_5088A4FA58A6"
},
{
 "class": "FadeOutEffect",
 "id": "effect_796070F9_6CD0_444C_4199_E708D28A927F",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_644E45EF_725F_4E93_41C7_A9E88DE6948D",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B15D4C8_725F_4E9D_41D8_E3BB8DAB921A"
},
{
 "class": "FadeInEffect",
 "id": "effect_60453241_7277_458F_41D6_0DEC2FE97F61",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_208687B3_0828_801D_4140_2C36090D1F91",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 21.12,
   "backwardYaw": -7.32,
   "distance": 1,
   "panorama": "this.panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -29.48,
   "backwardYaw": 4.33,
   "distance": 1,
   "panorama": "this.panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 90,
 "partial": true,
 "id": "panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26",
 "thumbnailUrl": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_t.jpg",
 "label": "Gate",
 "pitch": 0,
 "hfovMax": 90,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0/d/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7C8710EB_6CD0_444D_41C3_CD5AE04C41C7",
  "this.overlay_7FA3E413_6CD0_43DD_41D6_798A8A0E7DD8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.89,
  "pitch": 4.05
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.24,
   "backwardYaw": 44.43,
   "distance": 1,
   "panorama": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Blok2",
 "id": "panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56",
 "thumbnailUrl": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 89.2,
   "y": 166.4,
   "x": 270.4
  }
 ],
 "overlays": [
  "this.overlay_5EB7B754_4D22_6E2B_41CF_876A863D763E",
  "this.overlay_59D50442_4D22_622F_41D0_37D6675A37F2",
  "this.overlay_5981B3DE_4D22_25D7_41AC_D0674B08E75E",
  "this.overlay_580FBA77_4D22_26D5_41D0_C7D3ED22684E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.69,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A8E646E_725F_4D95_41D8_CA6AC9B63F79"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.52,
  "pitch": 0
 },
 "id": "camera_68688532_725F_4F8D_41C5_E6D68E0FF356"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A431385_725F_4A97_41DB_E2BA96F7FB00"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A3F5394_725F_4AB4_41C3_A572247FA3B8"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A81F644_08E8_807B_419C_8E0505B46E62",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_52DF65C6_4D7E_2237_41C9_C6CC26C19DE1",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_21D08D8B_0828_800D_419E_AF1C518EC888",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A588367_725F_4B93_41AD_0EF9A1196C3C"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A81D644_08E8_807B_4192_CBDBC2B27A78",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_644E05F0_725F_4E8C_41CB_0EE426CB3841",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.1,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6BB3C502_725F_4F8C_41DA_BBC652320810"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B2BC4B5_725F_4EF7_41B8_B1EE1C68B78B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A3473A8_725F_4A9C_41C4_A8961E8ACE03"
},
{
 "class": "FadeOutEffect",
 "id": "effect_644E25F0_725F_4E8C_41CB_392DD1CC147E",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6453F5DA_725F_4EBC_41C4_EE754C9445A8"
},
{
 "class": "FadeOutEffect",
 "id": "effect_208027B3_0828_801D_4192_B6224B2ACE7F",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.33,
   "backwardYaw": -29.48,
   "distance": 1,
   "panorama": "this.panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF",
 "thumbnailUrl": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_t.jpg",
 "label": "Tol_Raw",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_62E0D410_6CD0_43DC_41CC_E32A9294B68A",
  "this.overlay_6243599E_6CD0_C4C4_417B_430F3444EF9E",
  "this.overlay_621F080B_6CD0_43CC_41C8_86185001ED50",
  "this.overlay_621F680B_6CD0_43CC_4190_85BD0672B213",
  "this.overlay_627D506B_6CD0_444D_41DA_0B7DFFEF8DB2",
  "this.overlay_627DA06B_6CD0_444D_41B6_123885009C35",
  "this.overlay_6370C1B2_6CD0_44DF_41C2_0047F719E301",
  "this.overlay_6337ACC7_6CD0_5C44_41D2_3143E678CE66"
 ]
},
{
 "class": "FadeInEffect",
 "id": "effect_6044F241_7277_458F_41CD_311A82D6C7AD",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B3BA4AC_725F_4E94_41C0_AFE3CA15DB35"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6858C53B_725F_4FF3_41CB_D22A82E8B6C5"
},
{
 "class": "FadeInEffect",
 "id": "effect_21D71D8B_0828_800D_419A_3E3272552727",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6448B5ED_725F_4E97_41D6_27ACCCDD4BA0"
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
  "this.overlay_1BBB8032_0818_801F_419A_56E2D4D5DEDE",
  "this.overlay_51D03764_4D66_6EEB_41BD_22C73F8B4B13"
 ]
},
{
 "class": "FadeOutEffect",
 "id": "effect_208157B3_0828_801D_418D_E186EA8D9A9C",
 "duration": 1000,
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
 "id": "playList_65A55328_725F_4B9D_41C7_F4A62C75122B"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -45.35,
   "backwardYaw": -1.51,
   "distance": 1,
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -49.03,
   "backwardYaw": -1.51,
   "distance": 1,
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317"
  },
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
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Living",
 "id": "panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
 "thumbnailUrl": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
 "class": "FadeOutEffect",
 "id": "effect_2A806644_08E8_807B_4163_A515F6437F80",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_camera"
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
 "id": "playList_65A5A328_725F_4B9D_41DB_F36AE2FBCECA"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A801644_08E8_807B_4182_98EEAE3FEC87",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_208797B3_0828_801D_4179_4A8CC03274C1",
 "duration": 1000,
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Dapur",
 "id": "panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
 "thumbnailUrl": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
 "id": "effect_2A81A644_08E8_807B_4199_BA780616C9ED",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.48,
  "pitch": -6.09
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.47,
  "pitch": 1.22
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.51,
   "backwardYaw": -45.35,
   "distance": 1,
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 142.03,
   "backwardYaw": 8.5,
   "distance": 1,
   "panorama": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Carport",
 "id": "panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
 "thumbnailUrl": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 48.4,
   "y": 112.4,
   "x": 209.4
  }
 ],
 "overlays": [
  "this.overlay_59D31220_4D2D_E66B_41C2_1344D94328F5",
  "this.overlay_58CB4A8B_4D2E_263D_41CE_D3789275972B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.32,
   "backwardYaw": 21.12,
   "distance": 1,
   "panorama": "this.panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 172.3,
   "backwardYaw": 133.46,
   "distance": 1,
   "panorama": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GerbangNew",
 "id": "panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305",
 "thumbnailUrl": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 179.27,
   "y": 444.4,
   "x": 156.4
  }
 ],
 "overlays": [
  "this.overlay_629AED91_7279_3E8F_41D7_DB48AB2AC7CC",
  "this.overlay_629ABD91_7279_3E8F_41D1_F1EC5128BC7D",
  "this.overlay_629A9D91_7279_3E8F_41D7_4C943455211A",
  "this.overlay_629A6D91_7279_3E8F_41D9_52F669A95500",
  "this.overlay_629A5D91_7279_3E8F_41BF_AC7AF7D0DE9F",
  "this.overlay_606427AA_726B_4A9D_41DB_CD7C88883C59"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.96,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6AE0C408_725F_4D9D_41AF_21E9E4A73DFC"
},
{
 "class": "FadeInEffect",
 "id": "effect_644FF5EE_725F_4E95_41D8_DF6F8CAE172B",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_647325A1_725F_4E8C_41D2_9CF03340CFE0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.74,
  "pitch": -7.11
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.11,
  "pitch": 1.89
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_21D0AD8B_0828_800D_41A0_F062EE1B7DDE",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_646635C7_725F_4E93_4167_2AE3A3C6BA11"
},
{
 "class": "FadeInEffect",
 "id": "effect_644FD5EE_725F_4E95_41D2_433187EC2022",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B25F4BF_725F_4EF3_41CA_6839D5A9B3CC"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A80E644_08E8_807B_418E_2985DEED3BB7",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A800644_08E8_807B_4179_4F883FB0EF06",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_6045A240_7277_458D_41AD_AED931D0FFAF",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_208727B3_0828_801D_4181_C0C4DC69C6E0",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_5460ED4E_4D2E_2236_41B2_04A307331E9D",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A818644_08E8_807B_4190_B0878247B51A",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_60456241_7277_458F_41B8_69D8DF2742C4",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_645615E4_725F_4E95_41C0_36550462E6FE"
},
{
 "class": "FadeOutEffect",
 "id": "effect_52DFB5C6_4D7E_2237_41CA_0973E058CB5F",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A819644_08E8_807B_4180_D92B4637B19E",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_2C2DE1EC_08E8_800A_419B_5EF02676B474",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Kanan",
 "id": "panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
 "thumbnailUrl": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
   "y": 803.85,
   "x": 365.08
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
 "id": "effect_21D00D8B_0828_800D_419C_CDEEFC453C52",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 58.08,
  "pitch": -2.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_camera"
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
  "this.overlay_554C95C6_4D26_6237_41D2_EF8EA6DB5CFE",
  "this.overlay_54CB93B2_4D26_E66F_41D2_339BCEC498FF",
  "this.overlay_54C1B21A_4D26_265F_41CF_5BB097E0350F",
  "this.overlay_540CB958_4D26_62DB_41CB_FA3D242F3EC6"
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_647675AB_725F_4E93_41AB_E27B7FDEF84D"
},
{
 "class": "FadeOutEffect",
 "id": "effect_52DF75C6_4D7E_2237_41CB_864D33CF9148",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "id": "effect_54610D4E_4D2E_2236_41C8_4739D9D932AA",
 "duration": 500,
 "easing": "linear"
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
 "id": "playList_65A57328_725F_4B9D_41C6_A047110A5C3B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A6BC349_725F_4B9F_41CF_A9F9783D4FC7"
},
{
 "class": "FadeInEffect",
 "id": "effect_208787B3_0828_801D_4197_9F0012D1715F",
 "duration": 1000,
 "easing": "cubic_in_out"
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Balkon",
 "id": "panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
 "thumbnailUrl": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
   "y": 1229.95,
   "x": 488.47
  }
 ],
 "overlays": [
  "this.overlay_140CA710_0868_801B_4180_B00E1AB3A893",
  "this.overlay_153CD696_0869_8006_4192_4B0462CC548C",
  "this.overlay_1538B1DF_0868_8005_413F_7A19437A76E6",
  "this.overlay_157ED137_0868_8005_419D_224F0194667D",
  "this.overlay_5333052F_4D62_E276_41CD_4A5A7627BC09"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 140.9,
   "backwardYaw": -56.31,
   "distance": 1,
   "panorama": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 140.56,
   "backwardYaw": -56.31,
   "distance": 1,
   "panorama": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C"
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
  },
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
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Atas",
 "id": "panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
 "thumbnailUrl": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
   "angle": 216.51,
   "y": 500.93,
   "x": 412.56
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
  "this.overlay_12D261BD_0868_8005_4198_7D26B9FBA97F",
  "this.overlay_564280AB_4D62_627D_41B4_52D1EBEE955F",
  "this.overlay_56226179_4D62_E2DD_41CB_0460EAB693D8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6AFB33E9_725F_4A9F_41CB_45EF09E4F2C2"
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
 "id": "playList_65A6B328_725F_4B9D_41D2_FFBA0F3AD715"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A558375_725F_4A77_41C2_6FB7C5F8966C"
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "MandiAtas",
 "id": "panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
 "thumbnailUrl": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
   "y": 561.36,
   "x": 195.2
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
 "id": "panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_29CD66A0_0818_803B_4190_934A6AEE0753",
 "duration": 200,
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B9D3515_725F_4FB7_41AE_502922381858"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B8EB51E_725F_4FB5_41D2_99BBD5138780"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B7F947E_725F_4E75_4152_C0CDA8957187"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 8.5,
   "backwardYaw": 142.03,
   "distance": 1,
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 133.46,
   "backwardYaw": 172.3,
   "distance": 1,
   "panorama": "this.panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 44.43,
   "backwardYaw": 177.24,
   "distance": 1,
   "panorama": "this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Section_1",
 "id": "panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
 "thumbnailUrl": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 49.7,
   "y": 167.4,
   "x": 157.4
  }
 ],
 "overlays": [
  "this.overlay_5EE67F75_4D26_FED5_41CB_9B9B575BF08E",
  "this.overlay_5E21F11E_4D26_224F_41CF_FC38BD3FF8AC",
  "this.overlay_59420EB1_4D26_1E6D_41AF_76053B0BD9BF",
  "this.overlay_5044DA77_4D62_26D5_41C6_430B4A7E65CA",
  "this.overlay_6387C86E_726B_4595_41CD_15D64894796F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6B07B4D2_725F_4E8D_41A1_B08060E9436B"
},
{
 "class": "FadeInEffect",
 "id": "effect_644E65EF_725F_4E93_41B7_B1508C9D861B",
 "duration": 1000,
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
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A08E3D5_725F_4AB7_417F_8D212D149D3B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.45,
  "pitch": 1.06
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_camera"
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bedroom",
 "id": "panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
 "thumbnailUrl": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
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
  "yaw": -7.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6BF7E4DD_725F_4EB4_41D8_CFB0134EC5CB"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6469C5B4_725F_4EF5_41D7_3FB6A0858007"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.41,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6A1C63C7_725F_4A94_41C0_962DB8598A61"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6AC2E42C_725F_4D95_41D2_57F079147DF0"
},
{
 "class": "FadeInEffect",
 "id": "effect_6045F240_7277_458D_41C5_53B98D761F25",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6AAC444B_725F_4D93_41DB_85B11F6DD3D9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_6ABCF43C_725F_4DF5_41C3_73E9EA4ED2F1"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A81B644_08E8_807B_417A_96E33A558BB4",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -159.03,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": -159.03,
  "pitch": 0.05
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_40608D34_4CE3_E26B_419A_8B74D386E230_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "targetPitch": 0.05,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "duration": 5000,
   "easing": "cubic_in_out",
   "targetHfov": 125
  }
 ]
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A807644_08E8_807B_4196_737E72118D2B",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A80C644_08E8_807B_419C_BB6E0B2AECA6",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Blok1",
 "id": "panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82",
 "thumbnailUrl": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/f/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/u/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/r/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/b/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/d/2/{row}_{column}.jpg",
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
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/l/2/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 89.56,
   "y": 444.4,
   "x": 272.4
  }
 ],
 "overlays": [
  "this.overlay_5CAFB95A_4D1E_22DF_41C6_1EE4F3CB828F",
  "this.overlay_5E10F4F1_4D22_23ED_41BE_34FDAD864839",
  "this.overlay_5EC7EB87_4D26_2635_41C7_473DEDBB4DC4"
 ]
},
{
 "class": "FadeOutEffect",
 "id": "effect_2A803644_08E8_807B_4181_F215F5190C71",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#999999"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "minWidth": 100,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "minHeight": 50,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_17318523_0868_803D_4196_4BE8427F4E1F",
 "left": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_17312523_0868_803D_4192_FFDC412A7D19",
  "this.Button_17314523_0868_803D_4191_5BF2ACF38BAA",
  "this.Button_17317523_0868_803D_4185_1CCDD912D023",
  "this.Button_17316523_0868_803D_417E_BCFA3B6EBB22",
  "this.Button_17319523_0868_803D_415C_F1EEA314AB4B",
  "this.Container_29E43855_0828_8005_416F_A46E143B25DC"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "bottom": 15,
 "contentOpaque": false,
 "shadow": false,
 "height": 60,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "gap": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "right": 15,
 "width": 300,
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
  "this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641",
  "this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39"
 ],
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": 15,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "height": 300,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "gap": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "ContainerFloor"
 },
 "overflow": "visible",
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_20AA0897_0828_8005_4198_75B2E94D10DC",
 "left": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": 15,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "height": 100,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "Logo BMI"
 },
 "overflow": "hidden",
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "id": "Button_17312523_0868_803D_4192_FFDC412A7D19",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "minHeight": 1,
 "data": {
  "name": "Button settings VR"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "backgroundColorRatios": [],
 "width": 60,
 "layout": "horizontal",
 "borderSize": 0,
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_17312523_0868_803D_4192_FFDC412A7D19.png",
 "shadow": false,
 "mode": "toggle",
 "height": 60,
 "fontSize": 12,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17312523_0868_803D_4192_FFDC412A7D19_pressed.png",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "id": "Button_17319523_0868_803D_415C_F1EEA314AB4B",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "layout": "horizontal",
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_17319523_0868_803D_415C_F1EEA314AB4B.png",
 "pressedIconHeight": 30,
 "height": 60,
 "shadow": false,
 "mode": "toggle",
 "fontSize": 12,
 "backgroundColor": [],
 "gap": 5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "minWidth": 1,
 "paddingLeft": 0,
 "pressedIconWidth": 30,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17319523_0868_803D_415C_F1EEA314AB4B_pressed.png",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "id": "Button_17317523_0868_803D_4185_1CCDD912D023",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Button Settings Mute"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "layout": "horizontal",
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_17317523_0868_803D_4185_1CCDD912D023.png",
 "pressedIconHeight": 30,
 "height": 60,
 "shadow": false,
 "mode": "toggle",
 "fontSize": 12,
 "backgroundColor": [],
 "gap": 5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "minWidth": 1,
 "paddingLeft": 0,
 "pressedIconWidth": 30,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17317523_0868_803D_4185_1CCDD912D023_pressed.png",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "class": "PanoramaPlayListItem",
 "end": "if(this.existsKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')){ if(this.getKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')) { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true, -1, this.effect_6045F240_7277_458D_41C5_53B98D761F25, 'showEffect', false); } else { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false, -1, this.effect_644E45EF_725F_4E93_41C7_A9E88DE6948D, 'hideEffect', false); } }; this.unregisterKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22'); if(this.existsKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')){ if(this.getKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')) { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, -1, this.effect_6045A240_7277_458D_41AD_AED931D0FFAF, 'showEffect', false); } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, -1, this.effect_644E55F0_725F_4E8C_41D2_789C84979FE5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC'); if(this.existsKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')){ if(this.getKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')) { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, -1, this.effect_60456241_7277_458F_41B8_69D8DF2742C4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, -1, this.effect_644E25F0_725F_4E8C_41CB_392DD1CC147E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_60453241_7277_458F_41D6_0DEC2FE97F61, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_644E35F0_725F_4E8C_41CA_CA0B19DA874C, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer'); if(this.existsKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')){ if(this.getKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')) { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_6044F241_7277_458F_41CD_311A82D6C7AD, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_644E05F0_725F_4E8C_41CB_0EE426CB3841, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')",
 "camera": "this.panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_camera",
 "begin": "this.registerKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482', this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482.get('visible')); this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7', this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')); this.registerKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC', this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')); this.registerKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22', this.Button_17316523_0868_803D_417E_BCFA3B6EBB22.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_659A532A_725F_4B9D_41AC_08C622D1169A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false); this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true, -1, this.effect_6045F240_7277_458D_41C5_53B98D761F25, 'showEffect', false); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false); this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, -1, this.effect_6045A240_7277_458D_41AD_AED931D0FFAF, 'showEffect', false); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false); this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, -1, this.effect_60456241_7277_458F_41B8_69D8DF2742C4, 'showEffect', false); this.keepComponentVisibility(this.MapViewer, false); this.setComponentVisibility(this.MapViewer, true, -1, this.effect_60453241_7277_458F_41D6_0DEC2FE97F61, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_6044F241_7277_458F_41CD_311A82D6C7AD, 'showEffect', false)",
 "media": "this.panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659A532A_725F_4B9D_41AC_08C622D1169A",
 "start": "this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true); this.keepComponentVisibility(this.MapViewer, true); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true)"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659A832A_725F_4B9D_41D2_618B233DC640, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659A832A_725F_4B9D_41D2_618B233DC640"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6599E32A_725F_4B9D_41D4_FB221A87BCA6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6599E32A_725F_4B9D_41D4_FB221A87BCA6"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6598432A_725F_4B9D_41C3_C0A5FE434108, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6598432A_725F_4B9D_41C3_C0A5FE434108"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6598C32A_725F_4B9D_41D9_F5D3512F3311, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "media": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6598C32A_725F_4B9D_41D9_F5D3512F3311"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81E644_08E8_807B_4192_870E069EC73B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_21D1AD8B_0828_800D_419E_60ED50C39737, 'hideEffect', false)",
 "camera": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659F532A_725F_4B9D_41C5_5A59F30B1EA5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81D644_08E8_807B_4192_CBDBC2B27A78, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true, -1, this.effect_2C2DE1EC_08E8_800A_419B_5EF02676B474, 'showEffect', false)",
 "media": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659F532A_725F_4B9D_41C5_5A59F30B1EA5",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A818644_08E8_807B_4190_B0878247B51A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_21D00D8B_0828_800D_419C_CDEEFC453C52, 'hideEffect', false)",
 "camera": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659E632B_725F_4B93_4183_1A363C557C2E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81F644_08E8_807B_419C_8E0505B46E62, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true, -1, this.effect_21D1DD8B_0828_800D_4194_303A20CAC1D4, 'showEffect', false)",
 "media": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659E632B_725F_4B93_4183_1A363C557C2E",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81A644_08E8_807B_4199_BA780616C9ED, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_21D08D8B_0828_800D_419E_AF1C518EC888, 'hideEffect', false)",
 "camera": "this.panorama_0DB10794_07E8_801B_418A_23648147084C_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659EF32B_725F_4B93_41BE_5FE9BA1DC672, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A819644_08E8_807B_4180_D92B4637B19E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true, -1, this.effect_21D0AD8B_0828_800D_41A0_F062EE1B7DDE, 'showEffect', false)",
 "media": "this.panorama_0DB10794_07E8_801B_418A_23648147084C",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659EF32B_725F_4B93_41BE_5FE9BA1DC672",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A804644_08E8_807B_4185_8BDBEC4F117A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_21D70D8B_0828_800D_419A_55A121A275BB, 'hideEffect', false)",
 "camera": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659D232B_725F_4B93_41D4_246B38FBF7E8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81B644_08E8_807B_417A_96E33A558BB4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true, -1, this.effect_21D71D8B_0828_800D_419A_3E3272552727, 'showEffect', false)",
 "media": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659D232B_725F_4B93_41D4_246B38FBF7E8",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A806644_08E8_807B_4163_A515F6437F80, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2086A7B3_0828_801D_419F_CD79C5141477, 'hideEffect', false)",
 "camera": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659D832B_725F_4B93_41A8_E1F8638866E0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A805644_08E8_807B_417D_13F16C630306, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true, -1, this.effect_208687B3_0828_801D_4140_2C36090D1F91, 'showEffect', false)",
 "media": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659D832B_725F_4B93_41A8_E1F8638866E0",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A800644_08E8_807B_4179_4F883FB0EF06, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_208727B3_0828_801D_4181_C0C4DC69C6E0, 'hideEffect', false)",
 "camera": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_659CE32B_725F_4B93_41BC_6074D37CE800, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A807644_08E8_807B_4196_737E72118D2B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true, -1, this.effect_208707B3_0828_801D_4191_7A9734A62487, 'showEffect', false)",
 "media": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_659CE32B_725F_4B93_41BC_6074D37CE800",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A802644_08E8_807B_4174_23BBCEBD0C04, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_208797B3_0828_801D_4179_4A8CC03274C1, 'hideEffect', false)",
 "camera": "this.panorama_0DB85765_07E8_803A_4168_848F56013084_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6593432D_725F_4B94_41D3_EC266E2385D3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A801644_08E8_807B_4182_98EEAE3FEC87, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true, -1, this.effect_208787B3_0828_801D_4197_9F0012D1715F, 'showEffect', false)",
 "media": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6593432D_725F_4B94_41D3_EC266E2385D3",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80C644_08E8_807B_419C_BB6E0B2AECA6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_208027B3_0828_801D_4192_B6224B2ACE7F, 'hideEffect', false)",
 "camera": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6593A32D_725F_4B94_41BD_E67F6C7C0223, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A803644_08E8_807B_4181_F215F5190C71, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true, -1, this.effect_208017B3_0828_801D_41A1_0B520F51EE9F, 'showEffect', false)",
 "media": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6593A32D_725F_4B94_41BD_E67F6C7C0223",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80E644_08E8_807B_418E_2985DEED3BB7, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_208157B3_0828_801D_418D_E186EA8D9A9C, 'hideEffect', false)",
 "camera": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6592232D_725F_4B94_41D8_3F63682FC0A0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80D644_08E8_807B_4188_13B91B80F042, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true, -1, this.effect_2080B7B3_0828_801D_4191_9FE24A63AFC1, 'showEffect', false)",
 "media": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6592232D_725F_4B94_41D8_3F63682FC0A0",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_52DF85C6_4D7E_2237_41C6_2AB4DC27A290, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, false, -1, this.effect_52DF75C6_4D7E_2237_41CB_864D33CF9148, 'hideEffect', false); this.trigger('tourEnded')",
 "camera": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_6591632D_725F_4B94_41D0_83822ADC6A08, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 0); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_52DFB5C6_4D7E_2237_41CA_0973E058CB5F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, false); this.setComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, true, -1, this.effect_52DF65C6_4D7E_2237_41C9_C6CC26C19DE1, 'showEffect', false)",
 "media": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_6591632D_725F_4B94_41D0_83822ADC6A08",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, true)"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_647675AB_725F_4E93_41AB_E27B7FDEF84D); this.mainPlayList.set('selectedIndex', 16)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_6469C5B4_725F_4EF5_41D7_3FB6A0858007); this.mainPlayList.set('selectedIndex', 16)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_646C45BE_725F_4EF5_41DB_C41E7AA06BE3); this.mainPlayList.set('selectedIndex', 12)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_646635C7_725F_4E93_4167_2AE3A3C6BA11); this.mainPlayList.set('selectedIndex', 12)"
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
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_645615E4_725F_4E95_41C0_36550462E6FE); this.mainPlayList.set('selectedIndex', 8)"
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
  "y": 603.87,
  "height": 105.23,
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
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
  "y": 188.71,
  "height": 113.61,
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
   "click": "this.mainPlayList.set('selectedIndex', 9)"
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
  "y": 396.29,
  "height": 109.42,
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
   "click": "this.mainPlayList.set('selectedIndex', 10)"
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
  "y": 708.71,
  "height": 123.52,
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
   "click": "this.mainPlayList.set('selectedIndex', 11)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_6BB3C502_725F_4F8C_41DA_BBC652320810); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.43,
   "image": "this.AnimatedImageResource_5166A603_4D62_6E2D_41D0_974A95270EB1",
   "pitch": -33.19,
   "yaw": -56.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5647BF8F_4D62_FE35_41A6_133409E3623B",
 "maps": [
  {
   "hfov": 22.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -33.19
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_6BA3550B_725F_4F93_4180_76C2C03C32E3); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 385,
      "height": 80
     }
    ]
   },
   "pitch": -13.5,
   "yaw": -55.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_51E38A82_4D66_662E_41BB_4F1A036B2D0B",
 "maps": [
  {
   "hfov": 32.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 77,
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "textDecoration": "none",
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "id": "Button_17314523_0868_803D_4191_5BF2ACF38BAA",
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Button Settings Gyro"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "layout": "horizontal",
 "rollOverIconHeight": 30,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_17314523_0868_803D_4191_5BF2ACF38BAA.png",
 "pressedIconHeight": 30,
 "height": 60,
 "shadow": false,
 "mode": "toggle",
 "fontSize": 12,
 "backgroundColor": [],
 "gap": 5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "minWidth": 1,
 "paddingLeft": 0,
 "pressedIconWidth": 30,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17314523_0868_803D_4191_5BF2ACF38BAA_pressed.png",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 1.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 14,
      "height": 204
     }
    ]
   },
   "pitch": -11.49,
   "yaw": 63.43
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_429FEC5F_4D26_22D5_41C9_C3C6FCE4DECC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 1.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 7,
      "height": 102
     }
    ]
   },
   "pitch": -11.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 43.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 511,
      "height": 88
     }
    ]
   },
   "pitch": 12.75,
   "yaw": -64.82,
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
 "id": "overlay_439B3863_4D26_62ED_41B0_94ED9E2A9351",
 "data": {
  "label": "(ITB, Unpad, IPDN)"
 },
 "maps": [
  {
   "hfov": 43.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 92,
      "height": 16
     }
    ]
   },
   "pitch": 12.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 54.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 620,
      "height": 77
     }
    ]
   },
   "pitch": 3.2,
   "yaw": 64.06,
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
 "id": "overlay_423A7300_4D22_E62B_41CB_A3A0559F24EF",
 "data": {
  "label": "Gerbang Tol Cileunyi"
 },
 "maps": [
  {
   "hfov": 54.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 16
     }
    ]
   },
   "pitch": 3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 44.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 508,
      "height": 88
     }
    ]
   },
   "pitch": -3.08,
   "yaw": -155.63,
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
 "id": "overlay_43B89AA1_4D3E_266D_41BF_4CFE1FD446AC",
 "data": {
  "label": "Bukit Mekar Indah"
 },
 "maps": [
  {
   "hfov": 44.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 92,
      "height": 16
     }
    ]
   },
   "pitch": -3.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 189
     }
    ]
   },
   "pitch": -9.36,
   "yaw": 128.63
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_43C5DE04_4D22_3E2B_41C3_CEDD1E6F19AB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 1.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 8,
      "height": 94
     }
    ]
   },
   "pitch": -9.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 257
     }
    ]
   },
   "pitch": -4.71,
   "yaw": -65.32
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_43ED5FA1_4D22_7E6D_4166_A495D7D0A092",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 1.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 8,
      "height": 128
     }
    ]
   },
   "pitch": -4.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 49.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 568,
      "height": 77
     }
    ]
   },
   "pitch": 5.97,
   "yaw": 128.88,
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
 "id": "overlay_42C8D1FF_4D26_25D5_41C7_D33B094EEF1E",
 "data": {
  "label": "Arah Bandung Kota"
 },
 "maps": [
  {
   "hfov": 49.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 118,
      "height": 16
     }
    ]
   },
   "pitch": 5.97
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
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.63,
   "image": "this.AnimatedImageResource_5E4AFC3D_4D22_6255_41BB_36269F3F6ADA",
   "pitch": 10.18,
   "yaw": -155.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C1CE448_4D26_223B_4183_CB2DCACA14BC",
 "maps": [
  {
   "hfov": 21.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 58.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 714,
      "height": 88
     }
    ]
   },
   "pitch": 21.04,
   "yaw": -65.19,
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
 "id": "overlay_42C6801B_4D22_225E_41A4_3486A91F17A1",
 "data": {
  "label": "Area Kampus Jatinangor\u000d"
 },
 "maps": [
  {
   "hfov": 58.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 129,
      "height": 16
     }
    ]
   },
   "pitch": 21.04
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 30.96,
 "id": "overlay_50104765_4D66_2EF5_41B4_B0D300BB4FC5",
 "yaw": -103.63,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305, this.camera_6ABCF43C_725F_4DF5_41C3_73E9EA4ED2F1); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.93,
   "image": "this.AnimatedImageResource_781CE67B_6CD0_4C4C_41D4_4B8D96DED606",
   "pitch": -20.27,
   "yaw": 21.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C8710EB_6CD0_444D_41C3_CD5AE04C41C7",
 "maps": [
  {
   "hfov": 29.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -20.27
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
   "click": "this.startPanoramaWithCamera(this.panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF, this.camera_6AAC444B_725F_4D93_41DB_85B11F6DD3D9); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.24,
   "image": "this.AnimatedImageResource_79A923EB_6CCF_C44D_41B2_0A3954A81FA1",
   "pitch": 20.67,
   "yaw": -29.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7FA3E413_6CD0_43DD_41D6_798A8A0E7DD8",
 "maps": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 20.67
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
   "click": "this.startPanoramaWithCamera(this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF, this.camera_687E9529_725F_4F9C_41C5_BC3A7BDDC6C6); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.18,
   "image": "this.AnimatedImageResource_5B26F10E_4D22_6237_41B1_A1BD01CFED31",
   "pitch": -17.06,
   "yaw": 177.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EB7B754_4D22_6E2B_41CF_876A863D763E",
 "maps": [
  {
   "hfov": 32.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -17.06
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.49,
   "image": "this.AnimatedImageResource_5B26510E_4D22_6237_41C4_E82A73F1B1B4",
   "pitch": -5.71,
   "yaw": 69.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59D50442_4D22_622F_41D0_37D6675A37F2",
 "maps": [
  {
   "hfov": 17.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.71
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.58,
   "image": "this.AnimatedImageResource_5B26310E_4D22_6237_41D0_3C010A9AE9A2",
   "pitch": 0.57,
   "yaw": -83.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5981B3DE_4D22_25D7_41AC_D0674B08E75E",
 "maps": [
  {
   "hfov": 17.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.57
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
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.31,
   "image": "this.AnimatedImageResource_5B25810E_4D22_6237_418A_C4478BC55902",
   "pitch": -11.08,
   "yaw": -146.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_580FBA77_4D22_26D5_41D0_C7D3ED22684E",
 "maps": [
  {
   "hfov": 26.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -11.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 1.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 467
     }
    ]
   },
   "pitch": -14.26,
   "yaw": -42.46
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62E0D410_6CD0_43DC_41CC_E32A9294B68A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 1.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 6,
      "height": 200
     }
    ]
   },
   "pitch": -14.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 47.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 553,
      "height": 88
     }
    ]
   },
   "pitch": 9.98,
   "yaw": -40.76,
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
 "id": "overlay_6243599E_6CD0_C4C4_417B_430F3444EF9E",
 "data": {
  "label": "Kantor Pemasaran"
 },
 "maps": [
  {
   "hfov": 47.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 16
     }
    ]
   },
   "pitch": 9.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 1.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 467
     }
    ]
   },
   "pitch": -0.19,
   "yaw": 34.42
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_621F080B_6CD0_43CC_41C8_86185001ED50",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 1.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 6,
      "height": 200
     }
    ]
   },
   "pitch": -0.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 53.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 667,
      "height": 72
     }
    ]
   },
   "pitch": 24.78,
   "yaw": 35.39,
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
 "id": "overlay_621F680B_6CD0_43CC_4190_85BD0672B213",
 "data": {
  "label": "Bukit Mekar Indah 1 & 2"
 },
 "maps": [
  {
   "hfov": 53.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 148,
      "height": 16
     }
    ]
   },
   "pitch": 24.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 50.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 583,
      "height": 88
     }
    ]
   },
   "pitch": -6.34,
   "yaw": -3.89,
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
 "id": "overlay_627D506B_6CD0_444D_41DA_0B7DFFEF8DB2",
 "data": {
  "label": "Bukit Mekar Indah 3"
 },
 "maps": [
  {
   "hfov": 50.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 106,
      "height": 16
     }
    ]
   },
   "pitch": -6.34
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
   "click": "this.startPanoramaWithCamera(this.panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26, this.camera_68688532_725F_4F8D_41C5_E6D68E0FF356); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.1,
   "image": "this.AnimatedImageResource_7F43D8FE_6CD1_C447_418F_65E04E6319F0",
   "pitch": -34.54,
   "yaw": 4.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_627DA06B_6CD0_444D_41B6_123885009C35",
 "maps": [
  {
   "hfov": 18.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -34.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 1.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 467
     }
    ]
   },
   "pitch": -0.19,
   "yaw": 34.42
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6370C1B2_6CD0_44DF_41C2_0047F719E301",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 1.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 6,
      "height": 200
     }
    ]
   },
   "pitch": -0.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 12.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 143,
      "height": 307
     }
    ]
   },
   "pitch": -22.8,
   "yaw": -1.76
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6337ACC7_6CD0_5C44_41D2_3143E678CE66",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 71,
      "height": 153
     }
    ]
   },
   "pitch": -22.8
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
  "y": 755.87,
  "height": 95.96,
  "width": 87.37,
  "x": 321.4,
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
   "click": "this.mainPlayList.set('selectedIndex', 15)"
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
  "y": 754.44,
  "height": 89.73,
  "width": 84,
  "x": 623.68,
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
   "click": "this.mainPlayList.set('selectedIndex', 14)"
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
  "y": 1188.42,
  "height": 83.07,
  "width": 81.64,
  "x": 447.65,
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
   "click": "this.mainPlayList.set('selectedIndex', 16)"
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
  "y": 457.96,
  "height": 85.94,
  "width": 93.1,
  "x": 366.01,
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
   "click": "this.mainPlayList.set('selectedIndex', 12)"
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
  "y": 515.18,
  "height": 92.35,
  "width": 90.92,
  "x": 149.74,
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
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "id": "overlay_1BBB8032_0818_801F_419A_56E2D4D5DEDE",
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
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 16
    }
   ]
  },
  "y": 134.27,
  "x": 219.92,
  "offsetY": 0,
  "height": 85.94,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 134.27,
  "height": 85.94,
  "width": 93.1,
  "x": 219.92,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_HS_5.png",
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
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "id": "overlay_51D03764_4D66_6EEB_41BD_22C73F8B4B13",
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
   "click": "this.startPanoramaWithCamera(this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317, this.camera_6A62E353_725F_4BB3_41D1_4A10F4ED31F5); this.mainPlayList.set('selectedIndex', 7)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B, this.camera_6A20B3B8_725F_4AFC_4195_8E236480FEBC); this.mainPlayList.set('selectedIndex', 11)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B, this.camera_6A1C63C7_725F_4A94_41C0_962DB8598A61); this.mainPlayList.set('selectedIndex', 11)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317, this.camera_6A588367_725F_4B93_41AD_0EF9A1196C3C); this.mainPlayList.set('selectedIndex', 7)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F, this.camera_6A558375_725F_4A77_41C2_6FB7C5F8966C); this.mainPlayList.set('selectedIndex', 9)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F, this.camera_6A431385_725F_4A97_41DB_E2BA96F7FB00); this.mainPlayList.set('selectedIndex', 9)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB10794_07E8_801B_418A_23648147084C, this.camera_6A3F5394_725F_4AB4_41C3_A572247FA3B8); this.mainPlayList.set('selectedIndex', 10)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB10794_07E8_801B_418A_23648147084C, this.camera_6A3473A8_725F_4A9C_41C4_A8961E8ACE03); this.mainPlayList.set('selectedIndex', 10)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_6A08E3D5_725F_4AB7_417F_8D212D149D3B); this.mainPlayList.set('selectedIndex', 12)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_6AFB33E9_725F_4A9F_41CB_45EF09E4F2C2); this.mainPlayList.set('selectedIndex', 12)"
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
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_6BD1C4EF_725F_4E93_41C0_C4B86ED3B351); this.mainPlayList.set('selectedIndex', 8)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_6BC154F8_725F_4E7D_41D8_F66F9537A842); this.mainPlayList.set('selectedIndex', 8)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF, this.camera_6453F5DA_725F_4EBC_41C4_EE754C9445A8); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.64,
   "image": "this.AnimatedImageResource_5B25610E_4D22_6237_41C3_0FCA90CDCB31",
   "pitch": -26.78,
   "yaw": 142.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59D31220_4D2D_E66B_41C2_1344D94328F5",
 "maps": [
  {
   "hfov": 28.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -26.78
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_645975D0_725F_4E8D_41D8_99944FA16E2C); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.35,
   "image": "this.AnimatedImageResource_5B25310E_4D22_6237_41BC_1436855EB467",
   "pitch": -1.32,
   "yaw": -1.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58CB4A8B_4D2E_263D_41CE_D3789275972B",
 "maps": [
  {
   "hfov": 23.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.32
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
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.48,
   "image": "this.AnimatedImageResource_668F8FFC_7277_3A74_41D8_3ADF581D1DE1",
   "pitch": -18.12,
   "yaw": -93.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_629AED91_7279_3E8F_41D7_DB48AB2AC7CC",
 "maps": [
  {
   "hfov": 25.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -18.12
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.55,
   "image": "this.AnimatedImageResource_668F2FFC_7277_3A74_41CF_E3F5E0C42550",
   "pitch": -2.95,
   "yaw": 58.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_629ABD91_7279_3E8F_41D1_F1EC5128BC7D",
 "maps": [
  {
   "hfov": 17.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.95
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.58,
   "image": "this.AnimatedImageResource_668F4FFC_7277_3A74_41D8_4594E5F82ECD",
   "pitch": 0.07,
   "yaw": 110.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_629A9D91_7279_3E8F_41D7_4C943455211A",
 "maps": [
  {
   "hfov": 17.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.07
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
   "click": "this.startPanoramaWithCamera(this.panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26, this.camera_6A7D8340_725F_4B8D_41D8_518A6E262C2E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.75,
   "image": "this.AnimatedImageResource_668ECFFC_7277_3A74_41B3_BB1587A86E6E",
   "pitch": -16.11,
   "yaw": -7.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_629A6D91_7279_3E8F_41D9_52F669A95500",
 "maps": [
  {
   "hfov": 25.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.11
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
   "click": "this.startPanoramaWithCamera(this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF, this.camera_6A6BC349_725F_4B9F_41CF_A9F9783D4FC7); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26,
   "image": "this.AnimatedImageResource_668E1FFD_7277_3A74_41D8_F78A2A522DD5",
   "pitch": -14.1,
   "yaw": 172.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_629A5D91_7279_3E8F_41BF_AC7AF7D0DE9F",
 "maps": [
  {
   "hfov": 26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -14.1
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 2.32,
 "id": "overlay_606427AA_726B_4A9D_41DB_CD7C88883C59",
 "yaw": -4.4,
 "bleachingDistance": 0.4
},
{
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#999999"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "height": 250,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "minWidth": 1,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "minHeight": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "visible": false,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_6858C53B_725F_4FF3_41CB_D22A82E8B6C5); this.mainPlayList.set('selectedIndex', 16)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_684A8544_725F_4F95_41C3_5088A4FA58A6); this.mainPlayList.set('selectedIndex', 16)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_647E6597_725F_4EB3_41B8_1405D1C59825); this.mainPlayList.set('selectedIndex', 12)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_647325A1_725F_4E8C_41D2_9CF03340CFE0); this.mainPlayList.set('selectedIndex', 12)"
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
  "y": 418.9,
  "x": 134.9,
  "offsetY": 0,
  "height": 51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 418.9,
  "height": 51,
  "width": 43,
  "x": 134.9,
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
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "id": "overlay_29222E9E_08E8_8006_4177_560478564F90",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 18
    }
   ]
  },
  "y": 418.9,
  "x": 250.9,
  "offsetY": 0,
  "height": 51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 418.9,
  "height": 51,
  "width": 43,
  "x": 250.9,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_2.png",
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
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "id": "overlay_554C95C6_4D26_6237_41D2_EF8EA6DB5CFE",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 18
    }
   ]
  },
  "y": 141.9,
  "x": 135.9,
  "offsetY": 0,
  "height": 51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 141.9,
  "height": 51,
  "width": 43,
  "x": 135.9,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_3.png",
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
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "id": "overlay_54CB93B2_4D26_E66F_41D2_339BCEC498FF",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 18
    }
   ]
  },
  "y": 86.9,
  "x": 187.9,
  "offsetY": 0,
  "height": 51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 86.9,
  "height": 51,
  "width": 43,
  "x": 187.9,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_4.png",
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
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "id": "overlay_54C1B21A_4D26_265F_41CF_5BB097E0350F",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 18
    }
   ]
  },
  "y": 140.9,
  "x": 248.9,
  "offsetY": 0,
  "height": 51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 140.9,
  "height": 51,
  "width": 43,
  "x": 248.9,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_HS_5.png",
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
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "id": "overlay_540CB958_4D26_62DB_41CB_FA3D242F3EC6",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_6AF763F9_725F_4A7F_41D5_F09E881B8F4D); this.mainPlayList.set('selectedIndex', 15)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_6AE0C408_725F_4D9D_41AF_21E9E4A73DFC); this.mainPlayList.set('selectedIndex', 15)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_6AD2841E_725F_4DB4_41D1_D34AE3A48B6A); this.mainPlayList.set('selectedIndex', 14)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_6AC2E42C_725F_4D95_41D2_57F079147DF0); this.mainPlayList.set('selectedIndex', 14)"
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
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 1.07,
 "id": "overlay_5333052F_4D62_E276_41CD_4A5A7627BC09",
 "yaw": 12.94,
 "bleachingDistance": 0.5
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_6B7F947E_725F_4E75_4152_C0CDA8957187); this.mainPlayList.set('selectedIndex', 8)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_6B68548D_725F_4E97_41C1_8031CE2762C5); this.mainPlayList.set('selectedIndex', 8)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_6B598499_725F_4EBF_41CA_391DCA256ECD); this.mainPlayList.set('selectedIndex', 15)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_6B4A44A2_725F_4E8D_41C3_3EF0598217E4); this.mainPlayList.set('selectedIndex', 15)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_6B25F4BF_725F_4EF3_41CA_6839D5A9B3CC); this.mainPlayList.set('selectedIndex', 14)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_6B15D4C8_725F_4E9D_41D8_E3BB8DAB921A); this.mainPlayList.set('selectedIndex', 14)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC, this.camera_6B3BA4AC_725F_4E94_41C0_AFE3CA15DB35); this.mainPlayList.set('selectedIndex', 13)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC, this.camera_6B2BC4B5_725F_4EF7_41B8_B1EE1C68B78B); this.mainPlayList.set('selectedIndex', 13)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C, this.camera_6A9C745F_725F_4DB3_41D5_484EDDF607D6); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.47,
   "image": "this.AnimatedImageResource_516A6603_4D62_6E2D_41D0_831236CA25F4",
   "pitch": -40.22,
   "yaw": 140.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_564280AB_4D62_627D_41B4_52D1EBEE955F",
 "maps": [
  {
   "hfov": 20.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -40.22
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
   "click": "this.startPanoramaWithCamera(this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C, this.camera_6A8E646E_725F_4D95_41D8_CA6AC9B63F79); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Torn"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 131,
      "height": 94
     }
    ]
   },
   "pitch": -22.17,
   "yaw": 140.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_56226179_4D62_E2DD_41CB_0460EAB693D8",
 "maps": [
  {
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -22.17
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_6B9D3515_725F_4FB7_41AE_502922381858); this.mainPlayList.set('selectedIndex', 12)"
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
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_6B8EB51E_725F_4FB5_41D2_99BBD5138780); this.mainPlayList.set('selectedIndex', 12)"
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.56,
   "image": "this.AnimatedImageResource_5B27810E_4D22_6237_41D2_87E6D6800D1E",
   "pitch": 2.58,
   "yaw": -142.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EE67F75_4D26_FED5_41CB_9B9B575BF08E",
 "maps": [
  {
   "hfov": 17.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.58
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
   "click": "this.startPanoramaWithCamera(this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56, this.camera_6BE704E5_725F_4E97_41D7_BA7D25126D6C); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.37,
   "image": "this.AnimatedImageResource_5B27410E_4D22_6237_41C5_B243393B4C56",
   "pitch": -18.87,
   "yaw": 44.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E21F11E_4D26_224F_41CF_FC38BD3FF8AC",
 "maps": [
  {
   "hfov": 25.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317, this.camera_6B07B4D2_725F_4E8D_41A1_B08060E9436B); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.51,
   "image": "this.AnimatedImageResource_5B27210E_4D22_6237_41D1_CF186FEC1839",
   "pitch": -17.86,
   "yaw": 8.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_59420EB1_4D26_1E6D_41AF_76053B0BD9BF",
 "maps": [
  {
   "hfov": 25.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -17.86
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 3.08,
 "id": "overlay_5044DA77_4D62_26D5_41C6_430B4A7E65CA",
 "yaw": 130.51,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305, this.camera_6BF7E4DD_725F_4EB4_41D8_CFB0134EC5CB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.95,
   "image": "this.AnimatedImageResource_60C65950_7268_C78D_41BE_F1577613D5E5",
   "pitch": -2.76,
   "yaw": 133.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6387C86E_726B_4595_41CD_15D64894796F",
 "maps": [
  {
   "hfov": 21.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -2.76
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
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_6448B5ED_725F_4E97_41D6_27ACCCDD4BA0); this.mainPlayList.set('selectedIndex', 8)"
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
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162, this.camera_7AB784E7_6CCF_CC44_41D4_6784F874FD1A)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.89,
   "image": "this.AnimatedImageResource_5B20810E_4D22_6237_41B2_26BF562197DC",
   "pitch": -20.46,
   "yaw": 173.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5CAFB95A_4D1E_22DF_41C6_1EE4F3CB828F",
 "maps": [
  {
   "hfov": 29.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -20.46
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.55,
   "image": "this.AnimatedImageResource_5B20610E_4D22_6237_41CE_39B7824F26EC",
   "pitch": -2.95,
   "yaw": 78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E10F4F1_4D22_23ED_41BE_34FDAD864839",
 "maps": [
  {
   "hfov": 17.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.95
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
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.58,
   "image": "this.AnimatedImageResource_5B20210E_4D22_6237_41BD_A676F5E23943",
   "pitch": -0.94,
   "yaw": -90.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EC7EB87_4D26_2635_41C7_473DEDBB4DC4",
 "maps": [
  {
   "hfov": 17.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.94
  }
 ]
},
{
 "textDecoration": "none",
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "id": "Button_17316523_0868_803D_417E_BCFA3B6EBB22",
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Button Settings HS"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "layout": "horizontal",
 "rollOverIconHeight": 30,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_17316523_0868_803D_417E_BCFA3B6EBB22.png",
 "pressedIconHeight": 30,
 "height": 60,
 "shadow": false,
 "mode": "toggle",
 "fontSize": 12,
 "backgroundColor": [],
 "gap": 5,
 "horizontalAlign": "center",
 "click": "if(!this.Button_17312523_0868_803D_4192_FFDC412A7D19.get('visible')){ this.setComponentVisibility(this.Button_17312523_0868_803D_4192_FFDC412A7D19, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17312523_0868_803D_4192_FFDC412A7D19, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Button_17314523_0868_803D_4191_5BF2ACF38BAA.get('visible')){ this.setComponentVisibility(this.Button_17314523_0868_803D_4191_5BF2ACF38BAA, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17314523_0868_803D_4191_5BF2ACF38BAA, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Button_17317523_0868_803D_4185_1CCDD912D023.get('visible')){ this.setComponentVisibility(this.Button_17317523_0868_803D_4185_1CCDD912D023, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17317523_0868_803D_4185_1CCDD912D023, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Button_17319523_0868_803D_415C_F1EEA314AB4B.get('visible')){ this.setComponentVisibility(this.Button_17319523_0868_803D_415C_F1EEA314AB4B, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17319523_0868_803D_415C_F1EEA314AB4B, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')){ this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.IconButton_289C4E30_0828_801B_419A_417103D64582.get('visible')){ this.setComponentVisibility(this.IconButton_289C4E30_0828_801B_419A_417103D64582, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_289C4E30_0828_801B_419A_417103D64582, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Container_20AA0897_0828_8005_4198_75B2E94D10DC.get('visible')){ this.setComponentVisibility(this.Container_20AA0897_0828_8005_4198_75B2E94D10DC, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Container_20AA0897_0828_8005_4198_75B2E94D10DC, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09.get('visible')){ this.setComponentVisibility(this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }",
 "paddingRight": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "minWidth": 1,
 "paddingLeft": 0,
 "pressedIconWidth": 30,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17316523_0868_803D_417E_BCFA3B6EBB22_pressed.png",
 "visible": false,
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "scrollBarWidth": 10,
 "id": "Container_29E43855_0828_8005_416F_A46E143B25DC",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "width": 60,
 "children": [
  "this.IconButton_289C4E30_0828_801B_419A_417103D64582"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "shadow": false,
 "backgroundColor": [],
 "gap": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "Container72777"
 },
 "overflow": "hidden",
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>BMI Siteplan</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 15,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Siteplan"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Living Room Lt 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Living Lt 1"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Master Bedroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_22CD3292_081B_801E_419C_294A22E93A2C",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Master Bedroom"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2C66DC7F_0818_8005_4196_19D03306C358",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Kitchen"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bathroom Lt 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Bathroom Lt 1"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Living Room Lt 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Living Lt 2"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bathroom Lt 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Bathroom Lt 2"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Bedroom 2"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Bedroom 3"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Balcony</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_2D094583_0828_80FE_419C_2422AF1E1641",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Balcony"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Torn</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": 50,
 "paddingRight": 0,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "HTMLText",
 "data": {
  "name": "Torn"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>BUKIT MEKAR INDAH</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:'Century Gothic';\"><B>Virtual 360</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "id": "HTMLText_20456CF7_082B_8006_4159_AB334357FD09",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "width": 250,
 "borderSize": 3,
 "scrollBarVisible": "rollOver",
 "borderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "paddingRight": 10,
 "paddingTop": 10,
 "minWidth": 1,
 "paddingLeft": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "data": {
  "name": "Judul"
 },
 "paddingBottom": 10
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
 "id": "AnimatedImageResource_5166A603_4D62_6E2D_41D0_974A95270EB1",
 "levels": [
  {
   "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_5E4AFC3D_4D22_6255_41BB_36269F3F6ADA",
 "levels": [
  {
   "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_781CE67B_6CD0_4C4C_41D4_4B8D96DED606",
 "levels": [
  {
   "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_79A923EB_6CCF_C44D_41B2_0A3954A81FA1",
 "levels": [
  {
   "url": "media/panorama_6148456D_6CD0_4C44_41BE_F3350EBB0E26_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5B26F10E_4D22_6237_41B1_A1BD01CFED31",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_5B26510E_4D22_6237_41C4_E82A73F1B1B4",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5B26310E_4D22_6237_41D0_3C010A9AE9A2",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5B25810E_4D22_6237_418A_C4478BC55902",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_3_0.png",
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
 "id": "AnimatedImageResource_7F43D8FE_6CD1_C447_418F_65E04E6319F0",
 "levels": [
  {
   "url": "media/panorama_6140967A_6CD0_4C4F_41B1_D0934662AFAF_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ]
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
 "id": "AnimatedImageResource_5B25610E_4D22_6237_41C3_0FCA90CDCB31",
 "levels": [
  {
   "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_5B25310E_4D22_6237_41BC_1436855EB467",
 "levels": [
  {
   "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_668F8FFC_7277_3A74_41D8_3ADF581D1DE1",
 "levels": [
  {
   "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_668F2FFC_7277_3A74_41CF_E3F5E0C42550",
 "levels": [
  {
   "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_668F4FFC_7277_3A74_41D8_4594E5F82ECD",
 "levels": [
  {
   "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_668ECFFC_7277_3A74_41B3_BB1587A86E6E",
 "levels": [
  {
   "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_3_0.png",
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
 "id": "AnimatedImageResource_668E1FFD_7277_3A74_41D8_F78A2A522DD5",
 "levels": [
  {
   "url": "media/panorama_6272D2B0_7279_4A8D_41C3_B4AC9A981305_1_HS_4_0.png",
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
 "id": "AnimatedImageResource_516A6603_4D62_6E2D_41D0_831236CA25F4",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_8_0.png",
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
 "id": "AnimatedImageResource_5B27810E_4D22_6237_41D2_87E6D6800D1E",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5B27410E_4D22_6237_41C5_B243393B4C56",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_1_0.png",
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
 "id": "AnimatedImageResource_5B27210E_4D22_6237_41D1_CF186FEC1839",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_2_0.png",
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
 "id": "AnimatedImageResource_60C65950_7268_C78D_41BE_F1577613D5E5",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
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
 "id": "AnimatedImageResource_5B20810E_4D22_6237_41B2_26BF562197DC",
 "levels": [
  {
   "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_5B20610E_4D22_6237_41CE_39B7824F26EC",
 "levels": [
  {
   "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_5B20210E_4D22_6237_41BD_A676F5E23943",
 "levels": [
  {
   "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "id": "IconButton_289C4E30_0828_801B_419A_417103D64582",
 "minHeight": 0,
 "width": 30,
 "borderSize": 0,
 "iconURL": "skin/IconButton_289C4E30_0828_801B_419A_417103D64582.png",
 "shadow": false,
 "mode": "toggle",
 "height": 30,
 "click": "if(!this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')){ this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, 0, this.effect_29CD66A0_0818_803B_4190_934A6AEE0753, 'showEffect', false) } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, 0, this.effect_29CD16A0_0818_803B_419B_E05D80544E29, 'hideEffect', false) }",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_289C4E30_0828_801B_419A_417103D64582_pressed.png",
 "class": "IconButton",
 "data": {
  "name": "Button37510"
 },
 "cursor": "hand",
 "paddingBottom": 0
}],
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_17318523_0868_803D_4196_4BE8427F4E1F",
  "this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7",
  "this.Container_20AA0897_0828_8005_4198_75B2E94D10DC"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_17314523_0868_803D_4191_5BF2ACF38BAA], 'gyroscopeAvailable'); this.playList_65A6B328_725F_4B9D_41D2_FFBA0F3AD715.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_17312523_0868_803D_4192_FFDC412A7D19,this.Button_17319523_0868_803D_415C_F1EEA314AB4B].forEach(function(component) { component.set('visible', false); }) }",
 "defaultVRPointer": "laser",
 "scripts": {
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "buttonToggleFullscreen": [
  "this.Button_17312523_0868_803D_4192_FFDC412A7D19",
  "this.Button_17319523_0868_803D_415C_F1EEA314AB4B"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "paddingRight": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.Button_17317523_0868_803D_4185_1CCDD912D023",
 "downloadEnabled": false,
 "minWidth": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "class": "Player",
 "data": {
  "name": "Player456"
 },
 "overflow": "visible",
 "paddingBottom": 0
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
