//////////// GLOBAL VARIABLES ////////////

const deleteCharmmyBtn = $("#deleteCharmmy");
const deleteEmberBtn = $("#deleteEmber");
const deleteKittayBtn = $("#deleteKittay");

//////////// GRID INFO VARIABLES ////////////

// data

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
    age: "14",
    flower: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
  }
]

// columns

const columns = [
  {
    field: "name",
    title: "Kitty Name",
    template: "<button class='dropdown' id='#= name #'><img src='#= flower #' />#= name #</div>",
    headerAttributes: { style: "font-size: 24px" },
    width: 100
  },
  {
    field: "age",
    title: "Kitty Age",
    template: "<div id='age'>#= age #</div>",
    headerAttributes: { style: "font-size: 24px" }
  }
]

//////////// KENDO GRID ////////////

$(function(){
  $("#grid").kendoGrid({

      columns: columns,

      dataSource: {
        data: kitties
      },

      width: 500,
      scrollable: false,
      sortable: true

  });
})

//////////// DELETE ROWS ////////////

// helper - delete individual rows

const deleteRow = (btn, row) => {
  let grid = $("#grid").data("kendoGrid");
  grid.removeRow(`tr:eq(${row})`);
  btn.hide();
}

// helper - click individual buttons

const clickKitty = (kitty, btn, row, cookie) => {
  deleteRow(btn, row);
  $.cookie(cookie, "yes");

  console.log('deleted:', kitty);
  console.log('deletion confirmed:', $.cookie(cookie));
};

// call all click functions

$(function() {
  const buttonCharmmy = $("#Charmmykitty");
  const buttonEmber = $("#Embercat");
  const buttonKittay = $("#Kittay");

  buttonCharmmy.on("click", function(e) {
    clickKitty('Charmmykitty', deleteCharmmyBtn, 1, 'deletedCharmmy');
  });

  buttonEmber.on("click", function(e) {
    clickKitty('Embercat', deleteEmberBtn, 2, 'deletedEmber');
  });

  buttonKittay.on("click", function(e) {
    clickKitty('Kittay', deleteKittayBtn, 3, 'deletedKittay');
  });
});

// delete dropdown

$(function() {
  deleteCharmmyBtn.on("click", function(e) {
    clickKitty('Charmmykitty', deleteCharmmyBtn, 1, 'deletedCharmmy');
  });

  deleteEmberBtn.on("click", function(e) {
    clickKitty('Embercat', deleteEmberBtn, 2, 'deletedEmber');
  });

  deleteKittayBtn.on("click", function(e) {
    clickKitty('Kittay', deleteKittayBtn, 3, 'deletedKittay');
  });
});

// call cookies

$(function() {
  if ($.cookie("deletedCharmmy") === "yes") {
    deleteRow(deleteCharmmyBtn, 1);
  };

  if ($.cookie("deletedEmber") === "yes") {
    deleteRow(deleteEmberBtn, 2);
  };

  if ($.cookie("deletedKittay") === "yes") {
    deleteRow(deleteKittayBtn, 3);
  };
});

//////////// UNDO BUTTON ////////////

$(function() {
  const undoBtn = $("#undoBtn");

  undoBtn.on("click", function(e) {
    console.log('clicked undo');

    $.cookie("deletedCharmmy", "no", { "expires": 7 });
    $.cookie("deletedEmber", "no", { "expires": 7 });
    $.cookie("deletedKittay", "no", { "expires": 7 });

    deleteCharmmyBtn.show();
    deleteEmberBtn.show();
    deleteKittayBtn.show();
  });
});
