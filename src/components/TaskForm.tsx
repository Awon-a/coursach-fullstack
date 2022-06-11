import { ChangeEvent, FormEvent, useState, MouseEvent } from "react"
import { useDispatch } from "react-redux";
import { createTask } from "../redux/actions/task";
import { Row, Col, Input, Button, Divider } from 'antd';


const TaskForm = () => {
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (!body.trim()) return;

    dispatch(createTask({ body }));
    setBody('');
  }

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  }

  return (
    <>
      <Row style={{ marginTop: '5%' }} justify="center" align="middle">
        <Col>
          <label style={{ marginRight: '15px', fontSize: 30, fontWeight: 'bold' }}>Новая задача:</label>
        </Col>
        <Col>
          <Input.Group compact>
            <Col>
              <Input size='large' placeholder="Описание задачи" onChange={handleChangeInputValue} />
            </Col>
            <Col>
              <Button size='large' type="primary" onClick={handleSubmit}>Создать</Button>
            </Col>
          </Input.Group>
        </Col>
      </Row>
      <Divider style={{ marginTop: '45px', marginBottom: '45px' }} plain></Divider>
    </>
  )
}

export default TaskForm;