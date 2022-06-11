import React, { ChangeEvent, useState } from "react";
import { Task, UpdateTask } from "../types/task";
import { Tooltip, Button, Row, Col, Checkbox, Divider } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox'


export interface TaskProps {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (dto: UpdateTask) => void;
}

const TaskItem = ({ task, deleteTask, updateTask }: TaskProps) => {
  const [isTaskUpdate, setTaskUpdate] = useState(false);
  const [body, setBody] = useState('');
  const [isDone, setIsDone] = useState(task.completed);

  const handleTaskDelete = () => deleteTask(task.id);
  
  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && body.trim()) {
      updateTask({ id: task.id, body });
      setTaskUpdate(!isTaskUpdate);
    }
  }

  const handleTaskUpdate = () => {
    setTaskUpdate(!isTaskUpdate);
  }

  const handleBodyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  }

  const handleIsDoneChange = (event: CheckboxChangeEvent) => {
    setIsDone(!isDone);

    updateTask({ id: task.id, completed: !isDone });
  }

  const styleColumnBody = (isDone: boolean) => {
    const styleColumnBody: React.CSSProperties = { background: '#F6F6F6', paddingTop: '8px', paddingLeft: '8px', paddingRight: '8px', border: "1px solid #F6F6F6", borderRadius: "5px 0px 0px 5px" };

    if (isDone) {
      return { ...styleColumnBody, background: '#D4F3B3' };
    }

    return styleColumnBody;
  }
  const styleInputBody = (isDone: boolean) => {
    const styleInputBody = { overflow: 'scroll', maxHeight: '75px', width: 'inherit', outline: 'none', border: 'none', background: '#F6F6F6' };

    if (isDone) {
      return { ...styleInputBody, background: '#D4F3B3' };
    }

    return styleInputBody;
  }

  const styleColumnDelete: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: 'center', background: '#E5E3E3', content: "center", border: "1px solid #F6F6F6", borderRadius: "0px 5px 5px 0px" };

  return (
    <>

      <Row justify="center" align="stretch" style={{
        marginBottom: "20px",
      }}>
        <Col span={14} onKeyPress={handleSubmit} style={styleColumnBody(isDone)}>
          <div >
            {isTaskUpdate ?
              <input style={styleInputBody(isDone)} type='text' onChange={handleBodyChange} placeholder={task.body} /> :
              isDone ?
                <div style={{ overflow: 'scroll', wordBreak: 'break-all', maxHeight: '75px', textDecoration: 'line-through' }}>{task.body}</div> :
                <div style={{ overflow: 'scroll', wordBreak: 'break-all', maxHeight: '75px' }} onClick={handleTaskUpdate}>{task.body}</div>
            }
          </div>
          <Divider type="horizontal" style={{ marginBottom: 0 }} plain></Divider>
          <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
            <Checkbox onChange={handleIsDoneChange} checked={isDone}>Выполнено</Checkbox>
          </div>
        </Col>
        <Col flex="45px" style={styleColumnDelete}>
          <Tooltip title="Удалить">
            <Button type="primary" shape="circle" onClick={handleTaskDelete} icon={<DeleteOutlined />} ghost />
          </Tooltip>
        </Col>
      </Row>
    </>
  )
}

export default TaskItem;