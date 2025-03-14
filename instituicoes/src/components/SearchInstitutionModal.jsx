import React, { useState } from "react";
import { Modal, Button, Form, ListGroup } from "react-bootstrap";
import api from "../services/api";
import "./SearchInstitutionModal.css"; 

const SearchInstitutionModal = ({ show, handleClose }) => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 

 
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/paraiba?q=${searchTerm}`); 
      setSearchResults(response.data); 
    } catch (error) {
      console.error("Erro ao buscar instituições:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>Buscar Instituição</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form onSubmit={handleSearch}>
          <Form.Group className="mb-3">
            <Form.Label>Digite o termo de busca:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Município, Entidade, etc."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Pesquisar
          </Button>
        </Form>

        {}
        <ListGroup className="mt-3">
          {searchResults.map((institution) => (
            <ListGroup.Item key={institution.id}>
              <strong>Região:</strong> {institution.regiao} <br />
              <strong>UF:</strong> {institution.uf} <br />
              <strong>Município:</strong> {institution.municipio} <br />
              <strong>Entidade:</strong> {institution.entidade}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchInstitutionModal;