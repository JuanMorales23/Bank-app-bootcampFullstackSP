package co.juan.bankappback.services;

import co.juan.bankappback.entities.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    public Boolean createClient(Client client);
    public Boolean deleteClient(String idNumber);
    public Optional<Client> findById(int id);
    public Optional<Client> findByIdNumber(String idNumber);
    public List<Client> findAll();
    public Boolean modifyClient(String idNumber, Client client);
}
