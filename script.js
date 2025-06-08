(function(){
    var script = {
 "definitions": [{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BAFD854_4E0C_5166_41A9_4D5C99B4B009",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.34,
  "pitch": 1.38
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0DB85765_07E8_803A_4168_848F56013084_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AD8F99F_4E0C_53E2_41CA_BF418EE42DB2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BC07889_4E0C_51EE_41C2_C4FE87F87640",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Kavling_Raw",
 "id": "panorama_4721419E_4CE2_2257_41CB_53CE440A420E",
 "hfovMax": 137,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162",
   "class": "AdjacentPanorama",
   "yaw": 3.2,
   "backwardYaw": -7.32,
   "distance": 1
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_t.jpg",
 "overlays": [
  "this.overlay_5DD5C7C0_4D22_6E2B_41A7_5FAF202AA313",
  "this.overlay_5C39A15C_4D22_E2DB_41D0_F3B02891495C",
  "this.overlay_5DB31873_4D22_62ED_41CB_0737F4419998",
  "this.overlay_5DB32873_4D22_62ED_41BE_01D86049F1D2",
  "this.overlay_5DCBA70B_4D1E_6E3D_4176_720261017AC2",
  "this.overlay_5C303A61_4D1E_26ED_41C6_CC1D5A902B94",
  "this.overlay_5F66B023_4D1E_E26D_41AF_545B55047284",
  "this.overlay_5C7A130F_4D1E_2635_41C8_3538A3946922",
  "this.overlay_5CC8F21F_4D66_2655_41D0_CCF4B7EED92D",
  "this.overlay_50180D83_4D66_622D_4190_4F2D03DDC600"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "id": "effect_5460ED4E_4D2E_2236_41B2_04A307331E9D",
 "easing": "linear"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B1C39E4_4E0C_5326_416B_9A3968505368",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_5B3F1A02_4E0C_50E2_41B3_B7F540683009",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_40608D34_4CE3_E26B_419A_8B74D386E230",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_40608D34_4CE3_E26B_419A_8B74D386E230_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')){ if(this.getKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')) { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true, -1, this.effect_5B3FFA02_4E0C_50E2_41D2_5E2187F7CA5A, 'showEffect', false); } else { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false, -1, this.effect_579096CB_4D23_EE3D_41B0_0C1B448821D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22'); if(this.existsKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')){ if(this.getKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')) { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, -1, this.effect_5B3F8A02_4E0C_50E2_41D1_19F8C9A3C420, 'showEffect', false); } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, -1, this.effect_5047F394_4D22_662B_41C1_137798B93E6F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC'); if(this.existsKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')){ if(this.getKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')) { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, -1, this.effect_5B3FAA02_4E0C_50E2_41C2_EE4878B01049, 'showEffect', false); } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, -1, this.effect_54B42509_4D2E_623D_41CC_BD905CC32FA2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_5B3F6A02_4E0C_50E2_41CE_F442B42234DD, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_57CD7F7A_4D2E_3EDF_41CC_6C072E02D1A8, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer'); if(this.existsKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')){ if(this.getKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')) { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_5B3F1A02_4E0C_50E2_41B3_B7F540683009, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_54B48509_4D2E_623D_41BF_ED2F71F835BA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')",
   "begin": "this.registerKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482', this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482.get('visible')); this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7', this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')); this.registerKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC', this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')); this.registerKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22', this.Button_17316523_0868_803D_417E_BCFA3B6EBB22.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false); this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false, -1, this.effect_579096CB_4D23_EE3D_41B0_0C1B448821D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false); this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, -1, this.effect_5047F394_4D22_662B_41C1_137798B93E6F, 'hideEffect', false); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false); this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, -1, this.effect_54B42509_4D2E_623D_41CC_BD905CC32FA2, 'hideEffect', false); this.keepComponentVisibility(this.MapViewer, false); this.setComponentVisibility(this.MapViewer, false, -1, this.effect_57CD7F7A_4D2E_3EDF_41CC_6C072E02D1A8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_54B48509_4D2E_623D_41BF_ED2F71F835BA, 'hideEffect', false)",
   "media": "this.panorama_4721419E_4CE2_2257_41CB_53CE440A420E",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true); this.keepComponentVisibility(this.MapViewer, true); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true)",
   "camera": "this.panorama_4721419E_4CE2_2257_41CB_53CE440A420E_camera"
  },
  "this.PanoramaPlayListItem_5AA9776A_4E0C_5F2D_41C2_ACF569FF2986",
  "this.PanoramaPlayListItem_5AA8E76A_4E0C_5F2D_41D1_ABC7831CEBCE",
  "this.PanoramaPlayListItem_5AA8776A_4E0C_5F2D_41D0_2FD5E00F1F11",
  "this.PanoramaPlayListItem_5AABD76A_4E0C_5F2D_41C9_8F3163D13936",
  "this.PanoramaPlayListItem_5AABA76A_4E0C_5F2D_41C5_9EB1978A4CFC",
  "this.PanoramaPlayListItem_5AAB376A_4E0C_5F2D_41CB_51E357598521",
  "this.PanoramaPlayListItem_5AAAA76A_4E0C_5F2D_41A1_3129F0F9D391",
  "this.PanoramaPlayListItem_5AAA176A_4E0C_5F2D_41C5_AF739C4381FC",
  "this.PanoramaPlayListItem_5AA5876D_4E0C_5F26_41C8_35EEF2BC87BF",
  "this.PanoramaPlayListItem_5AA5176D_4E0C_5F26_41C0_AF6D40AF7BCB",
  "this.PanoramaPlayListItem_5AA4876D_4E0C_5F26_41C3_B7BFFEB9F6F2",
  "this.PanoramaPlayListItem_5AA4776D_4E0C_5F26_418D_6AE4F4C84D20",
  "this.PanoramaPlayListItem_5AA7E76D_4E0C_5F26_41C3_B6DBD38CD419",
  "this.PanoramaPlayListItem_5AA7576E_4E0C_5F22_41BB_E356D40FC2AC",
  "this.PanoramaPlayListItem_5AA6D76E_4E0C_5F22_41D0_770D887DEF4C"
 ],
 "id": "mainPlayList"
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
 "id": "playList_5AAF276A_4E0C_5F2D_41C2_D357546D9004"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5B3C6A02_4E0C_50E2_41A4_CE63BF2A086B",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.51,
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BD3487C_4E0C_5126_41B3_D2FB53A4D95A",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_52DF75C6_4D7E_2237_41CB_864D33CF9148",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_5AAED76A_4E0C_5F2D_41C7_63A4D16D2841, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5AAED76A_4E0C_5F2D_41C7_63A4D16D2841, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_418CB0B3_4E0C_D123_41D1_ECC63072F16E",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_5AAED76A_4E0C_5F2D_41C7_63A4D16D2841"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.96,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_58806931_4E0C_533E_41C1_7A14D79DDA92",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A803644_08E8_807B_4181_F215F5190C71",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BDCE868_4E0C_512E_41BA_B93246B01515",
 "automaticZoomSpeed": 10
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_418CB0B3_4E0C_D123_41D1_ECC63072F16E_t.jpg",
 "label": "Sequence 01",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_418CB0B3_4E0C_D123_41D1_ECC63072F16E",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_418CB0B3_4E0C_D123_41D1_ECC63072F16E.mp4",
  "height": 1080
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
 "id": "playList_5AAF676A_4E0C_5F2D_41C7_CFD36ED38248"
},
{
 "vfov": 180,
 "label": "Bedroom",
 "id": "panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": 128.59,
   "backwardYaw": -105.26,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": 172.22,
   "y": 770.47,
   "x": 645.5
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_t.jpg",
 "overlays": [
  "this.overlay_1147C50B_0818_800D_4185_D0BE6D357461",
  "this.overlay_1228A364_081F_803A_417B_418510D18CE2"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5047F394_4D22_662B_41C1_137798B93E6F",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5862091D_4E0C_50E6_41C4_7D6F7965D240",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B2367D3_4E0C_5F62_41B6_EE78DC7AA4E8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B46F7E9_4E0C_5F2E_41B9_150028869AF9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_585E48F7_4E0C_5123_41BB_272349C1B40E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B3C9A02_4E0C_50E2_41C4_4FFC34881F3C",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Living",
 "id": "panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
   "class": "AdjacentPanorama",
   "yaw": 103.21,
   "backwardYaw": -120.12,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
   "class": "AdjacentPanorama",
   "yaw": 105.26,
   "backwardYaw": -120.12,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB10794_07E8_801B_418A_23648147084C",
   "class": "AdjacentPanorama",
   "yaw": 157.77,
   "backwardYaw": 150.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB10794_07E8_801B_418A_23648147084C",
   "class": "AdjacentPanorama",
   "yaw": 155.97,
   "backwardYaw": 150.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
   "class": "AdjacentPanorama",
   "yaw": -105.26,
   "backwardYaw": 128.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
   "class": "AdjacentPanorama",
   "yaw": -114.34,
   "backwardYaw": 128.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": -161.03,
   "backwardYaw": -137.2,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": -163.93,
   "backwardYaw": -137.2,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
   "class": "AdjacentPanorama",
   "yaw": -45.35,
   "backwardYaw": -1.51,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
   "class": "AdjacentPanorama",
   "yaw": -49.03,
   "backwardYaw": -1.51,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": 250.76,
   "y": 656.48,
   "x": 333.16
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_t.jpg",
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
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
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
 "id": "playList_5AAF476A_4E0C_5F2D_41A9_99E25C7DBB6C"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_21D1DD8B_0828_800D_4194_303A20CAC1D4",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5B3C7A02_4E0C_50E2_41BA_9449D4C9191C",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B08B7BA_4E0C_5F2D_41B4_4AEE90E6AD38",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B5007DD_4E0C_5F66_41B5_E5C407457307",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81A644_08E8_807B_4199_BA780616C9ED",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_5B3FFA02_4E0C_50E2_41D2_5E2187F7CA5A",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_52DFB5C6_4D7E_2237_41CA_0973E058CB5F",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D70D8B_0828_800D_419A_55A121A275BB",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_54B42509_4D2E_623D_41CC_BD905CC32FA2",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5ACE59B3_4E0C_5322_41CB_E182ABCB0092",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AB7D96D_4E0C_5326_41C6_A087983D4EC4",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2086A7B3_0828_801D_419F_CD79C5141477",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.7,
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AFF59C6_4E0C_5362_41CC_9430F753210A",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Atas",
 "id": "panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": -137.2,
   "backwardYaw": -161.03,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": -134.15,
   "backwardYaw": -161.03,
   "distance": 1
  },
  {
   "panorama": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C",
   "class": "AdjacentPanorama",
   "yaw": 140.9,
   "backwardYaw": -56.31,
   "distance": 1
  },
  {
   "panorama": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C",
   "class": "AdjacentPanorama",
   "yaw": 140.56,
   "backwardYaw": -56.31,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
   "class": "AdjacentPanorama",
   "yaw": 27.35,
   "backwardYaw": 166.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
   "class": "AdjacentPanorama",
   "yaw": 27.76,
   "backwardYaw": 166.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
   "class": "AdjacentPanorama",
   "yaw": -79.51,
   "backwardYaw": -124.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
   "class": "AdjacentPanorama",
   "yaw": -83.19,
   "backwardYaw": -124.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
   "class": "AdjacentPanorama",
   "yaw": -32.95,
   "backwardYaw": 126.49,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
   "class": "AdjacentPanorama",
   "yaw": -32.28,
   "backwardYaw": 126.49,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 216.51,
   "y": 500.93,
   "x": 412.56
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_t.jpg",
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
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81E644_08E8_807B_4192_870E069EC73B",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2080B7B3_0828_801D_4191_9FE24A63AFC1",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayInsideColor": "#0099FF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Floor_1",
 "id": "map_09DB02B2_07F9_801F_417A_0868DD809595",
 "width": 979,
 "fieldOfViewOverlayRadiusScale": 0.07,
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
    "tags": "preload",
    "height": 361
   }
  ]
 },
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.5,
 "thumbnailUrl": "media/map_09DB02B2_07F9_801F_417A_0868DD809595_t.png",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_to_height",
 "overlays": [
  "this.overlay_15D431D1_07E9_801D_418A_2D405812060D",
  "this.overlay_1696D975_07E8_801A_4168_A1CED18EF04C",
  "this.overlay_1BE30B1E_0818_8007_419C_6B3C6904A80F",
  "this.overlay_1CBB288A_0819_800F_4180_D79BE8535375"
 ],
 "minimumZoomFactor": 0.5,
 "height": 1950
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81F644_08E8_807B_419C_8E0505B46E62",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AAF1985_4E0C_53E7_41D1_E9E28D51167E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.89,
  "pitch": 4.05
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Kanan",
 "id": "panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
   "class": "AdjacentPanorama",
   "yaw": -85.04,
   "backwardYaw": 155.38,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
   "class": "AdjacentPanorama",
   "yaw": -87.46,
   "backwardYaw": 155.38,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": 126.49,
   "backwardYaw": -32.95,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": 119.92,
   "backwardYaw": -32.95,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 252.26,
   "y": 803.85,
   "x": 365.08
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_t.jpg",
 "overlays": [
  "this.overlay_13E4597D_0869_8005_4196_1A5137EE1ABE",
  "this.overlay_14555AA8_0868_800A_419C_D8045307C52E",
  "this.overlay_15217132_0868_801F_4194_A30D4D5EE972",
  "this.overlay_14B158A0_086B_803A_419D_F7B980930D8E"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208707B3_0828_801D_4191_7A9734A62487",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_57CFBF7A_4D2E_3EDF_418E_39567D0EC7B3",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A802644_08E8_807B_4174_23BBCEBD0C04",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_camera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#0099FF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Siteplan",
 "id": "map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
 "width": 402,
 "fieldOfViewOverlayRadiusScale": 0.2,
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
    "tags": "preload",
    "height": 343
   }
  ]
 },
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.5,
 "thumbnailUrl": "media/map_2AD89E19_08E8_800D_4188_CBCA33D43D80_t.png",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_to_height",
 "overlays": [
  "this.overlay_29222E9E_08E8_8006_4177_560478564F90",
  "this.overlay_554C95C6_4D26_6237_41D2_EF8EA6DB5CFE",
  "this.overlay_54CB93B2_4D26_E66F_41D2_339BCEC498FF",
  "this.overlay_54C1B21A_4D26_265F_41CF_5BB097E0350F",
  "this.overlay_540CB958_4D26_62DB_41CB_FA3D242F3EC6"
 ],
 "minimumZoomFactor": 0.5,
 "height": 725
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_583BE8E1_4E0C_515E_41D1_72FFB14E834F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AEB39DB_4E0C_5362_41C2_D9FEEC4AE0F6",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_52DF65C6_4D7E_2237_41C9_C6CC26C19DE1",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.96,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_58924926_4E0C_5322_41C4_44562A48282D",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_54B5C509_4D2E_623D_41C9_052301CE467F",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_579F16CB_4D23_EE3D_41C8_39598A392510",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B9BB817_4E0C_50E2_41D1_A54E49AED768",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Blok1",
 "id": "panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162",
   "class": "AdjacentPanorama",
   "yaw": 173.09,
   "backwardYaw": -93.49,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 89.56,
   "y": 444.4,
   "x": 272.4
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_t.jpg",
 "overlays": [
  "this.overlay_5CAFB95A_4D1E_22DF_41C6_1EE4F3CB828F",
  "this.overlay_5E10F4F1_4D22_23ED_41BE_34FDAD864839",
  "this.overlay_5EC7EB87_4D26_2635_41C7_473DEDBB4DC4"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A800644_08E8_807B_4179_4F883FB0EF06",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BF7289B_4E0C_51E2_41C4_2136B047D53E",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A804644_08E8_807B_4185_8BDBEC4F117A",
 "easing": "cubic_in_out"
},
{
 "vfov": 180,
 "label": "MandiAtas",
 "id": "panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": 166.43,
   "backwardYaw": 27.35,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": 168.57,
   "backwardYaw": 27.35,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": -75.96,
   "y": 561.36,
   "x": 195.2
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_t.jpg",
 "overlays": [
  "this.overlay_12EA21C6_086B_8006_4153_867F295817D9",
  "this.overlay_136E9350_086B_801B_4194_F73AF6568608"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_54B58509_4D2E_623D_41D1_0077B50C7648",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.8,
  "hfov": 127,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AC9A782_4E0C_5FE2_41C7_2A3DF6016931",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.47,
  "pitch": 1.22
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AE0A7A0_4E0C_5FDE_41A7_A85300B45FDD",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A80E644_08E8_807B_418E_2985DEED3BB7",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B77E7F4_4E0C_5F25_41C1_ADEE2AD73DB6",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Carport",
 "id": "panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": -1.51,
   "backwardYaw": -45.35,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
   "class": "AdjacentPanorama",
   "yaw": 142.03,
   "backwardYaw": 8.5,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 48.4,
   "y": 112.4,
   "x": 209.4
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_t.jpg",
 "overlays": [
  "this.overlay_59D31220_4D2D_E66B_41C2_1344D94328F5",
  "this.overlay_58CB4A8B_4D2E_263D_41CE_D3789275972B"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208027B3_0828_801D_4192_B6224B2ACE7F",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_584FC8FF_4E0C_5122_41D0_1AED8312E933",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_17314523_0868_803D_4191_5BF2ACF38BAA",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AA4D98A_4E0C_53E2_41D1_2465320B4F91",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Gerbang",
 "id": "panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4721419E_4CE2_2257_41CB_53CE440A420E",
   "class": "AdjacentPanorama",
   "yaw": -7.32,
   "backwardYaw": 3.2,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82",
   "class": "AdjacentPanorama",
   "yaw": -93.49,
   "backwardYaw": 173.09,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
   "class": "AdjacentPanorama",
   "yaw": 172.3,
   "backwardYaw": 133.11,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 180.28,
   "y": 444.4,
   "x": 156.4
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_t.jpg",
 "overlays": [
  "this.overlay_5CAB59C6_4D1D_E237_41A2_B86926D186B1",
  "this.overlay_5FAED5A7_4D1E_2275_41C4_947BC8D78E2F",
  "this.overlay_5E3933DE_4D22_65D7_41BA_384006124A3F",
  "this.overlay_5FF287AF_4D22_EE75_41CF_968AA2C4925D",
  "this.overlay_5E1BED99_4D22_225D_41B8_0A146299F086",
  "this.overlay_50013FB6_4D62_7E57_41BC_C3342F8DE7F4"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0DB10794_07E8_801B_418A_23648147084C_camera",
 "automaticZoomSpeed": 10
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
 "id": "playList_5AAF776A_4E0C_5F2D_41D0_218C32062E50"
},
{
 "fieldOfViewOverlayInsideColor": "#0099FF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Floor_2",
 "id": "map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
 "width": 972,
 "fieldOfViewOverlayRadiusScale": 0.07,
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
    "tags": "preload",
    "height": 299
   }
  ]
 },
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.5,
 "thumbnailUrl": "media/map_0995E8C4_07F9_807A_4140_2C6B66E9177C_t.png",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_to_height",
 "overlays": [
  "this.overlay_1555A996_07E8_8007_4198_C2FEB81D5CEC",
  "this.overlay_15364216_07E8_8007_4189_64EC3AD3D507",
  "this.overlay_14EAD63E_07E8_8007_4176_5C5A2A3D9DB4",
  "this.overlay_14BB9067_07E7_8005_419D_EC021BA35BD6",
  "this.overlay_1BBB8032_0818_801F_419A_56E2D4D5DEDE",
  "this.overlay_51D03764_4D66_6EEB_41BD_22C73F8B4B13"
 ],
 "minimumZoomFactor": 0.5,
 "height": 1332
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_5B3F6A02_4E0C_50E2_41CE_F442B42234DD",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.74,
  "pitch": -7.11
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_587C1908_4E0C_50EE_41AB_D057A6C2C7A9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5829C8EC_4E0C_5126_41C4_CFFA88E73FC5",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_57CD7F7A_4D2E_3EDF_41CC_6C072E02D1A8",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_54B48509_4D2E_623D_41BF_ED2F71F835BA",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5B3ECA02_4E0C_50E2_41BE_D88776DC4082",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B1119EF_4E0C_5322_419F_5D95436CBA4D",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C2DE1EC_08E8_800A_419B_5EF02676B474",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AF0B9D1_4E0C_537E_41D0_0C4D3A2A504D",
 "automaticZoomSpeed": 10
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
 "id": "effect_21D0AD8B_0828_800D_41A0_F062EE1B7DDE",
 "easing": "cubic_in_out"
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_579096CB_4D23_EE3D_41B0_0C1B448821D1",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.03,
  "hfov": 125,
  "pitch": 0.05
 },
 "class": "PanoramaCamera",
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
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Section_1",
 "id": "panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162",
   "class": "AdjacentPanorama",
   "yaw": 133.11,
   "backwardYaw": 172.3,
   "distance": 1
  },
  {
   "panorama": "this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56",
   "class": "AdjacentPanorama",
   "yaw": 44.43,
   "backwardYaw": 177.24,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
   "class": "AdjacentPanorama",
   "yaw": 8.5,
   "backwardYaw": 142.03,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 49.7,
   "y": 167.4,
   "x": 157.4
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_t.jpg",
 "overlays": [
  "this.overlay_5EE67F75_4D26_FED5_41CB_9B9B575BF08E",
  "this.overlay_5E21F11E_4D26_224F_41CF_FC38BD3FF8AC",
  "this.overlay_59420EB1_4D26_1E6D_41AF_76053B0BD9BF",
  "this.overlay_5044DA77_4D62_26D5_41C6_430B4A7E65CA",
  "this.overlay_5CF74291_4E14_F1FE_41C2_0FDB3890C784"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208727B3_0828_801D_4181_C0C4DC69C6E0",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5B3EDA02_4E0C_50E2_41C2_B8CCB5619EB2",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_5B3FAA02_4E0C_50E2_41C2_EE4878B01049",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AFA9795_4E0C_5FE6_41A9_E014B937E943",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A806644_08E8_807B_4163_A515F6437F80",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208017B3_0828_801D_41A1_0B520F51EE9F",
 "easing": "cubic_in_out"
},
{
 "vfov": 180,
 "label": "Torn",
 "id": "panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": -56.31,
   "backwardYaw": 140.9,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": -55.52,
   "backwardYaw": 140.9,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 231.1,
   "y": 177.24,
   "x": 266.47
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_t.jpg",
 "overlays": [
  "this.overlay_5647BF8F_4D62_FE35_41A6_133409E3623B",
  "this.overlay_51E38A82_4D66_662E_41BB_4F1A036B2D0B"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5B3F2A02_4E0C_50E2_41C1_7F4FCFD18F57",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B64C808_4E0C_50EE_41D2_69E15F097BD5",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_52DF85C6_4D7E_2237_41C6_2AB4DC27A290",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_581A88C7_4E0C_5162_4181_7A886BCB3403",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BBF1840_4E0C_515D_41D0_E6E81619C8CF",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208157B3_0828_801D_418D_E186EA8D9A9C",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AD0F9AA_4E0C_532D_419C_B2CE98C49F5C",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_5B3F8A02_4E0C_50E2_41D1_19F8C9A3C420",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.45,
  "pitch": 1.06
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Dapur",
 "id": "panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": -120.12,
   "backwardYaw": 103.21,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": -116.32,
   "backwardYaw": 103.21,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": -68.89,
   "y": 245.52,
   "x": 380.34
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_t.jpg",
 "overlays": [
  "this.overlay_10BE3CA0_0827_803A_4174_52D5FD51D6E8",
  "this.overlay_11478773_0827_801D_4183_182C01D0AE68"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B0B49F9_4E0C_532E_419F_E5F26A67BBA1",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Kiri",
 "id": "panorama_0DB85765_07E8_803A_4168_848F56013084",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
   "class": "AdjacentPanorama",
   "yaw": 76.33,
   "backwardYaw": -153.78,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
   "class": "AdjacentPanorama",
   "yaw": 78.51,
   "backwardYaw": -153.78,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": -124.61,
   "backwardYaw": -79.51,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
   "class": "AdjacentPanorama",
   "yaw": -127.91,
   "backwardYaw": -79.51,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 123.29,
   "y": 799.31,
   "x": 665.68
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_t.jpg",
 "overlays": [
  "this.overlay_12FD76DA_0869_800F_419F_37873ADC8EBA",
  "this.overlay_14751EFD_0868_800A_4192_EC07489696C5",
  "this.overlay_136A7E74_086F_801A_4133_CC36423E8AC8",
  "this.overlay_13C94DBC_0868_800A_419C_1DC47F568674"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B2C47C9_4E0C_5F6E_41CF_9A2EA26C36E6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B88482B_4E0C_5122_417D_4029C3871B30",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A819644_08E8_807B_4180_D92B4637B19E",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.22,
  "hfov": 127,
  "pitch": -13.43
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_4721419E_4CE2_2257_41CB_53CE440A420E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A807644_08E8_807B_4196_737E72118D2B",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A818644_08E8_807B_4190_B0878247B51A",
 "easing": "cubic_in_out"
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
 "id": "playList_5AAFA76A_4E0C_5F2D_41D0_1514C8537B5D"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208787B3_0828_801D_4197_9F0012D1715F",
 "easing": "cubic_in_out"
},
{
 "vfov": 180,
 "label": "MandiBawah",
 "id": "panorama_0DB10794_07E8_801B_418A_23648147084C",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama",
   "yaw": 150.57,
   "backwardYaw": 157.77,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_09DB02B2_07F9_801F_417A_0868DD809595",
   "class": "PanoramaMapLocation",
   "angle": 108.29,
   "y": 451,
   "x": 794.66
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_t.jpg",
 "overlays": [
  "this.overlay_1138A1F8_0819_800B_4195_BBDBFEA1209C",
  "this.overlay_11F08989_0818_800D_419F_933C44B9508E"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A81D644_08E8_807B_4192_CBDBC2B27A78",
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
 "id": "effect_2A80C644_08E8_807B_419C_BB6E0B2AECA6",
 "easing": "cubic_in_out"
},
{
 "vfov": 180,
 "label": "Tol_Raw",
 "id": "panorama_40608D34_4CE3_E26B_419A_8B74D386E230",
 "hfovMax": 136,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4721419E_4CE2_2257_41CB_53CE440A420E",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_t.jpg",
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
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_camera",
 "automaticZoomSpeed": 10
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
 "id": "effect_2A81B644_08E8_807B_417A_96E33A558BB4",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AA3D995_4E0C_53E6_41D3_7FA9DB33CE89",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AC0678C_4E0C_5FE5_41BF_5E8CE2D39855",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 200,
 "id": "effect_29CD16A0_0818_803B_419B_E05D80544E29",
 "easing": "quad_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B1457AE_4E0C_5F22_41D2_D35BA9604BB9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.35,
  "hfov": 120,
  "pitch": 3.08
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Blok2",
 "id": "panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
   "class": "AdjacentPanorama",
   "yaw": 177.24,
   "backwardYaw": 44.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
   "class": "AdjacentPanorama"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_2AD89E19_08E8_800D_4188_CBCA33D43D80",
   "class": "PanoramaMapLocation",
   "angle": 89.2,
   "y": 166.4,
   "x": 270.4
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_t.jpg",
 "overlays": [
  "this.overlay_5EB7B754_4D22_6E2B_41CF_876A863D763E",
  "this.overlay_59D50442_4D22_622F_41D0_37D6675A37F2",
  "this.overlay_5981B3DE_4D22_25D7_41AC_D0674B08E75E",
  "this.overlay_580FBA77_4D22_26D5_41D0_C7D3ED22684E"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 58.08,
  "pitch": -2.47
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5B3F57C4_4E0C_5F66_41A6_C8B3BF77A5F0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.68,
  "pitch": -6.77
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.68,
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AEE8799_4E0C_5FEE_41C4_F55439B4EC83",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AC649BD_4E0C_5326_4193_42192D0A83C1",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_21D1AD8B_0828_800D_419E_60ED50C39737",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "id": "effect_54610D4E_4D2E_2236_41C8_4739D9D932AA",
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_208687B3_0828_801D_4140_2C36090D1F91",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5AB3797A_4E0C_5322_4198_EB691909D33E",
 "automaticZoomSpeed": 10
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
 "id": "playList_5AAF376A_4E0C_5F2D_41D3_79905FF81C08"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_58722913_4E0C_50E2_41BD_302A551709BC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_580B88D7_4E0C_5162_41B5_4F11CBB59F34",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A801644_08E8_807B_4182_98EEAE3FEC87",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5BE7C8AF_4E0C_5122_41BB_76E0FCD78BF6",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_208797B3_0828_801D_4179_4A8CC03274C1",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.48,
  "pitch": -6.09
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "camera_5ABB6962_4E0C_5322_41C9_C948B279966E",
 "automaticZoomSpeed": 10
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
 "id": "effect_21D71D8B_0828_800D_419A_3E3272552727",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_50453394_4D22_662B_41D0_3B2FDAFAD35D",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
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
 "id": "panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Balkon",
 "id": "panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
 "hfovMax": 140,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
   "class": "AdjacentPanorama",
   "yaw": -153.78,
   "backwardYaw": 76.33,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
   "class": "AdjacentPanorama",
   "yaw": -151.86,
   "backwardYaw": 76.33,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
   "class": "AdjacentPanorama",
   "yaw": 155.38,
   "backwardYaw": -85.04,
   "distance": 1
  },
  {
   "panorama": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
   "class": "AdjacentPanorama",
   "yaw": 154.72,
   "backwardYaw": -85.04,
   "distance": 1
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_0995E8C4_07F9_807A_4140_2C6B66E9177C",
   "class": "PanoramaMapLocation",
   "angle": 182.44,
   "y": 1229.95,
   "x": 488.47
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_t.jpg",
 "overlays": [
  "this.overlay_140CA710_0868_801B_4180_B00E1AB3A893",
  "this.overlay_153CD696_0869_8006_4192_4B0462CC548C",
  "this.overlay_1538B1DF_0868_8005_413F_7A19437A76E6",
  "this.overlay_157ED137_0868_8005_419D_224F0194667D",
  "this.overlay_5333052F_4D62_E276_41CD_4A5A7627BC09"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2A80D644_08E8_807B_4188_13B91B80F042",
 "easing": "cubic_in_out"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
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
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingBottom": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#999999"
 ],
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.Button_17312523_0868_803D_4192_FFDC412A7D19",
  "this.Button_17314523_0868_803D_4191_5BF2ACF38BAA",
  "this.Button_17317523_0868_803D_4185_1CCDD912D023",
  "this.Button_17316523_0868_803D_417E_BCFA3B6EBB22",
  "this.Button_17319523_0868_803D_415C_F1EEA314AB4B",
  "this.Container_29E43855_0828_8005_416F_A46E143B25DC"
 ],
 "id": "Container_17318523_0868_803D_4196_4BE8427F4E1F",
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": 15,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "horizontal",
 "borderRadius": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "scrollBarWidth": 10
},
{
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
 "id": "Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7",
 "scrollBarColor": "#000000",
 "width": 300,
 "scrollBarOpacity": 0.5,
 "right": 15,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "top": 15,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "class": "Container",
 "height": 300,
 "gap": 0,
 "data": {
  "name": "ContainerFloor"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "horizontalAlign": "center",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09"
 ],
 "id": "Container_20AA0897_0828_8005_4198_75B2E94D10DC",
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "top": 15,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "horizontal",
 "borderRadius": 0,
 "class": "Container",
 "height": 100,
 "gap": 10,
 "data": {
  "name": "Logo BMI"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "hidden",
 "horizontalAlign": "center",
 "scrollBarWidth": 10
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [],
 "iconWidth": 30,
 "shadowSpread": 1,
 "id": "Button_17312523_0868_803D_4192_FFDC412A7D19",
 "width": 60,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "iconURL": "skin/Button_17312523_0868_803D_4192_FFDC412A7D19.png",
 "paddingLeft": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 60,
 "paddingBottom": 0,
 "mode": "toggle",
 "fontSize": 12,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17312523_0868_803D_4192_FFDC412A7D19_pressed.png",
 "class": "Button",
 "backgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "horizontalAlign": "center",
 "cursor": "hand",
 "data": {
  "name": "Button settings VR"
 }
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [],
 "iconWidth": 30,
 "shadowSpread": 1,
 "id": "Button_17319523_0868_803D_415C_F1EEA314AB4B",
 "width": 60,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "iconURL": "skin/Button_17319523_0868_803D_415C_F1EEA314AB4B.png",
 "paddingLeft": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [],
 "paddingBottom": 0,
 "mode": "toggle",
 "fontSize": 12,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17319523_0868_803D_415C_F1EEA314AB4B_pressed.png",
 "class": "Button",
 "height": 60,
 "iconBeforeLabel": true,
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "horizontalAlign": "center",
 "cursor": "hand",
 "data": {
  "name": "Button Settings Fullscreen"
 }
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [],
 "iconWidth": 30,
 "shadowSpread": 1,
 "id": "Button_17317523_0868_803D_4185_1CCDD912D023",
 "width": 60,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "iconURL": "skin/Button_17317523_0868_803D_4185_1CCDD912D023.png",
 "paddingLeft": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [],
 "paddingBottom": 0,
 "mode": "toggle",
 "fontSize": 12,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17317523_0868_803D_4185_1CCDD912D023_pressed.png",
 "class": "Button",
 "height": 60,
 "iconBeforeLabel": true,
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "horizontalAlign": "center",
 "cursor": "hand",
 "data": {
  "name": "Button Settings Mute"
 }
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
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
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingBottom": 0,
 "playbackBarBorderRadius": 0,
 "height": 250,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "visible": false,
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#999999"
 ],
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 13,
      "height": 146
     }
    ]
   },
   "pitch": 13.63,
   "yaw": -128,
   "hfov": 1.23
  }
 ],
 "id": "overlay_5DD5C7C0_4D22_6E2B_41A7_5FAF202AA313",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128,
   "hfov": 1.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 6,
      "height": 73
     }
    ]
   },
   "pitch": 13.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "View Bandung"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 434,
      "height": 85
     }
    ]
   },
   "pitch": 13.63,
   "yaw": 96.34,
   "hfov": 37.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5C39A15C_4D22_E2DB_41D0_F3B02891495C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.34,
   "hfov": 37.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 81,
      "height": 16
     }
    ]
   },
   "pitch": 13.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 14,
      "height": 344
     }
    ]
   },
   "pitch": -0.06,
   "yaw": 29.52,
   "hfov": 1.23
  }
 ],
 "id": "overlay_5DB31873_4D22_62ED_41CB_0737F4419998",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.52,
   "hfov": 1.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 7,
      "height": 172
     }
    ]
   },
   "pitch": -0.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Bukit Mekar Indah 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 560,
      "height": 88
     }
    ]
   },
   "pitch": -9.36,
   "yaw": -17.71,
   "hfov": 48.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5DB32873_4D22_62ED_41BE_01D86049F1D2",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.71,
   "hfov": 48.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 101,
      "height": 16
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
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 14,
      "height": 146
     }
    ]
   },
   "pitch": 1.57,
   "yaw": 96.09,
   "hfov": 1.23
  }
 ],
 "id": "overlay_5DCBA70B_4D1E_6E3D_4176_720261017AC2",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.09,
   "hfov": 1.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 7,
      "height": 73
     }
    ]
   },
   "pitch": 1.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "View Gunung Manglayang"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 771,
      "height": 85
     }
    ]
   },
   "pitch": 26.69,
   "yaw": -127.49,
   "hfov": 60.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5C303A61_4D1E_26ED_41C6_CC1D5A902B94",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.49,
   "hfov": 60.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 145,
      "height": 16
     }
    ]
   },
   "pitch": 26.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5EACF054_4D62_222B_41B2_A4933355D8B3",
   "hfov": 24.97,
   "pitch": -27.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.2,
   "distance": 100
  }
 ],
 "id": "overlay_5F66B023_4D1E_E26D_41AF_545B55047284",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162, this.camera_5AEE8799_4E0C_5FEE_41C4_F55439B4EC83); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.2,
   "hfov": 24.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -27.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Bukit Mekar Indah 1 & 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 674,
      "height": 88
     }
    ]
   },
   "pitch": 19.53,
   "yaw": 29.02,
   "hfov": 55.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5C7A130F_4D1E_2635_41C8_3538A3946922",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.02,
   "hfov": 55.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 122,
      "height": 16
     }
    ]
   },
   "pitch": 19.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 242,
      "height": 176
     }
    ]
   },
   "pitch": -21.17,
   "yaw": -6.78,
   "hfov": 21.1
  }
 ],
 "id": "overlay_5CC8F21F_4D66_2655_41D0_CCF4B7EED92D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.78,
   "hfov": 21.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 121,
      "height": 88
     }
    ]
   },
   "pitch": -21.17
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_50180D83_4D66_622D_4190_4F2D03DDC600",
 "bleachingDistance": 0.4,
 "pitch": 18.4,
 "bleaching": 0.7,
 "yaw": -130.26
},
{
 "class": "PanoramaPlayListItem",
 "end": "if(this.existsKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')){ if(this.getKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22')) { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true, -1, this.effect_579F16CB_4D23_EE3D_41C8_39598A392510, 'showEffect', false); } else { this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false, -1, this.effect_5B3F2A02_4E0C_50E2_41C1_7F4FCFD18F57, 'hideEffect', false); } }; this.unregisterKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22'); if(this.existsKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')){ if(this.getKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC')) { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, -1, this.effect_50453394_4D22_662B_41D0_3B2FDAFAD35D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, -1, this.effect_5B3ECA02_4E0C_50E2_41BE_D88776DC4082, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC'); if(this.existsKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')){ if(this.getKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7')) { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, -1, this.effect_54B5C509_4D2E_623D_41C9_052301CE467F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, -1, this.effect_5B3EDA02_4E0C_50E2_41C2_B8CCB5619EB2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_57CFBF7A_4D2E_3EDF_418E_39567D0EC7B3, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_5B3C6A02_4E0C_50E2_41A4_CE63BF2A086B, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer'); if(this.existsKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')){ if(this.getKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')) { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_54B58509_4D2E_623D_41D1_0077B50C7648, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_5B3C7A02_4E0C_50E2_41BA_9449D4C9191C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482')",
 "start": "this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true); this.keepComponentVisibility(this.MapViewer, true); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true)",
 "begin": "this.registerKey('visibility_HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482', this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482.get('visible')); this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7', this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')); this.registerKey('visibility_Container_29E43855_0828_8005_416F_A46E143B25DC', this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')); this.registerKey('visibility_Button_17316523_0868_803D_417E_BCFA3B6EBB22', this.Button_17316523_0868_803D_417E_BCFA3B6EBB22.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_5AA9776A_4E0C_5F2D_41C2_ACF569FF2986, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, false); this.setComponentVisibility(this.Button_17316523_0868_803D_417E_BCFA3B6EBB22, true, -1, this.effect_579F16CB_4D23_EE3D_41C8_39598A392510, 'showEffect', false); this.keepComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false); this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, -1, this.effect_50453394_4D22_662B_41D0_3B2FDAFAD35D, 'showEffect', false); this.keepComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false); this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, -1, this.effect_54B5C509_4D2E_623D_41C9_052301CE467F, 'showEffect', false); this.keepComponentVisibility(this.MapViewer, false); this.setComponentVisibility(this.MapViewer, true, -1, this.effect_57CFBF7A_4D2E_3EDF_418E_39567D0EC7B3, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true, -1, this.effect_54B58509_4D2E_623D_41D1_0077B50C7648, 'showEffect', false)",
 "media": "this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA9776A_4E0C_5F2D_41C2_ACF569FF2986",
 "camera": "this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA8E76A_4E0C_5F2D_41D1_ABC7831CEBCE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA8E76A_4E0C_5F2D_41D1_ABC7831CEBCE",
 "camera": "this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA8776A_4E0C_5F2D_41D0_2FD5E00F1F11, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA8776A_4E0C_5F2D_41D0_2FD5E00F1F11",
 "camera": "this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AABD76A_4E0C_5F2D_41C9_8F3163D13936, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AABD76A_4E0C_5F2D_41C9_8F3163D13936",
 "camera": "this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AABA76A_4E0C_5F2D_41C5_9EB1978A4CFC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AABA76A_4E0C_5F2D_41C5_9EB1978A4CFC",
 "camera": "this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81E644_08E8_807B_4192_870E069EC73B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false, -1, this.effect_21D1AD8B_0828_800D_419E_60ED50C39737, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AAB376A_4E0C_5F2D_41CB_51E357598521, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81D644_08E8_807B_4192_CBDBC2B27A78, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, false); this.setComponentVisibility(this.HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4, true, -1, this.effect_2C2DE1EC_08E8_800A_419B_5EF02676B474, 'showEffect', false)",
 "media": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AAB376A_4E0C_5F2D_41CB_51E357598521",
 "camera": "this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A818644_08E8_807B_4190_B0878247B51A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false, -1, this.effect_21D00D8B_0828_800D_419C_CDEEFC453C52, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AAAA76A_4E0C_5F2D_41A1_3129F0F9D391, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81F644_08E8_807B_419C_8E0505B46E62, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, false); this.setComponentVisibility(this.HTMLText_2C66DC7F_0818_8005_4196_19D03306C358, true, -1, this.effect_21D1DD8B_0828_800D_4194_303A20CAC1D4, 'showEffect', false)",
 "media": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AAAA76A_4E0C_5F2D_41A1_3129F0F9D391",
 "camera": "this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81A644_08E8_807B_4199_BA780616C9ED, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false, -1, this.effect_21D08D8B_0828_800D_419E_AF1C518EC888, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AAA176A_4E0C_5F2D_41C5_AF739C4381FC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A819644_08E8_807B_4180_D92B4637B19E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, false); this.setComponentVisibility(this.HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7, true, -1, this.effect_21D0AD8B_0828_800D_41A0_F062EE1B7DDE, 'showEffect', false)",
 "media": "this.panorama_0DB10794_07E8_801B_418A_23648147084C",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AAA176A_4E0C_5F2D_41C5_AF739C4381FC",
 "camera": "this.panorama_0DB10794_07E8_801B_418A_23648147084C_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A804644_08E8_807B_4185_8BDBEC4F117A, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false, -1, this.effect_21D70D8B_0828_800D_419A_55A121A275BB, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA5876D_4E0C_5F26_41C8_35EEF2BC87BF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A81B644_08E8_807B_417A_96E33A558BB4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, false); this.setComponentVisibility(this.HTMLText_22CD3292_081B_801E_419C_294A22E93A2C, true, -1, this.effect_21D71D8B_0828_800D_419A_3E3272552727, 'showEffect', false)",
 "media": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA5876D_4E0C_5F26_41C8_35EEF2BC87BF",
 "camera": "this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A806644_08E8_807B_4163_A515F6437F80, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false, -1, this.effect_2086A7B3_0828_801D_419F_CD79C5141477, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA5176D_4E0C_5F26_41C0_AF6D40AF7BCB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A805644_08E8_807B_417D_13F16C630306, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, false); this.setComponentVisibility(this.HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0, true, -1, this.effect_208687B3_0828_801D_4140_2C36090D1F91, 'showEffect', false)",
 "media": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA5176D_4E0C_5F26_41C0_AF6D40AF7BCB",
 "camera": "this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A800644_08E8_807B_4179_4F883FB0EF06, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false, -1, this.effect_208727B3_0828_801D_4181_C0C4DC69C6E0, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA4876D_4E0C_5F26_41C3_B7BFFEB9F6F2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A807644_08E8_807B_4196_737E72118D2B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, false); this.setComponentVisibility(this.HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E, true, -1, this.effect_208707B3_0828_801D_4191_7A9734A62487, 'showEffect', false)",
 "media": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA4876D_4E0C_5F26_41C3_B7BFFEB9F6F2",
 "camera": "this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A802644_08E8_807B_4174_23BBCEBD0C04, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false, -1, this.effect_208797B3_0828_801D_4179_4A8CC03274C1, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA4776D_4E0C_5F26_418D_6AE4F4C84D20, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A801644_08E8_807B_4182_98EEAE3FEC87, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, false); this.setComponentVisibility(this.HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3, true, -1, this.effect_208787B3_0828_801D_4197_9F0012D1715F, 'showEffect', false)",
 "media": "this.panorama_0DB85765_07E8_803A_4168_848F56013084",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA4776D_4E0C_5F26_418D_6AE4F4C84D20",
 "camera": "this.panorama_0DB85765_07E8_803A_4168_848F56013084_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80C644_08E8_807B_419C_BB6E0B2AECA6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false, -1, this.effect_208027B3_0828_801D_4192_B6224B2ACE7F, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA7E76D_4E0C_5F26_41C3_B6DBD38CD419, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A803644_08E8_807B_4181_F215F5190C71, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, false); this.setComponentVisibility(this.HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D, true, -1, this.effect_208017B3_0828_801D_41A1_0B520F51EE9F, 'showEffect', false)",
 "media": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA7E76D_4E0C_5F26_41C3_B6DBD38CD419",
 "camera": "this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80E644_08E8_807B_418E_2985DEED3BB7, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false, -1, this.effect_208157B3_0828_801D_418D_E186EA8D9A9C, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA7576E_4E0C_5F22_41BB_E356D40FC2AC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_2A80D644_08E8_807B_4188_13B91B80F042, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, false); this.setComponentVisibility(this.HTMLText_2D094583_0828_80FE_419C_2422AF1E1641, true, -1, this.effect_2080B7B3_0828_801D_4191_9FE24A63AFC1, 'showEffect', false)",
 "media": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA7576E_4E0C_5F22_41BB_E356D40FC2AC",
 "camera": "this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_52DF85C6_4D7E_2237_41C6_2AB4DC27A290, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, false, -1, this.effect_52DF75C6_4D7E_2237_41CB_864D33CF9148, 'hideEffect', false); this.trigger('tourEnded')",
 "start": "this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, true); this.keepComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5AA6D76E_4E0C_5F22_41D0_770D887DEF4C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0); this.keepComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false); this.setComponentVisibility(this.HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482, false, -1, this.effect_52DFB5C6_4D7E_2237_41CA_0973E058CB5F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, false); this.setComponentVisibility(this.HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39, true, -1, this.effect_52DF65C6_4D7E_2237_41C9_C6CC26C19DE1, 'showEffect', false)",
 "media": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5AA6D76E_4E0C_5F22_41D0_770D887DEF4C",
 "camera": "this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_camera"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2A25A2_0878_803F_4187_9A2622F65A42",
   "hfov": 24.29,
   "pitch": -51.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 128.59,
   "distance": 100
  }
 ],
 "id": "overlay_1147C50B_0818_800D_4185_D0BE6D357461",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5BDCE868_4E0C_512E_41BA_B93246B01515); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.59,
   "hfov": 24.29,
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
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 28.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1228A364_081F_803A_417B_418510D18CE2",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.01,
   "hfov": 28.36,
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
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arah Keluar"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 36.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1FA4E97C_0838_800B_4193_8102D5BF8386",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317, this.camera_584FC8FF_4E0C_5122_41D0_1AED8312E933); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.35,
   "hfov": 36.48,
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
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 40.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1F8B6D89_0827_800A_4192_AC8270ACD41C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B, this.camera_580B88D7_4E0C_5162_41B5_4F11CBB59F34); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.26,
   "hfov": 40.64,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15091020_081B_803A_416B_52C1FAC4AB60",
   "hfov": 26.35,
   "pitch": -44.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.34,
   "distance": 100
  }
 ],
 "id": "overlay_1F5BAC24_0828_803B_4197_10A487C28E7E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B, this.camera_583BE8E1_4E0C_515E_41D1_72FFB14E834F); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.34,
   "hfov": 26.35,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1508D020_081B_803A_4164_DD9CDEA24BE0",
   "hfov": 24.11,
   "pitch": -25.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.03,
   "distance": 100
  }
 ],
 "id": "overlay_1F4A533C_082B_800A_4193_87DB3690855B",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317, this.camera_587C1908_4E0C_50EE_41AB_D057A6C2C7A9); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.03,
   "hfov": 24.11,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15086020_081B_803A_419A_9DF8D7EC682C",
   "hfov": 21.91,
   "pitch": -35.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 103.21,
   "distance": 100
  }
 ],
 "id": "overlay_1F9081EF_0829_8005_4198_92F6EAAF0A8D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F, this.camera_5BC07889_4E0C_51EE_41C2_C4FE87F87640); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.21,
   "hfov": 21.91,
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
 "data": {
  "label": "Kitchen Area"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 31.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1F97D388_0828_800B_419C_B3A130DEF81E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F, this.camera_5BF7289B_4E0C_51E2_41C4_2136B047D53E); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.26,
   "hfov": 31.95,
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
 "data": {
  "label": "Bathroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 23.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1FBF35BA_082F_800F_4198_B3B3DF29B67A",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB10794_07E8_801B_418A_23648147084C, this.camera_5BE7C8AF_4E0C_5122_41BB_76E0FCD78BF6); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.77,
   "hfov": 23.43,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_150B8020_081B_803A_417E_3A64C027FCE0",
   "hfov": 20.39,
   "pitch": -40.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 155.97,
   "distance": 100
  }
 ],
 "id": "overlay_100CE208_0828_800B_4177_784A45D685A2",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB10794_07E8_801B_418A_23648147084C, this.camera_581A88C7_4E0C_5162_4181_7A886BCB3403); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.97,
   "hfov": 20.39,
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
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 32.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_10A75D41_082B_807D_4174_F469FFE28493",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5829C8EC_4E0C_5126_41C4_CFFA88E73FC5); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.03,
   "hfov": 32.77,
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
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_150B2020_081B_803A_4155_24943CB7EF30",
   "hfov": 17.15,
   "pitch": 12.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -163.93,
   "distance": 100
  }
 ],
 "id": "overlay_108D0008_0829_800B_419F_485E821A9CE6",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_585E48F7_4E0C_5123_41BB_272349C1B40E); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.93,
   "hfov": 17.15,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2AA5A3_0878_803E_418D_A41B57C612DA",
   "hfov": 19.69,
   "pitch": -42.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -137.2,
   "distance": 100
  }
 ],
 "id": "overlay_111E3D5B_0819_800D_4181_5F5DA209525F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5ABB6962_4E0C_5322_41C9_C948B279966E); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.2,
   "hfov": 19.69,
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
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 31.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_11B8E830_0818_801B_4197_96ECA5AD2212",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5AB7D96D_4E0C_5326_41C6_A087983D4EC4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.15,
   "hfov": 31.52,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2B25A7_0878_8005_4184_2343C253B661",
   "hfov": 25.17,
   "pitch": -42.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.95,
   "distance": 100
  }
 ],
 "id": "overlay_1194EE30_081B_801A_419F_4D25DB1C7368",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_5ACE59B3_4E0C_5322_41CB_E182ABCB0092); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.95,
   "hfov": 25.17,
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
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 22.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_121ACDE2_081B_803F_419D_2CF485387AF7",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_5AC649BD_4E0C_5326_4193_42192D0A83C1); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.28,
   "hfov": 22.11,
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
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 23.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1228C18E_0819_8006_4167_4445E8FF106E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_5AD8F99F_4E0C_53E2_41CA_BF418EE42DB2); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.51,
   "hfov": 23.96,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2C05A7_0878_8005_4193_E065FBB50913",
   "hfov": 23,
   "pitch": -30.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.19,
   "distance": 100
  }
 ],
 "id": "overlay_12538DC5_0818_8005_4196_0B423AD567D3",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_5AD0F9AA_4E0C_532D_419C_B2CE98C49F5C); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.19,
   "hfov": 23,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2C65A7_0878_8005_4176_A55F4CB4E79B",
   "hfov": 20.77,
   "pitch": -39.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 27.35,
   "distance": 100
  }
 ],
 "id": "overlay_12BA83C3_0867_807D_4178_CB9118E15905",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC, this.camera_5AA4D98A_4E0C_53E2_41D1_2465320B4F91); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.35,
   "hfov": 20.77,
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
 "data": {
  "label": "Bathroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 22.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_12D261BD_0868_8005_4198_7D26B9FBA97F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC, this.camera_5AA3D995_4E0C_53E6_41D3_7FA9DB33CE89); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.76,
   "hfov": 22.32,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_516A6603_4D62_6E2D_41D0_831236CA25F4",
   "hfov": 20.47,
   "pitch": -40.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 140.9,
   "distance": 100
  }
 ],
 "id": "overlay_564280AB_4D62_627D_41B4_52D1EBEE955F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C, this.camera_5AB3797A_4E0C_5322_4198_EB691909D33E); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.9,
   "hfov": 20.47,
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
 "data": {
  "label": "Torn"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_56226179_4D62_E2DD_41CB_0460EAB693D8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C, this.camera_5AAF1985_4E0C_53E7_41D1_E9E28D51167E); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.56,
   "hfov": 10.7,
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
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
  },
  "height": 105.23
 },
 "useHandCursor": true,
 "id": "overlay_15D431D1_07E9_801D_418A_2D405812060D",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
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
  },
  "height": 113.61
 },
 "useHandCursor": true,
 "id": "overlay_1696D975_07E8_801A_4168_A1CED18EF04C",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
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
  },
  "height": 109.42
 },
 "useHandCursor": true,
 "id": "overlay_1BE30B1E_0818_8007_419C_6B3C6904A80F",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
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
  },
  "height": 123.52
 },
 "useHandCursor": true,
 "id": "overlay_1CBB288A_0819_800F_4180_D79BE8535375",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Balcony"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 24.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_13E4597D_0869_8005_4196_1A5137EE1ABE",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_5B1C39E4_4E0C_5326_416B_9A3968505368); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.04,
   "hfov": 24.18,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2EE5A7_0878_8005_419C_E72D962367F1",
   "hfov": 28.57,
   "pitch": -29.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.46,
   "distance": 100
  }
 ],
 "id": "overlay_14555AA8_0868_800A_419C_D8045307C52E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_5B1119EF_4E0C_5322_419F_5D95436CBA4D); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.46,
   "hfov": 28.57,
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
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 42.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_15217132_0868_801F_4194_A30D4D5EE972",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B0B49F9_4E0C_532E_419F_E5F26A67BBA1); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.49,
   "hfov": 42.87,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2F95A7_0878_8005_416F_87CCBAE1869E",
   "hfov": 25.42,
   "pitch": -38.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 119.92,
   "distance": 100
  }
 ],
 "id": "overlay_14B158A0_086B_803A_419D_F7B980930D8E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B3C9A02_4E0C_50E2_41C4_4FFC34881F3C); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.92,
   "hfov": 25.42,
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 418.9,
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
  },
  "height": 51
 },
 "useHandCursor": true,
 "id": "overlay_29222E9E_08E8_8006_4177_560478564F90",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 418.9,
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
  },
  "height": 51
 },
 "useHandCursor": true,
 "id": "overlay_554C95C6_4D26_6237_41D2_EF8EA6DB5CFE",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 141.9,
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
  },
  "height": 51
 },
 "useHandCursor": true,
 "id": "overlay_54CB93B2_4D26_E66F_41D2_339BCEC498FF",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 86.9,
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
  },
  "height": 51
 },
 "useHandCursor": true,
 "id": "overlay_54C1B21A_4D26_265F_41CF_5BB097E0350F",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 140.9,
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
  },
  "height": 51
 },
 "useHandCursor": true,
 "id": "overlay_540CB958_4D26_62DB_41CB_FA3D242F3EC6",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B20810E_4D22_6237_41B2_26BF562197DC",
   "hfov": 29.89,
   "pitch": -20.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.09,
   "distance": 100
  }
 ],
 "id": "overlay_5CAFB95A_4D1E_22DF_41C6_1EE4F3CB828F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162, this.camera_5BD3487C_4E0C_5126_41B3_D2FB53A4D95A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.09,
   "hfov": 29.89,
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B20610E_4D22_6237_41CE_39B7824F26EC",
   "hfov": 17.55,
   "pitch": -2.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 78,
   "distance": 100
  }
 ],
 "id": "overlay_5E10F4F1_4D22_23ED_41BE_34FDAD864839",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78,
   "hfov": 17.55,
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B20210E_4D22_6237_41BD_A676F5E23943",
   "hfov": 17.58,
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.57,
   "distance": 100
  }
 ],
 "id": "overlay_5EC7EB87_4D26_2635_41C7_473DEDBB4DC4",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.57,
   "hfov": 17.58,
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
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2CF5A7_0878_8005_4192_BC1CFE964495",
   "hfov": 23.48,
   "pitch": -48.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 166.43,
   "distance": 100
  }
 ],
 "id": "overlay_12EA21C6_086B_8006_4153_867F295817D9",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B08B7BA_4E0C_5F2D_41B4_4AEE90E6AD38); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.43,
   "hfov": 23.48,
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
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 34.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_136E9350_086B_801B_4194_F73AF6568608",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B3F57C4_4E0C_5F66_41A6_C8B3BF77A5F0); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.57,
   "hfov": 34.43,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B25610E_4D22_6237_41C3_0FCA90CDCB31",
   "hfov": 28.64,
   "pitch": -26.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 142.03,
   "distance": 100
  }
 ],
 "id": "overlay_59D31220_4D2D_E66B_41C2_1344D94328F5",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF, this.camera_5BAFD854_4E0C_5166_41A9_4D5C99B4B009); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.03,
   "hfov": 28.64,
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B25310E_4D22_6237_41BC_1436855EB467",
   "hfov": 23.35,
   "pitch": -1.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.51,
   "distance": 100
  }
 ],
 "id": "overlay_58CB4A8B_4D2E_263D_41CE_D3789275972B",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5BBF1840_4E0C_515D_41D0_E6E81619C8CF); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.51,
   "hfov": 23.35,
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
 "textDecoration": "none",
 "backgroundColorRatios": [],
 "iconWidth": 30,
 "horizontalAlign": "center",
 "id": "Button_17314523_0868_803D_4191_5BF2ACF38BAA",
 "width": 60,
 "rollOverIconHeight": 30,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "iconURL": "skin/Button_17314523_0868_803D_4191_5BF2ACF38BAA.png",
 "paddingLeft": 0,
 "iconHeight": 30,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [],
 "paddingBottom": 0,
 "mode": "toggle",
 "fontSize": 12,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17314523_0868_803D_4191_5BF2ACF38BAA_pressed.png",
 "class": "Button",
 "height": 60,
 "rollOverBackgroundOpacity": 1,
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverIconWidth": 30,
 "cursor": "hand",
 "data": {
  "name": "Button Settings Gyro"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B22610E_4D22_6237_41CC_68BA78AE7008",
   "hfov": 25.48,
   "pitch": -18.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -93.49,
   "distance": 100
  }
 ],
 "id": "overlay_5CAB59C6_4D1D_E237_41A2_B86926D186B1",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82, this.camera_5AC0678C_4E0C_5FE5_41BF_5E8CE2D39855); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.49,
   "hfov": 25.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_0_0_0_map.gif",
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B21C10E_4D22_6237_41C0_9B396C781D28",
   "hfov": 17.55,
   "pitch": -2.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.41,
   "distance": 100
  }
 ],
 "id": "overlay_5FAED5A7_4D1E_2275_41C4_947BC8D78E2F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.41,
   "hfov": 17.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_1_0_0_map.gif",
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B21910E_4D22_6237_41B9_BA363E5DCF82",
   "hfov": 17.58,
   "pitch": 0.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 110.66,
   "distance": 100
  }
 ],
 "id": "overlay_5E3933DE_4D22_65D7_41BA_384006124A3F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.66,
   "hfov": 17.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_2_0_0_map.gif",
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B21610E_4D22_6237_41C0_338D3CD4C331",
   "hfov": 25.75,
   "pitch": -16.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.32,
   "distance": 100
  }
 ],
 "id": "overlay_5FF287AF_4D22_EE75_41CF_968AA2C4925D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4721419E_4CE2_2257_41CB_53CE440A420E, this.camera_5AC9A782_4E0C_5FE2_41C7_2A3DF6016931); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.32,
   "hfov": 25.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_3_0_0_map.gif",
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B21310E_4D22_6237_41CD_6FF9EC634ACE",
   "hfov": 26,
   "pitch": -14.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.3,
   "distance": 100
  }
 ],
 "id": "overlay_5E1BED99_4D22_225D_41B8_0A146299F086",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF, this.camera_5AFA9795_4E0C_5FE6_41A9_E014B937E943); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.3,
   "hfov": 26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_4_0_0_map.gif",
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
 "id": "overlay_50013FB6_4D62_7E57_41BC_C3342F8DE7F4",
 "bleachingDistance": 0.4,
 "pitch": 4.58,
 "bleaching": 0.7,
 "yaw": -9.67
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 755.87,
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
  },
  "height": 95.96
 },
 "useHandCursor": true,
 "id": "overlay_1555A996_07E8_8007_4198_C2FEB81D5CEC",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 754.44,
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
  },
  "height": 89.73
 },
 "useHandCursor": true,
 "id": "overlay_15364216_07E8_8007_4189_64EC3AD3D507",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 1188.42,
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
  },
  "height": 83.07
 },
 "useHandCursor": true,
 "id": "overlay_14EAD63E_07E8_8007_4176_5C5A2A3D9DB4",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 457.96,
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
  },
  "height": 85.94
 },
 "useHandCursor": true,
 "id": "overlay_14BB9067_07E7_8005_419D_EC021BA35BD6",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 515.18,
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
  },
  "height": 92.35
 },
 "useHandCursor": true,
 "id": "overlay_1BBB8032_0818_801F_419A_56E2D4D5DEDE",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false
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
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 134.27,
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
  },
  "height": 85.94
 },
 "useHandCursor": true,
 "id": "overlay_51D03764_4D66_6EEB_41BD_22C73F8B4B13",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B27810E_4D22_6237_41D2_87E6D6800D1E",
   "hfov": 17.56,
   "pitch": 2.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.07,
   "distance": 100
  }
 ],
 "id": "overlay_5EE67F75_4D26_FED5_41CB_9B9B575BF08E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.07,
   "hfov": 17.56,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B27410E_4D22_6237_41C5_B243393B4C56",
   "hfov": 25.37,
   "pitch": -18.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.43,
   "distance": 100
  }
 ],
 "id": "overlay_5E21F11E_4D26_224F_41CF_FC38BD3FF8AC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56, this.camera_5AF0B9D1_4E0C_537E_41D0_0C4D3A2A504D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.43,
   "hfov": 25.37,
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
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B27210E_4D22_6237_41D1_CF186FEC1839",
   "hfov": 25.51,
   "pitch": -17.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.5,
   "distance": 50
  }
 ],
 "id": "overlay_59420EB1_4D26_1E6D_41AF_76053B0BD9BF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317, this.camera_5AEB39DB_4E0C_5362_41C2_D9FEEC4AE0F6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.5,
   "hfov": 25.51,
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
 "id": "overlay_5044DA77_4D62_26D5_41C6_430B4A7E65CA",
 "bleachingDistance": 0.4,
 "pitch": 3.08,
 "bleaching": 0.7,
 "yaw": 130.51
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_59CB967F_4E15_F122_41D0_5F490238335A",
   "hfov": 25.65,
   "pitch": -16.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 133.11,
   "distance": 100
  }
 ],
 "id": "overlay_5CF74291_4E14_F1FE_41C2_0FDB3890C784",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162, this.camera_5AFF59C6_4E0C_5362_41CC_9430F753210A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.11,
   "hfov": 25.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5166A603_4D62_6E2D_41D0_974A95270EB1",
   "hfov": 22.43,
   "pitch": -33.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.31,
   "distance": 100
  }
 ],
 "id": "overlay_5647BF8F_4D62_FE35_41A6_133409E3623B",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5AE0A7A0_4E0C_5FDE_41A7_A85300B45FDD); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.31,
   "hfov": 22.43,
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
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 32.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_51E38A82_4D66_662E_41BB_4F1A036B2D0B",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B1457AE_4E0C_5F22_41D2_D35BA9604BB9); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.52,
   "hfov": 32.98,
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
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_150AF020_081B_803A_417B_44B9AA2D4B14",
   "hfov": 19.85,
   "pitch": -42.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -120.12,
   "distance": 100
  }
 ],
 "id": "overlay_10BE3CA0_0827_803A_4174_52D5FD51D6E8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5B2367D3_4E0C_5F62_41B6_EE78DC7AA4E8); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.12,
   "hfov": 19.85,
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
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 30.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_11478773_0827_801D_4183_182C01D0AE68",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5B5007DD_4E0C_5F66_41B5_E5C407457307); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.32,
   "hfov": 30.88,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2D95A7_0878_8005_4193_B75B9628D958",
   "hfov": 23.23,
   "pitch": -29.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 76.33,
   "distance": 100
  }
 ],
 "id": "overlay_12FD76DA_0869_800F_419F_37873ADC8EBA",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_5B77E7F4_4E0C_5F25_41C1_ADEE2AD73DB6); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.33,
   "hfov": 23.23,
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
 "data": {
  "label": "Balcony"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 23.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_14751EFD_0868_800A_4192_EC07489696C5",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289, this.camera_5B64C808_4E0C_50EE_41D2_69E15F097BD5); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.51,
   "hfov": 23.37,
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
 "data": {
  "label": "Second Floor"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 36.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_136A7E74_086F_801A_4133_CC36423E8AC8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B9BB817_4E0C_50E2_41D1_A54E49AED768); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.61,
   "hfov": 36.49,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2E65A7_0878_8005_415D_D1BA083AB3B7",
   "hfov": 28.62,
   "pitch": -44.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.91,
   "distance": 100
  }
 ],
 "id": "overlay_13C94DBC_0868_800A_419C_1DC47F568674",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2, this.camera_5B88482B_4E0C_5122_417D_4029C3871B30); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.91,
   "hfov": 28.62,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_150A7020_081B_803A_4174_89ABE78BD194",
   "hfov": 34.27,
   "pitch": -33.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 150.57,
   "distance": 100
  }
 ],
 "id": "overlay_1138A1F8_0819_800B_4195_BBDBFEA1209C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB7332A_07E9_800E_419B_A13F2774FC29, this.camera_5B46F7E9_4E0C_5F2E_41B9_150028869AF9); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.57,
   "hfov": 34.27,
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
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 41.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_11F08989_0818_800D_419F_933C44B9508E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.01,
   "hfov": 41.81,
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
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
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
   "yaw": 63.43,
   "hfov": 1.24
  }
 ],
 "id": "overlay_429FEC5F_4D26_22D5_41C9_C3C6FCE4DECC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.43,
   "hfov": 1.24,
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
 "data": {
  "label": "(ITB, Unpad, IPDN)"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 43.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_439B3863_4D26_62ED_41B0_94ED9E2A9351",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.82,
   "hfov": 43.86,
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
 "data": {
  "label": "Gerbang Tol Cileunyi"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 54.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_423A7300_4D22_E62B_41CB_A3A0559F24EF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.06,
   "hfov": 54.43,
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
 "data": {
  "label": "Bukit Mekar Indah"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 44.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_43B89AA1_4D3E_266D_41BF_4CFE1FD446AC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.63,
   "hfov": 44.65,
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
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
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
   "yaw": 128.63,
   "hfov": 1.5
  }
 ],
 "id": "overlay_43C5DE04_4D22_3E2B_41C3_CEDD1E6F19AB",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.63,
   "hfov": 1.5,
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
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
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
   "yaw": -65.32,
   "hfov": 1.5
  }
 ],
 "id": "overlay_43ED5FA1_4D22_7E6D_4166_A495D7D0A092",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.32,
   "hfov": 1.5,
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
 "data": {
  "label": "Arah Bandung Kota"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 49.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_42C8D1FF_4D26_25D5_41C7_D33B094EEF1E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.88,
   "hfov": 49.72,
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
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E4AFC3D_4D22_6255_41BB_36269F3F6ADA",
   "hfov": 21.63,
   "pitch": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.7,
   "distance": 100
  }
 ],
 "id": "overlay_5C1CE448_4D26_223B_4183_CB2DCACA14BC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.7,
   "hfov": 21.63,
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
 "data": {
  "label": "Area Kampus Jatinangor\u000d"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 58.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_42C6801B_4D22_225E_41A4_3486A91F17A1",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.19,
   "hfov": 58.62,
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
 "id": "overlay_50104765_4D66_2EF5_41B4_B0D300BB4FC5",
 "bleachingDistance": 0.4,
 "pitch": 30.96,
 "bleaching": 0.7,
 "yaw": -103.63
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B26F10E_4D22_6237_41B1_A1BD01CFED31",
   "hfov": 32.18,
   "pitch": -17.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.24,
   "distance": 100
  }
 ],
 "id": "overlay_5EB7B754_4D22_6E2B_41CF_876A863D763E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF, this.camera_5B2C47C9_4E0C_5F6E_41CF_9A2EA26C36E6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.24,
   "hfov": 32.18,
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B26510E_4D22_6237_41C4_E82A73F1B1B4",
   "hfov": 17.49,
   "pitch": -5.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 69.71,
   "distance": 100
  }
 ],
 "id": "overlay_59D50442_4D22_622F_41D0_37D6675A37F2",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.71,
   "hfov": 17.49,
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
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B26310E_4D22_6237_41D0_3C010A9AE9A2",
   "hfov": 17.58,
   "pitch": 0.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.28,
   "distance": 100
  }
 ],
 "id": "overlay_5981B3DE_4D22_25D7_41AC_D0674B08E75E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.28,
   "hfov": 17.58,
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
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B25810E_4D22_6237_418A_C4478BC55902",
   "hfov": 26.31,
   "pitch": -11.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -146.25,
   "distance": 50
  }
 ],
 "id": "overlay_580FBA77_4D22_26D5_41D0_C7D3ED22684E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.25,
   "hfov": 26.31,
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
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 23.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_140CA710_0868_801B_4180_B00E1AB3A893",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_58924926_4E0C_5322_41C4_44562A48282D); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.38,
   "hfov": 23.33,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B1005A7_0878_8005_419C_AB3D10CB055A",
   "hfov": 14.68,
   "pitch": -56.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154.72,
   "distance": 100
  }
 ],
 "id": "overlay_153CD696_0869_8006_4192_4B0462CC548C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF, this.camera_58806931_4E0C_533E_41C1_7A14D79DDA92); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.72,
   "hfov": 14.68,
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
 "data": {
  "label": "Circle Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B1085A7_0878_8005_4164_30FDBA453DE7",
   "hfov": 15.93,
   "pitch": -53.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -153.78,
   "distance": 100
  }
 ],
 "id": "overlay_1538B1DF_0868_8005_413F_7A19437A76E6",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_58722913_4E0C_50E2_41BD_302A551709BC); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.78,
   "hfov": 15.93,
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
 "data": {
  "label": "Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
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
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_157ED137_0868_8005_419D_224F0194667D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0DB85765_07E8_803A_4168_848F56013084, this.camera_5862091D_4E0C_50E6_41C4_7D6F7965D240); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.86,
   "hfov": 23.24,
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
 "id": "overlay_5333052F_4D62_E276_41CD_4A5A7627BC09",
 "bleachingDistance": 0.5,
 "pitch": 1.07,
 "bleaching": 0.7,
 "yaw": 12.94
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [],
 "iconWidth": 30,
 "shadowSpread": 1,
 "id": "Button_17316523_0868_803D_417E_BCFA3B6EBB22",
 "width": 60,
 "rollOverIconHeight": 30,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "iconURL": "skin/Button_17316523_0868_803D_417E_BCFA3B6EBB22.png",
 "paddingLeft": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [],
 "paddingBottom": 0,
 "mode": "toggle",
 "fontSize": 12,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_17316523_0868_803D_417E_BCFA3B6EBB22_pressed.png",
 "class": "Button",
 "height": 60,
 "click": "if(!this.Button_17312523_0868_803D_4192_FFDC412A7D19.get('visible')){ this.setComponentVisibility(this.Button_17312523_0868_803D_4192_FFDC412A7D19, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17312523_0868_803D_4192_FFDC412A7D19, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Button_17314523_0868_803D_4191_5BF2ACF38BAA.get('visible')){ this.setComponentVisibility(this.Button_17314523_0868_803D_4191_5BF2ACF38BAA, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17314523_0868_803D_4191_5BF2ACF38BAA, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Button_17317523_0868_803D_4185_1CCDD912D023.get('visible')){ this.setComponentVisibility(this.Button_17317523_0868_803D_4185_1CCDD912D023, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17317523_0868_803D_4185_1CCDD912D023, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Button_17319523_0868_803D_415C_F1EEA314AB4B.get('visible')){ this.setComponentVisibility(this.Button_17319523_0868_803D_415C_F1EEA314AB4B, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Button_17319523_0868_803D_415C_F1EEA314AB4B, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Container_29E43855_0828_8005_416F_A46E143B25DC.get('visible')){ this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Container_29E43855_0828_8005_416F_A46E143B25DC, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.IconButton_289C4E30_0828_801B_419A_417103D64582.get('visible')){ this.setComponentVisibility(this.IconButton_289C4E30_0828_801B_419A_417103D64582, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_289C4E30_0828_801B_419A_417103D64582, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.Container_20AA0897_0828_8005_4198_75B2E94D10DC.get('visible')){ this.setComponentVisibility(this.Container_20AA0897_0828_8005_4198_75B2E94D10DC, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.Container_20AA0897_0828_8005_4198_75B2E94D10DC, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }; if(!this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09.get('visible')){ this.setComponentVisibility(this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09, true, 0, this.effect_54610D4E_4D2E_2236_41C8_4739D9D932AA, 'showEffect', false) } else { this.setComponentVisibility(this.HTMLText_20456CF7_082B_8006_4159_AB334357FD09, false, 0, this.effect_5460ED4E_4D2E_2236_41B2_04A307331E9D, 'hideEffect', false) }",
 "iconBeforeLabel": true,
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverIconWidth": 30,
 "horizontalAlign": "center",
 "cursor": "hand",
 "data": {
  "name": "Button Settings HS"
 }
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_289C4E30_0828_801B_419A_417103D64582"
 ],
 "id": "Container_29E43855_0828_8005_416F_A46E143B25DC",
 "scrollBarColor": "#000000",
 "width": 60,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundColor": [],
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "class": "Container",
 "height": 60,
 "gap": 0,
 "data": {
  "name": "Container72777"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "overflow": "hidden",
 "horizontalAlign": "center",
 "backgroundColorRatios": []
},
{
 "id": "HTMLText_2A9BD610_08F8_801A_4199_D1FB58366482",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>BMI Siteplan</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 15,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Siteplan"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2BBED07A_08F9_800F_4164_602C0F20AEC4",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Living Room Lt 1</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Living Lt 1"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_22CD3292_081B_801E_419C_294A22E93A2C",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Master Bedroom</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Master Bedroom"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2C66DC7F_0818_8005_4196_19D03306C358",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Kitchen"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2DDCC4C3_0819_807D_418D_9198A4169FB7",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bathroom Lt 1</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Bathroom Lt 1"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2E677BC3_0818_807D_4182_BC0795362EF0",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Living Room Lt 2</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Living Lt 2"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2DCD7D3E_0828_8006_417A_5B04DD079C6E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bathroom Lt 2</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Bathroom Lt 2"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2DE432AB_0828_800D_4193_D6E98D5175E3",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Bedroom 2"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2D2812CF_0828_8005_416C_4DE17F293D9D",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Bedroom 3"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2D094583_0828_80FE_419C_2422AF1E1641",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Balcony</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Balcony"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_53BC707C_4D7E_62DB_4177_C9918EDABD39",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 3,
 "height": 50,
 "borderColor": "#000000",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>Torn</B></SPAN></SPAN></DIV></div>",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Torn"
 },
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_20456CF7_082B_8006_4159_AB334357FD09",
 "scrollBarColor": "#000000",
 "width": 250,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "borderColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 10,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:'Century Gothic';\"><B>BUKIT MEKAR INDAH</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:'Century Gothic';\"><B>Virtual 360</B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "Judul"
 },
 "paddingTop": 10,
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4721419E_4CE2_2257_41CB_53CE440A420E_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5EACF054_4D62_222B_41B2_A4933355D8B3",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB40F52_07E8_801F_4192_9A4E06FFF13B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2A25A2_0878_803F_4187_9A2622F65A42",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_15091020_081B_803A_416B_52C1FAC4AB60",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_1508D020_081B_803A_4164_DD9CDEA24BE0",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_15086020_081B_803A_419A_9DF8D7EC682C",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_150B8020_081B_803A_417E_3A64C027FCE0",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB7332A_07E9_800E_419B_A13F2774FC29_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_150B2020_081B_803A_4155_24943CB7EF30",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2AA5A3_0878_803E_418D_A41B57C612DA",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2B25A7_0878_8005_4184_2343C253B661",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2C05A7_0878_8005_4193_E065FBB50913",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2C65A7_0878_8005_4176_A55F4CB4E79B",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D83E3C9_07E8_800D_4191_79C08026EFA2_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_516A6603_4D62_6E2D_41D0_831236CA25F4",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2EE5A7_0878_8005_419C_E72D962367F1",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB1EB21_07E8_803D_419B_11A6C1AF20FF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2F95A7_0878_8005_416F_87CCBAE1869E",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B20810E_4D22_6237_41B2_26BF562197DC",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B20610E_4D22_6237_41CE_39B7824F26EC",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EAD6F8_4D2F_EFDB_41C6_5069A9137A82_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B20210E_4D22_6237_41BD_A676F5E23943",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB29F55_07E8_801A_4141_2E5D913FD1FC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2CF5A7_0878_8005_4192_BC1CFE964495",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B25610E_4D22_6237_41C3_0FCA90CDCB31",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EADF2B_4D2E_1E7E_4195_AA759BA0C317_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B25310E_4D22_6237_41BC_1436855EB467",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B22610E_4D22_6237_41CC_68BA78AE7008",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B21C10E_4D22_6237_41C0_9B396C781D28",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B21910E_4D22_6237_41B9_BA363E5DCF82",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B21610E_4D22_6237_41C0_338D3CD4C331",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_412DA33D_4D2D_E655_41D0_B3404D7E3162_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B21310E_4D22_6237_41CD_6FF9EC634ACE",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B27810E_4D22_6237_41D2_87E6D6800D1E",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B27410E_4D22_6237_41C5_B243393B4C56",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B27210E_4D22_6237_41D1_CF186FEC1839",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46EB8AD4_4D2F_E62B_41CC_55788689A5FF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_59CB967F_4E15_F122_41D0_5F490238335A",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_566DB64B_4D6E_2E3D_41C1_02C5B96AD69C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5166A603_4D62_6E2D_41D0_974A95270EB1",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D8BEB85_07E8_80FA_419A_45B7CF05482F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_150AF020_081B_803A_417B_44B9AA2D4B14",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2D95A7_0878_8005_4193_B75B9628D958",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB85765_07E8_803A_4168_848F56013084_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2E65A7_0878_8005_415D_D1BA083AB3B7",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0DB10794_07E8_801B_418A_23648147084C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_150A7020_081B_803A_4174_89ABE78BD194",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_40608D34_4CE3_E26B_419A_8B74D386E230_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5E4AFC3D_4D22_6255_41BB_36269F3F6ADA",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B26F10E_4D22_6237_41B1_A1BD01CFED31",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B26510E_4D22_6237_41C4_E82A73F1B1B4",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B26310E_4D22_6237_41D0_3C010A9AE9A2",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_41B582F1_4D2F_E7ED_41C2_CA10EECF3D56_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5B25810E_4D22_6237_418A_C4478BC55902",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B1005A7_0878_8005_419C_AB3D10CB055A",
 "frameDuration": 41,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0D8ADAD6_07E9_8007_4191_091CABBB1289_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ],
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_2B1085A7_0878_8005_4164_30FDBA453DE7",
 "frameDuration": 41,
 "colCount": 4
},
{
 "id": "IconButton_289C4E30_0828_801B_419A_417103D64582",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_289C4E30_0828_801B_419A_417103D64582.png",
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "height": 30,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "click": "if(!this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7.get('visible')){ this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, true, 0, this.effect_29CD66A0_0818_803B_4190_934A6AEE0753, 'showEffect', false) } else { this.setComponentVisibility(this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7, false, 0, this.effect_29CD16A0_0818_803B_419B_E05D80544E29, 'hideEffect', false) }",
 "pressedIconURL": "skin/IconButton_289C4E30_0828_801B_419A_417103D64582_pressed.png",
 "class": "IconButton",
 "data": {
  "name": "Button37510"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "horizontalAlign": "center",
 "cursor": "hand"
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_17318523_0868_803D_4196_4BE8427F4E1F",
  "this.Container_17B70E0B_0828_800E_4158_C2B87DA9DAE7",
  "this.Container_20AA0897_0828_8005_4198_75B2E94D10DC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_17314523_0868_803D_4191_5BF2ACF38BAA], 'gyroscopeAvailable'); this.playList_5AAFA76A_4E0C_5F2D_41D0_1514C8537B5D.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_17312523_0868_803D_4192_FFDC412A7D19,this.Button_17319523_0868_803D_415C_F1EEA314AB4B].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 20,
 "buttonToggleFullscreen": [
  "this.Button_17312523_0868_803D_4192_FFDC412A7D19",
  "this.Button_17319523_0868_803D_415C_F1EEA314AB4B"
 ],
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "defaultVRPointer": "laser",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "class": "Player",
 "buttonToggleMute": "this.Button_17317523_0868_803D_4185_1CCDD912D023",
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "gap": 10,
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Player456"
 },
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "horizontalAlign": "left"
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
