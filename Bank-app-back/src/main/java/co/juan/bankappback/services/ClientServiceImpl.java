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
    public Boolean deleteClient(int id) {
        return findById(id).map(client -> {
            clientRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

    @Override
    public Optional<Client> findById(int id) {
        return clientRepository.findById(id);
    }

    @Override
    public Optional<Client> findByIdNumber(int idNumber) {
        return Optional.ofNullable(clientRepository.findByIdNumber(idNumber));
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }
}
