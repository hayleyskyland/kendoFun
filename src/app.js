"use strict";

let kitties = []

const fetchKitties = () => {
  fetch("./src/data.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    // console.log(data);
    kitties = data.kitties;
    // console.log(kitties);
  })
}

fetchKitties();

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
  // let grid = $("#grid").data("kendoGrid");
  // grid.removeRow(`tr:eq(${row})`);
  hide([btn]);

  const index = kitties.findIndex(cat => cat.name === kitty);

  console.log("index:", index);

  if (index != -1) {
    kitties.splice(index, 1);
    $("#grid").data("kendoGrid").dataSource.data(kitties);
  }
}

// helper - click individual buttons

const clickKitty = (kitty, btn, cookie) => {
  deleteRow(btn, kitty);
  $.cookie(cookie, "yes");

  console.log('deleted:', kitty);
  // console.log('deletion confirmed:', $.cookie(cookie));
};

// call all click functions

$(function() {
  const buttonCharmmy = $("#Charmmykitty");
  const buttonEmber = $("#Embercat");
  const buttonKittay = $("#Kittay");

  buttonCharmmy.on("click", function(e) {
    clickKitty('Charmmykitty', deleteCharmmyBtn, 'deletedCharmmy');
  });

  buttonEmber.on("click", function(e) {
    clickKitty('Embercat', deleteEmberBtn, 'deletedEmber');
  });

  buttonKittay.on("click", function(e) {
    clickKitty('Kittay', deleteKittayBtn, 'deletedKittay');
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
  const undoBtn = $("#undoBtn");

  undoBtn.on("click", function(e) {
    $.cookie("deletedCharmmy", "no", { "expires": 7 });
    $.cookie("deletedEmber", "no", { "expires": 7 });
    $.cookie("deletedKittay", "no", { "expires": 7 });

    fetchKitties();
    console.log("undo kitties:", kitties);

    show([deleteCharmmyBtn, deleteEmberBtn, deleteKittayBtn]);

    console.log('undo clicked');

    window.reload();
  });
});
