const listItems = document.querySelectorAll("li");

listItems.forEach(item => {
  item.addEventListener("mouseover", function() {
    listItems.forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.style.filter = "blur(1.5px)";
      }
    });
  });

  item.addEventListener("mouseout", function() {
    listItems.forEach(otherItem => {
      otherItem.style.filter = "none";
    });
  });
});
