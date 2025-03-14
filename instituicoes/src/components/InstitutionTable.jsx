import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import api from "../services/api";
import InstitutionForm from "./InstitutionForm";
import SearchInstitutionModal from "./SearchInstitutionModal"; 
import "./InstitutionTable.css";

const InstitutionTable = () => {
  const [institutions, setInstitutions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false); 
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  
  const fetchInstitutions = async () => {
    try {
      const response = await api.get("/paraiba"); 
      setInstitutions(response.data); 
    } catch (error) {
      console.error("Erro ao buscar instituições:", error);
    }
  };

 
  useEffect(() => {
    fetchInstitutions();
  }, []);

 
  const handleAdd = () => {
    setSelectedInstitution(null);
    setShowModal(true);
  };

 
  const handleEdit = (institution) => {
    setSelectedInstitution(institution);
    setShowModal(true);
  };

  // Exclui uma instituição
  const handleDelete = async (id) => {
    try {
      await api.delete(`/paraiba/${id}`);
      fetchInstitutions(); // Atualiza a lista após exclusão
    } catch (error) {
      console.error("Erro ao excluir instituição:", error);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <Button variant="primary" onClick={handleAdd} className="me-2">
          Adicionar Instituição
        </Button>
        <Button variant="success" onClick={() => setShowSearchModal(true)}>
          Buscar Instituições
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Região</th>
            <th>UF</th>
            <th>Município</th>
            <th>Entidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {institutions.map((institution) => (
            <tr key={institution.id}>
              <td>{institution.regiao}</td>
              <td>{institution.uf}</td>
              <td>{institution.municipio}</td>
              <td>{institution.entidade}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(institution)}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(institution.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <InstitutionForm
        show={showModal}
        handleClose={() => setShowModal(false)}
        institution={selectedInstitution}
        onSubmit={fetchInstitutions}
      />

      <SearchInstitutionModal
        show={showSearchModal}
        handleClose={() => setShowSearchModal(false)}
      />
    </div>
  );
};

export default InstitutionTable;