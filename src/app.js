const kitties = [
  {
    name: "Charmmykitty",
    age: "08",
    flower: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
  },
  {
    name: "Embercat",
    age: "02",
    flower: "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
  },
  {
    name: "Kittay",
    age: "13",
    flower: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
  }
]

$(function(){
  $("#grid").kendoGrid({

      columns: [
        {
          field: "name",
          title: "Kitty Name",
          template: "<button id='name'><img src='#= flower #' />#= name #</div>",
          headerAttributes: {
            "class": "table-header-cell k-text-24",
            style: "font-size: 24px"
          }
        },
        {
          field: "age",
          title: "Kitty Age",
          template: "<div id='age'>#= age #</div>",
          headerAttributes: {
            "class": "table-header-cell k-text-24",
            style: "font-size: 24px"
          }
        }
      ],

      dataSource: {
        data: kitties
        // pageSize: 1
      },

      width: 500,
      scrollable: false,
      // pageable: true,
      // groupable: true,
      sortable: true

  });
})

$(function() {
  $("button").on("click", function(e) {
      alert("test");
  });
})