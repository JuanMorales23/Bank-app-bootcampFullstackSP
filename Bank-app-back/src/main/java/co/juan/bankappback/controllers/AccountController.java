package co.juan.bankappback.controllers;

import co.juan.bankappback.entities.Account;
import co.juan.bankappback.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
@CrossOrigin
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account){
        return new ResponseEntity<>(accountService.createAccount(account), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Account>> getClients(){
        return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/cc")
    public ResponseEntity<List<Account>> getAllCheckingAccounts(){
        return new ResponseEntity<>(accountService.findAllAccountsByType("cc"), HttpStatus.OK);
    }

    @GetMapping("/ca")
    public ResponseEntity<List<Account>> getAllSavingsAccounts(){
        return new ResponseEntity<>(accountService.findAllAccountsByType("ca"), HttpStatus.OK);
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<Account> getAccountByAccountNumber(@PathVariable String accountNumber){
        return accountService.findByAccountNumber(accountNumber).map(account -> {
            return new ResponseEntity<>(account, HttpStatus.OK);
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
