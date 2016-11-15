/**
 * Created by ethan on 16-11-15.
 */
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'bui.scrollbar';
}
angular.module('bui.scrollbar', []).directive('buiScrollbar', [function () {
  return {
    restrict: 'A',
    scope: {
      config: '=?',
      onCreate: '&?',
      onInit: '&?',
      onScrollStart: '&?',
      onScroll: '&?',
      whileScrolling: '&?',
      onTotalScroll: '&?',
      onTotalScrollBack: '&?',
      onTotalScrollOffset: '@?',
      onTotalScrollBackOffset: '@?',
      alwaysTriggerOffsets: '@?',
      onOverflowY: '&?',
      onOverflowX: '&?',
      onOverflowYNone: '&?',
      onOverflowXNone: '&?',
      onBeforeUpdate: '&?',
      onUpdate: '&?',
      onImageLoad: '&?',
      onSelectorChange: '&?'
    },
    link: function (scope, element, attr) {
      var config = {mouseWheel: {}, scrollButtons: {}, keyboard: {}, advanced: {}, callbacks: {}};
      if (attr.axis) {
        config.axis = attr.axis;
      }
      if (attr.scrollbarPosition) {
        config.scrollbarPosition = attr.scrollbarPosition;
      }
      if (attr.scrollInertia || attr.scrollInertia == 0) {
        config.scrollInertia = attr.scrollInertia;
      }
      if (attr.autoDraggerLength) {
        config.autoDraggerLength = Boolean(attr.autoDraggerLength);
      }
      if (attr.autoHideScrollbar) {
        config.autoHideScrollbar = Boolean(attr.autoHideScrollbar);
      }
      if (attr.autoExpandScrollbar) {
        config.autoExpandScrollbar = Boolean(attr.autoExpandScrollbar);
      }
      if (attr.alwaysShowScrollbar || attr.alwaysShowScrollbar == 0) {
        config.alwaysShowScrollbar = attr.alwaysShowScrollbar;
      }
      if (attr.snapAmount || attr.snapAmount == 0) {
        config.snapAmount = attr.snapAmount;
      }
      if (attr.snapOffset || attr.snapOffset == 0) {
        config.snapOffset = attr.snapOffset;
      }
      if (attr.mwEnable) {
        config.mouseWheel.enable = Boolean(attr.mwEnable);
      }
      if (attr.mwScrollAmount || attr.mwScrollAmount == 0) {
        config.mouseWheel.scrollAmount = attr.mwScrollAmount;
      }
      if (attr.mwAxis) {
        config.mouseWheel.axis = attr.mwAxis;
      }
      if (attr.mwPreventDefault) {
        config.mouseWheel.preventDefault = Boolean(attr.mwPreventDefault);
      }
      if (attr.mwDeltaFactor || attr.mwDeltaFactor == 0) {
        config.mouseWheel.deltaFactor = attr.mwDeltaFactor;
      }
      if (attr.mwNormalizeDelta) {
        config.mouseWheel.normalizeDelta = attr.mwNormalizeDelta;
      }
      if (attr.mwDisableOver) {
        config.mouseWheel.disableOver = attr.mwDisableOver.split(',');
      }
      if (attr.sbEnable) {
        config.scrollButtons.enable = Boolean(attr.sbEnable);
      }
      if (attr.sbScrollAmount || attr.sbScrollAmount == 0) {
        config.scrollButtons.scrollAmount = attr.sbScrollAmount;
      }
      if (attr.sbScrollType) {
        config.scrollButtons.scrollType = attr.sbScrollType;
      }
      if (attr.sbTabindex || attr.sbTabindex == 0) {
        config.scrollButtons.tabindex = attr.sbTabindex;
      }
      if (attr.keyEnable) {
        config.keyboard.enable = Boolean(attr.keyEnable);
      }
      if (attr.keyScrollAmount || attr.keyScrollAmount == 0) {
        config.keyboard.scrollAmount = attr.keyScrollAmount;
      }
      if (attr.keyScrollType) {
        config.keyboard.scrollType = attr.keyScrollType;
      }
      if (attr.adAutoExpandHorizontalScroll) {
        config.advanced.autoExpandHorizontalScroll = Boolean(attr.adAutoExpandHorizontalScroll);
      }
      if (attr.adUpdateOnContentResize) {
        config.advanced.updateOnContentResize = Boolean(attr.adUpdateOnContentResize);
      }
      if (attr.adUpdateOnImageLoad) {
        config.advanced.updateOnImageLoad = Boolean(attr.adUpdateOnImageLoad);
      }
      if (attr.adAutoScrollOnFocus) {
        config.advanced.autoScrollOnFocus = attr.adAutoScrollOnFocus;
      }
      if (attr.adUpdateOnSelectorChange) {
        config.advanced.updateOnSelectorChange = attr.adUpdateOnSelectorChange;
      }
      if (attr.adextraDraggableSelectors) {
        config.advanced.extraDraggableSelectors = attr.adextraDraggableSelectors;
      }
      if (attr.adAutoUpdateTimeout || attr.adAutoUpdateTimeout == 0) {
        config.advanced.autoUpdateTimeout = attr.adAutoUpdateTimeout;
      }
      if (attr.theme) {
        config.theme = attr.theme;
      }
      config = angular.extend({}, config, scope.config || {});
      if (scope.onCreate) {
        config.callbacks.onCreate = scope.onCreate;
      }
      if (scope.onInit) {
        config.callbacks.onInit = scope.onInit;
      }
      if (scope.onScrollStart) {
        config.callbacks.onScrollStart = scope.onScrollStart;
      }
      if (scope.onScroll) {
        config.callbacks.onScroll = scope.onScroll;
      }
      if (scope.whileScrolling) {
        config.callbacks.whileScrolling = scope.whileScrolling;
      }
      if (scope.onTotalScroll) {
        config.callbacks.onTotalScroll = scope.onTotalScroll;
      }
      if (scope.onTotalScrollBack) {
        config.callbacks.onTotalScrollBack = scope.onTotalScrollBack;
      }
      if (scope.onTotalScrollOffset || scope.onTotalScrollOffset == 0) {
        config.callbacks.onTotalScrollOffset = scope.onTotalScrollOffset;
      }
      if (scope.onTotalScrollBackOffset || scope.onTotalScrollBackOffset == 0) {
        config.callbacks.onTotalScrollBackOffset = scope.onTotalScrollBackOffset;
      }
      if (scope.alwaysTriggerOffsets || scope.alwaysTriggerOffsets == 0) {
        config.callbacks.alwaysTriggerOffsets = scope.alwaysTriggerOffsets;
      }
      if (scope.onOverflowY) {
        config.callbacks.onOverflowY = scope.onOverflowY;
      }
      if (scope.onOverflowX) {
        config.callbacks.onOverflowX = scope.onOverflowX;
      }
      if (scope.onOverflowYNone) {
        config.callbacks.onOverflowYNone = scope.onOverflowYNone;
      }
      if (scope.onOverflowXNone) {
        config.callbacks.onOverflowXNone = scope.onOverflowXNone;
      }
      if (scope.onBeforeUpdate) {
        config.callbacks.onBeforeUpdate = scope.onBeforeUpdate;
      }
      if (scope.onUpdate) {
        config.callbacks.onUpdate = scope.onUpdate;
      }
      if (scope.onImageLoad) {
        config.callbacks.onImageLoad = scope.onImageLoad;
      }
      if (scope.onSelectorChange) {
        config.callbacks.onSelectorChange = scope.onSelectorChange;
      }
      element.mCustomScrollbar(config);
    }
  };
}]);
