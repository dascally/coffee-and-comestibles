import { Popover } from 'bootstrap/dist/js/bootstrap.esm';

const popovers = document.querySelectorAll('.menu-item-info[data-bs-toggle="popover"]');
for (const elt of popovers) {
  new Popover(elt, {
    template: `<div class="popover shadow-sm" role="tooltip">\
    <div class="popover-arrow"></div>\
    <h4 class="popover-header fs-6"></h4>\
    <div class="popover-body"></div>\
    </div>`
  });
}
