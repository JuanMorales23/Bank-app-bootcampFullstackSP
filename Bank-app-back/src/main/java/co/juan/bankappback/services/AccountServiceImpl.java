package co.juan.bankappback.services;

import co.juan.bankappback.entities.Account;
import co.juan.bankappback.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.juan.bankappback.resources.Challenge1;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    AccountRepository accountRepository;
    @Override
    public Account createAccount(Account account) {
        String accountNumber ;
        account.setBalance((double) 0);
        account.setAvailableBalance((double) 0);
        account.setState(true);
        LocalDate currentDate = account.getCreationDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        if(account.getAccountType().equals("CC")){
            do{
                accountNumber = Challenge1.generateRandom("Tipo B");
            }while(accountRepository.findByAccountNumber(accountNumber).isPresent());
            account.setAccountNumber(accountNumber);
        }else if(account.getAccountType().equals("CA")){
            do{
                accountNumber = Challenge1.generateRandom("Tipo A");
            }while(accountRepository.findByAccountNumber(accountNumber).isPresent());
            account.setAccountNumber(accountNumber);
        }

        return accountRepository.save(account);
    }

    @Override
    public Boolean deleteAccount(int id) {
        return accountRepository.findById(id).map(account -> {
            accountRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

    @Override
    public Optional<Account> findById(int id) {
        return accountRepository.findById(id);
    }

    @Override
    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    @Override
    public Optional<Account> findByAccountNumber(String accountNumber) {
        return accountRepository.findByAccountNumber(accountNumber);
    }

    @Override
    public List<Account> findAllAccountsByType(String accountType) {
        return accountRepository.findByAccountType(accountType);
    }

}
