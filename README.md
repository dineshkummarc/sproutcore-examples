Introduction
============

This repository was set up for posting and maintaining small projects illustrating
Sproutcore functionality. I started with Sproutcore in April 2009, and soon
found a compelling case for using it for web development. I started learning by
going through the Todos example on the Sproutcore web site, then gave embedding
Raphael javascript in a Sproutcore view (raphaelplay example) a try. After that,
attention turned to the Quilmes branch and work done by Alex Iskander, who was
very helpful with learning the latest and greatest, showcased in several apps, 
which are descendants of his http://create.tpsitulsa.com/sc/test_controls.html.

Help on the #sproutcore irc channel was really important for getting tips.  One
tip was about how to use layerNeedsUpdate along with updateLayer for placing the
Raphael code.  See this post by Colin Campbell that explains why:
http://colincodes.tumblr.com/post/512234561/sproutcore-and-flot.

Another tip was how to use SC.RunLoop.begin() and .end() in the interfacing 
between Raphael and Sproutcore. Using these calls around a block of code will
issue a kind of pause in the action of Sproutcore bindings and other things,
so the code in the block is executed immediately. It is a performance tweak.

Github Setup
------------

Richard Klancer helped me one afternoon to set up my github account, 
through creating this repository.  It might be useful to see the steps taken
to set this up.  I already had raphaelplay within my own dev area on my system
(Macbook Pro), so it was a matter of creating the repository on github through
the github web interface, followed by command line steps to send it up. From 
my command line history, here are steps, which include those to avoid putting
unneeded tmp and vi ~ files in the repo (something realized along the way):

1. Create github account (geojeff) and fill in basic info.
2. Generate public ssh key for setting up communications between my local
   system and github.

> cd ~/.ssh                 // - .ssh in my home dir has personal ssh info
> ssh-keygen                // - generate the key
> cat id_rsa.pub | pbcopy   // - copy the key using handy pipe to pbcopy
> ssh git@github.com        // - hit github.com to initialize

3. Start sproutcore-examples in my development area, on a Macbook Pro. Move
   raphaelplay, the first app I started, into sproutcore-examples, then
   proceed with git configuration and initialization steps.

> cd ~/Development/sproutcore
> mkdir sproutcore-examples
> mv raphaelplay/ sproutcore-examples/   // - raphaelplay already exists*
> cd sproutcore-examples/
> git init                  // - turn sproutcore-examples dir into repo
> touch README              // - follow steps on github help web site
> git add README
> git commit -m 'first commit'
> git remote add origin git@github.com:geojeff/sproutcore-examples.git
> git push origin master
> git add raphaelplay       // - add raphaelplay, a dir with subdirs
> git status                // - Before commiting, it can be wise to
>                                look over what would be added to the
>                                repo, using `git status`. Doing so
>                                showed that the raphaelplay/tmp dir and
>                                many files in there would be added,
>                                which is not needed. Also, `git status`
>                                listed files ending with tildes (~), 
>                                which are backup files from my editor,
>                                vi, which are also not needed. So, these
>                                unneeded files should be excluded by
>                                making a .gitignore file in the root
>                                of the repo, which is the current dir.
> vi .gitignore             // - Two lines were added to .gitignore:
>
>                                     raphaelplay/tmp/
>                                     *~
>
> git status                // - `git status` now shows only needed 
>                                files, a much shorter list.
> git add .gitignore
> git rm -r --cached raphaelplay/tmp    // - Get rid of unneeded files,
> git rm -r --cached *~                      which are in local cache.
> git status
> git commit .gitignore -m "Updated .gitignore to ignore vi ~ files and raphaelplay/tmp"
> git commit -a -m "Initial commit of raphaelplay"
> git push origin master
> cd raphaelplay/
> vi README 
> git commit -a -m "Added README content for raphaelplay"
> git push origin master
> vi README 
> git commit -a -m "Added URL for Raphael Australia example in README."
> git push origin master

4. Fix-up, clean-up, and a move to the quilmes branch.

That prepared the repo for starting, but a few weeks later, with help from
Peter Wagenet, the directory structure was found to be in error (See * above):
.../sproutcore-examples/raphaelplay/apps/raphaelplay... -- the higher level
raphaelplay dir was unneeded. So, wanting to make a new branch for Quilmes,
and to get properly set up for adding additional examples, git mv was used to 
rearrange to have sproutcore-examples/apps and sproutcore-examples/frameworks. 
Alex Iskander helped finalize the working system with proper Sproutcore/Quilmes 
inclusion and Buildfile configuration to incorporate Quilmes goodies.

Flot
----

In late May 2010 several examples of graphs using the Flot javascript library were
added, with the help of Avi and others  on the irc channel (#sproutcore).

Repo Layout
-----------

As of May 2010, this repo contains two directories, apps and frameworks. apps 
contains the examples. frameworks contains only raphael, and does not contain flot 
and sproutcore. My local version of sproutcore-examples/frameworks has all
three: raphael, flot, sproutcore.  To run these examples, you will need raphael
and flot in your frameworks and, depending on how you have your development
environment set up, maybe sproutcore itself, the quilmes branch, which contains
the latest development code. To do all of this properly, as a repo that you
could clone and get running immediately, I should use git submodule setup for these 
framework libraries. As it stands now, you'll need to handle getting flot and
maybe sproutcore in your frameworks directory. For flot, you can clone Bo Xiao's
http://github.com/imxiaobo/iamxiaobo/tree/master/flot-integration, which will
get you a demo app in a separate flot-integration directory, with its own apps
and frameworks directories. I did that, played with the demo, looked things
over, then copied flot-integration/frameworks/flot into the same place in
sproutcore-examples (sproutcore-examples/frameworks/). 
  
Later, you should be able to just clone sproutcore-examples and do a couple of 
git steps to be all set up, but this is how it goes for now.
