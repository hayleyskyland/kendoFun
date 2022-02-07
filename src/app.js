const kitties = [
  {
    name: "Charmmykitty",
    age: "8",
    flower: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
  },
  {
    name: "Embercat",
    age: "2",
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
          template: "<div class='name'><img src='#= flower #' />#= name #</div>"
        },
        {
          field: "age",
          title: "Kitty Age",
          template: "<div class='age'>#= age #</div>"
        }
      ],

      dataSource: {
        data: kitties
      },

      width: 400,
      scrollable: true

  });
})