(function($) {
  $.fn.spotlight = function(options) {
    if (this.length && (spotlight = $.data(this[0], 'spotlight'))) {
      return spotlight;
    }

    return this.each(function() {
      $.data(this, 'spotlight', new $.spotlight.init(this, options));
    });
  };

  $.spotlight = {
    defaults: {
      featureItems  : '.spotlight_item',
      itemContent   : '.featured_content',
      feature       : '.spotlight_feature',    
      featuredClass : 'on',
      displayTime   : 3,
      autoReStart   : true
    },

    init: function(element, settings) {
      var self = this;

      this.settings = $.extend({}, $.spotlight.defaults, settings);

      if (this.settings.indicator != '')
        this.arrow = $(this.settings.indicator);

      this.features = $(element).find(this.settings.featureItems);
      this.featureContainer = $(element).find(this.settings.feature);

      this.features
        .each(function(idx) {
          this.idx = idx;
          this.featured = $(this).find(self.settings.itemContent).remove().html();
        })
        .hover(
          function() { self.show(this.idx); },
          function() { if (self.settings.autoReStart) self.start(); }
        );

      this.show(0);
      this.start();
    }
  };

  $.extend($.spotlight.init.prototype, {
    currentIdx  : 0,
    showing     : null,
    running     : false,
    interval    : null,

    show: function(idx) {
      this.stop();

      if (this.showing)
        this.showing.removeClass(this.settings.featuredClass);

      this.showing = this.features.eq(idx);
      this.currentIdx = idx;
      this.showing.addClass(this.settings.featuredClass);

      if (this.featureContainer)
        this.featureContainer.html(this.showing[0].featured);
    },

    start: function() {
      var self = this;
      self.running = true;
      self.interval = setTimeout(function() { self.next(); }, self.settings.displayTime * 1000);
    },

    stop: function() {
      this.running = false;
      clearTimeout(this.interval);
    },

    next: function(override) {
      if (this.running || override) {
        var idx = this.currentIdx + 1;
        if (idx >= this.features.size()) idx = 0;
        this.show(idx);
        this.start();
      }
    }
  });
})(jQuery);
