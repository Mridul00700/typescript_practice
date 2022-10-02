import React from 'react';



interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: { id: string }) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
  return null;
};

const Component = () => {
  return (
    <>
    <Table
      items={[{ id: "1", userName: 'John' }]}
      renderItem={(item) => {
        return null;
      }}
    ></Table>
    <Table
    items={[{ id: "1", name:'mav' }]}
    renderItem={(item) => {
      return null;
    }}
  ></Table>
  <Table
    items={[{ id: "1", booking: 'resort' }]}
    renderItem={(item) => {
      return null;
    }}
  ></Table>
  </>
  );
}

export default Component;
