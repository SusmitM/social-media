import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "3XHvLF4kC",
    content: "Felt like Queen",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/image/upload/v1688761363/Buzz-socialmedia/ehvrojtq9mq7po7mv197.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9u5",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-06-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLF2kC",
    content: "My E-commerce project",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/video/upload/v1688761971/Buzz-socialmedia/smy52vq3lm4vv7tqfllh.mp4",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9u5",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-06-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8f87b286-7c73-4f83-8901-5e154eed21a3",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johnwilliam",
    createdAt: "2023-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8f87b286-7c73-4f83-2709-5e154eed21a3",
    content: "Yayy! Its my Birthday Today. Made this cake for myself!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014336/ecommerce/chocolatecake4.webp",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ZO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "linaabott",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
      "You are never too old to set another goal or to dream a new dream.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "davidkyle",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "b310b9bc-d150-4462-800a-7369938ea3a8",
    content: "testPost",
    mediaURL: "",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "julieadams",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),

  }
  
 
];
