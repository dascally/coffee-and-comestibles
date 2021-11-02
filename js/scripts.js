const popovers = document.querySelectorAll('.menu-item-info[data-bs-toggle="popover"]');
for (const elt of popovers) {
  new bootstrap.Popover(elt, {
    template: `<div class="popover" role="tooltip">\
    <div class="popover-arrow"></div>\
    <h4 class="popover-header fs-6"></h4>\
    <div class="popover-body"></div>\
    </div>`
  });
}
