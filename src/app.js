$(function(){
  $("#grid").kendoGrid({
    
      columns: [{
          field: "KittyName",
          title: "Kitty Name"
      },
      {
          field: "KittyAge",
          title: "Kitty Age"
      }],

      dataSource: {
          data: [{
              KittyName: "Charmmykitty",
              KittyAge: "8"
          },
          {
              KittyName: "Embercat",
              KittyAge: "2"
          },
          {
              KittyName: "Kittay",
              KittyAge: "13"
          }]
      }
  });
})