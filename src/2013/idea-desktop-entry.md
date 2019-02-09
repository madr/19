---
title: Desktop entry for IDEA, RubyMine, PHPStorm or any other JetBrains product
date: 2013-02-10
template: post.html
layout: single.hbs
collection: articles
---
I haven't found any article describing how to accomplish this on a linux computer using GNOME 3:

![Activities view in GNOME 3, Showing IDEA 12 icon](https://madrse.s3.amazonaws.com/assets/41-apps.png)
  
  
![Activities search, displaying only IDEA 12 icon](https://madrse.s3.amazonaws.com/assets/41-idea.png)


I did it myself earlier today and will now share it. All JetBrains products are the same on linux, so the files I present can be changed for RubyMine, WebStorm or PHPStorm as well, My example is for IDEA.

To create a desktop entry for IDEA, 4 things are required:

 * IDEA is installed somewhere on your computer.
 * `/usr/local/bin/idea`, to simplify launch.
 * `idea.desktop`, placed in `/usr/share/applications`.
 * `idea.png` symlinked to `/usr/local/share/icons`.

## TL:DR;

Here is a gist: [IDEA 12 Desktop Entry for GNOME](https://gist.github.com/madr/4749398)

## Installing IDEA

This is propably already done, but if not: download it from [JetBrains](http://www.jetbrains.com/idea/download/) and untar it somewhere. IDEA strongly recommends Oracle JDK.

## launcher script: /usr/local/bin/idea

`<idea_dir>/idea.sh` could simply be symlinked to `/usr/local/bin/idea`, I prefer to take it a step further.

    #!/bin/bash
    # /usr/local/bin/idea
    export IDEA_JDK=/opt/java # Oracle JDK!
    <idea_dir>/bin/idea.sh

Call it lazy, but since IDEA_JDK is only needed by IDEA I prefer to set it like that. In this way the IDEA_JDK is always there, anyways. Don't forget to `chmod +x`.

## The desktop entry: idea.desktop

Nothing uncommon here:

    # /usr/share/applications/idea.desktop
    [Desktop Entry]
    Encoding=UTF-8
    Version=12
    Type=Application
    Exec='/usr/local/bin/idea' %f
    Icon=idea
    Name=IntelliJ IDEA
    Comment=Full-featured commercial IDE
    NoDisplay=false
    Categories=TextEditor;Programming;

Copy it to `/usr/share/applications/idea.desktop` and change it if needed.

## Getting the Icon

Icons are stored in various places in the filesystem. For IDEA, I prefer `/usr/local/share/icons`. JetBrains has a PNG in the `./bin` dir, so a symlink is all that is needed.

    ln -s <idea_dir>/bin/idea.png /usr/local/share/icons/idea.png

## All set

Now it is possible launch IDEA by press `Win`, type `idea` and press `Enter`. It sure is more sexy than running `<dir>/idea.sh &` from the console.