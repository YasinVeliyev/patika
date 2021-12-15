const posts = ["Post 1","Post 2","Post 3","Post 4"];

const listPosts = () => {
  posts.forEach((post) => {
    console.log(post);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showPosts() {
  try {
    await addPost('Post 5');
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
