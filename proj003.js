 <script>
function move() {
  var g = $("#s2 option").filter(":selected").val();
  if (g == undefined) {
    return;
  }
  $("#s2 option[value='" + g + "']").remove();
  $('#s3').append($('<option/>', { 
      value: "1",
      text : "tree.mov 100 MB"
    }));
}
function del() {
  var g = $("#s2 option").filter(":selected").val();
  if (g == undefined) {
    return;
  }
  $("#s2 option[value='" + g + "']").remove();
}
function start50() {
  var g = guid();
  $('#s2').append($('<option/>', { 
      value: g,
      text : g + "/tree.mov 50 MB"
    }));
}
function start100() {
  var g = guid();
  $('#s2').append($('<option/>', { 
      value: g,
      text : g + "/tree.mov 100 MB"
    }));
}
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
    </script>