//////////// GLOBAL VARIABLES ////////////

const grid = $("#grid");

const refreshNotice = $("#refreshNotice");

const deleteCharmmyBtn = $("#deleteCharmmy");
const deleteEmberBtn = $("#deleteEmber");
const deleteKittayBtn = $("#deleteKittay");

const undoBtn = $("#undoBtn");

//////////// GRID INFO VARIABLES ////////////

// data

"use strict";

let kitties = []

// const fetchKitties = () => {
  fetch("./src/data.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    kitties = data.kitties;
  });
// };

// fetchKitties();

// columns

const columns = [
  {
    field: "name",
    title: "Kitty Name",
    template: "<button id='#= name #'><img src='#= flower #' />#= name #</div>",
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
  grid.kendoGrid({

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

// helpers - hide/show

const hide = (elements) => {
  elements.forEach(element => {
    element.hide();
  });
};

const show = (elements) => {
  elements.forEach(element => {
    element.show();
  });
};

// helper - delete individual rows

const deleteRow = (btn, kitty) => {
  // let grid = grid.data("kendoGrid");
  // grid.removeRow(`tr:eq(${row})`);
  hide([btn]);

  undoBtn.removeClass('hidden');

  const index = kitties.findIndex(cat => cat.name === kitty);

  console.log("index:", index);

  if (index != -1) {
    kitties.splice(index, 1);
    grid.data("kendoGrid").dataSource.data(kitties);
  }
}

// helper - click individual buttons

const clickKitty = (kitty, btn, cookie) => {
  deleteRow(btn, kitty);
  $.cookie(cookie, "yes");

  console.log('deleted:', kitty);
};

// call all click functions

$(function() {
  const buttonCharmmy = $("#Charmmykitty");
  const buttonEmber = $("#Embercat");
  const buttonKittay = $("#Kittay");

  buttonCharmmy.on("click", function(e) {
    alert("You clicked Charmmykitty!");
    // clickKitty('Charmmykitty', deleteCharmmyBtn, 'deletedCharmmy');
  });

  buttonEmber.on("click", function(e) {
    alert("You clicked Embercat!");
    // clickKitty('Embercat', deleteEmberBtn, 'deletedEmber');
  });

  buttonKittay.on("click", function(e) {
    alert("You clicked Kittay!");
    // clickKitty('Kittay', deleteKittayBtn, 'deletedKittay');
  });
});

// delete dropdown

$(function() {
  deleteCharmmyBtn.on("click", function(e) {
    clickKitty('Charmmykitty', deleteCharmmyBtn, 'deletedCharmmy');
  });

  deleteEmberBtn.on("click", function(e) {
    clickKitty('Embercat', deleteEmberBtn, 'deletedEmber');
  });

  deleteKittayBtn.on("click", function(e) {
    clickKitty('Kittay', deleteKittayBtn, 'deletedKittay');
  });
});

// call cookies

$(function() {
  if ($.cookie("deletedCharmmy") === "yes") {
    deleteRow(deleteCharmmyBtn, "Charmmykitty");
  };

  if ($.cookie("deletedEmber") === "yes") {
    deleteRow(deleteEmberBtn, "Embercat");
  };

  if ($.cookie("deletedKittay") === "yes") {
    deleteRow(deleteKittayBtn, "Kittay");
  };
});

//////////// UNDO BUTTON ////////////

$(function() {
  undoBtn.on("click", function(e) {
    $.cookie("deletedCharmmy", "no", { "expires": 7 });
    $.cookie("deletedEmber", "no", { "expires": 7 });
    $.cookie("deletedKittay", "no", { "expires": 7 });

    kitties = kitties.push([
      {
        "name": "Charmmykitty",
        "age": "08",
        "flower": "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
      },
      {
        "name": "Embercat",
        "age": "02",
        "flower": "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
      },
      {
        "name": "Kittay",
        "age": "14",
        "flower": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
      }
    ]);

    console.log("undo kitties:", kitties);

    show([deleteCharmmyBtn, deleteEmberBtn, deleteKittayBtn]);

    refreshNotice.removeClass("hidden");
    undoBtn.addClass("hidden");

    console.log('undo clicked');
  });
});
