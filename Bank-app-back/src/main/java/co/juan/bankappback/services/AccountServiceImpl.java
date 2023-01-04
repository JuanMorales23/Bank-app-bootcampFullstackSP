package co.juan.bankappback.services;

import co.juan.bankappback.entities.Account;
import co.juan.bankappback.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    AccountRepository accountRepository;
    @Override
    public Account createAccount(Account account) {
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
}
