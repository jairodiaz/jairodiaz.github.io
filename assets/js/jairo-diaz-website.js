$(document).ready(function(){
  $('.player').YTPApplyFilters({
     blur: 0
  })

  $('.testimonials-3col .t-item blockquote p').readmore({
    collapsedHeight: 130,
    lessLink: '<small class="readmore-link">Close</small>',
    moreLink: '<small class="readmore-link">Read more...</small>'
  });

  $('#services.ft-cards .card-content-text').readmore({
    collapsedHeight: 70,
    lessLink: '<small class="readmore-link">Close</small>',
    moreLink: '<small class="readmore-link">Read more...</small>'
  });

  $('.ft-cards .ft-item a[data-tab="tab1"]').click(function (e) {
    $('.ft-tabs a[href="#tab1"]').tab('show');
  })
  $('.ft-cards .ft-item a[data-tab="tab2"]').click(function (e) {
    $('.ft-tabs a[href="#tab2"]').tab('show');
  })
  $('.ft-cards .ft-item a[data-tab="tab3"]').click(function (e) {
    $('.ft-tabs a[href="#tab3"]').tab('show');
  })

});
