"use strict";

let kitties = []

fetch("./src/data.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log('test')
    console.log(data);
    kitties = data.kitties;
    // console.log(kitties);
  })

//////////// GLOBAL VARIABLES ////////////

const deleteCharmmyBtn = $("#deleteCharmmy");
const deleteEmberBtn = $("#deleteEmber");
const deleteKittayBtn = $("#deleteKittay");

//////////// GRID INFO VARIABLES ////////////

// data

// const kitties = [
// ];

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
  console.log('this array should not be empty:', kitties)
  
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

// helpers - hide/show

const hide = (elements) => {
  elements.forEach(element => {
    element.addClass("hidden");
  });
};

const show = (elements) => {
  elements.forEach(element => {
    element.removeClass("hidden");
  });
};

// helper - delete individual rows

const deleteRow = (btn, row) => {
  let grid = $("#grid").data("kendoGrid");
  grid.removeRow(`tr:eq(${row})`);
  hide([btn]);
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
    $.cookie("deletedCharmmy", "no", { "expires": 7 });
    $.cookie("deletedEmber", "no", { "expires": 7 });
    $.cookie("deletedKittay", "no", { "expires": 7 });

    show([deleteCharmmyBtn, deleteEmberBtn, deleteKittayBtn]);

    console.log('undo clicked')
  });
});
