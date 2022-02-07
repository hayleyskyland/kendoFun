const kitties = [
  {
    KittyName: "Charmmykitty",
    KittyAge: "8",
    FavoriteColor: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
  },
  {
    KittyName: "Embercat",
    KittyAge: "2",
    FavoriteColor: "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
  },
  {
    KittyName: "Kittay",
    KittyAge: "13",
    FavoriteColor: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
  }
]

$(function(){
  $("#grid").kendoGrid({

      columns: [
        {
          field: "KittyName",
          title: "Kitty Name"
        },
        {
          field: "KittyAge",
          title: "Kitty Age"
        },
        {
          field: "FavoriteColor",
          title: "Favorite Color",
          template: "<img src='#= FavoriteColor #' />"
        }
      ],

      dataSource: {
        data: kitties
      }

  });
})