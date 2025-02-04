import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { List, Tag, Checkbox, Modal } from "antd";
import { todoApi } from "@/services/todos.service";
import { useUser } from "@/context/UserContext";
import { TodoStatus, TodoType } from "@/types/todos.type";
import { useRouter } from "next/navigation";

const TodosPage = () => {
  const { selectedUser } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: todos, isLoading } = useQuery<TodoType[]>({
    queryKey: ["todos", selectedUser?.id],
    queryFn: () => selectedUser?.id ? todoApi.getUserTodos(selectedUser.id) : Promise.resolve([]),
    enabled: !!selectedUser?.id,
  });

  useEffect(() => {
    if (!selectedUser) {
      setIsModalOpen(true);
    }
  }, [selectedUser]);

  const handleRedirect = () => {
    setIsModalOpen(false);
    router.push("/users");
  };


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <List
        dataSource={todos || []}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Tag
                key={`tag-${todo.id}`}
                color={
                  todo.status === TodoStatus.Completed ? "green" : "orange"
                }
              >
                {todo.status}
              </Tag>,
            ]}
          >
            <List.Item.Meta
              avatar={<Checkbox checked={todo.status === "completed"} />}
              title={todo.title}
              description={`Due: ${new Date(todo.due_on).toLocaleDateString()}`}
            />
          </List.Item>
        )}
        loading={isLoading}
      />

<Modal
        title="Pilih Profile"
        open={isModalOpen}
        onOk={handleRedirect}
        onCancel={handleRedirect}
        okText="Pilih Profile"
        cancelText="Batal"
      >
        <p>Anda harus memilih profil terlebih dahulu sebelum melihat todos.</p>
      </Modal>
    </div>
  );
};

export default TodosPage;
