---
layout: default
title: About
---
# GameDevSIG
GameDevSIG is the University of Edinburgh's game development society!

## A Bit of History
{% assign foundation_date = site.data.dates.foundation | date: "%s" %}
{% assign sigification_date = site.data.dates.sigification | date: "%s" %}
{% assign now = "now" | date: "%s" %}
{% assign diff_seconds = now | minus: foundation_date %}
{% assign gds_age = diff_seconds | divided_by: 31557600 %}

The earliest records of GDS' existence are from {{ foundation_date | date: "%B %Y" }} (that's {{ gds_age }} years ago!), where it was founded as GameDevSoc as a place to do GameJams, share talks and opportunities, organise workshops, and most of all, have fun making games!

In {{ sigification_date | date: "%B %Y" }} GameDevSoc joined [CompSoc]({{ site.data.links.compsoc }}) and became one of its SIGs (Special Interest Groups) in order to reach more people and "to run more events and provide more to our members (This definitely includes pizza)."

<!-- Since then, GDS has -->