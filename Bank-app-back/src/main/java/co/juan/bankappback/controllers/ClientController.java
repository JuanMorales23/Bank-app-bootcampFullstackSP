package co.juan.bankappback.controllers;

import co.juan.bankappback.entities.Client;
import co.juan.bankappback.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin
public class ClientController {
    @Autowired
    ClientService clientService;
    @PostMapping
    public ResponseEntity<String> createClient(@RequestBody Client client){
        if(clientService.createClient(client)){
            return new ResponseEntity<>("Usuario creado", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("No fue posible crear el usuario", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<List<Client>> getClients(){
        return new ResponseEntity<>(clientService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{idNumber}")
    public ResponseEntity<Client> getClientByIdNumber(@PathVariable Integer idNumber){
        return clientService.findByIdNumber(idNumber).map(client -> {
            return new ResponseEntity<>(client, HttpStatus.FOUND);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteClient(@PathVariable Integer id){
        if(clientService.deleteClient(id)){
            return new ResponseEntity<>(true, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }
}
