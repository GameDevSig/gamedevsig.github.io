---
layout: default
title: About
---
{%- assign discord_link = site.data.socials | where_exp:"item",'item.name == "Discord"' | first -%}
{%- assign discord_link = discord_link.link -%}

<h1 class="has-text-primary">GameDevSig</h1>
GameDevSig is the University of Edinburgh's game development society.

Our mission is to spread the love for game development and to get more people making games:
- We take part in gamejams together and organise our own
- We post info about industry and community events
- We organise exclusive invited talks and collaborations with game companies
- We provide our members with tools/assets/resources to help them make their games
- We meet up every week to talk about gamedev and games in general
- We have fun together

<h4><a class="has-text-link" target="_blank" href="{{ discord_link }}">Join us and let's make cool games together!</a></h4>

<h2 class="has-text-primary">A Bit of History</h2>
{% assign foundation_date = site.data.dates.foundation | date: "%s" %}
{% assign sigification_date = site.data.dates.sigification | date: "%s" %}
{% assign now = "now" | date: "%s" %}
{% assign diff_seconds = now | minus: foundation_date %}
{% assign gds_age = diff_seconds | divided_by: 31557600 %}

The earliest records of GDS' existence are from {{ foundation_date | date: "%B %Y" }} (that's {{ gds_age }} years ago!), where it was founded as GameDevSoc as a place to do GameJams, share talks and opportunities, organise workshops, and most of all, have fun making games.

In {{ sigification_date | date: "%B %Y" }} GameDevSoc joined **[CompSoc]({{ site.data.links.compsoc }})** and became one of its SIGs (Special Interest Groups) in order to reach more people and "to run more events and provide more to our members (This definitely includes pizza)."

<!-- Since then, GDS has -->