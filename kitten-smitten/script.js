<script>
  // Get the elements by their ID
  var popupLink = document.getElementById("popupLink");
  var popupWindow = document.getElementById("popupWindow");
  var closeButton = document.getElementById("closeButton");
  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
</script>  