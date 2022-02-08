const grid = $("#grid").data("kendoGrid");

let kitties = [
  {
    kittyName: "Charmmykitty",
    age: "08",
    flower: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
  },
  {
    kittyName: "Embercat",
    age: "02",
    flower: "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
  },
  {
    kittyName: "Kittay",
    age: "14",
    flower: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
  }
]

$(function(){
  $("#grid").kendoGrid({

      columns: [
        {
          field: "kittyName",
          title: "Kitty Name",
          template: "<button id='#= kittyName #'><img src='#= flower #' />#= kittyName #</div>",
          headerAttributes: { style: "font-size: 24px" }
        },
        {
          field: "age",
          title: "Kitty Age",
          template: "<div id='age'>#= age #</div>",
          headerAttributes: { style: "font-size: 24px" }
        }
      ],

      dataSource: {
        data: kitties
      },

      width: 500,
      scrollable: false,
      sortable: true

  });
})

// const filterKitties = kitties.filter(kitty => {
//   if (kitty.kittyName !== "Charmmykitty") {
//     return kitty;
//   };
// });

const filterKitties = () => {
  kitties = [
    {
      kittyName: "Charmmykitty2",
      age: "08",
      flower: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
    },
    {
      kittyName: "Embercat2",
      age: "02",
      flower: "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
    },
    {
      kittyName: "Kittay2",
      age: "14",
      flower: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
    }
  ]
}

// sonarr.filter(user => user.id > 0)

$(function() {
  const buttonCharmmy = $("#Charmmykitty");

  buttonCharmmy.on("click", function(e) {
    console.log("charmmy button clicked");

    kitties = filterKitties();
  });
});

// $(function() {
//   const undoBtn = $("#undoBtn");

//   undoBtn.on("click", function(e) {
//     console.log("undo button clicked");

//     let kitties = [
//       {
//         kittyName: "Charmmykitty",
//         age: "08",
//         flower: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
//       },
//       {
//         kittyName: "Embercat",
//         age: "02",
//         flower: "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
//       },
//       {
//         kittyName: "Kittay",
//         age: "14",
//         flower: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
//       }
//     ]
//   });
// });