import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Modal, Empty, Pagination, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { postsApi } from '@/services/posts.service';
import { PostType } from '@/types/posts.types';
import { useUser } from '@/context/UserContext';
import PostCard from '@/components/posts/PostsCard';
import PostForm from '@/components/posts/PostsForm';

const AllPostsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { selectedUser } = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ['posts', page, pageSize],
    queryFn: () => postsApi.getPosts(page, pageSize),
  });

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setPage(newPage);
    setPageSize(newPageSize);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {!selectedUser && (
        <Alert
          message="Select a profile to interact with posts"
          description="You need to select a profile to create posts and add comments."
          type="info"
          showIcon
          className="mb-4"
        />
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Posts</h1>
        {selectedUser && (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          >
            Create Post
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="loading-spinner" />
          </div>
        ) : data?.data.length === 0 ? (
          <Empty description="No posts found" />
        ) : (
          data?.data.map((post: PostType) => (
            <PostCard
              key={post.id}
              post={post}
              isOwner={post.user_id === selectedUser?.id}
            />
          ))
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={Number(data?.headers?.['x-pagination-total'] || 0)}
          onChange={handlePageChange}
          showSizeChanger
          showTotal={(total) => `Total ${total} items`}
        />
      </div>

      <Modal
        title="Create Post"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        destroyOnClose
      >
        <PostForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default AllPostsPage;