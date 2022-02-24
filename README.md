
# WoW Collection Tracker

Simple website that presently fetches information about a World of Warcraft character (US or EU), pulls their mount collection from the Blizzard API, compares it to the total list of mounts from the same API, and presents the list of missing ones.

## TODO:

-  Add some sort of caching so that refreshing the mount list page doesn't error out.

-  Error handling of realm search text. 
        Problem(s): changing region should autoclear entered text; changing region with entered text keeps potentially invalid realm name in box

-  Integrate web scraper with MongoDB for more in-depth game artifacts (associate faction/rep, image, Wowhead link, etc.)

-  Retrieve character reputations to determine any outstanding available faction mounts

-  CSS and layout improvements

-  Enforce formatting rules on name input (submit button disabled status doesn't update while name input is still focused)

-  Host site