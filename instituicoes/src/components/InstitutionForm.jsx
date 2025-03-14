import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../services/api";
import "./InstitutionForm.css";

const InstitutionForm = ({ show, handleClose, institution, onSubmit }) => {
  const [formData, setFormData] = useState({
    regiao: "",
    uf: "",
    municipio: "",
    entidade: "",
  });

 
  useEffect(() => {
    if (institution) {
      setFormData(institution);
    } else {
      setFormData({
        regiao: "",
        uf: "",
        municipio: "",
        entidade: "",
      });
    }
  }, [institution]);

  // Atualiza os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (institution) {
        await api.put(`/paraiba/${institution.id}`, formData); 
      } else {
        await api.post("/paraiba", formData); 
      }
      onSubmit(); 
      handleClose(); 
    } catch (error) {
      console.error("Erro ao salvar instituição:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>
          {institution ? "Editar Instituição" : "Adicionar Instituição"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Região</Form.Label>
            <Form.Control
              type="text"
              name="regiao"
              value={formData.regiao}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>UF</Form.Label>
            <Form.Control
              type="text"
              name="uf"
              value={formData.uf}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Município</Form.Label>
            <Form.Control
              type="text"
              name="municipio"
              value={formData.municipio}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Entidade</Form.Label>
            <Form.Control
              type="text"
              name="entidade"
              value={formData.entidade}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="modal-footer-custom">
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InstitutionForm;