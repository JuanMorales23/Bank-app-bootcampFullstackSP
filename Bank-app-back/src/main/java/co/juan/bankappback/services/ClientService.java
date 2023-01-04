package co.juan.bankappback.services;

import co.juan.bankappback.entities.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    public Client createClient(Client client);
    public Boolean deleteClient(int id);
    public Optional<Client> findById(int id);
    public List<Client> findAll();
}