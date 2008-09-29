jQuery Spotlight Plugin
=======================

This is a plugin that allows the creation of a spotlighted content module. An example of this in production would be the front page of the Fandango site: http://www.fandango.com.

You can also see an example here: http://examples.squishtech.com/jquery_spotlight


Usage
=====
  $('#spotlight').spotlight([options]);

  If you'd like to manually stop/start a spotlight module:
    $('#spotlight').spotlight().stop();
    $('#spotlight').spotlight().start();

  Multiple spotlights can be run simultaneously.

Options
=======
  featureItems  - Class name for featured items
  itemContent   - Class name to search the featured item for from which to retrieve the featured content
  feature       - Class name of the main featured content container
  featuredClass - Class name to add to a featured item when it is selected
  displayTime   - Number of seconds to show a feature
  autoReStart   - After a user hovers over an item, should the rotation be restarted automatically?
