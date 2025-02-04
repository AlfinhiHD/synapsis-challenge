// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { List, Tag, Checkbox } from 'antd';
// import { todoApi } from '@/services/todos.service';


// const TodosPage = () => {
//   const { data: todos, isLoading } = useQuery({
//     queryKey: ['todos'],
//     queryFn: () => todoApi.getUserTodos(/* Add selected user ID here */)
//   });

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Todos</h1>
//       <List
//         dataSource={todos || []}
//         renderItem={todo => (
//           <List.Item
//             actions={[
//               <Tag color={todo.status === 'completed' ? 'green' : 'orange'}>
//                 {todo.status}
//               </Tag>
//             ]}
//           >
//             <List.Item.Meta
//               avatar={<Checkbox checked={todo.status === 'completed'} />}
//               title={todo.title}
//               description={`Due: ${new Date(todo.due_on).toLocaleDateString()}`}
//             />
//           </List.Item>
//         )}
//         loading={isLoading}
//       />
//     </div>
//   );
// };

// export default TodosPage;