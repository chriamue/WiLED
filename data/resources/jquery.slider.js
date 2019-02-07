"use strict";
var _createClass = function() {
    function i(t, s) {
        for (var e = 0; e < s.length; e++) {
            var i = s[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, s, e) {
        return s && i(t.prototype, s), e && i(t, e), t
    }
}();

function _classCallCheck(t, s) {
    if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
}! function(l) {
    "use_strict";
    var e = function() {
        function a(t, s) {
            var e = this;
            if (_classCallCheck(this, a), this.element = t, this.min = this.element.attr("min") || s.min, this.max = this.element.attr("max") || s.max, this.step = this.element.attr("step") || s.step, this.value = this.element.attr("value") || (s.max - s.min) / 2 + s.min, this.decimals = this.element.data("decimals") || s.decimals, this.prefix = this.element.data("prefix") || s.prefix, this.postfix = this.element.data("postfix") || s.postfix, this.toggleBubble = this.element.data("toggle-bubble") || s.toggleBubble, this.toggleLimit = this.element.data("toggle-limit") || s.toggleLimit, this.bubbleColor = this.element.data("bubble-color") || s.bubbleColor, this.bubbleFontScale = this.element.data("bubble-font-scale") || s.bubbleFontScale, this.bubbleFontColor = this.element.data("bubble-font-color") || s.bubbleFontColor, this.thumbScale = this.element.data("thumb-scale") || s.thumbScale, this.thumbColor = this.element.data("thumb-color") || s.thumbColor, this.thumbFontScale = this.element.data("thumb-font-scale") || s.thumbFontScale, this.thumbFontColor = this.element.data("thumb-font-color") || s.thumbFontColor, this.trackScale = this.element.data("track-scale") || s.trackScale, this.trackColor = this.element.data("track-color") || s.trackColor, this.element.hide(), this.min = parseFloat(this.removeCommas(this.min)), this.max = parseFloat(this.removeCommas(this.max)), this.step = parseFloat(this.removeCommas(this.step)), this.value = parseFloat(this.removeCommas(this.value)), this.decimals = parseFloat(this.removeCommas(this.decimals)), this.toggleLimit = parseFloat(this.removeCommas(this.toggleLimit)), this.bubbleFontScale = parseFloat(this.removeCommas(this.bubbleFontScale)), this.thumbScale = parseFloat(this.removeCommas(this.thumbScale)), this.thumbFontScale = parseFloat(this.removeCommas(this.thumbFontScale)), this.trackScale = parseFloat(this.removeCommas(this.trackScale)), this.slider = l("<div>").addClass("jquery-slider__wrap").insertAfter(this.element), this.minus = l("<div><span>-</span></div>").addClass("jquery-slider__minus").appendTo(this.slider), this.plus = l("<div><span>+</span></div>").addClass("jquery-slider__plus").appendTo(this.slider), this.track = l("<div>").addClass("jquery-slider__track").appendTo(this.slider), this.thumb = l("<div><span>").addClass("jquery-slider__thumb").appendTo(this.track), this.bubble = l("<div><span>").addClass("jquery-slider__bubble").appendTo(this.thumb), this.bubbleArrow = l("<div>").addClass("jquery-slider__bubble-arrow").prependTo(this.bubble), this.thumbSpan = this.thumb.find("span").first(), this.bubbleSpan = this.bubble.find("span").first(), 1 !== this.bubbleFontScale && (this.bubble.css({
                    "font-size": parseFloat(this.bubble.css("font-size")) * this.bubbleFontScale + "px",
                    "border-radius": parseFloat(this.bubble.css("border-radius")) * this.bubbleFontScale + "px"
                }), this.bubbleArrow.css({
                    width: parseFloat(this.bubbleArrow.css("width")) * this.bubbleFontScale + "px",
                    height: parseFloat(this.bubbleArrow.css("height")) * this.bubbleFontScale + "px"
                })), 1 !== this.thumbScale && this.thumb.css({
                    width: parseFloat(this.thumb.css("width")) * this.thumbScale + "px",
                    height: parseFloat(this.thumb.css("height")) * this.thumbScale + "px"
                }), 1 !== this.thumbFontScale && this.thumbSpan.css({
                    "font-size": parseFloat(this.thumbSpan.css("font-size")) * this.thumbFontScale + "px"
                }), 1 !== this.trackScale && (this.minus.css({
                    width: Math.round(parseFloat(this.minus.css("width")) * this.trackScale) + "px",
                    height: Math.round(parseFloat(this.minus.css("height")) * this.trackScale) + "px",
                    "font-size": Math.round(parseFloat(this.minus.css("font-size")) * this.trackScale) + "px"
                }), this.plus.css({
                    width: Math.round(parseFloat(this.plus.css("width")) * this.trackScale) + "px",
                    height: Math.round(parseFloat(this.plus.css("height")) * this.trackScale) + "px",
                    "font-size": Math.round(parseFloat(this.plus.css("font-size")) * this.trackScale) + "px"
                }), this.track.css({
                    left: parseFloat(this.minus.outerWidth()) + .2 * this.minus.outerWidth() + "px",
                    right: parseFloat(this.plus.outerWidth()) + .2 * this.plus.outerWidth() + "px"
                })), 1 !== this.bubbleFontScale || 1 !== this.thumbScale || 1 !== this.trackScale) {
                var i = this.thumb.outerHeight() > this.plus.outerHeight() ? this.thumb.outerHeight() : this.plus.outerHeight(),
                    h = this.bubble.outerHeight();
                this.slider.css({
                    margin: parseFloat(i) + parseFloat(h) + "px auto"
                })
            }
            this.bubbleColor && (this.bubbleArrow.css("background", this.bubbleColor), this.bubble.css("background", this.bubbleColor)), this.bubbleFontColor && this.bubbleSpan.css("color", this.bubbleFontColor), this.thumbColor && (this.minus.css("color", this.thumbColor), this.plus.css("color", this.thumbColor), this.thumb.css("background", this.thumbColor)), this.thumbFontColor && this.thumbSpan.css("color", this.thumbFontColor), this.trackColor && (this.minus.css("border-color", this.trackColor), this.plus.css("border-color", this.trackColor), this.track.css("background", this.trackColor)), this.dragging = !1, this.thumbOffset = this.thumb.outerWidth() / 2, this.setValue(this.value), this.positionThumb(this.value), this.toggleBubble && this.value.toString().length <= this.toggleLimit ? (this.bubble.hide(), this.thumbSpan.show()) : this.thumbSpan.hide(), this.thumb.css("-ms-touch-action", "none"), this.thumb.on("mousedown touchstart", function(t) {
                e.dragging || (t.preventDefault(), e.dragging = !0, e.bubbleState(!0))
            }), l("html").on("mousemove touchmove", function(t) {
                e.dragging && (t.preventDefault(), "touchmove" === t.type ? e.dragThumb(t.originalEvent.touches[0].pageX) : e.dragThumb(t.originalEvent.pageX))
            }).on("mouseup touchend", function(t) {
                e.dragging && (t.preventDefault(), e.dragging = !1, e.bubbleState(!1))
            }), this.minus.on("click", function(t) {
                t.preventDefault();
                var s = e.value - e.step;
                s = Math.max(e.min, s), e.setValue(s), e.positionThumb(s)
            }), this.plus.on("click", function(t) {
                t.preventDefault();
                var s = e.value + e.step;
                s = Math.min(e.max, s), e.setValue(s), e.positionThumb(s)
            }), l(window).on("resize onorientationchange", function() {
                e.positionThumb(e.value)
            })
        }
        return _createClass(a, [{
            key: "dragThumb",
            value: function(t) {
                var s = this.track.offset().left + this.thumbOffset,
                    e = this.track.offset().left + this.track.innerWidth() - this.thumbOffset,
                    i = Math.max(s, t);
                i = Math.min(e, i), this.setValue(this.calcValue()), this.thumb.offset({
                    left: i - this.thumbOffset
                })
            }
        }, {
            key: "calcValue",
            value: function() {
                return this.normalize(this.thumb.position().left, 0, this.track.innerWidth() - 2 * this.thumbOffset) * (this.max - this.min) + this.min
            }
        }, {
            key: "setValue",
            value: function(t) {
                this.value = Math.round((t - this.min) / this.step) * this.step + this.min, this.element.val(this.value);
                var i = this.addCommas(this.value.toFixed(this.decimals));
				var s = this.prefix + i + this.postfix;
                return this.thumbSpan.text(i), this.bubbleSpan.text(s)
            }
        }, {
            key: "positionThumb",
            value: function(t) {
                var s = this.normalize(t, this.min, this.max);
                this.thumb.offset({
                    left: Math.round(s * (this.track.innerWidth() - 2 * this.thumbOffset) + this.track.offset().left)
                })
            }
        }, {
            key: "bubbleState",
            value: function(t) {
                this.toggleBubble && (t ? (this.bubble.stop(!0, !0).fadeIn(300), this.thumbSpan.stop(!0, !0).fadeOut(200)) : this.value.toString().length <= this.toggleLimit && (this.bubble.stop(!0, !0).fadeOut(300), this.thumbSpan.stop(!0, !0).fadeIn(200)))
            }
        }, {
            key: "normalize",
            value: function(t, s, e) {
                return (t - s) / (e - s)
            }
        }, {
            key: "addCommas",
            value: function(t) {
                return t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            }
        }, {
            key: "removeCommas",
            value: function(t) {
                return t.toString().replace(/,/g, "")
            }
        }]), a
    }();
    l.fn.slider = function(t) {
        var s = l.extend({}, {
            min: 0,
            max: 100,
            step: 1,
            value: 50,
            decimals: 0,
            prefix: "",
            postfix: "",
            toggleBubble: !1,
            toggleLimit: 3,
            bubbleColor: "",
            bubbleFontScale: 1,
            bubbleFontColor: "",
            thumbScale: 1,
            thumbColor: "",
            thumbFontScale: 1,
            thumbFontColor: "",
            trackScale: 1,
            trackColor: ""
        }, l.fn.slider.defaults, t);
        return new e(l(this), s)
    }, l(function() {
        l(".jquery-slider").each(function() {
            l(this).slider()
        })
    })
}(jQuery);