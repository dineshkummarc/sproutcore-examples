// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls */

PhoneControls.categoryController = SC.ObjectController.create(
/** @scope PhoneControls.categoryController.prototype */ {
  contentBinding: "PhoneControls.categoriesController.selection",
  contentBindingDefault: SC.Binding.single(),
  
  nowShowing: "welcome",

  delayShow: function() {
    // wait a moment before loading to let things finish...
    this.invokeLater(this.set, 50, "nowShowing", this.get("show") || "welcome");
  }.observes("show")
});
