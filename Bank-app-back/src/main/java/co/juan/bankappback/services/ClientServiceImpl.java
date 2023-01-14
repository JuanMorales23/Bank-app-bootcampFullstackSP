package co.juan.bankappback.services;

import co.juan.bankappback.entities.Client;
import co.juan.bankappback.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService{
    @Autowired
    ClientRepository clientRepository;

    @Override
    public Boolean createClient(Client client) {
        LocalDate currentDate = client.getCreationDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate birthDate = client.getBirthDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        Period age = Period.between(birthDate, currentDate);
        if(age.getYears()>18){
            clientRepository.save(client);
            return true;
        }else{
            return false;
        }
    }

    @Override
    public Boolean deleteClient(String idNumber) {
        return findByIdNumber(idNumber).map(client -> {
            clientRepository.deleteById(client.getId());
            return true;
        }).orElse(false);
    }

    @Override
    public Optional<Client> findById(int id) {
        return clientRepository.findById(id);
    }

    @Override
    public Optional<Client> findByIdNumber(String idNumber) {
        return clientRepository.findByIdNumber(idNumber);
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Boolean modifyClient(String idNumber, Client client) {
        return clientRepository.findByIdNumber(idNumber).map(dbClient -> {
            dbClient.setIdType(client.getIdType());
            dbClient.setIdNumber(client.getIdNumber());
            dbClient.setFirstName(client.getFirstName());
            dbClient.setMiddleName(client.getMiddleName());
            dbClient.setLastName(client.getLastName());
            dbClient.setSecondLastName(client.getSecondLastName());
            dbClient.setEmail(client.getEmail());
            dbClient.setBirthDate(client.getBirthDate());
            dbClient.setCreationDate(client.getCreationDate());
            dbClient.setUserCreation(client.getUserCreation());
            dbClient.setModificationDate(client.getModificationDate());
            dbClient.setUserModification(client.getUserModification());
            clientRepository.save(dbClient);
            return true;
        }).orElse(false);
    }
}
