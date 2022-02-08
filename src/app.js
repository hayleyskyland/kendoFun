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

const deleteRowCharmmy = () => {
  let grid = $("#grid").data("kendoGrid");
  grid.removeRow("tr:eq(1)");
}

const deleteRowEmber = () => {
  let grid = $("#grid").data("kendoGrid");
  grid.removeRow("tr:eq(2)");
}

const deleteRowKittay = () => {
  let grid = $("#grid").data("kendoGrid");
  grid.removeRow("tr:eq(3)");
}

// helper - click individual buttons

const clickCharmmy = () => {
  const grid = $("#grid").data("kendoGrid");

  console.log('deleted:', 'Charmmykitty');

  deleteRowCharmmy();
  deleteCharmmyBtn.hide();
  $.cookie("deletedCharmmy", "yes");

  console.log('deletion confirmed:', $.cookie("deletedCharmmy"));
};

const clickEmber = () => {
  const grid = $("#grid").data("kendoGrid");

  console.log('deleted:', 'Embercat');

  grid.removeRow("tr:eq(2)");
  deleteEmberBtn.hide();
  $.cookie("deletedEmber", "yes", { "expires": 7 });

  console.log('deletion confirmed:', $.cookie("deletedEmber"));
};

const clickKittay = () => {
  const grid = $("#grid").data("kendoGrid");

  console.log('deleted:', 'Kittay');

  grid.removeRow("tr:eq(3)");
  deleteKittayBtn.hide();
  $.cookie("deletedKittay", "yes", { "expires": 7 });

  console.log('deletion confirmed:', $.cookie("deletedKittay"));
};

// call all click functions

$(function() {
  const buttonCharmmy = $("#Charmmykitty");
  const buttonEmber = $("#Embercat");
  const buttonKittay = $("#Kittay");

  buttonCharmmy.on("click", function(e) {
    clickCharmmy();
  });

  buttonEmber.on("click", function(e) {
    clickEmber();
  });

  buttonKittay.on("click", function(e) {
    clickKittay();
  });
});

// delete dropdown

$(function() {

  deleteCharmmyBtn.on("click", function(e) {
    clickCharmmy();
  });

  deleteEmberBtn.on("click", function(e) {
    clickEmber();
  });

  deleteKittayBtn.on("click", function(e) {
    clickKittay();
  });

});

// call cookies

$(function() {
  if ($.cookie("deletedCharmmy") === "yes") {
    deleteRowCharmmy();
  };

  if ($.cookie("deletedEmber") === "yes") {
    deleteRowEmber();
  };

  if ($.cookie("deletedKittay") === "yes") {
    deleteRowKittay();
  };

  if (($.cookie("deletedCharmmy") === "yes")
    && ($.cookie("deletedEmber") === "yes")
    && ($.cookie("deletedCharmmy") === "yes")
  ) {
  }
});

//////////// UNDO BUTTON ////////////

$(function() {
  const undoBtn = $("#undoBtn");

  undoBtn.on("click", function(e) {
    console.log('clicked undo');

    $.cookie("deletedCharmmy", "no", { "expires": 7 });
    $.cookie("deletedEmber", "no", { "expires": 7 });
    $.cookie("deletedKittay", "no", { "expires": 7 });
  });
});
