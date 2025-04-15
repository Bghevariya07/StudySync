import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵpropertyInterpolate
} from "./chunk-ELZBIMTQ.js";
import "./chunk-AQYIT73X.js";
import "./chunk-YHCV7DAQ.js";

// node_modules/@daypilot/daypilot-lite-angular/fesm2015/daypilot-daypilot-lite-angular.mjs
var DayPilot;
(function(DayPilot2) {
  class CalendarPropsAndEvents {
  }
  DayPilot2.CalendarPropsAndEvents = CalendarPropsAndEvents;
  class CalendarConfig extends CalendarPropsAndEvents {
  }
  DayPilot2.CalendarConfig = CalendarConfig;
  class Calendar extends CalendarPropsAndEvents {
  }
  DayPilot2.Calendar = Calendar;
  class Column {
  }
  DayPilot2.Column = Column;
  class MonthPropsAndEvents {
  }
  DayPilot2.MonthPropsAndEvents = MonthPropsAndEvents;
  class MonthConfig extends MonthPropsAndEvents {
  }
  DayPilot2.MonthConfig = MonthConfig;
  class Month extends MonthPropsAndEvents {
  }
  DayPilot2.Month = Month;
  class NavigatorPropsAndEvents {
  }
  DayPilot2.NavigatorPropsAndEvents = NavigatorPropsAndEvents;
  class NavigatorConfig extends NavigatorPropsAndEvents {
  }
  DayPilot2.NavigatorConfig = NavigatorConfig;
  class Navigator extends NavigatorPropsAndEvents {
  }
  DayPilot2.Navigator = Navigator;
  class Locale {
  }
  DayPilot2.Locale = Locale;
  class MenuPropsAndEvents {
  }
  DayPilot2.MenuPropsAndEvents = MenuPropsAndEvents;
  class MenuConfig extends MenuPropsAndEvents {
  }
  DayPilot2.MenuConfig = MenuConfig;
  class Menu extends MenuPropsAndEvents {
  }
  DayPilot2.Menu = Menu;
  class MenuBar {
  }
  DayPilot2.MenuBar = MenuBar;
  class SwitcherPropsAndEvents {
  }
  DayPilot2.SwitcherPropsAndEvents = SwitcherPropsAndEvents;
  class SwitcherConfig extends SwitcherPropsAndEvents {
  }
  DayPilot2.SwitcherConfig = SwitcherConfig;
  class Switcher extends SwitcherPropsAndEvents {
  }
  DayPilot2.Switcher = Switcher;
  class Date2 {
  }
  DayPilot2.Date = Date2;
  class DayPilotDateCache {
  }
  DayPilot2.DayPilotDateCache = DayPilotDateCache;
  class Util {
  }
  DayPilot2.Util = Util;
  class ColorUtil {
  }
  DayPilot2.ColorUtil = ColorUtil;
  class Http {
  }
  DayPilot2.Http = Http;
  class Duration {
  }
  DayPilot2.Duration = Duration;
  class Event {
  }
  DayPilot2.Event = Event;
  class Selection {
  }
  DayPilot2.Selection = Selection;
  class ModalPropsAndEvents {
  }
  DayPilot2.ModalPropsAndEvents = ModalPropsAndEvents;
  class ModalConfig extends ModalPropsAndEvents {
  }
  DayPilot2.ModalConfig = ModalConfig;
  class Modal extends ModalPropsAndEvents {
  }
  DayPilot2.Modal = Modal;
  class ModalAlertConfig extends ModalConfig {
  }
  DayPilot2.ModalAlertConfig = ModalAlertConfig;
  class ModalConfirmConfig extends ModalConfig {
  }
  DayPilot2.ModalConfirmConfig = ModalConfirmConfig;
  class ModalPromptConfig extends ModalConfig {
  }
  DayPilot2.ModalPromptConfig = ModalPromptConfig;
  class ModalFormConfig extends ModalConfig {
  }
  DayPilot2.ModalFormConfig = ModalFormConfig;
})(DayPilot || (DayPilot = {}));
var DayPilot = {};
if ("undefined" == typeof DayPilot) var DayPilot = {};
if (function() {
  function e(e2) {
    var t2 = DayPilot.Date.Cache.Ticks;
    if (t2[e2]) return DayPilot.Stats.cacheHitsTicks += 1, t2[e2];
    var i2, a2 = new Date(e2), n2 = a2.getUTCMilliseconds();
    i2 = 0 === n2 ? "" : n2 < 10 ? ".00" + n2 : n2 < 100 ? ".0" + n2 : "." + n2;
    var o = a2.getUTCSeconds();
    o < 10 && (o = "0" + o);
    var r = a2.getUTCMinutes();
    r < 10 && (r = "0" + r);
    var s = a2.getUTCHours();
    s < 10 && (s = "0" + s);
    var l = a2.getUTCDate();
    l < 10 && (l = "0" + l);
    var d = a2.getUTCMonth() + 1;
    d < 10 && (d = "0" + d);
    var c = a2.getUTCFullYear();
    if (c <= 0) throw "The minimum year supported is 1.";
    c < 10 ? c = "000" + c : c < 100 ? c = "00" + c : c < 1e3 && (c = "0" + c);
    var u = c + "-" + d + "-" + l + "T" + s + ":" + r + ":" + o + i2;
    return t2[e2] = u, u;
  }
  function t(e2, t2) {
    return !DayPilot.Util.isNullOrUndefined(e2) && !DayPilot.Util.isNullOrUndefined(t2) && e2.toLocaleLowerCase() === t2.toLocaleLowerCase();
  }
  function i(e2) {
    e2 = Math.min(e2, 255), e2 = Math.max(e2, 0);
    var t2 = e2.toString(16);
    return e2 < 16 ? "0" + t2 : t2;
  }
  if ("undefined" == typeof DayPilot.$) {
    "undefined" == typeof DayPilot.Global && (DayPilot.Global = {}), DayPilot.$ = function(e2) {
      return document.getElementById(e2);
    }, Object.defineProperty(DayPilot, "isKhtml", {
      get: function() {
        return "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf("KHTML") !== -1;
      }
    }), DayPilot.mo2 = function(e2, t2) {
      if (t2 = t2 || window.event, "undefined" != typeof t2.offsetX) {
        var i2 = {
          x: t2.offsetX + 1,
          y: t2.offsetY + 1
        };
        if (!e2) return i2;
        for (var a2 = t2.srcElement; a2 && a2 !== e2; ) "SPAN" !== a2.tagName && (i2.x += a2.offsetLeft, a2.offsetTop > 0 && (i2.y += a2.offsetTop - a2.scrollTop)), a2 = a2.offsetParent;
        return a2 ? i2 : null;
      }
      if ("undefined" != typeof t2.layerX) {
        var i2 = {
          x: t2.layerX,
          y: t2.layerY,
          src: t2.target
        };
        if (!e2) return i2;
        for (var a2 = t2.target; a2 && "absolute" !== a2.style.position && "relative" !== a2.style.position; ) a2 = a2.parentNode, DayPilot.isKhtml && (i2.y += a2.scrollTop);
        for (; a2 && a2 !== e2; ) i2.x += a2.offsetLeft, i2.y += a2.offsetTop - a2.scrollTop, a2 = a2.offsetParent;
        return a2 ? i2 : null;
      }
      return null;
    }, DayPilot.mo3 = function(e2, t2) {
      var i2, a2 = DayPilot.page(t2);
      if (a2) {
        if (e2) {
          var n2 = DayPilot.abs(e2);
          if (!n2) throw new Error("no abs");
          i2 = {
            x: a2.x - n2.x,
            y: a2.y - n2.y
          };
        } else i2 = {
          x: a2.x,
          y: a2.y
        };
      } else if (i2 = DayPilot.mo2(e2, t2), !i2) return null;
      return i2.shift = t2.shiftKey, i2.meta = t2.metaKey, i2.ctrl = t2.ctrlKey, i2.alt = t2.altKey, i2;
    }, DayPilot.browser = {}, Object.defineProperty(DayPilot.browser, "hover", {
      get: function() {
        return !window.matchMedia("(any-hover: none)").matches;
      }
    }), DayPilot.touch = {}, DayPilot.page = function(e2) {
      var t2 = e2.changedTouches && e2.changedTouches[0] ? e2.changedTouches[0] : e2;
      return "undefined" != typeof t2.pageX ? {
        x: t2.pageX,
        y: t2.pageY
      } : "undefined" != typeof e2.clientX && document.body && document.documentElement ? {
        x: e2.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        y: e2.clientY + document.body.scrollTop + document.documentElement.scrollTop
      } : null;
    }, DayPilot.abs = function(e2, t2) {
      if (!e2) return null;
      if (e2.getBoundingClientRect) {
        var i2 = DayPilot.absBoundingClientBased(e2);
        if (t2) {
          var a2 = DayPilot.absOffsetBased(e2, false), t2 = DayPilot.absOffsetBased(e2, true);
          i2.x += t2.x - a2.x, i2.y += t2.y - a2.y, i2.w = t2.w, i2.h = t2.h;
        }
        return i2;
      }
      return DayPilot.absOffsetBased(e2, t2);
    }, DayPilot.absBoundingClientBased = function(e2) {
      var t2 = e2.getBoundingClientRect();
      return {
        x: t2.left + window.pageXOffset,
        y: t2.top + window.pageYOffset,
        w: e2.clientWidth,
        h: e2.clientHeight,
        toString: function() {
          return "x:" + this.x + " y:" + this.y + " w:" + this.w + " h:" + this.h;
        }
      };
    }, DayPilot.absOffsetBased = function(e2, t2) {
      for (var i2 = {
        x: e2.offsetLeft,
        y: e2.offsetTop,
        w: e2.clientWidth,
        h: e2.clientHeight,
        toString: function() {
          return "x:" + this.x + " y:" + this.y + " w:" + this.w + " h:" + this.h;
        }
      }; e2.offsetParent; ) e2 = e2.offsetParent, i2.x -= e2.scrollLeft, i2.y -= e2.scrollTop, t2 && (i2.x < 0 && (i2.w += i2.x, i2.x = 0), i2.y < 0 && (i2.h += i2.y, i2.y = 0), e2.scrollLeft > 0 && i2.x + i2.w > e2.clientWidth && (i2.w -= i2.x + i2.w - e2.clientWidth), e2.scrollTop && i2.y + i2.h > e2.clientHeight && (i2.h -= i2.y + i2.h - e2.clientHeight)), i2.x += e2.offsetLeft, i2.y += e2.offsetTop;
      var a2 = DayPilot.pageOffset();
      return i2.x += a2.x, i2.y += a2.y, i2;
    }, DayPilot.isArray = function(e2) {
      return "[object Array]" === Object.prototype.toString.call(e2);
    }, DayPilot.distance = function(e2, t2) {
      return Math.sqrt(Math.pow(e2.x - t2.x, 2) + Math.pow(e2.y - t2.y, 2));
    }, DayPilot.sheet = function() {
      if ("undefined" == typeof window) {
        var e2 = {};
        return e2.add = function() {
        }, e2.commit = function() {
        }, e2;
      }
      var t2 = document.createElement("style");
      t2.setAttribute("type", "text/css"), t2.styleSheet || t2.appendChild(document.createTextNode("")), (document.head || document.getElementsByTagName("head")[0]).appendChild(t2);
      var i2 = !!t2.styleSheet, e2 = {};
      return e2.rules = [], e2.commit = function() {
        i2 && (t2.styleSheet.cssText = this.rules.join("\n"));
      }, e2.add = function(e3, a2, n2) {
        return i2 ? void this.rules.push(e3 + "{" + a2 + "}") : void (t2.sheet.insertRule ? ("undefined" == typeof n2 && (n2 = t2.sheet.cssRules.length), t2.sheet.insertRule(e3 + "{" + a2 + "}", n2)) : t2.sheet.addRule && t2.sheet.addRule(e3, a2, n2));
      }, e2;
    }, DayPilot.gs = function(e2, t2) {
      return window.getComputedStyle(e2, null).getPropertyValue(t2) || "";
    }, DayPilot.StyleReader = function(e2) {
      this.get = function(t2) {
        return e2 ? DayPilot.gs(e2, t2) : null;
      }, this.getPx = function(e3) {
        var t2 = this.get(e3);
        return t2.indexOf("px") === -1 ? void 0 : parseInt(t2, 10);
      };
    }, function() {
      if (!DayPilot.Global.defaultCss) {
        var e2 = DayPilot.sheet();
        e2.add(".calendar_default_main", "border: 1px solid #c0c0c0; font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size: 13px;"), e2.add(".calendar_default_main *, .calendar_default_main *:before, .calendar_default_main *:after", "box-sizing: content-box;"), e2.add(".calendar_default_rowheader_inner,.calendar_default_cornerright_inner,.calendar_default_corner_inner,.calendar_default_colheader_inner,.calendar_default_alldayheader_inner", "color: #333;background: #f3f3f3;"), e2.add(".calendar_default_cornerright_inner", "position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;	border-bottom: 1px solid #c0c0c0;"), e2.add(".calendar_default_direction_rtl .calendar_default_cornerright_inner", "border-right: 1px solid #c0c0c0;"), e2.add(".calendar_default_rowheader_inner", "font-size: 16pt;text-align: right; position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0; padding: 3px;"), e2.add(".calendar_default_direction_rtl .calendar_default_rowheader_inner", "border-right: none;"), e2.add(".calendar_default_corner_inner", "position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;"), e2.add(".calendar_default_direction_rtl .calendar_default_corner_inner", "border-right: none;"), e2.add(".calendar_default_rowheader_minutes", "font-size:10px;vertical-align: super;padding-left: 2px;padding-right: 2px;"), e2.add(".calendar_default_colheader_inner", "position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0; display: flex; align-items: center; justify-content: center; font-size: 13px;"), e2.add(".calendar_default_cell_inner", "position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;border-right: 1px solid #ddd;border-bottom: 1px solid #ddd; background: #f9f9f9;"), e2.add(".calendar_default_cell_business .calendar_default_cell_inner", "background: #fff"), e2.add(".calendar_default_alldayheader_inner", "text-align: center;position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;"), e2.add(".calendar_default_message", "opacity: 0.9; padding: 10px; color: #ffffff;background: #ffa216;"), e2.add(".calendar_default_alldayevent_inner,.calendar_default_event_inner", "color: #333; border: 1px solid #999;"), e2.add(".calendar_default_event_bar", "top: 0px;bottom: 0px;left: 0px;width: 6px;background-color: #9dc8e8;"), e2.add(".calendar_default_event_bar_inner", "position: absolute;width: 6px;background-color: #1066a8;"), e2.add(".calendar_default_alldayevent_inner,.calendar_default_event_inner", 'background: #fff;background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#eeeeee));background: -webkit-linear-gradient(top, #ffffff 0%, #eeeeee);background: -moz-linear-gradient(top, #ffffff 0%, #eeeeee);background: -ms-linear-gradient(top, #ffffff 0%, #eeeeee);background: -o-linear-gradient(top, #ffffff 0%, #eeeeee);background: linear-gradient(top, #ffffff 0%, #eeeeee);filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr="#ffffff", endColorStr="#eeeeee");'), e2.add(".calendar_default_selected .calendar_default_event_inner", "background: #ddd;"), e2.add(".calendar_default_alldayevent_inner", "position: absolute;top: 2px;bottom: 2px;left: 2px;right: 2px;overflow:hidden;padding: 2px;margin-right: 1px; font-size: 13px;"), e2.add(".calendar_default_event_withheader .calendar_default_event_inner", "padding-top: 15px;"), e2.add(".calendar_default_event", "cursor: default;"), e2.add(".calendar_default_event_inner", "position: absolute;overflow: hidden;top: 0px;bottom: 0px;left: 0px;right: 0px;padding: 2px 2px 2px 8px; font-size: 13px;"), e2.add(".calendar_default_event_delete", "background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAI5JREFUKFNtkLERgCAMRbmzdK8s4gAUlhYOYEHJEJYOYOEwDmGBPxC4kOPfvePy84MGR0RJ2N1A8H3N6DATwSQ57m2ql8NBG+AEM7D+UW+wjdfUPgerYNgB5gOLRHqhcasg84C2QxPMtrUhSqQIhg7ypy9VM2EUZPI/4rQ7rGxqo9sadTegw+UdjeDLAKUfhbaQUVPIfJYAAAAASUVORK5CYII=) center center no-repeat; opacity: 0.6; cursor: pointer;"), e2.add(".calendar_default_event_delete:hover", "opacity: 1;-ms-filter: none;"), e2.add(".calendar_default_scroll_up", "background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAB3RJTUUH2wESDiYcrhwCiQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAARnQU1BAACxjwv8YQUAAACcSURBVHjaY2AgF9wWsTW6yGMlhi7OhC7AyMDQzMnBXIpFHAFuCtuaMTP+P8nA8P/b1x//FfW/HHuF1UQmxv+NUP1c3OxMVVhNvCVi683E8H8LXOY/w9+fTH81tF8fv4NiIpBRj+YoZtZ/LDUoJmKYhsVUpv0MDiyMDP96sIYV0FS2/8z9ICaLlOhvS4b/jC//MzC8xBG0vJeF7GQBlK0xdiUzCtsAAAAASUVORK5CYII=);"), e2.add(".calendar_default_scroll_down", "background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAACqSURBVChTY7wpam3L9J+xmQEP+PGPKZZxP4MDi4zI78uMDIwa2NT+Z2DYovrmiC+TI8OBP/8ZmEqwGvif4e8vxr+FIDkmEKH25vBWBgbG0+iK/zEwLtF+ffwOXCGI8Y+BoRFFIdC030x/WmBiYBNhpgLdswNJ8RSYaSgmgk39z1gPUfj/29ef/9rwhQTDHRHbrbdEbLvRFcGthkkAra/9/uMvhkK8piNLAgCRpTnNn4AEmAAAAABJRU5ErkJggg==);"), e2.add(".calendar_default_now", "background-color: red;"), e2.add(".calendar_default_now:before", "content: ''; top: -5px; border-width: 5px; border-color: transparent transparent transparent red; border-style: solid; width: 0px; height:0px; position: absolute; -moz-transform: scale(.9999);"), e2.add(".calendar_default_shadow_top", 'box-sizing: border-box; padding:2px;border:1px solid #ccc;background:#fff;background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#eeeeee));background: -webkit-linear-gradient(top, #ffffff 0%, #eeeeee);background: -moz-linear-gradient(top, #ffffff 0%, #eeeeee);background: -ms-linear-gradient(top, #ffffff 0%, #eeeeee);background: -o-linear-gradient(top, #ffffff 0%, #eeeeee);background: linear-gradient(top, #ffffff 0%, #eeeeee);filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr="#ffffff", endColorStr="#eeeeee");'), e2.add(".calendar_default_shadow_bottom", 'box-sizing: border-box; padding:2px;border:1px solid #ccc;background:#fff;background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#eeeeee));background: -webkit-linear-gradient(top, #ffffff 0%, #eeeeee);background: -moz-linear-gradient(top, #ffffff 0%, #eeeeee);background: -ms-linear-gradient(top, #ffffff 0%, #eeeeee);background: -o-linear-gradient(top, #ffffff 0%, #eeeeee);background: linear-gradient(top, #ffffff 0%, #eeeeee);filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr="#ffffff", endColorStr="#eeeeee");'), e2.add(".calendar_default_crosshair_vertical, .calendar_default_crosshair_horizontal, .calendar_default_crosshair_left, .calendar_default_crosshair_top", "background-color: gray; opacity: 0.2;"), e2.add(".calendar_default_loading", "background-color: orange; color: white; padding: 2px;"), e2.add(".calendar_default_scroll", "background-color: #f3f3f3;"), e2.add(".calendar_default_event_moving_source", "opacity: 0.5;"), e2.add(".calendar_default_shadow_inner", "box-sizing: border-box; background-color: #bbbbbb;border: 1px solid #888888;opacity: 0.5;height: 100%;"), e2.add(".calendar_default_shadow", "box-shadow: 0 2px 5px rgba(0,0,0,.2);"), e2.add(".menu_default_main", "user-select:none; font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size: 13px;border: 1px solid #dddddd;background-color: white;padding: 0px;cursor: default;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAAKXRFWHRDcmVhdGlvbiBUaW1lAHBvIDEwIDUgMjAxMCAyMjozMzo1OSArMDEwMGzy7+IAAAAHdElNRQfaBQoUJAesj4VUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAABGdBTUEAALGPC/xhBQAAABVJREFUeNpj/P//PwO1weMnT2RlZAAYuwX/4oA3BgAAAABJRU5ErkJggg==);background-repeat: repeat-y;xborder-radius: 5px;-moz-box-shadow:0px 2px 3px rgba(000,000,000,0.3),inset 0px 0px 2px rgba(255,255,255,0.8);-webkit-box-shadow:0px 2px 3px rgba(000,000,000,0.3),inset 0px 0px 2px rgba(255,255,255,0.8);box-shadow:0px 2px 3px rgba(000,000,000,0.3),inset 0px 0px 2px rgba(255,255,255,0.8);"), e2.add(".menu_default_main, .menu_default_main *, .menu_default_main *:before, .menu_default_main *:after", "box-sizing: content-box;"), e2.add(".menu_default_title", "background-color: #f2f2f2;border-bottom: 1px solid gray;padding: 4px 4px 4px 37px;"), e2.add(".menu_default_main a", "padding: 2px 2px 2px 35px;color: black;text-decoration: none;cursor: default;"), e2.add(".menu_default_main.menu_default_withchildren a", "padding: 2px 35px 2px 35px;"), e2.add(".menu_default_main a img", "margin-left: 6px;margin-top: 2px;"), e2.add(".menu_default_item_text", "display: block;height: 20px;line-height: 20px; overflow:hidden;padding-left: 2px;padding-right: 20px; white-space: nowrap;"), e2.add(".menu_default_main a:hover", "background-color: #f3f3f3;"), e2.add(".menu_default_main div div", "border-top: 1px solid #dddddd;margin-top: 2px;margin-bottom: 2px;margin-left: 28px;"), e2.add(".menu_default_main a.menu_default_item_disabled", "color: #ccc"), e2.add(".menu_default_item_haschildren.menu_default_item_haschildren_active", "background-color: #f3f3f3;"), e2.add(".menu_default_item_haschildren a:before", "content: ''; border-width: 5px; border-color: transparent transparent transparent #666; border-style: solid; width: 0px; height:0px; position: absolute; right: 5px; margin-top: 5px;"), e2.add(".menu_default_item_icon", "position: absolute; top:0px; left: 0px; padding: 2px 2px 2px 8px;"), e2.add(".menu_default_item a i", "height: 20px;line-height: 20px;"), e2.add(".menu_default_item .menu_default_item_symbol", "width: 18px; height: 18px; color: #999; margin-left: 6px;margin-top: 2px;"), e2.add(".menubar_default_main", "border-bottom: 1px solid #ccc; font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size: 13px; user-select:none;"), e2.add(".menubar_default_item", "display: inline-block;  padding: 6px 10px; cursor: default;"), e2.add(".menubar_default_item:hover", "background-color: #f2f2f2;"), e2.add(".menubar_default_item_active", "background-color: #f2f2f2;"), e2.add(".scheduler_default_selected .scheduler_default_event_inner", "background: #ddd;"), e2.add(".scheduler_default_main", "border: 1px solid #c0c0c0;font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size: 13px;"), e2.add(".scheduler_default_timeheader", "cursor: default;color: #333;"), e2.add(".scheduler_default_message", "opacity: 0.9;filter: alpha(opacity=90);padding: 10px; color: #ffffff;background: #ffa216;"), e2.add(".scheduler_default_timeheadergroup,.scheduler_default_timeheadercol", "color: #333;background: #f3f3f3;"), e2.add(".scheduler_default_rowheader,.scheduler_default_corner", "color: #333;background: #f3f3f3;"), e2.add(".scheduler_default_rowheader_inner", "position: absolute;left: 0px;right: 0px;top: 0px;bottom: 0px;border-right: 1px solid #eee;padding: 2px;"), e2.add(".scheduler_default_timeheadergroup, .scheduler_default_timeheadercol", "text-align: center;"), e2.add(".scheduler_default_timeheadergroup_inner", "position: absolute;left: 0px;right: 0px;top: 0px;bottom: 0px;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;"), e2.add(".scheduler_default_timeheadercol_inner", "position: absolute;left: 0px;right: 0px;top: 0px;bottom: 0px;border-right: 1px solid #c0c0c0;"), e2.add(".scheduler_default_divider", "background-color: #c0c0c0;"), e2.add(".scheduler_default_divider_horizontal", "background-color: #c0c0c0;"), e2.add(".scheduler_default_matrix_vertical_line", "background-color: #eee;"), e2.add(".scheduler_default_matrix_vertical_break", "background-color: #000;"), e2.add(".scheduler_default_matrix_horizontal_line", "background-color: #eee;"), e2.add(".scheduler_default_resourcedivider", "background-color: #c0c0c0;"), e2.add(".scheduler_default_shadow_inner", "background-color: #666666;opacity: 0.5;filter: alpha(opacity=50);height: 100%;xborder-radius: 5px;"), e2.add(".scheduler_default_event", "color:#333; font-size: 13px;"), e2.add(".scheduler_default_event_inner", "position:absolute;top:0px;left:0px;right:0px;bottom:0px;padding:5px 2px 2px 2px;overflow:hidden;border:1px solid #ccc;"), e2.add(".scheduler_default_event_bar", "top:0px;left:0px;right:0px;height:4px;background-color:#9dc8e8;"), e2.add(".scheduler_default_event_bar_inner", "position:absolute;height:4px;background-color:#1066a8;"), e2.add(".scheduler_default_event_inner", 'background:#fff;background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#eeeeee));background: -webkit-linear-gradient(top, #ffffff 0%, #eeeeee);background: -moz-linear-gradient(top, #ffffff 0%, #eeeeee);background: -ms-linear-gradient(top, #ffffff 0%, #eeeeee);background: -o-linear-gradient(top, #ffffff 0%, #eeeeee);background: linear-gradient(top, #ffffff 0%, #eeeeee);filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr="#ffffff", endColorStr="#eeeeee");'), e2.add(".scheduler_default_event_float_inner", "padding:6px 2px 2px 8px;"), e2.add(".scheduler_default_event_float_inner:after", 'content:"";border-color: transparent #666 transparent transparent;border-style:solid;border-width:5px;width:0;height:0;position:absolute;top:8px;left:-4px;'), e2.add(".scheduler_default_columnheader_inner", "font-weight: bold;"), e2.add(".scheduler_default_columnheader_splitter", "background-color: #666;opacity: 0.5;filter: alpha(opacity=50);"), e2.add(".scheduler_default_columnheader_cell_inner", "padding: 2px;"), e2.add(".scheduler_default_cell", "background-color: #f9f9f9;"), e2.add(".scheduler_default_cell.scheduler_default_cell_business", "background-color: #fff;"), e2.add(".navigator_default_main", "border-left: 1px solid #c0c0c0;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;background-color: white;color: #000000; box-sizing: content-box;"), e2.add(".navigator_default_main *, .navigator_default_main *:before, .navigator_default_main *:after", "box-sizing: content-box;"), e2.add(".navigator_default_month", "font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size: 12px;"), e2.add(".navigator_default_day", "color: black;"), e2.add(".navigator_default_weekend", "background-color: #f0f0f0;"), e2.add(".navigator_default_dayheader", "color: black;"), e2.add(".navigator_default_line", "border-bottom: 1px solid #c0c0c0;"), e2.add(".navigator_default_dayother", "color: gray;"), e2.add(".navigator_default_todaybox", "border: 1px solid red;"), e2.add(".navigator_default_title, .navigator_default_titleleft, .navigator_default_titleright", "border-top: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;color: #333;background: #f3f3f3;"), e2.add(".navigator_default_busy", "font-weight: bold;"), e2.add(".navigator_default_cell", "text-align: center;"), e2.add(".navigator_default_select .navigator_default_cell_box", "background-color: #FFE794; opacity: 0.5;"), e2.add(".navigator_default_title", "text-align: center;"), e2.add(".navigator_default_titleleft, .navigator_default_titleright", "text-align: center;"), e2.add(".navigator_default_dayheader", "text-align: center;"), e2.add(".navigator_default_weeknumber", "text-align: center; color: #999;"), e2.add(".navigator_default_cell_text", "cursor: pointer;"), e2.add(".month_default_main", "border: 1px solid #c0c0c0;font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size: 13px;color: #333;"), e2.add(".month_default_main *, .month_default_main *:before, .month_default_main *:after", "box-sizing: content-box;"), e2.add(".month_default_cell_inner", "border-right: 1px solid #ddd;border-bottom: 1px solid #ddd;position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;background-color: #f9f9f9;"), e2.add(".month_default_cell_business .month_default_cell_inner", "background-color: #fff;"), e2.add(".month_default_cell_header", "text-align: right; padding: 4px; box-sizing: border-box;"), e2.add(".month_default_header_inner", "position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;cursor: default;color: #333;background: #f3f3f3; overflow:hidden; display: flex; align-items: center; justify-content: center;"), e2.add(".month_default_message", "padding: 10px;opacity: 0.9; color: #ffffff;background: #ffa216;"), e2.add(".month_default_event_inner", "position: absolute;top: 0px;bottom: 0px;left: 1px;right: 1px;overflow:hidden;padding: 2px;padding-left: 10px;color: #333;background: #fff;background: linear-gradient(to bottom, #ffffff 0%, #eeeeee);border: 1px solid #999;border-radius: 0px;display: flex; align-items: center; font-size: 13px;"), e2.add(".month_default_event_continueright .month_default_event_inner", "border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-right-style: dotted;"), e2.add(".month_default_event_continueleft .month_default_event_inner", "border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-left-style: dotted;"), e2.add(".month_default_event_bar", "top: 1px;bottom: 1px;left: 2px;width: 6px;"), e2.add(".month_default_event_bar_inner", "position: absolute;width: 6px;background-color: #1066a8;"), e2.add(".month_default_event_continueleft .month_default_event_bar", "display: none;"), e2.add(".month_default_selected .month_default_event_inner", "background: #ddd;"), e2.add(".month_default_event_delete", "background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAI5JREFUKFNtkLERgCAMRbmzdK8s4gAUlhYOYEHJEJYOYOEwDmGBPxC4kOPfvePy84MGR0RJ2N1A8H3N6DATwSQ57m2ql8NBG+AEM7D+UW+wjdfUPgerYNgB5gOLRHqhcasg84C2QxPMtrUhSqQIhg7ypy9VM2EUZPI/4rQ7rGxqo9sadTegw+UdjeDLAKUfhbaQUVPIfJYAAAAASUVORK5CYII=) center center no-repeat; opacity: 0.6; cursor: pointer;"), e2.add(".month_default_event_delete:hover", "opacity: 1;-ms-filter: none;"), e2.add(".month_default_event_timeleft", "color: #ccc; font-size: 8pt"), e2.add(".month_default_event_timeright", "color: #ccc; font-size: 8pt; text-align: right;"), e2.add(".month_default_loading", "background-color: orange; color: white; padding: 2px;"), e2.add(".month_default_shadow_inner", "box-sizing: border-box; background-color: #bbbbbb;border: 1px solid #888888;opacity: 0.5;height: 100%;"), e2.add(".month_default_shadow", "box-shadow: 0 2px 5px rgba(0,0,0,.2);"), e2.commit(), DayPilot.Global.defaultCss = true;
      }
    }(), DayPilot.doc = function() {
      var e2 = document.documentElement;
      return e2 && e2.clientHeight ? e2 : document.body;
    }, DayPilot.guid = function() {
      var e2 = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };
      return "" + e2() + e2() + "-" + e2() + "-" + e2() + "-" + e2() + "-" + e2() + e2() + e2();
    }, DayPilot.pageOffset = function() {
      if ("undefined" != typeof pageXOffset) return {
        x: pageXOffset,
        y: pageYOffset
      };
      var e2 = DayPilot.doc();
      return {
        x: e2.scrollLeft,
        y: e2.scrollTop
      };
    }, DayPilot.indexOf = function(e2, t2) {
      if (!e2 || !e2.length) return -1;
      for (var i2 = 0; i2 < e2.length; i2++) if (e2[i2] === t2) return i2;
      return -1;
    }, DayPilot.ac = function(e2, t2) {
      if (!t2) var t2 = [];
      for (var i2 = 0; e2.children && i2 < e2.children.length; i2++) t2.push(e2.children[i2]), DayPilot.ac(e2.children[i2], t2);
      return t2;
    }, DayPilot.rfa = function(e2, t2) {
      var i2 = DayPilot.indexOf(e2, t2);
      i2 !== -1 && e2.splice(i2, 1);
    }, DayPilot.mc = function(e2) {
      return e2.pageX || e2.pageY ? {
        x: e2.pageX,
        y: e2.pageY
      } : {
        x: e2.clientX + document.documentElement.scrollLeft,
        y: e2.clientY + document.documentElement.scrollTop
      };
    }, DayPilot.Stats = {}, DayPilot.Stats.eventObjects = 0, DayPilot.Stats.dateObjects = 0, DayPilot.Stats.cacheHitsCtor = 0, DayPilot.Stats.cacheHitsParsing = 0, DayPilot.Stats.cacheHitsTicks = 0, DayPilot.re = function(e2, t2, i2) {
      i2 && t2 && e2 && e2.addEventListener(t2, i2, false);
    }, DayPilot.rePassive = function(e2, t2, i2) {
      i2 && t2 && e2 && e2.addEventListener(t2, i2, {
        "passive": true
      });
    }, DayPilot.reNonPassive = function(e2, t2, i2) {
      i2 && t2 && e2 && e2.addEventListener(t2, i2, {
        "passive": false
      });
    }, DayPilot.pu = function(e2) {
      var t2, i2, a2, n2 = e2.attributes;
      if (n2) for (i2 = n2.length, t2 = 0; t2 < i2; t2 += 1) n2[t2] && (a2 = n2[t2].name, "function" == typeof e2[a2] && (e2[a2] = null));
      if (n2 = e2.childNodes) for (i2 = n2.length, t2 = 0; t2 < i2; t2 += 1) {
        DayPilot.pu(e2.childNodes[t2]);
      }
    }, DayPilot.de = function(e2) {
      if (e2) if (DayPilot.isArray(e2)) for (var t2 = 0; t2 < e2.length; t2++) DayPilot.de(e2[t2]);
      else e2.parentNode && e2.parentNode.removeChild(e2);
    }, DayPilot.sw = function(e2) {
      return e2 ? e2.offsetWidth - e2.clientWidth : 0;
    }, DayPilot.am = function() {
      return "undefined" == typeof angular ? null : (DayPilot.am.cached || (DayPilot.am.cached = angular.module("daypilot", [])), DayPilot.am.cached);
    }, DayPilot.Selection = function(e2, t2, i2, a2) {
      this.type = "selection", this.start = e2.isDayPilotDate ? e2 : new DayPilot.Date(e2), this.end = t2.isDayPilotDate ? t2 : new DayPilot.Date(t2), this.resource = i2, this.root = a2, this.toJSON = function(e3) {
        var t3 = {};
        return t3.start = this.start, t3.end = this.end, t3.resource = this.resource, t3;
      };
    }, DayPilot.request = function(e2, t2, i2, a2) {
      var n2 = DayPilot.createXmlHttp();
      n2 && (n2.open("POST", e2, true), n2.setRequestHeader("Content-type", "text/plain"), n2.onreadystatechange = function() {
        if (4 === n2.readyState) return 200 !== n2.status && 304 !== n2.status ? void (a2 ? a2(n2) : window.console && console.log("HTTP error " + n2.status)) : void t2(n2);
      }, 4 !== n2.readyState && ("object" == typeof i2 && (i2 = JSON.stringify(i2)), n2.send(i2)));
    }, DayPilot.ajax = function(e2) {
      if (!e2) throw new DayPilot.Exception("Parameter object required.");
      if ("string" != typeof e2.url) throw new DayPilot.Exception("The parameter object must have 'url' property.");
      var t2 = DayPilot.createXmlHttp();
      if (!t2) throw new DayPilot.Exception("Unable to create XMLHttpRequest object");
      var i2 = "object" == typeof e2.data, a2 = e2.data, n2 = e2.method || (e2.data ? "POST" : "GET"), o = e2.success || function() {
      }, r = e2.error || function() {
      }, s = e2.url, l = e2.contentType || (i2 ? "application/json" : "text/plain"), d = e2.headers || {};
      t2.open(n2, s, true), t2.setRequestHeader("Content-type", l), DayPilot.Util.ownPropsAsArray(d).forEach(function(e3) {
        t2.setRequestHeader(e3.key, e3.val);
      }), t2.onreadystatechange = function() {
        if (4 === t2.readyState) if (200 === t2.status || 201 === t2.status || 204 === t2.status || 304 === t2.status) {
          var e3 = {};
          e3.request = t2, t2.responseText && (e3.data = JSON.parse(t2.responseText)), o(e3);
        } else if (r) {
          var e3 = {};
          e3.request = t2, r(e3);
        } else window.console && console.log("HTTP error " + t2.status);
      }, 4 !== t2.readyState && (i2 && (a2 = JSON.stringify(a2)), t2.send(a2));
    }, DayPilot.createXmlHttp = function() {
      return new XMLHttpRequest();
    }, DayPilot.Http = {}, DayPilot.Http.ajax = function(e2) {
      DayPilot.ajax(e2);
    }, DayPilot.Http.get = function(e2, t2) {
      return t2 = t2 || {}, new Promise(function(i2, a2) {
        var n2 = {};
        n2.url = e2, n2.method = "GET", n2.success = function(e3) {
          i2(e3);
        }, n2.error = function(e3) {
          a2(e3);
        }, n2.contentType = t2.contentType, n2.headers = t2.headers, DayPilot.ajax(n2);
      });
    }, DayPilot.Http.post = function(e2, t2, i2) {
      return i2 = i2 || {}, new Promise(function(a2, n2) {
        var o = {};
        o.url = e2, o.method = "POST", o.data = t2, o.success = function(e3) {
          a2(e3);
        }, o.error = function(e3) {
          n2(e3);
        }, o.contentType = i2.contentType, o.headers = i2.headers, DayPilot.ajax(o);
      });
    }, DayPilot.Http.put = function(e2, t2, i2) {
      return i2 = i2 || {}, new Promise(function(a2, n2) {
        var o = {};
        o.url = e2, o.method = "PUT", o.data = t2, o.success = function(e3) {
          a2(e3);
        }, o.error = function(e3) {
          n2(e3);
        }, o.contentType = i2.contentType, o.headers = i2.headers, DayPilot.ajax(o);
      });
    }, DayPilot.Http.delete = function(e2, t2) {
      return t2 = t2 || {}, new Promise(function(i2, a2) {
        var n2 = {};
        n2.url = e2, n2.method = "DELETE", n2.success = function(e3) {
          i2(e3);
        }, n2.error = function(e3) {
          a2(e3);
        }, n2.contentType = t2.contentType, n2.headers = t2.headers, DayPilot.ajax(n2);
      });
    }, DayPilot.Util = {}, DayPilot.Util.addClass = function(e2, t2) {
      if (e2) {
        if (!e2.className) return void (e2.className = t2);
        new RegExp("(^|\\s)" + t2 + "($|\\s)").test(e2.className) || (e2.className = e2.className + " " + t2);
      }
    }, DayPilot.Util.removeClass = function(e2, t2) {
      if (e2) {
        var i2 = new RegExp("(^|\\s)" + t2 + "($|\\s)");
        e2.className = e2.className.replace(i2, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
    }, DayPilot.Util.copyProps = function(e2, t2, i2) {
      if (t2 || (t2 = {}), !e2) return t2;
      if ("undefined" == typeof i2) for (var a2 in e2) e2.hasOwnProperty(a2) && "undefined" != typeof e2[a2] && (t2[a2] = e2[a2]);
      else for (var n2 = 0; n2 < i2.length; n2++) {
        var a2 = i2[n2];
        "undefined" != typeof e2[a2] && (t2[a2] = e2[a2]);
      }
      return t2;
    }, DayPilot.Util.ownPropsAsArray = function(e2) {
      var t2 = [];
      if (!e2) return t2;
      for (var i2 in e2) if (e2.hasOwnProperty(i2)) {
        var a2 = {};
        a2.key = i2, a2.val = e2[i2], t2.push(a2);
      }
      return t2;
    }, DayPilot.Util.replaceCharAt = function(e2, t2, i2) {
      return e2.substr(0, t2) + i2 + e2.substr(t2 + i2.length);
    }, DayPilot.Util.isNullOrUndefined = function(e2) {
      return null === e2 || "undefined" == typeof e2;
    }, DayPilot.Util.escapeHtml = function(e2) {
      var t2 = document.createElement("div");
      return t2.innerText = e2, t2.innerHTML;
    }, DayPilot.Util.escapeTextHtml = function(e2, t2) {
      return DayPilot.Util.isNullOrUndefined(t2) ? DayPilot.Util.isNullOrUndefined(e2) ? "" : DayPilot.Util.escapeHtml(e2) : t2;
    }, DayPilot.Util.overlaps = function(e2, t2, i2, a2) {
      return !(t2 <= i2 || e2 >= a2);
    }, DayPilot.Util.isVueVNode = function(e2) {
      return !!e2 && (DayPilot.isArray(e2) ? DayPilot.Util.isVueVNode(e2[0]) : e2["__v_isVNode"]);
    }, DayPilot.Areas = {}, DayPilot.Areas.attach = function(e2, t2, i2) {
      var i2 = i2 || {}, n2 = i2.areas, o = i2.allowed || function() {
        return true;
      }, r = i2.offsetX || 0;
      n2 = a(t2, n2), n2 && DayPilot.isArray(n2) && 0 !== n2.length && (DayPilot.re(e2, "mousemove", function(a2) {
        e2.active || e2.areasDisabled || !o() || DayPilot.Areas.showAreas(e2, t2, a2, n2, {
          "offsetX": r,
          "eventDiv": i2.eventDiv
        });
      }), DayPilot.re(e2, "mouseleave", function(t3) {
        DayPilot.Areas.hideAreas(e2, t3);
      }), n2.forEach(function(a2) {
        if (DayPilot.Areas.isVisible(a2)) {
          var n3 = DayPilot.Areas.createArea(e2, t2, a2, {
            "offsetX": r,
            "eventDiv": i2.eventDiv
          });
          e2.appendChild(n3);
        }
      }));
    }, DayPilot.Areas.disable = function(e2) {
      e2.areasDisabled = true, Array.from(e2.childNodes).filter(function(e3) {
        return e3.isActiveArea && !e3.area.start;
      }).forEach(function(e3) {
        e3.c = e3.style.display, e3.style.display = "none";
      });
    }, DayPilot.Areas.enable = function(e2) {
      e2.areasDisabled = false, Array.from(e2.childNodes).filter(function(e3) {
        return e3.isActiveArea && !e3.area.start;
      }).forEach(function(e3) {
        e3.c ? e3.style.display = e3.c : e3.style.display = "";
      });
    }, DayPilot.Areas.remove = function(e2) {
      var t2 = Array.from(e2.childNodes).filter(function(e3) {
        return e3.isActiveArea;
      });
      DayPilot.de(t2);
    }, DayPilot.Areas.isVisible = function(e2) {
      var t2 = e2.visibility || e2.v || "Visible";
      return "Visible" === t2 || "TouchVisible" === t2 && !DayPilot.browser.hover;
    }, DayPilot.Areas.copy = function(e2) {
      return DayPilot.isArray(e2) ? e2.map(function(e3) {
        return DayPilot.Util.copyProps(e3, {});
      }) : [];
    };
    var a = function(e2, t2) {
      return DayPilot.isArray(t2) || (t2 = e2.areas, t2 || (e2.cache ? t2 = e2.cache.areas : e2.data && (t2 = e2.data.areas))), t2;
    };
    DayPilot.Areas.showAreas = function(e2, t2, i2, a2, n2) {
      if (!DayPilot.Global.resizing && !DayPilot.Global.moving && !DayPilot.Global.selecting && !e2.active && DayPilot.browser.hover) {
        if (DayPilot.Areas.all && DayPilot.Areas.all.length > 0) for (var o = 0; o < DayPilot.Areas.all.length; o++) {
          var r = DayPilot.Areas.all[o];
          r !== e2 && DayPilot.Areas.hideAreas(r, i2);
        }
        if (e2.active = {}, DayPilot.isArray(a2) || (a2 = t2.areas, a2 || (t2.cache ? a2 = t2.cache.areas : t2.data && (a2 = t2.data.areas))), a2 && 0 !== a2.length && !(e2.areas && e2.areas.length > 0)) {
          e2.areas = [];
          for (var o = 0; o < a2.length; o++) {
            var s = a2[o];
            if (!DayPilot.Areas.isVisible(s)) {
              var l = DayPilot.Areas.createArea(e2, t2, s, n2);
              e2.areas.push(l), e2.appendChild(l), DayPilot.Areas.all.push(e2);
            }
          }
          e2.active.children = DayPilot.ac(e2);
        }
      }
    }, DayPilot.Areas.createArea = function(e2, t2, i2, a2) {
      function n2(e3, t3, i3) {
        var a3 = {};
        return a3.area = e3, a3.source = t3, a3.originalEvent = i3, a3.preventDefault = function() {
          a3.preventDefault.value = true;
        }, "function" == typeof e3.onClick && e3.onClick(a3), a3;
      }
      function o(e3, t3, i3) {
        DayPilot.Bubble && DayPilot.Bubble.touchPosition(i3), e3.calendar.bubble && e3.calendar.bubble.showEvent(e3, true);
      }
      function r(e3, t3, i3, a3) {
        DayPilot.Menu && DayPilot.Menu.touchPosition(a3);
        var n3 = i3.contextMenu || i3.menu;
        if (n3 instanceof DayPilot.Menu || (t3.isEvent && t3.client.contextMenu() ? n3 = t3.client.contextMenu() : t3.isEvent && t3.calendar.contextMenu && (n3 = t3.calendar.contextMenu)), n3 && n3.show) {
          var o2 = {
            "type": "area",
            "div": e3,
            "e": t3,
            "area": i3,
            "a": d
          };
          n3.show(t3, {
            "initiator": o2
          });
        }
      }
      function s(e3) {
        return "string" == typeof e3 && isNaN(e3) ? e3 : "undefined" != typeof e3 ? e3 + "px" : void 0;
      }
      var a2 = a2 || {}, l = (a2.offsetX || 0, a2.eventDiv || e2), d = document.createElement("div");
      d.isActiveArea = true, d.area = i2, d.setAttribute("unselectable", "on");
      var c = i2.w || i2.width, u = i2.h || i2.height, h = i2.cssClass || i2.css || i2.className;
      if ("undefined" != typeof i2.style && d.setAttribute("style", i2.style), d.style.position = "absolute", d.style.width = s(c), d.style.height = s(u), d.style.right = s(i2.right), d.style.top = s(i2.top), d.style.left = s(i2.left), d.style.bottom = s(i2.bottom), d.style.borderRadius = s(i2.borderRadius), "undefined" != typeof i2.html || "undefined" != typeof i2.text) d.innerHTML = DayPilot.Util.escapeTextHtml(i2.text, i2.html);
      else if (i2.icon) {
        var f = document.createElement("i");
        f.className = i2.icon, d.appendChild(f);
      } else if (i2.image) {
        var m = document.createElement("img");
        m.src = i2.image, d.appendChild(m);
      } else if (i2.symbol) {
        var p = "http://www.w3.org/2000/svg", v = document.createElementNS(p, "svg");
        v.setAttribute("width", "100%"), v.setAttribute("height", "100%");
        var y = document.createElementNS(p, "use");
        y.setAttribute("href", i2.symbol), v.appendChild(y), d.appendChild(v);
      }
      if (h && (d.className = h), i2.toolTip && d.setAttribute("title", i2.toolTip), i2.backColor && (d.style.background = i2.backColor), i2.background && (d.style.background = i2.background), i2.fontColor && (d.style.color = i2.fontColor), i2.padding && (d.style.padding = i2.padding + "px", d.style.boxSizing = "border-box"), i2.verticalAlignment) switch (d.style.display = "flex", i2.verticalAlignment) {
        case "center":
          d.style.alignItems = "center";
          break;
        case "top":
          d.style.alignItems = "flex-start";
          break;
        case "bottom":
          d.style.alignItems = "flex-end";
      }
      if (i2.horizontalAlignment) switch (d.style.display = "flex", i2.horizontalAlignment) {
        case "right":
          d.style.justifyContent = "flex-end";
          break;
        case "left":
          d.style.justifyContent = "flex-start";
          break;
        case "center":
          d.style.justifyContent = "center";
      }
      if ("ResizeEnd" === i2.action || "ResizeStart" === i2.action || "Move" === i2.action) {
        if (t2.calendar.isCalendar) switch (i2.action) {
          case "ResizeEnd":
            i2.cursor = "s-resize", i2.dpBorder = "bottom";
            break;
          case "ResizeStart":
            i2.cursor = "n-resize", i2.dpBorder = "top";
            break;
          case "Move":
            i2.cursor = "move";
        }
        if (t2.calendar.isScheduler || t2.calendar.isMonth) switch (i2.action) {
          case "ResizeEnd":
            i2.cursor = "e-resize", i2.dpBorder = "right";
            break;
          case "ResizeStart":
            i2.cursor = "w-resize", i2.dpBorder = "left";
            break;
          case "Move":
            i2.cursor = "move";
        }
        d.onmousemove = /* @__PURE__ */ function(e3, t3, i3) {
          return function(a3) {
            t3.calendar.internal && t3.calendar.internal.dragInProgress && t3.calendar.internal.dragInProgress() || (a3.cancelBubble = true, e3.style.cursor = i3.cursor, i3.dpBorder && (e3.dpBorder = i3.dpBorder));
          };
        }(l, t2, i2), d.onmouseout = /* @__PURE__ */ function(e3, t3, i3) {
          return function(t4) {
            e3.style.cursor = "";
          };
        }(l, t2, i2);
      }
      if (("ResizeEnd" === i2.action || "ResizeStart" === i2.action) && t2.isEvent && t2.calendar.internal.touch) {
        var g = /* @__PURE__ */ function(e3, t3, i3) {
          return function(a3) {
            a3.cancelBubble = true;
            var n3 = t3.calendar.internal.touch, o2 = a3.touches ? a3.touches[0] : a3, r2 = {
              x: o2.pageX,
              y: o2.pageY
            };
            t3.calendar.coords = n3.relativeCoords(a3), n3.preventEventTap = true, t3.calendar.isScheduler ? n3.startResizing(e3, "ResizeEnd" === i3.action ? "right" : "left") : t3.calendar.isCalendar && n3.startResizing(e3, "ResizeEnd" === i3.action ? "bottom" : "top", r2);
          };
        }(l, t2, i2);
        DayPilot.rePassive(d, DayPilot.touch.start, g);
      }
      if ("ContextMenu" === i2.action && t2.isEvent && t2.calendar.internal.touch) {
        var g = /* @__PURE__ */ function(e3, t3, i3) {
          return function(a3) {
            a3.cancelBubble = true, a3.preventDefault(), r(e3, t3, i3, a3), t3.calendar.internal.touch.preventEventTap = true;
          };
        }(l, t2, i2), b = /* @__PURE__ */ function(e3, t3, i3) {
          return function(e4) {
            e4.cancelBubble = true, e4.preventDefault();
          };
        }(l, t2, i2);
        DayPilot.reNonPassive(d, DayPilot.touch.start, g), DayPilot.reNonPassive(d, DayPilot.touch.end, b);
      }
      if ("Bubble" === i2.action && t2.isEvent && t2.calendar.internal.touch) {
        var g = /* @__PURE__ */ function(e3, t3, i3) {
          return function(e4) {
            e4.cancelBubble = true, e4.preventDefault();
            var a3 = n2(i3, t3, e4);
            if (!a3.preventDefault.value) {
              o(t3, i3, e4);
              t3.calendar.internal.touch.preventEventTap = true, "function" == typeof i3.onClicked && i3.onClicked(a3);
            }
          };
        }(l, t2, i2), b = /* @__PURE__ */ function(e3, t3, i3) {
          return function(e4) {
            e4.cancelBubble = true, e4.preventDefault();
          };
        }(l, t2, i2);
        DayPilot.reNonPassive(d, DayPilot.touch.start, g), DayPilot.reNonPassive(d, DayPilot.touch.end, b);
      }
      if ("Move" === i2.action && t2.isEvent && t2.calendar.internal.touch) {
        var g = /* @__PURE__ */ function(e3, t3, i3) {
          return function(i4) {
            i4.cancelBubble = true;
            var a3 = t3.calendar.internal.touch, n3 = i4.touches ? i4.touches[0] : i4, o2 = {
              x: n3.pageX,
              y: n3.pageY
            };
            t3.calendar.coords = a3.relativeCoords(i4), DayPilot.Global && DayPilot.Global.touch && (DayPilot.Global.touch.active = true), a3.preventEventTap = true, a3.startMoving(e3, o2);
          };
        }(l, t2, i2);
        DayPilot.rePassive(d, DayPilot.touch.start, g);
      }
      if ("Bubble" === i2.action && t2.isEvent ? (d.onmousemove = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          i3.bubble ? i3.bubble.showEvent(t3, true) : t3.calendar.bubble && t3.calendar.bubble.showEvent(t3, true);
        };
      }(e2, t2, i2), d.onmouseout = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          "undefined" != typeof DayPilot.Bubble && (i3.bubble ? i3.bubble.hideOnMouseOut() : t3.calendar.bubble && t3.calendar.bubble.hideOnMouseOut());
        };
      }(e2, t2, i2)) : "Bubble" === i2.action && t2.isRow ? (d.onmousemove = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          i3.bubble ? i3.bubble.showResource(t3, true) : t3.calendar.resourceBubble && t3.calendar.resourceBubble.showResource(t3, true);
        };
      }(e2, t2, i2), d.onmouseout = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          "undefined" != typeof DayPilot.Bubble && (i3.bubble ? i3.bubble.hideOnMouseOut() : t3.calendar.resourceBubble && t3.calendar.resourceBubble.hideOnMouseOut());
        };
      }(e2, t2, i2)) : "Bubble" === i2.action && "undefined" != typeof DayPilot.Bubble && i2.bubble instanceof DayPilot.Bubble && (d.onmousemove = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          i3.bubble.showHtml(null, null);
        };
      }(e2, t2, i2), d.onmouseout = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          "undefined" != typeof DayPilot.Bubble && i3.bubble && i3.bubble.hideOnMouseOut();
        };
      }(e2, t2, i2)), "HoverMenu" === i2.action && (d.onmousemove = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          var a3 = i3.menu;
          a3 && a3.show && (a3.visible ? a3.source && "undefined" != typeof a3.source.id && a3.source.id !== t3.id && a3.show(t3) : a3.show(t3), a3.cancelHideTimeout());
        };
      }(e2, t2, i2), d.onmouseout = /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          var t4 = i3.menu;
          t4 && t4.hideOnMouseOver && t4.delayedHide();
        };
      }(e2, t2, i2)), "None" === i2.action) {
        var g = /* @__PURE__ */ function(e3, t3, i3) {
          return function(e4) {
            var a3 = n2(i3, t3, e4);
            "function" == typeof i3.onClicked && i3.onClicked(a3), e4.preventDefault(), e4.stopPropagation();
          };
        }(l, t2, i2);
        DayPilot.reNonPassive(d, DayPilot.touch.start, g);
      }
      return d.onmousedown = /* @__PURE__ */ function(e3, t3, i3) {
        return function(a3) {
          if ("function" == typeof i3.onmousedown && i3.onmousedown(a3), "function" == typeof i3.mousedown) {
            var n3 = {};
            n3.area = i3, n3.div = e3, n3.originalEvent = a3, n3.source = t3, i3.mousedown(n3);
          }
          if ("Move" === i3.action && t3.isRow) {
            var o2 = t3.$.row;
            (0, t3.calendar.internal.rowStartMoving)(o2);
          }
          "undefined" != typeof DayPilot.Bubble && DayPilot.Bubble.hideActive(), "Move" === i3.action && (DayPilot.Global.movingAreaData = i3.data), "Move" === i3.action && t3.isEvent && t3.calendar.internal && t3.calendar.internal.startMoving && t3.calendar.internal.startMoving(e3, a3);
          "Move" !== i3.action && "ResizeEnd" !== i3.action && "ResizeStart" !== i3.action && i3.action && "Default" !== i3.action && (a3.preventDefault(), a3.cancelBubble = true);
        };
      }(e2, t2, i2), d.onclick = /* @__PURE__ */ function(e3, t3, i3) {
        return function(a3) {
          var o2 = n2(i3, t3, a3);
          if (!o2.preventDefault.value) {
            switch (i3.action) {
              case "ContextMenu":
                r(e3, t3, i3, a3), a3.cancelBubble = true;
                break;
              case "None":
                a3.cancelBubble = true;
            }
            "function" == typeof i3.onClicked && i3.onClicked(o2);
          }
        };
      }(e2, t2, i2), "function" == typeof i2.onMouseEnter && d.addEventListener("mouseenter", /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          var a3 = {};
          a3.area = i3, a3.source = t3, a3.originalEvent = e4, i3.onMouseEnter(a3);
        };
      }(e2, t2, i2)), "function" == typeof i2.onMouseLeave && d.addEventListener("mouseleave", /* @__PURE__ */ function(e3, t3, i3) {
        return function(e4) {
          var a3 = {};
          a3.area = i3, a3.source = t3, a3.originalEvent = e4, i3.onMouseLeave(a3);
        };
      }(e2, t2, i2)), d;
    }, DayPilot.Areas.all = [], DayPilot.Areas.hideAreas = function(e2, t2) {
      if (e2 && e2 && e2.active) {
        var i2 = e2.active, a2 = e2.areas;
        if (i2 && i2.children && t2) {
          var n2 = t2.toElement || t2.relatedTarget;
          if (~DayPilot.indexOf(i2.children, n2)) return;
        }
        if (!a2 || 0 === a2.length) return void (e2.active = null);
        DayPilot.de(a2), e2.active = null, e2.areas = [], DayPilot.rfa(DayPilot.Areas.all, e2), i2.children = null;
      }
    }, DayPilot.Areas.hideAll = function(e2) {
      if (DayPilot.Areas.all && 0 !== DayPilot.Areas.all.length) for (var t2 = 0; t2 < DayPilot.Areas.all.length; t2++) DayPilot.Areas.hideAreas(DayPilot.Areas.all[t2], e2);
    }, DayPilot.Exception = function(e2) {
      return new Error(e2);
    }, DayPilot.Locale = function(e2, t2) {
      if (this.id = e2, this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], this.dayNamesShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], this.datePattern = "M/d/yyyy", this.timePattern = "H:mm", this.dateTimePattern = "M/d/yyyy H:mm", this.timeFormat = "Clock12Hours", this.weekStarts = 0, t2) for (var i2 in t2) this[i2] = t2[i2];
    }, DayPilot.Locale.all = {}, DayPilot.Locale.find = function(e2) {
      if (!e2) return null;
      var t2 = e2.toLowerCase();
      return t2.length > 2 && (t2 = DayPilot.Util.replaceCharAt(t2, 2, "-")), DayPilot.Locale.all[t2];
    }, DayPilot.Locale.register = function(e2) {
      DayPilot.Locale.all[e2.id] = e2;
    }, DayPilot.Locale.register(new DayPilot.Locale("ca-es", {
      "dayNames": ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
      "dayNamesShort": ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
      "monthNames": ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ""],
      "monthNamesShort": ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des.", ""],
      "timePattern": "H:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("cs-cz", {
      "dayNames": ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
      "dayNamesShort": ["ne", "po", "út", "st", "čt", "pá", "so"],
      "monthNames": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec", ""],
      "monthNamesShort": ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", ""],
      "timePattern": "H:mm",
      "datePattern": "d. M. yyyy",
      "dateTimePattern": "d. M. yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("da-dk", {
      "dayNames": ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
      "dayNamesShort": ["sø", "ma", "ti", "on", "to", "fr", "lø"],
      "monthNames": ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december", ""],
      "monthNamesShort": ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd-MM-yyyy",
      "dateTimePattern": "dd-MM-yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("de-at", {
      "dayNames": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      "dayNamesShort": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      "monthNames": ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
      "monthNamesShort": ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("de-ch", {
      "dayNames": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      "dayNamesShort": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      "monthNames": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
      "monthNamesShort": ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("de-de", {
      "dayNames": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      "dayNamesShort": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      "monthNames": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
      "monthNamesShort": ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("de-lu", {
      "dayNames": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      "dayNamesShort": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      "monthNames": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
      "monthNamesShort": ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("en-au", {
      "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "dayNamesShort": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
      "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
      "timePattern": "h:mm tt",
      "datePattern": "d/MM/yyyy",
      "dateTimePattern": "d/MM/yyyy h:mm tt",
      "timeFormat": "Clock12Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("en-ca", {
      "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "dayNamesShort": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
      "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
      "timePattern": "h:mm tt",
      "datePattern": "yyyy-MM-dd",
      "dateTimePattern": "yyyy-MM-dd h:mm tt",
      "timeFormat": "Clock12Hours",
      "weekStarts": 0
    })), DayPilot.Locale.register(new DayPilot.Locale("en-gb", {
      "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "dayNamesShort": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
      "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("en-us", {
      "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "dayNamesShort": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
      "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
      "timePattern": "h:mm tt",
      "datePattern": "M/d/yyyy",
      "dateTimePattern": "M/d/yyyy h:mm tt",
      "timeFormat": "Clock12Hours",
      "weekStarts": 0
    })), DayPilot.Locale.register(new DayPilot.Locale("es-es", {
      "dayNames": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      "dayNamesShort": ["D", "L", "M", "X", "J", "V", "S"],
      "monthNames": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
      "monthNamesShort": ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic.", ""],
      "timePattern": "H:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("es-mx", {
      "dayNames": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      "dayNamesShort": ["do.", "lu.", "ma.", "mi.", "ju.", "vi.", "sá."],
      "monthNames": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
      "monthNamesShort": ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic.", ""],
      "timePattern": "hh:mm tt",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy hh:mm tt",
      "timeFormat": "Clock12Hours",
      "weekStarts": 0
    })), DayPilot.Locale.register(new DayPilot.Locale("eu-es", {
      "dayNames": ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
      "dayNamesShort": ["ig", "al", "as", "az", "og", "or", "lr"],
      "monthNames": ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua", ""],
      "monthNamesShort": ["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe.", ""],
      "timePattern": "H:mm",
      "datePattern": "yyyy/MM/dd",
      "dateTimePattern": "yyyy/MM/dd H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("fi-fi", {
      "dayNames": ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
      "dayNamesShort": ["su", "ma", "ti", "ke", "to", "pe", "la"],
      "monthNames": ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu", ""],
      "monthNamesShort": ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu", ""],
      "timePattern": "H:mm",
      "datePattern": "d.M.yyyy",
      "dateTimePattern": "d.M.yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("fr-be", {
      "dayNames": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      "dayNamesShort": ["di", "lu", "ma", "me", "je", "ve", "sa"],
      "monthNames": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
      "monthNamesShort": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd-MM-yy",
      "dateTimePattern": "dd-MM-yy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("fr-ch", {
      "dayNames": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      "dayNamesShort": ["di", "lu", "ma", "me", "je", "ve", "sa"],
      "monthNames": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
      "monthNamesShort": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("fr-fr", {
      "dayNames": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      "dayNamesShort": ["di", "lu", "ma", "me", "je", "ve", "sa"],
      "monthNames": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
      "monthNamesShort": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("fr-lu", {
      "dayNames": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      "dayNamesShort": ["di", "lu", "ma", "me", "je", "ve", "sa"],
      "monthNames": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
      "monthNamesShort": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("gl-es", {
      "dayNames": ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"],
      "dayNamesShort": ["do", "lu", "ma", "mé", "xo", "ve", "sá"],
      "monthNames": ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro", ""],
      "monthNamesShort": ["xan", "feb", "mar", "abr", "maio", "xuño", "xul", "ago", "set", "out", "nov", "dec", ""],
      "timePattern": "H:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("it-it", {
      "dayNames": ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
      "dayNamesShort": ["do", "lu", "ma", "me", "gi", "ve", "sa"],
      "monthNames": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
      "monthNamesShort": ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("it-ch", {
      "dayNames": ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
      "dayNamesShort": ["do", "lu", "ma", "me", "gi", "ve", "sa"],
      "monthNames": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
      "monthNamesShort": ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("ja-jp", {
      "dayNames": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
      "dayNamesShort": ["日", "月", "火", "水", "木", "金", "土"],
      "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ""],
      "monthNamesShort": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", ""],
      "timePattern": "H:mm",
      "datePattern": "yyyy/MM/dd",
      "dateTimePattern": "yyyy/MM/dd H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 0
    })), DayPilot.Locale.register(new DayPilot.Locale("nb-no", {
      "dayNames": ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
      "dayNamesShort": ["sø", "ma", "ti", "on", "to", "fr", "lø"],
      "monthNames": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
      "monthNamesShort": ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("nl-nl", {
      "dayNames": ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
      "dayNamesShort": ["zo", "ma", "di", "wo", "do", "vr", "za"],
      "monthNames": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
      "monthNamesShort": ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec", ""],
      "timePattern": "HH:mm",
      "datePattern": "d-M-yyyy",
      "dateTimePattern": "d-M-yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("nl-be", {
      "dayNames": ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
      "dayNamesShort": ["zo", "ma", "di", "wo", "do", "vr", "za"],
      "monthNames": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
      "monthNamesShort": ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec", ""],
      "timePattern": "H:mm",
      "datePattern": "d/MM/yyyy",
      "dateTimePattern": "d/MM/yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("nn-no", {
      "dayNames": ["søndag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
      "dayNamesShort": ["sø", "må", "ty", "on", "to", "fr", "la"],
      "monthNames": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
      "monthNamesShort": ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("pt-br", {
      "dayNames": ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
      "dayNamesShort": ["D", "S", "T", "Q", "Q", "S", "S"],
      "monthNames": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
      "monthNamesShort": ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 0
    })), DayPilot.Locale.register(new DayPilot.Locale("pl-pl", {
      "dayNames": ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
      "dayNamesShort": ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
      "monthNames": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień", ""],
      "monthNamesShort": ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru", ""],
      "timePattern": "HH:mm",
      "datePattern": "yyyy-MM-dd",
      "dateTimePattern": "yyyy-MM-dd HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("pt-pt", {
      "dayNames": ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
      "dayNamesShort": ["D", "S", "T", "Q", "Q", "S", "S"],
      "monthNames": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
      "monthNamesShort": ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez", ""],
      "timePattern": "HH:mm",
      "datePattern": "dd/MM/yyyy",
      "dateTimePattern": "dd/MM/yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 0
    })), DayPilot.Locale.register(new DayPilot.Locale("ro-ro", {
      "dayNames": ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
      "dayNamesShort": ["D", "L", "Ma", "Mi", "J", "V", "S"],
      "monthNames": ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie", ""],
      "monthNamesShort": ["ian.", "feb.", "mar.", "apr.", "mai.", "iun.", "iul.", "aug.", "sep.", "oct.", "nov.", "dec.", ""],
      "timePattern": "H:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("ru-ru", {
      "dayNames": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      "dayNamesShort": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      "monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
      "monthNamesShort": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек", ""],
      "timePattern": "H:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("sk-sk", {
      "dayNames": ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
      "dayNamesShort": ["ne", "po", "ut", "st", "št", "pi", "so"],
      "monthNames": ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december", ""],
      "monthNamesShort": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", ""],
      "timePattern": "H:mm",
      "datePattern": "d.M.yyyy",
      "dateTimePattern": "d.M.yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("sv-se", {
      "dayNames": ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
      "dayNamesShort": ["sö", "må", "ti", "on", "to", "fr", "lö"],
      "monthNames": ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december", ""],
      "monthNamesShort": ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec", ""],
      "timePattern": "HH:mm",
      "datePattern": "yyyy-MM-dd",
      "dateTimePattern": "yyyy-MM-dd HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("tr-tr", {
      "dayNames": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
      "dayNamesShort": ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
      "monthNames": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""],
      "monthNamesShort": ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara", ""],
      "timePattern": "HH:mm",
      "datePattern": "d.M.yyyy",
      "dateTimePattern": "d.M.yyyy HH:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("uk-ua", {
      "dayNames": ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"],
      "dayNamesShort": ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      "monthNames": ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень", ""],
      "monthNamesShort": ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру", ""],
      "timePattern": "H:mm",
      "datePattern": "dd.MM.yyyy",
      "dateTimePattern": "dd.MM.yyyy H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("zh-cn", {
      "dayNames": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      "dayNamesShort": ["日", "一", "二", "三", "四", "五", "六"],
      "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""],
      "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ""],
      "timePattern": "H:mm",
      "datePattern": "yyyy/M/d",
      "dateTimePattern": "yyyy/M/d H:mm",
      "timeFormat": "Clock24Hours",
      "weekStarts": 1
    })), DayPilot.Locale.register(new DayPilot.Locale("zh-tw", {
      "dayNames": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      "dayNamesShort": ["日", "一", "二", "三", "四", "五", "六"],
      "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""],
      "monthNamesShort": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""],
      "timePattern": "tt hh:mm",
      "datePattern": "yyyy/M/d",
      "dateTimePattern": "yyyy/M/d tt hh:mm",
      "timeFormat": "Clock12Hours",
      "weekStarts": 0
    })), DayPilot.Locale.US = DayPilot.Locale.find("en-us"), DayPilot.Switcher = function(e2) {
      function t2(e3, t3, a2) {
        var n2 = {};
        n2.start = e3, n2.end = t3, n2.day = a2, n2.target = i2.k.control, n2.preventDefault = function() {
          this.preventDefault.value = true;
        };
        var o = i2.H;
        o && o.start === n2.start && o.end === n2.end && o.day === n2.day && o.target === n2.target || (i2.H = n2, "function" == typeof i2.onChange && (i2.onChange(n2), n2.preventDefault.value) || "function" == typeof i2.onTimeRangeSelect && (i2.onTimeRangeSelect(n2), n2.preventDefault.value) || (i2.k.s(i2.l), "function" == typeof i2.onChanged && i2.onChanged(n2), "function" == typeof i2.onTimeRangeSelected && i2.onTimeRangeSelected(n2)));
      }
      var i2 = this;
      this.f = [], this.i = [], this.j = {}, this.selectedClass = null, this.syncScrollbar = true, this.k = null, this.l = DayPilot.Date.today(), this.m = null, this.onChange = null, this.onChanged = null, this.onSelect = null, this.j.updateMode = function(e3) {
        var t3 = i2.j.control;
        t3 && (t3.selectMode = e3, t3.select(i2.l));
      }, this.addView = function(e3, t3) {
        var a2;
        if ("string" == typeof e3) {
          if (a2 = document.getElementById(e3), !a2) throw "Element not found: " + e3;
        } else a2 = e3;
        var n2 = a2, o = {};
        return o.n = true, o.o = n2.id, o.control = n2, o.p = t3 || {}, o.q = function() {
          n2.hide ? n2.hide() : n2.nav && n2.nav.top ? n2.nav.top.style.display = "none" : n2.style.display = "none";
        }, o.s = function(e4) {
          (function() {
            return !!n2.backendUrl || !("function" != typeof WebForm_DoCallback || !n2.uniqueID);
          })() ? n2.commandCallBack && n2.commandCallBack("navigate", {
            "day": e4
          }) : (n2.startDate = e4, n2.update());
        }, o.t = function() {
          i2.u(), n2.show ? n2.show() : n2.nav && n2.nav.top ? n2.nav.top.style.display = "" : n2.style.display = "";
        }, o.z = function() {
          if (o.p.navigatorSelectMode) return o.p.navigatorSelectMode;
          if (n2.isCalendar) switch (n2.viewType) {
            case "Day":
              return "day";
            case "Week":
              return "week";
            case "WorkWeek":
              return "week";
            default:
              return "day";
          }
          else if (n2.isMonth) switch (n2.viewType) {
            case "Month":
              return "month";
            case "Weeks":
              return "week";
            default:
              return "day";
          }
          return "day";
        }, this.f.push(o), o;
      }, this.addTrigger = function(e3, t3) {
        var a2;
        if ("string" == typeof e3) {
          if (a2 = document.getElementById(e3), !a2) throw "Element not found: " + e3;
        } else a2 = e3;
        var n2 = this.A(t3);
        n2 || (n2 = this.addView(t3));
        var o = {};
        return o.B = true, o.C = a2, o.o = a2.id, o.D = n2, o.E = function(e4) {
          i2.show(o), i2.F(o), e4 && (e4.preventDefault ? e4.preventDefault() : e4.returnValue = false);
        }, DayPilot.re(a2, "click", o.E), this.i.push(o), o;
      }, this.addButton = this.addTrigger, this.select = function(e3) {
        var t3 = this.G(e3);
        t3 ? t3.E() : this.i.length > 0 && this.i[0].E();
      }, this.G = function(e3) {
        for (var t3 = 0; t3 < this.i.length; t3++) {
          var i3 = this.i[t3];
          if (i3.o === e3) return i3;
        }
        return null;
      }, this.F = function(e3) {
        if (this.selectedClass) {
          for (var t3 = 0; t3 < this.i.length; t3++) {
            var i3 = this.i[t3];
            DayPilot.Util.removeClass(i3.C, this.selectedClass);
          }
          DayPilot.Util.addClass(e3.C, this.selectedClass);
        }
      }, this.addNavigator = function(e3) {
        i2.j.control = e3, e3.timeRangeSelectedHandling = "JavaScript", e3.onTimeRangeSelected = function() {
          var a2, n2, o;
          if (1 === e3.api) a2 = arguments[0], n2 = arguments[1], o = arguments[2];
          else {
            var r = arguments[0];
            a2 = r.start, n2 = r.end, o = r.day;
          }
          i2.l = o, t2(a2, n2, o);
        };
      }, this.show = function(e3) {
        var a2, n2;
        if (e3.B) n2 = e3, a2 = n2.D;
        else if (a2 = e3.n ? e3 : this.A(e3), this.k === a2) return;
        if (i2.onSelect) {
          var o = {};
          o.source = n2 ? n2.C : null, o.target = a2.control, i2.onSelect(o);
        }
        if (i2.syncScrollbar) {
          var r = this.k && this.k.control;
          r && r.isCalendar && (i2.m = r.getScrollY());
        }
        this.k = a2, a2.t(), null !== i2.m && a2.control.isCalendar && a2.control.setScrollY(i2.m);
        var s = a2.z();
        i2.j.updateMode(s), t2(i2.j.control.selectionStart, i2.j.control.selectionEnd.addDays(1), i2.j.control.selectionDay);
      }, this.A = function(e3) {
        for (var t3 = 0; t3 < this.f.length; t3++) if (this.f[t3].control === e3) return this.f[t3];
        return null;
      }, this.u = function() {
        for (var e3 = 0; e3 < this.f.length; e3++) this.f[e3].q();
      }, Object.defineProperty(this, "active", {
        get: function() {
          return i2.k;
        }
      }), this.events = {}, this.events.load = function(e3, t3, a2) {
        if (!i2.k || !i2.k.control) throw "DayPilot.Switcher.events.load(): Active view not found";
        i2.k.control.events.load(e3, t3, a2);
      }, this.H = null, this.I = function() {
        if (e2) for (var t3 in e2) if ("triggers" === t3) {
          var a2 = e2.triggers || [];
          a2.forEach(function(e3) {
            i2.addTrigger(e3.id, e3.view);
          });
        } else "navigator" === t3 ? i2.addNavigator(e2.navigator) : i2[t3] = e2[t3];
      }, this.I();
    }, DayPilot.Duration = function(e2) {
      var t2 = this, i2 = 864e5, a2 = 36e5, n2 = 6e4, o = 1e3;
      if (2 === arguments.length) {
        var r = arguments[0], s = arguments[1];
        if (!(r instanceof DayPilot.Date) && "string" != typeof r) throw "DayPilot.Duration(): Invalid start argument, DayPilot.Date expected";
        if (!(s instanceof DayPilot.Date) && "string" != typeof s) throw "DayPilot.Duration(): Invalid end argument, DayPilot.Date expected";
        "string" == typeof r && (r = new DayPilot.Date(r)), "string" == typeof s && (s = new DayPilot.Date(s)), e2 = s.getTime() - r.getTime();
      }
      return this.ticks = e2, DayPilot.Date.Cache.DurationCtor["" + e2] ? DayPilot.Date.Cache.DurationCtor["" + e2] : (DayPilot.Date.Cache.DurationCtor["" + e2] = this, this.toString = function(e3) {
        if (!e3) return t2.days() + "." + t2.hours() + ":" + t2.minutes() + ":" + t2.seconds() + "." + t2.milliseconds();
        var i3 = t2.minutes();
        i3 = (i3 < 10 ? "0" : "") + i3;
        var a3 = e3;
        return a3 = a3.replace("mm", i3), a3 = a3.replace("m", t2.minutes()), a3 = a3.replace("H", t2.hours()), a3 = a3.replace("h", t2.hours()), a3 = a3.replace("d", t2.days()), a3 = a3.replace("s", t2.seconds());
      }, this.totalHours = function() {
        return t2.ticks / a2;
      }, this.totalDays = function() {
        return t2.ticks / i2;
      }, this.totalMinutes = function() {
        return t2.ticks / n2;
      }, this.totalSeconds = function() {
        return t2.ticks / o;
      }, this.days = function() {
        return Math.floor(t2.totalDays());
      }, this.hours = function() {
        var e3 = t2.ticks - t2.days() * i2;
        return Math.floor(e3 / a2);
      }, this.minutes = function() {
        var e3 = t2.ticks - Math.floor(t2.totalHours()) * a2;
        return Math.floor(e3 / n2);
      }, this.seconds = function() {
        var e3 = t2.ticks - Math.floor(t2.totalMinutes()) * n2;
        return Math.floor(e3 / o);
      }, void (this.milliseconds = function() {
        return t2.ticks % o;
      }));
    }, DayPilot.Duration.weeks = function(e2) {
      return new DayPilot.Duration(1e3 * e2 * 60 * 60 * 24 * 7);
    }, DayPilot.Duration.days = function(e2) {
      return new DayPilot.Duration(1e3 * e2 * 60 * 60 * 24);
    }, DayPilot.Duration.hours = function(e2) {
      return new DayPilot.Duration(1e3 * e2 * 60 * 60);
    }, DayPilot.Duration.minutes = function(e2) {
      return new DayPilot.Duration(1e3 * e2 * 60);
    }, DayPilot.Duration.seconds = function(e2) {
      return new DayPilot.Duration(1e3 * e2);
    }, DayPilot.TimeSpan = function() {
      throw "Please use DayPilot.Duration class instead of DayPilot.TimeSpan.";
    };
    try {
      DayPilot.TimeSpan.prototype = Object.create(DayPilot.Duration.prototype);
    } catch (e2) {
    }
    DayPilot.Date = function(t2, i2) {
      if (t2 instanceof DayPilot.Date) return t2;
      var a2;
      DayPilot.Util.isNullOrUndefined(t2) && (a2 = DayPilot.DateUtil.fromLocal().getTime(), t2 = a2);
      var n2 = DayPilot.Date.Cache.Ctor;
      if (n2[t2]) return DayPilot.Stats.cacheHitsCtor += 1, n2[t2];
      var o = false;
      if ("string" == typeof t2) a2 = DayPilot.DateUtil.fromStringSortable(t2, i2).getTime(), o = true;
      else if ("number" == typeof t2) {
        if (isNaN(t2)) throw "Cannot create DayPilot.Date from NaN";
        a2 = t2;
      } else {
        if (!(t2 instanceof Date)) throw "Unrecognized parameter: use Date, number or string in ISO 8601 format";
        a2 = i2 ? DayPilot.DateUtil.fromLocal(t2).getTime() : t2.getTime();
      }
      var r = e(a2);
      return n2[r] ? n2[r] : (n2[r] = this, n2[a2] = this, o && r !== t2 && DayPilot.DateUtil.hasTzSpec(t2) && (n2[t2] = this), Object.defineProperty ? (Object.defineProperty(this, "ticks", {
        get: function() {
          return a2;
        }
      }), Object.defineProperty(this, "value", {
        "value": r,
        "writable": false,
        "enumerable": true
      })) : (this.ticks = a2, this.value = r), DayPilot.Date.Config.legacyShowD && (this.d = new Date(a2)), void (DayPilot.Stats.dateObjects += 1));
    }, DayPilot.Date.Config = {}, DayPilot.Date.Config.legacyShowD = false, DayPilot.Date.Cache = {}, DayPilot.Date.Cache.Parsing = {}, DayPilot.Date.Cache.Ctor = {}, DayPilot.Date.Cache.Ticks = {}, DayPilot.Date.Cache.DurationCtor = {}, DayPilot.Date.Cache.clear = function() {
      DayPilot.Date.Cache.Parsing = {}, DayPilot.Date.Cache.Ctor = {}, DayPilot.Date.Cache.Ticks = {}, DayPilot.Date.Cache.DurationCtor = {};
    }, DayPilot.Date.prototype.addDays = function(e2) {
      return e2 ? new DayPilot.Date(this.ticks + 24 * e2 * 60 * 60 * 1e3) : this;
    }, DayPilot.Date.prototype.addHours = function(e2) {
      return e2 ? this.addTime(60 * e2 * 60 * 1e3) : this;
    }, DayPilot.Date.prototype.addMilliseconds = function(e2) {
      return e2 ? this.addTime(e2) : this;
    }, DayPilot.Date.prototype.addMinutes = function(e2) {
      return e2 ? this.addTime(60 * e2 * 1e3) : this;
    }, DayPilot.Date.prototype.addMonths = function(e2) {
      if (!e2) return this;
      var t2 = new Date(this.ticks), i2 = t2.getUTCFullYear(), a2 = t2.getUTCMonth() + 1;
      if (e2 > 0) {
        for (; e2 >= 12; ) e2 -= 12, i2++;
        e2 > 12 - a2 ? (i2++, a2 = e2 - (12 - a2)) : a2 += e2;
      } else {
        for (; e2 <= -12; ) e2 += 12, i2--;
        a2 + e2 <= 0 ? (i2--, a2 = 12 + a2 + e2) : a2 += e2;
      }
      var n2 = new Date(t2.getTime());
      n2.setUTCDate(1), n2.setUTCFullYear(i2), n2.setUTCMonth(a2 - 1);
      var o = new DayPilot.Date(n2).daysInMonth();
      return n2.setUTCDate(Math.min(o, t2.getUTCDate())), new DayPilot.Date(n2);
    }, DayPilot.Date.prototype.addSeconds = function(e2) {
      return e2 ? this.addTime(1e3 * e2) : this;
    }, DayPilot.Date.prototype.addTime = function(e2) {
      return e2 ? (e2 instanceof DayPilot.Duration && (e2 = e2.ticks), new DayPilot.Date(this.ticks + e2)) : this;
    }, DayPilot.Date.prototype.addYears = function(e2) {
      var t2 = new Date(this.ticks), i2 = new Date(this.ticks), a2 = this.getYear() + e2, n2 = this.getMonth();
      i2.setUTCDate(1), i2.setUTCFullYear(a2), i2.setUTCMonth(n2);
      var o = new DayPilot.Date(i2).daysInMonth();
      return i2.setUTCDate(Math.min(o, t2.getUTCDate())), new DayPilot.Date(i2);
    }, DayPilot.Date.prototype.dayOfWeek = function() {
      return new Date(this.ticks).getUTCDay();
    }, DayPilot.Date.prototype.getDayOfWeek = function() {
      return new Date(this.ticks).getUTCDay();
    }, DayPilot.Date.prototype.getDayOfYear = function() {
      var e2 = this.firstDayOfYear();
      return DayPilot.DateUtil.daysDiff(e2, this) + 1;
    }, DayPilot.Date.prototype.daysInMonth = function() {
      var e2 = new Date(this.ticks), t2 = e2.getUTCMonth() + 1, i2 = e2.getUTCFullYear(), a2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return 2 !== t2 ? a2[t2 - 1] : i2 % 4 !== 0 ? a2[1] : i2 % 100 === 0 && i2 % 400 !== 0 ? a2[1] : a2[1] + 1;
    }, DayPilot.Date.prototype.daysInYear = function() {
      var e2 = this.getYear();
      return e2 % 4 !== 0 ? 365 : e2 % 100 === 0 && e2 % 400 !== 0 ? 365 : 366;
    }, DayPilot.Date.prototype.dayOfYear = function() {
      return Math.ceil((this.getDatePart().getTime() - this.firstDayOfYear().getTime()) / 864e5) + 1;
    }, DayPilot.Date.prototype.equals = function(e2) {
      if (null === e2) return false;
      if (e2 instanceof DayPilot.Date) return this === e2;
      throw "The parameter must be a DayPilot.Date object (DayPilot.Date.equals())";
    }, DayPilot.Date.prototype.firstDayOfMonth = function() {
      var e2 = /* @__PURE__ */ new Date();
      return e2.setUTCFullYear(this.getYear(), this.getMonth(), 1), e2.setUTCHours(0), e2.setUTCMinutes(0), e2.setUTCSeconds(0), e2.setUTCMilliseconds(0), new DayPilot.Date(e2);
    }, DayPilot.Date.prototype.firstDayOfYear = function() {
      var e2 = this.getYear(), t2 = /* @__PURE__ */ new Date();
      return t2.setUTCFullYear(e2, 0, 1), t2.setUTCHours(0), t2.setUTCMinutes(0), t2.setUTCSeconds(0), t2.setUTCMilliseconds(0), new DayPilot.Date(t2);
    }, DayPilot.Date.prototype.firstDayOfWeek = function(e2) {
      var t2 = this;
      if (e2 instanceof DayPilot.Locale) e2 = e2.weekStarts;
      else if ("string" == typeof e2 && DayPilot.Locale.find(e2)) {
        var i2 = DayPilot.Locale.find(e2);
        e2 = i2.weekStarts;
      } else e2 = e2 || 0;
      for (var a2 = t2.dayOfWeek(); a2 !== e2; ) t2 = t2.addDays(-1), a2 = t2.dayOfWeek();
      return new DayPilot.Date(t2);
    }, DayPilot.Date.prototype.getDay = function() {
      return new Date(this.ticks).getUTCDate();
    }, DayPilot.Date.prototype.getDatePart = function() {
      var e2 = new Date(this.ticks);
      return e2.setUTCHours(0), e2.setUTCMinutes(0), e2.setUTCSeconds(0), e2.setUTCMilliseconds(0), new DayPilot.Date(e2);
    }, DayPilot.Date.prototype.getYear = function() {
      return new Date(this.ticks).getUTCFullYear();
    }, DayPilot.Date.prototype.getHours = function() {
      return new Date(this.ticks).getUTCHours();
    }, DayPilot.Date.prototype.getMilliseconds = function() {
      return new Date(this.ticks).getUTCMilliseconds();
    }, DayPilot.Date.prototype.getMinutes = function() {
      return new Date(this.ticks).getUTCMinutes();
    }, DayPilot.Date.prototype.getMonth = function() {
      return new Date(this.ticks).getUTCMonth();
    }, DayPilot.Date.prototype.getSeconds = function() {
      return new Date(this.ticks).getUTCSeconds();
    }, DayPilot.Date.prototype.getTotalTicks = function() {
      return this.getTime();
    }, DayPilot.Date.prototype.getTime = function() {
      return this.ticks;
    }, DayPilot.Date.prototype.getTimePart = function() {
      var e2 = this.getDatePart();
      return DayPilot.DateUtil.diff(this, e2);
    }, DayPilot.Date.prototype.lastDayOfMonth = function() {
      var e2 = new Date(this.firstDayOfMonth().getTime()), t2 = this.daysInMonth();
      return e2.setUTCDate(t2), new DayPilot.Date(e2);
    }, DayPilot.Date.prototype.weekNumber = function() {
      var e2 = this.firstDayOfYear(), t2 = (this.getTime() - e2.getTime()) / 864e5;
      return Math.ceil((t2 + e2.dayOfWeek() + 1) / 7);
    }, DayPilot.Date.prototype.weekNumberISO = function() {
      var e2 = false, t2 = this.dayOfYear(), i2 = this.firstDayOfYear().dayOfWeek(), a2 = this.firstDayOfYear().addYears(1).addDays(-1).dayOfWeek();
      0 === i2 && (i2 = 7), 0 === a2 && (a2 = 7);
      var n2 = 8 - i2;
      4 !== i2 && 4 !== a2 || (e2 = true);
      var o = Math.ceil((t2 - n2) / 7), r = o;
      return n2 >= 4 && (r += 1), r > 52 && !e2 && (r = 1), 0 === r && (r = this.firstDayOfYear().addDays(-1).weekNumberISO()), r;
    }, DayPilot.Date.prototype.toDateLocal = function() {
      var e2 = new Date(this.ticks), t2 = /* @__PURE__ */ new Date();
      return t2.setFullYear(e2.getUTCFullYear(), e2.getUTCMonth(), e2.getUTCDate()), t2.setHours(e2.getUTCHours()), t2.setMinutes(e2.getUTCMinutes()), t2.setSeconds(e2.getUTCSeconds()), t2.setMilliseconds(e2.getUTCMilliseconds()), t2;
    }, DayPilot.Date.prototype.toDate = function() {
      return new Date(this.ticks);
    }, DayPilot.Date.prototype.toJSON = function() {
      return this.value;
    }, DayPilot.Date.prototype.toString = function(e2, t2) {
      return e2 ? new n(e2, t2).print(this) : this.toStringSortable();
    }, DayPilot.Date.prototype.toStringSortable = function() {
      return e(this.ticks);
    }, DayPilot.Date.parse = function(e2, t2, i2) {
      return new n(t2, i2).parse(e2);
    };
    DayPilot.Date.today = function() {
      return new DayPilot.Date(DayPilot.DateUtil.localToday(), true);
    }, DayPilot.Date.now = function() {
      return new DayPilot.Date();
    }, DayPilot.Date.fromYearMonthDay = function(e2, t2, i2) {
      t2 = t2 || 1, i2 = i2 || 1;
      var a2 = /* @__PURE__ */ new Date(0);
      return a2.setUTCFullYear(e2), a2.setUTCMonth(t2 - 1), a2.setUTCDate(i2), new DayPilot.Date(a2);
    }, DayPilot.DateUtil = {}, DayPilot.DateUtil.fromStringSortable = function(e2, t2) {
      if (!e2) throw "Can't create DayPilot.Date from an empty string";
      var i2 = e2.length, a2 = 10 === i2, n2 = 19 === i2, o = i2 > 19;
      if (!a2 && !n2 && !o) throw "Invalid string format (use '2010-01-01' or '2010-01-01T00:00:00'): " + e2;
      if (DayPilot.Date.Cache.Parsing[e2] && !t2) return DayPilot.Stats.cacheHitsParsing += 1, DayPilot.Date.Cache.Parsing[e2];
      var r = e2.substring(0, 4), s = e2.substring(5, 7), l = e2.substring(8, 10), d = /* @__PURE__ */ new Date(0);
      if (d.setUTCFullYear(r, s - 1, l), a2) return DayPilot.Date.Cache.Parsing[e2] = d, d;
      var c = e2.substring(11, 13), u = e2.substring(14, 16), h = e2.substring(17, 19);
      if (d.setUTCHours(c), d.setUTCMinutes(u), d.setUTCSeconds(h), n2) return DayPilot.Date.Cache.Parsing[e2] = d, d;
      var f = e2[19], m = 0;
      if ("." === f) {
        var p = parseInt(e2.substring(20, 23));
        d.setUTCMilliseconds(p), m = DayPilot.DateUtil.getTzOffsetMinutes(e2.substring(23));
      } else m = DayPilot.DateUtil.getTzOffsetMinutes(e2.substring(19));
      var v = new DayPilot.Date(d);
      return t2 || (v = v.addMinutes(-m)), d = v.toDate(), DayPilot.Date.Cache.Parsing[e2] = d, d;
    }, DayPilot.DateUtil.getTzOffsetMinutes = function(e2) {
      if (DayPilot.Util.isNullOrUndefined(e2) || "" === e2) return 0;
      if ("Z" === e2) return 0;
      var t2 = e2[0], i2 = parseInt(e2.substring(1, 3)), a2 = parseInt(e2.substring(4)), n2 = 60 * i2 + a2;
      if ("-" === t2) return -n2;
      if ("+" === t2) return n2;
      throw "Invalid timezone spec: " + e2;
    }, DayPilot.DateUtil.hasTzSpec = function(e2) {
      return !!e2.indexOf("+") || !!e2.indexOf("-");
    }, DayPilot.DateUtil.daysDiff = function(e2, t2) {
      if (e2 && t2 || function() {
        throw "two parameters required";
      }(), e2 = new DayPilot.Date(e2), t2 = new DayPilot.Date(t2), e2.getTime() > t2.getTime()) return null;
      for (var i2 = 0, a2 = e2.getDatePart(), n2 = t2.getDatePart(); a2 < n2; ) a2 = a2.addDays(1), i2++;
      return i2;
    }, DayPilot.DateUtil.daysSpan = function(e2, t2) {
      if (e2 && t2 || function() {
        throw "two parameters required";
      }(), e2 = new DayPilot.Date(e2), t2 = new DayPilot.Date(t2), e2.getTime() === t2.getTime()) return 0;
      var i2 = DayPilot.DateUtil.daysDiff(e2, t2);
      return t2.getTime() == t2.getDatePart().getTime() && i2--, i2;
    }, DayPilot.DateUtil.diff = function(e2, t2) {
      if (!(e2 && t2 && e2.getTime && t2.getTime)) throw "Both compared objects must be Date objects (DayPilot.Date.diff).";
      return e2.getTime() - t2.getTime();
    }, DayPilot.DateUtil.fromLocal = function(e2) {
      e2 || (e2 = /* @__PURE__ */ new Date());
      var t2 = /* @__PURE__ */ new Date();
      return t2.setUTCFullYear(e2.getFullYear(), e2.getMonth(), e2.getDate()), t2.setUTCHours(e2.getHours()), t2.setUTCMinutes(e2.getMinutes()), t2.setUTCSeconds(e2.getSeconds()), t2.setUTCMilliseconds(e2.getMilliseconds()), t2;
    }, DayPilot.DateUtil.localToday = function() {
      var e2 = /* @__PURE__ */ new Date();
      return e2.setHours(0), e2.setMinutes(0), e2.setSeconds(0), e2.setMilliseconds(0), e2;
    }, DayPilot.DateUtil.hours = function(e2, t2) {
      var i2 = e2.getUTCMinutes();
      i2 < 10 && (i2 = "0" + i2);
      var a2 = e2.getUTCHours();
      if (t2) {
        var n2 = a2 < 12, a2 = a2 % 12;
        0 === a2 && (a2 = 12);
        return a2 + ":" + i2 + " " + (n2 ? "AM" : "PM");
      }
      return a2 + ":" + i2;
    }, DayPilot.DateUtil.max = function(e2, t2) {
      return e2.getTime() > t2.getTime() ? e2 : t2;
    }, DayPilot.DateUtil.min = function(e2, t2) {
      return e2.getTime() < t2.getTime() ? e2 : t2;
    };
    var n = function(e2, i2) {
      "string" == typeof i2 && (i2 = DayPilot.Locale.find(i2));
      var i2 = i2 || DayPilot.Locale.US, a2 = [{
        "seq": "yyyy",
        "expr": "[0-9]{4,4}",
        "str": function(e3) {
          return e3.getYear();
        }
      }, {
        "seq": "yy",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          return e3.getYear() % 100;
        }
      }, {
        "seq": "mm",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          var t2 = e3.getMinutes();
          return t2 < 10 ? "0" + t2 : t2;
        }
      }, {
        "seq": "m",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          return e3.getMinutes();
        }
      }, {
        "seq": "HH",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          var t2 = e3.getHours();
          return t2 < 10 ? "0" + t2 : t2;
        }
      }, {
        "seq": "H",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          return e3.getHours();
        }
      }, {
        "seq": "hh",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          var t2 = e3.getHours(), t2 = t2 % 12;
          0 === t2 && (t2 = 12);
          var i3 = t2;
          return i3 < 10 ? "0" + i3 : i3;
        }
      }, {
        "seq": "h",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          var t2 = e3.getHours(), t2 = t2 % 12;
          return 0 === t2 && (t2 = 12), t2;
        }
      }, {
        "seq": "ss",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          var t2 = e3.getSeconds();
          return t2 < 10 ? "0" + t2 : t2;
        }
      }, {
        "seq": "s",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          return e3.getSeconds();
        }
      }, {
        "seq": "MMMM",
        "expr": "[^\\s0-9]*",
        "str": function(e3) {
          return i2.monthNames[e3.getMonth()];
        },
        "transform": function(e3) {
          var a3 = DayPilot.indexOf(i2.monthNames, e3, t);
          return a3 < 0 ? null : a3 + 1;
        }
      }, {
        "seq": "MMM",
        "expr": "[^\\s0-9]*",
        "str": function(e3) {
          return i2.monthNamesShort[e3.getMonth()];
        },
        "transform": function(e3) {
          var a3 = DayPilot.indexOf(i2.monthNamesShort, e3, t);
          return a3 < 0 ? null : a3 + 1;
        }
      }, {
        "seq": "MM",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          var t2 = e3.getMonth() + 1;
          return t2 < 10 ? "0" + t2 : t2;
        }
      }, {
        "seq": "M",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          return e3.getMonth() + 1;
        }
      }, {
        "seq": "dddd",
        "expr": "[^\\s0-9]*",
        "str": function(e3) {
          return i2.dayNames[e3.getDayOfWeek()];
        }
      }, {
        "seq": "ddd",
        "expr": "[^\\s0-9]*",
        "str": function(e3) {
          return i2.dayNamesShort[e3.getDayOfWeek()];
        }
      }, {
        "seq": "dd",
        "expr": "[0-9]{2,2}",
        "str": function(e3) {
          var t2 = e3.getDay();
          return t2 < 10 ? "0" + t2 : t2;
        }
      }, {
        "seq": "%d",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          return e3.getDay();
        }
      }, {
        "seq": "d",
        "expr": "[0-9]{1,2}",
        "str": function(e3) {
          return e3.getDay();
        }
      }, {
        "seq": "tt",
        "expr": "(AM|PM|am|pm)",
        "str": function(e3) {
          return e3.getHours() < 12 ? "AM" : "PM";
        },
        "transform": function(e3) {
          return e3.toUpperCase();
        }
      }], n2 = function(e3) {
        return e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      };
      this.init = function() {
        this.year = this.findSequence("yyyy"), this.month = this.findSequence("MMMM") || this.findSequence("MMM") || this.findSequence("MM") || this.findSequence("M"), this.day = this.findSequence("dd") || this.findSequence("d"), this.hours = this.findSequence("HH") || this.findSequence("H"), this.minutes = this.findSequence("mm") || this.findSequence("m"), this.seconds = this.findSequence("ss") || this.findSequence("s"), this.ampm = this.findSequence("tt"), this.hours12 = this.findSequence("hh") || this.findSequence("h");
      }, this.findSequence = function(t2) {
        function i3(e3) {
          return parseInt(e3);
        }
        return e2.indexOf(t2) === -1 ? null : {
          "findValue": function(o) {
            for (var r = n2(e2), s = null, l = 0; l < a2.length; l++) {
              var d = (a2[l].length, t2 === a2[l].seq), c = a2[l].expr;
              d && (c = "(" + c + ")", s = a2[l].transform), r = r.replace(a2[l].seq, c);
            }
            r = "^" + r + "$";
            try {
              var u = new RegExp(r), h = u.exec(o);
              return h ? (s = s || i3)(h[1]) : null;
            } catch (e3) {
              throw "unable to create regex from: " + r;
            }
          }
        };
      }, this.print = function(t2) {
        for (var i3 = function(e3) {
          for (var t3 = 0; t3 < a2.length; t3++) if (a2[t3] && a2[t3].seq === e3) return a2[t3];
          return null;
        }, n3 = e2.length <= 0, o = 0, r = []; !n3; ) {
          var s = e2.substring(o), l = /%?(.)\1*/.exec(s);
          if (l && l.length > 0) {
            var d = l[0], c = i3(d);
            c ? r.push(c) : r.push(d), o += d.length, n3 = e2.length <= o;
          } else n3 = true;
        }
        for (var u = 0; u < r.length; u++) {
          var h = r[u];
          "string" != typeof h && (r[u] = h.str(t2));
        }
        return r.join("");
      }, this.parse = function(e3) {
        var t2 = this.year.findValue(e3);
        if (!t2) return null;
        var i3 = this.month.findValue(e3);
        if (DayPilot.Util.isNullOrUndefined(i3)) return null;
        if (i3 > 12 || i3 < 1) return null;
        var a3 = this.day.findValue(e3), n3 = DayPilot.Date.fromYearMonthDay(t2, i3).daysInMonth();
        if (a3 < 1 || a3 > n3) return null;
        var o = this.hours ? this.hours.findValue(e3) : 0, r = this.minutes ? this.minutes.findValue(e3) : 0, s = this.seconds ? this.seconds.findValue(e3) : 0, l = this.ampm ? this.ampm.findValue(e3) : null;
        if (this.ampm && this.hours12) {
          var d = this.hours12.findValue(e3);
          if (d < 1 || d > 12) return null;
          o = "PM" === l ? 12 === d ? 12 : d + 12 : 12 === d ? 0 : d;
        }
        if (o < 0 || o > 23) return null;
        if (r < 0 || r > 59) return null;
        if (s < 0 || s > 59) return null;
        var c = /* @__PURE__ */ new Date();
        return c.setUTCFullYear(t2, i3 - 1, a3), c.setUTCHours(o), c.setUTCMinutes(r), c.setUTCSeconds(s), c.setUTCMilliseconds(0), new DayPilot.Date(c);
      }, this.init();
    };
    DayPilot.ColorUtil = {}, DayPilot.ColorUtil.hexToRgb = function(e2) {
      if (!/^#[0-9a-f]{6}$/i.test(e2)) throw new DayPilot.Exception("Invalid color, only full hex color string accepted, eg. '#ffaaff'.");
      return e2 = e2.replace("#", ""), {
        r: parseInt(e2.substring(0, 2), 16),
        g: parseInt(e2.substring(2, 4), 16),
        b: parseInt(e2.substring(4, 6), 16)
      };
    }, DayPilot.ColorUtil.rgbToHex = function(e2) {
      return "#" + i(e2.r) + i(e2.g) + i(e2.b);
    }, DayPilot.ColorUtil.adjustLuminance = function(e2, t2) {
      return {
        r: e2.r + t2,
        g: e2.g + t2,
        b: e2.b + t2
      };
    }, DayPilot.ColorUtil.darker = function(e2, t2) {
      var i2 = "";
      9 === e2.length && (i2 = e2.slice(7, 9), e2 = e2.slice(0, 7));
      var a2 = DayPilot.ColorUtil.hexToRgb(e2);
      "number" != typeof t2 && (t2 = 1);
      var n2 = 17, o = Math.round(t2 * n2), r = DayPilot.ColorUtil.adjustLuminance(a2, -o);
      return DayPilot.ColorUtil.rgbToHex(r) + i2;
    }, DayPilot.ColorUtil.lighter = function(e2, t2) {
      return "number" != typeof t2 && (t2 = 1), DayPilot.ColorUtil.darker(e2, -t2);
    }, DayPilot.ColorUtil.pl = function(e2) {
      var t2 = DayPilot.ColorUtil.hexToRgb(e2), i2 = t2.r / 255, a2 = t2.g / 255, n2 = t2.b / 255;
      return Math.sqrt(0.299 * i2 * i2 + 0.587 * a2 * a2 + 0.114 * n2 * n2);
    }, DayPilot.ColorUtil.contrasting = function(e2, t2, i2) {
      var a2 = DayPilot.ColorUtil.pl(e2);
      return t2 = t2 || "#ffffff", i2 = i2 || "#000000", a2 > 0.5 ? i2 : t2;
    }, DayPilot.Event = function(e2, t2, i2) {
      var a2 = this;
      this.calendar = t2, this.data = e2 ? e2 : {}, this.part = i2 ? i2 : {}, "undefined" == typeof this.data.id && (this.data.id = this.data.value);
      var n2 = {}, o = ["id", "text", "start", "end", "resource"];
      this.isEvent = true, this.temp = function() {
        if (n2.dirty) return n2;
        for (var e3 = 0; e3 < o.length; e3++) n2[o[e3]] = a2.data[o[e3]];
        return n2.dirty = true, n2;
      }, this.copy = function() {
        for (var e3 = {}, t3 = 0; t3 < o.length; t3++) e3[o[t3]] = a2.data[o[t3]];
        return e3;
      }, this.commit = function() {
        if (n2.dirty) {
          for (var e3 = 0; e3 < o.length; e3++) a2.data[o[e3]] = n2[o[e3]];
          n2.dirty = false;
        }
      }, this.dirty = function() {
        return n2.dirty;
      }, this.id = function(e3) {
        return "undefined" == typeof e3 ? a2.data.id : void (this.temp().id = e3);
      }, this.value = function(e3) {
        return "undefined" == typeof e3 ? a2.id() : void a2.id(e3);
      }, this.text = function(e3) {
        return "undefined" == typeof e3 ? a2.data.text : (this.temp().text = e3, void this.client.innerHTML(e3));
      }, this.start = function(e3) {
        return "undefined" == typeof e3 ? new DayPilot.Date(a2.data.start) : void (this.temp().start = new DayPilot.Date(e3));
      }, this.end = function(e3) {
        return "undefined" == typeof e3 ? new DayPilot.Date(a2.data.end) : void (this.temp().end = new DayPilot.Date(e3));
      }, this.resource = function(e3) {
        return "undefined" == typeof e3 ? a2.data.resource : void (this.temp().resource = e3);
      }, this.partStart = function() {
        return new DayPilot.Date(this.part.start);
      }, this.partEnd = function() {
        return new DayPilot.Date(this.part.end);
      }, this.tag = function(e3) {
        var t3 = a2.data.tag;
        if (!t3) return null;
        if ("undefined" == typeof e3) return a2.data.tag;
        for (var i3 = a2.calendar.tagFields, n3 = -1, o2 = 0; o2 < i3.length; o2++) e3 === i3[o2] && (n3 = o2);
        if (n3 === -1) throw "Field name not found.";
        return t3[n3];
      }, this.client = {}, this.client.innerHTML = function(e3) {
        if ("undefined" == typeof e3) {
          var t3 = a2.cache || a2.data, i3 = a2.calendar && a2.calendar.internal && a2.calendar.internal.xssTextHtml;
          return i3 ? i3(t3.text, t3.html) : DayPilot.Util.escapeTextHtml(t3.text, t3.html);
        }
        a2.data.html = e3;
      }, this.client.html = this.client.innerHTML, this.client.header = function(e3) {
        return "undefined" == typeof e3 ? a2.data.header : void (a2.data.header = e3);
      }, this.client.cssClass = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.cssClass ? a2.cache.cssClass : a2.data.cssClass : void (a2.data.cssClass = e3);
      }, this.client.toolTip = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.toolTip ? a2.cache.toolTip : "undefined" != typeof a2.data.toolTip ? a2.data.toolTip : a2.data.text : void (a2.data.toolTip = e3);
      }, this.client.barVisible = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.barHidden ? !a2.cache.barHidden : a2.calendar.durationBarVisible && !a2.data.barHidden : void (a2.data.barHidden = !e3);
      }, this.client.backColor = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.backColor ? a2.cache.backColor : "undefined" != typeof a2.data.backColor ? a2.data.backColor : a2.calendar.eventBackColor : void (a2.data.backColor = e3);
      }, this.client.borderColor = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.borderColor ? a2.cache.borderColor : "undefined" != typeof a2.data.borderColor ? a2.data.borderColor : a2.calendar.eventBorderColor : void (a2.data.borderColor = e3);
      }, this.client.contextMenu = function(e3) {
        if ("undefined" == typeof e3) {
          if (a2.oContextMenu) return a2.oContextMenu;
          a2.cache ? a2.cache.contextMenu : a2.data.contextMenu;
        } else a2.oContextMenu = e3;
      }, this.client.moveEnabled = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.moveDisabled ? !a2.cache.moveDisabled : "Disabled" !== a2.calendar.eventMoveHandling && !a2.data.moveDisabled : void (a2.data.moveDisabled = !e3);
      }, this.client.resizeEnabled = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.resizeDisabled ? !a2.cache.resizeDisabled : "Disabled" !== a2.calendar.eventResizeHandling && !a2.data.resizeDisabled : void (a2.data.resizeDisabled = !e3);
      }, this.client.clickEnabled = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.clickDisabled ? !a2.cache.clickDisabled : "Disabled" !== a2.calendar.eventClickHandling && !a2.data.clickDisabled : void (a2.data.clickDisabled = !e3);
      }, this.client.rightClickEnabled = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.rightClickDisabled ? !a2.cache.rightClickDisabled : "Disabled" !== a2.calendar.eventRightClickHandling && !a2.data.rightClickDisabled : void (a2.data.rightClickDisabled = !e3);
      }, this.client.deleteEnabled = function(e3) {
        return "undefined" == typeof e3 ? a2.cache && "undefined" != typeof a2.cache.deleteDisabled ? !a2.cache.deleteDisabled : "Disabled" !== a2.calendar.eventDeleteHandling && !a2.data.deleteDisabled : void (a2.data.deleteDisabled = !e3);
      }, this.toJSON = function(e3) {
        var t3 = {};
        if (t3.value = this.id(), t3.id = this.id(), t3.text = this.text(), t3.start = this.start(), t3.end = this.end(), t3.tag = {}, a2.calendar && a2.calendar.tagFields) for (var i3 = a2.calendar.tagFields, n3 = 0; n3 < i3.length; n3++) t3.tag[i3[n3]] = this.tag(i3[n3]);
        return t3;
      };
    };
  }
}(), DayPilot.JSON = {}, function() {
  function e(e2) {
    return e2 < 10 ? "0" + e2 : e2;
  }
  function t(e2) {
    return r.lastIndex = 0, r.test(e2) ? '"' + e2.replace(r, function(e3) {
      var t2 = s[e3];
      return "string" == typeof t2 ? t2 : "\\u" + ("0000" + e3.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + e2 + '"';
  }
  function i(e2, r2) {
    var s2, l, d, c, u, h = a, f = r2[e2];
    switch (f && "object" == typeof f && "function" == typeof f.toJSON2 ? f = f.toJSON2(e2) : f && "object" == typeof f && "function" == typeof f.toJSON && !f.ignoreToJSON && (f = f.toJSON(e2)), "function" == typeof o && (f = o.call(r2, e2, f)), typeof f) {
      case "string":
        return t(f);
      case "number":
        return isFinite(f) ? String(f) : "null";
      case "boolean":
      case "null":
        return String(f);
      case "object":
        if (!f) return "null";
        if (a += n, u = [], "number" == typeof f.length && !f.propertyIsEnumerable("length")) {
          for (c = f.length, s2 = 0; s2 < c; s2 += 1) u[s2] = i(s2, f) || "null";
          return d = 0 === u.length ? "[]" : a ? "[\n" + a + u.join(",\n" + a) + "\n" + h + "]" : "[" + u.join(",") + "]", a = h, d;
        }
        if (o && "object" == typeof o) for (c = o.length, s2 = 0; s2 < c; s2 += 1) l = o[s2], "string" == typeof l && (d = i(l, f), d && u.push(t(l) + (a ? ": " : ":") + d));
        else for (l in f) Object.hasOwnProperty.call(f, l) && (d = i(l, f), d && u.push(t(l) + (a ? ": " : ":") + d));
        return d = 0 === u.length ? "{}" : a ? "{\n" + a + u.join(",\n" + a) + "\n" + h + "}" : "{" + u.join(",") + "}", a = h, d;
    }
  }
  "function" != typeof Date.prototype.toJSON2 && (Date.prototype.toJSON2 = function(t2) {
    return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds());
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e2) {
    return this.valueOf();
  });
  var a, n, o, r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  };
  "function" != typeof DayPilot.JSON.stringify && (DayPilot.JSON.stringify = function(e2, t2, r2) {
    var s2;
    if (a = "", n = "", "number" == typeof r2) for (s2 = 0; s2 < r2; s2 += 1) n += " ";
    else "string" == typeof r2 && (n = r2);
    if (o = t2, t2 && "function" != typeof t2 && ("object" != typeof t2 || "number" != typeof t2.length)) throw new Error("JSON.stringify");
    return i("", {
      "": e2
    });
  });
}(), "undefined" == typeof DayPilot) var DayPilot = {};
if ("undefined" == typeof DayPilot.Global && (DayPilot.Global = {}), function() {
  var e = function() {
  };
  if ("undefined" == typeof DayPilot.Calendar || !DayPilot.Calendar.events) {
    var t = {};
    t.selectedCells = [], t.topSelectedCell = null, t.bottomSelectedCell = null, t.selecting = false, t.column = null, t.firstSelected = null, t.firstMousePos = null, t.originalMouse = null, t.originalHeight = null, t.originalTop = null, t.resizing = null, t.globalHandlers = false, t.moving = null, t.register = function(e2) {
      t.registered || (t.registered = []);
      for (var i2 = t.registered, a2 = 0; a2 < i2.length; a2++) if (i2[a2] === e2) return;
      i2.push(e2);
    }, t.unregister = function(e2) {
      var i2 = t.registered;
      if (i2) {
        var a2 = DayPilot.indexOf(i2, e2);
        a2 !== -1 && i2.splice(a2, 1);
      }
    }, t.getCellsAbove = function(e2) {
      for (var i2 = [], a2 = t.getColumn(e2), n = e2.parentNode, o = null; n && o !== t.firstSelected; ) for (o = n.getElementsByTagName("td")[a2], i2.push(o), n = n.previousSibling; n && "TR" !== n.tagName; ) n = n.previousSibling;
      return i2;
    }, t.getCellsBelow = function(e2) {
      for (var i2 = [], a2 = t.getColumn(e2), n = e2.parentNode, o = null; n && o !== t.firstSelected; ) for (o = n.getElementsByTagName("td")[a2], i2.push(o), n = n.nextSibling; n && "TR" !== n.tagName; ) n = n.nextSibling;
      return i2;
    }, t.getColumn = function(e2) {
      for (var t2 = 0; e2.previousSibling; ) e2 = e2.previousSibling, "TD" === e2.tagName && t2++;
      return t2;
    }, t.gUnload = function(e2) {
      if (t.registered) for (var i2 = t.registered, a2 = 0; a2 < i2.length; a2++) {
        var n = i2[a2];
        n.dispose(), t.unregister(n);
      }
    }, t.gMouseUp = function(i2) {
      if (t.resizing) {
        if (!t.resizingShadow) return t.resizing.style.cursor = "default", document.body.style.cursor = "default", t.resizing = null, void (DayPilot.Global.resizing = null);
        var a2 = t.resizing.event, n = t.resizingShadow.clientHeight + 4, o = t.resizingShadow.offsetTop, r = t.resizing.dpBorder;
        t.deleteShadow(t.resizingShadow), t.resizingShadow = null, t.resizing.style.cursor = "default", a2.calendar.nav.top.style.cursor = "auto", t.resizing.onclick = null, t.resizing = null, DayPilot.Global.resizing = null, a2.calendar.J(a2, n, o, r);
      } else if (t.moving) {
        if (!t.movingShadow) return t.moving = null, DayPilot.Global.moving = null, void (document.body.style.cursor = "default");
        var o = t.movingShadow.offsetTop, a2 = t.moving.event;
        t.deleteShadow(t.movingShadow), DayPilot.Util.removeClass(t.moving, a2.calendar.K("_event_moving_source"));
        var s = t.movingShadow.column;
        t.moving = null, DayPilot.Global.moving = null, t.movingShadow = null, a2.calendar.nav.top.style.cursor = "auto", a2.calendar.L(a2, s, o, i2);
      } else if (t.selecting && null !== t.topSelectedCell) {
        var l = t.selecting.calendar;
        t.selecting = false;
        var d = l.getSelection();
        l.M(d.start, d.end, d.resource), "Hold" !== l.timeRangeSelectedHandling && "HoldForever" !== l.timeRangeSelectedHandling && e();
      } else t.selecting = false;
    }, t.deleteShadow = function(e2) {
      e2 && e2.parentNode && e2.parentNode.removeChild(e2);
    }, t.moveShadow = function(e2) {
      var i2 = t.movingShadow, a2 = i2.parentNode;
      a2.style.display = "none", i2.parentNode.removeChild(i2), e2.firstChild.appendChild(i2), i2.style.left = "0px", a2.style.display = "", i2.style.width = t.movingShadow.parentNode.offsetWidth + 1 + "px";
    };
    var i = DayPilot.Util.isVueVNode, a = DayPilot.Util.overlaps;
    t.Calendar = function(e2, n) {
      var o = false;
      if (this instanceof t.Calendar && !this.N && (o = true, this.N = true), !o) throw "DayPilot.Calendar() is a constructor and must be called as 'var c = new DayPilot.Calendar(id);'";
      var r = this;
      this.uniqueID = null, this.isCalendar = true, this.v = "2025.1.638-lite", this.id = e2, this.clientName = e2, this.cache = {}, this.cache.pixels = {}, this.elements = {}, this.elements.events = [], this.elements.selection = [], this.nav = {}, this.afterRender = function() {
      }, this.fasterDispose = true, this.angularAutoApply = false, this.api = 2, this.businessBeginsHour = 9, this.businessEndsHour = 18, this.cellDuration = 30, this.cellHeight = 30, this.columnMarginLeft = 0, this.columnMarginRight = 5, this.columnsLoadMethod = "GET", this.contextMenu = null, this.days = 1, this.durationBarVisible = true, this.eventBorderRadius = null, this.eventsLoadMethod = "GET", this.headerDateFormat = null, this.headerHeight = 30, this.headerTextWrappingEnabled = false, this.height = 300, this.heightSpec = "BusinessHours", this.hideUntilInit = true, this.hourWidth = 60, this.initScrollPos = "Auto", this.loadingLabelHtml = null, this.loadingLabelText = "Loading...", this.loadingLabelVisible = true, this.locale = "en-us", this.showToolTip = true, this.startDate = new DayPilot.Date().getDatePart(), this.cssClassPrefix = "calendar_default", this.theme = null, this.timeFormat = "Auto", this.viewType = "Days", this.visible = true, this.xssProtection = "Enabled", this.headerClickHandling = "Enabled", this.eventClickHandling = "Enabled", this.eventResizeHandling = "Update", this.eventRightClickHandling = "ContextMenu", this.eventMoveHandling = "Update", this.eventDeleteHandling = "Disabled", this.timeRangeSelectedHandling = "Enabled", this.onBeforeCellRender = null, this.onBeforeEventRender = null, this.onBeforeHeaderRender = null, this.onEventClick = null, this.onEventClicked = null, this.onEventDelete = null, this.onEventDeleted = null, this.onEventMove = null, this.onEventMoved = null, this.onEventResize = null, this.onEventResized = null, this.onEventRightClick = null, this.onEventRightClicked = null, this.onHeaderClick = null, this.onHeaderClicked = null, this.onTimeRangeSelect = null, this.onTimeRangeSelected = null, this.O = false, this.clearSelection = function() {
        t.topSelectedCell = null, t.bottomSelectedCell = null, this.P();
      }, this.P = function() {
        DayPilot.de(r.elements.selection), r.elements.selection = [], r.nav.activeSelection = null;
      }, this.cleanSelection = this.clearSelection, this.Q = function(e3, t2, i2) {
        var a2 = {};
        a2.action = e3, a2.parameters = i2, a2.data = t2, a2.header = this.R();
        var n2 = "JSON" + DayPilot.JSON.stringify(a2);
        __doPostBack(r.uniqueID, n2);
      }, this.S = function(e3, t2, i2) {
        this.callbackTimeout && window.clearTimeout(this.callbackTimeout), this.callbackTimeout = window.setTimeout(function() {
          r.loadingStart();
        }, 100);
        var a2 = {};
        a2.action = e3, a2.parameters = i2, a2.data = t2, a2.header = this.R();
        var n2 = "JSON" + DayPilot.JSON.stringify(a2);
        this.backendUrl ? DayPilot.request(this.backendUrl, this.T, n2, this.ajaxError) : "function" == typeof WebForm_DoCallback && WebForm_DoCallback(this.uniqueID, n2, this.U, this.clientName, this.onCallbackError, true);
      }, this.onCallbackError = function(e3, t2) {
        alert("Error!\r\nResult: " + e3 + "\r\nContext:" + t2);
      }, this.dispose = function() {
        var e3 = r;
        e3.O || (e3.O = true, clearInterval(e3.V), e3.W(), e3.nav.scroll.root = null, DayPilot.pu(e3.nav.loading), e3.X(), e3.Y(), e3.nav.select = null, e3.nav.cornerRight = null, e3.nav.scrollable = null, e3.nav.zoom = null, e3.nav.loading = null, e3.nav.header = null, e3.nav.hourTable = null, e3.nav.scrolltop = null, e3.nav.scroll.onscroll = null, e3.nav.scroll = null, e3.nav.main = null, e3.nav.message = null, e3.nav.messageClose = null, e3.nav.top = null, t.unregister(e3));
      }, this.disposed = function() {
        return this.O;
      }, this.Z = function() {
        this.nav.top.dispose = this.dispose;
      }, this.T = function(e3) {
        r.U(e3.responseText);
      }, this.R = function() {
        var e3 = {};
        return e3.control = "dpc", e3.id = this.id, e3.v = this.v, e3.days = r.days, e3.startDate = r.startDate, e3.heightSpec = r.heightSpec, e3.businessBeginsHour = r.businessBeginsHour, e3.businessEndsHour = r.businessEndsHour, e3.hashes = r.hashes, e3.timeFormat = r.timeFormat, e3.viewType = r.viewType, e3.locale = r.locale, e3;
      }, this._ = function(e3, t2) {
        for (var i2 = e3.parentNode; i2 && "TD" !== i2.tagName; ) i2 = i2.parentNode;
        var a2 = r.eventBorderRadius;
        "number" == typeof a2 && (a2 += "px");
        var n2 = document.createElement("div");
        n2.setAttribute("unselectable", "on"), n2.style.position = "absolute", n2.style.width = e3.offsetWidth + "px", n2.style.height = e3.offsetHeight + "px", n2.style.left = e3.offsetLeft + "px", n2.style.top = e3.offsetTop + "px", n2.style.boxSizing = "border-box", n2.style.zIndex = 101, n2.className = r.K("_shadow");
        var o2 = document.createElement("div");
        return o2.className = r.K("_shadow_inner"), a2 && (o2.style.borderRadius = a2, n2.style.borderRadius = a2), n2.appendChild(o2), i2.firstChild.appendChild(n2), n2;
      }, this.aa = {}, this.aa.locale = function() {
        var e3 = DayPilot.Locale.find(r.locale);
        return e3 ? e3 : DayPilot.Locale.US;
      }, this.aa.timeFormat = function() {
        return "Auto" !== r.timeFormat ? r.timeFormat : this.locale().timeFormat;
      }, this.aa.ba = function() {
        return "Disabled" !== r.xssProtection;
      }, this.aa.ca = function() {
        if ("Auto" === r.weekStarts) {
          var e3 = s.locale();
          return e3 ? e3.weekStarts : 0;
        }
        return r.weekStarts || 0;
      }, this.aa.da = function() {
        var e3 = r.cellDuration;
        if (e3 <= 1) return 1;
        if (e3 >= 60) return 60;
        var t2 = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], i2 = Math.floor(e3);
        return Math.max.apply(null, t2.filter(function(e4) {
          return e4 <= i2;
        }));
      };
      var s = this.aa;
      this.U = function(e3, t2) {
        if (e3 && 0 === e3.indexOf("$$$")) {
          if (!window.console) throw "Error received from the server side: " + e3;
          return void console.log("Error received from the server side: " + e3);
        }
        var e3 = JSON.parse(e3);
        if (e3.CallBackRedirect) return void (document.location.href = e3.CallBackRedirect);
        if ("None" === e3.UpdateType) return r.loadingStop(), void r.t();
        if (r.W(), "Full" === e3.UpdateType && (r.columns = e3.Columns, r.days = e3.Days, r.startDate = new DayPilot.Date(e3.StartDate), r.heightSpec = e3.HeightSpec ? e3.HeightSpec : r.heightSpec, r.businessBeginsHour = e3.BusinessBeginsHour ? e3.BusinessBeginsHour : r.businessBeginsHour, r.businessEndsHour = e3.BusinessEndsHour ? e3.BusinessEndsHour : r.businessEndsHour, r.headerDateFormat = e3.HeaderDateFormat ? e3.HeaderDateFormat : r.headerDateFormat, r.viewType = e3.ViewType, r.backColor = e3.BackColor ? e3.BackColor : r.backColor, r.eventHeaderVisible = e3.EventHeaderVisible ? e3.EventHeaderVisible : r.eventHeaderVisible, r.timeFormat = e3.TimeFormat ? e3.TimeFormat : r.timeFormat, r.locale = e3.Locale ? e3.Locale : r.locale, r.ea()), e3.Hashes) for (var i2 in e3.Hashes) r.hashes[i2] = e3.Hashes[i2];
        r.events.list = e3.Events, r.fa(), r.ga(), "Full" === e3.UpdateType && (r.ha(), r.ia(), r.ja(), r.ka()), r.t(), r.la(), r.clearSelection(), r.afterRender(e3.CallBackData, true), r.loadingStop();
      }, this.ma = function() {
        return this.na() / 36e5;
      }, this.oa = function() {
        return this.businessBeginsHour > this.businessEndsHour ? 24 - this.businessBeginsHour + this.businessEndsHour : this.businessEndsHour - this.businessBeginsHour;
      }, this.pa = function() {
        return this.na() / (60 * s.da() * 1e3);
      }, this.na = function() {
        var e3 = 0;
        return e3 = "BusinessHoursNoScroll" === this.heightSpec ? this.oa() : 24, 60 * e3 * 60 * 1e3;
      }, this.qa = function() {
        return "BusinessHoursNoScroll" === this.heightSpec ? this.businessBeginsHour : 0;
      }, this.ra = function() {
        return 2 === r.api;
      }, this.eventClickCallBack = function(e3, t2) {
        this.S("EventClick", t2, e3);
      }, this.eventClickPostBack = function(e3, t2) {
        this.Q("EventClick", t2, e3);
      }, this.sa = function(e3) {
        var t2 = this, i2 = t2.event;
        if (i2.client.clickEnabled()) if (r.ra()) {
          var a2 = {};
          if (a2.e = i2, a2.originalEvent = e3, a2.meta = e3.metaKey, a2.ctrl = e3.ctrlKey, a2.control = r, a2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof r.onEventClick && (r.ta.apply(function() {
            r.onEventClick(a2);
          }), a2.preventDefault.value)) return;
          switch (r.eventClickHandling) {
            case "CallBack":
              r.eventClickCallBack(i2);
              break;
            case "PostBack":
              r.eventClickPostBack(i2);
              break;
            case "ContextMenu":
              var n2 = i2.client.contextMenu();
              n2 ? n2.show(i2) : r.contextMenu && r.contextMenu.show(i2);
          }
          "function" == typeof r.onEventClicked && r.ta.apply(function() {
            r.onEventClicked(a2);
          });
        } else switch (r.eventClickHandling) {
          case "PostBack":
            r.eventClickPostBack(i2);
            break;
          case "CallBack":
            r.eventClickCallBack(i2);
            break;
          case "JavaScript":
            r.onEventClick(i2);
        }
      }, this.ua = function(e3) {
        var t2 = this.event;
        if (e3.stopPropagation && e3.stopPropagation(), !t2.client.rightClickEnabled()) return false;
        var i2 = {};
        if (i2.e = t2, i2.preventDefault = function() {
          this.preventDefault.value = true;
        }, "function" == typeof r.onEventRightClick && (r.onEventRightClick(i2), i2.preventDefault.value)) return false;
        switch (r.eventRightClickHandling) {
          case "ContextMenu":
            var a2 = t2.client.contextMenu();
            a2 ? a2.show(t2) : r.contextMenu && r.contextMenu.show(this.event);
        }
        return "function" == typeof r.onEventRightClicked && r.onEventRightClicked(i2), e3.preventDefault && e3.preventDefault(), false;
      }, this.eventDeleteCallBack = function(e3, t2) {
        this.S("EventDelete", t2, e3);
      }, this.eventDeletePostBack = function(e3, t2) {
        this.Q("EventDelete", t2, e3);
      }, this.va = function(e3) {
        if (r.ra()) {
          var t2 = {};
          if (t2.e = e3, t2.control = r, t2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof r.onEventDelete && (r.ta.apply(function() {
            r.onEventDelete(t2);
          }), t2.preventDefault.value)) return;
          switch (r.eventDeleteHandling) {
            case "CallBack":
              r.eventDeleteCallBack(e3);
              break;
            case "PostBack":
              r.eventDeletePostBack(e3);
              break;
            case "Update":
              r.events.remove(e3);
          }
          "function" == typeof r.onEventDeleted && r.ta.apply(function() {
            r.onEventDeleted(t2);
          });
        } else switch (r.eventDeleteHandling) {
          case "PostBack":
            r.eventDeletePostBack(e3);
            break;
          case "CallBack":
            r.eventDeleteCallBack(e3);
            break;
          case "JavaScript":
            r.onEventDelete(e3);
        }
      }, this.eventResizeCallBack = function(e3, t2, i2, a2) {
        if (!t2) throw "newStart is null";
        if (!i2) throw "newEnd is null";
        var n2 = {};
        n2.e = e3, n2.newStart = t2, n2.newEnd = i2, this.S("EventResize", a2, n2);
      }, this.eventResizePostBack = function(e3, t2, i2, a2) {
        if (!t2) throw "newStart is null";
        if (!i2) throw "newEnd is null";
        var n2 = {};
        n2.e = e3, n2.newStart = t2, n2.newEnd = i2, this.Q("EventResize", a2, n2);
      }, this.J = function(e3, t2, i2, a2) {
        var n2 = 1, o2 = /* @__PURE__ */ new Date(), l = /* @__PURE__ */ new Date(), d = e3.start(), c = e3.end();
        s.da();
        if ("top" === a2) {
          var u = d.getDatePart(), h = Math.floor((i2 - n2) / r.cellHeight), f = h * s.da(), m = 60 * f * 1e3, p = 60 * r.qa() * 60 * 1e3;
          o2 = u.addTime(m + p), l = e3.end();
        } else if ("bottom" === a2) {
          var u = c.getDatePart(), h = Math.floor((i2 + t2 - n2) / r.cellHeight), f = h * s.da(), m = 60 * f * 1e3, p = 60 * r.qa() * 60 * 1e3;
          o2 = d, l = u.addTime(m + p);
        }
        if (r.ra()) {
          var v = {};
          if (v.e = e3, v.control = r, v.newStart = o2, v.newEnd = l, v.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof r.onEventResize && (r.ta.apply(function() {
            r.onEventResize(v);
          }), v.preventDefault.value)) return;
          switch (r.eventResizeHandling) {
            case "PostBack":
              r.eventResizePostBack(e3, o2, l);
              break;
            case "CallBack":
              r.eventResizeCallBack(e3, o2, l);
              break;
            case "Update":
              e3.start(o2), e3.end(l), r.events.update(e3);
          }
          "function" == typeof r.onEventResized && r.ta.apply(function() {
            r.onEventResized(v);
          });
        } else switch (r.eventResizeHandling) {
          case "PostBack":
            r.eventResizePostBack(e3, o2, l);
            break;
          case "CallBack":
            r.eventResizeCallBack(e3, o2, l);
            break;
          case "JavaScript":
            r.onEventResize(e3, o2, l);
        }
      }, this.eventMovePostBack = function(e3, t2, i2, a2, n2) {
        if (!t2) throw "newStart is null";
        if (!i2) throw "newEnd is null";
        var o2 = {};
        o2.e = e3, o2.newStart = t2, o2.newEnd = i2, this.Q("EventMove", n2, o2);
      }, this.eventMoveCallBack = function(e3, t2, i2, a2, n2) {
        if (!t2) throw "newStart is null";
        if (!i2) throw "newEnd is null";
        var o2 = {};
        o2.e = e3, o2.newStart = t2, o2.newEnd = i2, this.S("EventMove", n2, o2);
      }, this.L = function(e3, t2, i2, a2) {
        var n2 = 1, o2 = Math.floor((i2 - n2) / r.cellHeight), l = s.da(), d = o2 * l * 60 * 1e3, c = e3.start(), u = e3.end(), h = /* @__PURE__ */ new Date();
        c instanceof DayPilot.Date && (c = c.toDate()), h.setTime(Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()));
        var f = c.getTime() - (h.getTime() + 3600 * c.getUTCHours() * 1e3 + Math.floor(c.getUTCMinutes() / l) * l * 60 * 1e3), m = u.getTime() - c.getTime(), p = this.wa[t2], v = p.id, y = p.start.getTime(), g = /* @__PURE__ */ new Date();
        g.setTime(y + d + f);
        var b = new DayPilot.Date(g), D = b.addTime(m);
        if (r.ra()) {
          var w = {};
          if (w.e = e3, w.newStart = b, w.newEnd = D, w.newResource = v, w.ctrl = a2.ctrlKey, w.shift = a2.shiftKey, w.control = r, w.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof r.onEventMove && (r.ta.apply(function() {
            r.onEventMove(w);
          }), w.preventDefault.value)) return;
          switch (r.eventMoveHandling) {
            case "PostBack":
              r.eventMovePostBack(e3, b, D, p.id);
              break;
            case "CallBack":
              r.eventMoveCallBack(e3, b, D, p.id);
              break;
            case "Update":
              e3.start(b), e3.end(D), e3.resource(v), r.events.update(e3);
          }
          "function" == typeof r.onEventMoved && r.ta.apply(function() {
            r.onEventMoved(w);
          });
        } else switch (r.eventMoveHandling) {
          case "PostBack":
            r.eventMovePostBack(e3, b, D, p.id);
            break;
          case "CallBack":
            r.eventMoveCallBack(e3, b, D, p.id);
            break;
          case "JavaScript":
            r.onEventMove(e3, b, D, p.id, false);
        }
      }, this.timeRangeSelectedPostBack = function(e3, t2, i2, a2) {
        var n2 = {};
        n2.start = e3, n2.end = t2, this.Q("TimeRangeSelected", a2, n2);
      }, this.timeRangeSelectedCallBack = function(e3, t2, i2, a2) {
        var n2 = {};
        n2.start = e3, n2.end = t2, this.S("TimeRangeSelected", a2, n2);
      }, this.M = function(e3, t2, i2) {
        if (e3 = new DayPilot.Date(e3), t2 = new DayPilot.Date(t2), this.ra()) {
          var a2 = {};
          if (a2.start = e3, a2.end = t2, a2.resource = i2, a2.control = r, a2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof r.onTimeRangeSelect && (r.ta.apply(function() {
            r.onTimeRangeSelect(a2);
          }), a2.preventDefault.value)) return;
          switch (r.timeRangeSelectedHandling) {
            case "PostBack":
              r.timeRangeSelectedPostBack(e3, t2);
              break;
            case "CallBack":
              r.timeRangeSelectedCallBack(e3, t2);
          }
          "function" == typeof r.onTimeRangeSelected && r.ta.apply(function() {
            r.onTimeRangeSelected(a2);
          });
        } else switch (r.timeRangeSelectedHandling) {
          case "PostBack":
            r.timeRangeSelectedPostBack(e3, t2);
            break;
          case "CallBack":
            r.timeRangeSelectedCallBack(e3, t2);
            break;
          case "JavaScript":
            r.onTimeRangeSelected(e3, t2);
        }
      }, this.xa = function(e3) {
        if (!t.selecting && "Disabled" !== r.timeRangeSelectedHandling) {
          var i2 = e3.which;
          if (1 === i2 || 0 === i2) return t.firstMousePos = DayPilot.mc(e3), t.selecting = {}, t.selecting.calendar = r, t.selectedCells && (r.clearSelection(), t.selectedCells = []), t.column = t.getColumn(this), t.selectedCells.push(this), t.firstSelected = this, t.topSelectedCell = this, t.bottomSelectedCell = this, r.ya(), false;
        }
      }, this.ya = function() {
        this.getSelection();
        !function() {
          var e3 = t.topSelectedCell, i2 = t.bottomSelectedCell, a2 = function() {
            if (e3.data) return e3.data.x;
            for (var t2 = e3.parentNode.cells, i3 = 0; i3 < t2.length; i3++) if (t2[i3] === e3) return i3;
            return -1;
          }(), n2 = r.wa[a2];
          if (n2) {
            var o2 = n2.start, s2 = r.getPixels(e3.start, o2).boxTop, l = r.getPixels(i2.end, o2).boxBottom, d = l - s2, c = r.eventBorderRadius;
            "number" == typeof c && (c += "px");
            var u = function() {
              if (r.nav.activeSelection) return r.nav.activeSelection;
              var e4 = document.createElement("div");
              e4.setAttribute("unselectable", "on"), e4.style.position = "absolute", e4.style.left = "0px", e4.style.width = "100%";
              var t2 = document.createElement("div");
              return t2.setAttribute("unselectable", "on"), t2.className = r.K("_shadow_inner"), c && (t2.style.borderRadius = c, e4.style.borderRadius = c), e4.appendChild(t2), r.nav.events.rows[0].cells[a2].selection.appendChild(e4), r.elements.selection.push(e4), r.nav.activeSelection = e4, e4;
            }();
            u.className = r.K("_shadow"), u.firstChild.innerHTML = "", u.style.top = s2 + "px", u.style.height = d + "px";
          }
        }();
      }, this.za = function(e3) {
        if ("undefined" != typeof t && t.selecting) {
          var i2 = DayPilot.mc(e3);
          t.getColumn(this) === t.column && (r.clearSelection(), i2.y < t.firstMousePos.y ? (t.selectedCells = t.getCellsBelow(this), t.topSelectedCell = t.selectedCells[0], t.bottomSelectedCell = t.firstSelected) : (t.selectedCells = t.getCellsAbove(this), t.topSelectedCell = t.firstSelected, t.bottomSelectedCell = t.selectedCells[0]), r.ya());
        }
      }, this.getSelection = function() {
        var e3 = t.topSelectedCell.start, i2 = t.bottomSelectedCell.end, a2 = t.topSelectedCell.resource;
        return new DayPilot.Selection(e3, i2, a2, r);
      }, this.Aa = function(e3) {
        if (e3 < 0) return null;
        for (var t2 = 0, i2 = r.nav.events.rows[0].cells, a2 = 0; a2 < i2.length; a2++) {
          if (t2 += i2[a2].offsetWidth, e3 < t2) return a2;
        }
        return null;
      }, this.Ba = {}, this.Ba.getCellCoords = function() {
        var e3 = {};
        if (e3.x = 0, e3.y = 0, !r.coords) return null;
        e3.x = r.Aa(r.coords.x);
        var t2 = 0, i2 = Math.floor((r.coords.y - t2) / r.cellHeight);
        return e3.y = i2, e3.x < 0 ? null : e3;
      }, this.columns = {}, this.columns.list = [], this.columns.load = function(e3, t2, i2) {
        if (!e3) throw new DayPilot.Exception("columns.load(): 'url' parameter required");
        var a2 = function(e4) {
          var t3 = {};
          t3.exception = e4.exception, t3.request = e4.request, "function" == typeof i2 && i2(t3);
        }, n2 = function(e4) {
          var i3, n3 = e4.request;
          try {
            i3 = JSON.parse(n3.responseText);
          } catch (e5) {
            var o2 = {};
            return o2.exception = e5, void a2(o2);
          }
          if (DayPilot.isArray(i3)) {
            var s2 = {};
            if (s2.preventDefault = function() {
              this.preventDefault.value = true;
            }, s2.data = i3, "function" == typeof t2 && t2(s2), s2.preventDefault.value) return;
            r.columns.list = i3, r.Ca && r.update();
          }
        };
        r.columnsLoadMethod && "POST" === r.columnsLoadMethod.toUpperCase() ? DayPilot.ajax({
          "method": "POST",
          "url": e3,
          "success": n2,
          "error": a2
        }) : DayPilot.ajax({
          "method": "GET",
          "url": e3,
          "success": n2,
          "error": a2
        });
      }, this.ea = function() {
        var e3;
        e3 = "Resources" !== r.viewType ? this.Da() : r.columns.list, this.wa = [];
        for (var t2 = 0; t2 < e3.length; t2++) {
          var i2 = this.Ea(e3[t2]);
          this.wa.push(i2);
        }
      }, this.Ea = function(e3) {
        var t2 = {};
        if (t2.name = e3.name, t2.html = e3.html, t2.id = e3.id, t2.toolTip = e3.toolTip, t2.data = e3, e3.start ? t2.start = new DayPilot.Date(e3.start) : t2.start = new DayPilot.Date(r.startDate), "BusinessHoursNoScroll" === this.heightSpec) {
          var i2 = t2.start.getDatePart();
          t2.start = i2.addHours(this.businessBeginsHour);
        }
        return t2.putIntoBlock = function(e4) {
          for (var t3 = 0; t3 < this.blocks.length; t3++) {
            var i3 = this.blocks[t3];
            if (i3.overlapsWith(e4.part.top, e4.part.height)) return i3.events.push(e4), i3.min = Math.min(i3.min, e4.part.top), i3.max = Math.max(i3.max, e4.part.top + e4.part.height), t3;
          }
          var i3 = [];
          return i3.lines = [], i3.events = [], i3.overlapsWith = function(e5, t4) {
            return !(e5 + t4 - 1 < this.min || e5 > this.max - 1);
          }, i3.putIntoLine = function(e5) {
            for (var t4 = 0; t4 < this.lines.length; t4++) {
              var i4 = this.lines[t4];
              if (i4.isFree(e5.part.top, e5.part.height)) return i4.push(e5), t4;
            }
            var i4 = [];
            return i4.isFree = function(e6, t5) {
              for (var i5 = e6 + t5 - 1, a2 = this.length, n2 = 0; n2 < a2; n2++) {
                var o2 = this[n2];
                if (!(i5 < o2.part.top || e6 > o2.part.top + o2.part.height - 1)) return false;
              }
              return true;
            }, i4.push(e5), this.lines.push(i4), this.lines.length - 1;
          }, i3.events.push(e4), i3.min = e4.part.top, i3.max = e4.part.top + e4.part.height, this.blocks.push(i3), this.blocks.length - 1;
        }, t2.putIntoLine = function(e4) {
          for (var t3 = 0; t3 < this.lines.length; t3++) {
            var i3 = this.lines[t3];
            if (i3.isFree(e4.part.top, e4.part.height)) return i3.push(e4), t3;
          }
          var i3 = [];
          return i3.isFree = function(e5, t4) {
            for (var i4 = e5 + t4 - 1, a2 = this.length, n2 = 0; n2 < a2; n2++) {
              var o2 = this[n2];
              if (!(i4 < o2.part.top || e5 > o2.part.top + o2.part.height - 1)) return false;
            }
            return true;
          }, i3.push(e4), this.lines.push(i3), this.lines.length - 1;
        }, t2;
      }, this.Da = function() {
        var e3 = [], t2 = this.startDate.getDatePart(), i2 = this.days;
        switch (this.viewType) {
          case "Day":
            i2 = 1;
            break;
          case "Week":
            i2 = 7;
            var a2 = s.ca();
            t2 = t2.firstDayOfWeek(a2);
            break;
          case "WorkWeek":
            i2 = 5, t2 = t2.firstDayOfWeek(1);
        }
        for (var n2 = 0; n2 < i2; n2++) {
          var o2 = r.headerDateFormat ? r.headerDateFormat : s.locale().datePattern, l = {};
          l.start = t2.addDays(n2), l.name = l.start.toString(o2, s.locale()), e3.push(l);
        }
        return e3;
      }, this.visibleStart = function() {
        if ("Resources" === r.viewType) {
          if (0 === r.wa.length) return DayPilot.Date.today();
          var e3 = r.wa.map(function(e4) {
            return e4.start.getTime();
          }), t2 = Math.min.apply(null, e3);
          return new DayPilot.Date(t2);
        }
        return this.wa[0].start;
      }, this.visibleEnd = function() {
        if ("Resources" === r.viewType) {
          if (0 === r.wa.length) return DayPilot.Date.today().addDays(1);
          var e3 = r.wa.map(function(e4) {
            return e4.start.getTime();
          }), t2 = Math.max.apply(null, e3);
          return new DayPilot.Date(t2).addDays(1);
        }
        var t2 = this.wa.length - 1;
        return this.wa[t2].start.addDays(1);
      }, this.K = function(e3) {
        var t2 = this.theme || this.cssClassPrefix;
        return t2 ? t2 + e3 : "";
      }, this.W = function() {
        if (this.elements.events) for (var e3 = 0; e3 < this.elements.events.length; e3++) {
          var t2 = this.elements.events[e3];
          r.Fa(t2);
        }
        this.elements.events = [];
      }, this.Fa = function(e3) {
        !function() {
          var t3 = e3.domArgs;
          if (e3.domArgs = null, t3 && "function" == typeof r.onBeforeEventDomRemove && r.onBeforeEventDomRemove(t3), t3 && "function" == typeof r.onBeforeEventDomAdd) {
            var a3 = t3 && t3.Ga;
            if (a3) {
              r.Ia.Ha && i(t3.element) && (r.Ia.Ja = true, r.Ia.Ka(a3), r.Ia.Ja = false);
            }
          }
        }();
        var t2 = e3.event;
        if (t2 && (t2.calendar = null), e3.onclick = null, e3.onclickSave = null, e3.onmouseover = null, e3.onmouseout = null, e3.onmousemove = null, e3.onmousedown = null, e3.firstChild && e3.firstChild.firstChild && e3.firstChild.firstChild.tagName && "IMG" === e3.firstChild.firstChild.tagName.toUpperCase()) {
          var a2 = e3.firstChild.firstChild;
          a2.onmousedown = null, a2.onmousemove = null, a2.onclick = null;
        }
        e3.helper = null, e3.data = null, e3.event = null, DayPilot.de(e3);
      }, this.La = function(e3) {
        var a2 = e3.cache || e3.data, n2 = this.nav.events, o2 = a2.borderRadius || r.eventBorderRadius;
        "number" == typeof o2 && (o2 += "px");
        var s2 = document.createElement("div");
        s2.style.position = "absolute", s2.style.left = e3.part.left + "%", s2.style.top = e3.part.top + "px", s2.style.width = e3.part.width + "%", s2.style.height = Math.max(e3.part.height, 2) + "px", s2.style.overflow = "hidden", s2.data = e3, s2.event = e3, s2.unselectable = "on", s2.style.MozUserSelect = "none", s2.style.KhtmlUserSelect = "none", s2.className = this.K("_event"), a2.cssClass && DayPilot.Util.addClass(s2, a2.cssClass), r.showToolTip && e3.client.toolTip() && (s2.title = e3.client.toolTip()), s2.isFirst = e3.part.start.getTime() === e3.start().getTime(), s2.isLast = e3.part.end.getTime() === e3.end().getTime(), s2.onclick = this.sa, DayPilot.re(s2, "contextmenu", this.ua), s2.onmouseout = function(e4) {
          s2.deleteIcon && (s2.deleteIcon.style.display = "none");
        }, s2.onmousemove = function(i2) {
          var a3 = 5;
          if ("undefined" != typeof t) {
            var n3 = DayPilot.mo3(s2, i2);
            if (n3 && !t.resizing && !t.moving) {
              s2.deleteIcon && (s2.deleteIcon.style.display = "");
              var o3 = this.isLast;
              n3.y <= a3 && e3.client.resizeEnabled() ? (this.style.cursor = "n-resize", this.dpBorder = "top") : this.offsetHeight - n3.y <= a3 && e3.client.resizeEnabled() ? o3 ? (this.style.cursor = "s-resize", this.dpBorder = "bottom") : this.style.cursor = "not-allowed" : t.resizing || t.moving || ("Disabled" !== r.eventClickHandling ? this.style.cursor = "pointer" : this.style.cursor = "default");
            }
          }
        }, s2.onmousedown = function(i2) {
          var a3 = i2.which || i2.button;
          if ("n-resize" !== this.style.cursor && "s-resize" !== this.style.cursor || 1 !== a3) {
            if (1 === a3 && e3.client.moveEnabled()) {
              t.moving = this, DayPilot.Global.moving = this, t.moving.event = this.event;
              var n3 = t.moving.helper = {};
              n3.oldColumn = r.wa[this.data.part.dayIndex].id, t.originalMouse = DayPilot.mc(i2), t.originalTop = this.offsetTop;
              var o3 = DayPilot.mo3(this, i2);
              o3 ? t.moveOffsetY = o3.y : t.moveOffsetY = 0, r.nav.top.style.cursor = "move";
            }
          } else t.resizing = this, DayPilot.Global.resizing = this, t.originalMouse = DayPilot.mc(i2), t.originalHeight = this.offsetHeight, t.originalTop = this.offsetTop, r.nav.top.style.cursor = this.style.cursor;
          return false;
        };
        var l = document.createElement("div");
        if (l.setAttribute("unselectable", "on"), l.className = r.K("_event_inner"), "darker" === a2.borderColor && a2.backColor ? l.style.borderColor = DayPilot.ColorUtil.darker(a2.backColor, 2) : l.style.borderColor = a2.borderColor, a2.backColor && (l.style.background = a2.backColor), a2.fontColor && (l.style.color = a2.fontColor), o2 && (s2.style.borderRadius = o2, l.style.borderRadius = o2), s2.appendChild(l), e3.client.barVisible()) {
          var d = e3.part.height - 2, c = 100 * e3.part.barTop / d, u = Math.ceil(100 * e3.part.barHeight / d), h = document.createElement("div");
          h.setAttribute("unselectable", "on"), h.className = this.K("_event_bar"), h.style.position = "absolute", a2.barBackColor && (h.style.backgroundColor = a2.barBackColor);
          var f = document.createElement("div");
          f.setAttribute("unselectable", "on"), f.className = this.K("_event_bar_inner"), f.style.top = c + "%", 0 < u && u <= 1 ? f.style.height = "1px" : f.style.height = u + "%", a2.barColor && (f.style.backgroundColor = a2.barColor), h.appendChild(f), s2.appendChild(h);
        }
        if (e3.client.deleteEnabled()) {
          var m = document.createElement("div");
          m.style.position = "absolute", m.style.right = "2px", m.style.top = "2px", m.style.width = "17px", m.style.height = "17px", m.className = r.K("_event_delete"), m.onmousedown = function(e4) {
            e4.stopPropagation();
          }, m.onclick = function(e4) {
            e4.stopPropagation();
            var t2 = this.parentNode.event;
            t2 && r.va(t2);
          }, m.style.display = "none", s2.deleteIcon = m, s2.appendChild(m);
        }
        var p = a2.areas ? DayPilot.Areas.copy(a2.areas) : [];
        if (DayPilot.Areas.attach(s2, e3, {
          "areas": p
        }), "function" == typeof r.onAfterEventRender) {
          var v = {};
          v.e = s2.event, v.div = s2, r.onAfterEventRender(v);
        }
        if (function() {
          var t2 = {};
          if (t2.control = r, t2.e = e3, t2.element = null, s2.domArgs = t2, "function" == typeof r.onBeforeEventDomAdd && r.onBeforeEventDomAdd(t2), t2.element) {
            var a3 = l;
            if (a3) {
              t2.Ga = a3;
              if (i(t2.element)) {
                if (!r.Ia.Ha) throw new DayPilot.Exception("Can't reach Vue");
                r.Ia.Ja = true, r.Ia.Ma(t2.element, a3), r.Ia.Ja = false;
              } else a3.appendChild(t2.element);
            }
          } else l.innerHTML = e3.client.innerHTML();
        }(), n2.rows[0].cells[e3.part.dayIndex]) {
          n2.rows[0].cells[e3.part.dayIndex].firstChild.appendChild(s2), r.Na(s2);
        }
        r.elements.events.push(s2);
      }, this.Na = function(e3) {
        for (var t2 = e3 && e3.childNodes ? e3.childNodes.length : 0, i2 = 0; i2 < t2; i2++) try {
          var a2 = e3.childNodes[i2];
          1 === a2.nodeType && (a2.unselectable = "on", this.Na(a2));
        } catch (e4) {
        }
      }, this.la = function() {
        for (var e3 = 0; e3 < this.wa.length; e3++) {
          var t2 = this.wa[e3];
          if (t2.blocks) for (var i2 = 0; i2 < t2.blocks.length; i2++) for (var a2 = t2.blocks[i2], n2 = 0; n2 < a2.lines.length; n2++) for (var o2 = a2.lines[n2], r2 = 0; r2 < o2.length; r2++) {
            var s2 = o2[r2];
            s2.part.width = 100 / a2.lines.length, s2.part.left = s2.part.width * n2;
            var l = n2 === a2.lines.length - 1;
            l || (s2.part.width = 1.5 * s2.part.width), this.La(s2);
          }
        }
      }, this.Oa = function() {
        this.nav.top.innerHTML = "", DayPilot.Util.addClass(this.nav.top, this.K("_main")), this.nav.top.style.MozUserSelect = "none", this.nav.top.style.KhtmlUserSelect = "none", this.nav.top.style.position = "relative", this.nav.top.style.width = this.width ? this.width : "100%", this.hideUntilInit && (this.nav.top.style.visibility = "hidden"), this.visible || (this.nav.top.style.display = "none"), this.nav.scroll = document.createElement("div"), this.nav.scroll.style.height = this.Pa() + "px", "BusinessHours" === this.heightSpec ? this.nav.scroll.style.overflow = "auto" : this.nav.scroll.style.overflow = "hidden", this.nav.scroll.style.position = "relative";
        var e3 = this.Qa();
        this.nav.top.appendChild(e3), this.nav.scroll.style.zoom = 1;
        var t2 = this.Ra();
        this.nav.scrollable = t2.firstChild, this.nav.scroll.appendChild(t2), this.nav.top.appendChild(this.nav.scroll), this.nav.scrollLayer = document.createElement("div"), this.nav.scrollLayer.style.position = "absolute", this.nav.scrollLayer.style.top = "0px", this.nav.scrollLayer.style.left = "0px", this.nav.top.appendChild(this.nav.scrollLayer), this.nav.loading = document.createElement("div"), this.nav.loading.style.position = "absolute", this.nav.loading.style.top = "0px", this.nav.loading.style.left = this.hourWidth + 5 + "px", this.nav.loading.innerHTML = r.Sa(r.loadingLabelText, r.loadingLabelHtml), this.nav.loading.style.display = "none", this.nav.top.appendChild(this.nav.loading);
      }, this.ja = function() {
        this.fasterDispose || DayPilot.pu(this.nav.hourTable), this.nav.scrollable.rows[0].cells[0].innerHTML = "", this.nav.hourTable = this.Ta(), this.nav.scrollable.rows[0].cells[0].appendChild(this.nav.hourTable);
      }, this.Ra = function() {
        var e3 = document.createElement("div");
        e3.style.zoom = 1, e3.style.position = "relative";
        var t2 = document.createElement("table");
        t2.cellSpacing = "0", t2.cellPadding = "0", t2.border = "0", t2.style.border = "0px none", t2.style.width = "100%", t2.style.position = "absolute";
        var i2, a2 = t2.insertRow(-1);
        i2 = a2.insertCell(-1), i2.valign = "top", i2.style.padding = "0px", i2.style.border = "0px none", this.nav.hourTable = this.Ta(), i2.appendChild(this.nav.hourTable), i2 = a2.insertCell(-1), i2.valign = "top", i2.width = "100%", i2.style.padding = "0px", i2.style.border = "0px none";
        var n2 = document.createElement("div");
        return n2.style.position = "relative", i2.appendChild(n2), n2.appendChild(this.Ua()), n2.appendChild(this.Va()), e3.appendChild(t2), this.nav.zoom = e3, e3;
      }, this.Ua = function() {
        var e3 = document.createElement("table");
        return e3.cellPadding = "0", e3.cellSpacing = "0", e3.border = "0", e3.style.width = "100%", e3.style.border = "0px none", e3.style.tableLayout = "fixed", this.nav.main = e3, this.nav.events = e3, e3;
      }, this.Va = function() {
        var e3 = document.createElement("table");
        e3.style.top = "0px", e3.cellPadding = "0", e3.cellSpacing = "0", e3.border = "0", e3.style.position = "absolute", e3.style.width = "100%", e3.style.border = "0px none", e3.style.tableLayout = "fixed", this.nav.events = e3;
        for (var t2 = this.wa, i2 = t2.length, a2 = e3.insertRow(-1), n2 = 0; n2 < i2; n2++) {
          var o2 = a2.insertCell(-1);
          o2.style.padding = "0px", o2.style.border = "0px none", o2.style.height = "0px", o2.style.overflow = "visible", r.rtl || (o2.style.textAlign = "left");
          var s2 = document.createElement("div");
          s2.style.marginRight = r.columnMarginRight + "px", s2.style.marginLeft = r.columnMarginLeft + "px", s2.style.position = "relative", s2.style.height = "1px", s2.style.marginTop = "-1px";
          var l = document.createElement("div");
          o2.selection = l, o2.appendChild(s2), o2.appendChild(l);
        }
        return e3;
      }, this.Ta = function() {
        var e3 = document.createElement("table");
        e3.cellSpacing = "0", e3.cellPadding = "0", e3.border = "0", e3.style.border = "0px none", e3.style.width = this.hourWidth + "px", e3.oncontextmenu = function() {
          return false;
        };
        for (var t2 = r.ma(), i2 = 0; i2 < t2; i2++) this.Wa(e3, i2);
        return e3;
      }, this.Wa = function(e3, t2) {
        var i2 = 60 * r.cellHeight / s.da(), a2 = e3.insertRow(-1);
        a2.style.height = i2 + "px";
        var n2 = a2.insertCell(-1);
        n2.valign = "bottom", n2.unselectable = "on", n2.style.cursor = "default", n2.style.padding = "0px", n2.style.border = "0px none";
        var o2 = document.createElement("div");
        o2.style.position = "relative", o2.className = this.K("_rowheader"), o2.style.width = this.hourWidth + "px", o2.style.height = i2 + "px", o2.style.overflow = "hidden", o2.unselectable = "on";
        var l = document.createElement("div");
        l.className = this.K("_rowheader_inner"), l.unselectable = "on";
        var d = document.createElement("div");
        d.unselectable = "on";
        var c = this.startDate.addHours(t2).addHours(r.qa()), u = c.getHours(), h = u < 12, f = s.timeFormat();
        "Clock12Hours" === f && (u %= 12, 0 === u && (u = 12)), d.innerHTML = u;
        var m = document.createElement("span");
        m.unselectable = "on", m.className = this.K("_rowheader_minutes");
        var p;
        p = "Clock12Hours" === f ? h ? "AM" : "PM" : "00", m.innerHTML = p, d.appendChild(m), l.appendChild(d), o2.appendChild(l), n2.appendChild(o2);
      }, this.Pa = function() {
        var e3 = s.da(), t2 = 60 / e3;
        switch (this.heightSpec) {
          case "Full":
            return 24 * t2 * this.cellHeight;
          case "BusinessHours":
            var i2 = this.oa();
            return i2 * this.cellHeight * t2;
          case "BusinessHoursNoScroll":
            var i2 = this.oa();
            return i2 * this.cellHeight * t2;
          default:
            throw "DayPilot.Calendar: Unexpected 'heightSpec' value.";
        }
      }, this.Xa = function() {
        var e3 = r.nav.corner ? r.nav.corner.parentNode : null;
        if (e3) {
          e3.innerHTML = "";
          var t2 = this.Ya();
          e3.appendChild(t2), r.nav.corner = t2;
        }
      }, this.Qa = function() {
        var e3 = document.createElement("div");
        e3.style.overflow = "auto";
        var t2 = document.createElement("table");
        t2.cellPadding = "0", t2.cellSpacing = "0", t2.border = "0", t2.style.width = "100%", t2.style.borderCollapse = "separate", t2.style.border = "0px none";
        var i2 = t2.insertRow(-1), a2 = i2.insertCell(-1);
        a2.style.padding = "0px", a2.style.border = "0px none";
        var n2 = this.Ya();
        a2.appendChild(n2), this.nav.corner = n2, a2 = i2.insertCell(-1), a2.style.width = "100%", a2.valign = "top", a2.style.position = "relative", a2.style.padding = "0px", a2.style.border = "0px none", this.nav.header = document.createElement("table"), this.nav.header.cellPadding = "0", this.nav.header.cellSpacing = "0", this.nav.header.border = "0", this.nav.header.width = "100%", this.nav.header.style.tableLayout = "fixed", this.nav.header.oncontextmenu = function() {
          return false;
        };
        var o2 = "hidden" !== this.nav.scroll.style.overflow;
        if (a2.appendChild(this.nav.header), o2) {
          a2 = i2.insertCell(-1), a2.unselectable = "on";
          var r2 = document.createElement("div");
          r2.unselectable = "on", r2.style.position = "relative", r2.style.width = "16px", r2.style.height = this.headerHeight + "px", r2.className = this.K("_cornerright");
          var s2 = document.createElement("div");
          s2.className = this.K("_cornerright_inner"), r2.appendChild(s2), a2.appendChild(r2), this.nav.cornerRight = r2;
        }
        return e3.appendChild(t2), e3;
      }, this.Ya = function() {
        var e3 = document.createElement("div");
        e3.style.position = "relative", e3.className = this.K("_corner"), e3.style.width = this.hourWidth + "px", e3.style.height = this.headerHeight + "px", e3.oncontextmenu = function() {
          return false;
        };
        var t2 = document.createElement("div");
        return t2.unselectable = "on", t2.className = this.K("_corner_inner"), e3.appendChild(t2), e3;
      }, this.X = function() {
        var e3 = this.nav.main;
        e3.root = null, e3.onmouseup = null;
        for (var t2 = 0; t2 < e3.rows.length; t2++) for (var i2 = e3.rows[t2], a2 = 0; a2 < i2.cells.length; a2++) {
          var n2 = i2.cells[a2];
          r.Za(n2);
        }
        this.fasterDispose || DayPilot.pu(e3);
      }, this.Za = function(e3) {
        e3 && (!function() {
          var t2 = e3, a2 = t2.domArgs;
          if (t2.domArgs = null, a2 && "function" == typeof r.onBeforeCellDomRemove && r.onBeforeCellDomRemove(a2), a2 && "function" == typeof r.onBeforeCellDomAdd) {
            var n2 = a2 && a2.Ga;
            if (n2) {
              r.Ia.Ha && i(a2.element) && (r.Ia.Ja = true, r.Ia.Ka(n2), r.Ia.Ja = false);
            }
          }
        }(), e3.root = null, e3.onmousedown = null, e3.onmousemove = null, e3.onmouseout = null, e3.onmouseup = null);
      }, this.ia = function() {
        var e3 = s.da(), a2 = this.nav.main, n2 = 60 * e3 * 1e3, o2 = this.pa(), l = r.wa;
        for (a2 && this.X(); a2 && a2.rows && a2.rows.length > 0; ) this.fasterDispose || DayPilot.pu(a2.rows[0]), a2.deleteRow(0);
        this.tableCreated = true;
        for (var d = l.length, c = this.nav.events; c && c.rows && c.rows.length > 0; ) this.fasterDispose || DayPilot.pu(c.rows[0]), c.deleteRow(0);
        for (var d = l.length, u = c.insertRow(-1), h = 0; h < d; h++) {
          var f = u.insertCell(-1);
          f.style.padding = "0px", f.style.border = "0px none", f.style.height = "0px", f.style.overflow = "visible", r.rtl || (f.style.textAlign = "left");
          var m = document.createElement("div");
          m.style.marginRight = r.columnMarginRight + "px", m.style.marginLeft = r.columnMarginLeft + "px", m.style.position = "relative", m.style.height = "1px", m.style.marginTop = "-1px";
          var p = document.createElement("div");
          p.style.position = "relative", f.selection = p, f.appendChild(m), f.appendChild(p);
        }
        for (var v = 0; v < o2; v++) {
          var u = a2.insertRow(-1);
          u.style.MozUserSelect = "none", u.style.KhtmlUserSelect = "none";
          for (var h = 0; h < d; h++) {
            var y = this.wa[h], f = u.insertCell(-1);
            f.start = y.start.addTime(v * n2), f.end = f.start.addTime(n2), f.resource = y.id, f.onmousedown = this.xa, f.onmouseup = function() {
              return false;
            }, f.onclick = function() {
              return false;
            }, f.root = this, f.style.padding = "0px", f.style.border = "0px none", f.style.verticalAlign = "top", f.style.height = r.cellHeight + "px", f.style.overflow = "hidden", f.unselectable = "on";
            var m = document.createElement("div");
            m.unselectable = "on", m.style.height = r.cellHeight + "px", m.style.position = "relative", m.className = this.K("_cell");
            var g = this.$a(f.start, f.end), b = {
              "business": g,
              "text": null,
              "html": null,
              "cssClass": null,
              "backColor": null,
              "backImage": null,
              "backRepeat": null,
              "fontColor": null
            }, D = {
              "start": f.start,
              "end": f.end,
              "resource": f.resource,
              "properties": b,
              "x": h,
              "y": v
            };
            !function() {
              if ("function" == typeof r.onBeforeCellRender) {
                var e4 = {};
                e4.cell = D, r.onBeforeCellRender(e4);
              }
            }(), b.business && DayPilot.Util.addClass(m, r.K("_cell_business")), b.cssClass && DayPilot.Util.addClass(m, b.cssClass);
            var w = document.createElement("div");
            w.setAttribute("unselectable", "on"), w.className = this.K("_cell_inner");
            var x = DayPilot.Util.escapeTextHtml(b.text, b.html);
            x && (w.innerHTML = x), b.backColor && (w.style.backgroundColor = b.backColor), b.backImage && (w.style.backgroundImage = "url(" + b.backImage + ")"), b.backRepeat && (w.style.backgroundRepeat = b.backRepeat), b.fontColor && (w.style.color = b.fontColor), m.appendChild(w), function() {
              if ("function" == typeof r.onBeforeCellDomAdd || "function" == typeof r.onBeforeCellDomRemove) {
                var e4 = {};
                if (e4.control = r, e4.cell = D, e4.element = null, f.domArgs = e4, "function" == typeof r.onBeforeCellDomAdd && r.onBeforeCellDomAdd(e4), e4.element) {
                  var t2 = w;
                  if (t2) {
                    e4.Ga = t2;
                    if (i(e4.element)) {
                      if (!r.Ia.Ha) throw new DayPilot.Exception("Can't reach Vue");
                      r.Ia.Ja = true, r.Ia.Ma(e4.element, t2), r.Ia.Ja = false;
                    } else t2.appendChild(e4.element);
                  }
                }
              }
            }(), f.appendChild(m);
          }
        }
        a2.root = this, r.nav.scrollable.onmousemove = function(e4) {
          var i2 = r.nav.scrollable;
          r.coords = DayPilot.mo3(i2, e4);
          var a3 = DayPilot.mc(e4);
          if (t.resizing) {
            t.resizingShadow || (t.resizingShadow = r._(t.resizing, false, r.shadow));
            var n3 = r.cellHeight, o3 = 1, s2 = a3.y - t.originalMouse.y;
            if ("bottom" === t.resizing.dpBorder) {
              var l2 = Math.floor((t.originalHeight + t.originalTop + s2 + n3 / 2) / n3) * n3 - t.originalTop + o3;
              l2 < n3 && (l2 = n3);
              var d2 = r.nav.main.clientHeight;
              t.originalTop + l2 > d2 && (l2 = d2 - t.originalTop), t.resizingShadow.style.height = l2 + "px";
            } else if ("top" === t.resizing.dpBorder) {
              var c2 = Math.floor((t.originalTop + s2 - o3 + n3 / 2) / n3) * n3 + o3;
              c2 < o3 && (c2 = o3), c2 > t.originalTop + t.originalHeight - n3 && (c2 = t.originalTop + t.originalHeight - n3);
              var l2 = t.originalHeight - (c2 - t.originalTop);
              l2 < n3 ? l2 = n3 : t.resizingShadow.style.top = c2 + "px", t.resizingShadow.style.height = l2 + "px";
            }
          } else if (t.moving) {
            if (!r.coords) return;
            if (!t.movingShadow) {
              var u2 = 3, a3 = DayPilot.mc(e4), h2 = Math.abs(a3.x - t.originalMouse.x) + Math.abs(a3.y - t.originalMouse.y);
              if (h2 <= u2) return;
              t.movingShadow = r._(t.moving, true, r.shadow), t.movingShadow.style.width = t.movingShadow.parentNode.offsetWidth + 1 + "px";
            }
            var n3 = r.cellHeight, o3 = 1, f2 = t.moveOffsetY;
            f2 || (f2 = n3 / 2);
            var c2 = Math.floor((r.coords.y - f2 - o3 + n3 / 2) / n3) * n3 + o3;
            c2 < o3 && (c2 = o3);
            var m2 = r.nav.events, d2 = r.nav.main.clientHeight + o3, p2 = parseInt(t.movingShadow.style.height);
            c2 + p2 > d2 && (c2 = d2 - p2), DayPilot.Util.addClass(t.moving, r.K("_event_moving_source")), t.movingShadow.parentNode.style.display = "none", t.movingShadow.style.top = c2 + "px", t.movingShadow.parentNode.style.display = "";
            var v2 = m2.clientWidth / m2.rows[0].cells.length, y2 = Math.floor((r.coords.x - 45) / v2);
            y2 < 0 && (y2 = 0), y2 < m2.rows[0].cells.length && y2 >= 0 && t.movingShadow.column !== y2 && (t.movingShadow.column = y2, t.moveShadow(m2.rows[0].cells[y2]));
          } else if (t.selecting) {
            var a3 = DayPilot.mc(e4), g2 = r.Ba.getCellCoords(), b2 = t.column, D2 = r.nav.main.rows[g2.y].cells[b2];
            a3.y < t.firstMousePos.y ? (t.selectedCells = t.getCellsBelow(D2), t.topSelectedCell = t.selectedCells[0], t.bottomSelectedCell = t.firstSelected) : (t.selectedCells = t.getCellsAbove(D2), t.topSelectedCell = t.firstSelected, t.bottomSelectedCell = t.selectedCells[0]), r.ya();
          }
        }, r.nav.scrollable.style.display = "";
      }, this.$a = function(e3, t2) {
        return this.businessBeginsHour < this.businessEndsHour ? !(e3.getHours() < this.businessBeginsHour || e3.getHours() >= this.businessEndsHour || 6 === e3.getDayOfWeek() || 0 === e3.getDayOfWeek()) : e3.getHours() >= this.businessBeginsHour || e3.getHours() < this.businessEndsHour;
      }, this.Y = function() {
        var e3 = this.nav.header;
        if (e3 && e3.rows) for (var t2 = 0; t2 < e3.rows.length; t2++) for (var i2 = e3.rows[t2], a2 = 0; a2 < i2.cells.length; a2++) {
          var n2 = i2.cells[a2];
          n2.onclick = null, n2.onmousemove = null, n2.onmouseout = null;
        }
        this.fasterDispose || DayPilot.pu(e3);
      }, this._a = function(e3) {
        function t2(t3) {
          var n3 = a2[t3], o3 = e3 ? i2.insertCell(-1) : i2.cells[t3];
          o3.data = n3, o3.style.overflow = "hidden", o3.style.padding = "0px", o3.style.border = "0px none", o3.style.height = r.headerHeight + "px", o3.onclick = r.ab;
          var s2, l = e3 ? document.createElement("div") : o3.firstChild;
          e3 ? (l.unselectable = "on", l.style.MozUserSelect = "none", l.style.cursor = "default", l.style.position = "relative", l.className = r.K("_colheader"), l.style.height = r.headerHeight + "px", r.headerTextWrappingEnabled || (l.style.whiteSpace = "nowrap"), s2 = document.createElement("div"), s2.className = r.K("_colheader_inner"), s2.unselectable = "on", l.appendChild(s2), o3.appendChild(l)) : s2 = l.firstChild;
          var d = {};
          d.header = {}, d.header.cssClass = null, d.header.verticalAlignment = "center", d.header.horizontalAlignment = "center", d.column = r.bb(n3, r), "function" == typeof r.onBeforeHeaderRender && (DayPilot.Util.copyProps(n3, d.header, ["id", "start", "name", "html", "backColor", "toolTip", "areas"]), r.onBeforeHeaderRender(d), DayPilot.Util.copyProps(d.header, n3, ["html", "backColor", "toolTip", "areas", "cssClass", "verticalAlignment", "horizontalAlignment"])), n3.toolTip && (s2.title = n3.toolTip), n3.cssClass && DayPilot.Util.addClass(l, n3.cssClass), n3.backColor && (s2.style.background = n3.backColor), n3.areas && DayPilot.Areas.attach(l, n3);
          var c = n3.verticalAlignment;
          if (c) switch (s2.style.display = "flex", c) {
            case "center":
              s2.style.alignItems = "center";
              break;
            case "top":
              s2.style.alignItems = "flex-start";
              break;
            case "bottom":
              s2.style.alignItems = "flex-end";
          }
          var u = n3.horizontalAlignment;
          if (u) switch (u) {
            case "center":
              s2.style.justifyContent = "center";
              break;
            case "left":
              s2.style.justifyContent = "flex-start";
              break;
            case "right":
              s2.style.justifyContent = "flex-end";
          }
          l.firstChild.innerHTML = r.Sa(n3.name, n3.html);
        }
        for (var i2 = e3 ? this.nav.header.insertRow(-1) : this.nav.header.rows[0], a2 = this.wa, n2 = a2.length, o2 = 0; o2 < n2; o2++) t2(o2);
      }, this.ab = function(e3) {
        if ("Disabled" !== r.headerClickHandling) {
          var t2 = this.data, i2 = r.bb(t2), a2 = {};
          a2.header = {}, a2.header.id = t2.id, a2.header.name = t2.name, a2.header.start = t2.start, a2.column = i2, a2.originalEvent = e3, a2.shift = e3.shiftKey, a2.ctrl = e3.ctrlKey, a2.meta = e3.metaKey, a2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof r.onHeaderClick && (r.onHeaderClick(a2), a2.preventDefault.value) || "function" == typeof r.onHeaderClicked && r.onHeaderClicked(a2);
        }
      }, this.bb = function(e3) {
        return new DayPilot.CalendarColumn(e3, r);
      }, this.cb = function() {
        return this.width && this.width.indexOf("px") !== -1 ? "Pixel" : "Percentage";
      }, this.ha = function() {
        var e3 = this.nav.header, t2 = true, i2 = this.wa;
        for (i2.length; this.headerCreated && e3 && e3.rows && e3.rows.length > 0; ) this.fasterDispose || DayPilot.pu(e3.rows[0]), e3.deleteRow(0);
        this.headerCreated = true;
        this._a(t2);
      }, this.loadingStart = function() {
        this.loadingLabelVisible && (this.nav.loading.innerHTML = this.loadingLabelText, this.nav.loading.style.top = this.headerHeight + 5 + "px", this.nav.loading.style.display = "");
      }, this.commandCallBack = function(e3, t2) {
        var i2 = {};
        i2.command = e3, this.S("Command", t2, i2);
      }, this.loadingStop = function(e3) {
        this.callbackTimeout && window.clearTimeout(this.callbackTimeout), this.nav.loading.style.display = "none";
      }, this.db = function() {
        var e3 = this.nav.scroll;
        e3.root = this, r.eb(), e3.onscroll || (e3.onscroll = function() {
          r.fb();
        });
      }, this.callbackError = function(e3, t2) {
        alert("Error!\r\nResult: " + e3 + "\r\nContext:" + t2);
      }, this.gb = function() {
        var e3 = DayPilot.sw(this.nav.scroll), t2 = this.nav.cornerRight;
        t2 && (t2.style.width = e3 + "px");
      }, this.hb = function() {
        t.globalHandlers || (t.globalHandlers = true, DayPilot.re(document, "mouseup", t.gMouseUp));
      }, this.events = {}, this.events.add = function(e3) {
        var t2 = null;
        if (e3 instanceof DayPilot.Event) t2 = e3.data;
        else {
          if ("object" != typeof e3) throw "DayPilot.Calendar.events.add() expects an object or DayPilot.Event instance.";
          t2 = e3;
        }
        r.events.list || (r.events.list = []), r.events.list.push(t2), r.ib({
          "eventsOnly": true
        }), r.ta.notify();
      }, this.events.find = function(e3) {
        if (!r.events.list) return null;
        if ("function" == typeof e3) {
          for (var t2 = e3, i2 = 0; i2 < r.events.list.length; i2++) {
            var a2 = new DayPilot.Event(r.events.list[i2], r);
            if (t2(a2)) return a2;
          }
          return null;
        }
        for (var i2 = 0; i2 < r.events.list.length; i2++) {
          var n2 = r.events.list[i2];
          if (n2.id === e3) return new DayPilot.Event(n2, r);
        }
        return null;
      }, this.events.forRange = function(e3, t2) {
        return e3 = new DayPilot.Date(e3), t2 = new DayPilot.Date(t2), (r.events.list || []).filter(function(i2) {
          return a(e3, t2, new DayPilot.Date(i2.start), new DayPilot.Date(i2.end));
        }).map(function(e4) {
          return new DayPilot.Event(e4, r);
        });
      }, this.events.update = function(e3) {
        if (e3 instanceof DayPilot.Event) e3.commit();
        else if ("object" == typeof e3) {
          var t2 = r.events.find(e3.id);
          if (t2) {
            var i2 = DayPilot.indexOf(r.events.list, t2.data);
            r.events.list.splice(i2, 1, e3);
          }
        }
        r.ib({
          "eventsOnly": true
        }), r.ta.notify();
      }, this.events.remove = function(e3) {
        var t2;
        if (e3 instanceof DayPilot.Event) t2 = e3.data;
        else if ("object" == typeof e3) {
          var i2 = r.events.find(e3.id);
          i2 && (t2 = i2.data);
        } else if ("string" == typeof e3 || "number" == typeof e3) {
          var i2 = r.events.find(e3);
          i2 && (t2 = i2.data);
        }
        var a2 = DayPilot.indexOf(r.events.list, t2);
        r.events.list.splice(a2, 1), r.ib({
          "eventsOnly": true
        }), r.ta.notify();
      }, this.events.load = function(e3, t2, i2) {
        var a2 = function(e4) {
          var t3 = {};
          t3.exception = e4.exception, t3.request = e4.request, "function" == typeof i2 && i2(t3);
        }, n2 = function(e4) {
          var i3, n3 = e4.request;
          try {
            i3 = JSON.parse(n3.responseText);
          } catch (e5) {
            var o3 = {};
            return o3.exception = e5, void a2(o3);
          }
          if (DayPilot.isArray(i3)) {
            var s3 = {};
            if (s3.preventDefault = function() {
              this.preventDefault.value = true;
            }, s3.data = i3, "function" == typeof t2 && t2(s3), s3.preventDefault.value) return;
            r.events.list = i3, r.Ca && r.ib({
              "eventsOnly": true
            });
          }
        };
        if (r.eventsLoadMethod && "POST" === r.eventsLoadMethod.toUpperCase()) DayPilot.Http.ajax({
          "method": "POST",
          "data": {
            "start": r.visibleStart().toString(),
            "end": r.visibleEnd().toString()
          },
          "url": e3,
          "success": n2,
          "error": a2
        });
        else {
          var o2 = e3, s2 = "start=" + r.visibleStart().toString() + "&end=" + r.visibleEnd().toString();
          o2 += o2.indexOf("?") > -1 ? "&" + s2 : "?" + s2, DayPilot.Http.ajax({
            "method": "GET",
            "url": o2,
            "success": n2,
            "error": a2
          });
        }
      }, this.jb = function() {
        if (r.nav.top.className !== r.K("_main")) {
          r.nav.top.className = r.K("_main");
          var e3 = r.nav.corner;
          e3.className = r.K("_corner"), e3.firstChild.className = r.K("_corner_inner");
          var t2 = r.nav.cornerRight;
          t2 && (t2.className = r.K("_cornerright"), t2.firstChild.className = r.K("_cornerright_inner"));
        }
      }, this.update = function(e3) {
        if (r.O) throw new DayPilot.Exception("You are trying to update a DayPilot.Calendar instance that has been disposed.");
        r.kb(e3), r.ib();
      }, this.ib = function(e3) {
        if (this.Ca) {
          var e3 = e3 || {}, t2 = !e3.eventsOnly;
          r.lb(), r.W(), r.nav.top.style.cursor = "auto", t2 && (r.ea(), r.ha(), r.ia(), r.ja(), r.ka(), r.Xa(), r.gb(), r.jb(), r.eb()), r.fa(), r.ga(), r.la(), r.clearSelection(), this.visible ? this.show() : this.hide();
        }
      }, this.mb = null, this.kb = function(e3) {
        if (e3) {
          var t2 = {
            "events": {
              "preInit": function() {
                var e4 = this.data || [];
                DayPilot.isArray(e4.list) ? r.events.list = e4.list : r.events.list = e4;
              }
            },
            "columns": {
              "preInit": function() {
                r.columns.list = this.data;
              }
            }
          };
          this.mb = t2;
          for (var i2 in e3) if (t2[i2]) {
            var a2 = t2[i2];
            a2.data = e3[i2], a2.preInit && a2.preInit();
          } else r[i2] = e3[i2];
        }
      }, this.nb = function() {
        var e3 = this.mb;
        for (var t2 in e3) {
          var i2 = e3[t2];
          i2.postInit && i2.postInit();
        }
      }, this.ob = function() {
        if (this.id && this.id.tagName) this.nav.top = this.id;
        else {
          if ("string" != typeof this.id) throw "DayPilot.Calendar() constructor requires the target element or its ID as a parameter";
          if (this.nav.top = document.getElementById(this.id), !this.nav.top) throw "DayPilot.Calendar: The placeholder element not found: '" + e2 + "'.";
        }
      }, this.pb = {}, this.pb.events = [], this.qb = function(e3) {
        var t2 = this.pb.events, i2 = this.events.list[e3], a2 = {};
        for (var n2 in i2) a2[n2] = i2[n2];
        if (a2.start = new DayPilot.Date(i2.start), a2.end = new DayPilot.Date(i2.end), "function" == typeof this.onBeforeEventRender) {
          var o2 = {};
          o2.control = r, o2.data = a2, this.onBeforeEventRender(o2);
        }
        t2[e3] = a2;
      }, this.fa = function() {
        var e3 = this.events.list;
        if (r.pb.events = [], e3) {
          if (!DayPilot.isArray(e3)) throw new DayPilot.Exception("DayPilot.Calendar.events.list expects an array object. You supplied: " + typeof e3);
          var t2 = e3.length, i2 = 864e5;
          this.cache.pixels = {};
          var a2 = [];
          this.scrollLabels = [], this.minStart = 1e4, this.maxEnd = 0;
          for (var n2 = 0; n2 < t2; n2++) {
            var o2 = e3[n2], s2 = o2;
            if ("object" != typeof s2) throw new DayPilot.Exception("Event data item must be an object");
            if (!s2.start) throw new DayPilot.Exception("Event data item must specify 'start' property");
            if (!s2.end) throw new DayPilot.Exception("Event data item must specify 'end' property");
            if (s2 instanceof DayPilot.Event) throw new DayPilot.Exception("DayPilot.Calendar: DayPilot.Event object detected in events.list array. Use raw event data instead.");
          }
          if ("function" == typeof this.onBeforeEventRender) for (var n2 = 0; n2 < t2; n2++) this.qb(n2);
          for (var n2 = 0; n2 < this.wa.length; n2++) {
            var l = {};
            l.minEnd = 1e6, l.maxStart = -1, this.scrollLabels.push(l);
            var d = this.wa[n2];
            d.events = [], d.lines = [], d.blocks = [];
            for (var c = new DayPilot.Date(d.start), u = c.getTime(), h = c.addTime(i2), f = h.getTime(), m = 0; m < t2; m++) if (!a2[m]) {
              var o2 = e3[m], p = new DayPilot.Date(o2.start), v = new DayPilot.Date(o2.end), y = p.getTime(), g = v.getTime();
              if (!(g < y)) {
                var b = !(g <= u || y >= f);
                if ("Resources" === r.viewType && (b = b && d.id === o2.resource), b) {
                  var D = new DayPilot.Event(o2, r);
                  D.part.dayIndex = n2, D.part.start = u < y ? p : c, D.part.end = f > g ? v : h;
                  var w = this.getPixels(D.part.start, d.start), x = this.getPixels(D.part.end, d.start), C = w.top, P = x.top;
                  if (C === P && (w.cut || x.cut)) continue;
                  var k = x.boxBottom;
                  D.part.top = Math.floor(C / this.cellHeight) * this.cellHeight + 1, D.part.height = Math.max(Math.ceil(k / this.cellHeight) * this.cellHeight - D.part.top, this.cellHeight - 1) + 1, D.part.barTop = Math.max(C - D.part.top - 1, 0), D.part.barHeight = Math.max(P - C - 2, 1);
                  var p = D.part.top, v = D.part.top + D.part.height;
                  p > l.maxStart && (l.maxStart = p), v < l.minEnd && (l.minEnd = v), p < this.minStart && (this.minStart = p), v > this.maxEnd && (this.maxEnd = v), d.events.push(D), "function" == typeof this.onBeforeEventRender && (D.cache = this.pb.events[m]), D.part.start.getTime() === y && D.part.end.getTime() === g && (a2[m] = true);
                }
              }
            }
          }
          for (var n2 = 0; n2 < this.wa.length; n2++) {
            var d = this.wa[n2];
            d.events.sort(this.rb);
            for (var m = 0; m < d.events.length; m++) {
              var o2 = d.events[m];
              d.putIntoBlock(o2);
            }
            for (var m = 0; m < d.blocks.length; m++) {
              var _ = d.blocks[m];
              _.events.sort(this.rb);
              for (var S = 0; S < _.events.length; S++) {
                var o2 = _.events[S];
                _.putIntoLine(o2);
              }
            }
          }
        }
      }, this.rb = function(e3, t2) {
        if (!(e3 && t2 && e3.start && t2.start)) return 0;
        var i2 = e3.start().getTime() - t2.start().getTime();
        return 0 !== i2 ? i2 : t2.end().getTime() - e3.end().getTime();
      }, this.debug = function(e3, t2) {
        this.debuggingEnabled && (r.debugMessages || (r.debugMessages = []), r.debugMessages.push(e3), "undefined" != typeof console && console.log(e3));
      }, this.getPixels = function(e3, t2) {
        t2 || (t2 = this.startDate);
        var i2 = t2.getTime(), a2 = e3.getTime(), n2 = s.da(), o2 = this.cache.pixels[a2 + "_" + i2];
        if (o2) return o2;
        i2 = t2.getTime();
        var r2 = 60 * n2 * 1e3, l = a2 - i2, d = l % r2, c = l - d, u = c + r2;
        0 === d && (u = c);
        var h = {};
        return h.cut = false, h.top = this.sb(l), h.boxTop = this.sb(c), h.boxBottom = this.sb(u), this.cache.pixels[a2 + "_" + i2] = h, h;
      }, this.sb = function(e3) {
        return Math.floor(this.cellHeight * e3 / (6e4 * s.da()));
      }, this.lb = function() {
        this.startDate = new DayPilot.Date(this.startDate).getDatePart();
      }, this.ga = function() {
        this.nav.corner && (this.nav.corner.style.height = this.headerHeight + "px");
      }, this.ka = function() {
        var e3 = this.Pa();
        this.nav.scroll && e3 > 0 && (this.nav.scroll.style.height = e3 + "px");
      }, this.ta = {}, this.ta.scope = null, this.ta.notify = function() {
        r.ta.scope && r.ta.scope["$apply"]();
      }, this.ta.apply = function(e3) {
        e3();
      }, this.fb = function() {
        if (r.nav.scroll && r.tb()) {
          var e3 = r.nav.scroll.scrollTop, t2 = e3 / (2 * r.cellHeight);
          r.ub.scrollHour = t2;
        }
      }, this.eb = function() {
        var e3 = 0, t2 = 60 / s.da();
        e3 = "number" == typeof r.ub.scrollHour ? t2 * r.cellHeight * r.ub.scrollHour : "Auto" === r.initScrollPos ? "BusinessHours" === this.heightSpec ? t2 * this.cellHeight * this.businessBeginsHour : 0 : this.initScrollPos;
        var i2 = r.nav.top;
        "none" === i2.style.display ? (i2.style.display = "", r.nav.scroll.scrollTop = e3, i2.style.display = "none") : r.nav.scroll.scrollTop = e3;
      }, this.getScrollY = function() {
        return r.nav.scroll.scrollTop;
      }, this.setScrollY = function(e3) {
        r.nav.scroll.scrollTop = e3, r.fb();
      }, this.vb = function() {
        return !(!this.backendUrl && "function" != typeof WebForm_DoCallback) && ("undefined" == typeof r.events.list || !r.events.list);
      }, this.t = function() {
        "hidden" === this.nav.top.style.visibility && (this.nav.top.style.visibility = "visible");
      }, this.show = function() {
        r.visible = true, r.nav.top.style.display = "", this.gb();
      }, this.hide = function() {
        r.visible = false, r.nav.top.style.display = "none";
      }, this.wb = function() {
        this.lb(), this.ea(), this.Oa(), this.ha(), this.ia(), this.gb(), this.db(), this.hb(), t.register(this), this.xb(), this.S("Init");
      }, this.ub = {}, this.yb = function() {
        this.ub.themes = [], this.ub.themes.push(this.theme || this.cssClassPrefix);
      }, this.zb = function() {
        for (var e3 = this.ub.themes, t2 = 0; t2 < e3.length; t2++) {
          var i2 = e3[t2];
          DayPilot.Util.removeClass(this.nav.top, i2 + "_main");
        }
        this.ub.themes = [];
      }, this.Ab = function() {
        if (this.afterRender(null, false), "function" == typeof this.onAfterRender) {
          var e3 = {};
          e3.isCallBack = false, this.onAfterRender(e3);
        }
      }, this.Bb = function() {
        if ("function" == typeof this.onInit && !this.Cb) {
          this.Cb = true;
          var e3 = {};
          this.onInit(e3);
        }
      }, this.tb = function() {
        var e3 = r.nav.top;
        return !!e3 && e3.offsetWidth > 0 && e3.offsetHeight > 0;
      }, this.xb = function() {
        var e3 = r.tb;
        e3() || (r.V = setInterval(function() {
          e3() && (r.db(), r.gb(), clearInterval(r.V));
        }, 100));
      }, this.Sa = function(e3, t2) {
        return r.aa.ba() ? DayPilot.Util.escapeTextHtml(e3, t2) : DayPilot.Util.isNullOrUndefined(t2) ? DayPilot.Util.isNullOrUndefined(e3) ? "" : e3 : t2;
      }, this.Ia = {}, this.Ia.Ha = null, this.Ia.Db = function(e3, t2, i2) {
        var a2 = r.Ia.Ha;
        if ("function" == typeof a2.createVNode && "function" == typeof a2.render) {
          var n2 = a2.createVNode(e3, i2);
          a2.render(n2, t2);
        }
      }, this.Ia.Ma = function(e3, t2) {
        var i2 = r.Ia.Ha;
        if ("function" == typeof i2.render) {
          var a2 = e3;
          DayPilot.isArray(e3) && (a2 = i2.h("div", null, e3)), i2.render(a2, t2);
        }
      }, this.Ia.Ka = function(e3) {
        var t2 = r.Ia.Ha;
        "function" == typeof t2.render && t2.render(null, e3);
      }, this.internal = {}, this.internal.loadOptions = r.kb, this.internal.xssTextHtml = r.Sa, this.internal.enableVue = function(e3) {
        r.Ia.Ha = e3;
      }, this.internal.vueRef = function() {
        return r.Ia.Ha;
      }, this.internal.vueRendering = function() {
        return r.Ia.Ja;
      }, this.init = function() {
        this.ob();
        var e3 = this.vb();
        return this.yb(), e3 ? void this.wb() : (this.lb(), this.ea(), this.fa(), this.Oa(), this.ha(), this.ia(), this.t(), this.gb(), this.db(), this.hb(), t.register(this), this.events && (this.ga(), this.la()), this.Ab(), this.Bb(), this.xb(), this.Ca = true, this);
      }, this.Init = this.init, this.kb(n);
    }, DayPilot.CalendarColumn = function(e2, t2) {
      var i2 = this;
      i2.id = e2.id, i2.name = e2.name, i2.data = e2.data, i2.start = new DayPilot.Date(e2.start), i2.calendar = t2, i2.toJSON = function() {
        var e3 = {};
        return e3.id = this.id, this.start && (e3.start = this.start.toString()), e3.name = this.name, e3;
      };
    }, DayPilot.Calendar = t.Calendar, "undefined" != typeof jQuery && !function(e2) {
      e2.fn.daypilotCalendar = function(e3) {
        var t2 = null, i2 = this.each(function() {
          if (!this.daypilot) {
            var i3 = new DayPilot.Calendar(this.id);
            this.daypilot = i3;
            for (name in e3) i3[name] = e3[name];
            i3.init(), t2 || (t2 = i3);
          }
        });
        return 1 === this.length ? t2 : i2;
      };
    }(jQuery), function() {
      var e2 = DayPilot.am();
      e2 && e2.directive("daypilotCalendar", ["$parse", function(e3) {
        return {
          "restrict": "E",
          "template": "<div></div>",
          "replace": true,
          "link": function(t2, i2, a2) {
            var n = new DayPilot.Calendar(i2[0]);
            n.ta.scope = t2, n.init();
            var o = a2["id"];
            o && (t2[o] = n);
            var r = a2["publishAs"];
            if (r) {
              (0, e3(r).assign)(t2, n);
            }
            for (var s in a2) 0 === s.indexOf("on") && !function(i3) {
              n[i3] = function(n2) {
                var o2 = e3(a2[i3]);
                t2["$apply"](function() {
                  o2(t2, {
                    "args": n2
                  });
                });
              };
            }(s);
            var l = t2["$watch"], d = a2["config"] || a2["daypilotConfig"], c = a2["events"] || a2["daypilotEvents"];
            l.call(t2, d, function(e4) {
              for (var t3 in e4) n[t3] = e4[t3];
              n.update(), n.Bb();
            }, true), l.call(t2, c, function(e4) {
              n.events.list = e4, n.update();
            }, true);
          }
        };
      }]);
    }();
  }
}(), "undefined" == typeof DayPilot) var DayPilot = {};
if (function() {
  "undefined" != typeof DayPilot.DatePicker && DayPilot.DatePicker.close || (DayPilot.DatePicker = function(e) {
    this.v = "2025.1.638-lite";
    var t = "navigator_" + (/* @__PURE__ */ new Date()).getTime(), i = this;
    this.onShow = null, this.onTimeRangeSelect = null, this.onTimeRangeSelected = null, this.prepare = function() {
      if (this.locale = "en-us", this.target = null, this.targetAlignment = "left", this.resetTarget = true, this.pattern = this.aa.locale().datePattern, this.theme = "navigator_default", this.patterns = [], this.zIndex = null, e) for (var t2 in e) this[t2] = e[t2];
    }, this.init = function() {
      this.date = new DayPilot.Date(this.date);
      var e2 = this.Eb();
      this.resetTarget && !e2 ? this.Fb(this.date) : this.resetTarget || (i.date = e2);
      var t2 = this.C();
      return t2 && t2.addEventListener("input", function() {
        i.date = i.Eb(), i.date && i.navigator.select(i.date, {
          dontNotify: true
        });
      }), document.addEventListener("mousedown", function() {
        i.close();
      }), this;
    }, this.close = function() {
      this.tb && (this.tb = false, this.navigator && this.navigator.dispose(), this.div.innerHTML = "", this.div && this.div.parentNode === document.body && document.body.removeChild(this.div));
    }, this.setDate = function(e2) {
      this.date = new DayPilot.Date(e2), this.Fb(this.date);
    }, this.Eb = function() {
      var e2 = this.C();
      if (!e2) return this.date;
      var t2 = null;
      if (t2 = "INPUT" === e2.tagName ? e2.value : e2.innerText, !t2) return null;
      for (var a = DayPilot.Date.parse(t2, i.pattern), n = 0; n < i.patterns.length; n++) {
        if (a) return a;
        a = DayPilot.Date.parse(t2, i.patterns[n]);
      }
      return a;
    }, this.Fb = function(e2) {
      var t2 = this.C();
      if (t2) {
        var a = e2.toString(i.pattern, i.locale);
        "INPUT" === t2.tagName ? t2.value = a : t2.innerHTML = a;
      }
    }, this.aa = {}, this.aa.locale = function() {
      return DayPilot.Locale.find(i.locale);
    }, this.C = function() {
      var e2 = this.target;
      return e2 && e2.nodeType && 1 === e2.nodeType ? e2 : document.getElementById(e2);
    }, Object.defineProperty(this, "visible", {
      get: function() {
        return i.tb;
      }
    }), this.show = function() {
      if (!this.tb) {
        var e2 = this.C(), a = this.navigator, a = new DayPilot.Navigator(t);
        a.api = 2, a.cssOnly = true, a.theme = i.theme, a.weekStarts = "Auto", a.locale = i.locale, a.onTimeRangeSelected = function(e3) {
          i.date = e3.start;
          var t2 = e3.start.addTime(a.Gb), n2 = t2.toString(i.pattern, i.locale), e3 = {};
          e3.start = t2, e3.date = t2, e3.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof i.onTimeRangeSelect && (i.onTimeRangeSelect(e3), e3.preventDefault.value) || (i.Fb(n2), i.close(), "function" == typeof i.onTimeRangeSelected && i.onTimeRangeSelected(e3));
        }, this.navigator = a;
        var n = DayPilot.abs(e2), o = e2.offsetHeight, r = i.targetAlignment, s = document.createElement("div");
        s.style.position = "absolute", "left" === r && (s.style.left = n.x + "px"), s.style.top = n.y + o + "px", i.zIndex && (s.style.zIndex = i.zIndex);
        var l = document.createElement("div");
        l.id = t, s.appendChild(l), s.addEventListener("mousedown", function(e3) {
          var e3 = e3 || window.event;
          e3.cancelBubble = true, e3.stopPropagation && e3.stopPropagation();
        }), document.body.appendChild(s), this.div = s;
        var d = i.Eb() || new DayPilot.Date().getDatePart();
        if (a.startDate = d, a.Gb = d.getTimePart(), a.selectionDay = d.getDatePart(), a.init(), "right" === r) {
          var c = n.x + e2.offsetWidth - a.nav.top.offsetWidth;
          s.style.left = c + "px";
        }
        this.tb = true, this.onShow && this.onShow();
      }
    }, this.prepare(), this.init();
  });
}(), "undefined" == typeof DayPilot) var DayPilot = {};
if ("undefined" == typeof DayPilot.Global && (DayPilot.Global = {}), function(DayPilot2) {
  "use strict";
  if ("undefined" == typeof DayPilot2.Menu || !DayPilot2.Menu.def) {
    var e = function() {
    }, t = {};
    t.mouse = null, t.menu = null, t.handlersRegistered = false, t.hideTimeout = null, t.waitingSubmenu = null, DayPilot2.Menu = function(i) {
      var a = this, n = null;
      this.v = "2025.1.638-lite", this.zIndex = 120, this.cssClassPrefix = "menu_default", this.cssOnly = true, this.menuTitle = null, this.showMenuTitle = false, this.hideOnMouseOut = false, this.hideAfter = 200, this.theme = null, this.onShow = null, this.Hb = function() {
      }, i && DayPilot2.isArray(i) && (this.items = i), this.toJSON = function() {
        return null;
      }, this.show = function(i2, o2) {
        o2 = o2 || {};
        var r2 = null;
        if (i2 ? "string" == typeof i2.id || "number" == typeof i2.id ? r2 = i2.id : "function" == typeof i2.id ? r2 = i2.id() : "function" == typeof i2.value && (r2 = i2.value()) : r2 = null, "undefined" != typeof DayPilot2.Bubble && DayPilot2.Bubble.hideActive(), o2.submenu || t.menuClean(), this.Hb.submenu = null, null !== t.mouse) {
          a.cssOnly || (a.cssOnly = true);
          var s = null;
          if (i2 && i2.isRow && i2.$.row.task ? (s = new DayPilot2.Task(i2.$.row.task, i2.calendar), s.menuType = "resource") : s = i2 && i2.isEvent && i2.data.task ? new DayPilot2.Task(i2, i2.calendar) : i2, "function" == typeof a.onShow) {
            var l = {};
            if (l.source = s, l.menu = a, l.preventDefault = function() {
              l.preventDefault.value = true;
            }, a.onShow(l), l.preventDefault.value) return;
          }
          var d = document.createElement("div");
          if (d.style.position = "absolute", d.style.top = "0px", d.style.left = "0px", d.style.display = "none", d.style.overflow = "hidden", d.style.zIndex = this.zIndex + 1, d.className = this.Ib("main"), d.onclick = function(e2) {
            e2.cancelBubble = true, this.parentNode.removeChild(this);
          }, this.hideOnMouseOut && (d.onmousemove = function(e2) {
            clearTimeout(t.hideTimeout);
          }, d.onmouseleave = function(e2) {
            a.delayedHide({
              "hideParent": true
            });
          }), !this.items || 0 === this.items.length) throw "No menu items defined.";
          if (this.showMenuTitle) {
            var c = document.createElement("div");
            c.innerHTML = this.menuTitle, c.className = this.Ib("title"), d.appendChild(c);
          }
          for (var u = 0; u < this.items.length; u++) {
            var h = this.items[u], f = document.createElement("div");
            if (DayPilot2.Util.addClass(f, this.Ib("item")), h.items && (DayPilot2.Util.addClass(f, this.Ib("item_haschildren")), DayPilot2.Util.addClass(d, this.Ib("withchildren"))), "undefined" != typeof h && !h.hidden) {
              if ("-" === h.text) {
                var m = document.createElement("div");
                m.addEventListener("click", function(e2) {
                  e2.stopPropagation();
                }), f.appendChild(m);
              } else {
                var p = document.createElement("a");
                if (p.style.position = "relative", p.style.display = "block", h.cssClass && DayPilot2.Util.addClass(p, h.cssClass), h.disabled) DayPilot2.Util.addClass(p, a.Ib("item_disabled"));
                else {
                  if (h.onclick || h.onClick) {
                    p.item = h, p.onclick = /* @__PURE__ */ function(e2, t2) {
                      return function(i3) {
                        if ("function" == typeof e2.onClick) {
                          var a2 = {};
                          if (a2.item = e2, a2.source = t2.source, a2.originalEvent = i3, a2.preventDefault = function() {
                            a2.preventDefault.value = true;
                          }, e2.onClick(a2), a2.preventDefault.value) return void i3.stopPropagation();
                        }
                        e2.onclick && e2.onclick.call(t2, i3);
                      };
                    }(h, p);
                    var v = function(e2, i3) {
                      return function(a2) {
                        a2.stopPropagation(), a2.preventDefault();
                        var n2 = function() {
                          window.setTimeout(function() {
                            i3.source.calendar && (i3.source.calendar.internal.touch.active = false);
                          }, 500);
                        };
                        if ("function" == typeof e2.onClick) {
                          var o3 = {};
                          if (o3.item = e2, o3.source = i3.source, o3.originalEvent = a2, o3.preventDefault = function() {
                            o3.preventDefault.value = true;
                          }, e2.onClick(o3), o3.preventDefault.value) return void n2();
                        }
                        e2.onclick && e2.onclick.call(i3, a2), t.menuClean(), n2();
                      };
                    };
                    DayPilot2.reNonPassive(p, "touchstart", function(e2) {
                      e2.stopPropagation(), e2.preventDefault(), p.source.calendar && (p.source.calendar.internal.touch.active = true);
                    }), DayPilot2.reNonPassive(p, "touchend", v(h, p));
                  }
                  if (h.items && !h.disabled) {
                    var y = function(e2, t2) {
                      return function(i3) {
                        i3.preventDefault(), i3.stopPropagation(), a.Jb(e2, t2);
                      };
                    };
                    p.ontouchend = y(h, p);
                  }
                  if (h.onclick) e();
                  else if (h.href) p.href = h.href.replace(/\x7B0\x7D/gim, r2), h.target && p.setAttribute("target", h.target);
                  else if (h.command) {
                    var y = function(e2, t2) {
                      return function(i3) {
                        var a2 = t2.source, n2 = e2;
                        n2.action = n2.action ? n2.action : "CallBack";
                        var o3 = a2.calendar || a2.root;
                        if (a2 instanceof DayPilot2.Link) return void o3.internal.linkMenuClick(n2.command, a2, n2.action);
                        if (a2 instanceof DayPilot2.Selection) return void o3.internal.timeRangeMenuClick(n2.command, a2, n2.action);
                        if (a2 instanceof DayPilot2.Event) return void o3.internal.eventMenuClick(n2.command, a2, n2.action);
                        if (a2 instanceof DayPilot2.Selection) return void o3.internal.timeRangeMenuClick(n2.command, a2, n2.action);
                        if (a2 instanceof DayPilot2.Task) return void ("resource" === a2.menuType ? o3.internal.resourceHeaderMenuClick(n2.command, t2.menuSource, n2.action) : o3.internal.eventMenuClick(n2.command, t2.menuSource, n2.action));
                        switch (a2.menuType) {
                          case "resource":
                            return void o3.internal.resourceHeaderMenuClick(n2.command, a2, n2.action);
                          case "selection":
                            return void o3.internal.timeRangeMenuClick(n2.command, a2, n2.action);
                          default:
                            return void o3.internal.eventMenuClick(n2.command, a2, n2.action);
                        }
                        i3.preventDefault();
                      };
                    };
                    p.onclick = y(h, p), p.ontouchend = y(h, p);
                  }
                }
                h.items && p.addEventListener("click", function(e2) {
                  e2.stopPropagation();
                }), p.source = s, p.menuSource = i2;
                var g = document.createElement("span");
                if (g.className = a.Ib("item_text"), g.innerHTML = DayPilot2.Util.escapeTextHtml(h.text, h.html), p.appendChild(g), h.image) {
                  var b = document.createElement("img");
                  b.src = h.image, b.style.position = "absolute", b.style.top = "0px", b.style.left = "0px", p.appendChild(b);
                }
                if (h.icon) {
                  var D = document.createElement("span");
                  D.className = a.Ib("item_icon");
                  var w = document.createElement("i");
                  w.className = h.icon, D.appendChild(w), p.appendChild(D);
                }
                if (h.symbol) {
                  var x = "http://www.w3.org/2000/svg", C = document.createElementNS(x, "svg");
                  C.setAttribute("width", "100%"), C.setAttribute("height", "100%");
                  var P = document.createElementNS(x, "use");
                  P.setAttribute("href", h.symbol), C.appendChild(P);
                  var k = document.createElement("span");
                  k.className = a.Ib("item_symbol"), k.style.position = "absolute", k.style.top = "0px", k.style.left = "0px", k.appendChild(C), p.appendChild(k);
                }
                var _ = function(e2, i3) {
                  return function() {
                    var n2 = (i3.source, e2), o3 = t.waitingSubmenu;
                    if (o3) {
                      if (o3.parent === n2) return;
                      clearTimeout(o3.timeout), t.waitingSubmenu = null;
                    }
                    e2.disabled || (t.waitingSubmenu = {}, t.waitingSubmenu.parent = n2, t.waitingSubmenu.timeout = setTimeout(function() {
                      t.waitingSubmenu = null, a.Jb(n2, i3);
                    }, 300));
                  };
                };
                p.onmouseover = _(h, p), f.appendChild(p);
              }
              d.appendChild(f);
            }
          }
          var S = function(e2) {
            window.setTimeout(function() {
              t.menuClean(), DayPilot2.MenuBar.deactivate();
            }, 100);
          };
          d.onclick = S, d.ontouchend = S, d.onmousedown = function(e2) {
            e2 = e2 || window.event, e2.cancelBubble = true, e2.stopPropagation && e2.stopPropagation();
          }, d.oncontextmenu = function() {
            return false;
          }, document.body.appendChild(d), a.Hb.visible = true, a.Hb.source = i2, d.style.display = "";
          var M = d.offsetHeight, A = d.offsetWidth;
          d.style.display = "none";
          var T = document.documentElement.clientHeight, H = window.innerWidth, E = "number" == typeof o2.windowMargin ? o2.windowMargin : 5;
          if (function() {
            var e2 = o2.initiator;
            if (e2) {
              var t2 = e2.div, i3 = e2.e, a2 = e2.area, r3 = a2.visibility || a2.v || "Visible", s2 = e2.a;
              if ("Visible" !== r3 && (s2 = DayPilot2.Areas.createArea(t2, i3, a2), t2.appendChild(s2), n = s2), s2) {
                var l2 = DayPilot2.abs(s2);
                o2.x = l2.x, o2.y = l2.y + l2.h + 2;
              }
            }
          }(), function() {
            var e2 = "number" == typeof o2.x ? o2.x : t.mouse.x + 1, i3 = "number" == typeof o2.y ? o2.y : t.mouse.y + 1, n2 = document.body.scrollTop || document.documentElement.scrollTop, r3 = document.body.scrollLeft || document.documentElement.scrollLeft, s2 = 0, l2 = 0;
            if (i3 - n2 > T - M && 0 !== T) {
              s2 = i3 - (i3 - n2 - (T - M) + E);
            } else s2 = i3;
            if (a.Hb.y = s2, d.style.top = s2 + "px", "right" === o2.align && (e2 -= A), e2 - r3 > H - A && 0 !== H) {
              l2 = e2 - (e2 - r3 - (H - A) + E);
            } else l2 = e2;
            a.Hb.x = l2, d.style.left = l2 + "px";
          }(), o2.parentLink) {
            var I = o2.parentLink, N = parseInt(new DayPilot2.StyleReader(d).get("border-top-width")), R = DayPilot2.abs(o2.parentLink.parentNode), O = R.x + I.offsetWidth, z = R.y - N;
            O + A > H && (O = Math.max(0, R.x - A));
            var B = document.body.scrollTop + document.documentElement.scrollTop;
            z + M - B > T && (z = Math.max(0, T - M + B)), d.style.left = O + "px", d.style.top = z + "px";
          }
          d.style.display = "", this.addShadow(d), this.Hb.div = d, o2.submenu || (DayPilot2.Menu.active = this);
        }
      }, this.update = function() {
        if (a.Hb.visible) {
          var e2 = a.Hb.source;
          a.hide(), a.show(e2, {
            "x": a.Hb.x,
            "y": a.Hb.y
          });
        }
      }, this.Jb = function(e2, t2) {
        var i2 = e2, n2 = t2.source;
        if ((!a.Hb.submenu || a.Hb.submenu.item !== e2) && (a.Hb.submenu && a.Hb.submenu.item !== e2 && (DayPilot2.Util.removeClass(a.Hb.submenu.link.parentNode, a.Ib("item_haschildren_active")), a.Hb.submenu.menu.hide(), a.Hb.submenu = null), e2.items)) {
          var o2 = a.cloneOptions();
          o2.items = e2.items, a.Hb.submenu = {}, a.Hb.submenu.menu = new DayPilot2.Menu(o2), a.Hb.submenu.menu.Kb = a, a.Hb.submenu.menu.show(n2, {
            "submenu": true,
            "parentLink": t2,
            "parentItem": i2
          }), a.Hb.submenu.item = e2, a.Hb.submenu.link = t2, DayPilot2.Util.addClass(t2.parentNode, a.Ib("item_haschildren_active"));
        }
      }, this.Ib = function(e2) {
        var t2 = this.theme || this.cssClassPrefix, i2 = this.cssOnly ? "_" : "";
        return t2 ? t2 + i2 + e2 : "";
      }, this.cloneOptions = function() {
        return DayPilot2.Util.copyProps(o, {}, ["cssClassPrefix", "theme", "hideAfter", "hideOnMouseOut", "zIndex"]);
      }, this.hide = function(e2) {
        e2 = e2 || {}, this.Hb.submenu && this.Hb.submenu.menu.hide();
        var i2 = t.waitingSubmenu;
        if (i2 && (t.waitingSubmenu = null, clearTimeout(i2.timeout)), this.removeShadow(), this.Hb.div && this.Hb.div.parentNode === document.body && document.body.removeChild(this.Hb.div), n && (DayPilot2.de(n), n = null), a.Hb.visible = false, a.Hb.source = null, a.Kb && e2.hideParent && a.Kb.hide(e2), DayPilot2.Menu.active === a && (DayPilot2.Menu.active = null), "function" == typeof this.onHide) {
          var o2 = {};
          this.onHide(o2);
        }
      }, this.delayedHide = function(e2) {
        t.hideTimeout = setTimeout(function() {
          a.hide(e2);
        }, a.hideAfter);
      }, this.cancelHideTimeout = function() {
        clearTimeout(t.hideTimeout);
      }, this.init = function(e2) {
        return t.mouseMove(e2), this;
      }, this.addShadow = function(e2) {
      }, this.removeShadow = function() {
      };
      var o = DayPilot2.isArray(i) ? null : i;
      if (o) for (var r in o) this[r] = o[r];
    }, DayPilot2.MenuBar = function(e2, t2) {
      var i = this;
      t2 = t2 || {}, this.items = [], this.theme = "menubar_default", this.windowMargin = 0, this.nav = {}, this.elements = {}, this.elements.items = DayPilot2.list(), this.k = null, this.Ca = false;
      for (var a in t2) this[a] = t2[a];
      this.Lb = function(e3) {
        return this.theme + "_" + e3;
      }, this.t = function() {
        this.nav.top = document.getElementById(e2);
        var t3 = this.nav.top;
        t3.className = this.Lb("main"), DayPilot2.list(i.items).forEach(function(e3) {
          var a2 = document.createElement("span");
          a2.innerHTML = DayPilot2.Util.escapeTextHtml(e3.text, e3.html), a2.className = i.Lb("item"), e3.cssClass && a2.classList.add(e3.cssClass), a2.data = e3, a2.onclick = function(t4) {
            if (i.active && i.active.item === e3) i.Mb();
            else if (e3.children) return void i.Nb(a2);
            if ("function" == typeof e3.onClick) {
              var n = {};
              n.item = e3, n.originalEvent = t4, e3.onClick(n);
            }
          }, a2.onmousedown = function(e4) {
            e4.stopPropagation();
          }, a2.onmouseover = function() {
            i.active && i.active.item !== e3 && i.Nb(a2);
          }, t3.appendChild(a2), i.elements.items.push(a2);
        });
      }, this.Mb = function() {
        var e3 = i.Lb("item_active");
        i.elements.items.forEach(function(t3) {
          DayPilot2.Util.removeClass(t3, e3);
        }), i.active && i.active.menu && i.active.menu.hide(), i.active = null;
      }, this.Ob = function(e3) {
        return !!i.active && i.active.item === e3.data;
      }, this.Nb = function(e3) {
        if (!i.Ob(e3)) {
          i.Mb();
          var t3 = e3.data, a2 = i.active = {};
          a2.item = t3, a2.div = e3;
          var n = i.Lb("item_active");
          DayPilot2.Util.addClass(e3, n);
          var o = DayPilot2.abs(e3);
          if (t3.children) {
            a2.menu = new DayPilot2.Menu({
              "items": t3.children
            });
            var r = o.x;
            "right" === t3.align && (r += o.w), a2.menu.show(null, {
              "x": r,
              "y": o.y + o.h,
              "align": t3.align,
              "windowMargin": i.windowMargin
            });
          }
          DayPilot2.MenuBar.active = i;
        }
      }, this.init = function() {
        return this.t(), this.Ca = true, this;
      }, this.dispose = function() {
        this.Ca && (this.nav.top.innerHTML = "", this.elements.items = []);
      };
    }, DayPilot2.MenuBar.deactivate = function() {
      DayPilot2.MenuBar.active && (DayPilot2.MenuBar.active.Mb(), DayPilot2.MenuBar.active = null);
    }, t.menuClean = function() {
      "undefined" != typeof DayPilot2.Menu.active && DayPilot2.Menu.active && (DayPilot2.Menu.active.hide(), DayPilot2.Menu.active = null);
    }, t.mouseDown = function(e2) {
      "undefined" != typeof t && (t.menuClean(), DayPilot2.MenuBar.deactivate());
    }, t.wheel = function(e2) {
      "undefined" != typeof t && (t.menuClean(), DayPilot2.MenuBar.deactivate());
    }, t.mouseMove = function(e2) {
      "undefined" != typeof t && (t.mouse = t.mousePosition(e2));
    }, t.touchMove = function(e2) {
      "undefined" != typeof t && (t.mouse = t.touchPosition(e2));
    }, t.touchStart = function(e2) {
      "undefined" != typeof t && (t.mouse = t.touchPosition(e2));
    }, t.touchEnd = function(e2) {
    }, t.touchPosition = function(e2) {
      if (!e2 || !e2.touches) return null;
      var t2 = e2.touches[0], i = {};
      return i.x = t2.pageX, i.y = t2.pageY, i;
    }, t.mousePosition = function(e2) {
      return DayPilot2.mo3(null, e2);
    }, DayPilot2.Menu.touchPosition = function(e2) {
      e2.touches && (t.mouse = t.touchPosition(e2));
    }, DayPilot2.Menu.hide = function(e2) {
      if (e2 = e2 || {}, e2.calendar) {
        var i = DayPilot2.Menu.active;
        if (i) {
          var a = i.Hb.source;
          a && a.calendar === e2.calendar && t.menuClean();
        }
      } else t.menuClean();
    }, t.handlersRegistered || "undefined" == typeof document || (DayPilot2.re(document, "mousemove", t.mouseMove), DayPilot2.re(document, "mousedown", t.mouseDown), DayPilot2.re(document, "wheel", t.wheel), DayPilot2.re(document, "touchmove", t.touchMove), DayPilot2.re(document, "touchstart", t.touchStart), DayPilot2.re(document, "touchend", t.touchEnd), t.handlersRegistered = true), DayPilot2.Menu.def = {};
  }
}(DayPilot), "undefined" == typeof DayPilot && (DayPilot = {}), function(DayPilot2) {
  "use strict";
  function e(t2, i2, a2) {
    var n2 = i2.indexOf(".");
    if (n2 === -1) return void ("__proto__" !== i2 && "constructor" !== i2 && (t2[i2] = a2));
    var o2 = i2.substring(0, n2);
    if ("__proto__" !== o2 && "constructor" !== o2) {
      var r2 = i2.substring(n2 + 1), s2 = t2[o2];
      "object" == typeof s2 && null !== s2 || (t2[o2] = {}, s2 = t2[o2]), e(s2, r2, a2);
    }
  }
  function t(e2, i2, a2) {
    i2 = i2 || {}, a2 = a2 || "";
    for (var n2 in e2) {
      var o2 = e2[n2];
      "object" == typeof o2 ? "[object Array]" === Object.prototype.toString.call(o2) ? i2[a2 + n2] = o2 : o2 && o2.toJSON ? i2[a2 + n2] = o2.toJSON() : t(o2, i2, a2 + n2 + ".") : i2[a2 + n2] = o2;
    }
    return i2;
  }
  if (!DayPilot2.ModalStatic) {
    DayPilot2.ModalStatic = {}, DayPilot2.ModalStatic.list = [], DayPilot2.ModalStatic.hide = function() {
      if (this.list.length > 0) {
        var e2 = this.list.pop();
        e2 && e2.hide();
      }
    }, DayPilot2.ModalStatic.remove = function(e2) {
      for (var t2 = DayPilot2.ModalStatic.list, i2 = 0; i2 < t2.length; i2++) if (t2[i2] === e2) return void t2.splice(i2, 1);
    }, DayPilot2.ModalStatic.close = function(e2) {
      DayPilot2.ModalStatic.result(e2), DayPilot2.ModalStatic.hide();
    }, DayPilot2.ModalStatic.result = function(e2) {
      var t2 = DayPilot2.ModalStatic.list;
      t2.length > 0 && (t2[t2.length - 1].result = e2);
    }, DayPilot2.ModalStatic.displayed = function(e2) {
      for (var t2 = DayPilot2.ModalStatic.list, i2 = 0; i2 < t2.length; i2++) if (t2[i2] === e2) return true;
      return false;
    }, DayPilot2.ModalStatic.stretch = function() {
      if (this.list.length > 0) {
        var e2 = this.list[this.list.length - 1];
        e2 && e2.stretch();
      }
    }, DayPilot2.ModalStatic.last = function() {
      var e2 = DayPilot2.ModalStatic.list;
      return e2.length > 0 ? e2[e2.length - 1] : null;
    };
    var i = function() {
      if ("undefined" == typeof window) {
        var e2 = {};
        return e2.add = function() {
        }, e2.commit = function() {
        }, e2;
      }
      var t2 = document.createElement("style");
      t2.setAttribute("type", "text/css"), t2.styleSheet || t2.appendChild(document.createTextNode("")), (document.head || document.getElementsByTagName("head")[0]).appendChild(t2);
      var i2 = !!t2.styleSheet, e2 = {};
      return e2.rules = [], e2.commit = function() {
        try {
          i2 && (t2.styleSheet.cssText = this.rules.join("\n"));
        } catch (e3) {
        }
      }, e2.add = function(e3, a2, n2) {
        if (i2) return void this.rules.push(e3 + "{" + a2 + "}");
        if (t2.sheet.insertRule) "undefined" == typeof n2 && (n2 = t2.sheet.cssRules.length), t2.sheet.insertRule(e3 + "{" + a2 + "}", n2);
        else {
          if (!t2.sheet.addRule) throw "No CSS registration method found";
          t2.sheet.addRule(e3, a2, n2);
        }
      }, e2;
    }, a = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB3aWR0aD0iMTAiCiAgIGhlaWdodD0iMTUiCj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDUpIj4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDMxNzMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojOTk5OTk5O3N0cm9rZS13aWR0aDoxLjg1MTk2ODUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICAgIGQ9Ik0gMC45NTQxNDgzOCwwLjY4MTYwMzEgNS4wMzkwNjI1LDUuNDExNTM4NiA5LjEyMzk3NjYsMC42ODE2MDMxIgogICAgICAgIC8+CiAgPC9nPgo8L3N2Zz4K", n = new i();
    n.add(".modal_default_main", "border: 10px solid #ccc; max-width: 90%;"), n.add(".modal_default_main:focus", "outline: none;"), n.add(".modal_default_content", "padding: 10px 0px;"), n.add(".modal_default_inner", "padding: 20px;"), n.add(".modal_default_input", "padding: 10px 0px;"), n.add(".modal_default_buttons", "margin-top: 10px;"), n.add(".modal_default_buttons", "padding: 10px 0px;"), n.add(".modal_default_form_item", "padding: 10px 0px; position: relative;"), n.add(".modal_default_form_item_level1", "border-left: 2px solid #ccc; margin-left: 10px; padding-left: 20px;"), n.add(".modal_default_form_item.modal_default_form_title", "font-size: 1.5rem; font-weight: bold;"), n.add(".modal_default_form_item input[type=text]", "width: 100%; box-sizing: border-box;"), n.add(".modal_default_form_item textarea", "width: 100%; height: 200px; box-sizing: border-box;"), n.add(".modal_default_form_item input[type=select]", "width: 100%; box-sizing: border-box;"), n.add(".modal_default_form_item label", "display: block;"), n.add(".modal_default_form_item select", "width: 100%; box-sizing: border-box;"), n.add(".modal_default_form_item_label", "margin: 2px 0px;"), n.add(".modal_default_form_item_image img", "max-width: 100%; height: auto;"), n.add(".modal_default_form_item_invalid", ""), n.add(".modal_default_form_item_invalid_message", "position: absolute; right: 0px; top: 9px; background-color: red; color: #ffffff; padding: 2px; border-radius: 2px;"), n.add(".modal_default_background", "opacity: 0.5; background-color: #000;"), n.add(".modal_default_ok", "padding: 3px; width: 80px;"), n.add(".modal_default_cancel", "padding: 3px; width: 80px;"), n.add(".modal_default_form_item_date", "position: relative;"), n.add(".modal_default_form_item_date:after", "content: ''; position: absolute; right: 7px; top: 50%; margin-top: 3px; width: 10px; height: 15px; background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB3aWR0aD0iMTAiCiAgIGhlaWdodD0iMTUiCj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDUpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojY2NjY2NjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjM4MDM3MzM2O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icmVjdDE5MjgiCiAgICAgICB3aWR0aD0iOS45MTUzMDYxIgogICAgICAgaGVpZ2h0PSIxMS4zNjkzNyIKICAgICAgIHg9IjAuMTE3MTg3NSIKICAgICAgIHk9Ii0zLjAwOTk5NTciCiAgICAgICByeT0iMS4zMTE4NTA1IiAvPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmaWxsOiNjY2NjY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNTk4MTQwMTI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0MTkzMCIKICAgICAgIHdpZHRoPSIxLjUzNDQxMzYiCiAgICAgICBoZWlnaHQ9IjIuMjE5ODI1IgogICAgICAgeD0iMi4xNTU4NDgzIgogICAgICAgeT0iLTQuMzkzNzAwMSIKICAgICAgIHJ5PSIwLjY3MTc4OTE3IiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwLjI5NjAxNDciCiAgICAgICB5PSItMS4xNjU4NDY2IgogICAgICAgeD0iMS41MjM5NTA2IgogICAgICAgaGVpZ2h0PSIxLjgyOTkwOTEiCiAgICAgICB3aWR0aD0iMS44MzQyMjUxIgogICAgICAgaWQ9InJlY3QxOTQ4IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS40MjE4OTE5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwLjY3MTc4OTE3IgogICAgICAgeT0iLTQuMzkzNzAwMSIKICAgICAgIHg9IjYuNDUyNzIzNSIKICAgICAgIGhlaWdodD0iMi4yMTk4MjUiCiAgICAgICB3aWR0aD0iMS41MzQ0MTM2IgogICAgICAgaWQ9InJlY3QyMDAzIgogICAgICAgc3R5bGU9ImZpbGw6I2NjY2NjYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS41OTgxNDAxMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNDIxODkxOTM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0MjAwNSIKICAgICAgIHdpZHRoPSIxLjgzNDIyNTEiCiAgICAgICBoZWlnaHQ9IjEuODI5OTA5MSIKICAgICAgIHg9IjQuMjE5MjYzMSIKICAgICAgIHk9Ii0xLjE2NTg0NjYiCiAgICAgICByeT0iMC4yOTYwMTQ3IiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwLjI5NjAxNDciCiAgICAgICB5PSItMS4xNjU4NDY2IgogICAgICAgeD0iNi45OTI3MDA2IgogICAgICAgaGVpZ2h0PSIxLjgyOTkwOTEiCiAgICAgICB3aWR0aD0iMS44MzQyMjUxIgogICAgICAgaWQ9InJlY3QyMDA3IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS40MjE4OTE5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNDIxODkxOTM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0MjAxMyIKICAgICAgIHdpZHRoPSIxLjgzNDIyNTEiCiAgICAgICBoZWlnaHQ9IjEuODI5OTA5MSIKICAgICAgIHg9IjEuNTIzOTUwNiIKICAgICAgIHk9IjEuODAyOTAzNCIKICAgICAgIHJ5PSIwLjI5NjAxNDciIC8+CiAgICA8cmVjdAogICAgICAgcnk9IjAuMjk2MDE0NyIKICAgICAgIHk9IjEuODAyOTAzNCIKICAgICAgIHg9IjQuMjE5MjYzMSIKICAgICAgIGhlaWdodD0iMS44Mjk5MDkxIgogICAgICAgd2lkdGg9IjEuODM0MjI1MSIKICAgICAgIGlkPSJyZWN0MjAxNSIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNDIxODkxOTM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjQyMTg5MTkzO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icmVjdDIwMTciCiAgICAgICB3aWR0aD0iMS44MzQyMjUxIgogICAgICAgaGVpZ2h0PSIxLjgyOTkwOTEiCiAgICAgICB4PSI2Ljk5MjcwMDYiCiAgICAgICB5PSIxLjgwMjkwMzQiCiAgICAgICByeT0iMC4yOTYwMTQ3IiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwLjI5NjAxNDciCiAgICAgICB5PSI0LjczMjU5MDciCiAgICAgICB4PSIxLjU2MzAxMzEiCiAgICAgICBoZWlnaHQ9IjEuODI5OTA5MSIKICAgICAgIHdpZHRoPSIxLjgzNDIyNTEiCiAgICAgICBpZD0icmVjdDIwMTkiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjQyMTg5MTkzO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8cmVjdAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS40MjE4OTE5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InJlY3QyMDIxIgogICAgICAgd2lkdGg9IjEuODM0MjI1MSIKICAgICAgIGhlaWdodD0iMS44Mjk5MDkxIgogICAgICAgeD0iNC4yNTgzMjU2IgogICAgICAgeT0iNC43MzI1OTA3IgogICAgICAgcnk9IjAuMjk2MDE0NyIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMC4yOTYwMTQ3IgogICAgICAgeT0iNC43MzI1OTA3IgogICAgICAgeD0iNy4wMzE3NjMxIgogICAgICAgaGVpZ2h0PSIxLjgyOTkwOTEiCiAgICAgICB3aWR0aD0iMS44MzQyMjUxIgogICAgICAgaWQ9InJlY3QyMDIzIgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS40MjE4OTE5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==)"), "undefined" != typeof navigator && navigator.userAgent.indexOf("Edge") !== -1 && n.add(".modal_default_form_item_date input::-ms-clear", "display: none;"), n.add(".modal_default_form_item_scrollable_scroll", "width: 100%; height: 200px; box-sizing: border-box; border: 1px solid #ccc; overflow-y: auto;"), n.add(".modal_default_form_item_scrollable_scroll_content", "padding: 5px;"), n.add(".modal_default_form_item_searchable", "position: relative;"), n.add(".modal_default_form_item_searchable_icon", ""), n.add(".modal_default_form_item_searchable_icon:after", "content:''; position: absolute; right: 5px; top: 50%; margin-top: -8px; width: 10px; height: 15px; background-image:url(" + a + ");"), n.add(".modal_default_form_item_searchable_list", "box-sizing: border-box; border: 1px solid #999; max-height: 150px; overflow-y: auto;"), n.add(".modal_default_form_item_searchable_list_item", "background: white; padding: 2px; cursor: default;"), n.add(".modal_default_form_item_searchable_list_item_highlight", "background: #ccc;"), n.add(".modal_default_form_item_time", "position: relative;"), n.add(".modal_default_form_item_time_icon", ""), n.add(".modal_default_form_item_time_icon:after", "content:''; position: absolute; right: 5px; top: 50%; margin-top: -8px; width: 10px; height: 15px; background-image:url(" + a + ");"), n.add(".modal_default_form_item_time_list", "box-sizing: border-box; border: 1px solid #999; max-height: 150px; overflow-y: auto;"), n.add(".modal_default_form_item_time_list_item", "background: white; padding: 2px; cursor: default;"), n.add(".modal_default_form_item_time_list_item_highlight", "background: #ccc;"), n.add(".modal_default_form_item_datetime_parent", "display: flex;"), n.add(".modal_default_form_item_datetime .modal_default_form_item_time_main", "margin-left: 5px;"), n.add(".modal_default_form_item_datetime input[type='text'].modal_default_input_date ", ""), n.add(".modal_default_form_item_tabular_main", "margin-top: 10px;"), n.add(".modal_default_form_item_tabular_table", "display: table; width: 100%; xbackground-color: #fff; border-collapse: collapse;"), n.add(".modal_default_form_item_tabular_tbody", "display: table-row-group;"), n.add(".modal_default_form_item_tabular_row", "display: table-row;"), n.add(".modal_default_form_item_tabular_row.modal_default_form_item_tabular_header", ""), n.add(".modal_default_form_item_tabular_cell.modal_default_form_item_tabular_rowaction", "padding: 0px; width: 23px;"), n.add(".modal_default_form_item_tabular_cell", "display: table-cell; border: 0px; padding: 2px 2px 2px 0px; cursor: default; vertical-align: bottom;"), n.add(".modal_default_form_item_tabular_header .modal_default_form_item_tabular_cell", "padding-left: 0px; padding-bottom: 0px;"), n.add(".modal_default_form_item_tabular_table input[type=text], .modal_default_form_item_tabular_table input[type=number]", "width:100%; box-sizing: border-box;"), n.add(".modal_default_form_item_tabular_table select", "width:100%; height:100%; box-sizing: border-box;"), n.add(".modal_default_form_item_tabular_plus", "display: inline-block; background-color: #ccc; color: white; width: 20px; height: 20px; border-radius: 10px; box-sizing: border-box; position: relative; margin-left: 3px; margin-top: 3px; cursor: pointer;"), n.add(".modal_default_form_item_tabular_plus:after", `content: ''; position: absolute; left: 5px; top: 5px; width: 10px; height: 10px;   background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTSA1LjAgMC41IEwgNS4wIDkuNSBNIDAuNSA1LjAgTCA5LjUgNS4wJyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbGluZWNhcDpidXR0JyAvPjwvc3ZnPg==")`), n.add(".modal_default_form_item_tabular_delete", "display: inline-block; background-color: #ccc; color: white; width: 20px; height: 20px; border-radius: 10px; box-sizing: border-box; position: relative; margin-left: 3px; margin-top: 3px; cursor: pointer;"), n.add(".modal_default_form_item_tabular_delete:after", `content: ''; position: absolute; left: 5px; top: 5px; width: 10px; height: 10px;   background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTSAwLjUgMC41IEwgOS41IDkuNSBNIDAuNSA5LjUgTCA5LjUgMC41JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbGluZWNhcDpidXR0JyAvPjwvc3ZnPg==")`), n.add(".modal_default_form_item_tabular_disabled .modal_default_form_item_tabular_plus", "display: none;"), n.add(".modal_default_form_item_tabular_plus_max.modal_default_form_item_tabular_plus", "display: none;"), n.add(".modal_default_form_item_tabular_disabled .modal_default_form_item_tabular_delete", "visibility: hidden;"), n.add(".modal_default_form_item_tabular_empty", "height: 1px; margin: 5px 23px 5px 0px; background-color: #ccc;"), n.add(".modal_default_form_item_tabular_spacer .modal_default_form_item_tabular_cell", "padding: 0px;"), n.add(".modal_min_main", "border: 1px solid #ccc; max-width: 90%;"), n.add(".modal_min_background", "opacity: 0.5; background-color: #000;"), n.add(".modal_min_ok", "padding: 3px 10px;"), n.add(".modal_min_cancel", "padding: 3px 10px;"), n.add(".navigator_modal_main", "border-left: 1px solid #c0c0c0;border-right: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;background-color: white;color: #000000; box-sizing: content-box;"), n.add(".navigator_modal_main *, .navigator_modal_main *:before, .navigator_modal_main *:after", "box-sizing: content-box;"), n.add(".navigator_modal_month", "font-size: 11px;"), n.add(".navigator_modal_day", "color: black;"), n.add(".navigator_modal_weekend", "background-color: #f0f0f0;"), n.add(".navigator_modal_dayheader", "color: black;"), n.add(".navigator_modal_line", "border-bottom: 1px solid #c0c0c0;"), n.add(".navigator_modal_dayother", "color: gray;"), n.add(".navigator_modal_todaybox", "border: 1px solid red;"), n.add(".navigator_modal_title, .navigator_modal_titleleft, .navigator_modal_titleright", "border-top: 1px solid #c0c0c0;border-bottom: 1px solid #c0c0c0;color: #333;background: #f3f3f3;"), n.add(".navigator_modal_busy", "font-weight: bold;"), n.add(".navigator_modal_cell", "text-align: center;"), n.add(".navigator_modal_select .navigator_modal_cell_box", "background-color: #FFE794; opacity: 0.5;"), n.add(".navigator_modal_title", "text-align: center;"), n.add(".navigator_modal_titleleft, .navigator_modal_titleright", "text-align: center;"), n.add(".navigator_modal_dayheader", "text-align: center;"), n.add(".navigator_modal_weeknumber", "text-align: center;"), n.add(".navigator_modal_cell_text", "cursor: pointer;"), n.commit(), DayPilot2.Modal = function(e2) {
      this.autoFocus = true, this.focus = null, this.autoStretch = true, this.autoStretchFirstLoadOnly = false, this.className = null, this.theme = "modal_default", this.disposeOnClose = true, this.dragDrop = true, this.loadingHtml = null, this.maxHeight = null, this.scrollWithPage = true, this.useIframe = true, this.zIndex = 99999, this.left = null, this.width = 600, this.top = 20, this.height = 200, this.locale = null, this.closed = null, this.onClose = null, this.onClosed = null, this.onShow = null;
      var t2 = this;
      this.id = "_" + (/* @__PURE__ */ new Date()).getTime() + "n" + 10 * Math.random(), this.Pb = false, this.Qb = null, this.Rb = null, this.showHtml = function(e3) {
        if (DayPilot2.ModalStatic.displayed(this)) throw "This modal dialog is already displayed.";
        if (this.div || this.Sb(), this.ib(), this.useIframe) {
          var t3 = function(e4, t4) {
            return function() {
              e4.setInnerHTML(e4.id + "iframe", t4);
            };
          };
          window.setTimeout(t3(this, e3), 0);
        } else e3.nodeType ? this.div.appendChild(e3) : this.div.innerHTML = e3;
        this.ib(), this.Tb(), this.Ub();
      }, this.showUrl = function(e3) {
        if (DayPilot2.ModalStatic.displayed(this)) throw "This modal dialog is already displayed.";
        if (this.useIframe) {
          this.div || this.Sb();
          var i2 = this.loadingHtml;
          i2 && (this.iframe.src = "about:blank", this.setInnerHTML(this.id + "iframe", i2)), this.re(this.iframe, "load", this.Vb), this.iframe.src = e3, this.ib(), this.Tb(), this.Ub();
        } else t2.Wb({
          "url": e3,
          "success": function(e4) {
            var i3 = e4.request.responseText;
            t2.showHtml(i3);
          },
          "error": function(e4) {
            t2.showHtml("Error loading the modal dialog");
          }
        });
      }, this.Ub = function() {
        if ("function" == typeof t2.onShow) {
          var e3 = {};
          e3.root = t2.Xb(), e3.modal = t2, t2.onShow(e3);
        }
      }, this.Xb = function() {
        return t2.iframe ? t2.iframe.contentWindow.document : t2.div;
      }, this.Wb = function(e3) {
        var t3 = new XMLHttpRequest();
        if (t3) {
          var i2 = e3.method || "GET", a2 = e3.success || function() {
          }, n2 = e3.error || function() {
          }, o2 = e3.data, r2 = e3.url;
          t3.open(i2, r2, true), t3.setRequestHeader("Content-type", "text/plain"), t3.onreadystatechange = function() {
            if (4 === t3.readyState) if (200 === t3.status || 304 === t3.status) {
              var e4 = {};
              e4.request = t3, a2(e4);
            } else if (n2) {
              var e4 = {};
              e4.request = t3, n2(e4);
            } else window.console && console.log("HTTP error " + t3.status);
          }, 4 !== t3.readyState && ("object" == typeof o2 && (o2 = JSON.stringify(o2)), t3.send(o2));
        }
      }, this.ib = function() {
        delete this.result;
        var e3 = window, i2 = document, a2 = e3.pageYOffset ? e3.pageYOffset : i2.documentElement && i2.documentElement.scrollTop ? i2.documentElement.scrollTop : i2.body.scrollTop;
        this.theme && (this.hideDiv.className = this.theme + "_background"), this.zIndex && (this.hideDiv.style.zIndex = this.zIndex), this.hideDiv.style.display = "", window.setTimeout(function() {
          t2.hideDiv && (t2.hideDiv.onclick = function() {
            t2.hide({
              "backgroundClick": true
            });
          });
        }, 500), this.theme ? this.div.className = this.theme + "_main" : this.div.className = "", this.className && (this.div.className += " " + this.className), this.left ? this.div.style.left = this.left + "px" : this.div.style.marginLeft = "-" + Math.floor(this.width / 2) + "px", this.div.style.position = "absolute", this.div.style.boxSizing = "content-box", this.div.style.top = a2 + this.top + "px", this.div.style.width = this.width + "px", this.zIndex && (this.div.style.zIndex = this.zIndex), this.height && (this.useIframe || !this.autoStretch ? this.div.style.height = this.height + "px" : this.div.style.height = ""), this.useIframe && this.height && (this.iframe.style.height = this.height + "px"), this.div.style.display = "", this.Zb(), DayPilot2.ModalStatic.remove(this), DayPilot2.ModalStatic.list.push(this);
      }, this.Vb = function() {
        t2.iframe.contentWindow.modal = t2, t2.autoStretch && t2.stretch();
      }, this.stretch = function() {
        var e3 = function() {
          return t2.Yb().y;
        }, i2 = function() {
          return t2.Yb().x;
        };
        if (this.useIframe) {
          for (var a2 = i2() - 40, n2 = this.width; n2 < a2 && this.$b(); n2 += 10) this.div.style.width = n2 + "px", this.div.style.marginLeft = "-" + Math.floor(n2 / 2) + "px";
          for (var o2 = this.maxHeight || e3() - 2 * this.top, r2 = this.height; r2 < o2 && this._b(); r2 += 10) this.iframe.style.height = r2 + "px", this.div.style.height = r2 + "px";
          this.autoStretchFirstLoadOnly && this.ue(this.iframe, "load", this.Vb);
        } else this.div.style.height = "";
      }, this.$b = function() {
        for (var e3 = this.iframe.contentWindow.document, t3 = "BackCompat" === e3.compatMode ? e3.body : e3.documentElement, i2 = t3.scrollWidth, a2 = e3.body.children, n2 = 0; n2 < a2.length; n2++) {
          var o2 = a2[n2].offsetLeft + a2[n2].offsetWidth;
          i2 = Math.max(i2, o2);
        }
        return i2 > t3.clientWidth;
      }, this._b = function() {
        for (var e3 = this.iframe.contentWindow.document, t3 = "BackCompat" === e3.compatMode ? e3.body : e3.documentElement, i2 = t3.scrollHeight, a2 = e3.body.children, n2 = 0; n2 < a2.length; n2++) {
          var o2 = a2[n2].offsetTop + a2[n2].offsetHeight;
          i2 = Math.max(i2, o2);
        }
        return i2 > t3.clientHeight;
      }, this.Yb = function() {
        var e3 = document;
        if ("CSS1Compat" === e3.compatMode && e3.documentElement && e3.documentElement.clientWidth) {
          var t3 = e3.documentElement.clientWidth, i2 = e3.documentElement.clientHeight;
          return {
            x: t3,
            y: i2
          };
        }
        var t3 = e3.body.clientWidth, i2 = e3.body.clientHeight;
        return {
          x: t3,
          y: i2
        };
      }, this.Tb = function() {
        this.Pb || (this.re(window, "resize", this.bc), this.re(window, "scroll", this.cc), this.dragDrop && (this.re(document, "mousemove", this.dc), this.re(document, "mouseup", this.ec)), this.Pb = true);
      }, this.fc = function() {
        this.ue(window, "resize", this.bc), this.ue(window, "scroll", this.cc), this.dragDrop && (this.ue(document, "mousemove", this.dc), this.ue(document, "mouseup", this.ec)), this.Pb = false;
      }, this.gc = function(e3) {
        e3.target === t2.div && (e3.preventDefault(), t2.div.style.cursor = "move", t2.hc(), t2.Rb = t2.mc(e3 || window.event), t2.Qb = {
          x: t2.div.offsetLeft,
          y: t2.div.offsetTop
        });
      }, this.dc = function(e3) {
        if (t2.Rb) {
          var e3 = e3 || window.event, i2 = t2.mc(e3), a2 = i2.x - t2.Rb.x, n2 = i2.y - t2.Rb.y;
          t2.div.style.marginLeft = "0px", t2.div.style.top = t2.Qb.y + n2 + "px", t2.div.style.left = t2.Qb.x + a2 + "px";
        }
      }, this.ec = function(e3) {
        t2.Rb && (t2.ic(), t2.div.style.cursor = null, t2.Rb = null);
      }, this.hc = function() {
        if (this.useIframe) {
          var e3 = document.createElement("div");
          e3.style.backgroundColor = "#ffffff", e3.style.filter = "alpha(opacity=80)", e3.style.opacity = "0.80", e3.style.width = "100%", e3.style.height = this.height + "px", e3.style.position = "absolute", e3.style.left = "0px", e3.style.top = "0px", this.div.appendChild(e3), this.mask = e3;
        }
      }, this.ic = function() {
        this.useIframe && (this.div.removeChild(this.mask), this.mask = null);
      }, this.bc = function() {
        t2.jc(), t2.Zb();
      }, this.cc = function() {
        t2.jc();
      }, this.Zb = function() {
        if (!t2.left && t2.div) {
          var e3 = t2.div.offsetWidth;
          t2.div.style.marginLeft = "-" + Math.floor(e3 / 2) + "px";
        }
      }, this.jc = function() {
        if (t2.hideDiv && t2.div && "none" !== t2.hideDiv.style.display && "none" !== t2.div.style.display) {
          var e3 = t2.kc.scrollY();
          t2.scrollWithPage || (t2.div.style.top = e3 + t2.top + "px");
        }
      }, this.kc = {}, this.kc.container = function() {
        return t2.container || document.body;
      }, this.kc.scrollY = function() {
        var e3 = t2.kc.container();
        return e3 === document.body ? window.pageYOffset ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop : e3.scrollTop;
      }, this.re = function(e3, t3, i2) {
        e3.addEventListener ? e3.addEventListener(t3, i2, false) : e3.attachEvent && e3.attachEvent("on" + t3, i2);
      }, this.ue = function(e3, t3, i2) {
        e3.removeEventListener ? e3.removeEventListener(t3, i2, false) : e3.detachEvent && e3.detachEvent("on" + t3, i2);
      }, this.mc = function(e3) {
        return e3.pageX || e3.pageY ? {
          x: e3.pageX,
          y: e3.pageY
        } : {
          x: e3.clientX + document.documentElement.scrollLeft,
          y: e3.clientY + document.documentElement.scrollTop
        };
      }, this.abs = function(e3) {
        for (var t3 = {
          x: e3.offsetLeft,
          y: e3.offsetTop
        }; e3.offsetParent; ) e3 = e3.offsetParent, t3.x += e3.offsetLeft, t3.y += e3.offsetTop;
        return t3;
      }, this.Sb = function() {
        var e3 = t2.kc.container(), i2 = e3 === document.body, a2 = i2 ? "fixed" : "absolute", n2 = document.createElement("div");
        n2.id = this.id + "hide", n2.style.position = a2, n2.style.left = "0px", n2.style.top = "0px", n2.style.right = "0px", n2.style.bottom = "0px", n2.oncontextmenu = function() {
          return false;
        }, n2.onmousedown = function() {
          return false;
        }, e3.appendChild(n2);
        var o2 = document.createElement("div");
        o2.id = this.id + "popup", o2.style.position = a2, o2.style.left = "50%", o2.style.top = "0px", o2.style.backgroundColor = "white", o2.style.width = "50px", o2.style.height = "50px", this.dragDrop && (o2.onmousedown = this.gc), o2.addEventListener("keydown", function(e4) {
          e4.stopPropagation();
        });
        var r2 = null;
        this.useIframe && (r2 = document.createElement("iframe"), r2.id = this.id + "iframe", r2.name = this.id + "iframe", r2.frameBorder = "0", r2.style.width = "100%", r2.style.height = "50px", o2.appendChild(r2)), e3.appendChild(o2), this.div = o2, this.iframe = r2, this.hideDiv = n2;
      }, this.setInnerHTML = function(e3, i2) {
        var a2 = window.frames[e3], n2 = a2.contentWindow || a2.document || a2.contentDocument;
        n2.document && (n2 = n2.document), null == n2.body && n2.write("<body></body>"), i2.nodeType ? n2.body.appendChild(i2) : n2.body.innerHTML = i2, t2.autoStretch && (t2.autoStretchFirstLoadOnly && t2.lc || (t2.stretch(), t2.lc = true));
      }, this.close = function(e3) {
        this.result = e3, this.hide();
      }, this.closeSerialized = function() {
        for (var e3 = t2.Xb(), i2 = e3.querySelectorAll("input, textarea, select"), a2 = {}, n2 = 0; n2 < i2.length; n2++) {
          var o2 = i2[n2], r2 = o2.name;
          if (r2) {
            var s2 = o2.value;
            a2[r2] = s2;
          }
        }
        t2.close(a2);
      }, this.hide = function(e3) {
        e3 = e3 || {};
        var i2 = {};
        i2.backgroundClick = !!e3.backgroundClick, i2.result = this.result, i2.canceled = "undefined" == typeof this.result, i2.preventDefault = function() {
          this.preventDefault.value = true;
        }, "function" == typeof this.onClose && (this.onClose(i2), i2.preventDefault.value) || (this.div && (this.div.style.display = "none", this.hideDiv.style.display = "none", this.useIframe || (this.div.innerHTML = null)), window.focus(), DayPilot2.ModalStatic.remove(this), "function" == typeof this.onClosed ? this.onClosed(i2) : this.closed && this.closed(), delete this.result, this.disposeOnClose && (t2.fc(), t2.nc(t2.div), t2.nc(t2.hideDiv), t2.div = null, t2.hideDiv = null, t2.iframe = null));
      }, this.nc = function(e3) {
        e3 && e3.parentNode && e3.parentNode.removeChild(e3);
      }, this.oc = function() {
        if (e2) for (var t3 in e2) this[t3] = e2[t3];
      }, this.oc();
    }, DayPilot2.Modal.alert = function(e2, t2) {
      t2 = t2 || {}, t2.height = t2.height || 40, t2.useIframe = false;
      var i2 = t2.okText || "OK";
      t2.cancelText || "Cancel";
      return DayPilot2.getPromise(function(a2, n2) {
        t2.onClosed = function(e3) {
          a2(e3);
        };
        var o2 = new DayPilot2.Modal(t2), r2 = document.createElement("div");
        r2.className = o2.theme + "_inner";
        var s2 = document.createElement("div");
        s2.className = o2.theme + "_content", s2.innerHTML = e2;
        var l2 = document.createElement("div");
        l2.className = o2.theme + "_buttons";
        var d2 = document.createElement("button");
        d2.innerText = i2, d2.className = o2.theme + "_ok", d2.onclick = function(e3) {
          DayPilot2.ModalStatic.close("OK");
        }, l2.appendChild(d2), r2.appendChild(s2), r2.appendChild(l2), o2.showHtml(r2), o2.autoFocus && d2.focus();
      });
    }, DayPilot2.Modal.confirm = function(e2, t2) {
      t2 = t2 || {}, t2.height = t2.height || 40, t2.useIframe = false;
      var i2 = t2.okText || "OK", a2 = t2.cancelText || "Cancel";
      return DayPilot2.getPromise(function(n2, o2) {
        t2.onClosed = function(e3) {
          n2(e3);
        };
        var r2 = new DayPilot2.Modal(t2), s2 = document.createElement("div");
        s2.className = r2.theme + "_inner";
        var l2 = document.createElement("div");
        l2.className = r2.theme + "_content", l2.innerHTML = e2;
        var d2 = document.createElement("div");
        d2.className = r2.theme + "_buttons";
        var c2 = document.createElement("button");
        c2.innerText = i2, c2.className = r2.theme + "_ok", c2.onclick = function(e3) {
          DayPilot2.ModalStatic.close("OK");
        };
        var u = document.createTextNode(" "), h = document.createElement("button");
        h.innerText = a2, h.className = r2.theme + "_cancel", h.onclick = function(e3) {
          DayPilot2.ModalStatic.close();
        }, d2.appendChild(c2), d2.appendChild(u), d2.appendChild(h), s2.appendChild(l2), s2.appendChild(d2), r2.showHtml(s2), r2.autoFocus && c2.focus();
      });
    }, DayPilot2.Modal.prompt = function(e2, t2, i2) {
      "object" == typeof t2 && (i2 = t2, t2 = ""), i2 = i2 || {}, i2.height = i2.height || 40, i2.useIframe = false;
      var a2 = i2.okText || "OK", n2 = i2.cancelText || "Cancel", o2 = t2 || "";
      return DayPilot2.getPromise(function(t3, r2) {
        i2.onClosed = function(e3) {
          t3(e3);
        };
        var s2 = new DayPilot2.Modal(i2), l2 = document.createElement("div");
        l2.className = s2.theme + "_inner";
        var d2 = document.createElement("div");
        d2.className = s2.theme + "_content", d2.innerHTML = e2;
        var c2 = document.createElement("div");
        c2.className = s2.theme + "_input";
        var u = document.createElement("input");
        u.value = o2, u.style.width = "100%", u.onkeydown = function(e3) {
          var t4 = false;
          switch (e3.keyCode) {
            case 13:
              s2.close(this.value);
              break;
            case 27:
              s2.close();
              break;
            default:
              t4 = true;
          }
          t4 || (e3.preventDefault(), e3.stopPropagation());
        }, c2.appendChild(u);
        var h = document.createElement("div");
        h.className = s2.theme + "_buttons";
        var f = document.createElement("button");
        f.innerText = a2, f.className = s2.theme + "_ok", f.onclick = function(e3) {
          s2.close(u.value);
        };
        var m = document.createTextNode(" "), p = document.createElement("button");
        p.innerText = n2, p.className = s2.theme + "_cancel", p.onclick = function(e3) {
          s2.close();
        }, h.appendChild(f), h.appendChild(m), h.appendChild(p), l2.appendChild(d2), l2.appendChild(c2), l2.appendChild(h), s2.showHtml(l2), s2.autoFocus && u.focus();
      });
    };
    var o = function(e2) {
      return "[object Array]" === Object.prototype.toString.call(e2);
    };
    DayPilot2.Modal.form = function(t2, i2, a2) {
      if (1 === arguments.length) {
        var n2 = t2;
        if (o(n2)) i2 = {};
        else {
          if ("object" != typeof n2) throw "Invalid DayPilot.Modal.form() parameter";
          i2 = t2, t2 = [];
          for (var s2 in i2) {
            var l2 = {};
            l2.name = s2, l2.id = s2, t2.push(l2);
          }
        }
      }
      var d2 = {};
      for (var s2 in a2) d2[s2] = a2[s2];
      d2.height = d2.height || 40, d2.useIframe = false;
      var c2 = d2.okText || "OK", u = d2.cancelText || "Cancel";
      return DayPilot2.getPromise(function(a3, n3) {
        d2.onClosed = function(t3) {
          if (t3.result) {
            var n4 = JSON.parse(JSON.stringify(i2));
            for (var o3 in t3.result) e(n4, o3, t3.result[o3]);
            t3.result = n4;
          }
          a3(t3);
        };
        var o2 = new DayPilot2.Modal(d2), s3 = document.createElement("div");
        s3.className = o2.theme + "_inner";
        var l3 = document.createElement("div");
        l3.className = o2.theme + "_input";
        var h = new r({
          theme: o2.theme,
          form: t2,
          data: i2,
          zIndex: o2.zIndex,
          locale: o2.locale,
          plugins: o2.plugins,
          onKey: function(e2) {
            switch (e2.key) {
              case "Enter":
                h.validate() && o2.close(h.serialize());
                break;
              case "Escape":
                o2.close();
            }
          },
          onChange: function(e2) {
            "function" == typeof o2.onChange && o2.onChange(e2);
          }
        }), f = h.create();
        l3.append(f);
        var m = document.createElement("div");
        m.className = o2.theme + "_buttons";
        var p = document.createElement("button");
        p.innerText = c2, p.className = o2.theme + "_ok", d2.okDisabled && (p.disabled = true), p.onclick = function(e2) {
          h.validate() && o2.close(h.serialize());
        };
        var v = document.createTextNode(" "), y = document.createElement("button");
        if (y.innerText = u, y.className = o2.theme + "_cancel", y.onclick = function(e2) {
          o2.close();
        }, y.onmousedown = function(e2) {
          h.canceling = true;
        }, m.appendChild(p), m.appendChild(v), m.appendChild(y), s3.appendChild(l3), s3.appendChild(m), o2.showHtml(s3), o2.div.setAttribute("tabindex", "-1"), o2.div.addEventListener("keydown", function(e2) {
          switch (e2.keyCode) {
            case 27:
              o2.close();
              break;
            case 13:
              h.validate() && o2.close(h.serialize());
          }
        }), o2.focus) {
          var g = null;
          if ("object" == typeof o2.focus) {
            var b = o2.focus.id, D = o2.focus.value;
            g = h.findViewById(b, D);
          } else "string" == typeof o2.focus && (g = h.findViewById(o2.focus));
          g && g.focus();
        } else {
          var w = h.firstFocusable();
          o2.autoFocus && w ? w.focus() : o2.div.focus();
        }
      });
    }, DayPilot2.Modal.close = function(e2) {
      var t2 = DayPilot2.Modal.opener();
      t2 && t2.close(e2);
    }, DayPilot2.Modal.stretch = function(e2) {
      var t2 = DayPilot2.Modal.opener();
      if (!t2) throw "Unable to find the opener DayPilot.Modal instance.";
      t2.stretch();
    }, DayPilot2.Modal.closeSerialized = function() {
      var e2 = DayPilot2.Modal.opener() || DayPilot2.ModalStatic.last();
      e2 && e2.closeSerialized();
    }, DayPilot2.Modal.opener = function() {
      return "undefined" != typeof DayPilot2 && "undefined" != typeof DayPilot2.ModalStatic && DayPilot2.ModalStatic.list.length > 0 ? DayPilot2.ModalStatic.list[DayPilot2.ModalStatic.list.length - 1] : parent && parent.DayPilot && parent.DayPilot.ModalStatic && parent.DayPilot.ModalStatic.list[parent.DayPilot.ModalStatic.list.length - 1];
    }, DayPilot2.Modal.Experimental = {}, DayPilot2.Modal.Experimental.Form = r, "undefined" == typeof DayPilot2.getPromise && (DayPilot2.getPromise = function(e2) {
      return "undefined" != typeof Promise ? new Promise(e2) : (DayPilot2.Promise = function(e3) {
        var t2 = this;
        this.then = function(t3, i2) {
          return t3 = t3 || function() {
          }, i2 = i2 || function() {
          }, e3(t3, i2), DayPilot2.getPromise(e3);
        }, this["catch"] = function(i2) {
          return t2.then(null, i2), DayPilot2.getPromise(e3);
        };
      }, new DayPilot2.Promise(e2));
    });
    var r = function(e2) {
      this.form = [], this.data = {}, this.theme = "form_default", this.zIndex = 99999, this.locale = "en-us", this.plugins = {}, this.onKey = null, this.pc = [], this.qc = null, this.canceling = false, this.rc = [], this.f = [], this.sc = null, e2 = e2 || {};
      for (var t2 in e2) this[t2] = e2[t2];
    };
    r.prototype.create = function() {
      return this.load(), this.render(), this.sc;
    }, r.prototype.render = function() {
      var e2 = this;
      this.sc = document.createElement("div"), this.pc.forEach(function(t2) {
        e2.createView(t2);
      }), this.applyState();
    }, r.prototype.createView = function(e2) {
      var t2 = this.theme, i2 = this, a2 = document.createElement("div");
      if (a2.className = t2 + "_form_item " + t2 + "_form_item_level" + e2.level, e2.interactive || "title" !== e2.type ? a2.className += " " + t2 + "_form_item_" + e2.type : a2.className += " " + t2 + "_form_title", e2.data.cssClass && (a2.className += " " + e2.data.cssClass), !e2.isValue) {
        var n2 = document.createElement("div");
        n2.className = t2 + "_form_item_label", n2.innerText = e2.text, a2.appendChild(n2);
      }
      var o2 = this.createInteractive(e2);
      o2.onInput = function(e3) {
        if (e3 = e3 || {}, i2.tc(o2, {
          "debounce": !e3.immediate
        }), "function" == typeof i2.onChange) {
          var t3 = {};
          t3.result = i2.serialize(), i2.onChange(t3);
        }
      }, o2.onBlur = function() {
        i2.canceling || i2.tc(o2);
      }, o2.apply(e2), o2.sc = a2, o2.row = e2, o2.element && a2.appendChild(o2.element), this.f.push(o2), this.sc.appendChild(a2);
    }, r.prototype.validate = function() {
      var e2 = this, t2 = true;
      return this.f.forEach(function(i2) {
        var a2 = e2.tc(i2);
        t2 = t2 && a2;
      }), t2;
    }, r.prototype.tc = function(e2, t2) {
      function i2() {
        e2.uc && (e2.uc.remove(), e2.uc = null), e2.sc.classList.add(u);
        var t3 = document.createElement("div");
        t3.classList.add(h), t3.innerText = c2.message, e2.uc = t3, e2.sc.appendChild(t3);
      }
      t2 = t2 || {};
      var a2 = t2.debounce, n2 = t2.silent, o2 = e2.row, r2 = true, s2 = "function" == typeof o2.data.onValidate ? o2.data.onValidate : null, l2 = "function" == typeof o2.data.validate ? o2.data.validate : null, d2 = s2 || l2;
      if (d2) {
        var c2 = {};
        c2.valid = true, c2.value = e2.save()[o2.field], c2.message = "Error", c2.values = this.serialize(), c2.result = this.serialize(), d2(c2);
        var u = this.theme + "_form_item_invalid", h = this.theme + "_form_item_invalid_message";
        if (c2.valid) clearTimeout(this.rc[o2.field]), e2.uc && (e2.uc.remove(), e2.uc = null), e2.sc.classList.remove(u);
        else if (!n2) if (a2) {
          var f = 1e3;
          clearTimeout(this.rc[o2.field]), this.rc[o2.field] = setTimeout(function() {
            i2();
          }, f);
        } else i2();
        r2 = c2.valid;
      }
      return r2;
    }, r.prototype.load = function() {
      var e2 = this;
      this.form.forEach(function(t2) {
        e2.processFormItem(t2, 0);
      });
      var i2;
      try {
        var a2 = JSON.stringify(this.data);
        i2 = t(JSON.parse(a2));
      } catch (e3) {
        throw new Error("The 'data' object is not serializable (it may contain circular dependencies): " + e3);
      }
      for (var n2 in i2) this.setValue(n2, i2[n2]);
    }, r.prototype.setValue = function(e2, t2) {
      this.pc.forEach(function(i2) {
        i2.applyValue(e2, t2);
      });
    }, r.prototype.updateDependentState = function() {
      var e2 = this, t2 = [true];
      (this.qc ? this.qc : this.pc).forEach(function(i2) {
        var a2 = e2.updateState(i2, {
          enabled: t2[i2.level] && !i2.data.disabled
        });
        a2.isValue && (t2[a2.level + 1] = a2.enabled && a2.checked);
      });
    }, r.prototype.processFormItem = function(e2, t2) {
      var i2 = this, a2 = this.getFieldType(e2), n2 = [];
      if ("radio" === a2) {
        if (e2.name) {
          var o2 = new s();
          o2.field = e2.id, o2.data = e2, o2.level = t2, o2.type = "label", o2.interactive = false, o2.text = e2.name, i2.pc.push(o2), n2.push(o2);
        }
        e2.options.forEach(function(o3) {
          var r2 = new s();
          r2.field = e2.id, r2.data = o3, r2.level = t2, r2.type = a2, r2.isValue = true, r2.text = o3.name, r2.resolved = o3.id, i2.pc.push(r2), n2.push(r2), o3.children && o3.children.forEach(function(e3) {
            var a3 = i2.processFormItem(e3, t2 + 1);
            n2 = n2.concat(a3);
          });
        });
      } else if ("title" === a2) {
        var o2 = new s();
        o2.field = e2.id, o2.data = e2, o2.level = t2, o2.type = a2, o2.interactive = false, o2.text = e2.name, i2.pc.push(o2), n2.push(o2);
      } else if ("image" === a2) {
        var o2 = new s();
        o2.isValue = true, o2.field = e2.id, o2.data = e2, o2.level = t2, o2.type = a2, o2.interactive = false, o2.text = null, i2.pc.push(o2), n2.push(o2);
      } else if ("html" === a2) {
        var o2 = new s();
        o2.isValue = true, o2.field = e2.id, o2.data = e2, o2.level = t2, o2.type = a2, o2.interactive = false, o2.text = null, i2.pc.push(o2), n2.push(o2);
      } else if ("scrollable" === a2) {
        var o2 = new s();
        o2.isValue = true, o2.field = e2.id, o2.data = e2, o2.level = t2, o2.type = a2, o2.interactive = false, o2.text = null, i2.pc.push(o2), n2.push(o2);
      } else {
        var o2 = new s();
        o2.field = e2.id, o2.data = e2, o2.level = t2, o2.type = a2, o2.text = e2.name, o2.children = [], i2.pc.push(o2), n2.push(o2);
      }
      return "checkbox" === a2 && (o2.isValue = true, o2.resolved = true, e2.children && e2.children.forEach(function(e3) {
        var a3 = i2.processFormItem(e3, t2 + 1);
        n2 = n2.concat(a3);
      })), n2;
    }, r.prototype.doOnKey = function(e2) {
      if ("function" == typeof this.onKey) {
        var t2 = {
          key: e2
        };
        this.onKey(t2);
      }
    }, r.prototype.createInteractive = function(e2) {
      var t2 = this, i2 = {
        "label": function() {
          return new l();
        },
        "title": function() {
          return new l();
        },
        "image": function() {
          var t3 = new l(), i3 = document.createElement("img");
          return i3.src = e2.data.image, t3.element = i3, t3;
        },
        "html": function() {
          var t3 = new l(), i3 = document.createElement("div");
          return "string" == typeof e2.data.text ? i3.innerText = e2.data.text : "string" == typeof e2.data.html && (i3.innerHTML = e2.data.html), t3.element = i3, t3;
        },
        "scrollable": function() {
          var i3 = new l(), a2 = document.createElement("div");
          a2.className = t2.theme + "_form_item_scrollable_scroll", e2.data.height && (a2.style.height = e2.data.height + "px");
          var n2 = document.createElement("div");
          return n2.className = t2.theme + "_form_item_scrollable_scroll_content", "string" == typeof e2.data.text ? n2.innerText = e2.data.text : "string" == typeof e2.data.html && (n2.innerHTML = e2.data.html), a2.appendChild(n2), i3.element = a2, i3;
        },
        "text": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var t3 = i3.element;
            t3.value = e3.value, t3.disabled = !e3.enabled;
          };
          var a2 = document.createElement("input");
          return a2.name = e2.field, a2.type = "text", a2.autocomplete = "off", a2.onkeydown = function(e3) {
            var i4 = false;
            switch (e3.keyCode) {
              case 13:
                t2.doOnKey("Enter");
                break;
              case 27:
                t2.doOnKey("Escape");
                break;
              default:
                i4 = true;
            }
            i4 || (e3.preventDefault(), e3.stopPropagation());
          }, a2.oninput = function(e3) {
            i3.onInput();
          }, a2.onblur = function(e3) {
            i3.onBlur();
          }, i3.element = a2, i3.canFocus = function() {
            return !i3.element.disabled;
          }, i3.focus = function() {
            i3.element.focus(), i3.element.setSelectionRange(0, i3.element.value.length);
          }, i3.save = function() {
            var t3 = {};
            return t3[e2.field] = a2.value, t3;
          }, i3;
        },
        "textarea": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var t3 = i3.element;
            t3.value = e3.value, t3.disabled = !e3.enabled;
          };
          var a2 = document.createElement("textarea");
          return a2.name = e2.field, e2.data.height && (a2.style.height = e2.data.height + "px"), a2.onkeydown = function(e3) {
            var i4 = false;
            switch (e3.keyCode) {
              case 13:
                (e3.ctrlKey || e3.metaKey) && t2.doOnKey("Enter"), i4 = false;
                break;
              case 27:
                t2.doOnKey("Escape");
                break;
              default:
                i4 = true;
            }
            i4 || e3.stopPropagation();
          }, a2.oninput = function(e3) {
            i3.onInput();
          }, a2.onblur = function(e3) {
            i3.onBlur();
          }, i3.element = a2, i3.canFocus = function() {
            return !i3.element.disabled;
          }, i3.focus = function() {
            i3.element.focus(), i3.element.setSelectionRange(0, 0);
          }, i3.save = function() {
            var t3 = {};
            return t3[e2.field] = a2.value, t3;
          }, i3;
        },
        "date": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var a3 = i3.element, n3 = i3.picker;
            e3.data.dateFormat && (n3.pattern = e3.data.dateFormat);
            var o2 = e3.data.locale || t2.locale;
            o2 && (n3.locale = o2), a3.disabled = !e3.enabled, n3.date = new DayPilot2.Date(e3.value);
            var r2 = new DayPilot2.Date(e3.value).toString(e3.data.dateFormat || n3.pattern, n3.locale);
            a3.value = r2;
          };
          var a2 = document.createElement("input");
          a2.name = e2.field;
          var n2 = new DayPilot2.DatePicker({
            target: a2,
            theme: "navigator_modal",
            zIndex: t2.zIndex + 1,
            resetTarget: false,
            targetAlignment: "left",
            onTimeRangeSelect: function(e3) {
              i3.onInput({
                "immediate": true
              });
            }
          });
          return a2.picker = n2, a2.className = t2.theme + "_input_date", a2.type = "text", a2.onkeydown = function(e3) {
            var i4 = false;
            switch (e3.keyCode) {
              case 13:
                n2.visible ? n2.close() : t2.doOnKey("Enter");
                break;
              case 27:
                n2.visible ? n2.close() : t2.doOnKey("Escape");
                break;
              case 9:
                n2.close(), i4 = true;
                break;
              default:
                i4 = true;
            }
            i4 || (e3.preventDefault(), e3.stopPropagation());
          }, a2.onfocus = function() {
            n2.show();
          }, a2.onclick = function() {
            n2.show();
          }, a2.oninput = function(e3) {
            i3.onInput();
          }, a2.onblur = function(e3) {
            i3.onBlur();
          }, i3.element = a2, i3.picker = n2, i3.canFocus = function() {
            return !i3.element.disabled;
          }, i3.focus = function() {
            i3.element.focus();
          }, i3.save = function() {
            var t3 = n2.date ? n2.date.toString() : null, i4 = {};
            return i4[e2.field] = t3, i4;
          }, i3;
        },
        "time": function() {
          return t2.vc(e2);
        },
        "datetime": function() {
          return t2.wc(e2);
        },
        "select": function() {
          var t3 = new l();
          t3.apply = function(e3) {
            t3.row = e3;
            var i4 = t3.element;
            i4.value = e3.value, i4.disabled = !e3.enabled;
          };
          var i3 = document.createElement("select");
          return i3.name = e2.field, e2.data.options && e2.data.options.forEach && e2.data.options.forEach(function(e3) {
            var t4 = document.createElement("option");
            t4.innerText = e3.name || e3.id, t4.value = e3.id, t4.xc = e3.id, i3.appendChild(t4);
          }), i3.onchange = function(e3) {
            t3.onInput({
              "immediate": true
            });
          }, i3.onblur = function(e3) {
            t3.onBlur();
          }, t3.element = i3, t3.canFocus = function() {
            return !t3.element.disabled;
          }, t3.focus = function() {
            t3.element.focus();
          }, t3.save = function() {
            var t4 = null, a2 = i3.options[i3.selectedIndex];
            a2 && "undefined" != typeof a2.xc && (t4 = a2.xc);
            var n2 = {};
            return n2[e2.field] = t4, n2;
          }, t3;
        },
        "searchable": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var t3 = i3.searchable;
            t3.disabled = !e3.enabled, t3.select(e3.value);
          };
          var a2 = new d({
            data: e2.data.options || [],
            name: e2.field,
            theme: t2.theme + "_form_item_searchable",
            listZIndex: t2.zIndex + 1,
            onSelect: function(e3) {
              e3.ui && i3.onInput({
                "immediate": true
              });
            }
          }), n2 = a2.create();
          return i3.element = n2, i3.searchable = a2, i3.canFocus = function() {
            return !i3.searchable.disabled;
          }, i3.focus = function() {
            i3.searchable.focus();
          }, i3.save = function() {
            var t3 = a2.selected && a2.selected.id, i4 = {};
            return i4[e2.field] = t3, i4;
          }, i3;
        },
        "radio": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var t3 = i3.radio;
            t3.checked = e3.checked, t3.disabled = !e3.enabled;
          };
          var a2 = document.createElement("label"), n2 = document.createElement("input");
          n2.type = "radio", n2.name = e2.field, n2.xc = e2.resolved, n2.onchange = function(e3) {
            var a3 = i3.row;
            t2.findRowsByField(a3.field).forEach(function(e4) {
              t2.updateState(e4, {
                checked: false
              });
            }), t2.updateState(a3, {
              checked: true
            }), t2.applyState(), i3.onInput({
              "immediate": true
            });
          }, n2.onblur = function(e3) {
            i3.onBlur();
          }, a2.appendChild(n2);
          var o2 = document.createTextNode(e2.text);
          return a2.append(o2), i3.element = a2, i3.radio = n2, i3.canFocus = function() {
            return false;
          }, i3.focus = function() {
            i3.radio.focus();
          }, i3.save = function() {
            if (!n2.checked) return {};
            var t3 = n2.xc, i4 = {};
            return i4[e2.field] = t3, i4;
          }, i3;
        },
        "checkbox": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var t3 = i3.checkbox;
            t3.checked = e3.checked, t3.disabled = !e3.enabled;
          };
          var a2 = document.createElement("label"), n2 = document.createElement("input");
          n2.type = "checkbox", n2.name = e2.field, n2.xc = e2.resolved, n2.onchange = function(e3) {
            var a3 = i3.row;
            t2.updateState(a3, {
              checked: this.checked
            }), t2.applyState(), i3.onInput({
              "immediate": true
            });
          }, n2.onblur = function(e3) {
            i3.onBlur();
          }, a2.appendChild(n2);
          var o2 = document.createTextNode(e2.text);
          return a2.append(o2), i3.element = a2, i3.checkbox = n2, i3.canFocus = function() {
            return false;
          }, i3.focus = function() {
            i3.checkbox.focus();
          }, i3.save = function() {
            var t3 = n2.checked, i4 = {};
            return i4[e2.field] = t3, i4;
          }, i3;
        },
        "table": function() {
          var i3 = new l();
          i3.apply = function(e3) {
            i3.row = e3;
            var t3 = i3.table;
            t3.disabled = !e3.enabled, t3.load(e3.value || []);
          };
          var a2 = new c({
            name: e2.field,
            form: t2,
            theme: t2.theme + "_form_item_tabular",
            item: e2.data,
            onInput: function(e3) {
              i3.onInput();
            }
          }), n2 = a2.create();
          return i3.element = n2, i3.table = a2, i3.canFocus = function() {
            return false;
          }, i3.focus = function() {
            i3.table.focus();
          }, i3.save = function() {
            var t3 = a2.save(), i4 = {};
            return i4[e2.field] = t3, i4;
          }, i3;
        }
      };
      return t2.plugins && t2.plugins[e2.type] ? t2.plugins[e2.type](e2) : i2[e2.type]();
    }, r.prototype.vc = function(e2) {
      var t2 = this, i2 = new l();
      i2.apply = function(e3) {
        i2.row = e3;
        var t3 = i2.searchable;
        t3.disabled = !e3.enabled, t3.select(e3.value);
      };
      var a2 = [], n2 = e2.data.timeInterval || 15;
      [1, 5, 10, 15, 20, 30, 60].includes(n2) || (n2 = 15);
      for (var o2 = 60 / n2, r2 = e2.data.locale || t2.locale, s2 = DayPilot2.Locale.find(r2) || DayPilot2.Locale.US, c2 = DayPilot2.Date.today(), u = 0; u < 24 * o2; u++) {
        var h = c2.addMinutes(n2 * u), f = {};
        f.name = h.toString(e2.data.timeFormat || s2.timePattern, s2), f.id = h.toString("HH:mm"), a2.push(f);
      }
      var m = new d({
        data: a2,
        name: e2.field,
        theme: t2.theme + "_form_item_time",
        listZIndex: t2.zIndex + 1,
        strategy: "startsWith",
        onSelect: function(e3) {
          e3.ui && i2.onInput({
            "immediate": true
          });
        }
      }), p = m.create();
      return i2.element = p, i2.searchable = m, i2.canFocus = function() {
        return !i2.searchable.disabled;
      }, i2.focus = function() {
        i2.searchable.focus();
      }, i2.save = function() {
        var t3 = m.selected && m.selected.id, i3 = {};
        return i3[e2.field] = t3, i3;
      }, i2;
    }, r.prototype.wc = function(e2) {
      var t2 = this, i2 = new l();
      i2.apply = function(e3) {
        i2.row = e3;
        var a3 = i2.searchable;
        a3.disabled = !e3.enabled;
        var n3 = new DayPilot2.Date(e3.value).toString("HH:mm");
        a3.select(n3);
        var o3 = i2.dateInput, r2 = i2.picker;
        e3.data.dateFormat && (r2.pattern = e3.data.dateFormat);
        var s2 = e3.data.locale || t2.locale;
        if (s2) {
          var l2 = DayPilot2.Locale.find(s2) || DayPilot2.Locale.US;
          r2.locale = s2, r2.pattern = l2.datePattern;
        }
        o3.disabled = !e3.enabled, r2.date = new DayPilot2.Date(e3.value);
        var d2 = new DayPilot2.Date(e3.value).toString(e3.data.dateFormat || r2.pattern, r2.locale);
        o3.value = d2;
      };
      var a2 = function() {
        var a3 = document.createElement("input");
        a3.name = e2.field;
        var n3 = new DayPilot2.DatePicker({
          target: a3,
          theme: "navigator_modal",
          zIndex: t2.zIndex + 1,
          resetTarget: false,
          targetAlignment: "left",
          onTimeRangeSelect: function(e3) {
            i2.onInput({
              "immediate": true
            });
          }
        });
        return a3.picker = n3, a3.className = t2.theme + "_input_date", a3.type = "text", a3.onkeydown = function(e3) {
          var i3 = false;
          switch (e3.keyCode) {
            case 13:
              n3.visible ? n3.close() : t2.doOnKey("Enter");
              break;
            case 27:
              n3.visible ? n3.close() : t2.doOnKey("Escape");
              break;
            case 9:
              n3.close(), i3 = true;
              break;
            default:
              i3 = true;
          }
          i3 || (e3.preventDefault(), e3.stopPropagation());
        }, a3.onfocus = function() {
          n3.show();
        }, a3.onclick = function() {
          n3.show();
        }, a3.oninput = function(e3) {
          i2.onInput();
        }, a3.onblur = function(e3) {
          i2.onBlur();
        }, i2.dateInput = a3, i2.picker = n3, a3;
      }(), n2 = function() {
        var a3 = [], n3 = e2.data.timeInterval || 15;
        [1, 5, 10, 15, 20, 30, 60].includes(n3) || (n3 = 15);
        for (var o3 = 60 / n3, r2 = e2.data.locale || t2.locale, s2 = DayPilot2.Locale.find(r2) || DayPilot2.Locale.US, l2 = DayPilot2.Date.today(), c2 = 0; c2 < 24 * o3; c2++) {
          var u = l2.addMinutes(n3 * c2), h = {};
          h.name = u.toString(e2.data.timeFormat || s2.timePattern, s2), h.id = u.toString("HH:mm"), a3.push(h);
        }
        var f = new d({
          data: a3,
          name: e2.field,
          theme: t2.theme + "_form_item_time",
          listZIndex: t2.zIndex + 1,
          strategy: "startsWith",
          onSelect: function(e3) {
            e3.ui && i2.onInput({
              "immediate": true
            });
          }
        });
        return i2.searchable = f, f.create();
      }(), o2 = document.createElement("div");
      return o2.className = t2.theme + "_form_item_datetime_parent", o2.appendChild(a2), o2.appendChild(n2), i2.element = o2, i2.canFocus = function() {
        return !i2.searchable.disabled;
      }, i2.focus = function() {
        i2.dateInput.focus();
      }, i2.save = function() {
        var t3 = i2.searchable.selected && i2.searchable.selected.id, a3 = i2.picker.date ? i2.picker.date.toString() : null, n3 = new DayPilot2.Date(a3).getDatePart(), o3 = DayPilot2.Date.parse(n3.toString("yyyy-dd-MM ") + t3, "yyyy-dd-MM HH:mm"), r2 = {};
        return r2[e2.field] = o3, r2;
      }, i2;
    }, r.prototype.findRowsByField = function(e2) {
      return this.pc.filter(function(t2) {
        return t2.field === e2;
      });
    }, r.prototype.findViewById = function(e2, t2) {
      return this.f.find(function(i2) {
        return i2.row.field === e2 && ("radio" !== i2.row.type || i2.row.resolved === t2);
      });
    }, r.prototype.firstFocusable = function() {
      return this.f.find(function(e2) {
        return e2.canFocus && e2.canFocus();
      });
    }, r.prototype.updateState = function(e2, t2) {
      var i2 = this.qc ? this.qc : this.pc, a2 = i2.indexOf(e2);
      return this.qc = i2.map(function(i3) {
        if (i3 !== e2) return i3;
        if (e2.propsEqual(t2)) return e2;
        var a3 = e2.clone();
        for (var n2 in t2) a3[n2] = t2[n2];
        return a3;
      }), this.qc[a2];
    }, r.prototype.updateInteractive = function(e2) {
      var t2 = this.qc.indexOf(e2);
      this.f[t2].apply(e2);
    }, r.prototype.applyState = function() {
      var e2 = this;
      if (this.updateDependentState(), this.qc) {
        this.qc.filter(function(t2, i2) {
          return e2.pc[i2] !== t2;
        }).forEach(function(t2) {
          e2.updateInteractive(t2);
        }), this.pc = this.qc, this.qc = null;
      }
    }, r.prototype.getFieldType = function(e2) {
      return ["text", "date", "select", "searchable", "radio", "checkbox", "table", "title", "image", "html", "textarea", "scrollable", "time", "datetime"].indexOf(e2.type) !== -1 ? e2.type : e2.type && this.plugins && this.plugins[e2.type] ? e2.type : e2.image ? "image" : e2.html || e2.text ? "html" : e2.id ? e2.options ? "searchable" : e2.dateFormat ? "date" : e2.columns ? "table" : "text" : "title";
    }, r.prototype.serialize = function() {
      var e2 = {};
      return this.f.forEach(function(t2) {
        var i2 = t2.save();
        for (var a2 in i2) e2[a2] = i2[a2];
      }), e2;
    };
    var s = function() {
      this.id = this.guid(), this.field = null, this.data = null, this.type = null, this.level = 0, this.enabled = true, this.value = null, this.text = null, this.interactive = true, this.isValue = false, this.checked = false, this.resolved = null;
    };
    s.prototype.clone = function() {
      var e2 = new s();
      for (var t2 in this) "id" !== t2 && (e2[t2] = this[t2]);
      return e2;
    }, s.prototype.propsEqual = function(e2) {
      for (var t2 in e2) if (this[t2] !== e2[t2]) return false;
      return true;
    }, s.prototype.guid = function() {
      var e2 = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };
      return "" + e2() + e2() + "-" + e2() + "-" + e2() + "-" + e2() + "-" + e2() + e2() + e2();
    }, s.prototype.applyValue = function(e2, t2) {
      this.field === e2 && (this.value = t2, this.isValue && t2 === this.resolved && (this.checked = true));
    };
    var l = function() {
      this.element = null, this.canFocus = function() {
        return false;
      }, this.apply = function(e2) {
      }, this.focus = function() {
      }, this.save = function() {
        return {};
      };
    }, d = function(e2) {
      this.data = [], this.name = null, this.theme = "searchable_default", this.yc = false, this.listZIndex = 1e5, this.onSelect = null, this.zc = null, this.Ac = null, this.Bc = false, this.Cc = null, this.Dc = null, this.p = [], this.Ec = null, e2 = e2 || {};
      var t2 = this, i2 = {
        "selected": {
          post: function(e3) {
            "object" == typeof e3 && e3.id ? t2.zc = e3 : "string" != typeof e3 && "number" != typeof e3 || t2.select(e3);
          }
        }
      };
      Object.defineProperty(this, "selected", {
        get: function() {
          return this.zc;
        }
      }), Object.defineProperty(this, "disabled", {
        get: function() {
          return this.yc;
        },
        set: function(e3) {
          this.yc = e3, this.Cc && (this.Cc.disabled = e3, e3 && this.Fc());
        }
      });
      for (var a2 in e2) i2[a2] || (this[a2] = e2[a2]);
      for (var a2 in e2) i2[a2] && i2[a2].post(e2[a2]);
    };
    d.prototype.select = function(e2) {
      return this.zc = this.data.find(function(t2) {
        return t2.id === e2;
      }), this.Gc(false), this;
    }, d.prototype.create = function() {
      function e2(e3) {
        var i3 = l2.strategy;
        "includes" !== l2.strategy && "startsWith" !== l2.strategy && (i3 = "includes"), e3 = e3 || i3 || "includes", h.style.display = "", h.style.top = m.offsetHeight + "px", h.style.left = "0px", h.style.width = m.offsetWidth + "px", h.innerHTML = "", h.addEventListener("mousedown", function(e4) {
          e4.preventDefault();
        }), l2.Ac = null, l2.p = [];
        var n3 = null;
        l2.data.forEach(function(i4) {
          var o3 = i4.name || i4.id;
          if ("includes" === e3) {
            if (o3.toLowerCase().indexOf(m.value.toLowerCase()) === -1) return;
          } else if ("startsWith" === e3 && 0 !== o3.toLowerCase().indexOf(m.value.toLowerCase())) return;
          var r3 = document.createElement("div");
          r3.className = l2.theme + "_list_item", r3.innerText = o3, r3.item = i4, i4 === l2.zc && (l2.Ac = r3), n3 || (n3 = r3), r3.addEventListener("mousedown", function(e4) {
            a2(r3), e4.preventDefault();
          }), r3.addEventListener("mousemove", function(e4) {
            l2.Ac !== r3 && (l2.Ac = r3, t2({
              dontScroll: true
            }));
          }), h.appendChild(r3), l2.p.push(r3);
        }), l2.Ac || (l2.Ac = n3), t2();
      }
      function t2(e3) {
        e3 = e3 || {};
        var t3 = !e3.dontScroll;
        document.querySelectorAll("." + l2.theme + "_list_item_highlight").forEach(function(e4) {
          e4.className = e4.className.replace(l2.theme + "_list_item_highlight", "");
        }), l2.Ac && (l2.Ac.className += " " + l2.theme + "_list_item_highlight", t3 && !i2(l2.Ac, h) && l2.Ac.scrollIntoView());
      }
      function i2(e3, t3) {
        var i3 = e3.getBoundingClientRect(), a3 = t3.getBoundingClientRect();
        return i3.top >= a3.top && i3.bottom <= a3.bottom;
      }
      function a2(e3) {
        var t3 = e3.item;
        l2.zc = t3, l2.Gc(true), o2(), r2();
      }
      function n2() {
        l2.Fc();
      }
      function o2() {
        l2.q();
      }
      function r2() {
        l2.Bc = true, m.setAttribute("readonly", "readonly"), m.focus();
      }
      function s2() {
        l2.Bc = false, m.removeAttribute("readonly"), m.select(), e2("all");
      }
      var l2 = this, d2 = this, c2 = document.createElement("div");
      c2.className = this.theme + "_main", c2.style.position = "relative";
      var u = document.createElement("div");
      u.className = this.theme + "_icon", u.style.position = "absolute", u.style.right = "0", u.style.top = "0", u.style.bottom = "0", u.style.width = "20px", u.addEventListener("mousedown", function(e3) {
        e3.preventDefault(), l2.Bc ? (l2.focus(), s2()) : (n2(), r2());
      });
      var h = document.createElement("div");
      h.className = this.theme + "_list", h.style.display = "none", h.style.position = "absolute", h.style.zIndex = this.listZIndex;
      var f = document.createElement("input");
      f.type = "hidden", f.name = this.name, f.searchable = d2, this.Ec = f;
      var m = document.createElement("input");
      return m.type = "text", m.className = this.theme + "_input", m.disabled = this.yc, m.addEventListener("click", function(e3) {
        s2();
      }), m.addEventListener("focus", function(t3) {
        e2("all");
      }), m.addEventListener("input", function(t3) {
        e2();
      }), m.addEventListener("blur", function(e3) {
        m.removeAttribute("readonly"), n2();
      }), m.addEventListener("keydown", function(e3) {
        if (l2.Bc) {
          if ("Enter" === e3.key) return;
          if ("Esc" === e3.key || "Escape" === e3.key) return;
          s2();
        }
        if ("ArrowDown" === e3.key) {
          var i3 = d2.p.indexOf(d2.Ac);
          i3 + 1 < d2.p.length && (d2.Ac = d2.p[i3 + 1]), t2();
        } else if ("ArrowUp" === e3.key) {
          var i3 = d2.p.indexOf(d2.Ac);
          i3 - 1 >= 0 && (d2.Ac = d2.p[i3 - 1]), t2();
        } else "Enter" === e3.key ? l2.Ac ? (e3.stopPropagation(), a2(l2.Ac)) : (e3.stopPropagation(), n2(), r2()) : "Esc" !== e3.key && "Escape" !== e3.key || (e3.stopPropagation(), n2(), r2());
      }), this.Cc = m, this.Dc = h, this.zc || (this.zc = this.data[0], this.zc && (m.value = this.zc.name)), c2.appendChild(m), c2.appendChild(u), c2.appendChild(f), c2.appendChild(h), c2;
    }, d.prototype.Fc = function() {
      this.q(), this.zc ? this.Cc.value = this.zc.name : (this.Cc.value = "", this.Gc(true));
    }, d.prototype.focus = function() {
      this.Bc = true, this.Cc.setAttribute("readonly", "readonly"), this.Cc.focus(), this.Fc();
    }, d.prototype.q = function() {
      this.Dc.style.display = "none";
    }, d.prototype.Gc = function(e2) {
      if (this.Ec.value = this.selected ? this.selected.id : null, this.zc ? this.Cc.value = this.zc.name : this.Cc.value = "", "function" == typeof this.onSelect) {
        var t2 = {
          control: this,
          ui: e2
        };
        this.onSelect(t2);
      }
    };
    var c = function(e2) {
      this.form = null, this.item = null, this.data = null, this.name = null, this.theme = "edit_table_default", this.onInput = null, this.nav = {}, this.Hc = null, this.pc = [], e2 = e2 || {};
      for (var t2 in e2) this[t2] = e2[t2];
    };
    c.prototype.create = function() {
      var e2 = this, t2 = document.createElement("div");
      t2.className = this.theme + "_main", t2.style.position = "relative";
      var i2 = document.createElement("input");
      i2.type = "hidden", i2.name = e2.name, i2.table = this, t2.appendChild(i2);
      var a2 = document.createElement("div");
      a2.className = this.theme + "_table";
      var n2 = this.Ic();
      a2.appendChild(n2);
      var o2 = e2.Jc({});
      o2.spacer = true;
      var r2 = this.Kc(o2);
      r2.classList.add(e2.theme + "_spacer"), a2.appendChild(r2);
      var s2 = document.createElement("div");
      s2.className = e2.theme + "_tbody", a2.appendChild(s2), t2.appendChild(a2);
      var l2 = document.createElement("div");
      t2.appendChild(l2), this.nav.body = s2, this.nav.table = a2, this.nav.main = t2, this.nav.after = l2;
      var d2 = document.createElement("div"), c2 = document.createElement("span");
      return c2.className = this.theme + "_plus", c2.addEventListener("click", function(t3) {
        if (!e2.disabled) {
          var i3 = e2.item.onNewRow, a3 = {};
          if ("function" == typeof i3) {
            var n3 = {};
            n3.result = e2.form.serialize(), n3.value = {}, i3(n3), a3 = n3.value;
          }
          var o3 = e2.Jc(a3);
          e2.pc.push(o3), e2.Lc(), e2.Mc();
        }
      }), this.nav.plus = c2, d2.appendChild(c2), t2.appendChild(d2), t2;
    }, c.prototype.Ic = function() {
      var e2 = this, t2 = document.createElement("div");
      return t2.classList.add(this.theme + "_row"), t2.classList.add(this.theme + "_header"), this.item.columns.forEach(function(i2) {
        var a2 = document.createElement("div");
        a2.classList.add(e2.theme + "_cell"), a2.innerText = i2.name, t2.appendChild(a2);
      }), t2;
    }, c.prototype.Nc = function() {
      var e2 = this.item.max || 0;
      return !!(e2 && this.pc.length >= e2);
    }, c.prototype.save = function() {
      var e2 = this, t2 = [];
      return e2.pc.forEach(function(e3) {
        var i2 = {};
        e3.cells.forEach(function(e4) {
          i2[e4.id] = e4.value;
        }), t2.push(i2);
      }), t2;
    }, c.prototype.load = function(e2) {
      if ("[object Array]" !== Object.prototype.toString.call(e2)) throw new Error("Array expected");
      this.data = e2, this.Oc(), this.Lc();
    }, c.prototype.Pc = function() {
      this.disabled ? this.nav.main.classList.add(this.theme + "_disabled") : this.nav.main.classList.remove(this.theme + "_disabled"), this.Nc() ? this.nav.plus.classList.add(this.theme + "_plus_max") : this.nav.plus.classList.remove(this.theme + "_plus_max");
    }, c.prototype.Oc = function() {
      var e2 = this;
      this.pc = [], this.data.forEach(function(t2) {
        var i2 = e2.Jc(t2);
        e2.pc.push(i2);
      });
    }, c.prototype.Qc = function(e2) {
      var t2 = this, i2 = t2.pc.indexOf(e2);
      t2.pc.splice(i2, 1);
    }, c.prototype.Jc = function(e2) {
      var t2 = this, i2 = {};
      return i2.data = e2, i2.cells = [], t2.item.columns.forEach(function(a2) {
        var n2 = a2.id, o2 = e2[n2], r2 = t2.Rc(a2);
        if ("undefined" == typeof o2) {
          if ("text" === r2) o2 = "";
          else if ("number" === r2) o2 = 0;
          else if ("select" === r2) {
            var s2 = a2.options;
            o2 = s2 && s2[0].id;
          }
        }
        var l2 = {};
        l2.id = n2, l2.value = o2, l2.type = r2, l2.data = a2, i2.cells.push(l2);
      }), i2;
    }, c.prototype.Rc = function(e2) {
      var t2 = e2.type;
      return t2 || (t2 = e2.options ? "select" : "text"), t2;
    }, c.prototype.Lc = function() {
      var e2 = this;
      if (this.nav.body.innerHTML = "", this.nav.after.innerHTML = "", this.pc.forEach(function(t3) {
        var i2 = e2.Kc(t3);
        e2.nav.body.appendChild(i2);
      }), 0 === this.pc.length) {
        var t2 = e2.Sc();
        e2.nav.after.appendChild(t2);
      }
      this.Pc();
    }, c.prototype.Sc = function() {
      var e2 = document.createElement("div");
      return e2.className = this.theme + "_empty", e2;
    }, c.prototype.Kc = function(e2) {
      var t2 = this, i2 = document.createElement("div");
      i2.className = t2.theme + "_row", e2.cells.forEach(function(a3) {
        var n3 = document.createElement("div");
        n3.className = t2.theme + "_cell";
        var o2 = t2.Tc(a3);
        if (e2.spacer) {
          var r2 = document.createElement("div");
          r2.style.height = "0px", r2.style.overflow = "hidden", r2.appendChild(o2), n3.appendChild(r2);
        } else n3.appendChild(o2);
        i2.appendChild(n3);
      });
      var a2 = document.createElement("div");
      a2.classList.add(t2.theme + "_cell"), a2.classList.add(t2.theme + "_rowaction");
      var n2 = document.createElement("span");
      return n2.className = this.theme + "_delete", n2.addEventListener("click", function(i3) {
        t2.disabled || (t2.Qc(e2), t2.Lc(), t2.Mc());
      }), e2.spacer || a2.appendChild(n2), i2.appendChild(a2), i2;
    }, c.prototype.Mc = function() {
      var e2 = this;
      if ("function" == typeof e2.onInput) {
        var t2 = {};
        e2.onInput(t2);
      }
    }, c.prototype.Tc = function(e2) {
      var t2 = this, i2 = e2.type;
      if ("text" === i2 || "number" === i2) {
        var a2 = document.createElement("input");
        return a2.type = i2, t2.disabled && (a2.disabled = true), e2.value && (a2.value = e2.value), a2.addEventListener("keyup", function(a3) {
          "number" === i2 ? e2.value = Number(this.value) : e2.value = this.value, t2.Mc();
        }), a2;
      }
      if ("select" === i2) {
        var n2 = document.createElement("select");
        return t2.disabled && (n2.disabled = true), e2.data.options.forEach(function(t3) {
          var i3 = document.createElement("option");
          i3.innerText = t3.name, i3.value = t3.id, i3.xc = t3.id, n2.appendChild(i3), e2.value === t3.id && i3.setAttribute("selected", true);
        }), n2.addEventListener("change", function(i3) {
          var a3 = n2.options[n2.selectedIndex];
          a3 && "undefined" != typeof a3.xc && (e2.value = a3.xc), t2.Mc();
        }), n2;
      }
      throw new Error("Unsupported item type: " + i2);
    }, c.prototype.focus = function() {
    };
  }
}(DayPilot), "undefined" == typeof DayPilot) var DayPilot = {};
if ("undefined" == typeof DayPilot.Global && (DayPilot.Global = {}), function() {
  if ("undefined" == typeof DayPilot.Month || !DayPilot.Month.events) {
    var e = {}, t = DayPilot.Util.isVueVNode;
    e.Month = function(i, a) {
      this.v = "2025.1.638-lite", this.nav = {};
      var n = this;
      this.id = i, this.isMonth = true, this.api = 2, this.backendUrl = null, this.cellHeaderHeight = 24, this.cellHeight = 100, this.cellMarginBottom = 0, this.contextMenu = null, this.cssClassPrefix = "month_default", this.eventBarVisible = true, this.eventBorderRadius = null, this.eventHeight = 25, this.eventsLoadMethod = "GET", this.headerHeight = 30, this.hideUntilInit = true, this.lineSpace = 1, this.locale = "en-us", this.showToolTip = true, this.startDate = new DayPilot.Date(), this.theme = null, this.visible = true, this.weekStarts = "Auto", this.width = "100%", this.xssProtection = "Enabled", this.afterRender = function() {
      }, this.cellHeaderClickHandling = "Enabled", this.eventClickHandling = "Enabled", this.eventDeleteHandling = "Disabled", this.eventMoveHandling = "Update", this.eventResizeHandling = "Update", this.eventRightClickHandling = "ContextMenu", this.headerClickHandling = "Enabled", this.timeRangeSelectedHandling = "Enabled", this.onCellHeaderClick = null, this.onCellHeaderClicked = null, this.onEventClick = null, this.onEventClicked = null, this.onEventDelete = null, this.onEventDeleted = null, this.onEventMove = null, this.onEventMoved = null, this.onEventResize = null, this.onEventResized = null, this.onEventRightClick = null, this.onEventRightClicked = null, this.onTimeRangeSelect = null, this.onTimeRangeSelected = null, this.onBeforeEventRender = null, this.onBeforeCellRender = null, this.cellEvents = [], this.elements = {}, this.elements.events = [], this.cache = {}, this.O = false, this.U = function(e2, t2) {
        var e2 = JSON.parse(e2);
        return e2.CallBackRedirect ? void (document.location.href = e2.CallBackRedirect) : "None" === e2.UpdateType ? void n.fireAfterRenderDetached(e2.CallBackData, true) : (n.events.list = e2.Events, "Full" === e2.UpdateType && (n.startDate = e2.StartDate, n.timeFormat = e2.TimeFormat ? e2.TimeFormat : n.timeFormat, "undefined" != typeof e2.WeekStarts && (n.weekStarts = e2.WeekStarts), n.hashes = e2.Hashes), n.W(), n.Uc(), n.fa(), "Full" === e2.UpdateType && (n.Vc(), n.Wc()), n.ka(), n.show(), n.la(), void n.fireAfterRenderDetached(e2.CallBackData, true));
      }, this.fireAfterRenderDetached = function(e2, t2) {
        var i2 = function(e3, t3) {
          return function() {
            n.afterRender && n.afterRender(e3, t3);
          };
        };
        window.setTimeout(i2(e2, t2), 0);
      }, this.lineHeight = function() {
        return this.eventHeight + this.lineSpace;
      }, this.events = {}, this.events.add = function(e2) {
        var t2 = null;
        if (e2 instanceof DayPilot.Event) t2 = e2.data;
        else {
          if ("object" != typeof e2) throw "DayPilot.Month.events.add() expects an object or DayPilot.Event instance.";
          t2 = e2;
        }
        n.events.list || (n.events.list = []), n.events.list.push(t2), n.update(), n.ta.notify();
      }, this.events.find = function(e2) {
        if (!n.events.list) return null;
        if ("function" == typeof e2) {
          for (var t2 = e2, i2 = 0; i2 < n.events.list.length; i2++) {
            var a2 = new DayPilot.Event(n.events.list[i2], n);
            if (t2(a2)) return a2;
          }
          return null;
        }
        for (var i2 = 0; i2 < n.events.list.length; i2++) {
          var o2 = n.events.list[i2];
          if (o2.id === e2) return new DayPilot.Event(o2, n);
        }
        return null;
      }, this.events.update = function(e2) {
        if (e2 instanceof DayPilot.Event) e2.commit();
        else if ("object" == typeof e2) {
          var t2 = n.events.find(e2.id);
          if (t2) {
            var i2 = DayPilot.indexOf(n.events.list, t2.data);
            n.events.list.splice(i2, 1, e2);
          }
        }
        n.update(), n.ta.notify();
      }, this.events.remove = function(e2) {
        var t2;
        if (e2 instanceof DayPilot.Event) t2 = e2.data;
        else if ("object" == typeof e2) {
          var i2 = n.events.find(e2.id);
          i2 && (t2 = i2.data);
        } else if ("string" == typeof e2 || "number" == typeof e2) {
          var i2 = n.events.find(e2);
          i2 && (t2 = i2.data);
        }
        var a2 = DayPilot.indexOf(n.events.list, t2);
        n.events.list.splice(a2, 1), n.update(), n.ta.notify();
      }, this.events.load = function(e2, t2, i2) {
        var a2 = function(e3) {
          var t3 = {};
          t3.exception = e3.exception, t3.request = e3.request, "function" == typeof i2 && i2(t3);
        }, o2 = function(e3) {
          var i3, o3 = e3.request;
          try {
            i3 = JSON.parse(o3.responseText);
          } catch (e4) {
            var r2 = {};
            return r2.exception = e4, void a2(r2);
          }
          if (DayPilot.isArray(i3)) {
            var s2 = {};
            if (s2.preventDefault = function() {
              this.preventDefault.value = true;
            }, s2.data = i3, "function" == typeof t2 && t2(s2), s2.preventDefault.value) return;
            n.events.list = i3, n.Ca && n.update();
          }
        };
        if (n.eventsLoadMethod && "POST" === n.eventsLoadMethod.toUpperCase()) DayPilot.Http.ajax({
          "method": "POST",
          "data": {
            "start": n.visibleStart().toString(),
            "end": n.visibleEnd().toString()
          },
          "url": e2,
          "success": o2,
          "error": a2
        });
        else {
          var r = e2, s = "start=" + n.visibleStart().toString() + "&end=" + n.visibleEnd().toString();
          r += r.indexOf("?") > -1 ? "&" + s : "?" + s, DayPilot.Http.ajax({
            "method": "GET",
            "url": r,
            "success": o2,
            "error": a2
          });
        }
      }, this.events.forRange = function(e2, t2) {
        e2 = new DayPilot.Date(e2), t2 = new DayPilot.Date(t2);
        var i2 = (n.events.list || []).map(function(e3) {
          return new DayPilot.Event(e3);
        });
        return i2.sort(n.rb), i2.filter(function(i3) {
          var a2 = i3.start(), n2 = i3.end();
          return a2 === n2 && a2 === e2 || DayPilot.Util.overlaps(e2, t2, a2, n2);
        });
      }, this.update = function(e2) {
        if (n.kb(e2), this.Ca) {
          if (n.O) throw new DayPilot.Exception("You are trying to update a DayPilot.Month instance that has been disposed.");
          if (this.cells) {
            n.W(), n.Uc(), n.fa(), n.Vc(), n.Wc(), n.ka(), n.t(), n.la(), this.visible ? this.show() : this.hide();
          }
        }
      }, this.mb = null, this.kb = function(e2) {
        if (e2) {
          var t2 = {
            "events": {
              "preInit": function() {
                var e3 = this.data || [];
                DayPilot.isArray(e3.list) ? n.events.list = e3.list : n.events.list = e3;
              }
            }
          };
          this.mb = t2;
          for (var i2 in e2) if (t2[i2]) {
            var a2 = t2[i2];
            a2.data = e2[i2], a2.preInit && a2.preInit();
          } else n[i2] = e2[i2];
        }
      }, this.nb = function() {
        var e2 = this.mb;
        for (var t2 in e2) {
          var i2 = e2[t2];
          i2.postInit && i2.postInit();
        }
      }, this.pb = {}, this.pb.events = [], this.qb = function(e2) {
        var t2 = this.pb.events, i2 = this.events.list[e2], a2 = {};
        for (var o2 in i2) a2[o2] = i2[o2];
        if ("function" == typeof this.onBeforeEventRender) {
          var r = {};
          r.control = n, r.data = a2, this.onBeforeEventRender(r);
        }
        t2[e2] = a2;
      }, this.fa = function() {
        var e2 = this.events.list;
        if (e2) {
          if (!DayPilot.isArray(e2)) throw new DayPilot.Exception("DayPilot.Month.events.list expects an array object. You supplied: " + typeof e2);
          if ("function" == typeof this.onBeforeEventRender) for (var t2 = 0; t2 < e2.length; t2++) this.qb(t2);
          for (var i2 = 0; i2 < e2.length; i2++) {
            var a2 = e2[i2];
            if ("object" != typeof a2) throw new DayPilot.Exception("Event data item must be an object");
            if (!a2.start) throw new DayPilot.Exception("Event data item must specify 'start' property");
            if (!a2.end) throw new DayPilot.Exception("Event data item must specify 'end' property");
            var n2 = new DayPilot.Date(a2.start), o2 = new DayPilot.Date(a2.end);
            if (!(n2.getTime() > o2.getTime())) for (var t2 = 0; t2 < this.rows.length; t2++) {
              var r = this.rows[t2], s = new DayPilot.Event(a2, this);
              r.belongsHere(s) && (r.events.push(s), "function" == typeof this.onBeforeEventRender && (s.cache = this.pb.events[i2]));
            }
          }
          for (var l = 0; l < this.rows.length; l++) {
            var r = this.rows[l];
            r.events.sort(this.rb);
            for (var d = 0; d < this.rows[l].events.length; d++) {
              var c = r.events[d], u = r.getStartColumn(c), h = r.getWidth(c);
              r.putIntoLine(c, u, h, l);
            }
          }
        }
      }, this.W = function() {
        for (var e2 = 0; e2 < this.elements.events.length; e2++) {
          var t2 = this.elements.events[e2];
          n.Fa(t2);
        }
        this.elements.events = [];
      }, this.Fa = function(e2) {
        !function() {
          var i2 = e2.domArgs;
          if (e2.domArgs = null, i2 && "function" == typeof n.onBeforeEventDomRemove && n.onBeforeEventDomRemove(i2), i2 && "function" == typeof n.onBeforeEventDomAdd) {
            var a2 = i2 && i2.Ga;
            if (a2) {
              n.Ia.Ha && t(i2.element) && (n.Ia.Ja = true, n.Ia.Ka(a2), n.Ia.Ja = false);
            }
          }
        }(), e2.event = null, e2.click = null, e2.parentNode.removeChild(e2);
      }, this.la = function() {
        this.Xc();
      }, this.Xc = function() {
        this.elements.events = [];
        for (var e2 = 0; e2 < this.rows.length; e2++) for (var t2 = this.rows[e2], i2 = 0; i2 < t2.lines.length; i2++) for (var a2 = t2.lines[i2], n2 = 0; n2 < a2.length; n2++) this.La(a2[n2]);
      }, this.rb = function(e2, t2) {
        if (!(e2 && t2 && e2.start && t2.start)) return 0;
        var i2 = e2.start().getTime() - t2.start().getTime();
        return 0 !== i2 ? i2 : t2.end().getTime() - e2.end().getTime();
      }, this.drawShadow = function(t2, i2, a2, o2, r, s) {
        r || (r = 0);
        var l = o2;
        this.shadow = {}, this.shadow.list = [], this.shadow.start = {
          x: t2,
          y: i2
        }, this.shadow.width = o2;
        var d = 7 * i2 + t2 - r;
        d < 0 && (l += d, t2 = 0, i2 = 0);
        for (var c = r; c >= 7; ) i2--, c -= 7;
        if (c > t2) {
          c > t2 + (7 - this.getColCount()) ? (i2--, t2 = t2 + 7 - c) : (l = l - c + t2, t2 = 0);
        } else t2 -= c;
        i2 < 0 && (i2 = 0, t2 = 0);
        var u = null;
        e.resizingEvent ? u = "w-resize" : e.movingEvent && (u = "move"), this.nav.top.style.cursor = u;
        var h = n.eventBorderRadius;
        for ("number" == typeof h && (h += "px"); l > 0 && i2 < this.rows.length; ) {
          var f = Math.min(this.getColCount() - t2, l), m = this.rows[i2], p = this.getRowTop(i2), v = m.getHeight(), y = document.createElement("div");
          y.setAttribute("unselectable", "on"), y.style.position = "absolute", y.style.left = this.getCellWidth() * t2 + "%", y.style.width = this.getCellWidth() * f + "%", y.style.top = p + "px", y.style.height = v + "px", y.style.cursor = u, y.classList.add(n.K("_shadow"));
          var g = document.createElement("div");
          g.setAttribute("unselectable", "on"), y.appendChild(g), g.style.position = "absolute", g.style.top = "0px", g.style.right = "0px", g.style.left = "0px", g.style.bottom = "0px", g.classList.add(n.K("_shadow_inner")), h && (l === o2 && (y.style.borderTopLeftRadius = h, y.style.borderBottomLeftRadius = h, g.style.borderTopLeftRadius = h, g.style.borderBottomLeftRadius = h), l <= f && (y.style.borderTopRightRadius = h, y.style.borderBottomRightRadius = h, g.style.borderTopRightRadius = h, g.style.borderBottomRightRadius = h)), this.nav.top.appendChild(y), this.shadow.list.push(y), l -= f + 7 - this.getColCount(), t2 = 0, i2++;
        }
      }, this.clearShadow = function() {
        if (this.shadow) {
          for (var e2 = 0; e2 < this.shadow.list.length; e2++) this.nav.top.removeChild(this.shadow.list[e2]);
          this.shadow = null, this.nav.top.style.cursor = "";
        }
      }, this.getEventTop = function(e2, t2) {
        for (var i2 = this.headerHeight, a2 = 0; a2 < e2; a2++) i2 += this.rows[a2].getHeight();
        return i2 += this.cellHeaderHeight, i2 += t2 * this.lineHeight();
      }, this.getDateFromCell = function(e2, t2) {
        return this.firstDate.addDays(7 * t2 + e2);
      }, this.La = function(i2) {
        var a2 = i2.cache || i2.data, o2 = a2.borderRadius || n.eventBorderRadius;
        "number" == typeof o2 && (o2 += "px");
        var r = i2.part.row, s = i2.part.line, l = i2.part.colStart, d = i2.part.colWidth, c = this.getCellWidth() * l, u = this.getCellWidth() * d, h = this.getEventTop(r, s), f = document.createElement("div");
        f.setAttribute("unselectable", "on"), f.style.height = this.eventHeight + "px", f.style.overflow = "hidden", f.className = this.K("_event"), a2.cssClass && DayPilot.Util.addClass(f, a2.cssClass), i2.part.startsHere || DayPilot.Util.addClass(f, this.K("_event_continueleft")), i2.part.endsHere || DayPilot.Util.addClass(f, this.K("_event_continueright")), f.event = i2, f.style.width = u + "%", f.style.position = "absolute", f.style.left = c + "%", f.style.top = h + "px", this.showToolTip && i2.client.toolTip() && (f.title = i2.client.toolTip()), f.onclick = n.sa, f.oncontextmenu = n.Yc, f.onmousedown = function(t2) {
          t2 = t2 || window.event;
          var a3 = t2.which || t2.button;
          if (t2.cancelBubble = true, t2.stopPropagation && t2.stopPropagation(), 1 === a3) {
            if (e.movingEvent = null, "w-resize" === this.style.cursor || "e-resize" === this.style.cursor) {
              var o3 = {};
              o3.start = {}, o3.start.x = l, o3.start.y = r, o3.event = f.event, o3.width = DayPilot.DateUtil.daysSpan(o3.event.start(), o3.event.end()) + 1, o3.direction = this.style.cursor, e.resizingEvent = o3;
            } else if ("move" === this.style.cursor || i2.client.moveEnabled()) {
              n.clearShadow();
              var c2 = DayPilot.mo3(n.nav.top, t2);
              if (!c2) return;
              var u2 = n.getCellBelowPoint(c2.x, c2.y), h2 = DayPilot.DateUtil.daysDiff(i2.start(), n.rows[r].start), m2 = 7 * u2.y + u2.x - (7 * r + l);
              h2 && (m2 += h2);
              var p2 = {};
              p2.start = {}, p2.start.x = l, p2.start.y = r, p2.start.line = s, p2.offset = n.eventMoveToPosition ? 0 : m2, p2.colWidth = d, p2.event = f.event, p2.coords = c2, e.movingEvent = p2;
            }
          }
        }, f.onmousemove = function(t2) {
          if ("undefined" != typeof e && !e.movingEvent && !e.resizingEvent) {
            var a3 = DayPilot.mo3(f, t2);
            if (a3) {
              f.deleteIcon && (f.deleteIcon.style.display = "");
              var n2 = 6;
              a3.x <= n2 && i2.client.resizeEnabled() ? i2.part.startsHere ? (f.style.cursor = "w-resize", f.dpBorder = "left") : f.style.cursor = "not-allowed" : f.clientWidth - a3.x <= n2 && i2.client.resizeEnabled() ? i2.part.endsHere ? (f.style.cursor = "e-resize", f.dpBorder = "right") : f.style.cursor = "not-allowed" : i2.client.clickEnabled() ? f.style.cursor = "pointer" : f.style.cursor = "default";
            }
          }
        }, f.onmouseleave = function(e2) {
          f.deleteIcon && (f.deleteIcon.style.display = "none"), f.style.cursor = "";
        }, f.onmouseenter = function(e2) {
          f.deleteIcon && (f.deleteIcon.style.display = "");
        };
        var m = document.createElement("div");
        if (m.setAttribute("unselectable", "on"), m.className = this.K("_event_inner"), "darker" === a2.borderColor && a2.backColor ? m.style.borderColor = DayPilot.ColorUtil.darker(a2.backColor, 2) : m.style.borderColor = a2.borderColor, a2.backColor && (m.style.background = a2.backColor), a2.fontColor && (m.style.color = a2.fontColor), o2 && (f.style.borderRadius = o2, m.style.borderRadius = o2), f.appendChild(m), i2.client.barVisible()) {
          var p = document.createElement("div");
          p.setAttribute("unselectable", "on"), p.className = this.K("_event_bar"), p.style.position = "absolute";
          var v = document.createElement("div");
          v.setAttribute("unselectable", "on"), v.className = this.K("_event_bar_inner"), v.style.top = "0%", v.style.height = "100%", a2.barColor && (v.style.backgroundColor = a2.barColor), p.appendChild(v), f.appendChild(p);
        }
        if (i2.client.deleteEnabled()) {
          var y = Math.floor(n.eventHeight / 2 - 9), g = document.createElement("div");
          g.style.position = "absolute", g.style.right = "2px", g.style.top = y + "px", g.style.width = "18px", g.style.height = "18px", g.className = n.K("_event_delete"), g.onmousedown = function(e2) {
            e2.stopPropagation();
          }, g.onclick = function(e2) {
            e2.stopPropagation();
            var t2 = this.parentNode.event;
            t2 && n.va(t2);
          }, g.style.display = "none", f.deleteIcon = g, f.appendChild(g);
        }
        var b = a2.areas ? DayPilot.Areas.copy(a2.areas) : [];
        if (DayPilot.Areas.attach(f, i2, {
          "areas": b
        }), "function" == typeof n.onAfterEventRender) {
          var D = {};
          D.e = f.event, D.div = f, n.onAfterEventRender(D);
        }
        !function() {
          var e2 = {};
          if (e2.control = n, e2.e = i2, e2.element = null, f.domArgs = e2, "function" == typeof n.onBeforeEventDomAdd && n.onBeforeEventDomAdd(e2), e2.element) {
            var a3 = m;
            if (a3) {
              e2.Ga = a3;
              if (t(e2.element)) {
                if (!n.Ia.Ha) throw new DayPilot.Exception("Can't reach Vue");
                n.Ia.Ja = true, n.Ia.Ma(e2.element, a3, {
                  "style": {
                    "flexGrow": 1
                  }
                }), n.Ia.Ja = false;
              } else a3.appendChild(e2.element);
            }
          } else m.innerHTML = i2.client.innerHTML();
        }(), this.elements.events.push(f), this.nav.events.appendChild(f);
      }, this.lastVisibleDayOfMonth = function() {
        return this.startDate.lastDayOfMonth();
      }, this.Uc = function() {
        "string" == typeof this.startDate && (this.startDate = new DayPilot.Date(this.startDate)), this.startDate = this.startDate.firstDayOfMonth(), this.firstDate = this.startDate.firstDayOfWeek(this.getWeekStart());
        var e2, t2 = (this.startDate, this.lastVisibleDayOfMonth()), i2 = DayPilot.DateUtil.daysDiff(this.firstDate, t2) + 1;
        e2 = Math.ceil(i2 / 7), this.days = 7 * e2, this.rows = [];
        for (var a2 = 0; a2 < e2; a2++) {
          var o2 = {};
          o2.start = this.firstDate.addDays(7 * a2), o2.end = o2.start.addDays(this.getColCount()), o2.events = [], o2.lines = [], o2.index = a2, o2.minHeight = this.cellHeight, o2.calendar = this, o2.belongsHere = function(e3) {
            return e3.end().getTime() === e3.start().getTime() && e3.start().getTime() === this.start.getTime() || !(e3.end().getTime() <= this.start.getTime() || e3.start().getTime() >= this.end.getTime());
          }, o2.getPartStart = function(e3) {
            return DayPilot.DateUtil.max(this.start, e3.start());
          }, o2.getPartEnd = function(e3) {
            return DayPilot.DateUtil.min(this.end, e3.end());
          }, o2.getStartColumn = function(e3) {
            var t3 = this.getPartStart(e3);
            return DayPilot.DateUtil.daysDiff(this.start, t3);
          }, o2.getWidth = function(e3) {
            return DayPilot.DateUtil.daysSpan(this.getPartStart(e3), this.getPartEnd(e3)) + 1;
          }, o2.putIntoLine = function(e3, t3, i3, a3) {
            for (var n2 = this, o3 = 0; o3 < this.lines.length; o3++) {
              var r = this.lines[o3];
              if (r.isFree(t3, i3)) return r.addEvent(e3, t3, i3, a3, o3), o3;
            }
            var r = [];
            return r.isFree = function(e4, t4) {
              for (var i4 = true, a4 = 0; a4 < this.length; a4++) e4 + t4 - 1 < this[a4].part.colStart || e4 > this[a4].part.colStart + this[a4].part.colWidth - 1 || (i4 = false);
              return i4;
            }, r.addEvent = function(e4, t4, i4, a4, o4) {
              e4.part.colStart = t4, e4.part.colWidth = i4, e4.part.row = a4, e4.part.line = o4, e4.part.startsHere = n2.start.getTime() <= e4.start().getTime(), e4.part.endsHere = n2.end.getTime() >= e4.end().getTime(), this.push(e4);
            }, r.addEvent(e3, t3, i3, a3, this.lines.length), this.lines.push(r), this.lines.length - 1;
          }, o2.getStart = function() {
            for (var e3 = 0, t3 = 0; t3 < n.rows.length && t3 < this.index; t3++) e3 += n.rows[t3].getHeight();
          }, o2.getHeight = function() {
            return Math.max(this.lines.length * n.lineHeight() + n.cellHeaderHeight + n.cellMarginBottom, this.calendar.cellHeight);
          }, this.rows.push(o2);
        }
        this.endDate = this.firstDate.addDays(7 * e2);
      }, this.visibleStart = function() {
        return n.firstDate;
      }, this.visibleEnd = function() {
        return n.endDate;
      }, this.getHeight = function() {
        for (var e2 = this.headerHeight, t2 = 0; t2 < this.rows.length; t2++) e2 += this.rows[t2].getHeight();
        return e2;
      }, this.getWidth = function(e2, t2) {
        return 7 * t2.y + t2.x - (7 * e2.y + e2.x) + 1;
      }, this.getMinCoords = function(e2, t2) {
        return 7 * e2.y + e2.x < 7 * t2.y + t2.x ? e2 : t2;
      }, this.K = function(e2) {
        var t2 = this.theme || this.cssClassPrefix;
        return t2 ? t2 + e2 : "";
      }, this.Oa = function() {
        var t2 = this.nav.top;
        t2.setAttribute("unselectable", "on"), t2.style.MozUserSelect = "none", t2.style.KhtmlUserSelect = "none", t2.style.WebkitUserSelect = "none", t2.style.position = "relative", this.width && (t2.style.width = this.width), t2.style.height = this.getHeight() + "px", t2.onselectstart = function(e2) {
          return false;
        }, this.hideUntilInit && (t2.style.visibility = "hidden"), this.visible || (t2.style.display = "none"), t2.className = this.K("_main");
        var i2 = document.createElement("div");
        this.nav.cells = i2, i2.style.position = "absolute", i2.style.left = "0px", i2.style.right = "0px", i2.setAttribute("unselectable", "on"), t2.appendChild(i2);
        var a2 = document.createElement("div");
        this.nav.events = a2, a2.style.position = "absolute", a2.style.left = "0px", a2.style.right = "0px", a2.setAttribute("unselectable", "on"), t2.appendChild(a2), t2.onmousemove = function(t3) {
          if (e.resizingEvent) {
            var i3 = DayPilot.mo3(n.nav.top, t3);
            if (!i3) return;
            var a3 = n.getCellBelowPoint(i3.x, i3.y);
            n.clearShadow();
            var o2, r, s = e.resizingEvent;
            s.start;
            if ("w-resize" === s.direction) {
              r = a3;
              var l = s.event.end();
              l.getDatePart() === l && (l = l.addDays(-1));
              var d = n.getCellFromDate(l);
              o2 = n.getWidth(a3, d);
            } else r = n.getCellFromDate(s.event.start()), o2 = n.getWidth(r, a3);
            o2 < 1 && (o2 = 1), n.drawShadow(r.x, r.y, 0, o2);
          } else if (e.movingEvent) {
            var i3 = DayPilot.mo3(n.nav.top, t3);
            if (!i3) return;
            if (i3.x === e.movingEvent.coords.x && i3.y === e.movingEvent.coords.y) return;
            var c = 3, u = Math.abs(i3.x - e.movingEvent.coords.x) + Math.abs(i3.y - e.movingEvent.coords.y);
            if (u <= c) return;
            var a3 = n.getCellBelowPoint(i3.x, i3.y);
            n.clearShadow();
            var h = e.movingEvent.event, f = e.movingEvent.offset, o2 = n.cellMode ? 1 : DayPilot.DateUtil.daysSpan(h.start(), h.end()) + 1;
            o2 < 1 && (o2 = 1), n.drawShadow(a3.x, a3.y, 0, o2, f, h);
          } else if (e.timeRangeSelecting) {
            var i3 = DayPilot.mo3(n.nav.top, t3);
            if (!i3) return;
            var a3 = n.getCellBelowPoint(i3.x, i3.y);
            n.clearShadow();
            var r = e.timeRangeSelecting, m = 7 * r.y + r.x, p = 7 * a3.y + a3.x, o2 = Math.abs(p - m) + 1;
            o2 < 1 && (o2 = 1);
            var v = m < p ? r : a3;
            e.timeRangeSelecting.from = {
              x: v.x,
              y: v.y
            }, e.timeRangeSelecting.width = o2, e.timeRangeSelecting.moved = true, n.drawShadow(v.x, v.y, 0, o2, 0, null);
          }
        };
      }, this.ka = function() {
        this.nav.top.style.height = this.getHeight() + "px";
        for (var e2 = 0; e2 < this.cells.length; e2++) for (var t2 = 0; t2 < this.cells[e2].length; t2++) this.cells[e2][t2].style.top = this.getRowTop(t2) + "px", this.cells[e2][t2].style.height = this.rows[t2].getHeight() + "px";
      }, this.getCellBelowPoint = function(e2, t2) {
        for (var i2 = Math.floor(this.nav.top.clientWidth / this.getColCount()), a2 = Math.min(Math.floor(e2 / i2), this.getColCount() - 1), n2 = null, o2 = this.headerHeight, r = 0, s = 0; s < this.rows.length; s++) {
          var l = o2;
          if (o2 += this.rows[s].getHeight(), t2 < o2) {
            r = t2 - l, n2 = s;
            break;
          }
        }
        null === n2 && (n2 = this.rows.length - 1);
        var d = {};
        return d.x = a2, d.y = n2, d.relativeY = r, d;
      }, this.getCellFromDate = function(e2) {
        for (var t2 = DayPilot.DateUtil.daysDiff(this.firstDate, e2), i2 = {
          x: 0,
          y: 0
        }; t2 >= 7; ) i2.y++, t2 -= 7;
        return i2.x = t2, i2;
      }, this.Wc = function() {
        var e2 = document.createElement("div");
        e2.oncontextmenu = function() {
          return false;
        }, this.nav.cells.appendChild(e2), this.cells = [];
        for (var t2 = 0; t2 < this.getColCount(); t2++) {
          this.cells[t2] = [];
          var i2 = document.createElement("div");
          i2.setAttribute("unselectable", "on"), i2.style.position = "absolute", i2.style.left = this.getCellWidth() * t2 + "%", i2.style.width = this.getCellWidth() + "%", i2.style.top = "0px", i2.style.height = this.headerHeight + "px";
          var a2 = t2 + this.getWeekStart();
          a2 > 6 && (a2 -= 7), i2.className = this.K("_header");
          var n2 = document.createElement("div");
          n2.setAttribute("unselectable", "on"), n2.innerHTML = o.locale().dayNames[a2], i2.appendChild(n2), n2.style.position = "absolute", n2.style.top = "0px", n2.style.bottom = "0px", n2.style.left = "0px", n2.style.right = "0px", n2.className = this.K("_header_inner"), n2.innerHTML = o.locale().dayNames[a2], e2.appendChild(i2);
          for (var r = 0; r < this.rows.length; r++) this.Zc(t2, r, e2);
        }
      }, this.Vc = function() {
        for (var e2 = 0; e2 < this.cells.length; e2++) for (var t2 = 0; t2 < this.cells[e2].length; t2++) {
          var i2 = n.cells[e2][t2];
          n.Za(i2);
        }
        this.nav.cells.innerHTML = "";
      }, this.Za = function(e2) {
        !function() {
          var i2 = e2.domArgs;
          if (e2.domArgs = null, i2 && "function" == typeof n.onBeforeCellDomRemove && n.onBeforeCellDomRemove(i2), i2 && "function" == typeof n.onBeforeCellDomAdd) {
            var a2 = i2 && i2.Ga;
            if (a2) {
              var o2 = n.$c.reactDOM && isReactCmp(i2.element), r = n.Ia.Ha && (isVueCmp(i2.element) || t(i2.element));
              o2 ? n.$c._c(a2) : r && (n.Ia.Ja = true, n.Ia.Ka(a2), n.Ia.Ja = false);
            }
          }
        }(), e2.onclick = null;
      }, this.ra = function() {
        return 2 === n.api;
      }, this.Zc = function(i2, a2, r) {
        var s = this.rows[a2], l = this.firstDate.addDays(7 * a2 + i2), d = l.getDay(), c = null;
        c = 1 === d ? o.locale().monthNames[l.getMonth()] + " " + d : "" + d;
        var u = !n.isWeekend(l), h = {
          "start": l,
          "end": l.addDays(1),
          "properties": {
            "headerHtml": c,
            "backColor": null,
            "business": u,
            "html": null
          }
        }, f = {};
        f.control = n, f.cell = h, "function" == typeof n.onBeforeCellRender && n.onBeforeCellRender(f);
        var m = f.cell.properties, p = document.createElement("div");
        if (p.setAttribute("unselectable", "on"), p.style.position = "absolute", p.style.cursor = "default", p.style.left = this.getCellWidth() * i2 + "%", p.style.width = this.getCellWidth() + "%", p.style.top = this.getRowTop(a2) + "px", p.style.height = s.getHeight() + "px", p.className = this.K("_cell"), m.business) {
          var u = this.K("_cell_business");
          DayPilot.Util.addClass(p, u);
        }
        var v = (this.startDate.addMonths(-1).getMonth(), this.startDate.addMonths(1).getMonth(), this.startDate.getMonth(), document.createElement("div"));
        v.setAttribute("unselectable", "on"), p.appendChild(v), v.style.position = "absolute", v.style.left = "0px", v.style.right = "0px", v.style.top = "0px", v.style.bottom = "0px", v.className = this.K("_cell_inner"), m.backColor && (v.style.backgroundColor = f.cell.properties.backColor), p.onmousedown = function(t2) {
          "Disabled" !== n.timeRangeSelectedHandling && (n.clearShadow(), e.timeRangeSelecting = {
            "root": n,
            "x": i2,
            "y": a2,
            "from": {
              x: i2,
              y: a2
            },
            "width": 1
          });
        }, p.onclick = function() {
          var e2 = function(e3) {
            var t2 = new DayPilot.Date(e3), i3 = t2.addDays(1);
            n.M(t2, i3);
          };
          if ("Disabled" !== n.timeRangeSelectedHandling) return void e2(l);
        };
        var y = document.createElement("div");
        if (y.setAttribute("unselectable", "on"), y.style.height = this.cellHeaderHeight + "px", y.className = this.K("_cell_header"), y.onclick = function(e2) {
          if ("Enabled" === n.cellHeaderClickHandling) {
            e2.stopPropagation();
            var t2 = {};
            t2.control = n, t2.start = l, t2.end = l.addDays(1), t2.preventDefault = function() {
              this.preventDefault.value = true;
            }, "function" == typeof n.onCellHeaderClick && (n.onCellHeaderClick(t2), t2.preventDefault.value) || "function" == typeof n.onCellHeaderClicked && n.onCellHeaderClicked(t2);
          }
        }, y.innerHTML = m.headerHtml, v.appendChild(y), m.html) {
          var g = document.createElement("div");
          g.style.height = s.getHeight() - this.cellHeaderHeight + "px", g.style.overflow = "hidden", g.innerHTML = m.html, v.appendChild(g);
        }
        !function() {
          if ("function" == typeof n.onBeforeCellDomAdd || "function" == typeof n.onBeforeCellDomRemove) {
            var e2 = {};
            if (e2.control = n, e2.cell = h, e2.element = null, p.domArgs = e2, "function" == typeof n.onBeforeCellDomAdd && n.onBeforeCellDomAdd(e2), e2.element) {
              var i3 = v;
              if (i3) {
                e2.Ga = i3;
                if (t(e2.element)) {
                  if (!n.Ia.Ha) throw new DayPilot.Exception("Can't reach Vue");
                  n.Ia.Ja = true, n.Ia.Ma(e2.element, i3), n.Ia.Ja = false;
                } else i3.appendChild(e2.element);
              }
            }
          }
        }(), this.cells[i2][a2] = p, r.appendChild(p);
      }, this.getWeekStart = function() {
        if ("Auto" === n.weekStarts) {
          var e2 = o.locale();
          return e2 ? e2.weekStarts : 0;
        }
        return n.weekStarts || 0;
      }, this.getColCount = function() {
        return 7;
      }, this.getCellWidth = function() {
        return 14.285;
      }, this.getRowTop = function(e2) {
        for (var t2 = this.headerHeight, i2 = 0; i2 < e2; i2++) t2 += this.rows[i2].getHeight();
        return t2;
      }, this.S = function(e2, t2, i2) {
        var a2 = {};
        a2.action = e2, a2.parameters = i2, a2.data = t2, a2.header = this.R();
        var n2 = "JSON" + DayPilot.JSON.stringify(a2);
        this.backendUrl && DayPilot.request(this.backendUrl, this.T, n2, this.ajaxError);
      }, this.T = function(e2) {
        n.U(e2.responseText);
      }, this.R = function() {
        var e2 = {};
        return e2.control = "dpm", e2.id = this.id, e2.v = this.v, e2.visibleStart = new DayPilot.Date(this.firstDate), e2.visibleEnd = e2.visibleStart.addDays(this.days), e2.startDate = n.startDate, e2.timeFormat = this.timeFormat, e2.weekStarts = this.weekStarts, e2;
      }, this.eventClickCallBack = function(e2, t2) {
        this.S("EventClick", t2, e2);
      }, this.sa = function(t2) {
        e.movingEvent = null, e.resizingEvent = null;
        var i2 = this, t2 = t2 || window.event;
        t2.ctrlKey;
        t2.cancelBubble = true, t2.stopPropagation && t2.stopPropagation(), n.eventClickSingle(i2, t2);
      }, this.eventClickSingle = function(e2, t2) {
        var i2 = e2.event;
        if (i2 && i2.client.clickEnabled()) if (n.ra()) {
          var a2 = {};
          if (a2.e = i2, a2.control = n, a2.div = e2, a2.originalEvent = t2, a2.meta = t2.metaKey, a2.ctrl = t2.ctrlKey, a2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof n.onEventClick && (n.ta.apply(function() {
            n.onEventClick(a2);
          }), a2.preventDefault.value)) return;
          switch (n.eventClickHandling) {
            case "CallBack":
              n.eventClickCallBack(i2);
              break;
            case "ContextMenu":
              var o2 = i2.client.contextMenu();
              o2 ? o2.show(i2) : n.contextMenu && n.contextMenu.show(i2);
          }
          "function" == typeof n.onEventClicked && n.ta.apply(function() {
            n.onEventClicked(a2);
          });
        } else switch (n.eventClickHandling) {
          case "CallBack":
            n.eventClickCallBack(i2);
            break;
          case "JavaScript":
            n.onEventClick(i2);
        }
      }, this.Yc = function() {
        var e2 = this;
        return n.ua(e2.event), false;
      }, this.ua = function(e2) {
        if (this.event = e2, !e2.client.rightClickEnabled()) return false;
        var t2 = {};
        if (t2.e = e2, t2.preventDefault = function() {
          this.preventDefault.value = true;
        }, "function" != typeof n.onEventRightClick || (n.onEventRightClick(t2), !t2.preventDefault.value)) {
          switch (n.eventRightClickHandling) {
            case "ContextMenu":
              var i2 = e2.client.contextMenu();
              i2 ? i2.show(e2) : n.contextMenu && n.contextMenu.show(this.event);
          }
          return "function" == typeof n.onEventRightClicked && n.onEventRightClicked(t2), false;
        }
      }, this.va = function(e2) {
        if (n.ra()) {
          var t2 = {};
          if (t2.e = e2, t2.control = n, t2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof n.onEventDelete && (n.ta.apply(function() {
            n.onEventDelete(t2);
          }), t2.preventDefault.value)) return;
          switch (n.eventDeleteHandling) {
            case "CallBack":
              n.eventDeleteCallBack(e2);
              break;
            case "PostBack":
              n.eventDeletePostBack(e2);
              break;
            case "Update":
              n.events.remove(e2);
          }
          "function" == typeof n.onEventDeleted && n.ta.apply(function() {
            n.onEventDeleted(t2);
          });
        } else switch (n.eventDeleteHandling) {
          case "PostBack":
            n.eventDeletePostBack(e2);
            break;
          case "CallBack":
            n.eventDeleteCallBack(e2);
            break;
          case "JavaScript":
            n.onEventDelete(e2);
        }
      }, this.eventDeleteCallBack = function(e2, t2) {
        this.S("EventDelete", t2, e2);
      }, this.eventDeletePostBack = function(e2, t2) {
        this.Q("EventDelete", t2, e2);
      }, this.eventMoveCallBack = function(e2, t2, i2, a2, n2) {
        if (!t2) throw "newStart is null";
        if (!i2) throw "newEnd is null";
        var o2 = {};
        o2.e = e2, o2.newStart = t2, o2.newEnd = i2, o2.position = n2, this.S("EventMove", a2, o2);
      }, this.L = function(e2, t2, i2, a2, o2, r) {
        var s = e2.start().getTimePart(), l = e2.end().getDatePart();
        l.getTime() !== e2.end().getTime() && (l = l.addDays(1));
        var d = DayPilot.DateUtil.diff(e2.end(), l), c = this.getDateFromCell(t2, i2);
        c = c.addDays(-a2);
        var u = DayPilot.DateUtil.daysSpan(e2.start(), e2.end()) + 1, h = c.addDays(u), f = c.addTime(s), m = h.addTime(d);
        if (n.ra()) {
          var p = {};
          if (p.e = e2, p.control = n, p.newStart = f, p.newEnd = m, p.ctrl = o2.ctrlKey, p.shift = o2.shiftKey, p.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof n.onEventMove && (n.ta.apply(function() {
            n.onEventMove(p);
          }), p.preventDefault.value)) return;
          switch (n.eventMoveHandling) {
            case "CallBack":
              n.eventMoveCallBack(e2, f, m);
              break;
            case "Update":
              e2.start(f), e2.end(m), n.events.update(e2);
          }
          "function" == typeof n.onEventMoved && n.ta.apply(function() {
            n.onEventMoved(p);
          });
        } else switch (n.eventMoveHandling) {
          case "CallBack":
            n.eventMoveCallBack(e2, f, m);
            break;
          case "JavaScript":
            n.onEventMove(e2, f, m);
        }
      }, this.eventResizeCallBack = function(e2, t2, i2, a2) {
        if (!t2) throw "newStart is null";
        if (!i2) throw "newEnd is null";
        var n2 = {};
        n2.e = e2, n2.newStart = t2, n2.newEnd = i2, this.S("EventResize", a2, n2);
      }, this.J = function(e2, t2, i2) {
        var a2 = e2.start().getTimePart(), o2 = e2.end().getDatePart();
        o2.getTime() !== e2.end().getTime() && (o2 = o2.addDays(1));
        var r = DayPilot.DateUtil.diff(e2.end(), o2), s = this.getDateFromCell(t2.x, t2.y), l = s.addDays(i2), d = s.addTime(a2), c = l.addTime(r);
        if (n.ra()) {
          var u = {};
          if (u.e = e2, u.control = n, u.newStart = d, u.newEnd = c, u.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof n.onEventResize && (n.ta.apply(function() {
            n.onEventResize(u);
          }), u.preventDefault.value)) return;
          switch (n.eventResizeHandling) {
            case "CallBack":
              n.eventResizeCallBack(e2, d, c);
              break;
            case "Update":
              e2.start(d), e2.end(c), n.events.update(e2);
          }
          "function" == typeof n.onEventResized && n.ta.apply(function() {
            n.onEventResized(u);
          });
        } else switch (n.eventResizeHandling) {
          case "CallBack":
            n.eventResizeCallBack(e2, d, c);
            break;
          case "JavaScript":
            n.onEventResize(e2, d, c);
        }
      }, this.timeRangeSelectedCallBack = function(e2, t2, i2) {
        var a2 = {};
        a2.start = e2, a2.end = t2, this.S("TimeRangeSelected", i2, a2);
      }, this.M = function(e2, t2) {
        if (this.ra()) {
          var i2 = {};
          if (i2.control = n, i2.start = e2, i2.end = t2, i2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof n.onTimeRangeSelect && (n.ta.apply(function() {
            n.onTimeRangeSelect(i2);
          }), i2.preventDefault.value)) return;
          switch (n.timeRangeSelectedHandling) {
            case "CallBack":
              n.timeRangeSelectedCallBack(e2, t2);
          }
          "function" == typeof n.onTimeRangeSelected && n.ta.apply(function() {
            n.onTimeRangeSelected(i2);
          });
        } else switch (n.timeRangeSelectedHandling) {
          case "CallBack":
            n.timeRangeSelectedCallBack(e2, t2);
            break;
          case "JavaScript":
            n.onTimeRangeSelected(e2, t2);
        }
      }, this.ta = {}, this.ta.scope = null, this.ta.notify = function() {
        n.ta.scope && n.ta.scope["$apply"]();
      }, this.ta.apply = function(e2) {
        e2();
      }, this.clearSelection = function() {
        n.clearShadow();
      }, this.commandCallBack = function(e2, t2) {
        var i2 = {};
        i2.command = e2, this.S("Command", t2, i2);
      }, this.isWeekend = function(e2) {
        return e2 = new DayPilot.Date(e2), 0 === e2.dayOfWeek() || 6 === e2.dayOfWeek();
      }, this.aa = {}, this.aa.locale = function() {
        var e2 = DayPilot.Locale.find(n.locale);
        return e2 ? e2 : DayPilot.Locale.US;
      }, this.aa.ba = function() {
        return "Disabled" !== n.xssProtection;
      };
      var o = this.aa;
      this.debug = function(e2, t2) {
        this.debuggingEnabled && (n.debugMessages || (n.debugMessages = []), n.debugMessages.push(e2), "undefined" != typeof console && console.log(e2));
      }, this.dispose = function() {
        var e2 = n;
        e2.O || (e2.O = true, e2.Vc(), e2.W(), e2.nav.top.removeAttribute("style"), e2.nav.top.removeAttribute("class"), e2.nav.top.innerHTML = "", e2.nav.top.dp = null, e2.nav.top.onmousemove = null, e2.nav.top = null);
      }, this.disposed = function() {
        return this.O;
      }, this.hb = function() {
        e.globalHandlers || (e.globalHandlers = true, DayPilot.re(document, "mouseup", e.gMouseUp));
      }, this.loadFromServer = function() {
        return !(!this.backendUrl && "function" != typeof WebForm_DoCallback) && ("undefined" == typeof n.events.list || !n.events.list);
      }, this.t = function() {
        "hidden" === this.nav.top.style.visibility && (this.nav.top.style.visibility = "visible");
      }, this.show = function() {
        n.visible = true, n.nav.top.style.display = "";
      }, this.hide = function() {
        n.visible = false, n.nav.top.style.display = "none";
      }, this.ob = function() {
        if (this.id && this.id.tagName) this.nav.top = this.id;
        else {
          if ("string" != typeof this.id) throw "DayPilot.Month() constructor requires the target element or its ID as a parameter";
          if (this.nav.top = document.getElementById(this.id), !this.nav.top) throw "DayPilot.Month: The placeholder element not found: '" + id + "'.";
        }
      }, this.wb = function() {
        this.Uc(), this.Oa(), this.Wc(), this.hb(), this.S("Init");
      }, this.Sa = function(e2, t2) {
        return n.aa.ba() ? DayPilot.Util.escapeTextHtml(e2, t2) : DayPilot.Util.isNullOrUndefined(t2) ? DayPilot.Util.isNullOrUndefined(e2) ? "" : e2 : t2;
      }, this.Ia = {}, this.Ia.Ha = null, this.Ia.Db = function(e2, t2, i2) {
        var a2 = n.Ia.Ha;
        if ("function" == typeof a2.createVNode && "function" == typeof a2.render) {
          var o2 = a2.createVNode(e2, i2);
          a2.render(o2, t2);
        }
      }, this.Ia.Ma = function(e2, t2, i2) {
        var a2 = n.Ia.Ha;
        if ("function" == typeof a2.render) {
          var o2 = e2;
          DayPilot.isArray(e2) && (o2 = a2.h("div", i2, e2)), a2.render(o2, t2);
        }
      }, this.Ia.Ka = function(e2) {
        var t2 = n.Ia.Ha;
        "function" == typeof t2.render && t2.render(null, e2);
      }, this.internal = {}, this.internal.loadOptions = this.kb, this.internal.xssTextHtml = n.Sa, this.internal.enableVue = function(e2) {
        n.Ia.Ha = e2;
      }, this.internal.vueRef = function() {
        return n.Ia.Ha;
      }, this.internal.vueRendering = function() {
        return n.Ia.Ja;
      }, this.init = function() {
        return this.ob(), this.loadFromServer() ? void this.wb() : (this.Uc(), this.fa(), this.Oa(), this.Wc(), this.t(), this.la(), this.hb(), this.fireAfterRenderDetached(null, false), this.Ca = true, this);
      }, this.Init = this.init, Object.defineProperty(this, "durationBarVisible", {
        get: function() {
          return n.eventBarVisible;
        }
      }), this.kb(a);
    }, e.gMouseUp = function(t2) {
      if (e.movingEvent) {
        var i = e.movingEvent;
        if (!i.event) return;
        if (!i.event.calendar) return;
        if (!i.event.calendar.shadow) return;
        if (!i.event.calendar.shadow.start) return;
        var a = e.movingEvent.event.calendar, n = e.movingEvent.event, o = a.shadow.start, r = a.shadow.position, s = e.movingEvent.offset;
        a.clearShadow(), e.movingEvent = null;
        var t2 = t2 || window.event;
        return a.L(n, o.x, o.y, s, t2, r), t2.cancelBubble = true, t2.stopPropagation && t2.stopPropagation(), e.movingEvent = null, false;
      }
      if (e.resizingEvent) {
        var i = e.resizingEvent;
        if (!i.event) return;
        if (!i.event.calendar) return;
        if (!i.event.calendar.shadow) return;
        if (!i.event.calendar.shadow.start) return;
        var a = e.resizingEvent.event.calendar, n = e.resizingEvent.event, o = a.shadow.start, l = a.shadow.width;
        return a.clearShadow(), e.resizingEvent = null, a.J(n, o, l), t2.cancelBubble = true, e.resizingEvent = null, false;
      }
      if (e.timeRangeSelecting) {
        if (e.timeRangeSelecting.moved) {
          var d = e.timeRangeSelecting, a = d.root, o = new DayPilot.Date(a.getDateFromCell(d.from.x, d.from.y)), c = o.addDays(d.width);
          a.M(o, c), a.clearShadow();
        }
        e.timeRangeSelecting = null;
      }
    }, DayPilot.Month = e.Month, "undefined" != typeof jQuery && !function(e2) {
      e2.fn.daypilotMonth = function(e3) {
        var t2 = null, i = this.each(function() {
          if (!this.daypilot) {
            var i2 = new DayPilot.Month(this.id);
            this.daypilot = i2;
            for (name in e3) i2[name] = e3[name];
            i2.Init(), t2 || (t2 = i2);
          }
        });
        return 1 === this.length ? t2 : i;
      };
    }(jQuery), function() {
      var e2 = DayPilot.am();
      e2 && e2.directive("daypilotMonth", ["$parse", function(e3) {
        return {
          "restrict": "E",
          "template": "<div></div>",
          "replace": true,
          "link": function(t2, i, a) {
            var n = new DayPilot.Month(i[0]);
            n.ta.scope = t2, n.init();
            var o = a["id"];
            o && (t2[o] = n);
            var r = a["publishAs"];
            if (r) {
              (0, e3(r).assign)(t2, n);
            }
            for (var s in a) 0 === s.indexOf("on") && !function(i2) {
              n[i2] = function(n2) {
                var o2 = e3(a[i2]);
                t2["$apply"](function() {
                  o2(t2, {
                    "args": n2
                  });
                });
              };
            }(s);
            var l = t2["$watch"], d = a["config"] || a["daypilotConfig"], c = a["events"] || a["daypilotEvents"];
            l.call(t2, d, function(e4) {
              for (var t3 in e4) n[t3] = e4[t3];
              n.update();
            }, true), l.call(t2, c, function(e4) {
              n.events.list = e4, n.update();
            }, true);
          }
        };
      }]);
    }(), "undefined" != typeof Sys && Sys.Application && Sys.Application.notifyScriptLoaded && Sys.Application.notifyScriptLoaded();
  }
}(), "undefined" == typeof DayPilot) var DayPilot = {};
"undefined" == typeof DayPilot.Global && (DayPilot.Global = {}), function(DayPilot2) {
  "use strict";
  if ("undefined" == typeof DayPilot2.Navigator || !DayPilot2.Navigator.def) {
    var e = DayPilot2.Util.isVueVNode;
    DayPilot2.Navigator = function(t, i) {
      this.v = "2025.1.638-lite";
      var a = this;
      this.id = t, this.api = 2, this.isNavigator = true, this.autoFocusOnClick = true, this.weekStarts = "Auto", this.selectMode = "Day", this.titleHeight = 30, this.dayHeaderHeight = 30, this.bound = null, this.cellWidth = 30, this.cellHeight = 30, this.cssClassPrefix = "navigator_default", this.freeHandSelectionEnabled = false, this.selectionStart = new DayPilot2.Date().getDatePart(), this.selectionEnd = null, this.selectionDay = null, this.showMonths = 1, this.skipMonths = 1, this.command = "navigate", this.year = new DayPilot2.Date().getYear(), this.month = new DayPilot2.Date().getMonth() + 1, this.showWeekNumbers = false, this.weekNumberAlgorithm = "Auto", this.rowsPerMonth = "Six", this.orientation = "Vertical", this.locale = "en-us", this.rtl = false, this.visible = true, this.timeRangeSelectedHandling = "Bind", this.visibleRangeChangedHandling = "Enabled", this.onVisibleRangeChange = null, this.onVisibleRangeChanged = null, this.onTimeRangeSelect = null, this.onTimeRangeSelected = null, this.nav = {}, this.pb = {}, this.ad = function() {
        this.root.dp = this, this.root.className = this.K("_main"), "Horizontal" === this.orientation ? (r.bd() || (this.root.style.width = this.showMonths * (7 * r.cellWidth() + this.cd()) + "px"), this.root.style.height = 6 * this.cellHeight + this.titleHeight + this.dayHeaderHeight + "px") : r.bd() || (this.root.style.width = 7 * r.cellWidth() + this.cd() + "px"), this.rtl && (this.root.style.direction = "rtl"), this.root.style.position = "relative", this.visible || (this.root.style.display = "none");
        var e2 = document.createElement("input");
        e2.type = "hidden", e2.name = a.id + "_state", e2.id = e2.name, this.root.appendChild(e2), this.state = e2, this.startDate ? this.startDate = new DayPilot2.Date(this.startDate).firstDayOfMonth() : this.selectionDay ? this.startDate = new DayPilot2.Date(this.selectionDay).firstDayOfMonth() : this.startDate = DayPilot2.Date.fromYearMonthDay(this.year, this.month), this.calendars = [], this.selected = [], this.months = [];
      }, this.ra = function() {
        return 2 === a.api;
      }, this.Vc = function() {
        this.root.innerHTML = "";
      }, this.K = function(e2) {
        var t2 = this.theme || this.cssClassPrefix;
        return t2 ? t2 + e2 : "";
      }, this.dd = function(e2, t2) {
        var i2 = this.K("_" + t2);
        DayPilot2.Util.addClass(e2, i2);
      }, this.ed = function(e2, t2) {
        var i2 = this.K("_" + t2);
        DayPilot2.Util.removeClass(e2, i2);
      }, this.fd = function() {
        if (!r.bd()) return null;
        var e2 = 7;
        return this.showWeekNumbers && e2++, 100 / e2;
      }, this.gd = function() {
        return r.bd() ? null : r.cellWidth();
      }, this.hd = function(e2) {
        return "number" != typeof e2 && (e2 = 1), r.bd() ? this.fd() * e2 : this.gd() * e2;
      }, this.jd = function(e2) {
        var t2 = r.bd() ? "%" : "px";
        return this.hd(e2) + t2;
      }, this.Wc = function(t2, i2) {
        var n2 = {};
        n2.cells = [], n2.days = [], n2.weeks = [];
        var o2 = this.startDate.addMonths(t2), s = i2.before, l = i2.after, d = o2.firstDayOfMonth(), c = d.firstDayOfWeek(r.weekStarts()), u = d.addMonths(1), h = DayPilot2.DateUtil.daysDiff(c, u), f = "Auto" === this.rowsPerMonth ? Math.ceil(h / 7) : 6;
        n2.rowCount = f;
        var m = new DayPilot2.Date().getDatePart(), p = 7 * r.cellWidth() + this.cd();
        n2.width = p;
        var v = this.cellHeight * f + this.titleHeight + this.dayHeaderHeight;
        n2.height = v;
        var y = document.createElement("div");
        if (r.bd() ? "Horizontal" === this.orientation && (y.style.width = 100 / a.showMonths + "%") : y.style.width = p + "px", y.style.height = v + "px", "Horizontal" === this.orientation) y.style.position = "absolute", r.bd() ? (y.style.left = 100 / a.showMonths * t2 + "%", n2.leftPct = 100 / a.showMonths * t2) : y.style.left = p * t2 + "px", y.style.top = "0px", n2.top = 0, n2.left = p * t2;
        else {
          y.style.position = "relative";
          var g = t2 > 0 ? a.months[t2 - 1].top + a.months[t2 - 1].height : 0;
          n2.top = g, n2.left = 0, n2.leftPct = 0;
        }
        y.className = this.K("_month"), y.style.cursor = "default", y.style.MozUserSelect = "none", y.style.KhtmlUserSelect = "none", y.style.WebkitUserSelect = "none", y.month = n2, n2.div = y, this.root.appendChild(y);
        var b = this.titleHeight + this.dayHeaderHeight, D = document.createElement("div");
        D.style.position = "absolute", D.style.left = "0px", D.style.right = "0px", D.style.top = "0px", D.style.width = a.jd(), D.style.height = this.titleHeight + "px", D.style.lineHeight = this.titleHeight + "px", D.setAttribute("unselectable", "on"), D.className = this.K("_titleleft"), i2.left && (D.style.cursor = "pointer", D.innerHTML = "<span>&lt;</span>", D.onclick = this.kd), y.appendChild(D), this.tl = D;
        var w = document.createElement("div");
        w.style.position = "absolute", w.style.left = a.jd(), w.style.top = "0px", w.style.width = a.jd(a.showWeekNumbers ? 6 : 5), w.style.height = this.titleHeight + "px", w.style.lineHeight = this.titleHeight + "px", w.setAttribute("unselectable", "on"), w.className = this.K("_title"), w.innerHTML = r.locale().monthNames[o2.getMonth()] + " " + o2.getYear(), y.appendChild(w), this.ti = w;
        var x = document.createElement("div");
        x.style.position = "absolute", x.style.left = a.jd(a.showWeekNumbers ? 7 : 6), x.style.right = a.jd(a.showWeekNumbers ? 7 : 6), x.style.top = "0px", x.style.width = a.jd(), x.style.height = this.titleHeight + "px", x.style.lineHeight = this.titleHeight + "px", x.setAttribute("unselectable", "on"), x.className = this.K("_titleright"), i2.right && (x.style.cursor = "pointer", x.innerHTML = "<span>&gt;</span>", x.onclick = this.ld), y.appendChild(x), this.tr = x;
        var C = (this.cd(), a.showWeekNumbers ? 1 : 0);
        if (this.showWeekNumbers) for (var P = 0; P < f; P++) {
          var k = c.addDays(7 * P), _ = null;
          switch (this.weekNumberAlgorithm) {
            case "Auto":
              _ = 1 === r.weekStarts() ? k.weekNumberISO() : k.weekNumber();
              break;
            case "US":
              _ = k.weekNumber();
              break;
            case "ISO8601":
              _ = k.weekNumberISO();
              break;
            default:
              throw "Unknown weekNumberAlgorithm value.";
          }
          var S = document.createElement("div");
          S.style.position = "absolute", S.style.left = "0px", S.style.right = "0px", S.style.top = P * this.cellHeight + b + "px", S.style.width = a.jd(), S.style.height = this.cellHeight + "px", S.style.lineHeight = this.cellHeight + "px", S.setAttribute("unselectable", "on"), S.className = this.K("_weeknumber"), S.innerHTML = "<span>" + _ + "</span>", y.appendChild(S), n2.weeks.push(S);
        }
        for (var M = 0; M < 7; M++) {
          n2.cells[M] = [];
          var S = document.createElement("div");
          S.style.position = "absolute", S.style.left = a.jd(M + C), S.style.right = a.jd(M + C), S.style.top = this.titleHeight + "px", S.style.width = a.jd(), S.style.height = this.dayHeaderHeight + "px", S.style.lineHeight = this.dayHeaderHeight + "px", S.setAttribute("unselectable", "on"), S.className = this.K("_dayheader"), S.innerHTML = "<span>" + this.md(M) + "</span>", y.appendChild(S), n2.days.push(S);
          for (var P = 0; P < f; P++) {
            var k = c.addDays(7 * P + M), A = this.nd(k) && "none" !== this.od(), T = k.firstDayOfMonth() === o2, H = k < o2, E = k >= o2.addMonths(1);
            if ("month" === this.od()) A = A && T;
            else if ("day" === this.od()) A = A && (T || s && H || l && E);
            else if ("week" === this.od()) {
              var I = k.firstDayOfMonth() === o2;
              A = A && (I || s && H || l && E);
            }
            var N = document.createElement("div");
            n2.cells[M][P] = N;
            var R = a.pd(M, P), O = R.x, z = R.y, B = r.bd() ? "%" : "px";
            N.day = k, N.x = M, N.y = P, N.left = O, N.top = z, N.isCurrentMonth = T, N.isNextMonth = E, N.isPrevMonth = H, N.showBefore = s, N.showAfter = l, N.className = this.K(T ? "_day" : "_dayother"), a.dd(N, "cell"), k.getTime() === m.getTime() && T && this.dd(N, "today"), 0 !== k.dayOfWeek() && 6 !== k.dayOfWeek() || this.dd(N, "weekend"), N.style.position = "absolute", N.style.left = O + B, N.style.right = O + B, N.style.top = z + "px", N.style.width = a.jd(), N.style.height = this.cellHeight + "px", N.style.lineHeight = this.cellHeight + "px";
            var U = document.createElement("div");
            U.style.position = "absolute", U.className = k.getTime() === m.getTime() && T ? this.K("_todaybox") : this.K("_daybox"), a.dd(U, "cell_box"), U.style.left = "0px", U.style.top = "0px", U.style.right = "0px", U.style.bottom = "0px", N.appendChild(U);
            var L = null;
            this.cells && this.cells[k.toStringSortable()] && (L = this.cells[k.toStringSortable()]);
            var j = L || {};
            if (j.day = k, j.isCurrentMonth = T, j.isToday = k.getTime() === m.getTime() && T, j.isWeekend = 0 === k.dayOfWeek() || 6 === k.dayOfWeek(), L ? (j.html = L.html || k.getDay(), j.cssClass = L.css) : (j.html = k.getDay(), j.cssClass = null), "function" == typeof a.onBeforeCellRender) {
              var W = {};
              W.cell = j, a.onBeforeCellRender(W), L = W.cell;
            }
            if (L && DayPilot2.Util.addClass(N, L.cssClass || L.css), T || s && H || l && E) {
              var F = document.createElement("div");
              F.innerHTML = k.getDay(), F.style.position = "absolute", F.style.left = "0px", F.style.top = "0px", F.style.right = "0px", F.style.bottom = "0px", a.dd(F, "cell_text"), N.isClickable = true, L && L.html && (F.innerHTML = L.html), N.appendChild(F);
            }
            N.setAttribute("unselectable", "on"), N.onclick = this.qd, function() {
              if ("function" == typeof a.onBeforeCellDomAdd || "function" == typeof a.onBeforeCellDomRemove) {
                var t3 = {};
                if (t3.control = a, t3.cell = j, t3.element = null, N.domArgs = t3, "function" == typeof a.onBeforeCellDomAdd && a.onBeforeCellDomAdd(t3), t3.element) {
                  var i3 = U;
                  if (i3) {
                    t3.Ga = i3;
                    if (e(t3.element)) {
                      if (!a.Ia.Ha) throw new DayPilot2.Exception("Can't reach Vue");
                      a.Ia.Ja = true, a.Ia.Ma(t3.element, i3), a.Ia.Ja = false;
                    } else i3.appendChild(t3.element);
                  }
                }
              }
            }(), y.appendChild(N), A && (a.rd(y, M, P), this.selected.push(N));
          }
        }
        var J = document.createElement("div");
        J.style.position = "absolute", J.style.left = "0px", J.style.top = b - 2 + "px", J.style.width = a.jd(7 + C), J.style.height = "1px", J.style.fontSize = "1px", J.style.lineHeight = "1px", J.className = this.K("_line"), y.appendChild(J), this.months.push(n2);
      }, this.pd = function(e2, t2) {
        var i2 = this.titleHeight + this.dayHeaderHeight, n2 = (this.cd(), this.showWeekNumbers ? 1 : 0);
        return {
          "x": a.hd(e2 + n2),
          "y": t2 * this.cellHeight + i2
        };
      }, this.rd = function(e2, t2, i2) {
        var n2 = e2.month.cells[t2][i2];
        a.dd(n2, "select");
      }, this.sd = function(e2, t2, i2) {
        var n2 = e2.month.cells[t2][i2];
        a.ed(n2, "select");
      }, this.cd = function() {
        return this.showWeekNumbers ? r.cellWidth() : 0;
      }, this.td = function() {
        if (this.items) for (var e2 = 0; e2 < this.showMonths; e2++) for (var t2 = 0; t2 < 7; t2++) for (var i2 = 0; i2 < 6; i2++) {
          var a2 = this.months[e2].cells[t2][i2];
          a2 && (1 === this.items[a2.day.toStringSortable()] ? (this.dd(a2, "busy"), this.ed(a2, "free")) : (this.ed(a2, "busy"), this.dd(a2, "free")));
        }
      }, this.ud = function() {
        var e2 = {};
        e2.startDate = a.startDate, e2.selectionStart = a.selectionStart, e2.selectionEnd = a.selectionEnd.addDays(1), a.state.value = JSON.stringify(e2);
      }, this.od = function() {
        return (this.selectMode || "").toLowerCase();
      }, this.vd = function() {
        var e2 = this.selectionDay || this.selectionStart;
        switch (e2 || (e2 = DayPilot2.Date.today()), e2 = new DayPilot2.Date(e2), this.od()) {
          case "day":
            this.selectionStart = e2, this.selectionDay = e2, this.selectionEnd = e2;
            break;
          case "week":
            this.selectionDay = e2, this.selectionStart = e2.firstDayOfWeek(r.weekStarts()), this.selectionEnd = this.selectionStart.addDays(6);
            break;
          case "month":
            this.selectionDay = e2, this.selectionStart = e2.firstDayOfMonth(), this.selectionEnd = this.selectionStart.lastDayOfMonth();
            break;
          case "none":
            this.selectionEnd = e2;
            break;
          default:
            throw "Unknown selectMode value.";
        }
      }, this.wd = null, this.select = function(e2, t2, i2) {
        var n2 = t2 && (t2 instanceof DayPilot2.Date || "string" == typeof t2), o2 = t2 && "object" == typeof t2 || "boolean" == typeof t2, r2 = e2, s = n2 ? t2 : null, l = o2 ? t2 : i2;
        if (!this.Ca) return void (this.wd = {
          "date1": r2,
          "date2": s,
          "options": l
        });
        var d = true, c = true;
        l && "object" == typeof l ? (l.dontFocus && (d = false), l.dontNotify && (c = false)) : "boolean" == typeof l && (d = !l);
        var u = this.selectionStart, h = this.selectionEnd;
        this.selectionStart = new DayPilot2.Date(r2).getDatePart(), this.selectionDay = this.selectionStart;
        var f = false;
        if (d) {
          var m = this.startDate;
          (this.selectionStart < this.xd() || this.selectionStart >= this.yd()) && (m = this.selectionStart.firstDayOfMonth()), m.toStringSortable() !== this.startDate.toStringSortable() && (f = true), this.startDate = m;
        }
        s && a.freeHandSelectionEnabled ? a.selectionEnd = new DayPilot2.Date(s) : this.vd(), this.Vc(), this.ad(), this.zd(), this.td(), this.ud(), !c || u.equals(this.selectionStart) && h.equals(this.selectionEnd) || this.M(), f && this.Ad();
      }, this.update = function(e2) {
        if (a.kb(e2), this.Ca) {
          if (a.O) throw new DayPilot2.Exception("You are trying to update a DayPilot.Navigator instance that has been disposed.");
          a.Bd();
          var t2 = {
            "day": a.selectionDay,
            "start": a.selectionStart,
            "end": a.selectionEnd
          };
          a.ib(), t2.start === a.selectionStart && t2.end === a.selectionEnd && t2.day === a.selectionDay || a.M();
        }
      }, this.ib = function() {
        this.Vc(), this.ad(), this.vd(), this.zd(), this.fa(), this.td(), this.ud(), this.visible ? this.show() : this.hide();
      }, this.Bd = function() {
        a.pb = {};
      }, this.mb = null, this.kb = function(e2) {
        if (e2) {
          var t2 = {
            "events": {
              "preInit": function() {
                var e3 = this.data;
                e3 && (DayPilot2.isArray(e3.list) ? a.events.list = e3.list : a.events.list = e3);
              }
            }
          };
          this.mb = t2;
          for (var i2 in e2) if (t2[i2]) {
            var n2 = t2[i2];
            n2.data = e2[i2], n2.preInit && n2.preInit();
          } else a[i2] = e2[i2];
        }
      }, this.nb = function() {
        var e2 = this.mb;
        for (var t2 in e2) {
          var i2 = e2[t2];
          i2.postInit && i2.postInit();
        }
      }, this.S = function(e2, t2, i2) {
        var a2 = {};
        a2.action = e2, a2.parameters = i2, a2.data = t2, a2.header = this.R();
        var n2 = "JSON" + JSON.stringify(a2);
        this.backendUrl ? DayPilot2.request(this.backendUrl, this.T, n2, this.Cd) : WebForm_DoCallback(this.uniqueID, n2, this.U, null, this.callbackError, true);
      }, this.Cd = function(e2) {
        if ("function" == typeof a.onAjaxError) {
          var t2 = {};
          t2.request = e2, a.onAjaxError(t2);
        } else "function" == typeof a.ajaxError && a.ajaxError(e2);
      }, this.T = function(e2) {
        a.U(e2.responseText);
      }, this.Q = function(e2, t2, i2) {
        var n2 = {};
        n2.action = e2, n2.parameters = i2, n2.data = t2, n2.header = this.R();
        var o2 = "JSON" + JSON.stringify(n2);
        __doPostBack(a.uniqueID, o2);
      }, this.R = function() {
        var e2 = {};
        return e2.v = this.v, e2.startDate = this.startDate, e2.selectionStart = this.selectionStart, e2.showMonths = this.showMonths, e2;
      }, this.Dd = function(e2, t2) {
        "refresh" === e2 && this.Ad();
      }, this.md = function(e2) {
        var t2 = e2 + r.weekStarts();
        return t2 > 6 && (t2 -= 7), r.locale().dayNamesShort[t2];
      }, this.nd = function(e2) {
        return null !== this.selectionStart && null !== this.selectionEnd && this.selectionStart.getTime() <= e2.getTime() && e2.getTime() <= this.selectionEnd.getTime();
      }, this.Ed = function(e2) {
        for (var t2 = 0; t2 < a.months.length; t2++) {
          var i2 = a.months[t2];
          if (!i2) return null;
          if (e2.x < i2.left) return null;
          if (!(i2.left + i2.width < e2.x)) {
            a.months[t2].height;
            if (i2.top <= e2.y && e2.y < i2.top + i2.height) return t2;
          }
        }
        return null;
      }, this.Fd = function(e2) {
      }, this.Gd = function() {
        if (!r.bd()) return void (a.Hd = a.cellWidth);
        var e2 = a.months[0].cells[0][0], t2 = e2.clientWidth;
        a.Hd = t2, a.months.forEach(function(e3) {
          e3.width = e3.div.clientWidth, "Horizontal" === a.orientation && (e3.left = e3.div.offsetLeft), e3.cells.forEach(function(e4, i2) {
            e4.forEach(function(e5, a2) {
              e5.width = t2, e5.left = i2 * t2;
            });
          });
        });
      }, this.Id = function(e2) {
        a.Gd();
        var t2 = DayPilot2.mo3(a.nav.top, e2), i2 = a.Ed(t2);
        if (null === i2) return null;
        var n2 = a.months[i2], o2 = this.titleHeight + this.dayHeaderHeight;
        if (n2.top <= t2.y && t2.y < n2.top + o2) return {
          "month": i2,
          "x": 0,
          "y": 0,
          "coords": t2,
          "header": true
        };
        for (var r2 = 0; r2 < n2.cells.length; r2++) for (var s = 0; s < n2.cells[r2].length; s++) {
          var l = n2.cells[r2][s], d = l.top + n2.top, c = l.left + n2.left;
          if (c <= t2.x && t2.x < c + a.Hd && d <= t2.y && t2.y < d + a.cellHeight) return {
            "month": i2,
            "x": r2,
            "y": s,
            "coords": t2
          };
        }
        return null;
      }, this.Jd = function(e2) {
        if (a.freeHandSelectionEnabled) {
          var t2 = a.Id(e2);
          t2 && !t2.header && (n.start = t2), a.months[t2.month].cells[t2.x][t2.y], e2.preventDefault();
        }
      }, this.Kd = function(e2) {
        if (n.start) {
          var t2 = a.Id(e2);
          if (n.end) n.end = t2;
          else if (t2) {
            var i2 = 3, o2 = DayPilot2.distance(n.start.coords, t2.coords);
            o2 > i2 && (n.end = t2);
          }
          n.end && (n.clear(), n.draw());
        }
      }, this.Ld = {};
      var n = this.Ld;
      n.start = null, n.drawCell = function(e2) {
        var t2 = a.months[e2.month], i2 = a.pd(e2.x, e2.y), o2 = t2.top + i2.y, s = t2.left + i2.x, l = "px", d = a.jd();
        if (r.bd()) {
          var c = "Horizontal" === a.orientation ? a.showMonths : 1;
          s = t2.leftPct + i2.x / c, l = "%", d = a.jd(1 / c);
        }
        var u = document.createElement("div");
        u.style.position = "absolute", u.style.left = s + l, u.style.top = o2 + "px", u.style.height = a.cellHeight + "px", u.style.width = d, u.style.backgroundColor = "#ccc", u.style.opacity = 0.5, u.style.cursor = "default", a.nav.preselection.appendChild(u), n.cells.push(u);
      }, n.clear = function() {
        if (n.cells) {
          for (var e2 = 0; e2 < n.cells.length; e2++) a.nav.preselection.removeChild(n.cells[e2]);
          n.cells = [];
        }
      }, n.draw = function() {
        var e2 = n.ordered(), t2 = new o(e2.start), i2 = e2.end;
        if (i2) {
          if (i2 === n.end && i2.header && i2.month > 0) {
            i2.month -= 1;
            var r2 = a.months[i2.month];
            i2.x = 6, i2.y = r2.rowCount - 1;
          }
          for (n.cells = []; !t2.is(i2); ) {
            t2.visible() && n.drawCell(t2);
            var s = new o(t2).next();
            if (!s) return;
            t2.month = s.month, t2.x = s.x, t2.y = s.y;
          }
          t2.visible() && n.drawCell(t2);
        }
      }, n.ordered = function() {
        var e2 = n.start, t2 = n.end, i2 = {};
        return !t2 || new o(e2).before(t2) ? (i2.start = e2, i2.end = t2) : (i2.start = t2, i2.end = e2), i2;
      };
      var o = function(e2, t2, i2) {
        if (e2 instanceof o) return e2;
        if ("object" == typeof e2) {
          var n2 = e2;
          this.month = n2.month, this.x = n2.x, this.y = n2.y;
        } else this.month = e2, this.x = t2, this.y = i2;
        this.is = function(e3) {
          return this.month === e3.month && this.x === e3.x && this.y === e3.y;
        }, this.next = function() {
          var e3 = this;
          if (e3.x < 6) return {
            "month": e3.month,
            "x": e3.x + 1,
            "y": e3.y
          };
          var t3 = a.months[e3.month];
          return e3.y < t3.rowCount - 1 ? {
            "month": e3.month,
            "x": 0,
            "y": e3.y + 1
          } : e3.month < a.months.length - 1 ? {
            "month": e3.month + 1,
            "x": 0,
            "y": 0
          } : null;
        }, this.visible = function() {
          var e3 = this.cell();
          return !!e3.isCurrentMonth || !(!e3.isPrevMonth || !e3.showBefore) || !(!e3.isNextMonth || !e3.showAfter);
        }, this.nextVisible = function() {
          for (var e3 = this; !e3.visible(); ) {
            var t3 = e3.next();
            if (!t3) return null;
            e3 = new o(t3);
          }
          return e3;
        }, this.previous = function() {
          var e3 = this;
          if (e3.x > 0) return {
            "month": e3.month,
            "x": e3.x - 1,
            "y": e3.y
          };
          a.months[e3.month];
          if (e3.y > 0) return {
            "month": e3.month,
            "x": 6,
            "y": e3.y - 1
          };
          if (e3.month > 0) {
            var t3 = a.months[e3.month - 1];
            return {
              "month": e3.month - 1,
              "x": 6,
              "y": t3.rowCount - 1
            };
          }
          return null;
        }, this.previousVisible = function() {
          for (var e3 = this; !e3.visible(); ) {
            var t3 = e3.previous();
            if (!t3) return null;
            e3 = new o(t3);
          }
          return e3;
        }, this.cell = function() {
          return a.months[this.month].cells[this.x][this.y];
        }, this.date = function() {
          return this.cell().day;
        }, this.before = function(e3) {
          return this.date() < new o(e3).date();
        };
      };
      this.qd = function(e2) {
        var t2 = this.parentNode, i2 = this.parentNode.month, n2 = this.x, o2 = this.y, r2 = i2.cells[n2][o2].day;
        if (i2.cells[n2][o2].isClickable) {
          a.clearSelection(), a.selectionDay = r2;
          var r2 = a.selectionDay;
          switch (a.od()) {
            case "none":
              a.selectionStart = r2, a.selectionEnd = r2;
              break;
            case "day":
              if (a.autoFocusOnClick) {
                var s = r2;
                if (r2 < a.xd() || r2 >= a.yd()) return void a.select(r2);
              }
              var l = i2.cells[n2][o2];
              a.rd(t2, n2, o2), a.selected.push(l), a.selectionStart = l.day, a.selectionEnd = l.day;
              break;
            case "week":
              if (a.autoFocusOnClick) {
                var s = i2.cells[0][o2].day, d = i2.cells[6][o2].day;
                if (s.firstDayOfMonth() === d.firstDayOfMonth() && (s < a.xd() || d >= a.yd())) return void a.select(r2);
              }
              for (var c = 0; c < 7; c++) a.rd(t2, c, o2), a.selected.push(i2.cells[c][o2]);
              a.selectionStart = i2.cells[0][o2].day, a.selectionEnd = i2.cells[6][o2].day;
              break;
            case "month":
              if (a.autoFocusOnClick) {
                var s = r2;
                if (r2 < a.xd() || r2 >= a.yd()) return void a.select(r2);
              }
              for (var s = null, d = null, o2 = 0; o2 < 6; o2++) for (var n2 = 0; n2 < 7; n2++) {
                var l = i2.cells[n2][o2];
                l && l.day.getYear() === r2.getYear() && l.day.getMonth() === r2.getMonth() && (a.rd(t2, n2, o2), a.selected.push(l), null === s && (s = l.day), d = l.day);
              }
              a.selectionStart = s, a.selectionEnd = d;
              break;
            default:
              throw "unknown selectMode";
          }
          a.ud(), a.M();
        }
      }, this.M = function(e2) {
        var t2 = a.selectionStart, i2 = a.selectionEnd.addDays(1), n2 = DayPilot2.DateUtil.daysDiff(t2, i2), o2 = a.selectionDay;
        if (e2 = e2 || {}, a.ra()) {
          var r2 = {};
          if (r2.start = t2, r2.end = i2, r2.day = o2, r2.days = n2, r2.mode = e2.mode || a.selectMode, r2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof a.onTimeRangeSelect && (a.onTimeRangeSelect(r2), r2.preventDefault.value)) return;
          switch (a.timeRangeSelectedHandling) {
            case "Bind":
              if ("object" == typeof bound) {
                var s = {};
                s.start = t2, s.end = i2, s.days = n2, s.day = o2, bound.commandCallBack(a.command, s);
              }
              break;
            case "None":
              break;
            case "PostBack":
              a.timeRangeSelectedPostBack(t2, i2, o2);
          }
          "function" == typeof a.onTimeRangeSelected && a.onTimeRangeSelected(r2);
        } else switch (a.timeRangeSelectedHandling) {
          case "Bind":
            if ("object" == typeof bound) {
              var s = {};
              s.start = t2, s.end = i2, s.days = n2, s.day = o2, bound.commandCallBack(a.command, s);
            }
            break;
          case "JavaScript":
            a.onTimeRangeSelected(t2, i2, o2);
            break;
          case "None":
            break;
          case "PostBack":
            a.timeRangeSelectedPostBack(t2, i2, o2);
        }
      }, this.timeRangeSelectedPostBack = function(e2, t2, i2, a2) {
        var n2 = {};
        n2.start = e2, n2.end = t2, n2.day = a2, this.Q("TimeRangeSelected", i2, n2);
      }, this.ld = function(e2) {
        a.Md(a.skipMonths);
      }, this.kd = function(e2) {
        a.Md(-a.skipMonths);
      }, this.Md = function(e2) {
        this.startDate = this.startDate.addMonths(e2), this.Vc(), this.ad(), this.zd(), this.ud(), this.Ad(), this.td();
      }, this.xd = function() {
        return a.startDate.firstDayOfMonth();
      }, this.yd = function() {
        return a.startDate.firstDayOfMonth().addMonths(this.showMonths);
      }, this.visibleStart = function() {
        return a.startDate.firstDayOfMonth().firstDayOfWeek(r.weekStarts());
      }, this.visibleEnd = function() {
        return a.startDate.firstDayOfMonth().addMonths(this.showMonths - 1).firstDayOfWeek(r.weekStarts()).addDays(42);
      }, this.Ad = function() {
        var e2 = this.visibleStart(), t2 = this.visibleEnd();
        if (a.ra()) {
          var i2 = {};
          if (i2.start = e2, i2.end = t2, i2.preventDefault = function() {
            this.preventDefault.value = true;
          }, "function" == typeof a.onVisibleRangeChange && (a.onVisibleRangeChange(i2), i2.preventDefault.value)) return;
          switch (this.visibleRangeChangedHandling) {
            case "CallBack":
              this.visibleRangeChangedCallBack(null);
              break;
            case "PostBack":
              this.visibleRangeChangedPostBack(null);
              break;
            case "Disabled":
          }
          "function" == typeof a.onVisibleRangeChanged && a.onVisibleRangeChanged(i2);
        } else switch (this.visibleRangeChangedHandling) {
          case "CallBack":
            this.visibleRangeChangedCallBack(null);
            break;
          case "PostBack":
            this.visibleRangeChangedPostBack(null);
            break;
          case "JavaScript":
            this.onVisibleRangeChanged(e2, t2);
            break;
          case "Disabled":
        }
      }, this.visibleRangeChangedCallBack = function(e2) {
        var t2 = {};
        this.S("Visible", e2, t2);
      }, this.visibleRangeChangedPostBack = function(e2) {
        var t2 = {};
        this.Q("Visible", e2, t2);
      }, this.U = function(e2, t2) {
        var e2 = JSON.parse(e2);
        a.items = e2.Items, a.cells = e2.Cells, a.cells ? a.update() : a.td();
      }, this.zd = function() {
        for (var e2 = 0; e2 < this.showMonths; e2++) {
          var t2 = this.Nd(e2);
          this.Wc(e2, t2);
        }
        this.root.style.height = this.Od() + "px", this.nav.preselection = document.createElement("div"), this.nav.preselection.style.position = "absolute", this.nav.preselection.style.left = "0px", this.nav.preselection.style.right = "0px", this.nav.preselection.style.top = "0px", this.root.appendChild(this.nav.preselection);
      }, this.Od = function() {
        if ("Horizontal" === this.orientation) {
          for (var e2 = 0, t2 = 0; t2 < this.months.length; t2++) {
            var i2 = this.months[t2];
            i2.height > e2 && (e2 = i2.height);
          }
          return e2;
        }
        for (var a2 = 0, t2 = 0; t2 < this.months.length; t2++) {
          var i2 = this.months[t2];
          a2 += i2.height;
        }
        return a2;
      }, this.Nd = function(e2) {
        if (this.internal.showLinks) return this.internal.showLinks;
        var t2 = {};
        return t2.left = 0 === e2, t2.right = 0 === e2, t2.before = 0 === e2, t2.after = e2 === this.showMonths - 1, "Horizontal" === this.orientation && (t2.right = e2 === this.showMonths - 1), t2;
      }, this.ta = {}, this.ta.scope = null, this.ta.notify = function() {
        a.ta.scope && a.ta.scope["$apply"]();
      }, this.Ia = {}, this.Ia.Ha = null, this.Ia.Db = function(e2, t2, i2) {
        var n2 = a.Ia.Ha;
        if ("function" == typeof n2.createVNode && "function" == typeof n2.render) {
          var o2 = n2.createVNode(e2, i2);
          n2.render(o2, t2);
        }
      }, this.Ia.Ma = function(e2, t2) {
        var i2 = a.Ia.Ha;
        if ("function" == typeof i2.render) {
          var n2 = e2;
          DayPilot2.isArray(e2) && (n2 = i2.h("div", null, e2)), i2.render(n2, t2);
        }
      }, this.Ia.Ka = function(e2) {
        var t2 = a.Ia.Ha;
        "function" == typeof t2.render && t2.render(null, e2);
      }, this.internal = {}, this.internal.loadOptions = a.kb, this.internal.initialized = function() {
        return a.Ca;
      }, this.internal.vueRendering = function() {
        return false;
      }, this.internal.enableVue = function(e2) {
        a.Ia.Ha = e2;
      }, this.internal.vueRef = function() {
        return a.Ia.Ha;
      }, this.internal.vueRendering = function() {
        return a.Ia.Ja;
      }, this.aa = {};
      var r = this.aa;
      r.locale = function() {
        return DayPilot2.Locale.find(a.locale);
      }, r.weekStarts = function() {
        if ("Auto" === a.weekStarts) {
          var e2 = r.locale();
          return e2 ? e2.weekStarts : 0;
        }
        return a.weekStarts;
      }, r.cellWidth = function() {
        if (a.pb.cellWidth) return a.pb.cellWidth;
        var e2 = a.Pd("_cell_dimensions").width;
        return e2 || (e2 = a.cellWidth), a.pb.cellWidth = e2, e2;
      }, r.bd = function() {
        return "Auto" === a.aa.cellWidth();
      }, this.clearSelection = function() {
        for (var e2 = 0; e2 < this.selected.length; e2++) {
          var t2 = this.selected[e2];
          a.sd(t2.parentNode, t2.x, t2.y);
        }
        this.selected = [];
      }, this.Qd = function() {
        return !!this.backendUrl && ("undefined" == typeof a.items || !a.items);
      }, this.events = {}, this.fa = function() {
        if (DayPilot2.isArray(this.events.list)) {
          this.items = {};
          for (var e2 = 0; e2 < this.events.list.length; e2++) {
            var t2 = this.events.list[e2];
            if (!t2.hidden) {
              var i2 = this.Rd(t2);
              for (var a2 in i2) this.items[a2] = 1;
            }
          }
        }
      }, this.Pd = function(e2) {
        var t2 = document.createElement("div");
        t2.style.position = "absolute", t2.style.top = "-2000px", t2.style.left = "-2000px", t2.className = this.K(e2);
        var i2 = a.root || document.body;
        i2.appendChild(t2);
        var n2 = t2.offsetHeight, o2 = t2.offsetWidth;
        i2.removeChild(t2);
        var r2 = {};
        return r2.height = n2, r2.width = o2, r2;
      }, this.Rd = function(e2) {
        for (var t2 = new DayPilot2.Date(e2.start), i2 = new DayPilot2.Date(e2.end), a2 = {}, n2 = t2.getDatePart(); n2.getTime() <= i2.getTime(); ) a2[n2.toStringSortable()] = 1, n2 = n2.addDays(1);
        return a2;
      }, this.show = function() {
        a.visible = true, a.root.style.display = "";
      }, this.hide = function() {
        a.visible = false, a.root.style.display = "none";
      }, this.ob = function() {
        if (this.id && this.id.tagName) this.nav.top = this.id;
        else {
          if ("string" != typeof this.id) throw "DayPilot.Navigator() constructor requires the target element or its ID as a parameter";
          if (this.nav.top = document.getElementById(this.id), !this.nav.top) throw "DayPilot.Navigator: The placeholder element not found: '" + t + "'.";
        }
        this.root = this.nav.top;
      }, this.init = function() {
        if (this.ob(), !this.root.dp) {
          this.vd(), this.ad(), this.zd(), this.fa(), this.td(), this.Z(), this.Sd(), this.hb();
          if (this.Qd() && this.Ad(), this.Ca = true, this.nb(), this.wd) {
            var e2 = this.wd;
            this.select(e2.date1, e2.date2, e2.options), this.wd = null;
          }
          return this;
        }
      }, this.Sd = function() {
        a.nav.top.onmousedown = this.Jd, a.nav.top.onmousemove = this.Kd;
      }, this.hb = function() {
        DayPilot2.re(document, "mouseup", a.Td);
      }, this.Td = function(e2) {
        if (n.start && n.end) {
          var t2 = DayPilot2.mo3(a.nav.top, e2);
          if (t2.x === n.start.coords.x && t2.y === n.start.coords.y) return n.start = null, void n.clear();
          n.clear();
          var i2 = n.ordered();
          i2.start = new o(i2.start).nextVisible(), i2.end = new o(i2.end).previousVisible(), a.selectionDay = new o(i2.start).date(), a.selectionStart = a.selectionDay, a.selectionEnd = new o(i2.end).date(), n.start = null, n.end = null, a.Vc(), a.ad(), a.zd(), a.td(), a.ud();
          a.M({
            "mode": "FreeHand"
          });
        }
        n.start = null, n.end = null;
      }, this.dispose = function() {
        var e2 = a;
        e2.root && (e2.root.removeAttribute("style"), e2.root.removeAttribute("class"), e2.root.dp = null, e2.root.innerHTML = null, e2.root = null, e2.O = true);
      }, this.Z = function() {
        this.root.dispose = this.dispose;
      }, this.Init = this.init, this.kb(i);
    }, "undefined" != typeof jQuery && !function(e2) {
      e2.fn.daypilotNavigator = function(e3) {
        var t = null, i = this.each(function() {
          if (!this.daypilot) {
            var i2 = new DayPilot2.Navigator(this.id);
            this.daypilot = i2;
            for (var a in e3) i2[a] = e3[a];
            i2.Init(), t || (t = i2);
          }
        });
        return 1 === this.length ? t : i;
      };
    }(jQuery), function() {
      var e2 = DayPilot2.am();
      e2 && e2.directive("daypilotNavigator", ["$parse", function(e3) {
        return {
          "restrict": "E",
          "template": "<div id='{{id}}'></div>",
          "compile": function(t, i) {
            return t.replaceWith(this["template"].replace("{{id}}", i["id"])), function(t2, i2, a) {
              var n = new DayPilot2.Navigator(i2[0]);
              n.ta.scope = t2, n.init();
              var o = a["id"];
              o && (t2[o] = n);
              var r = a["publishAs"];
              if (r) {
                (0, e3(r).assign)(t2, n);
              }
              for (var s in a) if (0 === s.indexOf("on")) {
                var l = DayPilot2.Util.shouldApply(s);
                l ? !function(i3) {
                  n[i3] = function(n2) {
                    var o2 = e3(a[i3]);
                    t2["$apply"](function() {
                      o2(t2, {
                        "args": n2
                      });
                    });
                  };
                }(s) : !function(i3) {
                  n[i3] = function(n2) {
                    e3(a[i3])(t2, {
                      "args": n2
                    });
                  };
                }(s);
              }
              var d = t2["$watch"], c = a["config"] || a["daypilotConfig"], u = a["events"] || a["daypilotEvents"];
              d.call(t2, c, function(e4, t3) {
                for (var i3 in e4) n[i3] = e4[i3];
                n.update();
              }, true), d.call(t2, u, function(e4) {
                n.events.list = e4, n.fa(), n.td();
              }, true);
            };
          }
        };
      }]);
    }(), DayPilot2.Navigator.def = {}, "undefined" != typeof Sys && Sys.Application && Sys.Application.notifyScriptLoaded && Sys.Application.notifyScriptLoaded();
  }
}(DayPilot);
function rand() {
  return (1 + Math.random()) * 65536 | 0;
}
function optHash(options) {
  return JSON.stringify(options);
}
var DayPilotCalendarComponent = class {
  constructor() {
    this.viewChange = new EventEmitter();
    this.events = [];
    this._requestUpdateFull = false;
    this._requestUpdateEvents = false;
    this._requestViewChange = false;
    this._hashOptions = "";
    this._hashEvents = "";
    this._id = "dp_" + (/* @__PURE__ */ new Date()).getTime() + rand();
  }
  get id() {
    return this._id;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.dispose();
  }
  ngAfterViewInit() {
    this.dispose();
    let dp = new DayPilot.Calendar(this.id);
    this.control = dp;
    this.updateOptions();
    this.updateEvents();
    this._requestUpdateFull = false;
    this._requestUpdateEvents = false;
    dp.init();
  }
  ngDoCheck() {
    if (!this.control) {
      return;
    }
    this.updateOptions();
    this.updateEvents();
    if (this._requestUpdateFull) {
      this.control.update();
      this._requestUpdateFull = false;
      this._requestUpdateEvents = false;
    } else if (this._requestUpdateEvents) {
      this.control.update({
        "events": this.events
      });
      this._requestUpdateEvents = false;
    }
    if (this._requestViewChange) {
      this._requestViewChange = false;
      let args = {};
      this.viewChange.emit(args);
    }
  }
  dispose() {
    if (this.control) {
      this.control.dispose();
      this.control = null;
    }
  }
  updateOptions() {
    let hash = optHash(this.config);
    if (hash !== this._hashOptions) {
      let dp = this.control;
      dp.internal.loadOptions(this.config);
      this._requestUpdateFull = true;
      this._requestViewChange = true;
    }
    this._hashOptions = hash;
  }
  updateEvents() {
    let hash = optHash(this.events);
    if (hash !== this._hashEvents) {
      let dp = this.control;
      if (dp) {
        dp.events.list = this.events;
      }
      this._requestUpdateEvents = true;
    }
    this._hashEvents = hash;
  }
};
DayPilotCalendarComponent.ɵfac = function DayPilotCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DayPilotCalendarComponent)();
};
DayPilotCalendarComponent.ɵcmp = ɵɵdefineComponent({
  type: DayPilotCalendarComponent,
  selectors: [["daypilot-calendar"]],
  inputs: {
    events: "events",
    config: "config"
  },
  outputs: {
    viewChange: "viewChange"
  },
  standalone: false,
  decls: 1,
  vars: 1,
  consts: [[3, "id"]],
  template: function DayPilotCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵpropertyInterpolate("id", ctx.id);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayPilotCalendarComponent, [{
    type: Component,
    args: [{
      selector: "daypilot-calendar",
      template: `
    <div id='{{id}}'></div>`,
      styles: [``]
    }]
  }], null, {
    viewChange: [{
      type: Output
    }],
    events: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var DayPilotMonthComponent = class {
  constructor() {
    this.events = [];
    this._requestUpdate = false;
    this._hashOptions = "";
    this._hashEvents = "";
    this._id = "dp_" + (/* @__PURE__ */ new Date()).getTime() + rand();
  }
  get id() {
    return this._id;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.dispose();
  }
  ngAfterViewInit() {
    this.dispose();
    this.control = new DayPilot.Month(this.id);
    this.updateOptions();
    this.updateEvents();
    this._requestUpdate = false;
    this.control.init();
  }
  ngDoCheck() {
    if (!this.control) {
      return;
    }
    this.updateOptions();
    this.updateEvents();
    if (this._requestUpdate) {
      this.control.update();
      this._requestUpdate = false;
    }
  }
  dispose() {
    if (this.control) {
      this.control.dispose();
      this.control = null;
    }
  }
  updateOptions() {
    let hash = optHash(this.config);
    if (hash !== this._hashOptions) {
      let dp = this.control;
      dp.internal.loadOptions(this.config);
      this._requestUpdate = true;
    }
    this._hashOptions = hash;
  }
  updateEvents() {
    let hash = optHash(this.events);
    if (hash !== this._hashEvents) {
      let dp = this.control;
      dp.events.list = this.events;
      this._requestUpdate = true;
    }
    this._hashEvents = hash;
  }
};
DayPilotMonthComponent.ɵfac = function DayPilotMonthComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DayPilotMonthComponent)();
};
DayPilotMonthComponent.ɵcmp = ɵɵdefineComponent({
  type: DayPilotMonthComponent,
  selectors: [["daypilot-month"]],
  inputs: {
    events: "events",
    config: "config"
  },
  standalone: false,
  decls: 1,
  vars: 1,
  consts: [[3, "id"]],
  template: function DayPilotMonthComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵpropertyInterpolate("id", ctx.id);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayPilotMonthComponent, [{
    type: Component,
    args: [{
      selector: "daypilot-month",
      template: `
    <div id='{{id}}'></div>`,
      styles: [``]
    }]
  }], null, {
    events: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var DayPilotNavigatorComponent = class {
  constructor() {
    this.events = [];
    this.dateChange = new EventEmitter();
    this._requestUpdate = false;
    this._hashOptions = "";
    this._hashEvents = "";
    this._onTrs = null;
    this._dateSet = false;
    this._currentDate = null;
    this._date = DayPilot.Date.today();
    this._id = "dp_" + (/* @__PURE__ */ new Date()).getTime() + rand();
  }
  get date() {
    return this._date;
  }
  // @Input() date: DayPilot.Date = DayPilot.Date.today();
  set date(value) {
    this._date = value;
    this._dateSet = true;
  }
  get id() {
    return this._id;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.dispose();
  }
  ngAfterViewInit() {
    this.dispose();
    this.control = new DayPilot.Navigator(this.id);
    let component = this;
    this.updateOptions();
    this.updateEvents();
    let dp = this.control;
    this.control.onTimeRangeSelected = function(args) {
      component.dateChange.emit(args.day);
      if (component._onTrs) {
        component._onTrs.call(dp, args);
      }
    };
    this._requestUpdate = false;
    this.control.init();
    if (this.control.selectionDay !== DayPilot.Date.today()) {
      component.dateChange.emit(this.control.selectionDay);
    }
  }
  ngDoCheck() {
    if (!this.control) {
      return;
    }
    this.updateOptions();
    this.updateEvents();
    if (this._requestUpdate) {
      this.control.update();
      this._requestUpdate = false;
    }
  }
  dispose() {
    if (this.control) {
      this.control.dispose();
      this.control = null;
    }
  }
  updateOptions() {
    let dp = this.control;
    let hash = optHash(this.config);
    if (hash !== this._hashOptions) {
      for (let name2 in this.config) {
        if (name2 === "selectionDay") {
          continue;
        }
        if (name2 === "onTimeRangeSelected") {
          this._onTrs = this.config.onTimeRangeSelected;
        } else {
          dp[name2] = this.config[name2];
        }
        this._requestUpdate = true;
      }
    }
    if (this._dateSet && this.date) {
      this._dateSet = false;
      this._currentDate = dp.selectionDay;
      dp.select(this.date);
    }
    this._hashOptions = hash;
  }
  updateEvents() {
    let hash = optHash(this.events);
    if (hash !== this._hashEvents) {
      let dp = this.control;
      dp.events.list = this.events;
      this._requestUpdate = true;
    }
    this._hashEvents = hash;
  }
};
DayPilotNavigatorComponent.ɵfac = function DayPilotNavigatorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DayPilotNavigatorComponent)();
};
DayPilotNavigatorComponent.ɵcmp = ɵɵdefineComponent({
  type: DayPilotNavigatorComponent,
  selectors: [["daypilot-navigator"]],
  inputs: {
    events: "events",
    config: "config",
    date: "date"
  },
  outputs: {
    dateChange: "dateChange"
  },
  standalone: false,
  decls: 1,
  vars: 1,
  consts: [[3, "id"]],
  template: function DayPilotNavigatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵpropertyInterpolate("id", ctx.id);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayPilotNavigatorComponent, [{
    type: Component,
    args: [{
      selector: "daypilot-navigator",
      template: `
    <div id='{{id}}'></div>`,
      styles: [``]
    }]
  }], null, {
    events: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    dateChange: [{
      type: Output
    }],
    date: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [DayPilotCalendarComponent, DayPilotMonthComponent, DayPilotNavigatorComponent];
var DayPilotModule = class {
};
DayPilotModule.ɵfac = function DayPilotModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DayPilotModule)();
};
DayPilotModule.ɵmod = ɵɵdefineNgModule({
  type: DayPilotModule,
  declarations: [DayPilotCalendarComponent, DayPilotMonthComponent, DayPilotNavigatorComponent],
  exports: [DayPilotCalendarComponent, DayPilotMonthComponent, DayPilotNavigatorComponent]
});
DayPilotModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayPilotModule, [{
    type: NgModule,
    args: [{
      declarations: [...COMPONENTS],
      imports: [],
      exports: [...COMPONENTS]
    }]
  }], null, null);
})();
export {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotModule,
  DayPilotMonthComponent,
  DayPilotNavigatorComponent
};
//# sourceMappingURL=@daypilot_daypilot-lite-angular.js.map
