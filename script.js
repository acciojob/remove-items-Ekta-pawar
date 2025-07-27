//your JS code here. If required.
function removeColor() {
  const section = document.querySelector("#colorSelect");
  const selectedIndex = section.selectedIndex;
  if (selectedIndex !== -1) {
    section.remove(selectedIndex);
  }
}
