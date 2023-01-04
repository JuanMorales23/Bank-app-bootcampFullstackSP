package co.juan.bankappback.services;

import co.juan.bankappback.entities.Transaction;

import java.util.List;
import java.util.Optional;

public interface TransactionService {
    public Transaction createTransaction(Transaction transaction);
    public Boolean deleteTransaction(int id);
    public Optional<Transaction> findById(int id);
    public List<Transaction> findAll();
}
