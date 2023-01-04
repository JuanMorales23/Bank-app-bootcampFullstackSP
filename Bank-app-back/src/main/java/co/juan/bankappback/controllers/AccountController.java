package co.juan.bankappback.controllers;

import co.juan.bankappback.entities.Account;
import co.juan.bankappback.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts/{type}")
@CrossOrigin
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping
    public ResponseEntity<Account> createClient(@RequestBody Account client){
        return new ResponseEntity<>(accountService.createAccount(client), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Account>> getClients(){
        return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getClientById(@PathVariable Integer id){
        return accountService.findById(id).map(client -> {
            return new ResponseEntity<>(client, HttpStatus.FOUND);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteClient(@PathVariable Integer id){
        if(accountService.deleteAccount(id)){
            return new ResponseEntity<>(true, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }
}
