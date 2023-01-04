package co.juan.bankappback.services;

import co.juan.bankappback.entities.Account;

import java.util.List;
import java.util.Optional;

public interface AccountService {
    public Account createAccount(Account account);
    public Boolean deleteAccount(int id);
    public Optional<Account> findById(int id);
    public List<Account> findAll();
}
