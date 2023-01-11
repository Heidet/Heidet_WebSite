import React, { Component, useEffect } from "react";
import Modal from "./Modal";
import axios from "axios";
import styled from 'styled-components';
import { Loader } from '../../../styles/Atoms'


class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      viewCompleted: false,
      theme : "",
      todoList: [],
      modal: false,
      theme: props.theme,
      toggleTheme: props.toggleTheme,
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.setState({isLoading: false})
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_API+'todos/')
      .then((res) => 
        this.setState({ todoList: res.data }),
        )
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(process.env.REACT_APP_BACKEND_API+`todos/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post(process.env.REACT_APP_BACKEND_API+`todos/`, item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(process.env.REACT_APP_BACKEND_API+`todos/${item.id}/`)
      .then((res) => this.refreshList());
  };


  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
        >
          Complet
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
        >
          Incomplet
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Modifier
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Supprimer
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return this.state.isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
      <div className="container" style={{ height: '50em', width: '100%' }}>
        <h1 className="text-white text-uppercase text-center my-4" style={{ color: this.props.theme.text}}>Tâches</h1>
            <PanelTasks>
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Ajouté tâche
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </PanelTasks>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}

export default Todos;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PanelTasks = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text}
  padding: 1em;
`

