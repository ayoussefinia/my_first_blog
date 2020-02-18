### Deployed App: 

 (https://radiant-atoll-23132.herokuapp.com/)

### Guest Credentials: 

##User Name: test@test.com
##Pass: tester

#### App Description: 

This is a MERN stack app that allows anyone to read posts, and authenticated users to create, edit and delete posts they have made. Posts can include paragraphs, titles and images in any order and can be as long as the user wants. 

  ##Alien Head

  the alien head is just a bunch of css div transforms layered on top of eachoter

#### Typical User Flow

  1. the user visits the ['landging page'](https://radiant-atoll-23132.herokuapp.com/) from here they can see a large main post and a side list of posts. The user can click any of the side  posts which will change the large main post to reflect the new article. 

  2. If the user clicks the large main post they are directed to the '/post/postId' route where they can share, like or comment.
  As of now only liking the post is functional. Comments and dislikes will be implimented in the near future. Sharing doesnt make too much sense to connect since these aren't real posts. 

  3. If the user decides to make a post they will visit the '/makePost' route. From here they can construct their post which should include a main image, title, category (this category can be seen on the landing page side posts list) and a series of sections. 

     *  On the left side bar the user can see a toolbar icon. if the 'toolkit' is clicked, the user can decide to add new sections to the post.  The default upon visiting the page is two paragraphs an image and two headers. This is somewhat arbitray and can be changed easily by clicking the x to remove sections as needed

     * as the user pastes in image urls they should preview immediately

     * when the user feels comfortable with their post they can preview the bost using the button at the bottom of the screen

     * the preview page will closely resemble the final result, from here the user can decide to post or go back and edit. 

  4. If the user has made posts they can view them on the '/myPosts'
  page. From here a user can edidt or delete posts as needed. 

#### App outlook:

I have plans on adding a comment section to the '/post/postId' route that is accessed when the user clicks on a post from the landing page. Here Authenticated users will be able to comment. Also as of now a user can like the same post multiple times. I will create a likes table in the database that is linked to the userId and the postId to prevent this. When a user logs in,  the users likes will be stored in the redux store so any post visited that has already been liked will have a disabled and shaded icons (similar to reddit). 