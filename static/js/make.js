! function(t) {
    function e(t, e) { if (!(t.originalEvent.touches.length > 1)) { t.preventDefault(); var a = t.originalEvent.changedTouches[0],
                o = document.createEvent("MouseEvents");
            o.initMouseEvent(e, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(o) } } if (t.support.touch = "ontouchend" in document, t.support.touch) { var a, o = t.ui.mouse.prototype,
            i = o._mouseInit,
            n = o._mouseDestroy;
        o._touchStart = function(t) {!a && this._mouseCapture(t.originalEvent.changedTouches[0]) && (a = !0, this._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown")) }, o._touchMove = function(t) { a && (this._touchMoved = !0, e(t, "mousemove")) }, o._touchEnd = function(t) { a && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), a = !1) }, o._mouseInit = function() { this.element.bind({ touchstart: t.proxy(this, "_touchStart"), touchmove: t.proxy(this, "_touchMove"), touchend: t.proxy(this, "_touchEnd") }), i.call(this) }, o._mouseDestroy = function() { this.element.unbind({ touchstart: t.proxy(this, "_touchStart"), touchmove: t.proxy(this, "_touchMove"), touchend: t.proxy(this, "_touchEnd") }), n.call(this) } } }(jQuery);
var make_canvas, zoomed_canvas, scale_and_rotate_desktop, face_img;
$(window).load(function() {}), $(window).ready(function() { face_img = document.getElementById("face-image"), make_canvas = document.getElementById("make-canvas"), zoomed_canvas = document.getElementById("zoomed-canvas"), scale_and_rotate_desktop = document.getElementById("scale-and-rotate-desktop"), 11 == window.location.search.length ? startNodding(window.location.search.substring(1, 11)) : $("#import-image").change(importImage), positionWrap() }), $(window).resize(positionWrap);

function positionWrap() { height = $(window).height(), height < 500 && (height = 500), width = .75 * (height - 38), width > $(window).width() && (width = $(window).width(), height = width / .75 + 38), $("#main-wrap").css({ width: width, height: height }) }
$(window).ready(function() { $(".select-image").click(function(t) { document.getElementById("import-image").click(), $("#instruction-1").text(labels[lang].move_photo), t.preventDefault() }), $("#page-02-transform-image input.next").click(function(t) { $("#page-02-transform-image").hide(400), $("#page-03-mark-image").show(400), drawMouth(), $("#instruction-1").text(labels[lang].mark), t.preventDefault() }), $("#page-03-mark-image input.back").click(function(t) { $("#page-02-transform-image").show(400), $("#page-03-mark-image").hide(400), drawImage(), $("#instruction-1").text(labels[lang].move_photo), t.preventDefault() }), $("#page-03-mark-image input.next").click(function(t) { drawImage(), marker_data = markerData(), nod_init(make_canvas.toDataURL("image/jpeg"), marker_data), $("#page-02-03-make").hide(0), $("#page-04-nod").show(0), t.preventDefault() }), $("#page-04-nod input.back").click(function(t) { $("#page-02-03-make").show(0), $("#page-04-nod").hide(0), clearInterval(at), t.preventDefault() }), $("#page-04-nod input.next").click(function(t) { $(".name-dialog").css("display", "block"), $("#name-input").focus(), t.preventDefault() }), $("#page-04-nod input.next-2").click(function(t) { $(this).val(labels[lang].saving), $(this).css("pointer-events", "none"), storeData(), t.preventDefault() }) });
var face_img_width, face_img_height, desktop_base_scale, desktop_base_scale_dist, desktop_base_rotate, desktop_base_rotate_angle, marker_data, face_img_offsetX = 0,
    face_img_offsetY = 0,
    face_img_scale = 1,
    face_img_rotate = 0,
    base_img_offsetX = 384;
$(window).ready(function() { "ontouchstart" in document.documentElement && (make_canvas.addEventListener("touchstart", touchStart, !0), make_canvas.addEventListener("touchend", touchEnd, !0), make_canvas.addEventListener("touchmove", touchMove, !0), $("#scale-and-rotate-desktop").hide()), make_canvas.addEventListener("mousedown", touchMouseDown, !0), make_canvas.addEventListener("mouseup", touchMouseEnd, !0), make_canvas.addEventListener("mousemove", touchMouseMove, !0), $("#page-02-transform-image #scale-and-rotate-desktop").draggable({ start: function() { desktop_base_scale = face_img_scale, desktop_base_scale_dist = Math.sqrt(Math.pow($(scale_and_rotate_desktop).position().left - $(make_canvas).width() / 2, 2) + Math.pow($(scale_and_rotate_desktop).position().top - $(make_canvas).height() / 2, 2)), desktop_base_rotate = face_img_rotate, desktop_base_rotate_angle = Math.atan(($(scale_and_rotate_desktop).position().top - $(make_canvas).height() / 2) / ($(scale_and_rotate_desktop).position().left - $(make_canvas).width() / 2)) }, drag: function() { var t = Math.sqrt(Math.pow($(scale_and_rotate_desktop).position().left - $(make_canvas).width() / 2, 2) + Math.pow($(scale_and_rotate_desktop).position().top - $(make_canvas).height() / 2, 2));
            face_img_scale = desktop_base_scale * Math.pow(t / desktop_base_scale_dist, 2); var e = Math.atan(($(scale_and_rotate_desktop).position().top - $(make_canvas).height() / 2) / ($(scale_and_rotate_desktop).position().left - $(make_canvas).width() / 2));
            $(scale_and_rotate_desktop).position().left - $(make_canvas).width() / 2 < 0 && (e += Math.PI), face_img_rotate = desktop_base_rotate + e - desktop_base_rotate_angle, drawImage() } }) });

function importImage() { $("#page-01-instructions").hide(), $("#page-02-03-make").show(); var t = $(this); if (t.is("input")) { var e = t.prop("files")[0],
            a = new FileReader;
        a.onload = function(t) { face_img.src = t.target.result }, a.onloadend = function(t) { var e = EXIF.readFromBinaryFile(base64ToArrayBuffer(this.result)); if (void 0 != e.Orientation && 0 != e.Orientation) { make_canvas.getContext("2d"); switch (e.Orientation) {
                    case 1:
                        face_img_rotate = 0; break;
                    case 2:
                        break;
                    case 3:
                        face_img_rotate = Math.PI; break;
                    case 4:
                        break;
                    case 5:
                    case 6:
                    case 7:
                        face_img_rotate = .5 * Math.PI; break;
                    case 8:
                        face_img_rotate = -.5 * Math.PI } } }, a.readAsDataURL(e) }
    face_img.onload = function(t) { face_img_width = face_img.width, face_img_height = face_img.height, face_img_width *= 1024 / face_img_height, face_img_height = 1024, base_img_offsetX = 384 - (face_img_offsetX = (768 - face_img_width) / 2), drawImage() } }

function base64ToArrayBuffer(t) { t = t.replace(/^data\:([^\;]+)\;base64,/gim, ""); for (var e = atob(t), a = e.length, o = new Uint8Array(a), i = 0; i < a; i++) o[i] = e.charCodeAt(i); return o.buffer }

function drawImage() { var t = make_canvas.getContext("2d");
    t.save(), t.translate(face_img_offsetX, face_img_offsetY), t.translate(base_img_offsetX, 512), t.scale(face_img_scale, face_img_scale), t.rotate(face_img_rotate), t.drawImage(face_img, -base_img_offsetX, -512, face_img_width, face_img_height), t.restore() }
var currentTouches = [];

function touchStart(e) { for (t = 0; t < e.changedTouches.length; t++) { var a = e.changedTouches.item(t);
        currentTouches.push({ identifier: a.identifier, clientX: a.clientX, clientY: a.clientY }) }
    e.preventDefault() }

function touchMouseDown(t) { currentTouches.push({ clientX: t.clientX, clientY: t.clientY }), t.preventDefault() }

function touchEnd(e) { for (t = 0; t < e.changedTouches.length; t++) { var a = e.changedTouches.item(t); for (ct = 0; ct < currentTouches.length; ct++) currentTouches[ct].identifier == a.identifier && currentTouches.splice(ct, 1) }
    e.preventDefault() }

function touchMouseEnd(t) { currentTouches = [], t.preventDefault() }

function touchMove(e) { for (ct = 0; ct < currentTouches.length; ct++)
        for (t = 0; t < e.targetTouches.length; t++) { var a = e.targetTouches.item(t); if (currentTouches[ct].identifier == a.identifier)
                if (0 == ct) { var o = 768 / $(make_canvas).width() * .9;
                    face_img_offsetX += o * (a.clientX - currentTouches[0].clientX), face_img_offsetY += o * (a.clientY - currentTouches[0].clientY); var i = a.clientX,
                        n = a.clientY } else if (1 == ct) { var s = Math.hypot(currentTouches[0].clientX - currentTouches[1].clientX, currentTouches[0].clientY - currentTouches[1].clientY),
                    c = Math.hypot(i - a.clientX, n - a.clientY);
                face_img_scale *= Math.sqrt(c / s); var r = Math.atan((currentTouches[0].clientY - currentTouches[1].clientY) / (currentTouches[0].clientX - currentTouches[1].clientX)),
                    h = Math.atan((n - a.clientY) / (i - a.clientX));
                Math.abs(h - r) < 1 && (face_img_rotate += .9 * (h - r)) } }
    for (drawImage(), ct = 0; ct < currentTouches.length; ct++)
        for (t = 0; t < e.targetTouches.length; t++) { a = e.targetTouches.item(t);
            currentTouches[ct].identifier == a.identifier && (currentTouches[ct].clientX = a.clientX, currentTouches[ct].clientY = a.clientY) }
    e.preventDefault() }

function touchMouseMove(t) { for (ct = 0; ct < currentTouches.length; ct++) 0 == ct && (face_img_offsetX += t.clientX - currentTouches[0].clientX, face_img_offsetY += t.clientY - currentTouches[0].clientY); for (drawImage(), ct = 0; ct < currentTouches.length; ct++) currentTouches[ct].clientX = t.clientX, currentTouches[ct].clientY = t.clientY;
    t.preventDefault() }
$(window).ready(function() { var t = [0, 0, 0, 0];
    $("#page-03-mark-image .markers div").draggable({ start: function() { $(this).css("opacity", .33), $(this).hasClass("mouth") && $(this).hasClass("center") && (t[0] = $(".mouth.left").position().left - $(this).position().left, t[1] = $(".mouth.left").position().top - $(this).position().top, t[2] = $(".mouth.right").position().left - $(this).position().left, t[3] = $(".mouth.right").position().top - $(this).position().top), $(this).hasClass("mouth") && $(".mouth").css("opacity", .33) }, drag: function(e) { $(this).hasClass("mouth") && $(this).hasClass("center") && ($(".mouth.left").css("left", $(this).position().left + t[0]), $(".mouth.left").css("top", $(this).position().top + t[1]), $(".mouth.right").css("left", $(this).position().left + t[2]), $(".mouth.right").css("top", $(this).position().top + t[3])), drawMouth(), drawZoomed(this) }, stop: function() { $("#page-03-mark-image .markers div").css("opacity", "") } }), $("#page-03-mark-image .markers div").mousedown(function() { drawZoomed(this), $("#page-03-mark-image .zoomed").css("opacity", 1) }), $("#page-03-mark-image .markers div").mouseup(function() { $("#page-03-mark-image .zoomed").css("opacity", 0), $("#instruction-1").text("") }) });

function drawZoomed(t) { zoomed_canvas.getContext("2d").drawImage(make_canvas, 0, 0), $(".zoomed canvas").css({ width: 2 * $("#main-wrap").width(), height: 2.667 * $("#main-wrap").width(), "margin-left": "calc(50% - " + 2 * $(t).position().left + "px)", "margin-top": "calc(38% - " + 2 * $(t).position().top + "px)" }); var e = "handle.png";
    $(t).hasClass("eye") && (e = "handle-eye.png"), $(".zoomed .marker").css({ "background-image": "url(ui/design/graphics/" + e + ")", "background-size": $(t).css("background-size"), width: 2 * $(t).width(), "margin-left": -$(t).width(), height: 2 * $(t).height(), "margin-top": -$(t).height() - 10 }); var a = "";
    $(t).hasClass("eye") && ($(t).hasClass("left") && (a = labels[lang].left_eyelid), $(t).hasClass("right") && (a = labels[lang].right_eyelid)), $(t).hasClass("mouth") && ($(t).hasClass("left") && (a = labels[lang].left_of_mouth), $(t).hasClass("center") && (a = labels[lang].center_of_mouth), $(t).hasClass("right") && (a = labels[lang].right_of_mouth)), $("#instruction-1").text(a) }

function drawMouth() { drawImage(); var t = make_canvas.getContext("2d");
    t.strokeStyle = "#ffffff", t.lineWidth = 2, t.beginPath(); var e = getMouthVertices();
    t.moveTo(e[0], e[1]), t.bezierCurveTo((e[0] + e[2]) / 2, e[3], (e[0] + e[2] + e[2] + e[2]) / 4, e[3], e[2], e[3]), t.bezierCurveTo((e[2] + e[2] + e[2] + e[4]) / 4, e[3], (e[2] + e[4]) / 2, e[3], e[4], e[5]), t.stroke() }

function getMouthVertices() { var t = $("#main-wrap").width() / 768; return [$(".mouth.left").position().left / t, $(".mouth.left").position().top / t, $(".mouth.center").position().left / t, $(".mouth.center").position().top / t, $(".mouth.right").position().left / t, $(".mouth.right").position().top / t] }

function markerData() { var t = $("#main-wrap").width() / 768; return [parseInt($(".eye.left").position().left / t), parseInt(1024 - $(".eye.left").position().top / t), parseInt($(".eye.right").position().left / t), parseInt(1024 - $(".eye.right").position().top / t), parseInt($(".mouth.left").position().left / t), parseInt(1024 - $(".mouth.left").position().top / t), parseInt($(".mouth.center").position().left / t), parseInt(1024 - $(".mouth.center").position().top / t), parseInt($(".mouth.right").position().left / t), parseInt(1024 - $(".mouth.right").position().top / t)] }

function storeData() { var t = make_canvas.toDataURL("image/jpeg", .66);
    $.ajax({ type: "POST", url: "store", data: { image: t, marker_data: JSON.stringify(marker_data), name_of_person: $("#name-input").val() } }).done(function(t) { document.cookie = "created=" + t + ";path=/", window.location.href = "/?" + t }) }

function startNodding(t) { nod_init("data/" + t + ".jpg", marker_data), $("#page-01-instructions").hide(0), $("#page-02-03-make").hide(0), $("#page-04-nod").show(0) }