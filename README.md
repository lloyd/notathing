## THIS ISN'T REAL, RUN AWAY

Seriously, this isn't real and won't be real any time soon.  There's a
99% chance it will *never* work.  It's a rediculous pipe dream.  Run
away!

## Blog Comments. Simply.

So let's say you want to add community comments to your blog or
website, but you want to do so in a tactful way that keeps the focus
on your content, your prose, and your ideas.  You don't want to force
your users to sign up to a new Social Network, to create a new account,
or any of this crap.  You just want them to be able to share their
thoughts, like it's 2012.

What else don't you want?  You don't want bunch of icons to sign in
with googbook or twitted-in.  You don't want to let users sign in with
crazy long URIs that they don't understand.  

And you don't want someone else to *own* your user's comments, nor
syndicate them, nor use them for advertisement targeting.  The content
on your site belongs to the author - for both page content and
comments.  The commenting system should be smart and respectful about
this shared ownership.

Nor do you care for someone else's design in your page.  You prefer to 
make your own decisions about how to lay comments out on your page.

You don't want to build the system that does this, you don't want to
change *anything* serverside, and you'd like to know you *could* host
it yourself if the public service proves flakey.

You want simplicity, privacy, transparency, and total control...

...and YOU WANT BLOG COMMENTS.


## STFU, Wassit do?

blogch.at is a blog commenting system that you integrate into your 
pages by including a javascript file and calling the API that it
provides.  You call a function, you get an array of comments, and 
you format and display them however you like.

Don't feel like writing javascript right now?  Don't worry, you can
add a could ids to your HTML and use the sample "high level" API
that does all the work for you (and later go and make it your own).

Users can sign into your site using their email address via Persona,
(a distributed, privacy-preserving identity system from Mozilla),
and once in, they can:

  1. leave a comment on your blog
  2. warn you about comments that are spam.
  3. delete comments they've left in the past.

## What's a comment include?

    {
      "name": "Lloyd Hilaiel",
      "site_link": "http://lloyd.io",
      "email_md5": "716a3dbca4e32f6a4a0affd0f55234ae"
      "comment": "Hi,\n\nThanks for writing this blog post.  It resonates very deeply with me and reassures me that despite the ineffable distance that separates us, I do not suffer the unbearable torment of being alone.\n\nl8rs,\nlloyd",
      "comment_id": 7
    }


 







