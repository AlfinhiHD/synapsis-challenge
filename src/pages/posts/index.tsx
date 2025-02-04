// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Card, List } from 'antd';
// import { postApi } from '@/services/posts.service';


// const PostsPage = () => {
//   const { data: posts, isLoading } = useQuery({
//     queryKey: ['posts'],
//     queryFn: () => postApi.getUserPosts(/* Add selected user ID here */)
//   });

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Posts</h1>
//       <List
//         grid={{ gutter: 16, column: 2 }}
//         dataSource={posts || []}
//         renderItem={post => (
//           <List.Item>
//             <Card title={post.title}>
//               <p>{post.body}</p>
//             </Card>
//           </List.Item>
//         )}
//         loading={isLoading}
//       />
//     </div>
//   );
// };

// export default PostsPage;