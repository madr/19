---
title: Använd CSS3 translate() istället för positionering för att animera element
date: 2012-12-20
template: post.html
layout: single.hbs
collection: articles
---
[Paul Irish](http://paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) utförligt om animation på webbplatser, särskilt positionering med `top`/`left` i jämförelse med CSS3 translate:

> 1. Use CSS keyframe animation or CSS transitions, if at all possible. The browser can optimize painting and compositing bigtime here.
> 2. If needs to be it's JS-based animation, use requestAnimationFrame. Avoid setTimeout, setInterval.
> 4. Avoid changing inline styles on every frame (jQuery animate()-style) if you can, declarative animations in CSS can be optimized by the browser way more.
> 3. Using 2D transforms instead of absolute positioning will typically provide better FPS by way of smaller paint times and smoother animation.
> 4. Use Timeline Frame's mode to investigate what is slowing down your behavior
> 5. "Show Paint Rects" and "Render Composited Layer Borders" are good pro-moves to verify where your element is being rendered.

Missa inte heller bakgrunden där [Chris Coyier pratar om skillnaden mellan positionering och pynt](http://css-tricks.com/tale-of-animation-performance/).