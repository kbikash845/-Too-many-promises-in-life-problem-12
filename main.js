// Simulating an API request to update user's last activity time
function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`User ${userId} last activity updated`);
        resolve();
      }, 3000);
    });
  }
  
  // Simulating an API request to delete a post
  function deletePost(postId, userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` ${postId} deleted by ${userId}`);
            resolve();
        }, 5000);
    });
  }
  
  const userId = "Bikash"; // replace with actual user id
  let posts = ["Post 1", "Post 2", "Post 3"]; // replace with actual posts
  
  function updateLastUserActivityTimeWithPostCreation() {
  
    Promise.all([updateLastUserActivityTime(userId), deletePost(posts.pop(), userId), deletePost(posts.pop(), userId)])
      .then(() => {
        // Log the new set of posts of the user
        console.log(`User ${userId} remaining posts after deletion: ${posts}`); //Remaining post 1
        console.log(`User ${userId} last activity time: ${new Date().toLocaleString()}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  updateLastUserActivityTimeWithPostCreation();